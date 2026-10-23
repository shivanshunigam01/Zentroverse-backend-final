import mongoose from "mongoose";
export declare const OrganizationModel: mongoose.Model<{
    name: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    slug: string;
    logo: string;
    industry: string;
    email: string;
    timezone: string;
    workingDays: ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday")[];
    workingHours: {
        end: string;
        start: string;
    };
    settings: {
        dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
        weekStartsOn: "monday" | "sunday";
    };
    companySize?: "1-10" | "11-50" | "51-200" | "201-500" | "500+" | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    slug: string;
    logo: string;
    industry: string;
    email: string;
    timezone: string;
    workingDays: ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday")[];
    workingHours: {
        end: string;
        start: string;
    };
    settings: {
        dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
        weekStartsOn: "monday" | "sunday";
    };
    companySize?: "1-10" | "11-50" | "51-200" | "201-500" | "500+" | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    slug: string;
    logo: string;
    industry: string;
    email: string;
    timezone: string;
    workingDays: ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday")[];
    workingHours: {
        end: string;
        start: string;
    };
    settings: {
        dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
        weekStartsOn: "monday" | "sunday";
    };
    companySize?: "1-10" | "11-50" | "51-200" | "201-500" | "500+" | null | undefined;
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
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    slug: string;
    logo: string;
    industry: string;
    email: string;
    timezone: string;
    workingDays: ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday")[];
    workingHours: {
        end: string;
        start: string;
    };
    settings: {
        dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
        weekStartsOn: "monday" | "sunday";
    };
    companySize?: "1-10" | "11-50" | "51-200" | "201-500" | "500+" | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    slug: string;
    logo: string;
    industry: string;
    email: string;
    timezone: string;
    workingDays: ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday")[];
    workingHours: {
        end: string;
        start: string;
    };
    settings: {
        dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
        weekStartsOn: "monday" | "sunday";
    };
    companySize?: "1-10" | "11-50" | "51-200" | "201-500" | "500+" | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    slug: string;
    logo: string;
    industry: string;
    email: string;
    timezone: string;
    workingDays: ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday")[];
    workingHours: {
        end: string;
        start: string;
    };
    settings: {
        dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
        weekStartsOn: "monday" | "sunday";
    };
    companySize?: "1-10" | "11-50" | "51-200" | "201-500" | "500+" | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    name: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    slug: string;
    logo: string;
    industry: string;
    email: string;
    timezone: string;
    workingDays: ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday")[];
    workingHours: {
        end: string;
        start: string;
    };
    settings: {
        dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
        weekStartsOn: "monday" | "sunday";
    };
    companySize?: "1-10" | "11-50" | "51-200" | "201-500" | "500+" | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    slug: string;
    logo: string;
    industry: string;
    email: string;
    timezone: string;
    workingDays: ("monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday")[];
    workingHours: {
        end: string;
        start: string;
    };
    settings: {
        dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
        weekStartsOn: "monday" | "sunday";
    };
    companySize?: "1-10" | "11-50" | "51-200" | "201-500" | "500+" | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
