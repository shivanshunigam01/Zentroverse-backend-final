export declare const OWNERSHIP_STATUSES: readonly ["ACTIVE", "EXPIRED", "DISPUTED"];
export type OwnershipStatus = (typeof OWNERSHIP_STATUSES)[number];
export declare function addMonthsUtc(start: Date, months: number): Date;
export declare function calculateOwnershipWindow(submittedAt: Date, ownershipPeriodMonths?: number | null): {
    ownershipStartDate: Date;
    ownershipEndDate: Date;
    ownershipPeriodMonths: number;
};
export declare function resolveOwnershipStatus(input: {
    ownershipStartDate?: Date | null;
    ownershipEndDate?: Date | null;
    disputed?: boolean;
    now?: Date;
}): OwnershipStatus;
/** Convenience: extend end date by calendar days when needed. */
export declare function extendOwnershipEnd(end: Date, extraDays: number): Date;
