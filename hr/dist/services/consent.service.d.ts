import type { AuthContext } from "../types/auth.js";
import type { ConsentListQueryInput, CreateConsentInput, UpdateConsentInput } from "../validators/consent.validators.js";
export declare function toPublicConsent(doc: Record<string, unknown>): {
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
    consentGiven: boolean;
    consentDate: string;
    consentMethod: "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
    consentMethodLabel: string;
    consentPurpose: "OTHER" | "SOURCING" | "SUBMISSION" | "INTERVIEW" | "BACKGROUND_CHECK" | "TALENT_POOL";
    consentPurposeLabel: string;
    consentDocument: {
        fileUrl: string;
        fileName: string;
    } | null;
    expiryDate: string;
    withdrawnAt: string;
    status: "ACTIVE" | "WITHDRAWN" | "EXPIRED" | "NOT_GIVEN";
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
};
export declare function listConsents(auth: AuthContext, query: ConsentListQueryInput): Promise<{
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
        consentGiven: boolean;
        consentDate: string;
        consentMethod: "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        consentMethodLabel: string;
        consentPurpose: "OTHER" | "SOURCING" | "SUBMISSION" | "INTERVIEW" | "BACKGROUND_CHECK" | "TALENT_POOL";
        consentPurposeLabel: string;
        consentDocument: {
            fileUrl: string;
            fileName: string;
        } | null;
        expiryDate: string;
        withdrawnAt: string;
        status: "ACTIVE" | "WITHDRAWN" | "EXPIRED" | "NOT_GIVEN";
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
export declare function getConsent(auth: AuthContext, id: string): Promise<{
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
    consentGiven: boolean;
    consentDate: string;
    consentMethod: "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
    consentMethodLabel: string;
    consentPurpose: "OTHER" | "SOURCING" | "SUBMISSION" | "INTERVIEW" | "BACKGROUND_CHECK" | "TALENT_POOL";
    consentPurposeLabel: string;
    consentDocument: {
        fileUrl: string;
        fileName: string;
    } | null;
    expiryDate: string;
    withdrawnAt: string;
    status: "ACTIVE" | "WITHDRAWN" | "EXPIRED" | "NOT_GIVEN";
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createConsent(auth: AuthContext, input: CreateConsentInput): Promise<{
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
    consentGiven: boolean;
    consentDate: string;
    consentMethod: "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
    consentMethodLabel: string;
    consentPurpose: "OTHER" | "SOURCING" | "SUBMISSION" | "INTERVIEW" | "BACKGROUND_CHECK" | "TALENT_POOL";
    consentPurposeLabel: string;
    consentDocument: {
        fileUrl: string;
        fileName: string;
    } | null;
    expiryDate: string;
    withdrawnAt: string;
    status: "ACTIVE" | "WITHDRAWN" | "EXPIRED" | "NOT_GIVEN";
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateConsent(auth: AuthContext, id: string, input: UpdateConsentInput): Promise<{
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
    consentGiven: boolean;
    consentDate: string;
    consentMethod: "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
    consentMethodLabel: string;
    consentPurpose: "OTHER" | "SOURCING" | "SUBMISSION" | "INTERVIEW" | "BACKGROUND_CHECK" | "TALENT_POOL";
    consentPurposeLabel: string;
    consentDocument: {
        fileUrl: string;
        fileName: string;
    } | null;
    expiryDate: string;
    withdrawnAt: string;
    status: "ACTIVE" | "WITHDRAWN" | "EXPIRED" | "NOT_GIVEN";
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteConsent(auth: AuthContext, id: string): Promise<void>;
