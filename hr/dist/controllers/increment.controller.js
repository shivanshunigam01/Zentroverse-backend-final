import * as incrementService from "../services/increment.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
export async function getIncrementWorksheet(req, res) {
    const data = await incrementService.getIncrementWorksheet(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function applyIncrements(req, res) {
    const data = await incrementService.applyPerformanceIncrements(requireAuth(req), req.body);
    return sendSuccess(res, { data });
}
//# sourceMappingURL=increment.controller.js.map