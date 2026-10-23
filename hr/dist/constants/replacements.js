export const REPLACEMENT_REASONS = [
    "PERFORMANCE",
    "RESIGNED",
    "ABSCONDING",
    "CLIENT_REQUEST",
    "ROLE_MISMATCH",
    "CULTURE_FIT",
    "SALARY_DELAY",
    "ROLE_CHANGED",
    "LOCATION_CHANGED",
    "COMPENSATION_CHANGED",
    "RETRENCHMENT",
    "REDUNDANCY",
    "BUSINESS_CLOSURE",
    "RESTRUCTURING",
    "UNSAFE_CONDITIONS",
    "CLIENT_MISCONDUCT",
    "OTHER",
];
export const REPLACEMENT_REASON_LABELS = {
    PERFORMANCE: "Performance / fit",
    RESIGNED: "Resigned",
    ABSCONDING: "Absconding",
    CLIENT_REQUEST: "Client request",
    ROLE_MISMATCH: "Role mismatch",
    CULTURE_FIT: "Culture fit",
    SALARY_DELAY: "Salary delayed / unpaid",
    ROLE_CHANGED: "Role changed",
    LOCATION_CHANGED: "Location changed",
    COMPENSATION_CHANGED: "Compensation changed",
    RETRENCHMENT: "Retrenchment",
    REDUNDANCY: "Redundancy",
    BUSINESS_CLOSURE: "Business closure",
    RESTRUCTURING: "Restructuring",
    UNSAFE_CONDITIONS: "Unsafe / unlawful conditions",
    CLIENT_MISCONDUCT: "Client misconduct",
    OTHER: "Other",
};
export const REPLACEMENT_STATUSES = [
    "ACTIVE",
    "REPLACEMENT_REQUESTED",
    "REPLACEMENT_IN_PROGRESS",
    "REPLACED",
    "EXPIRED",
    "CLOSED",
];
export const REPLACEMENT_STATUS_LABELS = {
    ACTIVE: "Active",
    REPLACEMENT_REQUESTED: "Requested",
    REPLACEMENT_IN_PROGRESS: "In progress",
    REPLACED: "Replaced",
    EXPIRED: "Expired",
    CLOSED: "Closed",
};
export const REPLACEMENT_OPEN_STATUSES = [
    "ACTIVE",
    "REPLACEMENT_REQUESTED",
    "REPLACEMENT_IN_PROGRESS",
];
export function isOpenReplacementStatus(status) {
    return REPLACEMENT_OPEN_STATUSES.includes(status);
}
export function isClosedReplacementStatus(status) {
    return status === "REPLACED" || status === "EXPIRED" || status === "CLOSED";
}
export const REPLACEMENT_ELIGIBILITY_RESULTS = ["APPROVED", "REVIEW", "NOT_ELIGIBLE"];
export const REPLACEMENT_ELIGIBILITY_LABELS = {
    APPROVED: "Approved",
    REVIEW: "Needs review",
    NOT_ELIGIBLE: "Not eligible",
};
export const MAX_FREE_REPLACEMENTS = 1;
//# sourceMappingURL=replacements.js.map