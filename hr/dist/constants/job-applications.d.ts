export declare const JOB_APPLICATION_SOURCES: readonly ["CAREER_PAGE"];
export type JobApplicationSource = (typeof JOB_APPLICATION_SOURCES)[number];
export declare const JOB_APPLICATION_STATUSES: readonly ["APPLIED", "RESUME_SCREENING", "AI_INTERVIEW_PENDING", "AI_INTERVIEW_COMPLETED", "AI_INTERVIEW_PASSED", "AI_INTERVIEW_FAILED", "UNDER_REVIEW", "SHORTLISTED", "REJECTED", "WITHDRAWN"];
export type JobApplicationStatus = (typeof JOB_APPLICATION_STATUSES)[number];
export declare const JOB_APPLICATION_STATUS_LABELS: Record<JobApplicationStatus, string>;
