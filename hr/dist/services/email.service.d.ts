export type SendEmailInput = {
    to: string;
    subject: string;
    text: string;
    html?: string;
};
export declare function sendEmail(input: SendEmailInput): Promise<boolean>;
export declare function buildInterviewInvitationEmail(input: {
    candidateName: string;
    jobTitle: string;
    companyName: string;
    interviewLink: string;
    expiryDate: string;
    durationMinutes: number;
}): {
    subject: string;
    text: string;
};
export declare function buildInterviewLink(token: string): string;
export type ScheduledInterviewEmailInput = {
    recipientName: string;
    candidateName: string;
    interviewerNames: string[];
    position: string;
    companyName: string;
    round: number;
    interviewTypeLabel: string;
    scheduledAtLabel: string;
    durationMinutes: number;
    isUpdate?: boolean;
};
export declare function buildCandidateInterviewEmail(input: ScheduledInterviewEmailInput): {
    subject: string;
    text: string;
};
export declare function buildInterviewerInterviewEmail(input: ScheduledInterviewEmailInput): {
    subject: string;
    text: string;
};
