import { z } from "zod";
export declare const aiInterviewListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        finalScore: "finalScore";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        COMPLETED: "COMPLETED";
        EXPIRED: "EXPIRED";
        CANCELLED: "CANCELLED";
        IN_PROGRESS: "IN_PROGRESS";
        SCHEDULED: "SCHEDULED";
    }>>;
    result: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        FAILED: "FAILED";
        PASSED: "PASSED";
    }>>;
    candidateId: z.ZodOptional<z.ZodString>;
    jobId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AiInterviewListQueryInput = z.infer<typeof aiInterviewListQuerySchema>;
export declare const submitAiInterviewAnswerSchema: z.ZodObject<{
    questionOrder: z.ZodCoercedNumber<unknown>;
    answer: z.ZodString;
    answerMode: z.ZodOptional<z.ZodEnum<{
        TEXT: "TEXT";
        VOICE: "VOICE";
    }>>;
}, z.core.$strip>;
export type SubmitAiInterviewAnswerInput = z.infer<typeof submitAiInterviewAnswerSchema>;
export declare const overrideAiInterviewResultSchema: z.ZodObject<{
    result: z.ZodEnum<{
        FAILED: "FAILED";
        PASSED: "PASSED";
    }>;
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type OverrideAiInterviewResultInput = z.infer<typeof overrideAiInterviewResultSchema>;
export declare const updateAiInterviewConfigSchema: z.ZodObject<{
    passingScore: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    interviewExpiryHours: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    autoTriggerOnApply: z.ZodOptional<z.ZodBoolean>;
    interviewMode: z.ZodOptional<z.ZodEnum<{
        TEXT: "TEXT";
        VOICE: "VOICE";
        BOTH: "BOTH";
    }>>;
}, z.core.$strip>;
export type UpdateAiInterviewConfigInput = z.infer<typeof updateAiInterviewConfigSchema>;
