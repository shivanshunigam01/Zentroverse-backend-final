import { isCompletedPaymentStatus, PAYMENT_METHOD_LABELS, PAYMENT_STATUS_LABELS, } from "../constants/payments.js";
import { MESSAGES } from "../constants/messages.js";
import { InvoicePaymentModel } from "../models/invoice-payment.model.js";
import { InvoiceModel } from "../models/invoice.model.js";
import { recordActivity } from "../utils/activity.js";
import { recordAudit } from "../utils/audit.js";
import { AppError } from "../utils/app-error.js";
import { utcDateFromKey } from "../utils/dates.js";
import { parseObjectId } from "../utils/object-id.js";
import { paginationMeta, paginationSkip } from "../utils/pagination.js";
import { applySearch, mongoSort, resolvedSearch } from "../utils/search.js";
import { recalculateInvoiceBalances, roundMoney, toPublicInvoice } from "./invoice.service.js";
const PAYMENT_POPULATE = [
    { path: "invoiceId", select: "invoiceNumber amount paidAmount outstandingAmount status clientId" },
];
function asId(value) {
    if (!value)
        return "";
    if (typeof value === "object" && value !== null && "_id" in value) {
        return String(value._id);
    }
    return String(value);
}
function isoOf(value) {
    if (value instanceof Date)
        return value.toISOString();
    if (typeof value === "string" && value)
        return new Date(value).toISOString();
    return "";
}
function dateKeyOf(value) {
    const iso = isoOf(value);
    return iso ? iso.slice(0, 10) : "";
}
function dateFromKey(value) {
    if (!value)
        return null;
    return utcDateFromKey(value);
}
function toInvoiceRef(value) {
    if (!value)
        return null;
    if (typeof value === "object" && value !== null && ("invoiceNumber" in value || "_id" in value)) {
        const invoice = value;
        return {
            id: String(invoice._id),
            invoiceNumber: invoice.invoiceNumber ?? "",
            amount: roundMoney(Number(invoice.amount ?? 0)),
            paidAmount: roundMoney(Number(invoice.paidAmount ?? 0)),
            outstandingAmount: roundMoney(Number(invoice.outstandingAmount ?? 0)),
            status: invoice.status ?? "",
        };
    }
    return {
        id: String(value),
        invoiceNumber: "",
        amount: 0,
        paidAmount: 0,
        outstandingAmount: 0,
        status: "",
    };
}
export function toPublicPayment(doc) {
    const invoice = toInvoiceRef(doc.invoiceId);
    const paymentMethod = String(doc.paymentMethod ?? "BANK_TRANSFER") || "BANK_TRANSFER";
    const status = String(doc.status ?? "COMPLETED") || "COMPLETED";
    return {
        id: String(doc._id ?? doc.id),
        organizationId: asId(doc.organizationId),
        invoiceId: invoice?.id ?? asId(doc.invoiceId),
        invoice,
        amount: roundMoney(Number(doc.amount ?? 0)),
        paymentDate: dateKeyOf(doc.paymentDate),
        paymentMethod,
        paymentMethodLabel: PAYMENT_METHOD_LABELS[paymentMethod] ?? paymentMethod,
        transactionReference: String(doc.transactionReference ?? ""),
        status,
        statusLabel: PAYMENT_STATUS_LABELS[status] ?? status,
        remarks: String(doc.remarks ?? ""),
        createdAt: isoOf(doc.createdAt),
        updatedAt: isoOf(doc.updatedAt),
    };
}
async function requirePayment(organizationId, id) {
    parseObjectId(id);
    const payment = await InvoicePaymentModel.findOne({ _id: id, organizationId }).populate([
        ...PAYMENT_POPULATE,
    ]);
    if (!payment) {
        throw AppError.notFound(MESSAGES.PAYMENT_NOT_FOUND);
    }
    return payment;
}
async function assertInvoice(organizationId, invoiceId) {
    parseObjectId(invoiceId, "Invalid invoice");
    const invoice = await InvoiceModel.findOne({ _id: invoiceId, organizationId }).select("_id invoiceNumber amount paidAmount outstandingAmount status");
    if (!invoice) {
        throw AppError.badRequest(MESSAGES.INVOICE_NOT_FOUND);
    }
    if (invoice.status === "CANCELLED") {
        throw AppError.badRequest(MESSAGES.INVOICE_CANCELLED);
    }
    return invoice;
}
async function assertWithinOutstanding(organizationId, invoiceId, nextAmount, excludePaymentId) {
    const invoice = await InvoiceModel.findOne({ _id: invoiceId, organizationId }).select("amount");
    if (!invoice) {
        throw AppError.badRequest(MESSAGES.INVOICE_NOT_FOUND);
    }
    const paid = await InvoicePaymentModel.aggregate([
        {
            $match: {
                organizationId: invoice.organizationId,
                invoiceId: invoice._id,
                status: "COMPLETED",
                ...(excludePaymentId ? { _id: { $ne: excludePaymentId } } : {}),
            },
        },
        { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    const paidWithoutThis = roundMoney(paid[0]?.total ?? 0);
    const outstanding = roundMoney(Math.max(0, roundMoney(Number(invoice.amount)) - paidWithoutThis));
    if (roundMoney(nextAmount) - outstanding > 0.009) {
        throw AppError.badRequest(MESSAGES.PAYMENT_EXCEEDS_OUTSTANDING);
    }
}
export async function listPayments(auth, query) {
    const filter = { organizationId: auth.organizationId };
    if (query.invoiceId) {
        parseObjectId(query.invoiceId, "Invalid invoice");
        filter.invoiceId = query.invoiceId;
    }
    if (query.status)
        filter.status = query.status;
    if (query.paymentMethod)
        filter.paymentMethod = query.paymentMethod;
    applySearch(filter, ["transactionReference", "remarks"], resolvedSearch(query));
    const [items, total] = await Promise.all([
        InvoicePaymentModel.find(filter)
            .populate([...PAYMENT_POPULATE])
            .sort(mongoSort(query, { paymentDate: -1, createdAt: -1 }))
            .skip(paginationSkip(query))
            .limit(query.limit)
            .lean(),
        InvoicePaymentModel.countDocuments(filter),
    ]);
    return {
        items: items.map((item) => toPublicPayment(item)),
        ...paginationMeta(total, query),
    };
}
export async function getPayment(auth, id) {
    const payment = await requirePayment(auth.organizationId, id);
    return toPublicPayment(payment.toObject());
}
export async function createPayment(auth, input) {
    const invoice = await assertInvoice(auth.organizationId, input.invoiceId);
    const status = input.status ?? "COMPLETED";
    const amount = roundMoney(input.amount);
    if (isCompletedPaymentStatus(status)) {
        await assertWithinOutstanding(auth.organizationId, String(invoice._id), amount);
    }
    const created = await InvoicePaymentModel.create({
        organizationId: auth.organizationId,
        invoiceId: invoice._id,
        amount,
        paymentDate: dateFromKey(input.paymentDate) ?? new Date(),
        paymentMethod: input.paymentMethod ?? "BANK_TRANSFER",
        transactionReference: input.transactionReference ?? "",
        status,
        remarks: input.remarks ?? "",
    });
    await recalculateInvoiceBalances(auth.organizationId, String(invoice._id));
    await created.populate([...PAYMENT_POPULATE]);
    const publicPayment = toPublicPayment(created.toObject());
    await recordActivity(auth.organizationId, {
        title: `Payment recorded for ${invoice.invoiceNumber}`,
        detail: `${amount} · ${status}`,
        tone: "success",
    });
    await recordAudit(auth, {
        module: "PAYMENTS",
        action: "CREATED",
        recordId: publicPayment.id,
        newData: publicPayment,
    });
    return publicPayment;
}
export async function updatePayment(auth, id, input) {
    const payment = await requirePayment(auth.organizationId, id);
    const previousInvoiceId = asId(payment.invoiceId);
    if (input.invoiceId !== undefined) {
        const invoice = await assertInvoice(auth.organizationId, input.invoiceId);
        payment.set("invoiceId", invoice._id);
    }
    const invoice = await assertInvoice(auth.organizationId, asId(payment.invoiceId));
    if (input.amount !== undefined)
        payment.amount = roundMoney(input.amount);
    if (input.paymentDate !== undefined) {
        payment.paymentDate = dateFromKey(input.paymentDate) ?? payment.paymentDate;
    }
    if (input.paymentMethod !== undefined)
        payment.paymentMethod = input.paymentMethod;
    if (input.transactionReference !== undefined) {
        payment.transactionReference = input.transactionReference ?? "";
    }
    if (input.status !== undefined)
        payment.status = input.status;
    if (input.remarks !== undefined)
        payment.remarks = input.remarks ?? "";
    const nextStatus = payment.status || "COMPLETED";
    if (isCompletedPaymentStatus(nextStatus)) {
        await assertWithinOutstanding(auth.organizationId, String(invoice._id), Number(payment.amount), id);
    }
    await payment.save();
    await recalculateInvoiceBalances(auth.organizationId, String(invoice._id));
    if (previousInvoiceId && previousInvoiceId !== String(invoice._id)) {
        await recalculateInvoiceBalances(auth.organizationId, previousInvoiceId);
    }
    await payment.populate([...PAYMENT_POPULATE]);
    return toPublicPayment(payment.toObject());
}
export async function deletePayment(auth, id) {
    parseObjectId(id);
    const deleted = await InvoicePaymentModel.findOneAndDelete({
        _id: id,
        organizationId: auth.organizationId,
    });
    if (!deleted) {
        throw AppError.notFound(MESSAGES.PAYMENT_NOT_FOUND);
    }
    await recalculateInvoiceBalances(auth.organizationId, String(deleted.invoiceId));
}
export { toPublicInvoice };
//# sourceMappingURL=payment.service.js.map