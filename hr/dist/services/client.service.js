import { CLIENT_KYC_LABELS, CLIENT_ONBOARDING_LABELS, CLIENT_STATUS_LABELS, } from "../constants/clients.js";
import { MESSAGES } from "../constants/messages.js";
import { CandidateSubmissionModel } from "../models/candidate-submission.model.js";
import { ClientAgreementModel } from "../models/client-agreement.model.js";
import { ClientModel } from "../models/client.model.js";
import { GuaranteeFollowUpModel } from "../models/guarantee-follow-up.model.js";
import { InvoiceModel } from "../models/invoice.model.js";
import { ReplacementCaseModel } from "../models/replacement-case.model.js";
import { JoiningModel } from "../models/joining.model.js";
import { RecruitmentMandateModel } from "../models/recruitment-mandate.model.js";
import { recordActivity } from "../utils/activity.js";
import { recordAudit } from "../utils/audit.js";
import { AppError } from "../utils/app-error.js";
import { parseObjectId } from "../utils/object-id.js";
import { paginationMeta, paginationSkip } from "../utils/pagination.js";
import { applySearch, mongoSort, resolvedSearch } from "../utils/search.js";
const CLIENT_POPULATE = [
    { path: "createdBy", select: "name email" },
    { path: "kycEvidence.reviewedBy", select: "name email" },
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
function dateFromKey(value) {
    return value ? new Date(`${value}T00:00:00.000Z`) : null;
}
function toContactPerson(value) {
    if (!value || typeof value !== "object") {
        return null;
    }
    const person = value;
    return {
        id: String(person._id ?? person.id ?? ""),
        name: String(person.name ?? ""),
        designation: String(person.designation ?? ""),
        email: String(person.email ?? ""),
        phone: String(person.phone ?? ""),
    };
}
function toKycEvidence(value) {
    if (!value || typeof value !== "object")
        return null;
    const evidence = value;
    const reviewer = evidence.reviewedBy && typeof evidence.reviewedBy === "object"
        ? evidence.reviewedBy
        : null;
    return {
        id: String(evidence._id ?? evidence.id ?? ""),
        documentType: String(evidence.documentType ?? ""),
        fileName: String(evidence.fileName ?? ""),
        evidenceUrl: String(evidence.evidenceUrl ?? ""),
        status: String(evidence.status ?? "PENDING"),
        reviewNotes: String(evidence.reviewNotes ?? ""),
        reviewedAt: isoOf(evidence.reviewedAt),
        reviewedBy: reviewer ? { id: String(reviewer._id ?? ""), name: String(reviewer.name ?? ""), email: String(reviewer.email ?? "") } : null,
    };
}
function toCreatedBy(value) {
    if (!value)
        return null;
    if (typeof value === "object" && value !== null && "name" in value) {
        const user = value;
        return {
            id: String(user._id),
            name: user.name,
            email: user.email ?? "",
        };
    }
    return { id: String(value), name: "", email: "" };
}
export function toPublicClient(doc) {
    const status = String(doc.status ?? "LEAD") || "LEAD";
    const onboardingStatus = String(doc.onboardingStatus ?? "PENDING") || "PENDING";
    const KYCStatus = String(doc.KYCStatus ?? "PENDING") || "PENDING";
    const registeredAddress = String(doc.registeredAddress || doc.address || "");
    return {
        id: String(doc._id ?? doc.id),
        organizationId: asId(doc.organizationId),
        companyName: String(doc.companyName ?? ""),
        legalEntityName: String(doc.legalEntityName ?? ""),
        industry: String(doc.industry ?? ""),
        website: String(doc.website ?? ""),
        GSTNumber: String(doc.GSTNumber ?? ""),
        PANNumber: String(doc.PANNumber ?? ""),
        registeredAddress,
        address: registeredAddress,
        city: String(doc.city ?? ""),
        state: String(doc.state ?? ""),
        country: String(doc.country ?? ""),
        contactPersons: Array.isArray(doc.contactPersons)
            ? doc.contactPersons
                .map(toContactPerson)
                .filter((person) => person !== null)
            : [],
        status,
        statusLabel: CLIENT_STATUS_LABELS[status] ?? status,
        onboardingStatus,
        onboardingStatusLabel: CLIENT_ONBOARDING_LABELS[onboardingStatus] ?? onboardingStatus,
        KYCStatus,
        KYCStatusLabel: CLIENT_KYC_LABELS[KYCStatus] ?? KYCStatus,
        kycEvidence: Array.isArray(doc.kycEvidence)
            ? doc.kycEvidence.map(toKycEvidence).filter((item) => item !== null)
            : [],
        invoiceSubmissionProcess: String(doc.invoiceSubmissionProcess ?? ""),
        purchaseOrderRequired: Boolean(doc.purchaseOrderRequired),
        purchaseOrderRequirements: String(doc.purchaseOrderRequirements ?? ""),
        vendorCode: String(doc.vendorCode ?? ""),
        paymentCycleDays: Number(doc.paymentCycleDays ?? 30),
        authorizedSignatory: String(doc.authorizedSignatory ?? ""),
        escalationContact: String(doc.escalationContact ?? ""),
        termsApproved: Boolean(doc.termsApproved),
        termsApprovedAt: isoOf(doc.termsApprovedAt),
        notes: String(doc.notes ?? ""),
        createdBy: toCreatedBy(doc.createdBy),
        createdAt: isoOf(doc.createdAt),
        updatedAt: isoOf(doc.updatedAt),
    };
}
async function requireClient(organizationId, id) {
    parseObjectId(id);
    const client = await ClientModel.findOne({ _id: id, organizationId }).populate([...CLIENT_POPULATE]);
    if (!client) {
        throw AppError.notFound(MESSAGES.CLIENT_NOT_FOUND);
    }
    return client;
}
function contactPersonsOf(input) {
    if (!input)
        return [];
    return input.map((person) => ({
        name: person.name,
        designation: person.designation ?? "",
        email: person.email ?? "",
        phone: person.phone ?? "",
    }));
}
function isDuplicateKey(error, field) {
    if (typeof error !== "object" || error === null || !("code" in error) || error.code !== 11000) {
        return false;
    }
    const key = "keyPattern" in error && error.keyPattern && typeof error.keyPattern === "object"
        ? error.keyPattern
        : null;
    return Boolean(key && field in key);
}
function throwDuplicate(error) {
    if (isDuplicateKey(error, "GSTNumber")) {
        throw AppError.conflict(MESSAGES.CLIENT_GST_IN_USE);
    }
    if (isDuplicateKey(error, "PANNumber")) {
        throw AppError.conflict(MESSAGES.CLIENT_PAN_IN_USE);
    }
    throw error;
}
function addressOf(input) {
    return input.registeredAddress ?? input.address ?? "";
}
function assertOnboardingComplete(client) {
    const missing = [];
    if (client.KYCStatus !== "VERIFIED")
        missing.push("KYC verification");
    if (!client.kycEvidence?.some((item) => item.status === "VERIFIED" && item.evidenceUrl)) {
        missing.push("reviewed KYC evidence document");
    }
    if (!client.termsApproved)
        missing.push("KYC and commercial terms approval");
    if (!client.invoiceSubmissionProcess?.trim())
        missing.push("invoice submission process");
    if (!client.authorizedSignatory?.trim())
        missing.push("authorized signatory");
    if (!client.escalationContact?.trim())
        missing.push("escalation contact");
    if (client.purchaseOrderRequired && !client.purchaseOrderRequirements?.trim()) {
        missing.push("PO/vendor-code requirements");
    }
    if (missing.length) {
        throw AppError.badRequest(`Complete client onboarding checklist: ${missing.join(", ")}`);
    }
}
export async function listClients(auth, query) {
    const filter = { organizationId: auth.organizationId };
    if (query.status) {
        filter.status = query.status;
    }
    if (query.onboardingStatus) {
        filter.onboardingStatus = query.onboardingStatus;
    }
    if (query.KYCStatus) {
        filter.KYCStatus = query.KYCStatus;
    }
    applySearch(filter, ["companyName", "legalEntityName", "GSTNumber", "PANNumber", "city"], resolvedSearch(query));
    const [items, total] = await Promise.all([
        ClientModel.find(filter)
            .populate([...CLIENT_POPULATE])
            .sort(mongoSort(query, { createdAt: -1 }))
            .skip(paginationSkip(query))
            .limit(query.limit)
            .lean(),
        ClientModel.countDocuments(filter),
    ]);
    return {
        items: items.map((item) => toPublicClient(item)),
        ...paginationMeta(total, query),
    };
}
export async function getClient(auth, id) {
    const client = await requireClient(auth.organizationId, id);
    return toPublicClient(client.toObject());
}
export async function createClient(auth, input) {
    const address = addressOf(input);
    const isKycReviewer = auth.role === "HR_ADMIN" || auth.role === "SUPER_ADMIN";
    if (!isKycReviewer && (input.KYCStatus === "VERIFIED" || input.kycEvidence?.some((item) => item.status === "VERIFIED" || item.status === "REJECTED"))) {
        throw AppError.forbidden("Only HR admins or super admins can review KYC evidence");
    }
    if (input.KYCStatus === "VERIFIED" && !input.kycEvidence?.some((item) => item.status === "VERIFIED" && item.evidenceUrl)) {
        throw AppError.badRequest("Add and verify at least one KYC evidence document before marking KYC verified");
    }
    if (input.onboardingStatus === "COMPLETED")
        assertOnboardingComplete(input);
    try {
        const created = await ClientModel.create({
            organizationId: auth.organizationId,
            companyName: input.companyName,
            legalEntityName: input.legalEntityName ?? "",
            industry: input.industry ?? "",
            website: input.website ?? "",
            GSTNumber: input.GSTNumber ?? "",
            PANNumber: input.PANNumber ?? "",
            registeredAddress: address,
            address,
            city: input.city ?? "",
            state: input.state ?? "",
            country: input.country ?? "",
            contactPersons: contactPersonsOf(input.contactPersons),
            status: input.status ?? "LEAD",
            onboardingStatus: input.onboardingStatus ?? "PENDING",
            KYCStatus: input.KYCStatus ?? "PENDING",
            kycEvidence: (input.kycEvidence ?? []).map((item) => ({
                ...item,
                status: isKycReviewer ? item.status ?? "PENDING" : "PENDING",
                reviewedAt: isKycReviewer && item.status === "VERIFIED" ? new Date() : null,
                reviewedBy: isKycReviewer && item.status === "VERIFIED" ? auth.userId : null,
            })),
            invoiceSubmissionProcess: input.invoiceSubmissionProcess ?? "",
            purchaseOrderRequired: input.purchaseOrderRequired ?? false,
            purchaseOrderRequirements: input.purchaseOrderRequirements ?? "",
            vendorCode: input.vendorCode ?? "",
            paymentCycleDays: input.paymentCycleDays ?? 30,
            authorizedSignatory: input.authorizedSignatory ?? "",
            escalationContact: input.escalationContact ?? "",
            termsApproved: input.termsApproved ?? false,
            termsApprovedAt: input.termsApproved
                ? (dateFromKey(input.termsApprovedAt) ?? new Date())
                : null,
            notes: input.notes ?? "",
            createdBy: auth.userId,
        });
        await created.populate([...CLIENT_POPULATE]);
        const publicClient = toPublicClient(created.toObject());
        await recordActivity(auth.organizationId, {
            title: `${created.companyName} added as a client`,
            detail: created.industry || created.status,
            tone: "success",
        });
        await recordAudit(auth, {
            module: "CLIENTS",
            action: "CREATED",
            recordId: publicClient.id,
            newData: publicClient,
        });
        return publicClient;
    }
    catch (error) {
        throwDuplicate(error);
    }
}
export async function updateClient(auth, id, input) {
    const client = await requireClient(auth.organizationId, id);
    const previousData = toPublicClient(client.toObject());
    if (input.companyName !== undefined)
        client.companyName = input.companyName;
    if (input.legalEntityName !== undefined)
        client.legalEntityName = input.legalEntityName ?? "";
    if (input.industry !== undefined)
        client.industry = input.industry ?? "";
    if (input.website !== undefined)
        client.website = input.website ?? "";
    if (input.GSTNumber !== undefined)
        client.GSTNumber = input.GSTNumber ?? "";
    if (input.PANNumber !== undefined)
        client.PANNumber = input.PANNumber ?? "";
    if (input.contactPersons !== undefined) {
        client.set("contactPersons", contactPersonsOf(input.contactPersons));
    }
    if (input.registeredAddress !== undefined || input.address !== undefined) {
        const address = addressOf(input);
        client.registeredAddress = address;
        client.address = address;
    }
    if (input.city !== undefined)
        client.city = input.city ?? "";
    if (input.state !== undefined)
        client.state = input.state ?? "";
    if (input.country !== undefined)
        client.country = input.country ?? "";
    if (input.status !== undefined)
        client.status = input.status;
    if (input.onboardingStatus !== undefined)
        client.onboardingStatus = input.onboardingStatus;
    if (input.KYCStatus !== undefined) {
        if (input.KYCStatus === "VERIFIED" && client.KYCStatus !== "VERIFIED" && auth.role !== "HR_ADMIN" && auth.role !== "SUPER_ADMIN") {
            throw AppError.forbidden("Only HR admins or super admins can verify client KYC");
        }
        client.KYCStatus = input.KYCStatus;
    }
    if (input.kycEvidence !== undefined) {
        const isKycReviewer = auth.role === "HR_ADMIN" || auth.role === "SUPER_ADMIN";
        const oldRows = new Map((client.kycEvidence ?? []).map((row) => [String(row._id), row]));
        const attemptsNewReview = input.kycEvidence.some((item) => {
            if (item.status !== "VERIFIED" && item.status !== "REJECTED")
                return false;
            const old = oldRows.get(item.id ?? "");
            return !old || old.status !== item.status || String(old.evidenceUrl) !== item.evidenceUrl;
        });
        if (!isKycReviewer && attemptsNewReview) {
            throw AppError.forbidden("Only HR admins or super admins can review KYC evidence");
        }
        client.set("kycEvidence", input.kycEvidence.map((item) => {
            const old = oldRows.get(item.id ?? "");
            const canPreserveReview = Boolean(!isKycReviewer && old && old.status === item.status && String(old.evidenceUrl) === item.evidenceUrl);
            const status = isKycReviewer ? item.status ?? "PENDING" : canPreserveReview ? String(old?.status) : "PENDING";
            const approved = isKycReviewer && status === "VERIFIED";
            return {
                documentType: item.documentType,
                fileName: item.fileName ?? "",
                evidenceUrl: item.evidenceUrl,
                status,
                reviewNotes: item.reviewNotes ?? "",
                reviewedAt: approved ? new Date() : canPreserveReview ? old?.reviewedAt ?? null : null,
                reviewedBy: approved ? auth.userId : canPreserveReview ? old?.reviewedBy ?? null : null,
            };
        }));
    }
    if (input.invoiceSubmissionProcess !== undefined)
        client.invoiceSubmissionProcess = input.invoiceSubmissionProcess ?? "";
    if (input.purchaseOrderRequired !== undefined)
        client.purchaseOrderRequired = input.purchaseOrderRequired;
    if (input.purchaseOrderRequirements !== undefined)
        client.purchaseOrderRequirements = input.purchaseOrderRequirements ?? "";
    if (input.vendorCode !== undefined)
        client.vendorCode = input.vendorCode ?? "";
    if (input.paymentCycleDays !== undefined)
        client.paymentCycleDays = input.paymentCycleDays;
    if (input.authorizedSignatory !== undefined)
        client.authorizedSignatory = input.authorizedSignatory ?? "";
    if (input.escalationContact !== undefined)
        client.escalationContact = input.escalationContact ?? "";
    if (input.termsApproved !== undefined) {
        client.termsApproved = input.termsApproved;
        client.termsApprovedAt = input.termsApproved
            ? (dateFromKey(input.termsApprovedAt) ?? client.termsApprovedAt ?? new Date())
            : null;
    }
    if (input.termsApprovedAt !== undefined && input.termsApproved) {
        client.termsApprovedAt = dateFromKey(input.termsApprovedAt);
    }
    if (input.notes !== undefined)
        client.notes = input.notes ?? "";
    if (client.KYCStatus === "VERIFIED" && !client.kycEvidence?.some((item) => item.status === "VERIFIED" && item.evidenceUrl && item.reviewedAt && item.reviewedBy)) {
        throw AppError.badRequest("KYC can be verified only after an HR admin approves linked evidence");
    }
    if (client.onboardingStatus === "COMPLETED")
        assertOnboardingComplete(client);
    try {
        await client.save();
    }
    catch (error) {
        throwDuplicate(error);
    }
    await client.populate([...CLIENT_POPULATE]);
    const publicClient = toPublicClient(client.toObject());
    await recordAudit(auth, {
        module: "CLIENTS",
        action: "UPDATED",
        recordId: publicClient.id,
        previousData,
        newData: publicClient,
    });
    return publicClient;
}
export async function deleteClient(auth, id) {
    parseObjectId(id);
    const linked = await RecruitmentMandateModel.exists({
        organizationId: auth.organizationId,
        clientId: id,
    });
    if (linked) {
        throw AppError.conflict(MESSAGES.CLIENT_HAS_MANDATES);
    }
    const hasAgreements = await ClientAgreementModel.exists({
        organizationId: auth.organizationId,
        clientId: id,
    });
    if (hasAgreements) {
        throw AppError.conflict(MESSAGES.CLIENT_HAS_AGREEMENTS);
    }
    const hasSubmissions = await CandidateSubmissionModel.exists({
        organizationId: auth.organizationId,
        clientId: id,
    });
    if (hasSubmissions) {
        throw AppError.conflict(MESSAGES.CLIENT_HAS_SUBMISSIONS);
    }
    const hasJoinings = await JoiningModel.exists({
        organizationId: auth.organizationId,
        clientId: id,
    });
    if (hasJoinings) {
        throw AppError.conflict(MESSAGES.CLIENT_HAS_JOININGS);
    }
    const hasInvoices = await InvoiceModel.exists({
        organizationId: auth.organizationId,
        clientId: id,
    });
    if (hasInvoices) {
        throw AppError.conflict(MESSAGES.CLIENT_HAS_INVOICES);
    }
    const hasGuarantees = await GuaranteeFollowUpModel.exists({
        organizationId: auth.organizationId,
        clientId: id,
    });
    if (hasGuarantees) {
        throw AppError.conflict(MESSAGES.CLIENT_HAS_GUARANTEES);
    }
    const hasReplacements = await ReplacementCaseModel.exists({
        organizationId: auth.organizationId,
        clientId: id,
    });
    if (hasReplacements) {
        throw AppError.conflict(MESSAGES.CLIENT_HAS_REPLACEMENTS);
    }
    const deleted = await ClientModel.findOneAndDelete({
        _id: id,
        organizationId: auth.organizationId,
    });
    if (!deleted) {
        throw AppError.notFound(MESSAGES.CLIENT_NOT_FOUND);
    }
}
//# sourceMappingURL=client.service.js.map