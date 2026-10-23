import mongoose from "mongoose";
export declare const JoiningModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    offerId: mongoose.Types.ObjectId;
    confirmedBy?: mongoose.Types.ObjectId | null | undefined;
    confirmationDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    offerId: mongoose.Types.ObjectId;
    confirmedBy?: mongoose.Types.ObjectId | null | undefined;
    confirmationDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    offerId: mongoose.Types.ObjectId;
    confirmedBy?: mongoose.Types.ObjectId | null | undefined;
    confirmationDate?: NativeDate | null | undefined;
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
    joiningDate: NativeDate;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    offerId: mongoose.Types.ObjectId;
    confirmedBy?: mongoose.Types.ObjectId | null | undefined;
    confirmationDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    offerId: mongoose.Types.ObjectId;
    confirmedBy?: mongoose.Types.ObjectId | null | undefined;
    confirmationDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    offerId: mongoose.Types.ObjectId;
    confirmedBy?: mongoose.Types.ObjectId | null | undefined;
    confirmationDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    offerId: mongoose.Types.ObjectId;
    confirmedBy?: mongoose.Types.ObjectId | null | undefined;
    confirmationDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    status: "JOINED" | "WITHDRAWN" | "EXPECTED" | "CONFIRMED" | "NO_SHOW";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    offerId: mongoose.Types.ObjectId;
    confirmedBy?: mongoose.Types.ObjectId | null | undefined;
    confirmationDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
