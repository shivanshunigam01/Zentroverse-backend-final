import { HTTP_STATUS } from "../constants/http.js";
import * as candidateService from "../services/candidate.service.js";
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
export async function listCandidates(req, res) {
    const data = await candidateService.listCandidates(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getCandidate(req, res) {
    const candidate = await candidateService.getCandidate(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { candidate } });
}
export async function createCandidate(req, res) {
    const candidate = await candidateService.createCandidate(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Candidate created",
        data: { candidate },
    });
}
export async function updateCandidate(req, res) {
    const candidate = await candidateService.updateCandidate(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Candidate updated", data: { candidate } });
}
export async function deleteCandidate(req, res) {
    await candidateService.deleteCandidate(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Candidate deleted" });
}
//# sourceMappingURL=candidate.controller.js.map