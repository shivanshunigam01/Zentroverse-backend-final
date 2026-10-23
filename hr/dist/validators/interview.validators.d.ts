import { z } from "zod";
export declare const createInterviewSchema: z.ZodObject<{
    candidateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    mandateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    submissionId: z.ZodString;
    round: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    interviewType: z.ZodOptional<z.ZodEnum<{
        PHONE: "PHONE";
        VIDEO: "VIDEO";
        IN_PERSON: "IN_PERSON";
        ONLINE: "ONLINE";
    }>>;
    scheduledAt: z.ZodString;
    duration: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    interviewers: z.ZodOptional<z.ZodArray<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<{
        COMPLETED: "COMPLETED";
        CANCELLED: "CANCELLED";
        NO_SHOW: "NO_SHOW";
        SCHEDULED: "SCHEDULED";
        RESCHEDULED: "RESCHEDULED";
    }>>;
    feedback: z.ZodOptional<z.ZodObject<{
        technicalScore: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        communicationScore: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        cultureFitScore: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        leadershipScore: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        compensationFit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        joiningRisk: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        comments: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
    decision: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        REJECTED: "REJECTED";
        ON_HOLD: "ON_HOLD";
        HOLD: "HOLD";
        REJECT: "REJECT";
        SELECTED: "SELECTED";
        SELECT: "SELECT";
        NEXT_ROUND: "NEXT_ROUND";
    }>, z.ZodLiteral<"">]>>;
    nextAction: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    nextActionDeadline: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateInterviewSchema: z.ZodObject<{
    candidateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    mandateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    round: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    interviewType: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        PHONE: "PHONE";
        VIDEO: "VIDEO";
        IN_PERSON: "IN_PERSON";
        ONLINE: "ONLINE";
    }>>>;
    duration: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    interviewers: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        COMPLETED: "COMPLETED";
        CANCELLED: "CANCELLED";
        NO_SHOW: "NO_SHOW";
        SCHEDULED: "SCHEDULED";
        RESCHEDULED: "RESCHEDULED";
    }>>>;
    decision: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        REJECTED: "REJECTED";
        ON_HOLD: "ON_HOLD";
        HOLD: "HOLD";
        REJECT: "REJECT";
        SELECTED: "SELECTED";
        SELECT: "SELECT";
        NEXT_ROUND: "NEXT_ROUND";
    }>, z.ZodLiteral<"">]>>>;
    nextAction: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    nextActionDeadline: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    submissionId: z.ZodOptional<z.ZodString>;
    scheduledAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    feedback: z.ZodOptional<z.ZodObject<{
        technicalScore: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        communicationScore: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        cultureFitScore: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        leadershipScore: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        compensationFit: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        joiningRisk: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        comments: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const interviewListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        scheduledAt: "scheduledAt";
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
    status: z.ZodOptional<z.ZodEnum<{
        COMPLETED: "COMPLETED";
        CANCELLED: "CANCELLED";
        NO_SHOW: "NO_SHOW";
        SCHEDULED: "SCHEDULED";
        RESCHEDULED: "RESCHEDULED";
    }>>;
    interviewType: z.ZodOptional<z.ZodEnum<{
        PHONE: "PHONE";
        VIDEO: "VIDEO";
        IN_PERSON: "IN_PERSON";
        ONLINE: "ONLINE";
    }>>;
}, z.core.$strip>;
export type CreateInterviewInput = z.infer<typeof createInterviewSchema>;
export type UpdateInterviewInput = z.infer<typeof updateInterviewSchema>;
export type InterviewListQueryInput = z.infer<typeof interviewListQuerySchema>;
