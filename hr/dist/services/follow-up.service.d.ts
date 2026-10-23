import type { AuthContext } from "../types/auth.js";
import type { CreateFollowUpInput, FollowUpListQueryInput, UpdateFollowUpInput } from "../validators/follow-up.validators.js";
export declare function toPublicFollowUp(doc: Record<string, unknown>): {
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    offerId: string;
    offer: {
        id: string;
        offeredDesignation: string;
        offerStatus: string;
        expectedJoiningDate: string;
        joiningStatus: string;
    } | null;
    followUpDate: string;
    followUpType: "EMAIL" | "CALL" | "MESSAGE" | "MEETING";
    followUpTypeLabel: string;
    candidateStatus: "CONFIRMED" | "POSITIVE" | "UNDECIDED" | "CONCERNED" | "DROPPING" | "UNREACHABLE";
    candidateStatusLabel: string;
    joiningProbability: number;
    riskLevel: "LOW" | "MEDIUM" | "HIGH";
    riskLevelLabel: string;
    remarks: string;
    nextFollowUpDate: string;
    createdById: string;
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
};
export declare function listFollowUps(auth: AuthContext, query: FollowUpListQueryInput): Promise<{
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
        offerId: string;
        offer: {
            id: string;
            offeredDesignation: string;
            offerStatus: string;
            expectedJoiningDate: string;
            joiningStatus: string;
        } | null;
        followUpDate: string;
        followUpType: "EMAIL" | "CALL" | "MESSAGE" | "MEETING";
        followUpTypeLabel: string;
        candidateStatus: "CONFIRMED" | "POSITIVE" | "UNDECIDED" | "CONCERNED" | "DROPPING" | "UNREACHABLE";
        candidateStatusLabel: string;
        joiningProbability: number;
        riskLevel: "LOW" | "MEDIUM" | "HIGH";
        riskLevelLabel: string;
        remarks: string;
        nextFollowUpDate: string;
        createdById: string;
        createdBy: {
            id: string;
            name: string;
            email: string;
            role: string;
        } | null;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getFollowUp(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    offerId: string;
    offer: {
        id: string;
        offeredDesignation: string;
        offerStatus: string;
        expectedJoiningDate: string;
        joiningStatus: string;
    } | null;
    followUpDate: string;
    followUpType: "EMAIL" | "CALL" | "MESSAGE" | "MEETING";
    followUpTypeLabel: string;
    candidateStatus: "CONFIRMED" | "POSITIVE" | "UNDECIDED" | "CONCERNED" | "DROPPING" | "UNREACHABLE";
    candidateStatusLabel: string;
    joiningProbability: number;
    riskLevel: "LOW" | "MEDIUM" | "HIGH";
    riskLevelLabel: string;
    remarks: string;
    nextFollowUpDate: string;
    createdById: string;
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createFollowUp(auth: AuthContext, input: CreateFollowUpInput): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    offerId: string;
    offer: {
        id: string;
        offeredDesignation: string;
        offerStatus: string;
        expectedJoiningDate: string;
        joiningStatus: string;
    } | null;
    followUpDate: string;
    followUpType: "EMAIL" | "CALL" | "MESSAGE" | "MEETING";
    followUpTypeLabel: string;
    candidateStatus: "CONFIRMED" | "POSITIVE" | "UNDECIDED" | "CONCERNED" | "DROPPING" | "UNREACHABLE";
    candidateStatusLabel: string;
    joiningProbability: number;
    riskLevel: "LOW" | "MEDIUM" | "HIGH";
    riskLevelLabel: string;
    remarks: string;
    nextFollowUpDate: string;
    createdById: string;
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateFollowUp(auth: AuthContext, id: string, input: UpdateFollowUpInput): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    offerId: string;
    offer: {
        id: string;
        offeredDesignation: string;
        offerStatus: string;
        expectedJoiningDate: string;
        joiningStatus: string;
    } | null;
    followUpDate: string;
    followUpType: "EMAIL" | "CALL" | "MESSAGE" | "MEETING";
    followUpTypeLabel: string;
    candidateStatus: "CONFIRMED" | "POSITIVE" | "UNDECIDED" | "CONCERNED" | "DROPPING" | "UNREACHABLE";
    candidateStatusLabel: string;
    joiningProbability: number;
    riskLevel: "LOW" | "MEDIUM" | "HIGH";
    riskLevelLabel: string;
    remarks: string;
    nextFollowUpDate: string;
    createdById: string;
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteFollowUp(auth: AuthContext, id: string): Promise<void>;
