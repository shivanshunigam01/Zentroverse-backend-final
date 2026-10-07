import { getAllowedOrigins } from "./env.js";

const PRODUCTION_HOST_SUFFIXES = [".zentroverse.com", ".zentrosure.com"];
const PRODUCTION_EXACT_HOSTS = new Set([
  "zentroverse.com",
  "www.zentroverse.com",
  "zentroverse.in",
  "www.zentroverse.in",
  "backend.zentrosure.com",
  "localhost",
  "127.0.0.1",
]);

function hostnameAllowed(hostname) {
  if (!hostname) return false;
  const host = hostname.toLowerCase();
  if (PRODUCTION_EXACT_HOSTS.has(host)) return true;
  return PRODUCTION_HOST_SUFFIXES.some((suffix) => host.endsWith(suffix) || host === suffix.slice(1));
}

/**
 * Browser CORS: allow Zentroverse / Zentrosure frontends + entries in CORS_ORIGIN.
 */
export function isOriginAllowed(origin) {
  if (!origin) return true;

  try {
    const url = new URL(origin);
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    if (hostnameAllowed(url.hostname)) return true;
  } catch {
    return false;
  }

  const fromEnv = getAllowedOrigins();
  if (fromEnv === true) return true;
  return fromEnv.includes(origin);
}

export function corsOriginCallback(origin, callback) {
  if (!origin || isOriginAllowed(origin)) {
    callback(null, origin || true);
    return;
  }
  console.warn(`[cors] blocked origin: ${origin}`);
  callback(null, false);
}
