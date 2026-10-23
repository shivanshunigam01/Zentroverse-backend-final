import { USER_ROLES } from "../constants/roles.js";
import { ROLE_PERMISSIONS, } from "../constants/permissions.js";
export function getPermissionsForRole(role) {
    return [...ROLE_PERMISSIONS[role]];
}
export function isSuperAdmin(role) {
    return role === USER_ROLES.SUPER_ADMIN;
}
export function hasPermission(role, permission) {
    if (isSuperAdmin(role)) {
        return true;
    }
    return ROLE_PERMISSIONS[role].includes(permission);
}
export function hasAnyPermission(role, permissions) {
    if (permissions.length === 0) {
        return false;
    }
    return permissions.some((permission) => hasPermission(role, permission));
}
export function hasAllPermissions(role, permissions) {
    if (permissions.length === 0) {
        return false;
    }
    return permissions.every((permission) => hasPermission(role, permission));
}
//# sourceMappingURL=access.js.map