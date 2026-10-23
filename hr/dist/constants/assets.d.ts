export declare const ASSET_STATUSES: readonly ["available", "assigned", "maintenance", "retired"];
export type AssetStatus = (typeof ASSET_STATUSES)[number];
export declare const ASSET_CONDITIONS: readonly ["new", "good", "fair", "poor"];
export type AssetCondition = (typeof ASSET_CONDITIONS)[number];
export declare const ASSET_CATEGORIES: readonly ["laptop", "monitor", "phone", "tablet", "accessories", "furniture", "badge", "vehicle", "other"];
export type AssetCategory = (typeof ASSET_CATEGORIES)[number];
export declare const ASSIGNMENT_STATUSES: readonly ["active", "returned"];
export type AssignmentStatus = (typeof ASSIGNMENT_STATUSES)[number];
