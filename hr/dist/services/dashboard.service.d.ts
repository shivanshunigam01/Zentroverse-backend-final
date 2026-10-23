import type { AuthContext } from "../types/auth.js";
export declare function getDashboard(auth: AuthContext): Promise<{
    generatedAt: string;
    timezone: string;
    totals: {
        employees: number;
        presentToday: number;
        expectedToday: number;
        presentPercent: number;
        onLeaveToday: number;
        pendingLeaveRequests: number;
        growthPercent: number;
        growthLabel: string;
    };
    employeeGrowth: {
        month: string;
        count: number;
    }[];
    attendanceTrend: {
        label: string;
        date: string;
        present: number;
        leave: number;
    }[];
    departmentDistribution: {
        id: string;
        name: string;
        count: number;
    }[];
    recentHires: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
    }[];
    onLeave: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
    }[];
    pendingRequests: {
        id: string;
        detail: string;
        name: string;
        initials: string;
        profileImage: string;
    }[];
    upcomingLeaves: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
    }[];
    activities: {
        id: string;
        title: string;
        detail: string;
        time: string;
        tone: "default" | "success" | "warning" | "brand" | "muted";
        createdAt: string;
    }[];
    upcomingHolidays: {
        id: string;
        name: string;
        date: string;
        when: string;
        region: string;
    }[];
    upcomingBirthdays: {
        date: string;
        turning: number;
        when: string;
        id: string;
        name: string;
        initials: string;
        profileImage: string;
    }[];
}>;
