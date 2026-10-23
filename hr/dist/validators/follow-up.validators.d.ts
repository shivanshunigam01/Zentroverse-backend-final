import { z } from "zod";
export declare const createFollowUpSchema: z.ZodObject<{
    candidateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    offerId: z.ZodString;
    followUpDate: z.ZodOptional<z.ZodString>;
    followUpType: z.ZodOptional<z.ZodEnum<{
        EMAIL: "EMAIL";
        CALL: "CALL";
        MESSAGE: "MESSAGE";
        MEETING: "MEETING";
    }>>;
    candidateStatus: z.ZodOptional<z.ZodEnum<{
        CONFIRMED: "CONFIRMED";
        POSITIVE: "POSITIVE";
        UNDECIDED: "UNDECIDED";
        CONCERNED: "CONCERNED";
        DROPPING: "DROPPING";
        UNREACHABLE: "UNREACHABLE";
    }>>;
    joiningProbability: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    riskLevel: z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
    }>>;
    remarks: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    nextFollowUpDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    createdBy: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateFollowUpSchema: z.ZodObject<{
    candidateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    followUpDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    followUpType: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        EMAIL: "EMAIL";
        CALL: "CALL";
        MESSAGE: "MESSAGE";
        MEETING: "MEETING";
    }>>>;
    candidateStatus: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        CONFIRMED: "CONFIRMED";
        POSITIVE: "POSITIVE";
        UNDECIDED: "UNDECIDED";
        CONCERNED: "CONCERNED";
        DROPPING: "DROPPING";
        UNREACHABLE: "UNREACHABLE";
    }>>>;
    joiningProbability: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    riskLevel: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
    }>>>;
    remarks: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    nextFollowUpDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    createdBy: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    offerId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const followUpListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        followUpDate: "followUpDate";
        riskLevel: "riskLevel";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    candidateId: z.ZodOptional<z.ZodString>;
    offerId: z.ZodOptional<z.ZodString>;
    followUpType: z.ZodOptional<z.ZodEnum<{
        EMAIL: "EMAIL";
        CALL: "CALL";
        MESSAGE: "MESSAGE";
        MEETING: "MEETING";
    }>>;
    riskLevel: z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
    }>>;
    candidateStatus: z.ZodOptional<z.ZodEnum<{
        CONFIRMED: "CONFIRMED";
        POSITIVE: "POSITIVE";
        UNDECIDED: "UNDECIDED";
        CONCERNED: "CONCERNED";
        DROPPING: "DROPPING";
        UNREACHABLE: "UNREACHABLE";
    }>>;
}, z.core.$strip>;
export type CreateFollowUpInput = z.infer<typeof createFollowUpSchema>;
export type UpdateFollowUpInput = z.infer<typeof updateFollowUpSchema>;
export type FollowUpListQueryInput = z.infer<typeof followUpListQuerySchema>;
