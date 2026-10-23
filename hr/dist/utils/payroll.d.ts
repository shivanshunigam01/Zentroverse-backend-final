import { type PayrollComponentKey, type PayrollComponentKind } from "../constants/payroll.js";
export type SalaryAmounts = Record<PayrollComponentKey, number>;
export type PayrollLine = {
    key: PayrollComponentKey;
    label: string;
    kind: PayrollComponentKind;
    amount: number;
};
export type PayrollComputation = {
    lines: PayrollLine[];
    earnings: PayrollLine[];
    deductions: PayrollLine[];
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
};
export declare function roundMoney(value: number): number;
export declare function computePayroll(amounts: Partial<SalaryAmounts>): PayrollComputation;
export declare function lastDateKeyOfMonth(year: number, month: number): string;
export declare function periodLabel(year: number, month: number): string;
