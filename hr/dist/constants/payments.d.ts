export declare const PAYMENT_METHODS: readonly ["BANK_TRANSFER", "UPI", "NEFT", "RTGS", "CHEQUE", "CASH", "CARD"];
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];
export declare const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string>;
export declare const PAYMENT_STATUSES: readonly ["PENDING", "COMPLETED", "FAILED", "REVERSED"];
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];
export declare const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string>;
export declare function isCompletedPaymentStatus(status: string): status is "COMPLETED";
