/**
 * Invoice statuses.
 * ISSUED is the starter-kit name for a sent invoice; SENT is retained for backward compatibility.
 * OVERDUE is computed/set when due date has passed and balance remains.
 */
export declare const INVOICE_STATUSES: readonly ["DRAFT", "SENT", "ISSUED", "PARTIALLY_PAID", "PAID", "OVERDUE", "CANCELLED"];
export type InvoiceStatus = (typeof INVOICE_STATUSES)[number];
export declare const INVOICE_STATUS_LABELS: Record<InvoiceStatus, string>;
export declare const INVOICE_OPEN_STATUSES: readonly ["DRAFT", "SENT", "ISSUED", "PARTIALLY_PAID", "OVERDUE"];
export declare function isOpenInvoiceStatus(status: string): boolean;
export declare const GST_SPLIT_MODES: readonly ["CGST_SGST", "IGST", "NONE"];
export type GstSplitMode = (typeof GST_SPLIT_MODES)[number];
