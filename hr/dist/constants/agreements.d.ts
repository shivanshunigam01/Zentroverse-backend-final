export declare const AGREEMENT_FEE_TYPES: readonly ["FIXED", "PERCENTAGE"];
export type AgreementFeeType = (typeof AGREEMENT_FEE_TYPES)[number];
export declare const AGREEMENT_STATUSES: readonly ["DRAFT", "ACTIVE", "EXPIRED", "TERMINATED"];
export type AgreementStatus = (typeof AGREEMENT_STATUSES)[number];
export declare const AGREEMENT_FEE_TYPE_LABELS: Record<AgreementFeeType, string>;
export declare const AGREEMENT_STATUS_LABELS: Record<AgreementStatus, string>;
/** Starter-kit recommended defaults (existing records may still hold older values). */
export declare const DEFAULT_PAYMENT_TERMS_DAYS = 15;
export declare const DEFAULT_OWNERSHIP_PERIOD_MONTHS = 12;
export declare const DEFAULT_DUPLICATE_NOTIFICATION_DAYS = 3;
export declare const DEFAULT_REPLACEMENT_PERIOD_DAYS = 90;
export declare const DEFAULT_GST_RATE_PERCENT = 18;
