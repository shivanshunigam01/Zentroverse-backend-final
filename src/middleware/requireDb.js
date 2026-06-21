import mongoose from "mongoose";

export function requireDb(_req, res, next) {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ error: "Database is not available. Try again later." });
  }
  next();
}
