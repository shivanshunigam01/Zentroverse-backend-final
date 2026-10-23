import type { RequestHandler } from "express";
export declare const authenticate: RequestHandler;
export { authorizePermissions, authorizePermissionsOrSelf, authorizeRoles, } from "./authorize.js";
