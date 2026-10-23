import { DEFAULT_OWNERSHIP_PERIOD_MONTHS, } from "../constants/agreements.js";
import { addUtcDays, dateKeyFromDate } from "./dates.js";
export const OWNERSHIP_STATUSES = ["ACTIVE", "EXPIRED", "DISPUTED"];
export function addMonthsUtc(start, months) {
    const next = new Date(start);
    const day = next.getUTCDate();
    next.setUTCMonth(next.getUTCMonth() + Math.max(0, Math.floor(months)));
    // Clamp overflow (e.g. Jan 31 + 1 month)
    if (next.getUTCDate() < day) {
        next.setUTCDate(0);
    }
    return next;
}
export function calculateOwnershipWindow(submittedAt, ownershipPeriodMonths) {
    const months = ownershipPeriodMonths === undefined || ownershipPeriodMonths === null
        ? DEFAULT_OWNERSHIP_PERIOD_MONTHS
        : Math.max(0, Number(ownershipPeriodMonths) || 0);
    const ownershipStartDate = new Date(submittedAt);
    const ownershipEndDate = addMonthsUtc(ownershipStartDate, months);
    return { ownershipStartDate, ownershipEndDate, ownershipPeriodMonths: months };
}
export function resolveOwnershipStatus(input) {
    if (input.disputed)
        return "DISPUTED";
    if (!input.ownershipStartDate || !input.ownershipEndDate)
        return "EXPIRED";
    const now = input.now ?? new Date();
    const today = dateKeyFromDate(now);
    const end = dateKeyFromDate(input.ownershipEndDate);
    if (today > end)
        return "EXPIRED";
    return "ACTIVE";
}
/** Convenience: extend end date by calendar days when needed. */
export function extendOwnershipEnd(end, extraDays) {
    return addUtcDays(end, extraDays);
}
//# sourceMappingURL=ownership.js.map