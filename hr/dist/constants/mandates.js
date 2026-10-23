export const MANDATE_WORK_MODES = ["ONSITE", "HYBRID", "REMOTE"];
export const MANDATE_FEE_TYPES = ["FIXED", "PERCENTAGE"];
export const MANDATE_PRIORITIES = ["LOW", "MEDIUM", "HIGH", "URGENT"];
/**
 * OPEN remains the historical "approved for sourcing" status.
 * APPROVED is an explicit starter-kit alias; both allow sourcing/submission.
 */
export const MANDATE_STATUSES = [
    "DRAFT",
    "APPROVED",
    "OPEN",
    "ON_HOLD",
    "FILLED",
    "CANCELLED",
    "CLOSED",
];
export const MANDATE_SOURCING_STATUSES = ["APPROVED", "OPEN"];
export function isMandateOpenForSourcing(status) {
    return MANDATE_SOURCING_STATUSES.includes(status);
}
export const MANDATE_WORK_MODE_LABELS = {
    ONSITE: "On-site",
    HYBRID: "Hybrid",
    REMOTE: "Remote",
};
export const MANDATE_PRIORITY_LABELS = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
    URGENT: "Urgent",
};
export const MANDATE_STATUS_LABELS = {
    DRAFT: "Draft",
    APPROVED: "Approved",
    OPEN: "Open",
    ON_HOLD: "On hold",
    FILLED: "Filled",
    CANCELLED: "Cancelled",
    CLOSED: "Closed",
};
export const DEFAULT_SALARY_CURRENCY = "INR";
//# sourceMappingURL=mandates.js.map