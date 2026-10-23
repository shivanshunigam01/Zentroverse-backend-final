import type { AuthContext } from "../types/auth.js";
import { type SalaryAmounts } from "../utils/payroll.js";
import type { ApplyIncrementsInput, IncrementWorksheetQueryInput } from "../validators/increment.validators.js";
export declare function getIncrementWorksheet(auth: AuthContext, query: IncrementWorksheetQueryInput): Promise<{
    reviewPeriod: string;
    ratingBands: {
        rating: number;
        incrementPercent: number;
    }[];
    items: {
        employeeId: string;
        employeeName: string;
        employeeCode: string;
        department: string | null;
        reviewId: string | null;
        reviewKind: string | null;
        rating: number | null;
        suggestedIncrementPercent: number;
        recommendedIncrementPercent: number;
        hasSalaryStructure: boolean;
        currentGross: number;
        projectedGross: number;
        currentSalary: SalaryAmounts;
    }[];
}>;
export declare function applyPerformanceIncrements(auth: AuthContext, input: ApplyIncrementsInput): Promise<{
    message: string;
    reviewPeriod: string;
    effectiveFrom: string;
    appliedCount: number;
}>;
