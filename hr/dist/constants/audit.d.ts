export declare const AUDIT_MODULES: readonly ["CLIENTS", "AGREEMENTS", "MANDATES", "CANDIDATES", "CONSENTS", "EVALUATIONS", "SUBMISSIONS", "INTERVIEWS", "OFFERS", "JOININGS", "INVOICES", "PAYMENTS", "GUARANTEES", "REPLACEMENTS"];
export type AuditModule = (typeof AUDIT_MODULES)[number];
export declare const AUDIT_MODULE_LABELS: Record<AuditModule, string>;
export declare const AUDIT_ACTIONS: readonly ["CREATED", "UPDATED", "STATUS_CHANGED", "SUBMITTED", "ACCEPTED", "JOINED", "APPROVED", "REJECTED", "OVERRIDE", "GENERATED"];
export type AuditAction = (typeof AUDIT_ACTIONS)[number];
export declare const AUDIT_ACTION_LABELS: Record<AuditAction, string>;
