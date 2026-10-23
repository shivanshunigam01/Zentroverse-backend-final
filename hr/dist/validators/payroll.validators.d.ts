import { z } from "zod";
export declare const salaryAmountsSchema: z.ZodObject<{
    basicSalary: z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>;
    hra: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>>;
    allowances: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>>;
    bonus: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>>;
    deductions: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>>;
}, z.core.$strip>;
export declare const createSalaryStructureSchema: z.ZodObject<{
    basicSalary: z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>;
    hra: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>>;
    allowances: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>>;
    bonus: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>>;
    deductions: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>>;
    employeeId: z.ZodString;
    effectiveFrom: z.ZodString;
}, z.core.$strip>;
export declare const updateSalaryStructureSchema: z.ZodObject<{
    basicSalary: z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>;
    hra: z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>;
    allowances: z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>;
    bonus: z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>;
    deductions: z.ZodOptional<z.ZodPipe<z.ZodCoercedNumber<unknown>, z.ZodTransform<number, number>>>;
    effectiveFrom: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const payrollListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        year: "year";
        status: "status";
        month: "month";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    employeeId: z.ZodOptional<z.ZodString>;
    month: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    year: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        generated: "generated";
        paid: "paid";
    }>>;
}, z.core.$strip>;
export declare const structureListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        effectiveFrom: "effectiveFrom";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    employeeId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const payrollPreviewQuerySchema: z.ZodObject<{
    employeeId: z.ZodString;
    month: z.ZodCoercedNumber<unknown>;
    year: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const generatePayrollSchema: z.ZodObject<{
    month: z.ZodCoercedNumber<unknown>;
    year: z.ZodCoercedNumber<unknown>;
    employeeIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type CreateSalaryStructureInput = z.infer<typeof createSalaryStructureSchema>;
export type UpdateSalaryStructureInput = z.infer<typeof updateSalaryStructureSchema>;
export type PayrollListQueryInput = z.infer<typeof payrollListQuerySchema>;
export type StructureListQueryInput = z.infer<typeof structureListQuerySchema>;
export type PayrollPreviewQueryInput = z.infer<typeof payrollPreviewQuerySchema>;
export type GeneratePayrollInput = z.infer<typeof generatePayrollSchema>;
