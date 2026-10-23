import { ActivityModel } from "../models/activity.model.js";
export async function recordActivity(organizationId, input) {
    try {
        await ActivityModel.create({
            organizationId,
            title: input.title,
            detail: input.detail ?? "",
            tone: input.tone ?? "default",
        });
    }
    catch {
        // Dashboard activity is best-effort and must not fail the source action.
    }
}
//# sourceMappingURL=activity.js.map