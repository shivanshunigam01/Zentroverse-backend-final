import { HTTP_STATUS } from "../constants/http.js";
import * as clientService from "../services/client.service.js";
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
export async function listClients(req, res) {
    const data = await clientService.listClients(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getClient(req, res) {
    const client = await clientService.getClient(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { client } });
}
export async function createClient(req, res) {
    const client = await clientService.createClient(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Client created",
        data: { client },
    });
}
export async function updateClient(req, res) {
    const client = await clientService.updateClient(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Client updated", data: { client } });
}
export async function deleteClient(req, res) {
    await clientService.deleteClient(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Client deleted" });
}
//# sourceMappingURL=client.controller.js.map