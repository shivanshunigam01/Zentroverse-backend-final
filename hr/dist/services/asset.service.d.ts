import type { AuthContext } from "../types/auth.js";
import type { AssetListQueryInput, AssignAssetInput, CreateAssetInput, ReturnAssetInput, UpdateAssetInput } from "../validators/asset.validators.js";
export declare function listAssets(auth: AuthContext, query: AssetListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        name: string;
        assetCode: string;
        category: string;
        serialNumber: string;
        purchaseDate: string | null;
        purchaseLabel: string | null;
        condition: string;
        status: string;
        currentAssignment: {
            id: string;
            assetId: string;
            employeeId: string;
            employee: {
                id: string;
                name: string;
                initials: string;
                profileImage: string;
                employeeCode: string;
                department: string | null;
            } | null;
            assignedDate: string;
            assignedLabel: string;
            returnedDate: string | null;
            returnedLabel: string | null;
            assignedBy: {
                id: string;
                name: string;
            } | null;
            status: string;
            notes: string;
        } | null;
        createdAt: string;
        updatedAt: string;
    }[];
    summary: {
        total: number;
        available: number;
        assigned: number;
        maintenance: number;
        retired: number;
    };
    scoped: boolean;
}>;
export declare function getAsset(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    name: string;
    assetCode: string;
    category: string;
    serialNumber: string;
    purchaseDate: string | null;
    purchaseLabel: string | null;
    condition: string;
    status: string;
    currentAssignment: {
        id: string;
        assetId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        assignedDate: string;
        assignedLabel: string;
        returnedDate: string | null;
        returnedLabel: string | null;
        assignedBy: {
            id: string;
            name: string;
        } | null;
        status: string;
        notes: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createAsset(auth: AuthContext, input: CreateAssetInput): Promise<{
    id: string;
    organizationId: string;
    name: string;
    assetCode: string;
    category: string;
    serialNumber: string;
    purchaseDate: string | null;
    purchaseLabel: string | null;
    condition: string;
    status: string;
    currentAssignment: {
        id: string;
        assetId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        assignedDate: string;
        assignedLabel: string;
        returnedDate: string | null;
        returnedLabel: string | null;
        assignedBy: {
            id: string;
            name: string;
        } | null;
        status: string;
        notes: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateAsset(auth: AuthContext, id: string, input: UpdateAssetInput): Promise<{
    id: string;
    organizationId: string;
    name: string;
    assetCode: string;
    category: string;
    serialNumber: string;
    purchaseDate: string | null;
    purchaseLabel: string | null;
    condition: string;
    status: string;
    currentAssignment: {
        id: string;
        assetId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        assignedDate: string;
        assignedLabel: string;
        returnedDate: string | null;
        returnedLabel: string | null;
        assignedBy: {
            id: string;
            name: string;
        } | null;
        status: string;
        notes: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteAsset(auth: AuthContext, id: string): Promise<void>;
export declare function assignAsset(auth: AuthContext, id: string, input: AssignAssetInput): Promise<{
    id: string;
    organizationId: string;
    name: string;
    assetCode: string;
    category: string;
    serialNumber: string;
    purchaseDate: string | null;
    purchaseLabel: string | null;
    condition: string;
    status: string;
    currentAssignment: {
        id: string;
        assetId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        assignedDate: string;
        assignedLabel: string;
        returnedDate: string | null;
        returnedLabel: string | null;
        assignedBy: {
            id: string;
            name: string;
        } | null;
        status: string;
        notes: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function returnAsset(auth: AuthContext, id: string, input: ReturnAssetInput): Promise<{
    id: string;
    organizationId: string;
    name: string;
    assetCode: string;
    category: string;
    serialNumber: string;
    purchaseDate: string | null;
    purchaseLabel: string | null;
    condition: string;
    status: string;
    currentAssignment: {
        id: string;
        assetId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        assignedDate: string;
        assignedLabel: string;
        returnedDate: string | null;
        returnedLabel: string | null;
        assignedBy: {
            id: string;
            name: string;
        } | null;
        status: string;
        notes: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}>;
export declare function listAssetHistory(auth: AuthContext, id: string): Promise<{
    asset: {
        id: string;
        organizationId: string;
        name: string;
        assetCode: string;
        category: string;
        serialNumber: string;
        purchaseDate: string | null;
        purchaseLabel: string | null;
        condition: string;
        status: string;
        currentAssignment: {
            id: string;
            assetId: string;
            employeeId: string;
            employee: {
                id: string;
                name: string;
                initials: string;
                profileImage: string;
                employeeCode: string;
                department: string | null;
            } | null;
            assignedDate: string;
            assignedLabel: string;
            returnedDate: string | null;
            returnedLabel: string | null;
            assignedBy: {
                id: string;
                name: string;
            } | null;
            status: string;
            notes: string;
        } | null;
        createdAt: string;
        updatedAt: string;
    };
    items: {
        id: string;
        assetId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        assignedDate: string;
        assignedLabel: string;
        returnedDate: string | null;
        returnedLabel: string | null;
        assignedBy: {
            id: string;
            name: string;
        } | null;
        status: string;
        notes: string;
    }[];
}>;
