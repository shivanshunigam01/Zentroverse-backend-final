export declare const MANDATE_WORK_MODES: readonly ["ONSITE", "HYBRID", "REMOTE"];
export type MandateWorkMode = (typeof MANDATE_WORK_MODES)[number];
export declare const MANDATE_FEE_TYPES: readonly ["FIXED", "PERCENTAGE"];
export type MandateFeeType = (typeof MANDATE_FEE_TYPES)[number];
export declare const MANDATE_PRIORITIES: readonly ["LOW", "MEDIUM", "HIGH", "URGENT"];
export type MandatePriority = (typeof MANDATE_PRIORITIES)[number];
/**
 * OPEN remains the historical "approved for sourcing" status.
 * APPROVED is an explicit starter-kit alias; both allow sourcing/submission.
 */
export declare const MANDATE_STATUSES: readonly ["DRAFT", "APPROVED", "OPEN", "ON_HOLD", "FILLED", "CANCELLED", "CLOSED"];
export type MandateStatus = (typeof MANDATE_STATUSES)[number];
export declare const MANDATE_SOURCING_STATUSES: readonly ["APPROVED", "OPEN"];
export declare function isMandateOpenForSourcing(status: string): boolean;
export declare const MANDATE_WORK_MODE_LABELS: Record<MandateWorkMode, string>;
export declare const MANDATE_PRIORITY_LABELS: Record<MandatePriority, string>;
export declare const MANDATE_STATUS_LABELS: Record<MandateStatus, string>;
export declare const DEFAULT_SALARY_CURRENCY = "INR";
