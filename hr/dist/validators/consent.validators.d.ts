import { z } from "zod";
export declare const createConsentSchema: z.ZodObject<{
    candidateId: z.ZodString;
    mandateId: z.ZodString;
    consentGiven: z.ZodOptional<z.ZodBoolean>;
    consentDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    consentMethod: z.ZodOptional<z.ZodEnum<{
        OTHER: "OTHER";
        FORM: "FORM";
        EMAIL: "EMAIL";
        WHATSAPP: "WHATSAPP";
        VERBAL: "VERBAL";
    }>>;
    consentPurpose: z.ZodOptional<z.ZodEnum<{
        OTHER: "OTHER";
        SOURCING: "SOURCING";
        SUBMISSION: "SUBMISSION";
        INTERVIEW: "INTERVIEW";
        BACKGROUND_CHECK: "BACKGROUND_CHECK";
        TALENT_POOL: "TALENT_POOL";
    }>>;
    consentDocument: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>, z.ZodObject<{
        fileUrl: z.ZodString;
        fileName: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>, z.ZodNull]>>, z.ZodTransform<{
        fileUrl: string;
        fileName: string | undefined;
    } | null | undefined, string | {
        fileUrl: string;
        fileName: string | undefined;
    } | null | undefined>>;
    expiryDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateConsentSchema: z.ZodObject<{
    candidateId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
    consentGiven: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    consentDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    consentMethod: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        OTHER: "OTHER";
        FORM: "FORM";
        EMAIL: "EMAIL";
        WHATSAPP: "WHATSAPP";
        VERBAL: "VERBAL";
    }>>>;
    consentPurpose: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        OTHER: "OTHER";
        SOURCING: "SOURCING";
        SUBMISSION: "SUBMISSION";
        INTERVIEW: "INTERVIEW";
        BACKGROUND_CHECK: "BACKGROUND_CHECK";
        TALENT_POOL: "TALENT_POOL";
    }>>>;
    consentDocument: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>, z.ZodObject<{
        fileUrl: z.ZodString;
        fileName: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>, z.ZodNull]>>, z.ZodTransform<{
        fileUrl: string;
        fileName: string | undefined;
    } | null | undefined, string | {
        fileUrl: string;
        fileName: string | undefined;
    } | null | undefined>>>;
    expiryDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    withdrawnAt: z.ZodNullable<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
}, z.core.$strip>;
export declare const consentListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        consentDate: "consentDate";
        consentPurpose: "consentPurpose";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    candidateId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
    consentGiven: z.ZodOptional<z.ZodEnum<{
        true: "true";
        false: "false";
    }>>;
}, z.core.$strip>;
export type CreateConsentInput = z.infer<typeof createConsentSchema>;
export type UpdateConsentInput = z.infer<typeof updateConsentSchema>;
export type ConsentListQueryInput = z.infer<typeof consentListQuerySchema>;
