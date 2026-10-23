import { HTTP_STATUS } from "../constants/http.js";
import * as offerService from "../services/offer.service.js";
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
export async function listOffers(req, res) {
    const data = await offerService.listOffers(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getOffer(req, res) {
    const offer = await offerService.getOffer(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { offer } });
}
export async function createOffer(req, res) {
    const offer = await offerService.createOffer(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Offer recorded",
        data: { offer },
    });
}
export async function updateOffer(req, res) {
    const offer = await offerService.updateOffer(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Offer updated", data: { offer } });
}
export async function deleteOffer(req, res) {
    await offerService.deleteOffer(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Offer deleted" });
}
//# sourceMappingURL=offer.controller.js.map