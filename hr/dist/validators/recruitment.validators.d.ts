import { z } from "zod";
export declare const createJobSchema: z.ZodObject<{
    title: z.ZodString;
    departmentId: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    location: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    employmentType: z.ZodEnum<{
        full_time: "full_time";
        part_time: "part_time";
        contract: "contract";
        intern: "intern";
    }>;
    description: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    status: z.ZodOptional<z.ZodEnum<{
        closed: "closed";
        open: "open";
        paused: "paused";
    }>>;
}, z.core.$strip>;
export declare const updateJobSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    departmentId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    location: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    employmentType: z.ZodOptional<z.ZodEnum<{
        full_time: "full_time";
        part_time: "part_time";
        contract: "contract";
        intern: "intern";
    }>>;
    description: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        closed: "closed";
        open: "open";
        paused: "paused";
    }>>>;
}, z.core.$strip>;
export declare const jobListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        title: "title";
        status: "status";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        closed: "closed";
        open: "open";
        paused: "paused";
    }>>;
    departmentId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const createCandidateSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    resume: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    experience: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    skills: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export declare const updateCandidateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    resume: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    experience: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const candidateListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        name: "name";
        createdAt: "createdAt";
        email: "email";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const createApplicationSchema: z.ZodObject<{
    jobId: z.ZodString;
    candidateId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    resume: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    experience: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    notes: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    appliedDate: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateApplicationSchema: z.ZodObject<{
    stage: z.ZodOptional<z.ZodEnum<{
        applied: "applied";
        screening: "screening";
        interview: "interview";
        technical: "technical";
        hr_round: "hr_round";
        hired: "hired";
        rejected: "rejected";
    }>>;
    notes: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const applicationListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    jobId: z.ZodOptional<z.ZodString>;
    candidateId: z.ZodOptional<z.ZodString>;
    stage: z.ZodOptional<z.ZodEnum<{
        applied: "applied";
        screening: "screening";
        interview: "interview";
        technical: "technical";
        hr_round: "hr_round";
        hired: "hired";
        rejected: "rejected";
    }>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        stage: "stage";
        appliedDate: "appliedDate";
        sortOrder: "sortOrder";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const boardQuerySchema: z.ZodObject<{
    jobId: z.ZodOptional<z.ZodString>;
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export type CreateJobInput = z.infer<typeof createJobSchema>;
export type UpdateJobInput = z.infer<typeof updateJobSchema>;
export type JobListQueryInput = z.infer<typeof jobListQuerySchema>;
export type CreateCandidateInput = z.infer<typeof createCandidateSchema>;
export type UpdateCandidateInput = z.infer<typeof updateCandidateSchema>;
export type CandidateListQueryInput = z.infer<typeof candidateListQuerySchema>;
export type CreateApplicationInput = z.infer<typeof createApplicationSchema>;
export type UpdateApplicationInput = z.infer<typeof updateApplicationSchema>;
export type ApplicationListQueryInput = z.infer<typeof applicationListQuerySchema>;
export type BoardQueryInput = z.infer<typeof boardQuerySchema>;
