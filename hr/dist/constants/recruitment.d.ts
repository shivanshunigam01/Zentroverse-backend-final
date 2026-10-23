export declare const JOB_STATUSES: readonly ["open", "paused", "closed"];
export type JobStatus = (typeof JOB_STATUSES)[number];
export declare const JOB_EMPLOYMENT_TYPES: readonly ["full_time", "part_time", "contract", "intern"];
export declare const APPLICATION_STAGES: readonly ["applied", "screening", "interview", "technical", "hr_round", "hired", "rejected"];
export type ApplicationStage = (typeof APPLICATION_STAGES)[number];
export declare const KANBAN_STAGES: readonly ["applied", "screening", "interview", "technical", "hr_round", "hired"];
export declare const APPLICATION_STAGE_LABELS: Record<ApplicationStage, string>;
