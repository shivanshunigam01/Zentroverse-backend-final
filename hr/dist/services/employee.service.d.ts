import type { AuthContext } from "../types/auth.js";
import type { CreateEmployeeInput, EmployeeListQueryInput, UpdateEmployeeInput } from "../validators/employee.validators.js";
export declare function toPublicEmployee(doc: Record<string, unknown>): {
    id: string;
    organizationId: string;
    userId: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImage: string;
    phone: string;
    dateOfBirth: string | null;
    gender: string | null;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    departmentId: string | null;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    designationId: string | null;
    designation: {
        id: string;
        title: string;
    } | null;
    managerId: string | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        employeeCode: string;
        fullName: string;
    } | null;
    joiningDate: string | null;
    employmentType: string;
    employmentStatus: string;
    workLocation: string;
    emergencyContact: {
        name: string;
        relationship: string | null;
        phone: string;
    };
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    } | null;
    createdAt: string;
    updatedAt: string;
};
export declare function employeeScopeFilter(auth: AuthContext): Promise<Record<string, unknown>>;
export declare function listEmployees(auth: AuthContext, query: EmployeeListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        userId: string;
        employeeCode: string;
        firstName: string;
        lastName: string;
        fullName: string;
        profileImage: string;
        phone: string;
        dateOfBirth: string | null;
        gender: string | null;
        address: {
            line1: string;
            line2: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
        departmentId: string | null;
        department: {
            id: string;
            name: string;
            code: string;
        } | null;
        designationId: string | null;
        designation: {
            id: string;
            title: string;
        } | null;
        managerId: string | null;
        manager: {
            id: string;
            firstName: string;
            lastName: string;
            employeeCode: string;
            fullName: string;
        } | null;
        joiningDate: string | null;
        employmentType: string;
        employmentStatus: string;
        workLocation: string;
        emergencyContact: {
            name: string;
            relationship: string | null;
            phone: string;
        };
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
            isActive: boolean;
        } | null;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getEmployee(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    userId: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImage: string;
    phone: string;
    dateOfBirth: string | null;
    gender: string | null;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    departmentId: string | null;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    designationId: string | null;
    designation: {
        id: string;
        title: string;
    } | null;
    managerId: string | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        employeeCode: string;
        fullName: string;
    } | null;
    joiningDate: string | null;
    employmentType: string;
    employmentStatus: string;
    workLocation: string;
    emergencyContact: {
        name: string;
        relationship: string | null;
        phone: string;
    };
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function getMyEmployee(auth: AuthContext): Promise<{
    id: string;
    organizationId: string;
    userId: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImage: string;
    phone: string;
    dateOfBirth: string | null;
    gender: string | null;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    departmentId: string | null;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    designationId: string | null;
    designation: {
        id: string;
        title: string;
    } | null;
    managerId: string | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        employeeCode: string;
        fullName: string;
    } | null;
    joiningDate: string | null;
    employmentType: string;
    employmentStatus: string;
    workLocation: string;
    emergencyContact: {
        name: string;
        relationship: string | null;
        phone: string;
    };
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createEmployee(auth: AuthContext, input: CreateEmployeeInput): Promise<{
    id: string;
    organizationId: string;
    userId: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImage: string;
    phone: string;
    dateOfBirth: string | null;
    gender: string | null;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    departmentId: string | null;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    designationId: string | null;
    designation: {
        id: string;
        title: string;
    } | null;
    managerId: string | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        employeeCode: string;
        fullName: string;
    } | null;
    joiningDate: string | null;
    employmentType: string;
    employmentStatus: string;
    workLocation: string;
    emergencyContact: {
        name: string;
        relationship: string | null;
        phone: string;
    };
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateEmployee(auth: AuthContext, id: string, input: UpdateEmployeeInput): Promise<{
    id: string;
    organizationId: string;
    userId: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImage: string;
    phone: string;
    dateOfBirth: string | null;
    gender: string | null;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    departmentId: string | null;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    designationId: string | null;
    designation: {
        id: string;
        title: string;
    } | null;
    managerId: string | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        employeeCode: string;
        fullName: string;
    } | null;
    joiningDate: string | null;
    employmentType: string;
    employmentStatus: string;
    workLocation: string;
    emergencyContact: {
        name: string;
        relationship: string | null;
        phone: string;
    };
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function activateEmployee(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    userId: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImage: string;
    phone: string;
    dateOfBirth: string | null;
    gender: string | null;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    departmentId: string | null;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    designationId: string | null;
    designation: {
        id: string;
        title: string;
    } | null;
    managerId: string | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        employeeCode: string;
        fullName: string;
    } | null;
    joiningDate: string | null;
    employmentType: string;
    employmentStatus: string;
    workLocation: string;
    emergencyContact: {
        name: string;
        relationship: string | null;
        phone: string;
    };
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deactivateEmployee(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    userId: string;
    employeeCode: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profileImage: string;
    phone: string;
    dateOfBirth: string | null;
    gender: string | null;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    departmentId: string | null;
    department: {
        id: string;
        name: string;
        code: string;
    } | null;
    designationId: string | null;
    designation: {
        id: string;
        title: string;
    } | null;
    managerId: string | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        employeeCode: string;
        fullName: string;
    } | null;
    joiningDate: string | null;
    employmentType: string;
    employmentStatus: string;
    workLocation: string;
    emergencyContact: {
        name: string;
        relationship: string | null;
        phone: string;
    };
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
