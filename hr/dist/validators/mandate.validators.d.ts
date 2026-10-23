import { z } from "zod";
export declare const createMandateSchema: z.ZodObject<{
    clientId: z.ZodString;
    agreementId: z.ZodString;
    position: z.ZodString;
    department: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    employmentType: z.ZodOptional<z.ZodEnum<{
        full_time: "full_time";
        part_time: "part_time";
        contract: "contract";
        intern: "intern";
    }>>;
    vacancies: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    location: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    workMode: z.ZodOptional<z.ZodEnum<{
        ONSITE: "ONSITE";
        HYBRID: "HYBRID";
        REMOTE: "REMOTE";
    }>>;
    reportingTo: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    experience: z.ZodOptional<z.ZodObject<{
        minimum: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        maximum: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>>;
    salary: z.ZodOptional<z.ZodObject<{
        minimum: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        maximum: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        currency: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        fixedPercent: z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        variablePercent: z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    }, z.core.$strip>>;
    qualifications: z.ZodOptional<z.ZodArray<z.ZodString>>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mustHaveSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    preferredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    responsibilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
    criticalRequirements: z.ZodOptional<z.ZodArray<z.ZodString>>;
    interviewProcess: z.ZodOptional<z.ZodArray<z.ZodString>>;
    industryPreference: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    teamSize: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    acceptedNoticePeriod: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    travelRequirement: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    workingDaysHours: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    targetJoiningDate: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>;
    paymentTermsDays: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    exclusivity: z.ZodOptional<z.ZodBoolean>;
    specialInstructions: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    assignedRecruiters: z.ZodOptional<z.ZodArray<z.ZodString>>;
    recruitmentFee: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    feeType: z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENTAGE: "PERCENTAGE";
    }>>;
    replacementPeriodDays: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    priority: z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        APPROVED: "APPROVED";
        CLOSED: "CLOSED";
        DRAFT: "DRAFT";
        CANCELLED: "CANCELLED";
        OPEN: "OPEN";
        ON_HOLD: "ON_HOLD";
        FILLED: "FILLED";
    }>>;
    isPublic: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateMandateSchema: z.ZodObject<{
    clientId: z.ZodOptional<z.ZodString>;
    agreementId: z.ZodOptional<z.ZodString>;
    position: z.ZodOptional<z.ZodString>;
    department: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    employmentType: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        full_time: "full_time";
        part_time: "part_time";
        contract: "contract";
        intern: "intern";
    }>>>;
    vacancies: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    location: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    workMode: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        ONSITE: "ONSITE";
        HYBRID: "HYBRID";
        REMOTE: "REMOTE";
    }>>>;
    reportingTo: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    experience: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        minimum: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        maximum: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>>>;
    salary: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        minimum: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        maximum: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        currency: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        fixedPercent: z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        variablePercent: z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    }, z.core.$strip>>>;
    qualifications: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    skills: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    mustHaveSkills: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    preferredSkills: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    responsibilities: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    criticalRequirements: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    interviewProcess: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    industryPreference: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    teamSize: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    acceptedNoticePeriod: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    travelRequirement: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    workingDaysHours: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    targetJoiningDate: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>, z.ZodTransform<string | undefined, string | undefined>>>;
    paymentTermsDays: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    exclusivity: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    specialInstructions: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    assignedRecruiters: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    recruitmentFee: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    feeType: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENTAGE: "PERCENTAGE";
    }>>>;
    replacementPeriodDays: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    priority: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        APPROVED: "APPROVED";
        CLOSED: "CLOSED";
        DRAFT: "DRAFT";
        CANCELLED: "CANCELLED";
        OPEN: "OPEN";
        ON_HOLD: "ON_HOLD";
        FILLED: "FILLED";
    }>>>;
    isPublic: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const mandateListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        position: "position";
        priority: "priority";
        status: "status";
        mandateNumber: "mandateNumber";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        APPROVED: "APPROVED";
        CLOSED: "CLOSED";
        DRAFT: "DRAFT";
        CANCELLED: "CANCELLED";
        OPEN: "OPEN";
        ON_HOLD: "ON_HOLD";
        FILLED: "FILLED";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>;
    clientId: z.ZodOptional<z.ZodString>;
    agreementId: z.ZodOptional<z.ZodString>;
    recruiterId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateMandateInput = z.infer<typeof createMandateSchema>;
export type UpdateMandateInput = z.infer<typeof updateMandateSchema>;
export type MandateListQueryInput = z.infer<typeof mandateListQuerySchema>;
