import { AppError } from "../utils/app-error.js";
import { hasAnyPermission, isSuperAdmin } from "../utils/access.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
export function authorizeRoles(...roles) {
    return (req, _res, next) => {
        try {
            const auth = requireAuth(req);
            if (isSuperAdmin(auth.role) || roles.includes(auth.role)) {
                next();
                return;
            }
            throw AppError.forbidden();
        }
        catch (error) {
            next(error);
        }
    };
}
export function authorizePermissions(...permissions) {
    return (req, _res, next) => {
        try {
            const auth = requireAuth(req);
            if (!hasAnyPermission(auth.role, permissions)) {
                throw AppError.forbidden();
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
}
export function authorizePermissionsOrSelf(getOwnerId, options) {
    return (req, _res, next) => {
        try {
            const auth = requireAuth(req);
            if (hasAnyPermission(auth.role, options.anyOf)) {
                next();
                return;
            }
            const ownerId = getOwnerId(req);
            const isOwner = Boolean(ownerId) && ownerId === auth.userId;
            const selfAllowed = !options.self || options.self.length === 0
                ? isOwner
                : isOwner && hasAnyPermission(auth.role, options.self);
            if (!selfAllowed) {
                throw AppError.forbidden();
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=authorize.js.map