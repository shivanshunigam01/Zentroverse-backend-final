import type { AuthContext } from "../types/auth.js";
import type { AttendanceCalendarQueryInput, AttendanceDailyQueryInput, AttendanceListQueryInput, AttendanceMonthlyQueryInput, CheckInInput, UpdateAttendanceInput } from "../validators/attendance.validators.js";
export declare function getToday(auth: AuthContext): Promise<{
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: null;
    onLeave: boolean;
    sessionStatus: "not_started";
    employee: null;
    attendance: null;
} | {
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: {
        id: string;
        name: string;
    } | null;
    onLeave: boolean;
    sessionStatus: "on_leave" | "not_started" | "holiday" | "working" | "on_break" | "checked_out";
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
        workLocation: string;
    };
    attendance: {
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
            workLocation: string;
        } | null;
        date: string;
        checkIn: string | null;
        checkOut: string | null;
        checkInLabel: string | null;
        checkOutLabel: string | null;
        breakStartedAt: string | null;
        breakMinutes: number;
        workingMinutes: number;
        overtimeMinutes: number;
        status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
        notes: string;
        source: string;
        createdAt: string;
        updatedAt: string;
    } | null;
}>;
export declare function checkIn(auth: AuthContext, input: CheckInInput): Promise<{
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: null;
    onLeave: boolean;
    sessionStatus: "not_started";
    employee: null;
    attendance: null;
} | {
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: {
        id: string;
        name: string;
    } | null;
    onLeave: boolean;
    sessionStatus: "on_leave" | "not_started" | "holiday" | "working" | "on_break" | "checked_out";
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
        workLocation: string;
    };
    attendance: {
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
            workLocation: string;
        } | null;
        date: string;
        checkIn: string | null;
        checkOut: string | null;
        checkInLabel: string | null;
        checkOutLabel: string | null;
        breakStartedAt: string | null;
        breakMinutes: number;
        workingMinutes: number;
        overtimeMinutes: number;
        status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
        notes: string;
        source: string;
        createdAt: string;
        updatedAt: string;
    } | null;
}>;
export declare function checkOut(auth: AuthContext): Promise<{
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: null;
    onLeave: boolean;
    sessionStatus: "not_started";
    employee: null;
    attendance: null;
} | {
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: {
        id: string;
        name: string;
    } | null;
    onLeave: boolean;
    sessionStatus: "on_leave" | "not_started" | "holiday" | "working" | "on_break" | "checked_out";
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
        workLocation: string;
    };
    attendance: {
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
            workLocation: string;
        } | null;
        date: string;
        checkIn: string | null;
        checkOut: string | null;
        checkInLabel: string | null;
        checkOutLabel: string | null;
        breakStartedAt: string | null;
        breakMinutes: number;
        workingMinutes: number;
        overtimeMinutes: number;
        status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
        notes: string;
        source: string;
        createdAt: string;
        updatedAt: string;
    } | null;
}>;
export declare function startBreak(auth: AuthContext): Promise<{
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: null;
    onLeave: boolean;
    sessionStatus: "not_started";
    employee: null;
    attendance: null;
} | {
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: {
        id: string;
        name: string;
    } | null;
    onLeave: boolean;
    sessionStatus: "on_leave" | "not_started" | "holiday" | "working" | "on_break" | "checked_out";
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
        workLocation: string;
    };
    attendance: {
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
            workLocation: string;
        } | null;
        date: string;
        checkIn: string | null;
        checkOut: string | null;
        checkInLabel: string | null;
        checkOutLabel: string | null;
        breakStartedAt: string | null;
        breakMinutes: number;
        workingMinutes: number;
        overtimeMinutes: number;
        status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
        notes: string;
        source: string;
        createdAt: string;
        updatedAt: string;
    } | null;
}>;
export declare function endBreak(auth: AuthContext): Promise<{
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: null;
    onLeave: boolean;
    sessionStatus: "not_started";
    employee: null;
    attendance: null;
} | {
    generatedAt: string;
    timezone: string;
    today: string;
    now: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    weekStartsOn: string;
    expectedMinutes: number;
    expectedCheckoutAt: string;
    expectedCheckoutLabel: string;
    holiday: {
        id: string;
        name: string;
    } | null;
    onLeave: boolean;
    sessionStatus: "on_leave" | "not_started" | "holiday" | "working" | "on_break" | "checked_out";
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
        workLocation: string;
    };
    attendance: {
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
            workLocation: string;
        } | null;
        date: string;
        checkIn: string | null;
        checkOut: string | null;
        checkInLabel: string | null;
        checkOutLabel: string | null;
        breakStartedAt: string | null;
        breakMinutes: number;
        workingMinutes: number;
        overtimeMinutes: number;
        status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
        notes: string;
        source: string;
        createdAt: string;
        updatedAt: string;
    } | null;
}>;
export declare function getCalendar(auth: AuthContext, query: AttendanceCalendarQueryInput): Promise<{
    month: string;
    timezone: string;
    weekStartsOn: string;
    today: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
        workLocation: string;
    };
    days: {
        date: string;
        isToday: boolean;
        isWorkingDay: boolean;
        status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday" | "rest" | null;
        holiday: string | null;
        workingMinutes: number;
        checkIn: string | null;
        checkOut: string | null;
    }[];
}>;
export declare function listAttendance(auth: AuthContext, query: AttendanceListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    timezone: string;
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
            workLocation: string;
        } | null;
        date: string;
        checkIn: string | null;
        checkOut: string | null;
        checkInLabel: string | null;
        checkOutLabel: string | null;
        breakStartedAt: string | null;
        breakMinutes: number;
        workingMinutes: number;
        overtimeMinutes: number;
        status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
        notes: string;
        source: string;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getDailyOverview(auth: AuthContext, query: AttendanceDailyQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    date: string;
    timezone: string;
    workingHours: {
        start: string;
        end: string;
    };
    isWorkingDay: boolean;
    holiday: string | null;
    summary: {
        expected: number;
        present: number;
        late: number;
        absent: number;
        wfh: number;
        leave: number;
        holiday: number;
        halfDay: number;
    };
    items: {
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
            workLocation: string;
        };
        status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday" | "rest";
        attendance: {
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
                workLocation: string;
            } | null;
            date: string;
            checkIn: string | null;
            checkOut: string | null;
            checkInLabel: string | null;
            checkOutLabel: string | null;
            breakStartedAt: string | null;
            breakMinutes: number;
            workingMinutes: number;
            overtimeMinutes: number;
            status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
            notes: string;
            source: string;
            createdAt: string;
            updatedAt: string;
        } | null;
    }[];
}>;
export declare function getMonthlyReport(auth: AuthContext, query: AttendanceMonthlyQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    month: string;
    timezone: string;
    expectedDays: number;
    items: {
        present: number;
        late: number;
        halfDay: number;
        wfh: number;
        leave: number;
        holiday: number;
        absent: number;
        workingMinutes: number;
        overtimeMinutes: number;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
            workLocation: string;
        };
        expectedDays: number;
    }[];
}>;
export declare function getAttendance(auth: AuthContext, id: string): Promise<{
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
        workLocation: string;
    } | null;
    date: string;
    checkIn: string | null;
    checkOut: string | null;
    checkInLabel: string | null;
    checkOutLabel: string | null;
    breakStartedAt: string | null;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    source: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateAttendance(auth: AuthContext, id: string, input: UpdateAttendanceInput): Promise<{
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
        workLocation: string;
    } | null;
    date: string;
    checkIn: string | null;
    checkOut: string | null;
    checkInLabel: string | null;
    checkOutLabel: string | null;
    breakStartedAt: string | null;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    source: string;
    createdAt: string;
    updatedAt: string;
}>;
