import { HTTP_STATUS } from "../constants/http.js";
import { MESSAGES } from "../constants/messages.js";
export class AppError extends Error {
    statusCode;
    errors;
    isOperational;
    constructor(message, statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR, errors, isOperational = true) {
        super(message);
        this.name = "AppError";
        this.statusCode = statusCode;
        this.errors = errors;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
    static unauthorized(message = MESSAGES.UNAUTHORIZED) {
        return new AppError(message, HTTP_STATUS.UNAUTHORIZED);
    }
    static forbidden(message = MESSAGES.FORBIDDEN) {
        return new AppError(message, HTTP_STATUS.FORBIDDEN);
    }
    static conflict(message = MESSAGES.EMAIL_IN_USE, errors) {
        return new AppError(message, HTTP_STATUS.CONFLICT, errors);
    }
    static badRequest(message = MESSAGES.BAD_REQUEST, errors) {
        return new AppError(message, HTTP_STATUS.BAD_REQUEST, errors);
    }
    static validation(message = MESSAGES.VALIDATION_ERROR, errors) {
        return new AppError(message, HTTP_STATUS.UNPROCESSABLE_ENTITY, errors);
    }
    static notFound(message = MESSAGES.NOT_FOUND) {
        return new AppError(message, HTTP_STATUS.NOT_FOUND);
    }
    static tooManyRequests(message = MESSAGES.TOO_MANY_REQUESTS) {
        return new AppError(message, HTTP_STATUS.TOO_MANY_REQUESTS);
    }
    static internal(message = MESSAGES.INTERNAL_ERROR) {
        return new AppError(message, HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
}
//# sourceMappingURL=app-error.js.map