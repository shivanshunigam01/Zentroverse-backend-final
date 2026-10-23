export declare const REPLACEMENT_ELIGIBILITY_RESULTS: readonly ["APPROVED", "REVIEW", "NOT_ELIGIBLE"];
export type ReplacementEligibilityResult = (typeof REPLACEMENT_ELIGIBILITY_RESULTS)[number];
export declare const REPLACEMENT_ELIGIBLE_REASONS: readonly ["RESIGNED", "PERFORMANCE", "CULTURE_FIT", "ROLE_MISMATCH", "ABSCONDING"];
export declare const REPLACEMENT_EXCLUSION_REASONS: readonly ["SALARY_DELAY", "ROLE_CHANGED", "LOCATION_CHANGED", "COMPENSATION_CHANGED", "RETRENCHMENT", "REDUNDANCY", "BUSINESS_CLOSURE", "RESTRUCTURING", "UNSAFE_CONDITIONS", "CLIENT_MISCONDUCT", "OTHER_CLIENT_CAUSED"];
export type ReplacementEligibilityInput = {
    joiningDate: Date;
    requestedDate: Date;
    replacementPeriodDays: number;
    reason: string;
    /** Exclusion flags from client change / non-candidate causes */
    exclusions?: {
        salaryDelayed?: boolean;
        roleChanged?: boolean;
        locationChanged?: boolean;
        compensationChanged?: boolean;
        retrenchment?: boolean;
        redundancy?: boolean;
        businessClosure?: boolean;
        restructuring?: boolean;
        unsafeConditions?: boolean;
        clientMisconduct?: boolean;
    };
    invoicePaidOnTime?: boolean | null;
    freeReplacementsUsed?: number;
    maxFreeReplacements?: number;
    /** Admin override skips hard blocks except logging */
    manualOverride?: boolean;
};
export type ReplacementEligibilityOutput = {
    result: ReplacementEligibilityResult;
    reasons: string[];
    withinGuaranteePeriod: boolean;
    freeReplacementAvailable: boolean;
};
/**
 * Evaluate free replacement eligibility against starter-kit rules.
 */
export declare function evaluateReplacementEligibility(input: ReplacementEligibilityInput): ReplacementEligibilityOutput;
