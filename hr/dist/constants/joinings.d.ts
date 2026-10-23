export declare const JOINING_CONFIRMATION_STATUSES: readonly ["EXPECTED", "CONFIRMED", "JOINED", "NO_SHOW", "WITHDRAWN"];
export type JoiningConfirmationStatus = (typeof JOINING_CONFIRMATION_STATUSES)[number];
export declare const JOINING_CONFIRMATION_STATUS_LABELS: Record<JoiningConfirmationStatus, string>;
export declare const JOINING_CONFIRMED_STATUSES: readonly ["CONFIRMED", "JOINED"];
export declare function isConfirmedJoiningStatus(status: string): boolean;
