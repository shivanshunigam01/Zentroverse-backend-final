import { HTTP_STATUS } from "../constants/http.js";
import * as paymentService from "../services/payment.service.js";
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
export async function listPayments(req, res) {
    const data = await paymentService.listPayments(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getPayment(req, res) {
    const payment = await paymentService.getPayment(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { payment } });
}
export async function createPayment(req, res) {
    const payment = await paymentService.createPayment(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Payment recorded",
        data: { payment },
    });
}
export async function updatePayment(req, res) {
    const payment = await paymentService.updatePayment(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Payment updated", data: { payment } });
}
export async function deletePayment(req, res) {
    await paymentService.deletePayment(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Payment deleted" });
}
//# sourceMappingURL=payment.controller.js.map