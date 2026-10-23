/**
 * Mandate-centric recruitment pipeline stages (derived from existing entities).
 * Does not create duplicate candidate records — stages are computed from linked data.
 */
export declare const PIPELINE_STAGES: readonly ["SOURCED", "CONSENT_PENDING", "CONSENT_RECEIVED", "EVALUATED", "SUBMITTED", "DUPLICATE_REVIEW", "INTERVIEW", "OFFER", "OFFER_ACCEPTED", "JOINED", "NOT_JOINED", "GUARANTEE", "REPLACEMENT", "CLOSED"];
export type PipelineStage = (typeof PIPELINE_STAGES)[number];
export declare const PIPELINE_STAGE_LABELS: Record<PipelineStage, string>;
/** Allowed forward transitions for explicit stage moves (pipeline API). */
export declare const PIPELINE_ALLOWED_TRANSITIONS: Record<PipelineStage, readonly PipelineStage[]>;
