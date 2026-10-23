import type { Request } from "express";
import type { AuditAction, AuditModule } from "../constants/audit.js";
import type { AuthContext } from "../types/auth.js";
export declare function clientIp(req: Pick<Request, "headers" | "ip" | "socket">): string;
export declare function sanitizeAuditPayload(value: unknown, depth?: number): unknown;
export type RecordAuditInput = {
    module: AuditModule;
    action: AuditAction;
    recordId: string;
    previousData?: unknown;
    newData?: unknown;
};
export declare function recordAudit(auth: AuthContext, input: RecordAuditInput): Promise<void>;
