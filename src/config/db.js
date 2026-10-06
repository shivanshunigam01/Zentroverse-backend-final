import mongoose from "mongoose";
import { env } from "./env.js";

let memoryServer;

async function connectToMemoryDb() {
  const { MongoMemoryServer } = await import("mongodb-memory-server");
  memoryServer = await MongoMemoryServer.create();
  await mongoose.connect(memoryServer.getUri());
  console.log("MongoDB connected (in-memory dev database)");
}

async function connectWithRetry(uri, attempts = 3) {
  let lastError;
  for (let i = 0; i < attempts; i += 1) {
    try {
      await mongoose.connect(uri);
      console.log(`MongoDB connected: ${mongoose.connection.host}`);
      return;
    } catch (error) {
      lastError = error;
      const waitMs = 1500 * (i + 1);
      console.warn(`MongoDB connect attempt ${i + 1}/${attempts} failed: ${error.message}`);
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, waitMs));
    }
  }
  throw lastError;
}

export async function connectDB() {
  mongoose.set("strictQuery", true);

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected — will retry on next operation if needed.");
  });

  if (env.useMemoryDb) {
    await connectToMemoryDb();
    return;
  }

  try {
    await connectWithRetry(env.mongodbUri);
  } catch (error) {
    if (env.nodeEnv === "development") {
      console.warn(
        `MongoDB connection failed (${error.message}); using in-memory database for local dev. ` +
          "Set a valid MONGODB_URI in .env for persistent data, or USE_MEMORY_DB=true to skip Atlas."
      );
      await connectToMemoryDb();
      return;
    }

    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}
