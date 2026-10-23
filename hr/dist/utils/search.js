export function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export function resolvedSearch(query) {
    const value = typeof query === "string" || query === undefined ? query : query.search ?? query.q;
    const term = value?.trim();
    return term ? term : undefined;
}
export function searchFilter(fields, search) {
    const term = resolvedSearch(search);
    if (!term) {
        return {};
    }
    const regex = new RegExp(escapeRegex(term), "i");
    return {
        $or: fields.map((field) => ({ [field]: regex })),
    };
}
export function applySearch(filter, fields, search) {
    const clause = searchFilter(fields, search);
    if (!("$or" in clause)) {
        return filter;
    }
    if (filter.$or) {
        const existingAnd = Array.isArray(filter.$and) ? filter.$and : [];
        filter.$and = [...existingAnd, { $or: filter.$or }, clause];
        delete filter.$or;
        return filter;
    }
    Object.assign(filter, clause);
    return filter;
}
export function mongoSort(query, defaultSort) {
    if (!query.sort && !query.order) {
        return defaultSort;
    }
    const field = query.sort ?? Object.keys(defaultSort)[0] ?? "createdAt";
    const dir = query.order === "asc" ? 1 : -1;
    if (field === "createdAt") {
        return { createdAt: dir };
    }
    return { [field]: dir, createdAt: -1 };
}
//# sourceMappingURL=search.js.map