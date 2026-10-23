type HealthData = {
    status: "ok" | "degraded";
    database: "connected" | "disconnected";
};
export type HealthPayload = {
    success: boolean;
    message: string;
    data: HealthData;
};
export declare function getHealthStatus(): HealthPayload;
export declare function getReadinessStatus(): HealthPayload;
export {};
