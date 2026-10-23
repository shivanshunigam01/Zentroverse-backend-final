import { HTTP_STATUS } from "../constants/http.js";
import * as invoiceService from "../services/invoice.service.js";
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
export async function listInvoices(req, res) {
    const data = await invoiceService.listInvoices(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getInvoice(req, res) {
    const invoice = await invoiceService.getInvoice(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { invoice } });
}
export async function createInvoice(req, res) {
    const invoice = await invoiceService.createInvoice(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Invoice recorded",
        data: { invoice },
    });
}
export async function updateInvoice(req, res) {
    const invoice = await invoiceService.updateInvoice(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Invoice updated", data: { invoice } });
}
export async function deleteInvoice(req, res) {
    await invoiceService.deleteInvoice(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Invoice deleted" });
}
//# sourceMappingURL=invoice.controller.js.map