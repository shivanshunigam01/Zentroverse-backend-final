export function paginationSkip({ page, limit }) {
    return (page - 1) * limit;
}
export function paginationMeta(total, { page, limit }) {
    return {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit) || 1),
    };
}
//# sourceMappingURL=pagination.js.map