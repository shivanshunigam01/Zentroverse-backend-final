import AdminUser from "../models/AdminUser.js";
import Lead from "../models/Lead.js";
import BajajApplication from "../models/BajajApplication.js";
import HyOfferReferral from "../models/HyOfferReferral.js";
import CrmBundle from "../models/CrmBundle.js";
import Cms from "../models/Cms.js";
import { verifyPassword } from "../utils/password.js";
import { signToken, verifyToken } from "../utils/jwt.js";
import { env } from "../config/env.js";
import { DB_UNAVAILABLE_MSG, isDbConnected } from "../utils/dbState.js";

function envAdminProfile() {
  return { id: "env-admin", email: env.adminEmail, name: "Zentroverse Admin", role: "admin" };
}

function tryEnvAdminLogin(email, password) {
  const normalized = email.trim().toLowerCase();
  if (normalized !== env.adminEmail.toLowerCase()) return null;
  if (password !== env.adminPassword) return null;
  const profile = envAdminProfile();
  const token = signToken({ sub: profile.id, email: profile.email, kind: "admin", role: "admin" });
  return { token, admin: profile };
}

export async function adminLogin(req, res, next) {
  try {
    const { email, password } = req.body || {};
    if (!email?.trim() || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const envLogin = tryEnvAdminLogin(email, password);
    if (envLogin) return res.json(envLogin);

    if (!isDbConnected()) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const admin = await AdminUser.findOne({ email: email.trim().toLowerCase() }).select("+passwordHash");
    if (admin && verifyPassword(password, admin.passwordHash)) {
      const token = signToken({ sub: admin._id.toString(), email: admin.email, kind: "admin", role: "admin" });
      return res.json({ token, admin: admin.toProfile() });
    }

    return res.status(401).json({ error: "Invalid email or password." });
  } catch (error) {
    const envLogin = tryEnvAdminLogin(req.body?.email || "", req.body?.password || "");
    if (envLogin) return res.json(envLogin);
    if (!isDbConnected()) {
      return res.status(401).json({ error: "Invalid email or password." });
    }
    next(error);
  }
}

export async function adminMe(req, res, next) {
  try {
    const header = req.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    if (token === env.adminPanelToken) {
      return res.json({
        admin: { id: "legacy", email: env.adminEmail, name: "Admin", role: "admin" },
      });
    }

    const payload = verifyToken(token);
    if (!payload?.sub) return res.status(401).json({ error: "Invalid or expired token" });

    if (payload.sub === "env-admin" || payload.sub === "legacy") {
      return res.json({
        admin: {
          id: payload.sub,
          email: payload.email || env.adminEmail,
          name: "Zentroverse Admin",
          role: "admin",
        },
      });
    }

    if (!isDbConnected()) {
      if (payload.sub === "env-admin" || payload.email === env.adminEmail) {
        return res.json({
          admin: {
            id: payload.sub,
            email: payload.email || env.adminEmail,
            name: "Zentroverse Admin",
            role: "admin",
          },
        });
      }
      return res.status(503).json({ error: DB_UNAVAILABLE_MSG });
    }

    const admin = await AdminUser.findById(payload.sub);
    if (!admin) return res.status(401).json({ error: "Invalid or expired token" });

    res.json({ admin: admin.toProfile() });
  } catch (error) {
    next(error);
  }
}

export async function adminOverview(req, res, next) {
  try {
    const leads = await Lead.find().lean();
    const byStatus = {};
    const byForm = {};
    for (const l of leads) {
      byStatus[l.status || "new"] = (byStatus[l.status || "new"] || 0) + 1;
      const ft = l.form_type || "unknown";
      byForm[ft] = (byForm[ft] || 0) + 1;
    }

    const bajajTotal = await BajajApplication.countDocuments();
    const pulsarTotal = await HyOfferReferral.countDocuments();
    const growthHub = leads.filter((l) => l.form_type === "growth-hub").length;

    const crm = await CrmBundle.findOne().lean();
    const customers = crm?.customers?.length ?? 0;
    const invoices = crm?.invoices ?? [];
    const invByStatus = {};
    let revenuePaid = 0;
    for (const inv of invoices) {
      invByStatus[inv.status] = (invByStatus[inv.status] || 0) + 1;
      if (inv.status === "paid" && Array.isArray(inv.items)) {
        const sub = inv.items.reduce((s, it) => s + (it.qty || 0) * (it.rate || 0), 0);
        revenuePaid += sub * (1 + (inv.gstPercent || 0) / 100);
      }
    }

    const cmsDoc = await Cms.findOne().lean();
    const cms = cmsDoc?.payload ?? {};

    res.json({
      overview: {
        modules: {
          leads: { total: leads.length, by_status: byStatus, by_form_type: byForm },
          bajaj_asd: { total: bajajTotal },
          growth_hub: { total: growthHub },
          pulsar: { total: pulsarTotal },
          customers: { total: customers },
          invoices: { total: invoices.length, by_status: invByStatus, revenue_paid: Math.round(revenuePaid) },
          cms: {
            updated_at: cmsDoc?.updatedAt?.toISOString?.() ?? null,
            works: cms.works?.length ?? 0,
            case_studies: cms.caseStudies?.length ?? 0,
            testimonials: cms.testimonials?.length ?? 0,
            gallery: cms.gallery?.length ?? 0,
          },
        },
        generated_at: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
}
