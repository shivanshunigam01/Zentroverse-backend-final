import { type UserRole } from "../constants/roles.js";
import { type Permission } from "../constants/permissions.js";
export declare function getPermissionsForRole(role: UserRole): Permission[];
export declare function isSuperAdmin(role: UserRole): role is "SUPER_ADMIN";
export declare function hasPermission(role: UserRole, permission: Permission): boolean;
export declare function hasAnyPermission(role: UserRole, permissions: readonly Permission[]): boolean;
export declare function hasAllPermissions(role: UserRole, permissions: readonly Permission[]): boolean;
