import { z } from "zod";
export declare const employeeListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        firstName: "firstName";
        lastName: "lastName";
        joiningDate: "joiningDate";
        employmentStatus: "employmentStatus";
        createdAt: "createdAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    departmentId: z.ZodOptional<z.ZodString>;
    employmentStatus: z.ZodOptional<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
        on_leave: "on_leave";
        terminated: "terminated";
    }>>;
}, z.core.$strip>;
export declare const createEmployeeSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodEnum<{
        HR_ADMIN: "HR_ADMIN";
        MANAGER: "MANAGER";
        EMPLOYEE: "EMPLOYEE";
    }>>;
    profileImage: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    dateOfBirth: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    gender: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        male: "male";
        female: "female";
        non_binary: "non_binary";
        prefer_not_to_say: "prefer_not_to_say";
    }>>>;
    address: z.ZodOptional<z.ZodObject<{
        line1: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        line2: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        city: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        state: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        postalCode: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        country: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
    departmentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    designationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    managerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    joiningDate: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    employmentType: z.ZodOptional<z.ZodEnum<{
        full_time: "full_time";
        part_time: "part_time";
        contract: "contract";
        intern: "intern";
    }>>;
    employmentStatus: z.ZodOptional<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
        on_leave: "on_leave";
        terminated: "terminated";
    }>>;
    workLocation: z.ZodOptional<z.ZodEnum<{
        office: "office";
        remote: "remote";
        hybrid: "hybrid";
    }>>;
    emergencyContact: z.ZodOptional<z.ZodObject<{
        name: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        relationship: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            spouse: "spouse";
            parent: "parent";
            sibling: "sibling";
            child: "child";
            friend: "friend";
            other: "other";
        }>>>;
        phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const updateEmployeeSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    role: z.ZodOptional<z.ZodEnum<{
        HR_ADMIN: "HR_ADMIN";
        MANAGER: "MANAGER";
        EMPLOYEE: "EMPLOYEE";
    }>>;
    profileImage: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    phone: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    dateOfBirth: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>>;
    gender: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        male: "male";
        female: "female";
        non_binary: "non_binary";
        prefer_not_to_say: "prefer_not_to_say";
    }>>>;
    address: z.ZodOptional<z.ZodObject<{
        line1: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        line2: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        city: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        state: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        postalCode: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        country: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
    departmentId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    designationId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    managerId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    joiningDate: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>>;
    employmentType: z.ZodOptional<z.ZodEnum<{
        full_time: "full_time";
        part_time: "part_time";
        contract: "contract";
        intern: "intern";
    }>>;
    employmentStatus: z.ZodOptional<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
        on_leave: "on_leave";
        terminated: "terminated";
    }>>;
    workLocation: z.ZodOptional<z.ZodEnum<{
        office: "office";
        remote: "remote";
        hybrid: "hybrid";
    }>>;
    emergencyContact: z.ZodOptional<z.ZodObject<{
        name: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        relationship: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            spouse: "spouse";
            parent: "parent";
            sibling: "sibling";
            child: "child";
            friend: "friend";
            other: "other";
        }>>>;
        phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EmployeeListQueryInput = z.infer<typeof employeeListQuerySchema>;
export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeeInput = z.infer<typeof updateEmployeeSchema>;
