import type { AuthContext } from "../types/auth.js";
import type { JobApplicationListQueryInput, UpdateJobApplicationInput } from "../validators/public-career.validators.js";
export declare function toPublicJobApplication(doc: Record<string, unknown>): {
    id: string;
    organizationId: string;
    mandateId: string;
    candidateId: string;
    applicationNumber: string;
    source: string;
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    statusLabel: string;
    notes: string;
    appliedAt: string;
    appliedLabel: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        phone: string;
        candidateNumber: string;
        source: string;
        status: string;
    } | null;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
        location: string;
    } | null;
    createdAt: string;
    updatedAt: string;
};
export declare function listJobApplications(auth: AuthContext, query: JobApplicationListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        mandateId: string;
        candidateId: string;
        applicationNumber: string;
        source: string;
        status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
        statusLabel: string;
        notes: string;
        appliedAt: string;
        appliedLabel: string;
        candidate: {
            id: string;
            name: string;
            email: string;
            phone: string;
            candidateNumber: string;
            source: string;
            status: string;
        } | null;
        mandate: {
            id: string;
            mandateNumber: string;
            position: string;
            status: string;
            location: string;
        } | null;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getJobApplication(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    mandateId: string;
    candidateId: string;
    applicationNumber: string;
    source: string;
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    statusLabel: string;
    notes: string;
    appliedAt: string;
    appliedLabel: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        phone: string;
        candidateNumber: string;
        source: string;
        status: string;
    } | null;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
        location: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateJobApplication(auth: AuthContext, id: string, input: UpdateJobApplicationInput): Promise<{
    id: string;
    organizationId: string;
    mandateId: string;
    candidateId: string;
    applicationNumber: string;
    source: string;
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    statusLabel: string;
    notes: string;
    appliedAt: string;
    appliedLabel: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        phone: string;
        candidateNumber: string;
        source: string;
        status: string;
    } | null;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
        location: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
