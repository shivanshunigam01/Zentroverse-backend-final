import type { AuthContext } from "../types/auth.js";
import type { CreateJoiningInput, JoiningListQueryInput, UpdateJoiningInput } from "../validators/joining.validators.js";
export declare function toPublicJoining(doc: Record<string, unknown>): {
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
    offerId: string;
    offer: {
        id: string;
        offeredDesignation: string;
        offerStatus: string;
        expectedJoiningDate: string;
        joiningStatus: string;
    } | null;
    clientId: string;
    client: {
        id: string;
        companyName: string;
    } | null;
    joiningDate: string;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    statusLabel: string;
    confirmedById: string;
    confirmedBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    confirmationDate: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
};
export declare function listJoinings(auth: AuthContext, query: JoiningListQueryInput): Promise<{
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
        offerId: string;
        offer: {
            id: string;
            offeredDesignation: string;
            offerStatus: string;
            expectedJoiningDate: string;
            joiningStatus: string;
        } | null;
        clientId: string;
        client: {
            id: string;
            companyName: string;
        } | null;
        joiningDate: string;
        status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
        statusLabel: string;
        confirmedById: string;
        confirmedBy: {
            id: string;
            name: string;
            email: string;
            role: string;
        } | null;
        confirmationDate: string;
        remarks: string;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getJoining(auth: AuthContext, id: string): Promise<{
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
    offerId: string;
    offer: {
        id: string;
        offeredDesignation: string;
        offerStatus: string;
        expectedJoiningDate: string;
        joiningStatus: string;
    } | null;
    clientId: string;
    client: {
        id: string;
        companyName: string;
    } | null;
    joiningDate: string;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    statusLabel: string;
    confirmedById: string;
    confirmedBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    confirmationDate: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createJoining(auth: AuthContext, input: CreateJoiningInput): Promise<{
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
    offerId: string;
    offer: {
        id: string;
        offeredDesignation: string;
        offerStatus: string;
        expectedJoiningDate: string;
        joiningStatus: string;
    } | null;
    clientId: string;
    client: {
        id: string;
        companyName: string;
    } | null;
    joiningDate: string;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    statusLabel: string;
    confirmedById: string;
    confirmedBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    confirmationDate: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateJoining(auth: AuthContext, id: string, input: UpdateJoiningInput): Promise<{
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
    offerId: string;
    offer: {
        id: string;
        offeredDesignation: string;
        offerStatus: string;
        expectedJoiningDate: string;
        joiningStatus: string;
    } | null;
    clientId: string;
    client: {
        id: string;
        companyName: string;
    } | null;
    joiningDate: string;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    statusLabel: string;
    confirmedById: string;
    confirmedBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    confirmationDate: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteJoining(auth: AuthContext, id: string): Promise<void>;
