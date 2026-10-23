export const JOINING_CONFIRMATION_STATUSES = [
    "EXPECTED",
    "CONFIRMED",
    "JOINED",
    "NO_SHOW",
    "WITHDRAWN",
];
export const JOINING_CONFIRMATION_STATUS_LABELS = {
    EXPECTED: "Expected",
    CONFIRMED: "Confirmed",
    JOINED: "Joined",
    NO_SHOW: "No show",
    WITHDRAWN: "Withdrawn",
};
export const JOINING_CONFIRMED_STATUSES = ["CONFIRMED", "JOINED"];
export function isConfirmedJoiningStatus(status) {
    return JOINING_CONFIRMED_STATUSES.includes(status);
}
//# sourceMappingURL=joinings.js.map