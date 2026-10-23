/** Legacy 1–10 score fields retained for historical evaluations. */
export const LEGACY_EVALUATION_SCORE_FIELDS = [
    "roleFit",
    "experienceFit",
    "communication",
    "industryExperience",
    "compensationFit",
    "joiningProbability",
];
/** Official Zentroverse 100-point scorecard (max points per dimension). */
export const EVALUATION_SCORECARD_MAX = {
    communication: 10,
    roleKnowledge: 20,
    relevantExperience: 20,
    achievementEvidence: 15,
    stability: 10,
    locationFit: 10,
    ctcFit: 5,
    joiningProbability: 10,
};
export const EVALUATION_SCORECARD_FIELDS = Object.keys(EVALUATION_SCORECARD_MAX);
export const EVALUATION_SCORECARD_LABELS = {
    communication: "Communication",
    roleKnowledge: "Role knowledge",
    relevantExperience: "Relevant experience",
    achievementEvidence: "Achievement evidence",
    stability: "Stability",
    locationFit: "Location / mobility fit",
    ctcFit: "CTC fit",
    joiningProbability: "Joining probability",
};
export const EVALUATION_TOTAL_MAX = 100;
/** @deprecated Prefer EVALUATION_SCORECARD_FIELDS — kept for legacy imports. */
export const EVALUATION_SCORE_FIELDS = LEGACY_EVALUATION_SCORE_FIELDS;
export const EVALUATION_SCORE_LABELS = {
    roleFit: "Role fit",
    experienceFit: "Experience fit",
    communication: "Communication",
    industryExperience: "Industry experience",
    compensationFit: "Compensation fit",
    joiningProbability: "Joining probability",
};
export const EVALUATION_SCORING_VERSIONS = ["LEGACY_6", "POINT_100"];
/**
 * Storage recommendations. New evaluations use STRONG_RECOMMEND / RECOMMEND / HOLD / REJECT.
 * Legacy values remain valid for historical records.
 */
export const EVALUATION_RECOMMENDATIONS = [
    "STRONG_RECOMMEND",
    "RECOMMEND",
    "HOLD",
    "REJECT",
    "STRONGLY_RECOMMENDED",
    "RECOMMENDED",
    "NOT_RECOMMENDED",
];
export const EVALUATION_RECOMMENDATION_LABELS = {
    STRONG_RECOMMEND: "Strong recommend",
    RECOMMEND: "Recommend",
    HOLD: "Hold",
    REJECT: "Reject",
    STRONGLY_RECOMMENDED: "Strongly recommended",
    RECOMMENDED: "Recommended",
    NOT_RECOMMENDED: "Not recommended",
};
export const EVALUATION_SCORE_MIN = 0;
export const EVALUATION_SCORE_MAX = 10;
export function normalizeRecommendation(value) {
    switch (value) {
        case "STRONGLY_RECOMMENDED":
            return "STRONG_RECOMMEND";
        case "RECOMMENDED":
            return "RECOMMEND";
        case "NOT_RECOMMENDED":
            return "REJECT";
        case "STRONG_RECOMMEND":
        case "RECOMMEND":
        case "HOLD":
        case "REJECT":
            return value;
        default:
            return "HOLD";
    }
}
//# sourceMappingURL=evaluations.js.map