import { z } from "zod";
export declare const createSubmissionSchema: z.ZodObject<{
    candidateId: z.ZodString;
    clientId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodString;
    evaluationId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | null | undefined, string | null | undefined>>;
    submittedBy: z.ZodOptional<z.ZodString>;
    submittedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    ownershipStartDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    ownershipEndDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    ownershipStatus: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        DISPUTED: "DISPUTED";
        EXPIRED: "EXPIRED";
    }>>;
    ownershipOverridden: z.ZodOptional<z.ZodBoolean>;
    clientAcknowledgement: z.ZodOptional<z.ZodBoolean>;
    acknowledgementDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    duplicateStatus: z.ZodOptional<z.ZodEnum<{
        NOT_CHECKED: "NOT_CHECKED";
        UNIQUE: "UNIQUE";
        NOT_DUPLICATE: "NOT_DUPLICATE";
        POSSIBLE_DUPLICATE: "POSSIBLE_DUPLICATE";
        CONFIRMED_DUPLICATE: "CONFIRMED_DUPLICATE";
        DISPUTED: "DISPUTED";
    }>>;
    duplicateEvidence: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    duplicateResolution: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    fitReasons: z.ZodOptional<z.ZodArray<z.ZodString>>;
    risksGaps: z.ZodOptional<z.ZodArray<z.ZodString>>;
    currentCompany: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    currentDesignation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    currentLocation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    totalExperience: z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    currentCTC: z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    expectedCTC: z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    noticePeriod: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    status: z.ZodOptional<z.ZodEnum<{
        SUBMITTED: "SUBMITTED";
        REJECTED: "REJECTED";
        DRAFT: "DRAFT";
        UNDER_REVIEW: "UNDER_REVIEW";
        SHORTLISTED: "SHORTLISTED";
        WITHDRAWN: "WITHDRAWN";
    }>>;
    remarks: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateSubmissionSchema: z.ZodObject<{
    candidateId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    mandateId: z.ZodOptional<z.ZodString>;
    evaluationId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | null | undefined, string | null | undefined>>>;
    submittedBy: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    submittedAt: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    ownershipStartDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    ownershipEndDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    ownershipStatus: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        DISPUTED: "DISPUTED";
        EXPIRED: "EXPIRED";
    }>>>;
    ownershipOverridden: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    clientAcknowledgement: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    acknowledgementDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    duplicateStatus: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        NOT_CHECKED: "NOT_CHECKED";
        UNIQUE: "UNIQUE";
        NOT_DUPLICATE: "NOT_DUPLICATE";
        POSSIBLE_DUPLICATE: "POSSIBLE_DUPLICATE";
        CONFIRMED_DUPLICATE: "CONFIRMED_DUPLICATE";
        DISPUTED: "DISPUTED";
    }>>>;
    duplicateEvidence: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    duplicateResolution: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    fitReasons: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    risksGaps: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    currentCompany: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    currentDesignation: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    currentLocation: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    totalExperience: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>>;
    currentCTC: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>>;
    expectedCTC: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>>;
    noticePeriod: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        SUBMITTED: "SUBMITTED";
        REJECTED: "REJECTED";
        DRAFT: "DRAFT";
        UNDER_REVIEW: "UNDER_REVIEW";
        SHORTLISTED: "SHORTLISTED";
        WITHDRAWN: "WITHDRAWN";
    }>>>;
    remarks: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
}, z.core.$strip>;
export declare const submissionListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        submittedAt: "submittedAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    candidateId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        SUBMITTED: "SUBMITTED";
        REJECTED: "REJECTED";
        DRAFT: "DRAFT";
        UNDER_REVIEW: "UNDER_REVIEW";
        SHORTLISTED: "SHORTLISTED";
        WITHDRAWN: "WITHDRAWN";
    }>>;
    duplicateStatus: z.ZodOptional<z.ZodEnum<{
        NOT_CHECKED: "NOT_CHECKED";
        UNIQUE: "UNIQUE";
        NOT_DUPLICATE: "NOT_DUPLICATE";
        POSSIBLE_DUPLICATE: "POSSIBLE_DUPLICATE";
        CONFIRMED_DUPLICATE: "CONFIRMED_DUPLICATE";
        DISPUTED: "DISPUTED";
    }>>;
}, z.core.$strip>;
export type CreateSubmissionInput = z.infer<typeof createSubmissionSchema>;
export type UpdateSubmissionInput = z.infer<typeof updateSubmissionSchema>;
export type SubmissionListQueryInput = z.infer<typeof submissionListQuerySchema>;
