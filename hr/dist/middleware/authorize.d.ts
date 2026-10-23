import type { Request, RequestHandler } from "express";
import type { Permission } from "../constants/permissions.js";
import type { UserRole } from "../types/auth.js";
export declare function authorizeRoles(...roles: UserRole[]): RequestHandler;
export declare function authorizePermissions(...permissions: Permission[]): RequestHandler;
export declare function authorizePermissionsOrSelf(getOwnerId: (req: Request) => string | undefined, options: {
    anyOf: Permission[];
    self?: Permission[];
}): RequestHandler;
