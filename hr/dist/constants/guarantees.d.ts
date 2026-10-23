export declare const GUARANTEE_MILESTONE_STATUSES: readonly ["PENDING", "COMPLETED", "AT_RISK", "FAILED"];
export type GuaranteeMilestoneStatus = (typeof GUARANTEE_MILESTONE_STATUSES)[number];
export declare const GUARANTEE_MILESTONE_STATUS_LABELS: Record<GuaranteeMilestoneStatus, string>;
export declare const RETENTION_STATUSES: readonly ["IN_PROGRESS", "ON_TRACK", "AT_RISK", "RETAINED", "REPLACED", "DROPPED"];
export type RetentionStatus = (typeof RETENTION_STATUSES)[number];
export declare const RETENTION_STATUS_LABELS: Record<RetentionStatus, string>;
export declare const DEFAULT_GUARANTEE_DAYS = 90;
