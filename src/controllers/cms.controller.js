import Cms from "../models/Cms.js";
import { cmsDefaults } from "../seed/cmsDefaults.js";

const ARRAY_SECTION_KEYS = {
  "case-studies": "caseStudies",
  testimonials: "testimonials",
  gallery: "gallery",
  "product-demos": "productDemos",
  faqs: "faqs",
};

function normalizePayload(body) {
  const base = { ...cmsDefaults, ...body };
  return {
    hero: { ...cmsDefaults.hero, ...base.hero },
    meta: { ...cmsDefaults.meta, ...base.meta },
    company: { ...cmsDefaults.company, ...base.company },
    galleryCategories: Array.isArray(base.galleryCategories) ? base.galleryCategories : cmsDefaults.galleryCategories,
    caseStudies: Array.isArray(base.caseStudies) ? base.caseStudies : cmsDefaults.caseStudies,
    testimonials: Array.isArray(base.testimonials) ? base.testimonials : cmsDefaults.testimonials,
    gallery: Array.isArray(base.gallery) ? base.gallery : [],
    productDemos: Array.isArray(base.productDemos) ? base.productDemos : [],
    faqs: Array.isArray(base.faqs) ? base.faqs : cmsDefaults.faqs,
    updatedAt: base.updatedAt ?? null,
  };
}

async function savePayload(payload) {
  const now = new Date();
  const next = { ...payload, updatedAt: now.toISOString() };
  const doc = await Cms.findOneAndUpdate(
    { slug: "main" },
    { payload: next, updatedAt: now },
    { new: true, upsert: true }
  );
  return doc.payload;
}

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

    const payload = normalizePayload(body);
    const saved = await savePayload(payload);
    res.json({ ok: true, cms: saved });
  } catch (error) {
    next(error);
  }
}

export async function updateCmsSection(req, res, next) {
  try {
    const { section } = req.params;
    const doc = await ensureDefaultCms();

    const arrayField = ARRAY_SECTION_KEYS[section];
    if (arrayField) {
      const { items, categories } = req.body || {};
      if (!Array.isArray(items)) {
        return res.status(400).json({ error: "items array is required" });
      }

      const payload = normalizePayload({
        ...doc.payload,
        [arrayField]: items,
        ...(section === "gallery" && Array.isArray(categories)
          ? { galleryCategories: categories }
          : {}),
      });

      const saved = await savePayload(payload);
      return res.json({ ok: true, cms: saved, section, count: items.length });
    }

    if (section === "company") {
      const { company } = req.body || {};
      if (!company || typeof company !== "object") {
        return res.status(400).json({ error: "company object is required" });
      }

      const payload = normalizePayload({ ...doc.payload, company });
      const saved = await savePayload(payload);
      return res.json({ ok: true, cms: saved, section });
    }

    if (section === "hero-seo") {
      const { hero, meta } = req.body || {};
      if (!hero || !meta) {
        return res.status(400).json({ error: "hero and meta objects are required" });
      }

      const payload = normalizePayload({ ...doc.payload, hero, meta });
      const saved = await savePayload(payload);
      return res.json({ ok: true, cms: saved, section });
    }

    return res.status(400).json({
      error: "Unknown section. Use case-studies, testimonials, gallery, product-demos, faqs, company, or hero-seo.",
    });
  } catch (error) {
    next(error);
  }
}

export async function getCmsSection(req, res, next) {
  try {
    const { section } = req.params;
    const doc = await ensureDefaultCms();
    const payload = doc.payload;

    const arrayField = ARRAY_SECTION_KEYS[section];
    if (arrayField) {
      return res.json({
        section,
        items: payload[arrayField] ?? [],
        ...(arrayField === "gallery" ? { categories: payload.galleryCategories ?? [] } : {}),
      });
    }

    if (section === "company") {
      return res.json({ section, company: payload.company ?? cmsDefaults.company });
    }

    if (section === "hero-seo") {
      return res.json({
        section,
        hero: payload.hero ?? cmsDefaults.hero,
        meta: payload.meta ?? cmsDefaults.meta,
      });
    }

    return res.status(400).json({ error: "Unknown section" });
  } catch (error) {
    next(error);
  }
}
