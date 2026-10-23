/**
 * Invoice statuses.
 * ISSUED is the starter-kit name for a sent invoice; SENT is retained for backward compatibility.
 * OVERDUE is computed/set when due date has passed and balance remains.
 */
export const INVOICE_STATUSES = [
    "DRAFT",
    "SENT",
    "ISSUED",
    "PARTIALLY_PAID",
    "PAID",
    "OVERDUE",
    "CANCELLED",
];
export const INVOICE_STATUS_LABELS = {
    DRAFT: "Draft",
    SENT: "Sent",
    ISSUED: "Issued",
    PARTIALLY_PAID: "Partially paid",
    PAID: "Paid",
    OVERDUE: "Overdue",
    CANCELLED: "Cancelled",
};
export const INVOICE_OPEN_STATUSES = [
    "DRAFT",
    "SENT",
    "ISSUED",
    "PARTIALLY_PAID",
    "OVERDUE",
];
export function isOpenInvoiceStatus(status) {
    return INVOICE_OPEN_STATUSES.includes(status);
}
export const GST_SPLIT_MODES = ["CGST_SGST", "IGST", "NONE"];
//# sourceMappingURL=invoices.js.map