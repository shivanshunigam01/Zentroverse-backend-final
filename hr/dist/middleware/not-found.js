import { AppError } from "../utils/app-error.js";
export const notFoundHandler = (req, _res, next) => {
    next(AppError.notFound(`Route ${req.method} ${req.path} not found`));
};
//# sourceMappingURL=not-found.js.map