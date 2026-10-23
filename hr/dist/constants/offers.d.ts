export declare const OFFER_STATUSES: readonly ["DRAFT", "SENT", "ACCEPTED", "REJECTED", "WITHDRAWN", "EXPIRED"];
export type OfferStatus = (typeof OFFER_STATUSES)[number];
export declare const OFFER_STATUS_LABELS: Record<OfferStatus, string>;
export declare const OFFER_ACTIVE_STATUSES: readonly ["DRAFT", "SENT", "ACCEPTED"];
export declare function isActiveOfferStatus(status: string): boolean;
export declare const JOINING_STATUSES: readonly ["PENDING", "JOINED", "NO_SHOW", "WITHDRAWN"];
export type JoiningStatus = (typeof JOINING_STATUSES)[number];
export declare const JOINING_STATUS_LABELS: Record<JoiningStatus, string>;
