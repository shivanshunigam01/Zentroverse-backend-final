import type { PublicCareerApplyInput, PublicCareerListQueryInput } from "../validators/public-career.validators.js";
export declare function toPublicCareerJob(doc: Record<string, unknown>): {
    id: string;
    position: string;
    department: string;
    companyName: string;
    location: string;
    workMode: "ONSITE" | "HYBRID" | "REMOTE";
    workModeLabel: string;
    employmentType: string;
    vacancies: number;
    experience: {
        minimum: number;
        maximum: number;
    };
    salary: {
        currency: string;
        minimum: number;
        maximum: number;
    };
    skills: string[];
    qualifications: string[];
    responsibilities: string[];
    criticalRequirements: string[];
    interviewProcess: string[];
    postedAt: string;
    postedLabel: string;
};
export declare function toPublicCareerFromJob(doc: Record<string, unknown>, companyName: string): {
    id: string;
    position: string;
    department: string;
    companyName: string;
    location: string;
    workMode: "ONSITE" | "HYBRID" | "REMOTE";
    workModeLabel: string;
    employmentType: string;
    vacancies: number;
    experience: {
        minimum: number;
        maximum: number;
    };
    salary: {
        minimum: number;
        maximum: number;
        currency: string;
    };
    skills: string[];
    qualifications: string[];
    responsibilities: string[];
    criticalRequirements: string[];
    interviewProcess: string[];
    postedAt: string;
    postedLabel: string;
};
export declare function listPublicCareers(query: PublicCareerListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        position: string;
        department: string;
        companyName: string;
        location: string;
        workMode: "ONSITE" | "HYBRID" | "REMOTE";
        workModeLabel: string;
        employmentType: string;
        vacancies: number;
        experience: {
            minimum: number;
            maximum: number;
        };
        salary: {
            currency: string;
            minimum: number;
            maximum: number;
        };
        skills: string[];
        qualifications: string[];
        responsibilities: string[];
        criticalRequirements: string[];
        interviewProcess: string[];
        postedAt: string;
        postedLabel: string;
    }[];
}>;
export declare function getPublicCareer(listingId: string): Promise<{
    job: {
        id: string;
        position: string;
        department: string;
        companyName: string;
        location: string;
        workMode: "ONSITE" | "HYBRID" | "REMOTE";
        workModeLabel: string;
        employmentType: string;
        vacancies: number;
        experience: {
            minimum: number;
            maximum: number;
        };
        salary: {
            minimum: number;
            maximum: number;
            currency: string;
        };
        skills: string[];
        qualifications: string[];
        responsibilities: string[];
        criticalRequirements: string[];
        interviewProcess: string[];
        postedAt: string;
        postedLabel: string;
    };
}>;
export declare function applyToPublicCareer(listingId: string, input: PublicCareerApplyInput, file?: Express.Multer.File): Promise<{
    applicationId: string;
    applicationNumber: string;
    aiInterview: {
        interviewLink: string;
        expiresAt: string;
    } | null;
}>;
