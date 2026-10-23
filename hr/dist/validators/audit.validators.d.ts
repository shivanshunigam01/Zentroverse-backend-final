import { z } from "zod";
export declare const auditListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        module: "module";
        action: "action";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    module: z.ZodOptional<z.ZodEnum<{
        CLIENTS: "CLIENTS";
        AGREEMENTS: "AGREEMENTS";
        MANDATES: "MANDATES";
        CANDIDATES: "CANDIDATES";
        CONSENTS: "CONSENTS";
        EVALUATIONS: "EVALUATIONS";
        SUBMISSIONS: "SUBMISSIONS";
        INTERVIEWS: "INTERVIEWS";
        OFFERS: "OFFERS";
        JOININGS: "JOININGS";
        INVOICES: "INVOICES";
        PAYMENTS: "PAYMENTS";
        GUARANTEES: "GUARANTEES";
        REPLACEMENTS: "REPLACEMENTS";
    }>>;
    action: z.ZodOptional<z.ZodEnum<{
        CREATED: "CREATED";
        UPDATED: "UPDATED";
        STATUS_CHANGED: "STATUS_CHANGED";
        SUBMITTED: "SUBMITTED";
        ACCEPTED: "ACCEPTED";
        JOINED: "JOINED";
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
        OVERRIDE: "OVERRIDE";
        GENERATED: "GENERATED";
    }>>;
    userId: z.ZodOptional<z.ZodString>;
    recordId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AuditListQueryInput = z.infer<typeof auditListQuerySchema>;
