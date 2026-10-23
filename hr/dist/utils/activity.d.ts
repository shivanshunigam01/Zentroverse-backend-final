import type { ActivityTone } from "../constants/dashboard.js";
export declare function recordActivity(organizationId: string, input: {
    title: string;
    detail?: string;
    tone?: ActivityTone;
}): Promise<void>;
