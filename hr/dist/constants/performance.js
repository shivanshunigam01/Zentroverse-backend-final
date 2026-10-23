export const GOAL_STATUSES = ["not_started", "in_progress", "completed", "cancelled"];
export const REVIEW_STATUSES = ["draft", "submitted"];
export const REVIEW_KINDS = ["self", "manager"];
export const PERFORMANCE_RATINGS = [1, 2, 3, 4, 5];
export const PERFORMANCE_RATING_LABELS = {
    1: "Needs improvement",
    2: "Developing",
    3: "Meets expectations",
    4: "Exceeds expectations",
    5: "Outstanding",
};
export const GOAL_STATUS_LABELS = {
    not_started: "Not started",
    in_progress: "In progress",
    completed: "Completed",
    cancelled: "Cancelled",
};
export function statusFromProgress(progress, current) {
    if (current === "cancelled")
        return "cancelled";
    if (progress >= 100)
        return "completed";
    if (progress <= 0)
        return "not_started";
    return "in_progress";
}
//# sourceMappingURL=performance.js.map