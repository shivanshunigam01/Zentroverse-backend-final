import { addUtcDays, dateKeyFromDate } from "./dates.js";
/**
 * Guarantee window = joining date + replacementPeriodDays from mandate/agreement.
 * Only enable milestones whose day falls within the guarantee period.
 */
export function planGuaranteeMilestones(joiningDate, replacementPeriodDays) {
    const days = Math.max(0, Math.floor(Number(replacementPeriodDays) || 0));
    const guaranteeStartDate = new Date(joiningDate);
    const guaranteeEndDate = addUtcDays(guaranteeStartDate, days);
    return {
        milestone30Enabled: days >= 30,
        milestone60Enabled: days >= 60,
        milestone90Enabled: days >= 90,
        guaranteeStartDate,
        guaranteeEndDate,
        replacementPeriodDays: days,
    };
}
export function daysRemainingInGuarantee(guaranteeEndDate, now = new Date()) {
    const end = dateKeyFromDate(guaranteeEndDate);
    const today = dateKeyFromDate(now);
    const ms = new Date(`${end}T00:00:00.000Z`).getTime() - new Date(`${today}T00:00:00.000Z`).getTime();
    return Math.ceil(ms / 86_400_000);
}
//# sourceMappingURL=guarantee-period.js.map