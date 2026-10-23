import type { AccessTokenPayload, RefreshTokenPayload, UserRole } from "../types/auth.js";
type TokenUser = {
    id: string;
    organizationId: string;
    role: UserRole;
};
export declare function signAccessToken(user: TokenUser): string;
export declare function signRefreshToken(user: TokenUser): string;
export declare function verifyAccessToken(token: string): AccessTokenPayload;
export declare function getAccessTokenExpiresAt(token: string): string;
export declare function verifyRefreshToken(token: string): RefreshTokenPayload;
export {};
