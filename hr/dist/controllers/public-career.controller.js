import { HTTP_STATUS } from "../constants/http.js";
import * as publicCareerService from "../services/public-career.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function routeParam(req, name) {
    const value = req.params[name];
    if (typeof value !== "string" || !value.trim()) {
        throw AppError.badRequest("Invalid identifier");
    }
    return value.trim();
}
export async function listPublicCareers(req, res) {
    const data = await publicCareerService.listPublicCareers(req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getPublicCareer(req, res) {
    const data = await publicCareerService.getPublicCareer(routeParam(req, "mandateId"));
    return sendSuccess(res, { data });
}
export async function applyToPublicCareer(req, res) {
    const data = await publicCareerService.applyToPublicCareer(routeParam(req, "mandateId"), req.body, req.file);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Application submitted successfully",
        data,
    });
}
//# sourceMappingURL=public-career.controller.js.map