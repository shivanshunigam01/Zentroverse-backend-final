import { type PipelineStage } from "../constants/pipeline.js";
import type { AuthContext } from "../types/auth.js";
import type { PipelineListQueryInput, PipelineTransitionInput } from "../validators/pipeline.validators.js";
type CandidateRef = {
    id: string;
    name: string;
    email: string;
    candidateNumber: string;
    status: string;
};
type MandateRef = {
    id: string;
    mandateNumber: string;
    position: string;
    status: string;
    clientId: string;
};
type QuickAction = {
    label: string;
    href: string;
};
type PipelineContext = {
    consent?: Record<string, unknown> | null;
    evaluation?: Record<string, unknown> | null;
    submission?: Record<string, unknown> | null;
    interview?: Record<string, unknown> | null;
    offer?: Record<string, unknown> | null;
    joining?: Record<string, unknown> | null;
    guarantee?: Record<string, unknown> | null;
    replacement?: Record<string, unknown> | null;
    linkedViaApplication?: boolean;
};
export declare function derivePipelineStage(ctx: PipelineContext): PipelineStage;
/**
 * Mandate-centric pipeline: stages are derived from linked recruitment entities
 * (consent → evaluation → submission → interview → offer → joining → guarantee/replacement).
 */
export declare function getMandatePipeline(auth: AuthContext, query: PipelineListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    mandates: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
        clientId: string;
    }[];
    stageCounts: Record<"SUBMITTED" | "JOINED" | "CLOSED" | "INTERVIEW" | "SOURCED" | "CONSENT_PENDING" | "CONSENT_RECEIVED" | "EVALUATED" | "DUPLICATE_REVIEW" | "OFFER" | "OFFER_ACCEPTED" | "NOT_JOINED" | "GUARANTEE" | "REPLACEMENT", number>;
    items: {
        candidateId: string;
        candidate: CandidateRef;
        mandateId: string;
        mandate: MandateRef;
        stage: PipelineStage;
        stageLabel: string;
        submissionId: string;
        evaluationScore: number | null;
        ownershipStatus: string;
        quickActions: QuickAction[];
    }[];
}>;
export declare function transitionPipelineStage(auth: AuthContext, input: PipelineTransitionInput): Promise<{
    message: string;
    currentStage: PipelineStage;
    stageLabel: string;
}>;
export {};
