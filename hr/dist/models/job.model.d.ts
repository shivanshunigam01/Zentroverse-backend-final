import mongoose from "mongoose";
export declare const JobModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
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
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    mandateId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
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
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    mandateId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
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
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    mandateId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    organizationId: mongoose.Types.ObjectId;
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
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    mandateId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
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
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    mandateId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
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
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    mandateId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
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
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    mandateId?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
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
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    mandateId?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
