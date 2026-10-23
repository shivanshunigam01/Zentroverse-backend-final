import { HTTP_STATUS } from "../constants/http.js";
import { MESSAGES } from "../constants/messages.js";
export function sendSuccess(res, options = {}) {
    const { message = MESSAGES.SUCCESS, data, statusCode = HTTP_STATUS.OK } = options;
    const body = {
        success: true,
        message,
    };
    if (data !== undefined) {
        body.data = data;
    }
    return res.status(statusCode).json(body);
}
export function sendError(res, options) {
    const { message, statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR, errors, } = options;
    const body = {
        success: false,
        message,
    };
    if (errors !== undefined) {
        body.errors = errors;
    }
    return res.status(statusCode).json(body);
}
//# sourceMappingURL=api-response.js.map