export type PlacementCommercialTerms = {
    agreementId: string;
    recruitmentFee: number;
    feeType: string;
    paymentTermsDays: number;
    gstRatePercent: number;
    gstSplitMode: string;
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
};
/**
 * Enforce starter-kit gates before a candidate can be submitted to a client.
 * Draft submissions may skip these; introduced statuses must pass.
 */
export declare function assertSubmissionWorkflowReady(input: {
    organizationId: string;
    candidateId: string;
    mandateId: string;
    clientId: string;
    evaluationId?: string | null;
    requireEvaluation?: boolean;
}): Promise<{
    client: import("mongoose").Document<unknown, {}, {
        city: string;
        state: string;
        country: string;
        organizationId: import("mongoose").Types.ObjectId;
        address: string;
        industry: string;
        status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
        createdBy: import("mongoose").Types.ObjectId;
        companyName: string;
        legalEntityName: string;
        website: string;
        GSTNumber: string;
        PANNumber: string;
        registeredAddress: string;
        contactPersons: import("mongoose").Types.DocumentArray<{
            name: string;
            phone: string;
            email: string;
            designation: string;
        }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
            name: string;
            phone: string;
            email: string;
            designation: string;
        }, {}, {}> & {
            name: string;
            phone: string;
            email: string;
            designation: string;
        }>;
        onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
        KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
        notes: string;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        city: string;
        state: string;
        country: string;
        organizationId: import("mongoose").Types.ObjectId;
        address: string;
        industry: string;
        status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
        createdBy: import("mongoose").Types.ObjectId;
        companyName: string;
        legalEntityName: string;
        website: string;
        GSTNumber: string;
        PANNumber: string;
        registeredAddress: string;
        contactPersons: import("mongoose").Types.DocumentArray<{
            name: string;
            phone: string;
            email: string;
            designation: string;
        }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
            name: string;
            phone: string;
            email: string;
            designation: string;
        }, {}, {}> & {
            name: string;
            phone: string;
            email: string;
            designation: string;
        }>;
        onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
        KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
        notes: string;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>;
    mandate: import("mongoose").Document<unknown, {}, {
        organizationId: import("mongoose").Types.ObjectId;
        employmentType: "full_time" | "part_time" | "contract" | "intern";
        position: string;
        priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
        status: "APPROVED" | "CLOSED" | "DRAFT" | "CANCELLED" | "OPEN" | "ON_HOLD" | "FILLED";
        experience: {
            minimum: number;
            maximum: number;
        };
        clientId: import("mongoose").Types.ObjectId;
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        replacementPeriodDays: number;
        createdBy: import("mongoose").Types.ObjectId;
        mandateNumber: string;
        department: string;
        vacancies: number;
        location: string;
        workMode: "ONSITE" | "HYBRID" | "REMOTE";
        reportingTo: string;
        salary: {
            minimum: number;
            maximum: number;
            currency: string;
            fixedPercent?: number | null | undefined;
            variablePercent?: number | null | undefined;
        };
        qualifications: string[];
        skills: string[];
        mustHaveSkills: string[];
        preferredSkills: string[];
        responsibilities: string[];
        criticalRequirements: string[];
        interviewProcess: string[];
        industryPreference: string;
        teamSize: string;
        acceptedNoticePeriod: string;
        travelRequirement: string;
        workingDaysHours: string;
        exclusivity: boolean;
        specialInstructions: string;
        assignedRecruiters: import("mongoose").Types.ObjectId[];
        isPublic: boolean;
        agreementId?: import("mongoose").Types.ObjectId | null | undefined;
        targetJoiningDate?: NativeDate | null | undefined;
        publishedAt?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        organizationId: import("mongoose").Types.ObjectId;
        employmentType: "full_time" | "part_time" | "contract" | "intern";
        position: string;
        priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
        status: "APPROVED" | "CLOSED" | "DRAFT" | "CANCELLED" | "OPEN" | "ON_HOLD" | "FILLED";
        experience: {
            minimum: number;
            maximum: number;
        };
        clientId: import("mongoose").Types.ObjectId;
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        replacementPeriodDays: number;
        createdBy: import("mongoose").Types.ObjectId;
        mandateNumber: string;
        department: string;
        vacancies: number;
        location: string;
        workMode: "ONSITE" | "HYBRID" | "REMOTE";
        reportingTo: string;
        salary: {
            minimum: number;
            maximum: number;
            currency: string;
            fixedPercent?: number | null | undefined;
            variablePercent?: number | null | undefined;
        };
        qualifications: string[];
        skills: string[];
        mustHaveSkills: string[];
        preferredSkills: string[];
        responsibilities: string[];
        criticalRequirements: string[];
        interviewProcess: string[];
        industryPreference: string;
        teamSize: string;
        acceptedNoticePeriod: string;
        travelRequirement: string;
        workingDaysHours: string;
        exclusivity: boolean;
        specialInstructions: string;
        assignedRecruiters: import("mongoose").Types.ObjectId[];
        isPublic: boolean;
        agreementId?: import("mongoose").Types.ObjectId | null | undefined;
        targetJoiningDate?: NativeDate | null | undefined;
        publishedAt?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>;
    agreement: import("mongoose").Document<unknown, {}, {
        organizationId: import("mongoose").Types.ObjectId;
        status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
        clientId: import("mongoose").Types.ObjectId;
        agreementNumber: string;
        effectiveDate: NativeDate;
        commercialTerms: {
            recruitmentFee: number;
            feeType: "FIXED" | "PERCENTAGE";
            paymentTermsDays: number;
            gstRatePercent: number;
            gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
        };
        ownershipPeriodMonths: number;
        duplicateNotificationDays: number;
        replacementPeriodDays: number;
        createdBy: import("mongoose").Types.ObjectId;
        expiryDate?: NativeDate | null | undefined;
        signedDate?: NativeDate | null | undefined;
        signedDocument?: {
            fileUrl: string;
            fileName: string;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        organizationId: import("mongoose").Types.ObjectId;
        status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
        clientId: import("mongoose").Types.ObjectId;
        agreementNumber: string;
        effectiveDate: NativeDate;
        commercialTerms: {
            recruitmentFee: number;
            feeType: "FIXED" | "PERCENTAGE";
            paymentTermsDays: number;
            gstRatePercent: number;
            gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
        };
        ownershipPeriodMonths: number;
        duplicateNotificationDays: number;
        replacementPeriodDays: number;
        createdBy: import("mongoose").Types.ObjectId;
        expiryDate?: NativeDate | null | undefined;
        signedDate?: NativeDate | null | undefined;
        signedDocument?: {
            fileUrl: string;
            fileName: string;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>;
    consent: import("mongoose").Document<unknown, {}, {
        organizationId: import("mongoose").Types.ObjectId;
        candidateId: import("mongoose").Types.ObjectId;
        mandateId: import("mongoose").Types.ObjectId;
        createdBy: import("mongoose").Types.ObjectId;
        consentGiven: boolean;
        consentMethod: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        consentPurpose: "OTHER" | "SOURCING" | "SUBMISSION" | "INTERVIEW" | "BACKGROUND_CHECK" | "TALENT_POOL";
        expiryDate?: NativeDate | null | undefined;
        consentDate?: NativeDate | null | undefined;
        consentDocument?: {
            fileUrl: string;
            fileName: string;
        } | null | undefined;
        withdrawnAt?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        organizationId: import("mongoose").Types.ObjectId;
        candidateId: import("mongoose").Types.ObjectId;
        mandateId: import("mongoose").Types.ObjectId;
        createdBy: import("mongoose").Types.ObjectId;
        consentGiven: boolean;
        consentMethod: "" | "OTHER" | "FORM" | "EMAIL" | "WHATSAPP" | "VERBAL";
        consentPurpose: "OTHER" | "SOURCING" | "SUBMISSION" | "INTERVIEW" | "BACKGROUND_CHECK" | "TALENT_POOL";
        expiryDate?: NativeDate | null | undefined;
        consentDate?: NativeDate | null | undefined;
        consentDocument?: {
            fileUrl: string;
            fileName: string;
        } | null | undefined;
        withdrawnAt?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>;
    evaluation: (import("mongoose").Document<unknown, {}, {
        organizationId: import("mongoose").Types.ObjectId;
        strengths: string[];
        candidateId: import("mongoose").Types.ObjectId;
        mandateId: import("mongoose").Types.ObjectId;
        remarks: string;
        recruiterId: import("mongoose").Types.ObjectId;
        scoringVersion: "LEGACY_6" | "POINT_100";
        scores: {
            roleFit: number;
            experienceFit: number;
            communication: number;
            industryExperience: number;
            compensationFit: number;
            joiningProbability: number;
        };
        scorecard: {
            communication: number;
            joiningProbability: number;
            roleKnowledge: number;
            relevantExperience: number;
            achievementEvidence: number;
            stability: number;
            locationFit: number;
            ctcFit: number;
        };
        totalScore: number;
        recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
        concerns: string[];
        evaluatedAt: NativeDate;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        organizationId: import("mongoose").Types.ObjectId;
        strengths: string[];
        candidateId: import("mongoose").Types.ObjectId;
        mandateId: import("mongoose").Types.ObjectId;
        remarks: string;
        recruiterId: import("mongoose").Types.ObjectId;
        scoringVersion: "LEGACY_6" | "POINT_100";
        scores: {
            roleFit: number;
            experienceFit: number;
            communication: number;
            industryExperience: number;
            compensationFit: number;
            joiningProbability: number;
        };
        scorecard: {
            communication: number;
            joiningProbability: number;
            roleKnowledge: number;
            relevantExperience: number;
            achievementEvidence: number;
            stability: number;
            locationFit: number;
            ctcFit: number;
        };
        totalScore: number;
        recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
        concerns: string[];
        evaluatedAt: NativeDate;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>) | null;
    commercial: PlacementCommercialTerms;
}>;
