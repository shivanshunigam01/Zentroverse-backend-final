export declare const PAYROLL_STATUSES: readonly ["generated", "paid"];
export type PayrollStatus = (typeof PAYROLL_STATUSES)[number];
export declare const PAYROLL_CURRENCY = "INR";
export declare const PAYROLL_CURRENCY_LOCALE = "en-IN";
export declare const PAYROLL_COMPONENT_KINDS: readonly ["earning", "deduction"];
export type PayrollComponentKind = (typeof PAYROLL_COMPONENT_KINDS)[number];
export type PayrollComponentKey = "basicSalary" | "hra" | "allowances" | "bonus" | "deductions";
export type PayrollComponentDef = {
    key: PayrollComponentKey;
    label: string;
    kind: PayrollComponentKind;
};
export declare const EARNING_COMPONENTS: readonly [{
    readonly key: "basicSalary";
    readonly label: "Basic salary";
    readonly kind: "earning";
}, {
    readonly key: "hra";
    readonly label: "House rent allowance";
    readonly kind: "earning";
}, {
    readonly key: "allowances";
    readonly label: "Allowances";
    readonly kind: "earning";
}, {
    readonly key: "bonus";
    readonly label: "Bonus";
    readonly kind: "earning";
}];
export declare const DEDUCTION_COMPONENTS: readonly [{
    readonly key: "deductions";
    readonly label: "Deductions";
    readonly kind: "deduction";
}];
export declare const PAYROLL_COMPONENTS: readonly [{
    readonly key: "basicSalary";
    readonly label: "Basic salary";
    readonly kind: "earning";
}, {
    readonly key: "hra";
    readonly label: "House rent allowance";
    readonly kind: "earning";
}, {
    readonly key: "allowances";
    readonly label: "Allowances";
    readonly kind: "earning";
}, {
    readonly key: "bonus";
    readonly label: "Bonus";
    readonly kind: "earning";
}, {
    readonly key: "deductions";
    readonly label: "Deductions";
    readonly kind: "deduction";
}];
export declare const PAYROLL_ELIGIBLE_STATUSES: readonly ["active", "on_leave"];
