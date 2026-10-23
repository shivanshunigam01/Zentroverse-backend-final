import { z } from "zod";
export declare const objectIdSchema: z.ZodString;
export declare const listQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        name: "name";
        createdAt: "createdAt";
        title: "title";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    isActive: z.ZodOptional<z.ZodEnum<{
        true: "true";
        false: "false";
    }>>;
    departmentId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const addressSchema: z.ZodObject<{
    line1: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    line2: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    city: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    state: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    postalCode: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    country: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const workingHoursSchema: z.ZodObject<{
    start: z.ZodString;
    end: z.ZodString;
}, z.core.$strip>;
export declare const organizationSettingsSchema: z.ZodObject<{
    dateFormat: z.ZodOptional<z.ZodEnum<{
        "DD/MM/YYYY": "DD/MM/YYYY";
        "MM/DD/YYYY": "MM/DD/YYYY";
        "YYYY-MM-DD": "YYYY-MM-DD";
    }>>;
    weekStartsOn: z.ZodOptional<z.ZodEnum<{
        monday: "monday";
        sunday: "sunday";
    }>>;
}, z.core.$strip>;
export declare const updateOrganizationSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    logo: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    industry: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    companySize: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "1-10": "1-10";
        "11-50": "11-50";
        "51-200": "51-200";
        "201-500": "201-500";
        "500+": "500+";
    }>>>;
    email: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodEmail, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    address: z.ZodOptional<z.ZodObject<{
        line1: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        line2: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        city: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        state: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        postalCode: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        country: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
    timezone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    workingDays: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        monday: "monday";
        tuesday: "tuesday";
        wednesday: "wednesday";
        thursday: "thursday";
        friday: "friday";
        saturday: "saturday";
        sunday: "sunday";
    }>>>;
    workingHours: z.ZodOptional<z.ZodObject<{
        start: z.ZodString;
        end: z.ZodString;
    }, z.core.$strip>>;
    settings: z.ZodOptional<z.ZodObject<{
        dateFormat: z.ZodOptional<z.ZodEnum<{
            "DD/MM/YYYY": "DD/MM/YYYY";
            "MM/DD/YYYY": "MM/DD/YYYY";
            "YYYY-MM-DD": "YYYY-MM-DD";
        }>>;
        weekStartsOn: z.ZodOptional<z.ZodEnum<{
            monday: "monday";
            sunday: "sunday";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const createDepartmentSchema: z.ZodObject<{
    name: z.ZodString;
    code: z.ZodString;
    description: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    headId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateDepartmentSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    headId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const createDesignationSchema: z.ZodObject<{
    title: z.ZodString;
    departmentId: z.ZodString;
    description: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateDesignationSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    departmentId: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export type ListQueryInput = z.infer<typeof listQuerySchema>;
export type UpdateOrganizationInput = z.infer<typeof updateOrganizationSchema>;
export type CreateDepartmentInput = z.infer<typeof createDepartmentSchema>;
export type UpdateDepartmentInput = z.infer<typeof updateDepartmentSchema>;
export type CreateDesignationInput = z.infer<typeof createDesignationSchema>;
export type UpdateDesignationInput = z.infer<typeof updateDesignationSchema>;
