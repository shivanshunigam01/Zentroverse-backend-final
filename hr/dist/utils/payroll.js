import { PAYROLL_COMPONENTS, } from "../constants/payroll.js";
export function roundMoney(value) {
    if (!Number.isFinite(value)) {
        return 0;
    }
    return Math.round((value + Number.EPSILON) * 100) / 100;
}
function amountOf(amounts, key) {
    return roundMoney(Number(amounts[key] ?? 0));
}
export function computePayroll(amounts) {
    const lines = PAYROLL_COMPONENTS.map((component) => ({
        key: component.key,
        label: component.label,
        kind: component.kind,
        amount: amountOf(amounts, component.key),
    }));
    const earnings = lines.filter((line) => line.kind === "earning");
    const deductions = lines.filter((line) => line.kind === "deduction");
    const grossSalary = roundMoney(earnings.reduce((sum, line) => sum + line.amount, 0));
    const totalDeductions = roundMoney(deductions.reduce((sum, line) => sum + line.amount, 0));
    const netSalary = roundMoney(Math.max(0, grossSalary - totalDeductions));
    return {
        lines,
        earnings,
        deductions,
        grossSalary,
        totalDeductions,
        netSalary,
    };
}
export function lastDateKeyOfMonth(year, month) {
    return new Date(Date.UTC(year, month, 0)).toISOString().slice(0, 10);
}
export function periodLabel(year, month) {
    return new Intl.DateTimeFormat("en-GB", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(Date.UTC(year, month - 1, 1)));
}
//# sourceMappingURL=payroll.js.map