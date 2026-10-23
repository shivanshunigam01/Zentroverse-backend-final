import { z } from "zod";
export declare const createEvaluationSchema: z.ZodObject<{
    candidateId: z.ZodString;
    mandateId: z.ZodString;
    recruiterId: z.ZodOptional<z.ZodString>;
    scoringVersion: z.ZodOptional<z.ZodEnum<{
        LEGACY_6: "LEGACY_6";
        POINT_100: "POINT_100";
    }>>;
    scores: z.ZodOptional<z.ZodObject<{
        roleFit: z.ZodCoercedNumber<unknown>;
        experienceFit: z.ZodCoercedNumber<unknown>;
        communication: z.ZodCoercedNumber<unknown>;
        industryExperience: z.ZodCoercedNumber<unknown>;
        compensationFit: z.ZodCoercedNumber<unknown>;
        joiningProbability: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>>;
    scorecard: z.ZodOptional<z.ZodObject<{
        communication: z.ZodCoercedNumber<unknown>;
        roleKnowledge: z.ZodCoercedNumber<unknown>;
        relevantExperience: z.ZodCoercedNumber<unknown>;
        achievementEvidence: z.ZodCoercedNumber<unknown>;
        stability: z.ZodCoercedNumber<unknown>;
        locationFit: z.ZodCoercedNumber<unknown>;
        ctcFit: z.ZodCoercedNumber<unknown>;
        joiningProbability: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>>;
    recommendation: z.ZodEnum<{
        STRONG_RECOMMEND: "STRONG_RECOMMEND";
        RECOMMEND: "RECOMMEND";
        HOLD: "HOLD";
        REJECT: "REJECT";
        STRONGLY_RECOMMENDED: "STRONGLY_RECOMMENDED";
        RECOMMENDED: "RECOMMENDED";
        NOT_RECOMMENDED: "NOT_RECOMMENDED";
    }>;
    strengths: z.ZodOptional<z.ZodArray<z.ZodString>>;
    concerns: z.ZodOptional<z.ZodArray<z.ZodString>>;
    remarks: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    evaluatedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const updateEvaluationSchema: z.ZodObject<{
    candidateId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
    recruiterId: z.ZodOptional<z.ZodString>;
    scoringVersion: z.ZodOptional<z.ZodEnum<{
        LEGACY_6: "LEGACY_6";
        POINT_100: "POINT_100";
    }>>;
    scores: z.ZodOptional<z.ZodObject<{
        roleFit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        experienceFit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        communication: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        industryExperience: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        compensationFit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        joiningProbability: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>>;
    scorecard: z.ZodOptional<z.ZodObject<{
        communication: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        roleKnowledge: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        relevantExperience: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        achievementEvidence: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        stability: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        locationFit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        ctcFit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        joiningProbability: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>>;
    recommendation: z.ZodOptional<z.ZodEnum<{
        STRONG_RECOMMEND: "STRONG_RECOMMEND";
        RECOMMEND: "RECOMMEND";
        HOLD: "HOLD";
        REJECT: "REJECT";
        STRONGLY_RECOMMENDED: "STRONGLY_RECOMMENDED";
        RECOMMENDED: "RECOMMENDED";
        NOT_RECOMMENDED: "NOT_RECOMMENDED";
    }>>;
    strengths: z.ZodOptional<z.ZodArray<z.ZodString>>;
    concerns: z.ZodOptional<z.ZodArray<z.ZodString>>;
    remarks: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    evaluatedAt: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
}, z.core.$strip>;
export declare const evaluationListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        recommendation: "recommendation";
        evaluatedAt: "evaluatedAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    candidateId: z.ZodOptional<z.ZodString>;
    mandateId: z.ZodOptional<z.ZodString>;
    recruiterId: z.ZodOptional<z.ZodString>;
    recommendation: z.ZodOptional<z.ZodEnum<{
        STRONG_RECOMMEND: "STRONG_RECOMMEND";
        RECOMMEND: "RECOMMEND";
        HOLD: "HOLD";
        REJECT: "REJECT";
        STRONGLY_RECOMMENDED: "STRONGLY_RECOMMENDED";
        RECOMMENDED: "RECOMMENDED";
        NOT_RECOMMENDED: "NOT_RECOMMENDED";
    }>>;
}, z.core.$strip>;
export type CreateEvaluationInput = z.infer<typeof createEvaluationSchema>;
export type UpdateEvaluationInput = z.infer<typeof updateEvaluationSchema>;
export type EvaluationListQueryInput = z.infer<typeof evaluationListQuerySchema>;
