import * as assetService from "../services/asset.service.js";
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
export async function listAssets(req, res) {
    const data = await assetService.listAssets(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getAsset(req, res) {
    const data = await assetService.getAsset(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function createAsset(req, res) {
    const data = await assetService.createAsset(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Asset created", data });
}
export async function updateAsset(req, res) {
    const data = await assetService.updateAsset(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Asset updated", data });
}
export async function deleteAsset(req, res) {
    await assetService.deleteAsset(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Asset deleted" });
}
export async function assignAsset(req, res) {
    const data = await assetService.assignAsset(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Asset assigned", data });
}
export async function returnAsset(req, res) {
    const data = await assetService.returnAsset(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Asset returned", data });
}
export async function listAssetHistory(req, res) {
    const data = await assetService.listAssetHistory(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
//# sourceMappingURL=asset.controller.js.map