export type ListSortQuery = {
    search?: string;
    q?: string;
    sort?: string;
    order?: "asc" | "desc";
};
export declare function escapeRegex(value: string): string;
export declare function resolvedSearch(query: {
    search?: string;
    q?: string;
} | string | undefined): string | undefined;
export declare function searchFilter(fields: string[], search?: string): {
    $or?: undefined;
} | {
    $or: {
        [x: string]: RegExp;
    }[];
};
export declare function applySearch(filter: Record<string, unknown>, fields: string[], search?: string): Record<string, unknown>;
export declare function mongoSort(query: {
    sort?: string;
    order?: "asc" | "desc";
}, defaultSort: Record<string, 1 | -1>): Record<string, 1 | -1>;
