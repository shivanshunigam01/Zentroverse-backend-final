export declare const SUBMISSION_STATUSES: readonly ["DRAFT", "SUBMITTED", "UNDER_REVIEW", "SHORTLISTED", "REJECTED", "WITHDRAWN"];
export type SubmissionStatus = (typeof SUBMISSION_STATUSES)[number];
export declare const SUBMISSION_STATUS_LABELS: Record<SubmissionStatus, string>;
export declare const SUBMISSION_ACTIVE_STATUSES: readonly ["DRAFT", "SUBMITTED", "UNDER_REVIEW", "SHORTLISTED"];
export declare function isActiveSubmissionStatus(status: string): boolean;
/** Statuses that count as a successful client introduction (ownership trigger). */
export declare const SUBMISSION_INTRODUCED_STATUSES: readonly ["SUBMITTED", "UNDER_REVIEW", "SHORTLISTED"];
export declare function isIntroducedSubmissionStatus(status: string): boolean;
/**
 * Client-side duplicate claim statuses.
 * NOT_DUPLICATE aliases UNIQUE for starter-kit naming; both accepted.
 */
export declare const SUBMISSION_DUPLICATE_STATUSES: readonly ["NOT_CHECKED", "UNIQUE", "NOT_DUPLICATE", "POSSIBLE_DUPLICATE", "CONFIRMED_DUPLICATE", "DISPUTED"];
export type SubmissionDuplicateStatus = (typeof SUBMISSION_DUPLICATE_STATUSES)[number];
export declare const SUBMISSION_DUPLICATE_STATUS_LABELS: Record<SubmissionDuplicateStatus, string>;
export declare const OWNERSHIP_STATUSES: readonly ["ACTIVE", "EXPIRED", "DISPUTED"];
export type OwnershipStatus = (typeof OWNERSHIP_STATUSES)[number];
export declare const OWNERSHIP_STATUS_LABELS: Record<OwnershipStatus, string>;
export declare const FIT_REASONS_MAX = 3;
export declare const FIT_REASON_MAX_LENGTH = 240;
export declare const RISK_GAP_MAX_LENGTH = 500;
