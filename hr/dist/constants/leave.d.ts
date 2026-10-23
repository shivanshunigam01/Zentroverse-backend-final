export declare const LEAVE_REQUEST_STATUSES: readonly ["pending", "approved", "rejected", "cancelled"];
export type LeaveRequestStatus = (typeof LEAVE_REQUEST_STATUSES)[number];
export declare const ACTIVE_LEAVE_REQUEST_STATUSES: readonly ["pending", "approved"];
export declare const DEFAULT_LEAVE_TYPES: readonly [{
    readonly name: "Annual";
    readonly code: "ANNUAL";
    readonly maxDays: 18;
    readonly isPaid: true;
}, {
    readonly name: "Sick";
    readonly code: "SICK";
    readonly maxDays: 12;
    readonly isPaid: true;
}, {
    readonly name: "Casual";
    readonly code: "CASUAL";
    readonly maxDays: 7;
    readonly isPaid: true;
}, {
    readonly name: "Parental";
    readonly code: "PARENTAL";
    readonly maxDays: 90;
    readonly isPaid: true;
}, {
    readonly name: "Unpaid";
    readonly code: "UNPAID";
    readonly maxDays: 30;
    readonly isPaid: false;
}, {
    readonly name: "Comp-off";
    readonly code: "COMP";
    readonly maxDays: 5;
    readonly isPaid: true;
}];
