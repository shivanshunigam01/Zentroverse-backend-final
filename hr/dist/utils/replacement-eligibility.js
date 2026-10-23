export const REPLACEMENT_ELIGIBILITY_RESULTS = ["APPROVED", "REVIEW", "NOT_ELIGIBLE"];
export const REPLACEMENT_ELIGIBLE_REASONS = [
    "RESIGNED",
    "PERFORMANCE",
    "CULTURE_FIT",
    "ROLE_MISMATCH",
    "ABSCONDING",
];
export const REPLACEMENT_EXCLUSION_REASONS = [
    "SALARY_DELAY",
    "ROLE_CHANGED",
    "LOCATION_CHANGED",
    "COMPENSATION_CHANGED",
    "RETRENCHMENT",
    "REDUNDANCY",
    "BUSINESS_CLOSURE",
    "RESTRUCTURING",
    "UNSAFE_CONDITIONS",
    "CLIENT_MISCONDUCT",
    "OTHER_CLIENT_CAUSED",
];
function hasExclusion(exclusions) {
    if (!exclusions)
        return [];
    const hits = [];
    if (exclusions.salaryDelayed)
        hits.push("Salary not paid or delayed");
    if (exclusions.roleChanged)
        hits.push("Major role change");
    if (exclusions.locationChanged)
        hits.push("Major location change");
    if (exclusions.compensationChanged)
        hits.push("Major compensation change");
    if (exclusions.retrenchment)
        hits.push("Retrenchment");
    if (exclusions.redundancy)
        hits.push("Redundancy");
    if (exclusions.businessClosure)
        hits.push("Business closure");
    if (exclusions.restructuring)
        hits.push("Restructuring");
    if (exclusions.unsafeConditions)
        hits.push("Unsafe or unlawful working conditions");
    if (exclusions.clientMisconduct)
        hits.push("Client misconduct");
    return hits;
}
/**
 * Evaluate free replacement eligibility against starter-kit rules.
 */
export function evaluateReplacementEligibility(input) {
    const reasons = [];
    const maxFree = input.maxFreeReplacements ?? 1;
    const used = input.freeReplacementsUsed ?? 0;
    const freeReplacementAvailable = used < maxFree;
    const periodMs = Math.max(0, Math.floor(input.replacementPeriodDays || 0)) * 86_400_000;
    const elapsed = input.requestedDate.getTime() - input.joiningDate.getTime();
    const withinGuaranteePeriod = elapsed >= 0 && elapsed <= periodMs;
    if (!withinGuaranteePeriod) {
        reasons.push("Request is outside the replacement guarantee period");
    }
    if (!freeReplacementAvailable && !input.manualOverride) {
        reasons.push("One free replacement has already been used");
    }
    const exclusionHits = hasExclusion(input.exclusions);
    if (exclusionHits.length) {
        reasons.push(...exclusionHits);
    }
    const exclusionReasonSet = new Set(REPLACEMENT_EXCLUSION_REASONS);
    if (exclusionReasonSet.has(input.reason)) {
        reasons.push(`Reason "${input.reason}" is excluded from free replacement`);
    }
    const eligibleReasonSet = new Set(REPLACEMENT_ELIGIBLE_REASONS);
    if (!eligibleReasonSet.has(input.reason) && !exclusionReasonSet.has(input.reason)) {
        if (input.reason === "CLIENT_REQUEST" || input.reason === "OTHER") {
            reasons.push("Reason requires manual review");
        }
    }
    if (input.invoicePaidOnTime === false) {
        reasons.push("Original invoice was not paid on time");
    }
    if (input.manualOverride) {
        return {
            result: "APPROVED",
            reasons: reasons.length ? [`Manual override: ${reasons.join("; ")}`] : ["Manual override"],
            withinGuaranteePeriod,
            freeReplacementAvailable,
        };
    }
    if (exclusionHits.length || exclusionReasonSet.has(input.reason)) {
        return {
            result: "NOT_ELIGIBLE",
            reasons,
            withinGuaranteePeriod,
            freeReplacementAvailable,
        };
    }
    if (!withinGuaranteePeriod || !freeReplacementAvailable) {
        return {
            result: "NOT_ELIGIBLE",
            reasons,
            withinGuaranteePeriod,
            freeReplacementAvailable,
        };
    }
    if (input.invoicePaidOnTime === false ||
        input.reason === "CLIENT_REQUEST" ||
        input.reason === "OTHER" ||
        input.invoicePaidOnTime === null ||
        input.invoicePaidOnTime === undefined) {
        if (!eligibleReasonSet.has(input.reason) || input.invoicePaidOnTime !== true) {
            return {
                result: "REVIEW",
                reasons: reasons.length ? reasons : ["Requires manual review"],
                withinGuaranteePeriod,
                freeReplacementAvailable,
            };
        }
    }
    return {
        result: "APPROVED",
        reasons: ["Eligible for one free replacement within guarantee period"],
        withinGuaranteePeriod,
        freeReplacementAvailable,
    };
}
//# sourceMappingURL=replacement-eligibility.js.map