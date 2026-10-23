/**
 * Add N working days to a start date (start day itself is not counted).
 * Weekends (Sat/Sun) are skipped unless custom workingDays are provided.
 */
export declare function addWorkingDays(start: Date, workingDaysCount: number, workingDays?: string[]): Date;
export declare function addWorkingDaysFromKey(startKey: string, workingDaysCount: number, workingDays?: string[]): Date;
export declare function isPastWorkingDayDeadline(deadline: Date, now?: Date): boolean;
