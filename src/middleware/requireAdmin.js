import { env } from "../config/env.js";
import { verifyToken } from "../utils/jwt.js";

export function requireAdmin(req, res, next) {
  const legacy = req.header("x-admin-token");
  if (legacy && legacy === env.adminPanelToken) {
    req.admin = { role: "admin", email: env.adminEmail };
    return next();
  }

  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized admin request" });
  }

  if (token === env.adminPanelToken) {
    req.admin = { role: "admin", email: env.adminEmail };
    return next();
  }

  const payload = verifyToken(token);
  if (!payload || (payload.kind !== "admin" && payload.role !== "admin")) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }

  req.admin = payload;
  next();
}
