import type { CreateDepartmentInput, CreateDesignationInput, ListQueryInput, UpdateDepartmentInput, UpdateDesignationInput, UpdateOrganizationInput } from "../validators/organization.validators.js";
export declare function toPublicOrganization(org: {
    id?: string;
    _id?: unknown;
    name: string;
    slug: string;
    logo?: string | null;
    industry?: string | null;
    companySize?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: {
        line1?: string;
        line2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
    } | null;
    timezone?: string | null;
    workingDays?: string[];
    workingHours?: {
        start?: string;
        end?: string;
    } | null;
    settings?: {
        dateFormat?: string;
        weekStartsOn?: string;
    } | null;
    createdAt: Date;
    updatedAt: Date;
}): {
    id: string;
    name: string;
    slug: string;
    logo: string;
    industry: string;
    companySize: string | null;
    email: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    timezone: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    settings: {
        dateFormat: string;
        weekStartsOn: string;
    };
    createdAt: string;
    updatedAt: string;
};
export declare function getOrganization(organizationId: string): Promise<{
    id: string;
    name: string;
    slug: string;
    logo: string;
    industry: string;
    companySize: string | null;
    email: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    timezone: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    settings: {
        dateFormat: string;
        weekStartsOn: string;
    };
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateOrganization(organizationId: string, input: UpdateOrganizationInput): Promise<{
    id: string;
    name: string;
    slug: string;
    logo: string;
    industry: string;
    companySize: string | null;
    email: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    timezone: string;
    workingDays: string[];
    workingHours: {
        start: string;
        end: string;
    };
    settings: {
        dateFormat: string;
        weekStartsOn: string;
    };
    createdAt: string;
    updatedAt: string;
}>;
export declare function listMembers(organizationId: string): Promise<{
    id: string;
    name: string;
    email: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
}[]>;
export declare function listDepartments(organizationId: string, query: ListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        name: string;
        code: string;
        description: string;
        headId: string | null;
        head: {
            id: string;
            name: string;
            email: string;
        } | null;
        isActive: boolean;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getDepartment(organizationId: string, id: string): Promise<{
    id: string;
    organizationId: string;
    name: string;
    code: string;
    description: string;
    headId: string | null;
    head: {
        id: string;
        name: string;
        email: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createDepartment(organizationId: string, input: CreateDepartmentInput): Promise<{
    id: string;
    organizationId: string;
    name: string;
    code: string;
    description: string;
    headId: string | null;
    head: {
        id: string;
        name: string;
        email: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateDepartment(organizationId: string, id: string, input: UpdateDepartmentInput): Promise<{
    id: string;
    organizationId: string;
    name: string;
    code: string;
    description: string;
    headId: string | null;
    head: {
        id: string;
        name: string;
        email: string;
    } | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteDepartment(organizationId: string, id: string): Promise<void>;
export declare function listDesignations(organizationId: string, query: ListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        title: string;
        departmentId: string;
        department: {
            id: string;
            name: string;
            code: string;
        } | null;
        description: string;
        isActive: boolean;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getDesignation(organizationId: string, id: string): Promise<{
    id: string;
    organizationId: string;
    title: string;
    departmentId: string;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createDesignation(organizationId: string, input: CreateDesignationInput): Promise<{
    id: string;
    organizationId: string;
    title: string;
    departmentId: string;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateDesignation(organizationId: string, id: string, input: UpdateDesignationInput): Promise<{
    id: string;
    organizationId: string;
    title: string;
    departmentId: string;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteDesignation(organizationId: string, id: string): Promise<void>;
