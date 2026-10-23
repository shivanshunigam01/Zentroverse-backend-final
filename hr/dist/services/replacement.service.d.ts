import type { AuthContext } from "../types/auth.js";
import type { CreateReplacementInput, ReplacementListQueryInput, UpdateReplacementInput } from "../validators/replacement.validators.js";
export declare function toPublicReplacement(doc: Record<string, unknown>): {
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
    clientId: string;
    client: {
        id: string;
        companyName: string;
    } | null;
    joiningId: string;
    joining: {
        id: string;
        joiningDate: string;
        status: string;
    } | null;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementReasonLabel: string;
    replacementRequestedDate: string;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    statusLabel: string;
    replacementCandidateId: string;
    replacementCandidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityResultLabel: string;
    eligibilityReasons: string[];
    freeReplacement: boolean;
    exclusions: Record<string, boolean>;
    manualOverride: boolean;
    closedAt: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
};
export declare function listReplacements(auth: AuthContext, query: ReplacementListQueryInput): Promise<{
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
        clientId: string;
        client: {
            id: string;
            companyName: string;
        } | null;
        joiningId: string;
        joining: {
            id: string;
            joiningDate: string;
            status: string;
        } | null;
        replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
        replacementReasonLabel: string;
        replacementRequestedDate: string;
        status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
        statusLabel: string;
        replacementCandidateId: string;
        replacementCandidate: {
            id: string;
            name: string;
            email: string;
            candidateNumber: string;
        } | null;
        eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
        eligibilityResultLabel: string;
        eligibilityReasons: string[];
        freeReplacement: boolean;
        exclusions: Record<string, boolean>;
        manualOverride: boolean;
        closedAt: string;
        remarks: string;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getReplacement(auth: AuthContext, id: string): Promise<{
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
    clientId: string;
    client: {
        id: string;
        companyName: string;
    } | null;
    joiningId: string;
    joining: {
        id: string;
        joiningDate: string;
        status: string;
    } | null;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementReasonLabel: string;
    replacementRequestedDate: string;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    statusLabel: string;
    replacementCandidateId: string;
    replacementCandidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityResultLabel: string;
    eligibilityReasons: string[];
    freeReplacement: boolean;
    exclusions: Record<string, boolean>;
    manualOverride: boolean;
    closedAt: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createReplacement(auth: AuthContext, input: CreateReplacementInput): Promise<{
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
    clientId: string;
    client: {
        id: string;
        companyName: string;
    } | null;
    joiningId: string;
    joining: {
        id: string;
        joiningDate: string;
        status: string;
    } | null;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementReasonLabel: string;
    replacementRequestedDate: string;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    statusLabel: string;
    replacementCandidateId: string;
    replacementCandidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityResultLabel: string;
    eligibilityReasons: string[];
    freeReplacement: boolean;
    exclusions: Record<string, boolean>;
    manualOverride: boolean;
    closedAt: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateReplacement(auth: AuthContext, id: string, input: UpdateReplacementInput): Promise<{
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
    clientId: string;
    client: {
        id: string;
        companyName: string;
    } | null;
    joiningId: string;
    joining: {
        id: string;
        joiningDate: string;
        status: string;
    } | null;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementReasonLabel: string;
    replacementRequestedDate: string;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    statusLabel: string;
    replacementCandidateId: string;
    replacementCandidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityResultLabel: string;
    eligibilityReasons: string[];
    freeReplacement: boolean;
    exclusions: Record<string, boolean>;
    manualOverride: boolean;
    closedAt: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteReplacement(auth: AuthContext, id: string): Promise<void>;
