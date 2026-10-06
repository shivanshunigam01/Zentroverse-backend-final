import PlanCatalog from "../models/PlanCatalog.js";
import User from "../models/User.js";
import { defaultPlanCatalog } from "../seed/plansDefaults.js";
import { newId } from "../utils/ids.js";

async function getCatalogDoc() {
  let doc = await PlanCatalog.findOne();
  if (!doc) {
    doc = await PlanCatalog.create(defaultPlanCatalog());
  }
  return doc;
}

function catalogResponse(doc) {
  return {
    trial: doc.trial,
    plans: doc.plans,
    updatedAt: doc.updatedAt?.toISOString?.() ?? doc.updatedAt ?? null,
  };
}

function findPlan(plans, idOrSlug) {
  return plans.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export async function getPlans(req, res, next) {
  try {
    const doc = await getCatalogDoc();
    res.json(catalogResponse(doc));
  } catch (error) {
    next(error);
  }
}

export async function putCatalog(req, res, next) {
  try {
    const { trial, plans } = req.body || {};
    const doc = await getCatalogDoc();
    if (trial) doc.trial = trial;
    if (Array.isArray(plans)) doc.plans = plans;
    doc.updatedAt = new Date();
    await doc.save();
    res.json({ catalog: catalogResponse(doc) });
  } catch (error) {
    next(error);
  }
}

export async function createPlan(req, res, next) {
  try {
    const body = req.body || {};
    const doc = await getCatalogDoc();
    const plan = {
      ...body,
      id: body.id || body.slug || newId("plan_"),
      slug: body.slug || body.id,
    };
    doc.plans.push(plan);
    doc.updatedAt = new Date();
    await doc.save();
    res.status(201).json({ plan });
  } catch (error) {
    next(error);
  }
}

export async function getPlanById(req, res, next) {
  try {
    const doc = await getCatalogDoc();
    const plan = findPlan(doc.plans, req.params.id);
    if (!plan) return res.status(404).json({ error: "Plan not found" });
    res.json({ plan });
  } catch (error) {
    next(error);
  }
}

export async function updatePlan(req, res, next) {
  try {
    const doc = await getCatalogDoc();
    const idx = doc.plans.findIndex((p) => p.id === req.params.id || p.slug === req.params.id);
    if (idx < 0) return res.status(404).json({ error: "Plan not found" });
    doc.plans[idx] = { ...doc.plans[idx], ...req.body, id: doc.plans[idx].id, slug: doc.plans[idx].slug };
    doc.updatedAt = new Date();
    await doc.save();
    res.json({ plan: doc.plans[idx] });
  } catch (error) {
    next(error);
  }
}

export async function deletePlan(req, res, next) {
  try {
    const doc = await getCatalogDoc();
    doc.plans = doc.plans.filter((p) => p.id !== req.params.id && p.slug !== req.params.id);
    doc.updatedAt = new Date();
    await doc.save();
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
}

export async function putTrial(req, res, next) {
  try {
    const doc = await getCatalogDoc();
    doc.trial = { ...doc.trial, ...req.body };
    doc.updatedAt = new Date();
    await doc.save();
    res.json({ trial: doc.trial });
  } catch (error) {
    next(error);
  }
}

export async function startTrial(req, res, next) {
  try {
    const { email, planSlug } = req.body || {};
    if (!email?.trim()) return res.status(400).json({ error: "email is required" });

    const doc = await getCatalogDoc();
    if (!doc.trial?.enabled) return res.status(400).json({ error: "Free trial is not available." });

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (user?.trialUsed) return res.status(400).json({ error: "Trial already used for this email." });

    const days = doc.trial.days || 14;
    const startsAt = new Date();
    const endsAt = new Date(startsAt.getTime() + days * 86400000);

    if (user) {
      user.trialUsed = true;
      user.subscriptionPlan = "free-trial";
      user.trialEndsAt = endsAt;
      user.trialPlanSlug = planSlug || "basic-monthly";
      await user.save();
    }

    res.json({
      ok: true,
      trial: { planSlug: planSlug || "basic-monthly", days, startsAt: startsAt.toISOString(), endsAt: endsAt.toISOString() },
    });
  } catch (error) {
    next(error);
  }
}

export async function resolvePlanAmountPaise(planId) {
  const doc = await getCatalogDoc();
  const plan = findPlan(doc.plans, planId);
  if (!plan || plan.isActive === false) return null;
  const amount = plan.amountInPaise;
  if (typeof amount !== "number" || amount <= 0) return null;
  return amount;
}
