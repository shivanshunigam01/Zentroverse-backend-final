import { z } from "zod";
export declare const checkInSchema: z.ZodObject<{
    wfh: z.ZodOptional<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateAttendanceSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        leave: "leave";
        present: "present";
        absent: "absent";
        late: "late";
        half_day: "half_day";
        wfh: "wfh";
        holiday: "holiday";
    }>>;
    notes: z.ZodOptional<z.ZodString>;
    checkIn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    checkOut: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    breakMinutes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const attendanceListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        date: "date";
        createdAt: "createdAt";
        status: "status";
        checkIn: "checkIn";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    employeeId: z.ZodOptional<z.ZodString>;
    departmentId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        leave: "leave";
        present: "present";
        absent: "absent";
        late: "late";
        half_day: "half_day";
        wfh: "wfh";
        holiday: "holiday";
    }>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const attendanceDailyQuerySchema: z.ZodObject<{
    date: z.ZodOptional<z.ZodString>;
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    departmentId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        leave: "leave";
        present: "present";
        absent: "absent";
        late: "late";
        half_day: "half_day";
        wfh: "wfh";
        holiday: "holiday";
        rest: "rest";
    }>>;
    sort: z.ZodOptional<z.ZodEnum<{
        firstName: "firstName";
        lastName: "lastName";
        createdAt: "createdAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const attendanceCalendarQuerySchema: z.ZodObject<{
    month: z.ZodOptional<z.ZodString>;
    employeeId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const attendanceMonthlyQuerySchema: z.ZodObject<{
    month: z.ZodOptional<z.ZodString>;
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    departmentId: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<{
        firstName: "firstName";
        lastName: "lastName";
        createdAt: "createdAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type CheckInInput = z.infer<typeof checkInSchema>;
export type UpdateAttendanceInput = z.infer<typeof updateAttendanceSchema>;
export type AttendanceListQueryInput = z.infer<typeof attendanceListQuerySchema>;
export type AttendanceDailyQueryInput = z.infer<typeof attendanceDailyQuerySchema>;
export type AttendanceCalendarQueryInput = z.infer<typeof attendanceCalendarQuerySchema>;
export type AttendanceMonthlyQueryInput = z.infer<typeof attendanceMonthlyQuerySchema>;
