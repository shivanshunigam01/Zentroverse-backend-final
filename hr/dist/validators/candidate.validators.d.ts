import { z } from "zod";
export declare const createCandidateProfileSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    phone: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    resumeUrl: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    currentCompany: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    currentDesignation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    totalExperience: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    relevantExperience: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    currentCTC: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    expectedCTC: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    noticePeriod: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    currentLocation: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    preferredLocations: z.ZodOptional<z.ZodArray<z.ZodString>>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    qualifications: z.ZodOptional<z.ZodArray<z.ZodString>>;
    source: z.ZodOptional<z.ZodEnum<{
        OTHER: "OTHER";
        LINKEDIN: "LINKEDIN";
        NAUKRI: "NAUKRI";
        REFERRAL: "REFERRAL";
        WEBSITE: "WEBSITE";
        DIRECT: "DIRECT";
        CONSULTANT: "CONSULTANT";
    }>>;
    consent: z.ZodOptional<z.ZodObject<{
        given: z.ZodOptional<z.ZodBoolean>;
        date: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        method: z.ZodOptional<z.ZodEnum<{
            OTHER: "OTHER";
            FORM: "FORM";
            EMAIL: "EMAIL";
            WHATSAPP: "WHATSAPP";
            VERBAL: "VERBAL";
        }>>;
    }, z.core.$strip>>;
    status: z.ZodOptional<z.ZodEnum<{
        SUBMITTED: "SUBMITTED";
        REJECTED: "REJECTED";
        ACTIVE: "ACTIVE";
        ON_HOLD: "ON_HOLD";
        NEW: "NEW";
        SCREENING: "SCREENING";
        INTERVIEWING: "INTERVIEWING";
        OFFERED: "OFFERED";
        HIRED: "HIRED";
    }>>;
}, z.core.$strip>;
export declare const updateCandidateProfileSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    phone: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    resumeUrl: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    currentCompany: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    currentDesignation: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    totalExperience: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    relevantExperience: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    currentCTC: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    expectedCTC: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    noticePeriod: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    currentLocation: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>>;
    preferredLocations: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    skills: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    qualifications: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    source: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        OTHER: "OTHER";
        LINKEDIN: "LINKEDIN";
        NAUKRI: "NAUKRI";
        REFERRAL: "REFERRAL";
        WEBSITE: "WEBSITE";
        DIRECT: "DIRECT";
        CONSULTANT: "CONSULTANT";
    }>>>;
    consent: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        given: z.ZodOptional<z.ZodBoolean>;
        date: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        method: z.ZodOptional<z.ZodEnum<{
            OTHER: "OTHER";
            FORM: "FORM";
            EMAIL: "EMAIL";
            WHATSAPP: "WHATSAPP";
            VERBAL: "VERBAL";
        }>>;
    }, z.core.$strip>>>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        SUBMITTED: "SUBMITTED";
        REJECTED: "REJECTED";
        ACTIVE: "ACTIVE";
        ON_HOLD: "ON_HOLD";
        NEW: "NEW";
        SCREENING: "SCREENING";
        INTERVIEWING: "INTERVIEWING";
        OFFERED: "OFFERED";
        HIRED: "HIRED";
    }>>>;
}, z.core.$strip>;
export declare const candidateProfileListQuerySchema: z.ZodObject<{
    search: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    q: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    sort: z.ZodOptional<z.ZodEnum<{
        firstName: "firstName";
        lastName: "lastName";
        createdAt: "createdAt";
        status: "status";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    email: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    status: z.ZodOptional<z.ZodEnum<{
        SUBMITTED: "SUBMITTED";
        REJECTED: "REJECTED";
        ACTIVE: "ACTIVE";
        ON_HOLD: "ON_HOLD";
        NEW: "NEW";
        SCREENING: "SCREENING";
        INTERVIEWING: "INTERVIEWING";
        OFFERED: "OFFERED";
        HIRED: "HIRED";
    }>>;
    source: z.ZodOptional<z.ZodEnum<{
        OTHER: "OTHER";
        LINKEDIN: "LINKEDIN";
        NAUKRI: "NAUKRI";
        REFERRAL: "REFERRAL";
        WEBSITE: "WEBSITE";
        DIRECT: "DIRECT";
        CONSULTANT: "CONSULTANT";
    }>>;
    skills: z.ZodPreprocess<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export type CreateCandidateProfileInput = z.infer<typeof createCandidateProfileSchema>;
export type UpdateCandidateProfileInput = z.infer<typeof updateCandidateProfileSchema>;
export type CandidateProfileListQueryInput = z.infer<typeof candidateProfileListQuerySchema>;
