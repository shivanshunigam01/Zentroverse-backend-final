import type { AuthContext } from "../types/auth.js";
import type { CreateSalaryStructureInput, GeneratePayrollInput, PayrollListQueryInput, PayrollPreviewQueryInput, StructureListQueryInput, UpdateSalaryStructureInput } from "../validators/payroll.validators.js";
export declare function listSalaryStructures(auth: AuthContext, query: StructureListQueryInput): Promise<{
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
            designation: string | null;
        } | null;
        basicSalary: number;
        hra: number;
        allowances: number;
        bonus: number;
        deductions: number;
        effectiveFrom: string;
        effectiveFromLabel: string;
        breakdown: import("../utils/payroll.js").PayrollComputation;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getSalaryStructure(auth: AuthContext, id: string): Promise<{
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
        designation: string | null;
    } | null;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: string;
    effectiveFromLabel: string;
    breakdown: import("../utils/payroll.js").PayrollComputation;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createSalaryStructure(auth: AuthContext, input: CreateSalaryStructureInput): Promise<{
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
        designation: string | null;
    } | null;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: string;
    effectiveFromLabel: string;
    breakdown: import("../utils/payroll.js").PayrollComputation;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateSalaryStructure(auth: AuthContext, id: string, input: UpdateSalaryStructureInput): Promise<{
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
        designation: string | null;
    } | null;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: string;
    effectiveFromLabel: string;
    breakdown: import("../utils/payroll.js").PayrollComputation;
    createdAt: string;
    updatedAt: string;
}>;
export declare function listPayrolls(auth: AuthContext, query: PayrollListQueryInput): Promise<{
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
            designation: string | null;
        } | null;
        salaryStructureId: string | null;
        month: number;
        year: number;
        periodLabel: string;
        currency: string;
        earnings: {
            key: string;
            label: string;
            amount: number;
        }[];
        deductions: {
            key: string;
            label: string;
            amount: number;
        }[];
        grossSalary: number;
        totalDeductions: number;
        netSalary: number;
        status: string;
        generatedAt: string;
        generatedLabel: string;
        paidAt: string | null;
        paidLabel: string | null;
        createdAt: string;
        updatedAt: string;
    }[];
    summary: {
        employees: number;
        generated: number;
        paid: number;
        gross: number;
        net: number;
    };
    month: number | null;
    year: number | null;
    periodLabel: string | null;
    currency: string;
}>;
export declare function getPayroll(auth: AuthContext, id: string): Promise<{
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
        designation: string | null;
    } | null;
    salaryStructureId: string | null;
    month: number;
    year: number;
    periodLabel: string;
    currency: string;
    earnings: {
        key: string;
        label: string;
        amount: number;
    }[];
    deductions: {
        key: string;
        label: string;
        amount: number;
    }[];
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    status: string;
    generatedAt: string;
    generatedLabel: string;
    paidAt: string | null;
    paidLabel: string | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function previewPayroll(auth: AuthContext, query: PayrollPreviewQueryInput): Promise<{
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
        designation: string | null;
    };
    month: number;
    year: number;
    periodLabel: string;
    currency: string;
    structure: {
        basicSalary: number;
        hra: number;
        allowances: number;
        bonus: number;
        deductions: number;
        id: string;
        effectiveFrom: string;
    };
    breakdown: import("../utils/payroll.js").PayrollComputation;
    existingPayrollId: string | null;
    existingStatus: string | null;
}>;
export declare function generatePayroll(auth: AuthContext, input: GeneratePayrollInput): Promise<{
    created: number;
    skippedDuplicates: number;
    skippedNoStructure: number;
    skippedInactive: number;
    month: number;
    year: number;
    periodLabel: string;
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
            designation: string | null;
        } | null;
        salaryStructureId: string | null;
        month: number;
        year: number;
        periodLabel: string;
        currency: string;
        earnings: {
            key: string;
            label: string;
            amount: number;
        }[];
        deductions: {
            key: string;
            label: string;
            amount: number;
        }[];
        grossSalary: number;
        totalDeductions: number;
        netSalary: number;
        status: string;
        generatedAt: string;
        generatedLabel: string;
        paidAt: string | null;
        paidLabel: string | null;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function markPayrollPaid(auth: AuthContext, id: string): Promise<{
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
        designation: string | null;
    } | null;
    salaryStructureId: string | null;
    month: number;
    year: number;
    periodLabel: string;
    currency: string;
    earnings: {
        key: string;
        label: string;
        amount: number;
    }[];
    deductions: {
        key: string;
        label: string;
        amount: number;
    }[];
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    status: string;
    generatedAt: string;
    generatedLabel: string;
    paidAt: string | null;
    paidLabel: string | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function getPayslip(auth: AuthContext, id: string): Promise<{
    payroll: {
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
            designation: string | null;
        } | null;
        salaryStructureId: string | null;
        month: number;
        year: number;
        periodLabel: string;
        currency: string;
        earnings: {
            key: string;
            label: string;
            amount: number;
        }[];
        deductions: {
            key: string;
            label: string;
            amount: number;
        }[];
        grossSalary: number;
        totalDeductions: number;
        netSalary: number;
        status: string;
        generatedAt: string;
        generatedLabel: string;
        paidAt: string | null;
        paidLabel: string | null;
        createdAt: string;
        updatedAt: string;
    };
    organization: {
        name: string;
        email: string;
        phone: string;
        logo: string;
        address: {
            line1: string;
            line2: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
    };
}>;
