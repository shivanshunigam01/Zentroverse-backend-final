import { type EvaluationScorecard } from "../constants/evaluations.js";
import type { AuthContext } from "../types/auth.js";
import type { CreateEvaluationInput, EvaluationListQueryInput, UpdateEvaluationInput } from "../validators/evaluation.validators.js";
export declare function toPublicEvaluation(doc: Record<string, unknown>): {
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    mandateId: string;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
    } | null;
    recruiterId: string;
    recruiter: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: EvaluationScorecard;
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    recommendationLabel: string;
    strengths: string[];
    concerns: string[];
    remarks: string;
    evaluatedAt: string;
    createdAt: string;
    updatedAt: string;
};
export declare function listEvaluations(auth: AuthContext, query: EvaluationListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        candidateId: string;
        candidate: {
            id: string;
            name: string;
            email: string;
            candidateNumber: string;
        } | null;
        mandateId: string;
        mandate: {
            id: string;
            mandateNumber: string;
            position: string;
            status: string;
        } | null;
        recruiterId: string;
        recruiter: {
            id: string;
            name: string;
            email: string;
            role: string;
        } | null;
        scoringVersion: "LEGACY_6" | "POINT_100";
        scores: {
            roleFit: number;
            experienceFit: number;
            communication: number;
            industryExperience: number;
            compensationFit: number;
            joiningProbability: number;
        };
        scorecard: EvaluationScorecard;
        totalScore: number;
        recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
        recommendationLabel: string;
        strengths: string[];
        concerns: string[];
        remarks: string;
        evaluatedAt: string;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getEvaluation(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    mandateId: string;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
    } | null;
    recruiterId: string;
    recruiter: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: EvaluationScorecard;
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    recommendationLabel: string;
    strengths: string[];
    concerns: string[];
    remarks: string;
    evaluatedAt: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createEvaluation(auth: AuthContext, input: CreateEvaluationInput): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    mandateId: string;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
    } | null;
    recruiterId: string;
    recruiter: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: EvaluationScorecard;
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    recommendationLabel: string;
    strengths: string[];
    concerns: string[];
    remarks: string;
    evaluatedAt: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateEvaluation(auth: AuthContext, id: string, input: UpdateEvaluationInput): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    mandateId: string;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
    } | null;
    recruiterId: string;
    recruiter: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: EvaluationScorecard;
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    recommendationLabel: string;
    strengths: string[];
    concerns: string[];
    remarks: string;
    evaluatedAt: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteEvaluation(auth: AuthContext, id: string): Promise<void>;
