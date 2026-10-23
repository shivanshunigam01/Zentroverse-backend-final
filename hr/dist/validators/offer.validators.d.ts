import { z } from "zod";
export declare const createOfferSchema: z.ZodObject<{
    candidateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    mandateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    submissionId: z.ZodString;
    selectedDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    offeredDesignation: z.ZodString;
    offeredCTC: z.ZodCoercedNumber<unknown>;
    offerDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    offerStatus: z.ZodOptional<z.ZodEnum<{
        ACCEPTED: "ACCEPTED";
        REJECTED: "REJECTED";
        DRAFT: "DRAFT";
        WITHDRAWN: "WITHDRAWN";
        EXPIRED: "EXPIRED";
        SENT: "SENT";
    }>>;
    expectedJoiningDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    actualJoiningDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    joiningStatus: z.ZodOptional<z.ZodEnum<{
        JOINED: "JOINED";
        PENDING: "PENDING";
        WITHDRAWN: "WITHDRAWN";
        NO_SHOW: "NO_SHOW";
    }>>;
    remarks: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateOfferSchema: z.ZodObject<{
    candidateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    mandateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    selectedDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    offerDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    offerStatus: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        ACCEPTED: "ACCEPTED";
        REJECTED: "REJECTED";
        DRAFT: "DRAFT";
        WITHDRAWN: "WITHDRAWN";
        EXPIRED: "EXPIRED";
        SENT: "SENT";
    }>>>;
    expectedJoiningDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    actualJoiningDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    joiningStatus: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        JOINED: "JOINED";
        PENDING: "PENDING";
        WITHDRAWN: "WITHDRAWN";
        NO_SHOW: "NO_SHOW";
    }>>>;
    remarks: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    submissionId: z.ZodOptional<z.ZodString>;
    offeredDesignation: z.ZodOptional<z.ZodString>;
    offeredCTC: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const offerListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        offerDate: "offerDate";
        offerStatus: "offerStatus";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    candidateId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
    submissionId: z.ZodOptional<z.ZodString>;
    offerStatus: z.ZodOptional<z.ZodEnum<{
        ACCEPTED: "ACCEPTED";
        REJECTED: "REJECTED";
        DRAFT: "DRAFT";
        WITHDRAWN: "WITHDRAWN";
        EXPIRED: "EXPIRED";
        SENT: "SENT";
    }>>;
    joiningStatus: z.ZodOptional<z.ZodEnum<{
        JOINED: "JOINED";
        PENDING: "PENDING";
        WITHDRAWN: "WITHDRAWN";
        NO_SHOW: "NO_SHOW";
    }>>;
}, z.core.$strip>;
export type CreateOfferInput = z.infer<typeof createOfferSchema>;
export type UpdateOfferInput = z.infer<typeof updateOfferSchema>;
export type OfferListQueryInput = z.infer<typeof offerListQuerySchema>;
