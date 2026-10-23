import { z } from "zod";
export declare const reportQuerySchema: z.ZodObject<{
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
    departmentId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ReportQueryInput = z.infer<typeof reportQuerySchema>;
