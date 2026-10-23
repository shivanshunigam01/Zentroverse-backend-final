export const corsOptions = {
    origin(origin, callback) {
        callback(null, origin || true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-Admin-Token"],
    exposedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
};
//# sourceMappingURL=cors.js.map