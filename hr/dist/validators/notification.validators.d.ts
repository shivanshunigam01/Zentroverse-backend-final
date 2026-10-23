import { z } from "zod";
export declare const notificationListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        type: "type";
        createdAt: "createdAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    type: z.ZodOptional<z.ZodEnum<{
        leave: "leave";
        attendance: "attendance";
        announcement: "announcement";
        document: "document";
        payroll: "payroll";
        system: "system";
    }>>;
    isRead: z.ZodPipe<z.ZodOptional<z.ZodEnum<{
        true: "true";
        false: "false";
    }>>, z.ZodTransform<boolean | undefined, "true" | "false" | undefined>>;
}, z.core.$strip>;
export type NotificationListQueryInput = z.infer<typeof notificationListQuerySchema>;
