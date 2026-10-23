import { EMPLOYMENT_TYPES } from "../constants/employees.js";
type MandateLike = {
    _id: unknown;
    organizationId: unknown;
    mandateNumber?: string;
    position: string;
    department?: string;
    employmentType: (typeof EMPLOYMENT_TYPES)[number];
    vacancies?: number;
    location?: string;
    workMode?: string;
    reportingTo?: string;
    experience?: {
        minimum?: number;
        maximum?: number;
    } | null;
    salary?: {
        minimum?: number;
        maximum?: number;
        currency?: string;
    } | null;
    qualifications?: string[];
    skills?: string[];
    responsibilities?: string[];
    criticalRequirements?: string[];
    interviewProcess?: string[];
    status: string;
};
export declare function jobStatusForMandate(status: string): "closed" | "open" | "paused";
export declare function descriptionFromMandate(mandate: MandateLike): string;
export declare function syncJobForMandate(mandate: MandateLike): Promise<(import("mongoose").Document<unknown, {}, {
    organizationId: import("mongoose").Types.ObjectId;
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    description: string;
    title: string;
    status: "closed" | "open" | "paused";
    vacancies: number;
    location: string;
    workMode: string;
    skills: string[];
    departmentName: string;
    experienceMinimum: number;
    experienceMaximum: number;
    departmentId?: import("mongoose").Types.ObjectId | null | undefined;
    mandateId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: import("mongoose").Types.ObjectId;
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    description: string;
    title: string;
    status: "closed" | "open" | "paused";
    vacancies: number;
    location: string;
    workMode: string;
    skills: string[];
    departmentName: string;
    experienceMinimum: number;
    experienceMaximum: number;
    departmentId?: import("mongoose").Types.ObjectId | null | undefined;
    mandateId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
export declare function closeJobForMandate(organizationId: string, mandateId: string): Promise<void>;
export declare function findJobsByMandateIds(organizationId: string, mandateIds: unknown[]): Promise<Map<string, {
    id: string;
    status: string;
}>>;
export {};
