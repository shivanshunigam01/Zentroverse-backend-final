import { z } from "zod";
export declare const createJoiningSchema: z.ZodObject<{
    candidateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    mandateId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    offerId: z.ZodString;
    clientId: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    joiningDate: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        JOINED: "JOINED";
        WITHDRAWN: "WITHDRAWN";
        EXPECTED: "EXPECTED";
        CONFIRMED: "CONFIRMED";
        NO_SHOW: "NO_SHOW";
    }>>;
    confirmedBy: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>;
    confirmationDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    remarks: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateJoiningSchema: z.ZodObject<{
    candidateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    mandateId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    clientId: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    joiningDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        JOINED: "JOINED";
        WITHDRAWN: "WITHDRAWN";
        EXPECTED: "EXPECTED";
        CONFIRMED: "CONFIRMED";
        NO_SHOW: "NO_SHOW";
    }>>>;
    confirmedBy: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">, z.ZodNull]>>, z.ZodTransform<string | undefined, string | null | undefined>>>;
    confirmationDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    remarks: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    offerId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const joiningListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        joiningDate: "joiningDate";
        createdAt: "createdAt";
        status: "status";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    candidateId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
    offerId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        JOINED: "JOINED";
        WITHDRAWN: "WITHDRAWN";
        EXPECTED: "EXPECTED";
        CONFIRMED: "CONFIRMED";
        NO_SHOW: "NO_SHOW";
    }>>;
}, z.core.$strip>;
export type CreateJoiningInput = z.infer<typeof createJoiningSchema>;
export type UpdateJoiningInput = z.infer<typeof updateJoiningSchema>;
export type JoiningListQueryInput = z.infer<typeof joiningListQuerySchema>;
