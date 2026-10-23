import type { AuthContext } from "../types/auth.js";
import type { CreateOfferInput, OfferListQueryInput, UpdateOfferInput } from "../validators/offer.validators.js";
export declare function toPublicOffer(doc: Record<string, unknown>): {
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
    submissionId: string;
    submission: {
        id: string;
        status: string;
    } | null;
    selectedDate: string;
    offeredDesignation: string;
    offeredCTC: number;
    offerDate: string;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    offerStatusLabel: string;
    expectedJoiningDate: string;
    actualJoiningDate: string;
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    joiningStatusLabel: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
};
export declare function listOffers(auth: AuthContext, query: OfferListQueryInput): Promise<{
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
        submissionId: string;
        submission: {
            id: string;
            status: string;
        } | null;
        selectedDate: string;
        offeredDesignation: string;
        offeredCTC: number;
        offerDate: string;
        offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
        offerStatusLabel: string;
        expectedJoiningDate: string;
        actualJoiningDate: string;
        joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
        joiningStatusLabel: string;
        remarks: string;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getOffer(auth: AuthContext, id: string): Promise<{
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
    submissionId: string;
    submission: {
        id: string;
        status: string;
    } | null;
    selectedDate: string;
    offeredDesignation: string;
    offeredCTC: number;
    offerDate: string;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    offerStatusLabel: string;
    expectedJoiningDate: string;
    actualJoiningDate: string;
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    joiningStatusLabel: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createOffer(auth: AuthContext, input: CreateOfferInput): Promise<{
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
    submissionId: string;
    submission: {
        id: string;
        status: string;
    } | null;
    selectedDate: string;
    offeredDesignation: string;
    offeredCTC: number;
    offerDate: string;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    offerStatusLabel: string;
    expectedJoiningDate: string;
    actualJoiningDate: string;
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    joiningStatusLabel: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateOffer(auth: AuthContext, id: string, input: UpdateOfferInput): Promise<{
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
    submissionId: string;
    submission: {
        id: string;
        status: string;
    } | null;
    selectedDate: string;
    offeredDesignation: string;
    offeredCTC: number;
    offerDate: string;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    offerStatusLabel: string;
    expectedJoiningDate: string;
    actualJoiningDate: string;
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    joiningStatusLabel: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteOffer(auth: AuthContext, id: string): Promise<void>;
