import { z } from "zod";
export declare const createAgreementSchema: z.ZodObject<{
    clientId: z.ZodString;
    effectiveDate: z.ZodString;
    expiryDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    signedDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    commercialTerms: z.ZodOptional<z.ZodObject<{
        recruitmentFee: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        feeType: z.ZodOptional<z.ZodEnum<{
            FIXED: "FIXED";
            PERCENTAGE: "PERCENTAGE";
        }>>;
        paymentTermsDays: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        gstRatePercent: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        gstSplitMode: z.ZodOptional<z.ZodEnum<{
            CGST_SGST: "CGST_SGST";
            IGST: "IGST";
            NONE: "NONE";
        }>>;
    }, z.core.$strip>>;
    ownershipPeriodMonths: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    duplicateNotificationDays: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    replacementPeriodDays: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        DRAFT: "DRAFT";
        EXPIRED: "EXPIRED";
        TERMINATED: "TERMINATED";
    }>>;
    signedDocument: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>, z.ZodObject<{
        fileUrl: z.ZodString;
        fileName: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>, z.ZodNull]>>, z.ZodTransform<{
        fileUrl: string;
        fileName: string | undefined;
    } | null | undefined, string | {
        fileUrl: string;
        fileName: string | undefined;
    } | null | undefined>>;
}, z.core.$strip>;
export declare const updateAgreementSchema: z.ZodObject<{
    clientId: z.ZodOptional<z.ZodString>;
    effectiveDate: z.ZodOptional<z.ZodString>;
    expiryDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    signedDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    commercialTerms: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        recruitmentFee: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        feeType: z.ZodOptional<z.ZodEnum<{
            FIXED: "FIXED";
            PERCENTAGE: "PERCENTAGE";
        }>>;
        paymentTermsDays: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        gstRatePercent: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        gstSplitMode: z.ZodOptional<z.ZodEnum<{
            CGST_SGST: "CGST_SGST";
            IGST: "IGST";
            NONE: "NONE";
        }>>;
    }, z.core.$strip>>>;
    ownershipPeriodMonths: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    duplicateNotificationDays: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    replacementPeriodDays: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        DRAFT: "DRAFT";
        EXPIRED: "EXPIRED";
        TERMINATED: "TERMINATED";
    }>>>;
    signedDocument: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>, z.ZodObject<{
        fileUrl: z.ZodString;
        fileName: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>, z.ZodNull]>>, z.ZodTransform<{
        fileUrl: string;
        fileName: string | undefined;
    } | null | undefined, string | {
        fileUrl: string;
        fileName: string | undefined;
    } | null | undefined>>>;
}, z.core.$strip>;
export declare const agreementListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        agreementNumber: "agreementNumber";
        effectiveDate: "effectiveDate";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        DRAFT: "DRAFT";
        EXPIRED: "EXPIRED";
        TERMINATED: "TERMINATED";
    }>>;
    clientId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateAgreementInput = z.infer<typeof createAgreementSchema>;
export type UpdateAgreementInput = z.infer<typeof updateAgreementSchema>;
export type AgreementListQueryInput = z.infer<typeof agreementListQuerySchema>;
