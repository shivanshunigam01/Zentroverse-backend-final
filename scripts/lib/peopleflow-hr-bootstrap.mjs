import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export function getBackendRoot() {
  return path.join(path.dirname(fileURLToPath(import.meta.url)), "../..");
}

export function loadPeopleflowEnv(root = getBackendRoot()) {
  dotenv.config({ path: path.join(root, ".env") });

  const distIndex = path.join(root, "hr/dist/routes/index.js");
  if (!fs.existsSync(distIndex)) {
    throw new Error("Missing hr/dist. Run: git pull && npm install");
  }

  const devAccess = "dev-peopleflow-access-secret-min16chars";
  const devRefresh = "dev-peopleflow-refresh-secret-min16chars";

  process.env.MONGODB_URI =
    process.env.MONGODB_URI || process.env.PEOPLEFLOW_MONGODB_URI || "";
  if (!process.env.MONGODB_URI) {
    throw new Error("Set MONGODB_URI in .env");
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

  return root;
}

export function hrImport(root, relative) {
  return import(pathToFileURL(path.join(root, "hr/dist", relative)).href);
}
