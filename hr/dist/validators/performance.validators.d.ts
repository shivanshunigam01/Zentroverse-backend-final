import { z } from "zod";
export declare const createGoalSchema: z.ZodObject<{
    employeeId: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    description: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    progress: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    deadline: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        not_started: "not_started";
        in_progress: "in_progress";
        completed: "completed";
        cancelled: "cancelled";
    }>>;
}, z.core.$strip>;
export declare const updateGoalSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    progress: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    deadline: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<{
        not_started: "not_started";
        in_progress: "in_progress";
        completed: "completed";
        cancelled: "cancelled";
    }>>;
}, z.core.$strip>;
export declare const updateGoalProgressSchema: z.ZodObject<{
    progress: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const goalListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        title: "title";
        status: "status";
        deadline: "deadline";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    employeeId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        not_started: "not_started";
        in_progress: "in_progress";
        completed: "completed";
        cancelled: "cancelled";
    }>>;
}, z.core.$strip>;
export declare const createReviewSchema: z.ZodObject<{
    employeeId: z.ZodOptional<z.ZodString>;
    kind: z.ZodOptional<z.ZodEnum<{
        self: "self";
        manager: "manager";
    }>>;
    reviewPeriod: z.ZodString;
    rating: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    strengths: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    improvements: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    feedback: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateReviewSchema: z.ZodObject<{
    reviewPeriod: z.ZodOptional<z.ZodString>;
    rating: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    strengths: z.ZodOptional<z.ZodString>;
    improvements: z.ZodOptional<z.ZodString>;
    feedback: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const reviewListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        reviewPeriod: "reviewPeriod";
        status: "status";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    employeeId: z.ZodOptional<z.ZodString>;
    kind: z.ZodOptional<z.ZodEnum<{
        self: "self";
        manager: "manager";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        draft: "draft";
        submitted: "submitted";
    }>>;
    reviewPeriod: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const overviewQuerySchema: z.ZodObject<{
    employeeId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateGoalInput = z.infer<typeof createGoalSchema>;
export type UpdateGoalInput = z.infer<typeof updateGoalSchema>;
export type UpdateGoalProgressInput = z.infer<typeof updateGoalProgressSchema>;
export type GoalListQueryInput = z.infer<typeof goalListQuerySchema>;
export type CreateReviewInput = z.infer<typeof createReviewSchema>;
export type UpdateReviewInput = z.infer<typeof updateReviewSchema>;
export type ReviewListQueryInput = z.infer<typeof reviewListQuerySchema>;
export type OverviewQueryInput = z.infer<typeof overviewQuerySchema>;
