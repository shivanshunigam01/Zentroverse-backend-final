import { env } from "../config/env.js";

export function requireAdmin(req, res, next) {
  const token = req.header("x-admin-token");
  if (!token || token !== env.adminPanelToken) {
    return res.status(401).json({ error: "Unauthorized admin request" });
  }
  next();
}
