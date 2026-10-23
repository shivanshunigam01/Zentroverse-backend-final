export const PAYROLL_STATUSES = ["generated", "paid"];
export const PAYROLL_CURRENCY = "INR";
export const PAYROLL_CURRENCY_LOCALE = "en-IN";
export const PAYROLL_COMPONENT_KINDS = ["earning", "deduction"];
export const EARNING_COMPONENTS = [
    { key: "basicSalary", label: "Basic salary", kind: "earning" },
    { key: "hra", label: "House rent allowance", kind: "earning" },
    { key: "allowances", label: "Allowances", kind: "earning" },
    { key: "bonus", label: "Bonus", kind: "earning" },
];
export const DEDUCTION_COMPONENTS = [
    { key: "deductions", label: "Deductions", kind: "deduction" },
];
export const PAYROLL_COMPONENTS = [...EARNING_COMPONENTS, ...DEDUCTION_COMPONENTS];
export const PAYROLL_ELIGIBLE_STATUSES = ["active", "on_leave"];
//# sourceMappingURL=payroll.js.map