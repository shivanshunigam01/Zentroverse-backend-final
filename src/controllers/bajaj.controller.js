import BajajApplication from "../models/BajajApplication.js";
import Lead from "../models/Lead.js";

export async function applyBajaj(req, res, next) {
  try {
    const body = req.body || {};
    if (!body.applicant_name?.trim() || !body.mobile?.trim() || !body.email?.trim()) {
      return res.status(400).json({ error: "Applicant name, mobile and email are required." });
    }

    const now = new Date().toISOString();
    const application = await BajajApplication.create({
      ...body,
      consent_at: body.consent_at || now,
      consent_policy_version: body.consent_policy_version || "v1",
      lead_score: body.lead_score ?? 0,
      status: "new",
      submitted_at: now,
    });

    try {
      const lead = await Lead.create({
        name: body.applicant_name.trim(),
        phone: body.mobile.trim(),
        email: body.email.trim(),
        city: body.current_town || body.district || null,
        business_type: body.business_type || null,
        message: body.applicant_remarks || null,
        source: "bajaj-asd",
        form_type: "bajaj-asd",
        company_name: body.business_name || null,
      });
      application.lead_id = lead._id.toString();
      await application.save();
    } catch {
      /* lead optional */
    }

    res.status(201).json({ ok: true, application: application.toJSON() });
  } catch (error) {
    next(error);
  }
}

export async function listBajajApplications(_req, res, next) {
  try {
    const apps = await BajajApplication.find().sort({ createdAt: -1 });
    res.json({ applications: apps.map((a) => a.toJSON()) });
  } catch (error) {
    next(error);
  }
}

export async function updateBajajApplication(req, res, next) {
  try {
    const { id, status, admin_notes } = req.body || {};
    if (!id) return res.status(400).json({ error: "id is required" });
    const updates = {};
    if (status !== undefined) updates.status = status;
    if (admin_notes !== undefined) updates.admin_notes = admin_notes;
    const application = await BajajApplication.findByIdAndUpdate(id, updates, { new: true });
    if (!application) return res.status(404).json({ error: "Application not found" });
    res.json({ application: application.toJSON() });
  } catch (error) {
    next(error);
  }
}
