import { z } from "zod";
export declare const uploadDocumentSchema: z.ZodObject<{
    employeeId: z.ZodPreprocess<z.ZodOptional<z.ZodString>>;
    name: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    type: z.ZodEnum<{
        other: "other";
        resume: "resume";
        offer_letter: "offer_letter";
        id_proof: "id_proof";
        education: "education";
        experience: "experience";
    }>;
    expiryDate: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateDocumentSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        other: "other";
        resume: "resume";
        offer_letter: "offer_letter";
        id_proof: "id_proof";
        education: "education";
        experience: "experience";
    }>>;
    expiryDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | null | undefined, string | null | undefined>>;
}, z.core.$strip>;
export declare const documentListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        type: "type";
        name: "name";
        createdAt: "createdAt";
        uploadedAt: "uploadedAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    employeeId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        other: "other";
        resume: "resume";
        offer_letter: "offer_letter";
        id_proof: "id_proof";
        education: "education";
        experience: "experience";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        expiring: "expiring";
        expired: "expired";
    }>>;
}, z.core.$strip>;
export type UploadDocumentInput = z.infer<typeof uploadDocumentSchema>;
export type UpdateDocumentInput = z.infer<typeof updateDocumentSchema>;
export type DocumentListQueryInput = z.infer<typeof documentListQuerySchema>;
