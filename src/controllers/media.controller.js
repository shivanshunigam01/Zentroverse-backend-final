import { isCloudinaryConfigured, uploadToCloudinary } from "../services/cloudinary.service.js";

export function mediaStatus(_req, res) {
  res.json({ configured: isCloudinaryConfigured() });
}

export async function uploadMedia(req, res, next) {
  try {
    const { file, folder, resourceType = "auto" } = req.body || {};
    if (!file || typeof file !== "string") {
      return res.status(400).json({ error: "file (base64 data URI or URL) is required." });
    }
    const result = await uploadToCloudinary({ file, folder, resourceType });
    res.json({ ok: true, ...result });
  } catch (error) {
    next(error);
  }
}
