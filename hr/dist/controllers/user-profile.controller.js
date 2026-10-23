import { MESSAGES } from "../constants/messages.js";
import * as userProfileService from "../services/user-profile.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
export async function updateOwnProfile(req, res) {
    const user = await userProfileService.updateOwnProfile(requireAuth(req), req.body);
    return sendSuccess(res, {
        message: MESSAGES.PROFILE_UPDATED,
        data: { user },
    });
}
export async function updateOwnAvatar(req, res) {
    const user = await userProfileService.updateOwnAvatar(requireAuth(req), req.file);
    return sendSuccess(res, {
        message: MESSAGES.AVATAR_UPDATED,
        data: { user },
    });
}
//# sourceMappingURL=user-profile.controller.js.map