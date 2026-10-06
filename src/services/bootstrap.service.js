import AdminUser from "../models/AdminUser.js";
import PlanCatalog from "../models/PlanCatalog.js";
import CrmBundle from "../models/CrmBundle.js";
import { env } from "../config/env.js";
import { hashPassword } from "../utils/password.js";
import { defaultPlanCatalog } from "../seed/plansDefaults.js";
import { defaultCrmBundle } from "../seed/crmDefaults.js";
import ModuleStore from "../models/ModuleStore.js";
import { defaultHrStore, defaultZfStore } from "../seed/moduleDefaults.js";
import { ensureHrPlatformAdmin } from "../controllers/hr.controller.js";
import { ensureZfDemoPassword } from "../controllers/zentroflow.controller.js";

export async function ensureAdminUser() {
  const existing = await AdminUser.findOne({ email: env.adminEmail });
  if (existing) return;
  await AdminUser.create({
    email: env.adminEmail,
    name: "Zentroverse Admin",
    role: "admin",
    passwordHash: hashPassword(env.adminPassword),
  });
  console.log(`Seeded admin user ${env.adminEmail}`);
}

export async function ensurePlanCatalog() {
  const count = await PlanCatalog.countDocuments();
  if (count > 0) return;
  await PlanCatalog.create(defaultPlanCatalog());
}

export async function ensureCrmBundle() {
  const count = await CrmBundle.countDocuments();
  if (count > 0) return;
  await CrmBundle.create(defaultCrmBundle());
}

export async function ensureModuleStore(key, factory) {
  const doc = await ModuleStore.findOne({ key });
  if (doc) return;
  await ModuleStore.create({ key, data: factory() });
}

export async function runBootstrap() {
  await ensureAdminUser();
  await ensurePlanCatalog();
  await ensureCrmBundle();
  await ensureModuleStore("hr", defaultHrStore);
  await ensureModuleStore("zentroflow", defaultZfStore);
  await ensureHrPlatformAdmin();
  await ensureZfDemoPassword();
}
