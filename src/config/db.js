import mongoose from "mongoose";
import { env } from "./env.js";

let memoryServer;

async function connectToMemoryDb() {
  const { MongoMemoryServer } = await import("mongodb-memory-server");
  memoryServer = await MongoMemoryServer.create();
  await mongoose.connect(memoryServer.getUri());
  console.log("MongoDB connected (in-memory dev database)");
}

export async function connectDB() {
  mongoose.set("strictQuery", true);

  if (env.useMemoryDb) {
    await connectToMemoryDb();
    return;
  }

  try {
    await mongoose.connect(env.mongodbUri);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
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
