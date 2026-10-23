export const OFFER_STATUSES = [
    "DRAFT",
    "SENT",
    "ACCEPTED",
    "REJECTED",
    "WITHDRAWN",
    "EXPIRED",
];
export const OFFER_STATUS_LABELS = {
    DRAFT: "Draft",
    SENT: "Sent",
    ACCEPTED: "Accepted",
    REJECTED: "Rejected",
    WITHDRAWN: "Withdrawn",
    EXPIRED: "Expired",
};
export const OFFER_ACTIVE_STATUSES = ["DRAFT", "SENT", "ACCEPTED"];
export function isActiveOfferStatus(status) {
    return OFFER_ACTIVE_STATUSES.includes(status);
}
export const JOINING_STATUSES = ["PENDING", "JOINED", "NO_SHOW", "WITHDRAWN"];
export const JOINING_STATUS_LABELS = {
    PENDING: "Pending",
    JOINED: "Joined",
    NO_SHOW: "No show",
    WITHDRAWN: "Withdrawn",
};
//# sourceMappingURL=offers.js.map