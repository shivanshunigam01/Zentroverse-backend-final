import { z } from "zod";
export declare const publicCareerListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    location: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    employmentType: z.ZodOptional<z.ZodEnum<{
        full_time: "full_time";
        part_time: "part_time";
        contract: "contract";
        intern: "intern";
    }>>;
    workMode: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const publicCareerApplySchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    phone: z.ZodString;
    currentCompany: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    currentDesignation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    totalExperience: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    relevantExperience: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    currentCTC: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    expectedCTC: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    noticePeriod: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    currentLocation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    preferredLocations: z.ZodPreprocess<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    skills: z.ZodPreprocess<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    qualifications: z.ZodPreprocess<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    linkedInUrl: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    notes: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    consent: z.ZodPreprocess<z.ZodBoolean>;
}, z.core.$strip>;
export declare const jobApplicationListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        applicationNumber: "applicationNumber";
        appliedAt: "appliedAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    mandateId: z.ZodOptional<z.ZodString>;
    candidateId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        UNDER_REVIEW: "UNDER_REVIEW";
        SHORTLISTED: "SHORTLISTED";
        WITHDRAWN: "WITHDRAWN";
        APPLIED: "APPLIED";
        RESUME_SCREENING: "RESUME_SCREENING";
        AI_INTERVIEW_PENDING: "AI_INTERVIEW_PENDING";
        AI_INTERVIEW_COMPLETED: "AI_INTERVIEW_COMPLETED";
        AI_INTERVIEW_PASSED: "AI_INTERVIEW_PASSED";
        AI_INTERVIEW_FAILED: "AI_INTERVIEW_FAILED";
    }>>;
    source: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateJobApplicationSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        UNDER_REVIEW: "UNDER_REVIEW";
        SHORTLISTED: "SHORTLISTED";
        WITHDRAWN: "WITHDRAWN";
        APPLIED: "APPLIED";
        RESUME_SCREENING: "RESUME_SCREENING";
        AI_INTERVIEW_PENDING: "AI_INTERVIEW_PENDING";
        AI_INTERVIEW_COMPLETED: "AI_INTERVIEW_COMPLETED";
        AI_INTERVIEW_PASSED: "AI_INTERVIEW_PASSED";
        AI_INTERVIEW_FAILED: "AI_INTERVIEW_FAILED";
    }>>;
    convertToWorkflow: z.ZodOptional<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PublicCareerListQueryInput = z.infer<typeof publicCareerListQuerySchema>;
export type PublicCareerApplyInput = z.infer<typeof publicCareerApplySchema>;
export type JobApplicationListQueryInput = z.infer<typeof jobApplicationListQuerySchema>;
export type UpdateJobApplicationInput = z.infer<typeof updateJobApplicationSchema>;
