import { EVALUATION_SCORECARD_MAX, type EvaluationScorecard, type EvaluationScores, type EvaluationScoringVersion } from "../constants/evaluations.js";
/** Legacy average of 1–10 dimensions (historical evaluations). */
export declare function calculateLegacyTotalScore(scores: Partial<EvaluationScores> | null | undefined): number;
/** @deprecated Use calculateLegacyTotalScore or calculateScorecardTotal. */
export declare function calculateTotalScore(scores: Partial<EvaluationScores> | null | undefined): number;
export declare function emptyScorecard(): EvaluationScorecard;
export declare function clampScorecardField(field: keyof typeof EVALUATION_SCORECARD_MAX, value: number): number;
export declare function normalizeScorecard(input: Partial<EvaluationScorecard> | null | undefined): EvaluationScorecard;
/** Sum of 100-point scorecard dimensions. */
export declare function calculateScorecardTotal(scorecard: Partial<EvaluationScorecard> | null | undefined): number;
/**
 * Map legacy 1–10 averages into an approximate 100-point scorecard for display only.
 * Does not mutate stored legacy scores.
 */
export declare function approximateScorecardFromLegacy(scores: Partial<EvaluationScores> | null | undefined): EvaluationScorecard;
export declare function resolveEvaluationTotal(input: {
    scoringVersion?: EvaluationScoringVersion | string | null;
    scorecard?: Partial<EvaluationScorecard> | null;
    scores?: Partial<EvaluationScores> | null;
    totalScore?: number | null;
}): number;
