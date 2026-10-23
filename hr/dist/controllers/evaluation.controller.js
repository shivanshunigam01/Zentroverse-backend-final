import { HTTP_STATUS } from "../constants/http.js";
import * as evaluationService from "../services/evaluation.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
function routeId(req) {
    const id = req.params.id;
    if (typeof id !== "string") {
        throw AppError.badRequest("Invalid identifier");
    }
    return id;
}
export async function listEvaluations(req, res) {
    const data = await evaluationService.listEvaluations(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getEvaluation(req, res) {
    const evaluation = await evaluationService.getEvaluation(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { evaluation } });
}
export async function createEvaluation(req, res) {
    const evaluation = await evaluationService.createEvaluation(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Evaluation recorded",
        data: { evaluation },
    });
}
export async function updateEvaluation(req, res) {
    const evaluation = await evaluationService.updateEvaluation(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Evaluation updated", data: { evaluation } });
}
export async function deleteEvaluation(req, res) {
    await evaluationService.deleteEvaluation(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Evaluation deleted" });
}
//# sourceMappingURL=evaluation.controller.js.map