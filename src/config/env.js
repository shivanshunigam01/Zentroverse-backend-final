import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 8787,
  nodeEnv: process.env.NODE_ENV || "development",
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",
  mongodbUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/zentroverse",
  useMemoryDb: process.env.USE_MEMORY_DB === "true",
  adminPanelToken: process.env.ADMIN_PANEL_TOKEN || "ZV-ADMIN-2026-DEMO",
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || "",
  cloudinaryUploadFolder: process.env.CLOUDINARY_UPLOAD_FOLDER || "zentroverse",
  razorpayKeyId: process.env.RAZORPAY_KEY_ID || "",
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET || "",
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL || "",
  whatsappNotifyUrl: process.env.WHATSAPP_NOTIFY_URL || "",
  adminNotifyEmail: process.env.ADMIN_NOTIFY_EMAIL || "digital@zentroverse.com",
};

export function getAllowedOrigins() {
  if (!env.corsOrigin) return true;
  return env.corsOrigin.split(",").map((origin) => origin.trim()).filter(Boolean);
}
