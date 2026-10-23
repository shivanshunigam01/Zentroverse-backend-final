import type { PublicUser } from "../types/auth.js";
import type { ChangePasswordInput, ForgotPasswordInput, LoginInput, RegisterInput, ResetPasswordInput } from "../validators/auth.validators.js";
export declare function register(input: RegisterInput): Promise<{
    accessToken: string;
    refreshToken: string;
    user: PublicUser;
}>;
export declare function login(input: LoginInput): Promise<{
    accessToken: string;
    refreshToken: string;
    user: PublicUser;
}>;
export declare function logout(userId: string): Promise<void>;
export declare function getCurrentUser(userId: string): Promise<PublicUser>;
export declare function refreshSession(refreshToken: string | undefined): Promise<{
    accessToken: string;
    refreshToken: string;
    user: PublicUser;
}>;
export declare function forgotPassword(input: ForgotPasswordInput): Promise<void>;
export declare function resetPassword(input: ResetPasswordInput): Promise<{
    accessToken: string;
    refreshToken: string;
    user: PublicUser;
}>;
export declare function changePassword(userId: string, input: ChangePasswordInput): Promise<{
    accessToken: string;
    refreshToken: string;
    user: PublicUser;
}>;
