import type { AuthContext } from "../types/auth.js";
import type { AgreementListQueryInput, CreateAgreementInput, UpdateAgreementInput } from "../validators/agreement.validators.js";
export declare function toPublicAgreement(doc: Record<string, unknown>): {
    id: string;
    organizationId: string;
    clientId: string;
    client: {
        id: string;
        companyName: string;
        status: string;
        industry: string;
    } | null;
    agreementNumber: string;
    effectiveDate: string;
    expiryDate: string;
    signedDate: string;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        feeTypeLabel: string;
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
        gstSplitModeLabel: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    storedStatus: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    statusLabel: string;
    signedDocument: {
        fileUrl: string;
        fileName: string;
    } | null;
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
};
export declare function listAgreements(auth: AuthContext, query: AgreementListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        clientId: string;
        client: {
            id: string;
            companyName: string;
            status: string;
            industry: string;
        } | null;
        agreementNumber: string;
        effectiveDate: string;
        expiryDate: string;
        signedDate: string;
        commercialTerms: {
            recruitmentFee: number;
            feeType: "FIXED" | "PERCENTAGE";
            feeTypeLabel: string;
            paymentTermsDays: number;
            gstRatePercent: number;
            gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
            gstSplitModeLabel: "CGST_SGST" | "IGST" | "NONE";
        };
        ownershipPeriodMonths: number;
        duplicateNotificationDays: number;
        replacementPeriodDays: number;
        status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
        storedStatus: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
        statusLabel: string;
        signedDocument: {
            fileUrl: string;
            fileName: string;
        } | null;
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
export declare function getAgreement(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    clientId: string;
    client: {
        id: string;
        companyName: string;
        status: string;
        industry: string;
    } | null;
    agreementNumber: string;
    effectiveDate: string;
    expiryDate: string;
    signedDate: string;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        feeTypeLabel: string;
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
        gstSplitModeLabel: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    storedStatus: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    statusLabel: string;
    signedDocument: {
        fileUrl: string;
        fileName: string;
    } | null;
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createAgreement(auth: AuthContext, input: CreateAgreementInput): Promise<{
    id: string;
    organizationId: string;
    clientId: string;
    client: {
        id: string;
        companyName: string;
        status: string;
        industry: string;
    } | null;
    agreementNumber: string;
    effectiveDate: string;
    expiryDate: string;
    signedDate: string;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        feeTypeLabel: string;
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
        gstSplitModeLabel: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    storedStatus: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    statusLabel: string;
    signedDocument: {
        fileUrl: string;
        fileName: string;
    } | null;
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateAgreement(auth: AuthContext, id: string, input: UpdateAgreementInput): Promise<{
    id: string;
    organizationId: string;
    clientId: string;
    client: {
        id: string;
        companyName: string;
        status: string;
        industry: string;
    } | null;
    agreementNumber: string;
    effectiveDate: string;
    expiryDate: string;
    signedDate: string;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        feeTypeLabel: string;
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
        gstSplitModeLabel: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    storedStatus: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    statusLabel: string;
    signedDocument: {
        fileUrl: string;
        fileName: string;
    } | null;
    createdBy: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteAgreement(auth: AuthContext, id: string): Promise<void>;
