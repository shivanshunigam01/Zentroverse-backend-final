import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexJs = path.join(root, "hr/dist/routes/index.js");

const soft = process.argv.includes("--soft") || process.env.VERIFY_SOFT === "1";

if (!fs.existsSync(indexJs)) {
  console.error(
    "[PeopleFlow] Missing hr/dist. Run: git pull origin master && npm install\n" +
      "  Or: npm run hr:build\n" +
      `  Expected: ${indexJs}`,
  );
  process.exit(soft ? 0 : 1);
}

console.log("[PeopleFlow] hr/dist OK");
