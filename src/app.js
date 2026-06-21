import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { getAllowedOrigins } from "./config/env.js";
import leadRoutes from "./routes/lead.routes.js";
import cmsRoutes from "./routes/cms.routes.js";
import mediaRoutes from "./routes/media.routes.js";
import razorpayRoutes from "./routes/razorpay.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import { isCloudinaryConfigured } from "./services/cloudinary.service.js";

const app = express();

app.use(cors({ origin: getAllowedOrigins(), credentials: true }));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "zentroverse-api",
    leads: true,
    cms: true,
    cloudinary: isCloudinaryConfigured(),
    mongo: {
      configured: Boolean(process.env.MONGODB_URI),
      readyState: mongoose.connection.readyState,
    },
  });
});

app.use("/api/leads", leadRoutes);
app.use("/api/cms", cmsRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/razorpay", razorpayRoutes);
app.use("/api/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
