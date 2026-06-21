import Lead from "../models/Lead.js";
import { notifyNewLead } from "../services/notify.service.js";

const nullableFields = [
  "city",
  "business_type",
  "product_interest",
  "message",
  "form_type",
  "audit_type",
  "calculator_type",
  "company_name",
  "tool_id",
  "score",
  "report_summary",
  "report_data",
];

function normalizeLeadPayload(body) {
  const payload = {
    name: body.name?.trim(),
    phone: body.phone?.trim(),
    email: body.email?.trim(),
    source: body.source || "website",
  };

  nullableFields.forEach((field) => {
    payload[field] = body[field] ?? null;
  });

  if (payload.report_data != null && typeof payload.report_data === "string") {
    try {
      payload.report_data = JSON.parse(payload.report_data);
    } catch {
      /* keep as string */
    }
  }

  if (payload.score != null && payload.score !== "") {
    const n = Number(payload.score);
    payload.score = Number.isFinite(n) ? n : null;
  }

  return payload;
}

export async function createLead(req, res, next) {
  try {
    const payload = normalizeLeadPayload(req.body || {});
    if (!payload.name || !payload.phone || !payload.email) {
      return res.status(400).json({ error: "name, phone and email are required" });
    }

    const lead = await Lead.create(payload);
    const leadJson = lead.toJSON();
    notifyNewLead(leadJson).catch((error) => console.error("Lead notification error:", error.message));
    res.status(201).json({ ok: true, lead: leadJson });
  } catch (error) {
    next(error);
  }
}

export async function listLeads(_req, res, next) {
  try {
    const leads = await Lead.find().sort({ created_at: -1 });
    res.json({ leads: leads.map((l) => l.toJSON()) });
  } catch (error) {
    next(error);
  }
}

export async function updateLead(req, res, next) {
  try {
    const { id, status, admin_notes } = req.body || {};
    if (!id) return res.status(400).json({ error: "id is required" });

    const updates = {};
    if (status !== undefined) updates.status = status;
    if (admin_notes !== undefined) updates.admin_notes = admin_notes;

    const lead = await Lead.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!lead) return res.status(404).json({ error: "Lead not found" });

    res.json({ ok: true, lead: lead.toJSON() });
  } catch (error) {
    next(error);
  }
}

export async function deleteLead(req, res, next) {
  try {
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ error: "id is required" });

    const lead = await Lead.findByIdAndDelete(id);
    if (!lead) return res.status(404).json({ error: "Lead not found" });

    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
}
