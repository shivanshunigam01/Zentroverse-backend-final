import { verifyToken } from "../utils/jwt.js";
import { env } from "../config/env.js";

export function extractBearer(req) {
  const header = req.headers.authorization;
  if (header?.startsWith("Bearer ")) return header.slice(7);
  return null;
}

export function requireBearerKind(kind, { allowAdmin = false } = {}) {
  return (req, res, next) => {
    const token = extractBearer(req);
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

    if (allowAdmin && token === env.adminPanelToken) {
      req.auth = { kind: "admin", role: "admin" };
      return next();
    }

    const legacyAdmin = req.header("x-admin-token");
    if (allowAdmin && legacyAdmin && legacyAdmin === env.adminPanelToken) {
      req.auth = { kind: "admin", role: "admin" };
      return next();
    }

    const payload = verifyToken(token);
    if (!payload) {
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }

    const isAdminJwt =
      allowAdmin &&
      (payload.kind === "admin" || payload.role === "admin" || payload.sub === "env-admin" || payload.sub === "legacy");

    if (payload.kind !== kind && !isAdminJwt) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    req.auth = payload;
    next();
  };
}

export function requireZfAuth(req, res, next) {
  const token = extractBearer(req);
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  if (token === env.adminPanelToken) {
    req.zfAuth = { role: "platform_admin", tenant_id: req.header("x-tenant-id") || null };
    return next();
  }

  const payload = verifyToken(token);
  if (!payload || (payload.kind !== "zf" && payload.kind !== "admin" && payload.role !== "admin")) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
  req.zfAuth = payload;
  next();
}
