import mongoose from "mongoose";
import { suggestedIncrementPercent } from "../constants/increment.js";
import { PAYROLL_ELIGIBLE_STATUSES } from "../constants/payroll.js";
import { EmployeeModel } from "../models/employee.model.js";
import { PerformanceReviewModel } from "../models/performance-review.model.js";
import { SalaryStructureModel } from "../models/salary-structure.model.js";
import { recordActivity } from "../utils/activity.js";
import { AppError } from "../utils/app-error.js";
import { formatShortDate, utcDateFromKey } from "../utils/dates.js";
import { parseObjectId } from "../utils/object-id.js";
import { roundMoney } from "../utils/payroll.js";
import { createSalaryStructure } from "./payroll.service.js";
function employeeName(employee) {
    return `${employee.firstName ?? ""} ${employee.lastName ?? ""}`.trim() || "Unknown";
}
async function latestSalaryStructure(organizationId, employeeId) {
    const now = new Date();
    return SalaryStructureModel.findOne({
        organizationId,
        employeeId,
        effectiveFrom: { $lte: now },
    })
        .sort({ effectiveFrom: -1 })
        .lean();
}
function pickReviewForEmployee(reviews, employeeId) {
    const forEmployee = reviews.filter((row) => String(row.employeeId) === employeeId);
    const manager = forEmployee.find((row) => row.kind === "manager" && row.status === "submitted");
    if (manager)
        return manager;
    return forEmployee.find((row) => row.kind === "self" && row.status === "submitted") ?? null;
}
function scaledAmounts(base, incrementPercent) {
    const factor = 1 + incrementPercent / 100;
    return {
        basicSalary: roundMoney(base.basicSalary * factor),
        hra: roundMoney(base.hra * factor),
        allowances: roundMoney(base.allowances * factor),
        bonus: base.bonus,
        deductions: base.deductions,
    };
}
function grossOf(amounts) {
    return roundMoney(amounts.basicSalary + amounts.hra + amounts.allowances + amounts.bonus - amounts.deductions);
}
export async function getIncrementWorksheet(auth, query) {
    const organizationId = auth.organizationId;
    const reviewPeriod = query.reviewPeriod.trim();
    const employees = await EmployeeModel.find({
        organizationId,
        employmentStatus: { $in: [...PAYROLL_ELIGIBLE_STATUSES] },
    })
        .select("firstName lastName employeeCode departmentId designationId")
        .populate([
        { path: "departmentId", select: "name" },
        { path: "designationId", select: "title" },
    ])
        .sort({ firstName: 1, lastName: 1 })
        .lean();
    const reviews = await PerformanceReviewModel.find({
        organizationId,
        reviewPeriod,
        status: "submitted",
    })
        .select("employeeId kind rating status reviewPeriod")
        .lean();
    const rows = [];
    for (const employee of employees) {
        const employeeId = String(employee._id);
        const review = pickReviewForEmployee(reviews, employeeId);
        const rating = review?.rating ?? null;
        const suggestedPercent = suggestedIncrementPercent(rating);
        const structure = await latestSalaryStructure(organizationId, employeeId);
        const current = structure
            ? {
                basicSalary: Number(structure.basicSalary ?? 0),
                hra: Number(structure.hra ?? 0),
                allowances: Number(structure.allowances ?? 0),
                bonus: Number(structure.bonus ?? 0),
                deductions: Number(structure.deductions ?? 0),
            }
            : {
                basicSalary: 0,
                hra: 0,
                allowances: 0,
                bonus: 0,
                deductions: 0,
            };
        const department = employee.departmentId &&
            typeof employee.departmentId === "object" &&
            "name" in employee.departmentId
            ? employee.departmentId.name
            : null;
        rows.push({
            employeeId,
            employeeName: employeeName(employee),
            employeeCode: employee.employeeCode ?? "",
            department,
            reviewId: review ? String(review._id) : null,
            reviewKind: review?.kind ?? null,
            rating,
            suggestedIncrementPercent: suggestedPercent,
            recommendedIncrementPercent: suggestedPercent,
            hasSalaryStructure: Boolean(structure),
            currentGross: grossOf(current),
            projectedGross: grossOf(scaledAmounts(current, suggestedPercent)),
            currentSalary: current,
        });
    }
    return {
        reviewPeriod,
        ratingBands: [
            { rating: 5, incrementPercent: 12 },
            { rating: 4, incrementPercent: 8 },
            { rating: 3, incrementPercent: 5 },
            { rating: 2, incrementPercent: 2 },
            { rating: 1, incrementPercent: 0 },
        ],
        items: rows,
    };
}
export async function applyPerformanceIncrements(auth, input) {
    const organizationId = auth.organizationId;
    const effectiveFrom = input.effectiveFrom;
    const applied = [];
    for (const line of input.items) {
        parseObjectId(line.employeeId, "Invalid employee");
        const employee = await EmployeeModel.findOne({
            _id: line.employeeId,
            organizationId,
            employmentStatus: { $in: [...PAYROLL_ELIGIBLE_STATUSES] },
        }).lean();
        if (!employee) {
            throw AppError.badRequest(`Employee ${line.employeeId} is not eligible for payroll`);
        }
        const structure = await latestSalaryStructure(organizationId, line.employeeId);
        if (!structure) {
            throw AppError.badRequest(`${employeeName(employee)} has no salary structure. Add one before applying an increment.`);
        }
        const base = {
            basicSalary: Number(structure.basicSalary ?? 0),
            hra: Number(structure.hra ?? 0),
            allowances: Number(structure.allowances ?? 0),
            bonus: Number(structure.bonus ?? 0),
            deductions: Number(structure.deductions ?? 0),
        };
        const next = scaledAmounts(base, line.incrementPercent);
        await createSalaryStructure(auth, {
            employeeId: line.employeeId,
            effectiveFrom,
            ...next,
        });
        applied.push({ employeeId: line.employeeId, incrementPercent: line.incrementPercent });
    }
    await recordActivity(organizationId, {
        title: "Performance increments applied",
        detail: `${applied.length} employees · period ${input.reviewPeriod} · effective ${formatShortDate(effectiveFrom)}`,
        tone: "success",
    });
    return {
        message: `Applied increments for ${applied.length} employee(s)`,
        reviewPeriod: input.reviewPeriod,
        effectiveFrom,
        appliedCount: applied.length,
    };
}
//# sourceMappingURL=increment.service.js.map