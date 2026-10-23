import { UserModel } from "../models/user.model.js";
import { AppError } from "../utils/app-error.js";
import { clientIp } from "../utils/audit.js";
import { verifyAccessToken } from "../utils/jwt.js";
import { getPermissionsForRole } from "../utils/access.js";
function readAccessToken(req) {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
        return null;
    }
    return header.slice("Bearer ".length).trim();
}
export const authenticate = async (req, _res, next) => {
    try {
        const token = readAccessToken(req);
        if (!token) {
            throw AppError.unauthorized();
        }
        const payload = verifyAccessToken(token);
        const user = await UserModel.findById(payload.sub).select("isActive role organizationId");
        if (!user || !user.isActive) {
            throw AppError.unauthorized();
        }
        const role = user.role;
        req.auth = {
            userId: user.id,
            organizationId: String(user.organizationId),
            role,
            permissions: getPermissionsForRole(role),
            ipAddress: clientIp(req),
        };
        next();
    }
    catch (error) {
        next(error);
    }
};
export { authorizePermissions, authorizePermissionsOrSelf, authorizeRoles, } from "./authorize.js";
//# sourceMappingURL=authenticate.js.map