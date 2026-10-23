export declare const INTERVIEW_TYPES: readonly ["PHONE", "VIDEO", "IN_PERSON", "ONLINE"];
export type InterviewType = (typeof INTERVIEW_TYPES)[number];
export declare const INTERVIEW_TYPE_LABELS: Record<InterviewType, string>;
export declare const INTERVIEW_STATUSES: readonly ["SCHEDULED", "COMPLETED", "CANCELLED", "NO_SHOW", "RESCHEDULED"];
export type InterviewStatus = (typeof INTERVIEW_STATUSES)[number];
export declare const INTERVIEW_STATUS_LABELS: Record<InterviewStatus, string>;
/** SELECT aliases SELECTED for starter-kit naming; both accepted. HOLD aliases ON_HOLD. */
export declare const INTERVIEW_DECISIONS: readonly ["SELECTED", "SELECT", "NEXT_ROUND", "REJECTED", "REJECT", "ON_HOLD", "HOLD"];
export type InterviewDecision = (typeof INTERVIEW_DECISIONS)[number];
export declare const INTERVIEW_DECISION_LABELS: Record<InterviewDecision, string>;
export declare function normalizeInterviewDecision(value: string | undefined | null): InterviewDecision | "";
export declare const INTERVIEW_FEEDBACK_FIELDS: readonly ["technicalScore", "communicationScore", "cultureFitScore", "leadershipScore", "compensationFit", "joiningRisk"];
export type InterviewFeedbackField = (typeof INTERVIEW_FEEDBACK_FIELDS)[number];
export declare const INTERVIEW_FEEDBACK_LABELS: Record<InterviewFeedbackField, string>;
export declare const INTERVIEW_SCORE_MIN = 0;
export declare const INTERVIEW_SCORE_MAX = 10;
export declare const INTERVIEW_DURATION_MIN = 15;
export declare const INTERVIEW_DURATION_MAX = 480;
export declare const INTERVIEW_DURATION_DEFAULT = 60;
