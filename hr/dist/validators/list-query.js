import { z } from "zod";
export const SORT_ORDERS = ["asc", "desc"];
const emptyToUndefined = (value) => {
    const trimmed = value?.trim();
    return trimmed ? trimmed : undefined;
};
export const optionalSearchQuery = z
    .string()
    .trim()
    .max(80)
    .optional()
    .transform(emptyToUndefined);
export const sortOrderQuery = z.enum(SORT_ORDERS).optional();
export function sortFieldQuery(fields) {
    return z.enum(fields).optional();
}
export function listControlFields(sortFields, limitDefault = 20, limitMax = 50) {
    return {
        search: optionalSearchQuery,
        q: optionalSearchQuery,
        sort: sortFieldQuery(sortFields),
        order: sortOrderQuery,
        page: z.coerce.number().int().min(1).default(1),
        limit: z.coerce.number().int().min(1).max(limitMax).default(limitDefault),
    };
}
//# sourceMappingURL=list-query.js.map