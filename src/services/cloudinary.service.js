import crypto from "node:crypto";
import { env } from "../config/env.js";

export function isCloudinaryConfigured() {
  return Boolean(env.cloudinaryCloudName && env.cloudinaryApiKey && env.cloudinaryApiSecret);
}

export async function uploadToCloudinary({ file, folder, resourceType = "auto" }) {
  if (!isCloudinaryConfigured()) {
    const error = new Error("Cloudinary is not configured");
    error.statusCode = 503;
    throw error;
  }

  if (!file) {
    const error = new Error("file is required");
    error.statusCode = 400;
    throw error;
  }

  const uploadFolder = folder || env.cloudinaryUploadFolder || "zentroverse";
  const timestamp = Math.round(Date.now() / 1000);
  const params = { folder: uploadFolder, timestamp };
  const toSign = Object.keys(params).sort().map((key) => `${key}=${params[key]}`).join("&");
  const signature = crypto.createHash("sha1").update(`${toSign}${env.cloudinaryApiSecret}`).digest("hex");

  const form = new FormData();
  form.append("file", file);
  form.append("api_key", env.cloudinaryApiKey);
  form.append("timestamp", String(timestamp));
  form.append("signature", signature);
  form.append("folder", uploadFolder);

  const endpointResource = resourceType === "auto" ? "auto" : resourceType;
  const endpoint = `https://api.cloudinary.com/v1_1/${env.cloudinaryCloudName}/${endpointResource}/upload`;
  const res = await fetch(endpoint, { method: "POST", body: form });
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data?.error?.message || "Upload failed");
    error.statusCode = res.status || 500;
    throw error;
  }

  return {
    url: data.secure_url,
    publicId: data.public_id,
    resourceType: data.resource_type,
    format: data.format,
    width: data.width,
    height: data.height,
  };
}
