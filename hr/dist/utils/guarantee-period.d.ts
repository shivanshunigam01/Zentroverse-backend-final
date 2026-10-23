export type GuaranteeMilestonePlan = {
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    guaranteeStartDate: Date;
    guaranteeEndDate: Date;
    replacementPeriodDays: number;
};
/**
 * Guarantee window = joining date + replacementPeriodDays from mandate/agreement.
 * Only enable milestones whose day falls within the guarantee period.
 */
export declare function planGuaranteeMilestones(joiningDate: Date, replacementPeriodDays: number): GuaranteeMilestonePlan;
export declare function daysRemainingInGuarantee(guaranteeEndDate: Date, now?: Date): number;
