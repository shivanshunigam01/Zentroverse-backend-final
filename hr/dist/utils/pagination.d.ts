export type PaginationInput = {
    page: number;
    limit: number;
};
export type PaginationMeta = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
};
export declare function paginationSkip({ page, limit }: PaginationInput): number;
export declare function paginationMeta(total: number, { page, limit }: PaginationInput): PaginationMeta;
