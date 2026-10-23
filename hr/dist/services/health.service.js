import { MESSAGES } from "../constants/messages.js";
import { isDatabaseConnected } from "../config/db.js";
export function getHealthStatus() {
    const database = isDatabaseConnected() ? "connected" : "disconnected";
    return {
        success: true,
        message: MESSAGES.API_RUNNING,
        data: {
            status: database === "connected" ? "ok" : "degraded",
            database,
        },
    };
}
export function getReadinessStatus() {
    const health = getHealthStatus();
    const ready = health.data.database === "connected";
    return {
        success: ready,
        message: ready ? MESSAGES.API_RUNNING : "Database unavailable",
        data: health.data,
    };
}
//# sourceMappingURL=health.service.js.map