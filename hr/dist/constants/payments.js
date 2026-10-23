export const PAYMENT_METHODS = [
    "BANK_TRANSFER",
    "UPI",
    "NEFT",
    "RTGS",
    "CHEQUE",
    "CASH",
    "CARD",
];
export const PAYMENT_METHOD_LABELS = {
    BANK_TRANSFER: "Bank transfer",
    UPI: "UPI",
    NEFT: "NEFT",
    RTGS: "RTGS",
    CHEQUE: "Cheque",
    CASH: "Cash",
    CARD: "Card",
};
export const PAYMENT_STATUSES = ["PENDING", "COMPLETED", "FAILED", "REVERSED"];
export const PAYMENT_STATUS_LABELS = {
    PENDING: "Pending",
    COMPLETED: "Completed",
    FAILED: "Failed",
    REVERSED: "Reversed",
};
export function isCompletedPaymentStatus(status) {
    return status === "COMPLETED";
}
//# sourceMappingURL=payments.js.map