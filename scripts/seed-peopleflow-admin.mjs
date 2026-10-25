/**
 * Create a PeopleFlow HR super-admin (org + user) in MongoDB.
 * Run on the API server after npm install (uses hr/dist models).
 *
 *   node scripts/seed-peopleflow-admin.mjs
 *
 * Optional env (or add to .env):
 *   SEED_HR_EMAIL, SEED_HR_PASSWORD, SEED_HR_NAME, SEED_HR_ORG
 */
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
dotenv.config({ path: path.join(root, ".env") });

const distIndex = path.join(root, "hr/dist/routes/index.js");
if (!fs.existsSync(distIndex)) {
  console.error("Missing hr/dist. Run: git pull && npm install");
  process.exit(1);
}

const devAccess = "dev-peopleflow-access-secret-min16chars";
const devRefresh = "dev-peopleflow-refresh-secret-min16chars";

process.env.MONGODB_URI =
  process.env.MONGODB_URI || process.env.PEOPLEFLOW_MONGODB_URI || "";
if (!process.env.MONGODB_URI) {
  console.error("Set MONGODB_URI in .env");
  process.exit(1);
}

process.env.JWT_ACCESS_SECRET =
  process.env.JWT_ACCESS_SECRET ||
  process.env.HR_JWT_ACCESS_SECRET ||
  process.env.JWT_SECRET ||
  devAccess;
process.env.JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || process.env.HR_JWT_REFRESH_SECRET || devRefresh;
process.env.APP_URL =
  process.env.PEOPLEFLOW_APP_URL || process.env.APP_URL || "https://www.zentroverse.com";
process.env.CORS_ORIGIN =
  process.env.CORS_ORIGIN || "https://www.zentroverse.com,https://zentroverse.com";

const email = (process.env.SEED_HR_EMAIL || "hr.admin@zentroverse.in").toLowerCase().trim();
const password = process.env.SEED_HR_PASSWORD || "Zentro@2026";
const name = process.env.SEED_HR_NAME || "HR Super Admin";
const orgName = process.env.SEED_HR_ORG || "Zentroverse";

function slugify(value) {
  const base = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  return `${base || "org"}-${Date.now().toString(36)}`;
}

function hrImport(relative) {
  return import(pathToFileURL(path.join(root, "hr/dist", relative)).href);
}

async function main() {
  const dbMod = await hrImport("config/db.js");
  await dbMod.connectDatabase();

  const { UserModel } = await hrImport("models/user.model.js");
  const { OrganizationModel } = await hrImport("models/organization.model.js");
  const { USER_ROLES } = await hrImport("constants/roles.js");

  const existing = await UserModel.findOne({ email });
  if (existing) {
    console.log("[PeopleFlow] User already exists — log in at /hr/login with:");
    console.log(`  Email:    ${email}`);
    console.log("  Password: (the one you used when this user was created)");
    console.log("To reset password, delete the user in MongoDB or use /hr/forgot-password if configured.");
    await dbMod.disconnectDatabase();
    process.exit(0);
  }

  const organization = await OrganizationModel.create({
    name: orgName,
    slug: slugify(orgName),
  });

  await UserModel.create({
    organizationId: organization._id,
    name,
    email,
    password,
    role: USER_ROLES.SUPER_ADMIN,
    isActive: true,
    lastLogin: new Date(),
  });

  await dbMod.disconnectDatabase();

  console.log("[PeopleFlow] Seeded HR super-admin successfully.");
  console.log("");
  console.log("  Login URL:  https://www.zentroverse.com/hr/login");
  console.log(`  Email:      ${email}`);
  console.log(`  Password:   ${password}`);
  console.log(`  Organization: ${orgName}`);
  console.log("");
  console.log("Change password after first login (Profile → Change password).");
}

main().catch((err) => {
  console.error("[PeopleFlow] Seed failed:", err instanceof Error ? err.message : err);
  process.exit(1);
});
