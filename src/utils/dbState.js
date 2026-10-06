import mongoose from "mongoose";

export function isDbConnected() {
  return mongoose.connection.readyState === 1;
}

export const DB_UNAVAILABLE_MSG =
  "Database is not available. Set MONGODB_URI and ensure MongoDB is reachable.";
