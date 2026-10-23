import { z } from "zod";
export declare const announcementWriteSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    category: z.ZodEnum<{
        event: "event";
        general: "general";
        policy: "policy";
        important: "important";
        celebration: "celebration";
    }>;
    priority: z.ZodOptional<z.ZodEnum<{
        normal: "normal";
        high: "high";
        urgent: "urgent";
    }>>;
    publishDate: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    expiryDate: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    targetAudience: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEnum<{
        SUPER_ADMIN: "SUPER_ADMIN";
        HR_ADMIN: "HR_ADMIN";
        MANAGER: "MANAGER";
        EMPLOYEE: "EMPLOYEE";
    }>>>>;
    publish: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateAnnouncementSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodEnum<{
        event: "event";
        general: "general";
        policy: "policy";
        important: "important";
        celebration: "celebration";
    }>>;
    priority: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        normal: "normal";
        high: "high";
        urgent: "urgent";
    }>>>;
    publishDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    expiryDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    targetAudience: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEnum<{
        SUPER_ADMIN: "SUPER_ADMIN";
        HR_ADMIN: "HR_ADMIN";
        MANAGER: "MANAGER";
        EMPLOYEE: "EMPLOYEE";
    }>>>>>;
    publish: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const announcementListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        priority: "priority";
        title: "title";
        publishDate: "publishDate";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    category: z.ZodOptional<z.ZodEnum<{
        event: "event";
        general: "general";
        policy: "policy";
        important: "important";
        celebration: "celebration";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        normal: "normal";
        high: "high";
        urgent: "urgent";
    }>>;
    visibility: z.ZodOptional<z.ZodEnum<{
        draft: "draft";
        expired: "expired";
        scheduled: "scheduled";
        live: "live";
    }>>;
}, z.core.$strip>;
export type AnnouncementWriteInput = z.infer<typeof announcementWriteSchema>;
export type UpdateAnnouncementInput = z.infer<typeof updateAnnouncementSchema>;
export type AnnouncementListQueryInput = z.infer<typeof announcementListQuerySchema>;
