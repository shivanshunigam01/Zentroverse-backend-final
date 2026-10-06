import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { getAllowedOrigins } from "./config/env.js";
import leadRoutes from "./routes/lead.routes.js";
import cmsRoutes from "./routes/cms.routes.js";
import mediaRoutes from "./routes/media.routes.js";
import razorpayRoutes from "./routes/razorpay.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminAuthRoutes from "./routes/adminAuth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import plansRoutes from "./routes/plans.routes.js";
import crmRoutes from "./routes/crm.routes.js";
import bajajRoutes from "./routes/bajaj.routes.js";
import hyOffersRoutes from "./routes/hyOffers.routes.js";
import hrRoutes from "./routes/hr.routes.js";
import zentroflowRoutes from "./routes/zentroflow.routes.js";
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
    plans: true,
    admin: true,
    crm: true,
    hr: true,
    zentroflow: true,
    hyOffers: true,
    bajajAsd: true,
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
app.use("/api/admin", adminAuthRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/plans", plansRoutes);
app.use("/api/crm", crmRoutes);
app.use("/api/bajaj-asd", bajajRoutes);
app.use("/api/hy-offers", hyOffersRoutes);
app.use("/api/hr", hrRoutes);
app.use("/api/zentroflow", zentroflowRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
