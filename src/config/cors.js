/** Permissive CORS — reflects any browser origin (required when credentials: true). */
export const corsOptions = {
  origin(origin, callback) {
    callback(null, origin || true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "x-admin-token", "x-tenant-id"],
  exposedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
};

/** @deprecated use corsOptions with express cors() */
export function corsOriginCallback(origin, callback) {
  corsOptions.origin(origin, callback);
}

export function isOriginAllowed(_origin) {
  return true;
}
