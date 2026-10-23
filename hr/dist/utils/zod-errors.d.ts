import type { ZodError } from "zod";
import { AppError } from "./app-error.js";
export declare function validationFromZod(error: ZodError): AppError;
