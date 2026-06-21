import Cms from "../models/Cms.js";
import { cmsDefaults } from "../seed/cmsDefaults.js";

export async function ensureDefaultCms() {
  const existing = await Cms.findOne({ slug: "main" });
  if (existing) return existing;

  const now = new Date().toISOString();
  return Cms.create({
    slug: "main",
    payload: { ...cmsDefaults, updatedAt: now },
    updatedAt: new Date(now),
  });
}

export async function getCms(_req, res, next) {
  try {
    const doc = await ensureDefaultCms();
    res.json({ cms: doc.payload });
  } catch (error) {
    next(error);
  }
}

export async function updateCms(req, res, next) {
  try {
    const body = req.body || {};
    if (!body.hero || !body.company || !body.meta) {
      return res.status(400).json({ error: "Invalid CMS payload" });
    }

    const now = new Date();
    const payload = { ...body, updatedAt: now.toISOString() };
    const doc = await Cms.findOneAndUpdate(
      { slug: "main" },
      { payload, updatedAt: now },
      { new: true, upsert: true }
    );

    res.json({ ok: true, cms: doc.payload });
  } catch (error) {
    next(error);
  }
}
