import { z } from "zod";
export declare const createInvoiceSchema: z.ZodObject<{
    clientId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    joiningId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    invoiceDate: z.ZodOptional<z.ZodString>;
    dueDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    professionalFee: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    gstRatePercent: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    gstSplitMode: z.ZodOptional<z.ZodEnum<{
        CGST_SGST: "CGST_SGST";
        IGST: "IGST";
        NONE: "NONE";
    }>>;
    amount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        SENT: "SENT";
        ISSUED: "ISSUED";
        PARTIALLY_PAID: "PARTIALLY_PAID";
        PAID: "PAID";
        OVERDUE: "OVERDUE";
        CANCELLED: "CANCELLED";
    }>>;
    remarks: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateInvoiceSchema: z.ZodObject<{
    clientId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    joiningId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    invoiceDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    dueDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    gstRatePercent: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    gstSplitMode: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        CGST_SGST: "CGST_SGST";
        IGST: "IGST";
        NONE: "NONE";
    }>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        SENT: "SENT";
        ISSUED: "ISSUED";
        PARTIALLY_PAID: "PARTIALLY_PAID";
        PAID: "PAID";
        OVERDUE: "OVERDUE";
        CANCELLED: "CANCELLED";
    }>>>;
    remarks: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    amount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    professionalFee: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const invoiceListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        amount: "amount";
        invoiceNumber: "invoiceNumber";
        invoiceDate: "invoiceDate";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    clientId: z.ZodOptional<z.ZodString>;
    joiningId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        SENT: "SENT";
        ISSUED: "ISSUED";
        PARTIALLY_PAID: "PARTIALLY_PAID";
        PAID: "PAID";
        OVERDUE: "OVERDUE";
        CANCELLED: "CANCELLED";
    }>>;
}, z.core.$strip>;
export type CreateInvoiceInput = z.infer<typeof createInvoiceSchema>;
export type UpdateInvoiceInput = z.infer<typeof updateInvoiceSchema>;
export type InvoiceListQueryInput = z.infer<typeof invoiceListQuerySchema>;
