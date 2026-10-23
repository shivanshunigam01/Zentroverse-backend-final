import * as announcementService from "../services/announcement.service.js";
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
export async function listAnnouncements(req, res) {
    const data = await announcementService.listAnnouncements(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getAnnouncement(req, res) {
    const data = await announcementService.getAnnouncement(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function createAnnouncement(req, res) {
    const data = await announcementService.createAnnouncement(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Announcement saved", data });
}
export async function updateAnnouncement(req, res) {
    const data = await announcementService.updateAnnouncement(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Announcement updated", data });
}
export async function publishAnnouncement(req, res) {
    const data = await announcementService.publishAnnouncement(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Announcement published", data });
}
export async function unpublishAnnouncement(req, res) {
    const data = await announcementService.unpublishAnnouncement(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Announcement moved to drafts", data });
}
export async function deleteAnnouncement(req, res) {
    await announcementService.deleteAnnouncement(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Announcement deleted" });
}
//# sourceMappingURL=announcement.controller.js.map