import { z } from "zod";
export declare const contactPersonSchema: z.ZodObject<{
    name: z.ZodString;
    designation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    email: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodEmail, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const createClientSchema: z.ZodObject<{
    companyName: z.ZodString;
    legalEntityName: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    industry: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    website: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    GSTNumber: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>, z.ZodTransform<string | undefined, string | undefined>>;
    PANNumber: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>, z.ZodTransform<string | undefined, string | undefined>>;
    registeredAddress: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    address: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    city: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    state: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    country: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    contactPersons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        designation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        email: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodEmail, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
        phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>>;
    status: z.ZodOptional<z.ZodEnum<{
        LEAD: "LEAD";
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        CLOSED: "CLOSED";
    }>>;
    onboardingStatus: z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
    }>>;
    KYCStatus: z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        PENDING: "PENDING";
        VERIFIED: "VERIFIED";
    }>>;
    notes: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateClientSchema: z.ZodObject<{
    companyName: z.ZodOptional<z.ZodString>;
    legalEntityName: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    industry: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    website: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    GSTNumber: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>, z.ZodTransform<string | undefined, string | undefined>>>;
    PANNumber: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>, z.ZodTransform<string | undefined, string | undefined>>>;
    registeredAddress: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    address: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    city: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    state: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    country: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    contactPersons: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        designation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        email: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodEmail, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
        phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        LEAD: "LEAD";
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        CLOSED: "CLOSED";
    }>>>;
    onboardingStatus: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
    }>>>;
    KYCStatus: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        PENDING: "PENDING";
        VERIFIED: "VERIFIED";
    }>>>;
    notes: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
}, z.core.$strip>;
export declare const clientListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        status: "status";
        companyName: "companyName";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        LEAD: "LEAD";
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        CLOSED: "CLOSED";
    }>>;
    onboardingStatus: z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
    }>>;
    KYCStatus: z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        PENDING: "PENDING";
        VERIFIED: "VERIFIED";
    }>>;
}, z.core.$strip>;
export type CreateClientInput = z.infer<typeof createClientSchema>;
export type UpdateClientInput = z.infer<typeof updateClientSchema>;
export type ClientListQueryInput = z.infer<typeof clientListQuerySchema>;
