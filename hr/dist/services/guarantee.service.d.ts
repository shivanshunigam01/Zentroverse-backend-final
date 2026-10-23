import type { AuthContext } from "../types/auth.js";
import type { CreateGuaranteeInput, GuaranteeListQueryInput, UpdateGuaranteeInput } from "../validators/guarantee.validators.js";
export declare function toPublicGuarantee(doc: Record<string, unknown>): {
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    joiningId: string;
    joining: {
        id: string;
        joiningDate: string;
        status: string;
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
    joiningDate: string;
    guaranteeStartDate: string;
    guaranteeEndDate: string;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    replacementPeriodDays: number | null;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    retentionStatusLabel: string;
    createdAt: string;
    updatedAt: string;
};
export declare function listGuarantees(auth: AuthContext, query: GuaranteeListQueryInput): Promise<{
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
        joiningId: string;
        joining: {
            id: string;
            joiningDate: string;
            status: string;
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
        joiningDate: string;
        guaranteeStartDate: string;
        guaranteeEndDate: string;
        milestone30: {
            status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
            statusLabel: string;
            completedAt: string;
            clientFeedback: string;
            candidateFeedback: string;
        };
        milestone60: {
            status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
            statusLabel: string;
            completedAt: string;
            clientFeedback: string;
            candidateFeedback: string;
        };
        milestone90: {
            status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
            statusLabel: string;
            completedAt: string;
            clientFeedback: string;
            candidateFeedback: string;
        };
        milestone30Enabled: boolean;
        milestone60Enabled: boolean;
        milestone90Enabled: boolean;
        replacementPeriodDays: number | null;
        retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
        retentionStatusLabel: string;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getGuarantee(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    joiningId: string;
    joining: {
        id: string;
        joiningDate: string;
        status: string;
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
    joiningDate: string;
    guaranteeStartDate: string;
    guaranteeEndDate: string;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    replacementPeriodDays: number | null;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    retentionStatusLabel: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createGuarantee(auth: AuthContext, input: CreateGuaranteeInput): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    joiningId: string;
    joining: {
        id: string;
        joiningDate: string;
        status: string;
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
    joiningDate: string;
    guaranteeStartDate: string;
    guaranteeEndDate: string;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    replacementPeriodDays: number | null;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    retentionStatusLabel: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateGuarantee(auth: AuthContext, id: string, input: UpdateGuaranteeInput): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    joiningId: string;
    joining: {
        id: string;
        joiningDate: string;
        status: string;
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
    joiningDate: string;
    guaranteeStartDate: string;
    guaranteeEndDate: string;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        statusLabel: string;
        completedAt: string;
        clientFeedback: string;
        candidateFeedback: string;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    replacementPeriodDays: number | null;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    retentionStatusLabel: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteGuarantee(auth: AuthContext, id: string): Promise<void>;
