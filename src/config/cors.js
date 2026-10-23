/** Production HR frontend (create-space / Vercel) */
export const ZENTROVERSE_FRONTEND_ORIGINS = [
  "https://www.zentroverse.com",
  "https://zentroverse.com",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

/** Permissive CORS — reflects request Origin (required for credentials: true). */
export const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      callback(null, true);
      return;
    }
    callback(null, origin);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "x-admin-token",
    "x-tenant-id",
  ],
  exposedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
};

/** Extra headers so /api/v1 and /api/hr always work from www.zentroverse.com */
export function applyCredentialedCorsHeaders(req, res, next) {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Requested-With, x-admin-token, x-tenant-id",
    );
    res.setHeader("Access-Control-Expose-Headers", "Content-Type, Authorization");
    res.append("Vary", "Origin");
  }
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
}

/** @deprecated use corsOptions with express cors() */
export function corsOriginCallback(origin, callback) {
  corsOptions.origin(origin, callback);
}

export function isOriginAllowed(_origin) {
  return true;
}
