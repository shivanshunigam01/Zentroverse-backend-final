import { z } from "zod";
export declare const createAssetSchema: z.ZodObject<{
    name: z.ZodString;
    assetCode: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    category: z.ZodEnum<{
        other: "other";
        phone: "phone";
        laptop: "laptop";
        monitor: "monitor";
        tablet: "tablet";
        accessories: "accessories";
        furniture: "furniture";
        badge: "badge";
        vehicle: "vehicle";
    }>;
    serialNumber: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    purchaseDate: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    condition: z.ZodOptional<z.ZodEnum<{
        new: "new";
        good: "good";
        fair: "fair";
        poor: "poor";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        available: "available";
        maintenance: "maintenance";
        retired: "retired";
    }>>;
}, z.core.$strip>;
export declare const updateAssetSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    assetCode: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    category: z.ZodOptional<z.ZodEnum<{
        other: "other";
        phone: "phone";
        laptop: "laptop";
        monitor: "monitor";
        tablet: "tablet";
        accessories: "accessories";
        furniture: "furniture";
        badge: "badge";
        vehicle: "vehicle";
    }>>;
    serialNumber: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    purchaseDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    condition: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        new: "new";
        good: "good";
        fair: "fair";
        poor: "poor";
    }>>>;
    status: z.ZodOptional<z.ZodEnum<{
        available: "available";
        assigned: "assigned";
        maintenance: "maintenance";
        retired: "retired";
    }>>;
}, z.core.$strip>;
export declare const assignAssetSchema: z.ZodObject<{
    employeeId: z.ZodString;
    assignedDate: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    notes: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const returnAssetSchema: z.ZodObject<{
    returnedDate: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    notes: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    condition: z.ZodOptional<z.ZodEnum<{
        new: "new";
        good: "good";
        fair: "fair";
        poor: "poor";
    }>>;
    nextStatus: z.ZodOptional<z.ZodEnum<{
        available: "available";
        maintenance: "maintenance";
    }>>;
}, z.core.$strip>;
export declare const assetListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        name: "name";
        createdAt: "createdAt";
        status: "status";
        assetCode: "assetCode";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    category: z.ZodOptional<z.ZodEnum<{
        other: "other";
        phone: "phone";
        laptop: "laptop";
        monitor: "monitor";
        tablet: "tablet";
        accessories: "accessories";
        furniture: "furniture";
        badge: "badge";
        vehicle: "vehicle";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        available: "available";
        assigned: "assigned";
        maintenance: "maintenance";
        retired: "retired";
    }>>;
    condition: z.ZodOptional<z.ZodEnum<{
        new: "new";
        good: "good";
        fair: "fair";
        poor: "poor";
    }>>;
    employeeId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateAssetInput = z.infer<typeof createAssetSchema>;
export type UpdateAssetInput = z.infer<typeof updateAssetSchema>;
export type AssignAssetInput = z.infer<typeof assignAssetSchema>;
export type ReturnAssetInput = z.infer<typeof returnAssetSchema>;
export type AssetListQueryInput = z.infer<typeof assetListQuerySchema>;
