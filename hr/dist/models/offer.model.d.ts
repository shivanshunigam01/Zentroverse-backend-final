import mongoose from "mongoose";
export declare const OfferModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    submissionId: mongoose.Types.ObjectId;
    offeredDesignation: string;
    offeredCTC: number;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    selectedDate?: NativeDate | null | undefined;
    offerDate?: NativeDate | null | undefined;
    expectedJoiningDate?: NativeDate | null | undefined;
    actualJoiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    submissionId: mongoose.Types.ObjectId;
    offeredDesignation: string;
    offeredCTC: number;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    selectedDate?: NativeDate | null | undefined;
    offerDate?: NativeDate | null | undefined;
    expectedJoiningDate?: NativeDate | null | undefined;
    actualJoiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    submissionId: mongoose.Types.ObjectId;
    offeredDesignation: string;
    offeredCTC: number;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    selectedDate?: NativeDate | null | undefined;
    offerDate?: NativeDate | null | undefined;
    expectedJoiningDate?: NativeDate | null | undefined;
    actualJoiningDate?: NativeDate | null | undefined;
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
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    submissionId: mongoose.Types.ObjectId;
    offeredDesignation: string;
    offeredCTC: number;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    selectedDate?: NativeDate | null | undefined;
    offerDate?: NativeDate | null | undefined;
    expectedJoiningDate?: NativeDate | null | undefined;
    actualJoiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    submissionId: mongoose.Types.ObjectId;
    offeredDesignation: string;
    offeredCTC: number;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    selectedDate?: NativeDate | null | undefined;
    offerDate?: NativeDate | null | undefined;
    expectedJoiningDate?: NativeDate | null | undefined;
    actualJoiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    submissionId: mongoose.Types.ObjectId;
    offeredDesignation: string;
    offeredCTC: number;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    selectedDate?: NativeDate | null | undefined;
    offerDate?: NativeDate | null | undefined;
    expectedJoiningDate?: NativeDate | null | undefined;
    actualJoiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    submissionId: mongoose.Types.ObjectId;
    offeredDesignation: string;
    offeredCTC: number;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    selectedDate?: NativeDate | null | undefined;
    offerDate?: NativeDate | null | undefined;
    expectedJoiningDate?: NativeDate | null | undefined;
    actualJoiningDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    submissionId: mongoose.Types.ObjectId;
    offeredDesignation: string;
    offeredCTC: number;
    offerStatus: "ACCEPTED" | "REJECTED" | "DRAFT" | "WITHDRAWN" | "EXPIRED" | "SENT";
    joiningStatus: "JOINED" | "PENDING" | "WITHDRAWN" | "NO_SHOW";
    selectedDate?: NativeDate | null | undefined;
    offerDate?: NativeDate | null | undefined;
    expectedJoiningDate?: NativeDate | null | undefined;
    actualJoiningDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
