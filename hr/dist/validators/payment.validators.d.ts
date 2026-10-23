import { z } from "zod";
export declare const createPaymentSchema: z.ZodObject<{
    invoiceId: z.ZodString;
    amount: z.ZodCoercedNumber<unknown>;
    paymentDate: z.ZodOptional<z.ZodString>;
    paymentMethod: z.ZodOptional<z.ZodEnum<{
        BANK_TRANSFER: "BANK_TRANSFER";
        UPI: "UPI";
        NEFT: "NEFT";
        RTGS: "RTGS";
        CHEQUE: "CHEQUE";
        CASH: "CASH";
        CARD: "CARD";
    }>>;
    transactionReference: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        REVERSED: "REVERSED";
    }>>;
    remarks: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updatePaymentSchema: z.ZodObject<{
    paymentDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    paymentMethod: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        BANK_TRANSFER: "BANK_TRANSFER";
        UPI: "UPI";
        NEFT: "NEFT";
        RTGS: "RTGS";
        CHEQUE: "CHEQUE";
        CASH: "CASH";
        CARD: "CARD";
    }>>>;
    transactionReference: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        REVERSED: "REVERSED";
    }>>>;
    remarks: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    invoiceId: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const paymentListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        amount: "amount";
        paymentDate: "paymentDate";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    invoiceId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        REVERSED: "REVERSED";
    }>>;
    paymentMethod: z.ZodOptional<z.ZodEnum<{
        BANK_TRANSFER: "BANK_TRANSFER";
        UPI: "UPI";
        NEFT: "NEFT";
        RTGS: "RTGS";
        CHEQUE: "CHEQUE";
        CASH: "CASH";
        CARD: "CARD";
    }>>;
}, z.core.$strip>;
export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
export type UpdatePaymentInput = z.infer<typeof updatePaymentSchema>;
export type PaymentListQueryInput = z.infer<typeof paymentListQuerySchema>;
