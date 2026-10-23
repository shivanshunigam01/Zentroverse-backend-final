/** Legacy 1–10 score fields retained for historical evaluations. */
export declare const LEGACY_EVALUATION_SCORE_FIELDS: readonly ["roleFit", "experienceFit", "communication", "industryExperience", "compensationFit", "joiningProbability"];
export type LegacyEvaluationScoreField = (typeof LEGACY_EVALUATION_SCORE_FIELDS)[number];
/** Official Zentroverse 100-point scorecard (max points per dimension). */
export declare const EVALUATION_SCORECARD_MAX: {
    readonly communication: 10;
    readonly roleKnowledge: 20;
    readonly relevantExperience: 20;
    readonly achievementEvidence: 15;
    readonly stability: 10;
    readonly locationFit: 10;
    readonly ctcFit: 5;
    readonly joiningProbability: 10;
};
export declare const EVALUATION_SCORECARD_FIELDS: (keyof typeof EVALUATION_SCORECARD_MAX)[];
export type EvaluationScorecardField = (typeof EVALUATION_SCORECARD_FIELDS)[number];
export type EvaluationScorecard = Record<EvaluationScorecardField, number>;
export declare const EVALUATION_SCORECARD_LABELS: Record<EvaluationScorecardField, string>;
export declare const EVALUATION_TOTAL_MAX = 100;
/** @deprecated Prefer EVALUATION_SCORECARD_FIELDS — kept for legacy imports. */
export declare const EVALUATION_SCORE_FIELDS: readonly ["roleFit", "experienceFit", "communication", "industryExperience", "compensationFit", "joiningProbability"];
export type EvaluationScoreField = LegacyEvaluationScoreField;
export type EvaluationScores = Record<EvaluationScoreField, number>;
export declare const EVALUATION_SCORE_LABELS: Record<EvaluationScoreField, string>;
export declare const EVALUATION_SCORING_VERSIONS: readonly ["LEGACY_6", "POINT_100"];
export type EvaluationScoringVersion = (typeof EVALUATION_SCORING_VERSIONS)[number];
/**
 * Storage recommendations. New evaluations use STRONG_RECOMMEND / RECOMMEND / HOLD / REJECT.
 * Legacy values remain valid for historical records.
 */
export declare const EVALUATION_RECOMMENDATIONS: readonly ["STRONG_RECOMMEND", "RECOMMEND", "HOLD", "REJECT", "STRONGLY_RECOMMENDED", "RECOMMENDED", "NOT_RECOMMENDED"];
export type EvaluationRecommendation = (typeof EVALUATION_RECOMMENDATIONS)[number];
export declare const EVALUATION_RECOMMENDATION_LABELS: Record<EvaluationRecommendation, string>;
export declare const EVALUATION_SCORE_MIN = 0;
export declare const EVALUATION_SCORE_MAX = 10;
export declare function normalizeRecommendation(value: string | undefined | null): EvaluationRecommendation;
