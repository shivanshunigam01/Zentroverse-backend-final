import mongoose from "mongoose";
export declare const EmployeeModel: mongoose.Model<{
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    employeeCode: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    employmentStatus: "active" | "inactive" | "on_leave" | "terminated";
    workLocation: "office" | "remote" | "hybrid";
    emergencyContact: {
        name: string;
        phone: string;
        relationship?: "spouse" | "parent" | "sibling" | "child" | "friend" | "other" | null | undefined;
    };
    dateOfBirth?: NativeDate | null | undefined;
    gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null | undefined;
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    designationId?: mongoose.Types.ObjectId | null | undefined;
    managerId?: mongoose.Types.ObjectId | null | undefined;
    joiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    employeeCode: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    employmentStatus: "active" | "inactive" | "on_leave" | "terminated";
    workLocation: "office" | "remote" | "hybrid";
    emergencyContact: {
        name: string;
        phone: string;
        relationship?: "spouse" | "parent" | "sibling" | "child" | "friend" | "other" | null | undefined;
    };
    dateOfBirth?: NativeDate | null | undefined;
    gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null | undefined;
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    designationId?: mongoose.Types.ObjectId | null | undefined;
    managerId?: mongoose.Types.ObjectId | null | undefined;
    joiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    employeeCode: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    employmentStatus: "active" | "inactive" | "on_leave" | "terminated";
    workLocation: "office" | "remote" | "hybrid";
    emergencyContact: {
        name: string;
        phone: string;
        relationship?: "spouse" | "parent" | "sibling" | "child" | "friend" | "other" | null | undefined;
    };
    dateOfBirth?: NativeDate | null | undefined;
    gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null | undefined;
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    designationId?: mongoose.Types.ObjectId | null | undefined;
    managerId?: mongoose.Types.ObjectId | null | undefined;
    joiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    employeeCode: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    employmentStatus: "active" | "inactive" | "on_leave" | "terminated";
    workLocation: "office" | "remote" | "hybrid";
    emergencyContact: {
        name: string;
        phone: string;
        relationship?: "spouse" | "parent" | "sibling" | "child" | "friend" | "other" | null | undefined;
    };
    dateOfBirth?: NativeDate | null | undefined;
    gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null | undefined;
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    designationId?: mongoose.Types.ObjectId | null | undefined;
    managerId?: mongoose.Types.ObjectId | null | undefined;
    joiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    employeeCode: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    employmentStatus: "active" | "inactive" | "on_leave" | "terminated";
    workLocation: "office" | "remote" | "hybrid";
    emergencyContact: {
        name: string;
        phone: string;
        relationship?: "spouse" | "parent" | "sibling" | "child" | "friend" | "other" | null | undefined;
    };
    dateOfBirth?: NativeDate | null | undefined;
    gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null | undefined;
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    designationId?: mongoose.Types.ObjectId | null | undefined;
    managerId?: mongoose.Types.ObjectId | null | undefined;
    joiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    employeeCode: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    employmentStatus: "active" | "inactive" | "on_leave" | "terminated";
    workLocation: "office" | "remote" | "hybrid";
    emergencyContact: {
        name: string;
        phone: string;
        relationship?: "spouse" | "parent" | "sibling" | "child" | "friend" | "other" | null | undefined;
    };
    dateOfBirth?: NativeDate | null | undefined;
    gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null | undefined;
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    designationId?: mongoose.Types.ObjectId | null | undefined;
    managerId?: mongoose.Types.ObjectId | null | undefined;
    joiningDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    employeeCode: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    employmentStatus: "active" | "inactive" | "on_leave" | "terminated";
    workLocation: "office" | "remote" | "hybrid";
    emergencyContact: {
        name: string;
        phone: string;
        relationship?: "spouse" | "parent" | "sibling" | "child" | "friend" | "other" | null | undefined;
    };
    dateOfBirth?: NativeDate | null | undefined;
    gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null | undefined;
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    designationId?: mongoose.Types.ObjectId | null | undefined;
    managerId?: mongoose.Types.ObjectId | null | undefined;
    joiningDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    phone: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    employeeCode: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    employmentType: "full_time" | "part_time" | "contract" | "intern";
    employmentStatus: "active" | "inactive" | "on_leave" | "terminated";
    workLocation: "office" | "remote" | "hybrid";
    emergencyContact: {
        name: string;
        phone: string;
        relationship?: "spouse" | "parent" | "sibling" | "child" | "friend" | "other" | null | undefined;
    };
    dateOfBirth?: NativeDate | null | undefined;
    gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null | undefined;
    departmentId?: mongoose.Types.ObjectId | null | undefined;
    designationId?: mongoose.Types.ObjectId | null | undefined;
    managerId?: mongoose.Types.ObjectId | null | undefined;
    joiningDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
