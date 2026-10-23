import { z } from "zod";
export declare const createLeaveTypeSchema: z.ZodObject<{
    name: z.ZodString;
    code: z.ZodString;
    maxDays: z.ZodCoercedNumber<unknown>;
    isPaid: z.ZodOptional<z.ZodBoolean>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateLeaveTypeSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
    maxDays: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    isPaid: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const applyLeaveSchema: z.ZodObject<{
    leaveTypeId: z.ZodString;
    startDate: z.ZodString;
    endDate: z.ZodString;
    reason: z.ZodString;
    attachment: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const decideLeaveSchema: z.ZodObject<{
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const leaveListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        startDate: "startDate";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    employeeId: z.ZodOptional<z.ZodString>;
    leaveTypeId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        cancelled: "cancelled";
        rejected: "rejected";
        pending: "pending";
        approved: "approved";
    }>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const leaveBalanceQuerySchema: z.ZodObject<{
    employeeId: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const leaveCalendarQuerySchema: z.ZodObject<{
    month: z.ZodOptional<z.ZodString>;
    employeeId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const leavePreviewQuerySchema: z.ZodObject<{
    startDate: z.ZodString;
    endDate: z.ZodString;
}, z.core.$strip>;
export type CreateLeaveTypeInput = z.infer<typeof createLeaveTypeSchema>;
export type UpdateLeaveTypeInput = z.infer<typeof updateLeaveTypeSchema>;
export type ApplyLeaveInput = z.infer<typeof applyLeaveSchema>;
export type DecideLeaveInput = z.infer<typeof decideLeaveSchema>;
export type LeaveListQueryInput = z.infer<typeof leaveListQuerySchema>;
export type LeaveBalanceQueryInput = z.infer<typeof leaveBalanceQuerySchema>;
export type LeaveCalendarQueryInput = z.infer<typeof leaveCalendarQuerySchema>;
export type LeavePreviewQueryInput = z.infer<typeof leavePreviewQuerySchema>;
