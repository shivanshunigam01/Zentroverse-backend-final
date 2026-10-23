import { z } from "zod";
export declare const recruitmentDashboardQuerySchema: z.ZodObject<{
    from: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    to: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    clientId: z.ZodOptional<z.ZodString>;
    recruiterId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RecruitmentDashboardQueryInput = z.infer<typeof recruitmentDashboardQuerySchema>;
