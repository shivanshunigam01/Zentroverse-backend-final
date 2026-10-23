import { validationFromZod } from "../utils/zod-errors.js";
export function validateBody(schema) {
    return (req, _res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            next(validationFromZod(result.error));
            return;
        }
        req.body = result.data;
        next();
    };
}
export function validateQuery(schema) {
    return (req, _res, next) => {
        const result = schema.safeParse(req.query);
        if (!result.success) {
            next(validationFromZod(result.error));
            return;
        }
        req.validatedQuery = result.data;
        next();
    };
}
//# sourceMappingURL=validate.js.map