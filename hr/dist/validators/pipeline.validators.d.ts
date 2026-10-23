import { z } from "zod";
export declare const pipelineListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    mandateId: z.ZodOptional<z.ZodString>;
    recruiterId: z.ZodOptional<z.ZodString>;
    stage: z.ZodOptional<z.ZodEnum<{
        SUBMITTED: "SUBMITTED";
        JOINED: "JOINED";
        CLOSED: "CLOSED";
        INTERVIEW: "INTERVIEW";
        SOURCED: "SOURCED";
        CONSENT_PENDING: "CONSENT_PENDING";
        CONSENT_RECEIVED: "CONSENT_RECEIVED";
        EVALUATED: "EVALUATED";
        DUPLICATE_REVIEW: "DUPLICATE_REVIEW";
        OFFER: "OFFER";
        OFFER_ACCEPTED: "OFFER_ACCEPTED";
        NOT_JOINED: "NOT_JOINED";
        GUARANTEE: "GUARANTEE";
        REPLACEMENT: "REPLACEMENT";
    }>>;
}, z.core.$strip>;
export declare const pipelineTransitionSchema: z.ZodObject<{
    candidateId: z.ZodString;
    mandateId: z.ZodString;
    targetStage: z.ZodEnum<{
        SUBMITTED: "SUBMITTED";
        JOINED: "JOINED";
        CLOSED: "CLOSED";
        INTERVIEW: "INTERVIEW";
        SOURCED: "SOURCED";
        CONSENT_PENDING: "CONSENT_PENDING";
        CONSENT_RECEIVED: "CONSENT_RECEIVED";
        EVALUATED: "EVALUATED";
        DUPLICATE_REVIEW: "DUPLICATE_REVIEW";
        OFFER: "OFFER";
        OFFER_ACCEPTED: "OFFER_ACCEPTED";
        NOT_JOINED: "NOT_JOINED";
        GUARANTEE: "GUARANTEE";
        REPLACEMENT: "REPLACEMENT";
    }>;
}, z.core.$strip>;
export type PipelineListQueryInput = z.infer<typeof pipelineListQuerySchema>;
export type PipelineTransitionInput = z.infer<typeof pipelineTransitionSchema>;
