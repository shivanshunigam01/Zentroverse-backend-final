import crypto from "node:crypto";
import { env } from "../config/env.js";

function b64url(input) {
  return Buffer.from(input).toString("base64url");
}

function b64urlJson(obj) {
  return b64url(JSON.stringify(obj));
}

export function signToken(payload, expiresInSec = 7 * 24 * 3600) {
  const header = b64urlJson({ alg: "HS256", typ: "JWT" });
  const exp = Math.floor(Date.now() / 1000) + expiresInSec;
  const body = b64urlJson({ ...payload, exp });
  const sig = crypto.createHmac("sha256", env.jwtSecret).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${sig}`;
}

export function verifyToken(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [header, body, sig] = parts;
  const expected = crypto.createHmac("sha256", env.jwtSecret).update(`${header}.${body}`).digest("base64url");
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
