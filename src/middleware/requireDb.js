import { DB_UNAVAILABLE_MSG, isDbConnected } from "../utils/dbState.js";

export function requireDb(_req, res, next) {
  if (!isDbConnected()) {
    return res.status(503).json({ error: DB_UNAVAILABLE_MSG });
  }
  next();
}
