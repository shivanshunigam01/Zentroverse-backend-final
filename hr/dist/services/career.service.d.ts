import type { CareersListQueryInput, PublicApplyInput } from "../validators/career.validators.js";
export declare function toCareerJob(doc: Record<string, unknown>): {
    id: string;
    title: string;
    department: string;
    location: string;
    employmentType: string;
    description: string;
    workMode: string;
    skills: string[];
    experienceMinimum: number;
    experienceMaximum: number;
    vacancies: number;
    postedAt: string;
};
export declare function listCareerJobs(orgSlug: string, query: CareersListQueryInput): Promise<{
    organization: {
        name: string;
        slug: string;
        logo: string;
        industry: string;
    };
    jobs: {
        id: string;
        title: string;
        department: string;
        location: string;
        employmentType: string;
        description: string;
        workMode: string;
        skills: string[];
        experienceMinimum: number;
        experienceMaximum: number;
        vacancies: number;
        postedAt: string;
    }[];
}>;
export declare function getCareerJob(orgSlug: string, jobId: string): Promise<{
    organization: {
        name: string;
        slug: string;
        logo: string;
        industry: string;
    };
    job: {
        id: string;
        title: string;
        department: string;
        location: string;
        employmentType: string;
        description: string;
        workMode: string;
        skills: string[];
        experienceMinimum: number;
        experienceMaximum: number;
        vacancies: number;
        postedAt: string;
    };
}>;
export declare function applyToCareerJob(orgSlug: string, jobId: string, input: PublicApplyInput): Promise<{
    applied: boolean;
}>;
