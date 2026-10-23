/**
 * Precomputed bcrypt hash used only so login still performs a compare when no
 * user exists. Never stored on an account and never a valid password.
 */
export declare const DUMMY_PASSWORD_HASH = "$2b$12$P7Yo5vv0L25sQtvtsRrZwumP4k5wTuV7B/gvmiHgs1cHDtF5NpU0e";
export declare function hashPassword(plain: string): Promise<string>;
export declare function verifyPassword(plain: string, hashed: string): Promise<boolean>;
