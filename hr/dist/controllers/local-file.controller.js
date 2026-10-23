import { access } from "node:fs/promises";
import path from "node:path";
import { DOCUMENT_ALLOWED_MIME_TYPES } from "../constants/documents.js";
import { AppError } from "../utils/app-error.js";
import { resolveLocalPublicFile } from "../utils/local-files.js";
const MIME_BY_EXT = {
    ".pdf": "application/pdf",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};
function routeParam(req, name) {
    const value = req.params[name];
    if (typeof value !== "string" || !value.trim()) {
        throw AppError.notFound();
    }
    return value.trim();
}
export async function getPublicLocalFile(req, res) {
    const storedName = routeParam(req, "fileName");
    const absolute = resolveLocalPublicFile(storedName);
    if (!absolute) {
        throw AppError.notFound();
    }
    try {
        await access(absolute);
    }
    catch {
        throw AppError.notFound();
    }
    const mime = MIME_BY_EXT[path.extname(storedName).toLowerCase()];
    if (mime && DOCUMENT_ALLOWED_MIME_TYPES.includes(mime)) {
        res.type(mime);
    }
    return res.sendFile(absolute);
}
//# sourceMappingURL=local-file.controller.js.map