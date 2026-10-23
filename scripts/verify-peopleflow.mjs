import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexJs = path.join(root, "hr/dist/routes/index.js");

if (!fs.existsSync(indexJs)) {
  console.error(
    "[PeopleFlow] Missing hr/dist. Run: git pull && npm install\n" +
      "  Or: npm run hr:build\n" +
      `  Expected: ${indexJs}`,
  );
  process.exit(1);
}

console.log("[PeopleFlow] hr/dist OK");
