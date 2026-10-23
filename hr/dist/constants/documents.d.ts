export declare const DOCUMENT_TYPES: readonly ["resume", "offer_letter", "id_proof", "education", "experience", "other"];
export type DocumentType = (typeof DOCUMENT_TYPES)[number];
export declare const DOCUMENT_STATUSES: readonly ["active", "expiring", "expired"];
export type DocumentStatus = (typeof DOCUMENT_STATUSES)[number];
export declare const DOCUMENT_MAX_BYTES: number;
export declare const DOCUMENT_EXPIRING_DAYS = 30;
export declare const DOCUMENT_ALLOWED_MIME_TYPES: readonly ["application/pdf", "image/jpeg", "image/png", "image/webp", "image/gif", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
export declare const DOCUMENT_ALLOWED_EXTENSIONS: readonly [".pdf", ".jpg", ".jpeg", ".png", ".webp", ".gif", ".doc", ".docx"];
