import { getModuleData, mutateModuleData } from "../services/moduleStore.service.js";
import { hashPassword, verifyPassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";
import { newId } from "../utils/ids.js";
import { defaultZfStore } from "../seed/moduleDefaults.js";
import { env } from "../config/env.js";

const ZF_KEY = "zentroflow";

async function loadZf() {
  return getModuleData(ZF_KEY, defaultZfStore());
}

function tenantId(req) {
  return req.header("x-tenant-id") || req.zfAuth?.tenant_id || null;
}

function mapLead(raw) {
  return {
    id: raw.id,
    tenant_id: raw.tenant_id,
    name: raw.name || "",
    mobile: raw.mobile || "",
    email: raw.email || "",
    city: raw.city || "",
    current_stage: raw.current_stage || "new",
    verification_status: raw.verification_status || "pending",
    qualification_status: raw.qualification_status || "pending",
    lead_score: raw.lead_score ?? 0,
    temperature: raw.temperature || "cold",
    last_remark: raw.last_remark || "",
    next_followup_at: raw.next_followup_at ?? null,
    overdue: Boolean(raw.overdue),
    assigned_user_id: raw.assigned_user_id ?? null,
    branch_id: raw.branch_id ?? null,
    interest: raw.interest || {},
    attribution: raw.attribution || { source_channel: "direct" },
    created_at: raw.created_at || new Date().toISOString(),
    outcome: raw.outcome,
  };
}

export async function ensureZfDemoPassword() {
  await mutateModuleData(ZF_KEY, (store) => {
    const user = store.users[0];
    if (user && !user.passwordHash) {
      user.passwordHash = hashPassword("Demo@2026");
      user.email = user.email || "demo@zentroflow.in";
    }
    return store;
  }, defaultZfStore());
}

export async function zfLogin(req, res, next) {
  try {
    const { email, password } = req.body || {};
    const store = await loadZf();
    const user = store.users.find((u) => u.email === email?.toLowerCase());
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    const token = signToken({
      kind: "zf",
      sub: user.id,
      tenant_id: user.tenant_id,
      role: user.role,
    });
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        tenant_id: user.tenant_id,
        branch_ids: user.branch_ids || [],
        status: user.status,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function zfPlatformOverview(_req, res, next) {
  try {
    const store = await loadZf();
    res.json({
      tenants: store.tenants.length,
      leads: store.leads.length,
      users: store.users.length,
      failed_jobs: store.jobs.filter((j) => j.status === "failed").length,
      recent_tenants: store.tenants.slice(-5),
    });
  } catch (error) {
    next(error);
  }
}

export async function zfListTenants(req, res, next) {
  try {
    const q = (req.query.q || "").toLowerCase();
    const store = await loadZf();
    let items = store.tenants;
    if (q) items = items.filter((t) => t.name.toLowerCase().includes(q) || t.key.includes(q));
    res.json({ items, total: items.length });
  } catch (error) {
    next(error);
  }
}

export async function zfCreateTenant(req, res, next) {
  try {
    const body = req.body || {};
    const tenant = {
      id: newId("tnt_"),
      name: body.name || "New Tenant",
      key: body.key || slug(body.name),
      status: "active",
      plan: body.plan || "basic",
      timezone: body.timezone || "Asia/Kolkata",
      entitlements: body.entitlements || {},
      contact: body.contact || {},
      created_at: new Date().toISOString(),
    };
    await mutateModuleData(ZF_KEY, (s) => {
      s.tenants.push(tenant);
      return s;
    }, defaultZfStore());
    res.status(201).json({ tenant, admin: null });
  } catch (error) {
    next(error);
  }
}

function slug(s) {
  return String(s || "tenant").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export async function zfUpdateTenant(req, res, next) {
  try {
    let tenant;
    await mutateModuleData(ZF_KEY, (s) => {
      const idx = s.tenants.findIndex((t) => t.id === req.params.id);
      if (idx < 0) throw Object.assign(new Error("Tenant not found"), { status: 404 });
      s.tenants[idx] = { ...s.tenants[idx], ...req.body, id: s.tenants[idx].id };
      tenant = s.tenants[idx];
      return s;
    }, defaultZfStore());
    res.json({ tenant });
  } catch (error) {
    if (error.status) return res.status(error.status).json({ message: error.message });
    next(error);
  }
}

export async function zfDashboard(req, res, next) {
  try {
    const tid = tenantId(req);
    const store = await loadZf();
    const leads = store.leads.filter((l) => !tid || l.tenant_id === tid);
    const byStage = {};
    const byTemp = {};
    for (const l of leads) {
      byStage[l.current_stage] = (byStage[l.current_stage] || 0) + 1;
      byTemp[l.temperature] = (byTemp[l.temperature] || 0) + 1;
    }
    res.json({
      total: leads.length,
      new_this_week: leads.length,
      overdue_followups: leads.filter((l) => l.overdue).length,
      followups_due: store.followups.filter((f) => f.status === "open").length,
      jobs_failed: store.jobs.filter((j) => j.status === "failed").length,
      by_stage: byStage,
      by_temperature: byTemp,
      widgets: [{ key: "new", label: "New leads", count: byStage.new || 0, filter: { stage: "new" } }],
    });
  } catch (error) {
    next(error);
  }
}

export async function zfListLeads(req, res, next) {
  try {
    const tid = tenantId(req);
    const store = await loadZf();
    let items = store.leads.filter((l) => !tid || l.tenant_id === tid);
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 50;
    const start = (page - 1) * limit;
    res.json({ items: items.slice(start, start + limit).map(mapLead), total: items.length, page, limit });
  } catch (error) {
    next(error);
  }
}

export async function zfGetLead(req, res, next) {
  try {
    const store = await loadZf();
    const lead = store.leads.find((l) => l.id === req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json({
      lead: mapLead(lead),
      customer: null,
      timeline: store.timelines[lead.id] || [],
      followups: store.followups.filter((f) => f.lead_id === lead.id),
      assignments: store.assignments[lead.id] || [],
    });
  } catch (error) {
    next(error);
  }
}

export async function zfIngestLead(req, res, next) {
  try {
    const tid = tenantId(req) || (await loadZf()).tenants[0]?.id;
    const body = req.body || {};
    const mobile = body.mobile || body.phone || "";
    const store = await loadZf();
    const existing = store.leads.find((l) => l.tenant_id === tid && l.mobile === mobile);
    if (existing) return res.json({ lead: mapLead(existing), created: false });

    const lead = {
      id: newId("lead_"),
      tenant_id: tid,
      name: body.name || "Unknown",
      mobile,
      email: body.email || "",
      city: body.city || "",
      current_stage: "new",
      verification_status: "pending",
      qualification_status: "pending",
      lead_score: 0,
      temperature: "warm",
      last_remark: "",
      next_followup_at: null,
      overdue: false,
      assigned_user_id: null,
      branch_id: body.branch_id || null,
      interest: body.interest || {},
      attribution: body.attribution || { source_channel: body.source || "api" },
      created_at: new Date().toISOString(),
    };
    await mutateModuleData(ZF_KEY, (s) => {
      s.leads.push(lead);
      s.timelines[lead.id] = [
        {
          id: newId("tl_"),
          type: "created",
          content: "Lead ingested",
          actor_label: "API",
          created_at: lead.created_at,
          channel: "api",
        },
      ];
      return s;
    }, defaultZfStore());
    res.status(201).json({ lead: mapLead(lead), created: true });
  } catch (error) {
    next(error);
  }
}

async function updateLead(req, res, patcher) {
  try {
    let updated;
    await mutateModuleData(ZF_KEY, (s) => {
      const idx = s.leads.findIndex((l) => l.id === req.params.id);
      if (idx < 0) throw Object.assign(new Error("Lead not found"), { status: 404 });
      s.leads[idx] = patcher(s.leads[idx], s);
      updated = s.leads[idx];
      return s;
    }, defaultZfStore());
    res.json({ lead: mapLead(updated) });
  } catch (error) {
    if (error.status) return res.status(error.status).json({ message: error.message });
    next(error);
  }
}

export async function zfChangeStage(req, res, next) {
  const { stage, reason } = req.body || {};
  return updateLead(req, res, (lead, s) => {
    const next = { ...lead, current_stage: stage || lead.current_stage };
    const tl = s.timelines[lead.id] || [];
    tl.push({
      id: newId("tl_"),
      type: "stage",
      content: `Stage → ${stage}${reason ? `: ${reason}` : ""}`,
      actor_label: "User",
      created_at: new Date().toISOString(),
      channel: "app",
    });
    s.timelines[lead.id] = tl;
    return next;
  });
}

export async function zfAddRemark(req, res, next) {
  const { content } = req.body || {};
  return updateLead(req, res, (lead, s) => {
    const tl = s.timelines[lead.id] || [];
    tl.push({
      id: newId("tl_"),
      type: "remark",
      content,
      actor_label: "User",
      created_at: new Date().toISOString(),
      channel: "app",
    });
    s.timelines[lead.id] = tl;
    return { ...lead, last_remark: content };
  });
}

export async function zfCreateFollowup(req, res, next) {
  try {
    const fu = {
      id: newId("fu_"),
      lead_id: req.params.id,
      type: req.body.type || "call",
      due_at: req.body.due_at || new Date().toISOString(),
      status: "open",
      outcome: "",
      remark: req.body.remark || "",
    };
    await mutateModuleData(ZF_KEY, (s) => {
      s.followups.push(fu);
      return s;
    }, defaultZfStore());
    res.json({ followup: fu });
  } catch (error) {
    next(error);
  }
}

export async function zfCompleteFollowup(req, res, next) {
  try {
    await mutateModuleData(ZF_KEY, (s) => {
      const idx = s.followups.findIndex((f) => f.id === req.params.followUpId);
      if (idx >= 0) {
        s.followups[idx].status = "done";
        s.followups[idx].outcome = req.body.outcome || "completed";
      }
      return s;
    }, defaultZfStore());
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
}

export async function zfAssignLead(req, res, next) {
  return updateLead(req, res, (lead, s) => {
    const userId = req.body.user_id || req.body.assigned_user_id;
    s.assignments[lead.id] = [{ user_id: userId, at: new Date().toISOString() }];
    return { ...lead, assigned_user_id: userId };
  });
}

export async function zfVerifyLead(req, res, next) {
  return updateLead(req, res, (lead) => ({
    ...lead,
    verification_status: req.body.status || "verified",
    qualification_status: req.body.qualification_status || lead.qualification_status,
  }));
}

export async function zfExportLeads(req, res, next) {
  try {
    const store = await loadZf();
    const tid = tenantId(req);
    const items = store.leads.filter((l) => !tid || l.tenant_id === tid).map(mapLead);
    res.json({ items, count: items.length });
  } catch (error) {
    next(error);
  }
}

export async function zfIntegrationsGet(_req, res, next) {
  try {
    const store = await loadZf();
    res.json({ items: store.integrations });
  } catch (error) {
    next(error);
  }
}

export async function zfIntegrationsPost(req, res, next) {
  try {
    const item = { id: newId("int_"), ...req.body, updated_at: new Date().toISOString() };
    await mutateModuleData(ZF_KEY, (s) => {
      const idx = s.integrations.findIndex((i) => i.provider === item.provider);
      if (idx >= 0) s.integrations[idx] = { ...s.integrations[idx], ...item };
      else s.integrations.push(item);
      return s;
    }, defaultZfStore());
    res.json({ integration: item });
  } catch (error) {
    next(error);
  }
}

export async function zfJobsList(req, res, next) {
  try {
    const store = await loadZf();
    res.json({ items: store.jobs, total: store.jobs.length });
  } catch (error) {
    next(error);
  }
}

export async function zfJobRetry(req, res, next) {
  try {
    await mutateModuleData(ZF_KEY, (s) => {
      const job = s.jobs.find((j) => j.id === req.params.id);
      if (job) job.status = "queued";
      return s;
    }, defaultZfStore());
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
}

export async function zfJobsProcess(_req, res, next) {
  try {
    let processed = 0;
    await mutateModuleData(ZF_KEY, (s) => {
      for (const job of s.jobs) {
        if (job.status === "queued") {
          job.status = "done";
          processed += 1;
        }
      }
      return s;
    }, defaultZfStore());
    res.json({ processed });
  } catch (error) {
    next(error);
  }
}

export async function zfBranchesGet(_req, res, next) {
  try {
    const store = await loadZf();
    res.json({ items: store.branches });
  } catch (error) {
    next(error);
  }
}

export async function zfBranchesPost(req, res, next) {
  try {
    const tid = tenantId(req);
    const branch = {
      id: newId("br_"),
      tenant_id: tid,
      name: req.body.name || "Branch",
      branch_code: req.body.branch_code || "BR01",
    };
    await mutateModuleData(ZF_KEY, (s) => {
      s.branches.push(branch);
      return s;
    }, defaultZfStore());
    res.json(branch);
  } catch (error) {
    next(error);
  }
}

export async function zfUsersGet(_req, res, next) {
  try {
    const store = await loadZf();
    res.json({
      items: store.users.map((u) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
      })),
    });
  } catch (error) {
    next(error);
  }
}

export async function zfUsersPost(req, res, next) {
  try {
    const user = {
      id: newId("usr_"),
      email: req.body.email,
      name: req.body.name || "",
      role: req.body.role || "agent",
      tenant_id: tenantId(req),
      branch_ids: req.body.branch_ids || [],
      passwordHash: hashPassword(req.body.password || "ChangeMe123"),
      status: "active",
    };
    await mutateModuleData(ZF_KEY, (s) => {
      s.users.push(user);
      return s;
    }, defaultZfStore());
    res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    next(error);
  }
}

export async function zfAutomationsGet(_req, res, next) {
  try {
    const store = await loadZf();
    res.json({ items: store.automations });
  } catch (error) {
    next(error);
  }
}

export async function zfAutomationsPost(req, res, next) {
  try {
    const item = { id: newId("auto_"), ...req.body };
    await mutateModuleData(ZF_KEY, (s) => {
      s.automations.push(item);
      return s;
    }, defaultZfStore());
    res.json({ automation: item });
  } catch (error) {
    next(error);
  }
}

export async function zfCapiEvents(_req, res, next) {
  try {
    const store = await loadZf();
    res.json({ items: store.capiEvents });
  } catch (error) {
    next(error);
  }
}

export async function zfAudit(_req, res, next) {
  try {
    const store = await loadZf();
    res.json({ items: store.audit.slice(-50), total: store.audit.length });
  } catch (error) {
    next(error);
  }
}

export async function zfWebhookMeta(req, res) {
  res.json({ ok: true, received: true, body: req.body });
}
