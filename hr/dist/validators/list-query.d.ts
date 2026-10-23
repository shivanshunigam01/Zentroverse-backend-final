import { z } from "zod";
export declare const SORT_ORDERS: readonly ["asc", "desc"];
export declare const optionalSearchQuery: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
export declare const sortOrderQuery: z.ZodOptional<z.ZodEnum<{
    asc: "asc";
    desc: "desc";
}>>;
export declare function sortFieldQuery<const T extends readonly [string, ...string[]]>(fields: T): z.ZodOptional<z.ZodEnum<{ [k_1 in T[number]]: k_1; } extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never>>;
export declare function listControlFields<const T extends readonly [string, ...string[]]>(sortFields: T, limitDefault?: number, limitMax?: number): {
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{ [k_1 in T[number]]: k_1; } extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
};
