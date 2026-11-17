import { USER_ROLES } from "../constants/roles.js";
import { InterviewModel } from "../models/interview.model.js";
import { UserModel } from "../models/user.model.js";
import { notifyOnce } from "../notifications/notify.js";
const REMINDER_INTERVAL_MS = 15 * 60 * 1000;
function dateKey(date) {
    return date.toISOString().slice(0, 10);
}
function idOf(value) {
    if (!value)
        return "";
    if (typeof value === "object" && "_id" in value)
        return String(value._id);
    return String(value);
}
function unique(values) {
    return [...new Set(values.map(idOf).filter(Boolean))];
}
/** Sends a day-before reminder, a due-day reminder, and a one-time overdue escalation. */
export async function runInterviewFeedbackReminders(now = new Date()) {
    const today = dateKey(now);
    const tomorrow = new Date(`${today}T00:00:00.000Z`);
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    const tomorrowKey = dateKey(tomorrow);
    const interviews = await InterviewModel.find({
        nextActionDeadline: { $ne: null, $lt: new Date(`${tomorrowKey}T23:59:59.999Z`) },
        status: { $ne: "CANCELLED" },
        decision: "",
    })
        .select("_id organizationId candidateId mandateId interviewers nextActionDeadline")
        .populate({ path: "candidateId", select: "firstName lastName name" })
        .populate({ path: "mandateId", select: "position assignedRecruiters createdBy" })
        .lean();
    for (const interview of interviews) {
        if (!(interview.nextActionDeadline instanceof Date))
            continue;
        const deadline = dateKey(interview.nextActionDeadline);
        const overdue = deadline < today;
        const phase = overdue ? "overdue" : deadline === today ? "due-today" : deadline === tomorrowKey ? "due-tomorrow" : "";
        if (!phase)
            continue;
        const candidate = interview.candidateId;
        const mandate = interview.mandateId;
        const candidateName = candidate?.name || `${candidate?.firstName ?? ""} ${candidate?.lastName ?? ""}`.trim() || "Candidate";
        const position = mandate?.position || "open role";
        const audience = unique([...(interview.interviewers ?? []), ...(mandate?.assignedRecruiters ?? []), mandate?.createdBy]);
        if (overdue) {
            const managers = await UserModel.find({
                organizationId: interview.organizationId,
                isActive: true,
                role: { $in: [USER_ROLES.SUPER_ADMIN, USER_ROLES.HR_ADMIN, USER_ROLES.MANAGER] },
            }).select("_id").lean();
            audience.push(...managers.map((user) => String(user._id)));
        }
        const title = overdue ? "Client feedback is overdue" : phase === "due-today" ? "Client feedback is due today" : "Client feedback is due tomorrow";
        const message = overdue
            ? `Feedback for ${candidateName} · ${position} passed its ${deadline} deadline. Please record the decision or update the deadline.`
            : `Feedback for ${candidateName} · ${position} is due ${phase === "due-today" ? "today" : "tomorrow"} (${deadline}).`;
        await Promise.all(unique(audience).map((userId) => notifyOnce({
            userId,
            organizationId: String(interview.organizationId),
            title,
            message,
            type: "recruitment",
            link: `/recruitment/interviews/${interview._id}/edit`,
            metadata: { dedupeKey: `interview-feedback:${interview._id}:${deadline}:${phase}`, entityId: String(interview._id), deadline },
        })));
    }
}
export function startInterviewFeedbackReminders() {
    const run = () => void runInterviewFeedbackReminders().catch((error) => {
        console.error("[Recruitment] Failed to process client feedback deadlines", error);
    });
    run();
    return setInterval(run, REMINDER_INTERVAL_MS);
}
//# sourceMappingURL=interview-feedback-reminders.js.map