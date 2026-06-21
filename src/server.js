import app from "./app.js";
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";
import { ensureDefaultCms } from "./controllers/cms.controller.js";

async function bootstrap() {
  await connectDB();
  await ensureDefaultCms();

  app.listen(env.port, () => {
    console.log(`Zentroverse API running on port ${env.port}`);
  });
}

bootstrap().catch((error) => {
  console.error("Server bootstrap failed:", error);
  process.exit(1);
});
