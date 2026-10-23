import { z } from "zod";
declare const milestoneSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
        AT_RISK: "AT_RISK";
        FAILED: "FAILED";
    }>>;
    completedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    clientFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    candidateFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const createGuaranteeSchema: z.ZodObject<{
    candidateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    joiningId: z.ZodString;
    mandateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    clientId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    joiningDate: z.ZodOptional<z.ZodString>;
    guaranteeStartDate: z.ZodOptional<z.ZodString>;
    guaranteeEndDate: z.ZodOptional<z.ZodString>;
    milestone30: z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            COMPLETED: "COMPLETED";
            AT_RISK: "AT_RISK";
            FAILED: "FAILED";
        }>>;
        completedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
        clientFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        candidateFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
    milestone60: z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            COMPLETED: "COMPLETED";
            AT_RISK: "AT_RISK";
            FAILED: "FAILED";
        }>>;
        completedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
        clientFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        candidateFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
    milestone90: z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            COMPLETED: "COMPLETED";
            AT_RISK: "AT_RISK";
            FAILED: "FAILED";
        }>>;
        completedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
        clientFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        candidateFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
    retentionStatus: z.ZodOptional<z.ZodEnum<{
        AT_RISK: "AT_RISK";
        IN_PROGRESS: "IN_PROGRESS";
        ON_TRACK: "ON_TRACK";
        RETAINED: "RETAINED";
        REPLACED: "REPLACED";
        DROPPED: "DROPPED";
    }>>;
}, z.core.$strip>;
export declare const updateGuaranteeSchema: z.ZodObject<{
    candidateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    mandateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    clientId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    joiningDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    guaranteeStartDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    guaranteeEndDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    milestone30: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            COMPLETED: "COMPLETED";
            AT_RISK: "AT_RISK";
            FAILED: "FAILED";
        }>>;
        completedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
        clientFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        candidateFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>>;
    milestone60: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            COMPLETED: "COMPLETED";
            AT_RISK: "AT_RISK";
            FAILED: "FAILED";
        }>>;
        completedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
        clientFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        candidateFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>>;
    milestone90: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            COMPLETED: "COMPLETED";
            AT_RISK: "AT_RISK";
            FAILED: "FAILED";
        }>>;
        completedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
        clientFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        candidateFeedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>>;
    retentionStatus: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        AT_RISK: "AT_RISK";
        IN_PROGRESS: "IN_PROGRESS";
        ON_TRACK: "ON_TRACK";
        RETAINED: "RETAINED";
        REPLACED: "REPLACED";
        DROPPED: "DROPPED";
    }>>>;
    joiningId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const guaranteeListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        guaranteeEndDate: "guaranteeEndDate";
        retentionStatus: "retentionStatus";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    candidateId: z.ZodOptional<z.ZodString>;
    joiningId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodString>;
    retentionStatus: z.ZodOptional<z.ZodEnum<{
        AT_RISK: "AT_RISK";
        IN_PROGRESS: "IN_PROGRESS";
        ON_TRACK: "ON_TRACK";
        RETAINED: "RETAINED";
        REPLACED: "REPLACED";
        DROPPED: "DROPPED";
    }>>;
}, z.core.$strip>;
export type CreateGuaranteeInput = z.infer<typeof createGuaranteeSchema>;
export type UpdateGuaranteeInput = z.infer<typeof updateGuaranteeSchema>;
export type GuaranteeListQueryInput = z.infer<typeof guaranteeListQuerySchema>;
export type GuaranteeMilestoneInput = z.infer<typeof milestoneSchema>;
export {};
