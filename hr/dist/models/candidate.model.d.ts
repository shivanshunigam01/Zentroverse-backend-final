import mongoose from "mongoose";
export declare const CandidateModel: mongoose.Model<{
    name: string;
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    resume: string;
    source: "OTHER" | "LINKEDIN" | "NAUKRI" | "REFERRAL" | "WEBSITE" | "DIRECT" | "CONSULTANT";
    email: string;
    status: "SUBMITTED" | "REJECTED" | "ACTIVE" | "ON_HOLD" | "NEW" | "SCREENING" | "INTERVIEWING" | "OFFERED" | "HIRED";
    experience: number;
    currentCompany: string;
    currentDesignation: string;
    currentLocation: string;
    totalExperience: number;
    currentCTC: number;
    expectedCTC: number;
    noticePeriod: string;
    qualifications: string[];
    skills: string[];
    relevantExperience: number;
    candidateNumber: string;
    resumeUrl: string;
    resumeFileName: string;
    resumePublicId: string;
    preferredLocations: string[];
    linkedInUrl: string;
    consent: {
        method: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        given: boolean;
        date?: NativeDate | null | undefined;
    };
    createdBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    resume: string;
    source: "OTHER" | "LINKEDIN" | "NAUKRI" | "REFERRAL" | "WEBSITE" | "DIRECT" | "CONSULTANT";
    email: string;
    status: "SUBMITTED" | "REJECTED" | "ACTIVE" | "ON_HOLD" | "NEW" | "SCREENING" | "INTERVIEWING" | "OFFERED" | "HIRED";
    experience: number;
    currentCompany: string;
    currentDesignation: string;
    currentLocation: string;
    totalExperience: number;
    currentCTC: number;
    expectedCTC: number;
    noticePeriod: string;
    qualifications: string[];
    skills: string[];
    relevantExperience: number;
    candidateNumber: string;
    resumeUrl: string;
    resumeFileName: string;
    resumePublicId: string;
    preferredLocations: string[];
    linkedInUrl: string;
    consent: {
        method: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        given: boolean;
        date?: NativeDate | null | undefined;
    };
    createdBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    resume: string;
    source: "OTHER" | "LINKEDIN" | "NAUKRI" | "REFERRAL" | "WEBSITE" | "DIRECT" | "CONSULTANT";
    email: string;
    status: "SUBMITTED" | "REJECTED" | "ACTIVE" | "ON_HOLD" | "NEW" | "SCREENING" | "INTERVIEWING" | "OFFERED" | "HIRED";
    experience: number;
    currentCompany: string;
    currentDesignation: string;
    currentLocation: string;
    totalExperience: number;
    currentCTC: number;
    expectedCTC: number;
    noticePeriod: string;
    qualifications: string[];
    skills: string[];
    relevantExperience: number;
    candidateNumber: string;
    resumeUrl: string;
    resumeFileName: string;
    resumePublicId: string;
    preferredLocations: string[];
    linkedInUrl: string;
    consent: {
        method: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        given: boolean;
        date?: NativeDate | null | undefined;
    };
    createdBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    resume: string;
    source: "OTHER" | "LINKEDIN" | "NAUKRI" | "REFERRAL" | "WEBSITE" | "DIRECT" | "CONSULTANT";
    email: string;
    status: "SUBMITTED" | "REJECTED" | "ACTIVE" | "ON_HOLD" | "NEW" | "SCREENING" | "INTERVIEWING" | "OFFERED" | "HIRED";
    experience: number;
    currentCompany: string;
    currentDesignation: string;
    currentLocation: string;
    totalExperience: number;
    currentCTC: number;
    expectedCTC: number;
    noticePeriod: string;
    qualifications: string[];
    skills: string[];
    relevantExperience: number;
    candidateNumber: string;
    resumeUrl: string;
    resumeFileName: string;
    resumePublicId: string;
    preferredLocations: string[];
    linkedInUrl: string;
    consent: {
        method: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        given: boolean;
        date?: NativeDate | null | undefined;
    };
    createdBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    resume: string;
    source: "OTHER" | "LINKEDIN" | "NAUKRI" | "REFERRAL" | "WEBSITE" | "DIRECT" | "CONSULTANT";
    email: string;
    status: "SUBMITTED" | "REJECTED" | "ACTIVE" | "ON_HOLD" | "NEW" | "SCREENING" | "INTERVIEWING" | "OFFERED" | "HIRED";
    experience: number;
    currentCompany: string;
    currentDesignation: string;
    currentLocation: string;
    totalExperience: number;
    currentCTC: number;
    expectedCTC: number;
    noticePeriod: string;
    qualifications: string[];
    skills: string[];
    relevantExperience: number;
    candidateNumber: string;
    resumeUrl: string;
    resumeFileName: string;
    resumePublicId: string;
    preferredLocations: string[];
    linkedInUrl: string;
    consent: {
        method: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        given: boolean;
        date?: NativeDate | null | undefined;
    };
    createdBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    resume: string;
    source: "OTHER" | "LINKEDIN" | "NAUKRI" | "REFERRAL" | "WEBSITE" | "DIRECT" | "CONSULTANT";
    email: string;
    status: "SUBMITTED" | "REJECTED" | "ACTIVE" | "ON_HOLD" | "NEW" | "SCREENING" | "INTERVIEWING" | "OFFERED" | "HIRED";
    experience: number;
    currentCompany: string;
    currentDesignation: string;
    currentLocation: string;
    totalExperience: number;
    currentCTC: number;
    expectedCTC: number;
    noticePeriod: string;
    qualifications: string[];
    skills: string[];
    relevantExperience: number;
    candidateNumber: string;
    resumeUrl: string;
    resumeFileName: string;
    resumePublicId: string;
    preferredLocations: string[];
    linkedInUrl: string;
    consent: {
        method: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        given: boolean;
        date?: NativeDate | null | undefined;
    };
    createdBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    name: string;
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    resume: string;
    source: "OTHER" | "LINKEDIN" | "NAUKRI" | "REFERRAL" | "WEBSITE" | "DIRECT" | "CONSULTANT";
    email: string;
    status: "SUBMITTED" | "REJECTED" | "ACTIVE" | "ON_HOLD" | "NEW" | "SCREENING" | "INTERVIEWING" | "OFFERED" | "HIRED";
    experience: number;
    currentCompany: string;
    currentDesignation: string;
    currentLocation: string;
    totalExperience: number;
    currentCTC: number;
    expectedCTC: number;
    noticePeriod: string;
    qualifications: string[];
    skills: string[];
    relevantExperience: number;
    candidateNumber: string;
    resumeUrl: string;
    resumeFileName: string;
    resumePublicId: string;
    preferredLocations: string[];
    linkedInUrl: string;
    consent: {
        method: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        given: boolean;
        date?: NativeDate | null | undefined;
    };
    createdBy?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    resume: string;
    source: "OTHER" | "LINKEDIN" | "NAUKRI" | "REFERRAL" | "WEBSITE" | "DIRECT" | "CONSULTANT";
    email: string;
    status: "SUBMITTED" | "REJECTED" | "ACTIVE" | "ON_HOLD" | "NEW" | "SCREENING" | "INTERVIEWING" | "OFFERED" | "HIRED";
    experience: number;
    currentCompany: string;
    currentDesignation: string;
    currentLocation: string;
    totalExperience: number;
    currentCTC: number;
    expectedCTC: number;
    noticePeriod: string;
    qualifications: string[];
    skills: string[];
    relevantExperience: number;
    candidateNumber: string;
    resumeUrl: string;
    resumeFileName: string;
    resumePublicId: string;
    preferredLocations: string[];
    linkedInUrl: string;
    consent: {
        method: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        given: boolean;
        date?: NativeDate | null | undefined;
    };
    createdBy?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
