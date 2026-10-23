import type { AuthContext } from "../types/auth.js";
import type { AuditListQueryInput } from "../validators/audit.validators.js";
export declare function toPublicAuditLog(doc: Record<string, unknown>): {
    id: string;
    organizationId: string;
    userId: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    moduleLabel: string;
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    actionLabel: string;
    recordId: string;
    previousData: {} | null;
    newData: {} | null;
    ipAddress: string;
    createdAt: string;
};
export declare function listAuditLogs(auth: AuthContext, query: AuditListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        userId: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
        } | null;
        module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
        moduleLabel: string;
        action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
        actionLabel: string;
        recordId: string;
        previousData: {} | null;
        newData: {} | null;
        ipAddress: string;
        createdAt: string;
    }[];
}>;
export declare function getAuditLog(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    userId: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    } | null;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    moduleLabel: string;
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    actionLabel: string;
    recordId: string;
    previousData: {} | null;
    newData: {} | null;
    ipAddress: string;
    createdAt: string;
}>;
