/** Sends a day-before reminder, a due-day reminder, and a one-time overdue escalation. */
export declare function runInterviewFeedbackReminders(now?: Date): Promise<void>;
export declare function startInterviewFeedbackReminders(): NodeJS.Timeout;
