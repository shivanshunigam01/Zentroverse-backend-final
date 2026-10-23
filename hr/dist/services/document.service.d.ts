import { type DocumentType } from "../constants/documents.js";
import type { AuthContext } from "../types/auth.js";
import type { DocumentListQueryInput, UpdateDocumentInput, UploadDocumentInput } from "../validators/document.validators.js";
export declare function listDocuments(auth: AuthContext, query: DocumentListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    timezone: string;
    today: string;
    items: {
        id: string;
        organizationId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        name: string;
        type: DocumentType;
        fileSize: number;
        mimeType: string;
        expiryDate: string | null;
        expiryLabel: string | null;
        status: "active" | "expiring" | "expired";
        uploadedAt: string;
        createdAt: string;
        timezone: string;
    }[];
    summary: {
        total: number;
        expiring: number;
        expired: number;
        active: number;
    };
}>;
export declare function getDocument(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    name: string;
    type: DocumentType;
    fileSize: number;
    mimeType: string;
    expiryDate: string | null;
    expiryLabel: string | null;
    status: "active" | "expiring" | "expired";
    uploadedAt: string;
    createdAt: string;
    timezone: string;
}>;
export declare function getDocumentFile(auth: AuthContext, id: string): Promise<{
    url: string;
    expiresAt: string;
}>;
export declare function uploadDocument(auth: AuthContext, input: UploadDocumentInput, file?: Express.Multer.File): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    name: string;
    type: DocumentType;
    fileSize: number;
    mimeType: string;
    expiryDate: string | null;
    expiryLabel: string | null;
    status: "active" | "expiring" | "expired";
    uploadedAt: string;
    createdAt: string;
    timezone: string;
}>;
export declare function updateDocument(auth: AuthContext, id: string, input: UpdateDocumentInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    name: string;
    type: DocumentType;
    fileSize: number;
    mimeType: string;
    expiryDate: string | null;
    expiryLabel: string | null;
    status: "active" | "expiring" | "expired";
    uploadedAt: string;
    createdAt: string;
    timezone: string;
}>;
export declare function deleteDocument(auth: AuthContext, id: string): Promise<void>;
