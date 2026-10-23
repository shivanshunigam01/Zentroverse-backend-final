import { z } from "zod";
export declare const incrementWorksheetQuerySchema: z.ZodObject<{
    reviewPeriod: z.ZodString;
}, z.core.$strip>;
export declare const applyIncrementsSchema: z.ZodObject<{
    reviewPeriod: z.ZodString;
    effectiveFrom: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        employeeId: z.ZodString;
        incrementPercent: z.ZodCoercedNumber<unknown>;
        note: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IncrementWorksheetQueryInput = z.infer<typeof incrementWorksheetQuerySchema>;
export type ApplyIncrementsInput = z.infer<typeof applyIncrementsSchema>;
