import app, { registerErrorHandlers } from "./app.js";
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";
import { ensureDefaultCms } from "./controllers/cms.controller.js";
import { runBootstrap } from "./services/bootstrap.service.js";
import { mountPeopleflow, recordPeopleflowMountFailure } from "./peopleflow/mount.js";

async function bootstrap() {
  let dbConnected = false;
  try {
    await connectDB();
    dbConnected = true;
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error(
      "[API] MongoDB unavailable — server will listen but admin/CMS/leads need a valid MONGODB_URI:",
      msg,
    );
  }

  if (dbConnected) {
    await ensureDefaultCms();
    await runBootstrap();
  }

  try {
    await mountPeopleflow(app);
  } catch (err) {
    recordPeopleflowMountFailure(err);
    console.error("[PeopleFlow] Failed to mount /api/v1:", err instanceof Error ? err.message : err);
    console.error(
      "[PeopleFlow] Fix: git pull origin master && npm install && pm2 restart zentroverse-api",
    );
    if (env.nodeEnv === "production") {
      console.error("[PeopleFlow] HR login will 404 until hr/dist is on disk and mount succeeds.");
    }
  }

  registerErrorHandlers();

  app.listen(env.port, () => {
    console.log(`Zentroverse API running on port ${env.port}`);
    console.log("PeopleFlow HR: GET /api/v1/health");
  });
}

bootstrap().catch((error) => {
  console.error("Server bootstrap failed:", error);
  process.exit(1);
});
