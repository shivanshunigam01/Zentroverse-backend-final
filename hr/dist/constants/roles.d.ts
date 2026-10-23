export declare const USER_ROLES: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly HR_ADMIN: "HR_ADMIN";
    readonly MANAGER: "MANAGER";
    readonly EMPLOYEE: "EMPLOYEE";
};
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
export declare const USER_ROLE_VALUES: ("SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE")[];
