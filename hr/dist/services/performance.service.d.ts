import type { AuthContext } from "../types/auth.js";
import type { CreateGoalInput, CreateReviewInput, GoalListQueryInput, OverviewQueryInput, ReviewListQueryInput, UpdateGoalInput, UpdateGoalProgressInput, UpdateReviewInput } from "../validators/performance.validators.js";
export declare function getOverview(auth: AuthContext, query: OverviewQueryInput): Promise<{
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    };
    myEmployeeId: string;
    currentPeriod: string;
    isSelf: boolean;
    canPickEmployee: boolean;
    canWriteGoals: boolean;
    canWriteSelfReview: boolean;
    canWriteManagerReview: boolean;
    goals: {
        total: number;
        notStarted: number;
        inProgress: number;
        completed: number;
        cancelled: number;
        avgProgress: number;
        overdue: number;
    };
    ratings: {
        average: number | null;
        count: number;
        latest: {
            rating: number | null;
            period: string;
            kind: string;
        } | null;
        distribution: {
            rating: number;
            count: number;
        }[];
        history: {
            period: string;
            manager: number | null;
            self: number | null;
        }[];
    };
    recentReviews: {
        id: string;
        organizationId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        reviewerId: string;
        reviewer: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        kind: string;
        reviewPeriod: string;
        rating: number | null;
        strengths: string;
        improvements: string;
        feedback: string;
        status: string;
        submittedAt: string | null;
        createdAt: string;
        updatedAt: string;
    }[];
    team: {
        reports: number;
        avgProgress: number;
        reviewsSubmitted: number;
    } | null;
}>;
export declare function listGoals(auth: AuthContext, query: GoalListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        title: string;
        description: string;
        progress: number;
        deadline: string | null;
        deadlineLabel: string | null;
        status: string;
        overdue: boolean;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getGoal(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    title: string;
    description: string;
    progress: number;
    deadline: string | null;
    deadlineLabel: string | null;
    status: string;
    overdue: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createGoal(auth: AuthContext, input: CreateGoalInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    title: string;
    description: string;
    progress: number;
    deadline: string | null;
    deadlineLabel: string | null;
    status: string;
    overdue: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateGoal(auth: AuthContext, id: string, input: UpdateGoalInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    title: string;
    description: string;
    progress: number;
    deadline: string | null;
    deadlineLabel: string | null;
    status: string;
    overdue: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateGoalProgress(auth: AuthContext, id: string, input: UpdateGoalProgressInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    title: string;
    description: string;
    progress: number;
    deadline: string | null;
    deadlineLabel: string | null;
    status: string;
    overdue: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteGoal(auth: AuthContext, id: string): Promise<void>;
export declare function listReviews(auth: AuthContext, query: ReviewListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        reviewerId: string;
        reviewer: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        kind: string;
        reviewPeriod: string;
        rating: number | null;
        strengths: string;
        improvements: string;
        feedback: string;
        status: string;
        submittedAt: string | null;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getReview(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    reviewerId: string;
    reviewer: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    kind: string;
    reviewPeriod: string;
    rating: number | null;
    strengths: string;
    improvements: string;
    feedback: string;
    status: string;
    submittedAt: string | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createReview(auth: AuthContext, input: CreateReviewInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    reviewerId: string;
    reviewer: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    kind: string;
    reviewPeriod: string;
    rating: number | null;
    strengths: string;
    improvements: string;
    feedback: string;
    status: string;
    submittedAt: string | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateReview(auth: AuthContext, id: string, input: UpdateReviewInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    reviewerId: string;
    reviewer: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    kind: string;
    reviewPeriod: string;
    rating: number | null;
    strengths: string;
    improvements: string;
    feedback: string;
    status: string;
    submittedAt: string | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function submitReview(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    reviewerId: string;
    reviewer: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    kind: string;
    reviewPeriod: string;
    rating: number | null;
    strengths: string;
    improvements: string;
    feedback: string;
    status: string;
    submittedAt: string | null;
    createdAt: string;
    updatedAt: string;
}>;
