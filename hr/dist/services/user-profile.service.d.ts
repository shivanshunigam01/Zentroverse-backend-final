import type { AuthContext } from "../types/auth.js";
import type { UpdateOwnProfileInput } from "../validators/profile.validators.js";
export declare function updateOwnProfile(auth: AuthContext, input: UpdateOwnProfileInput): Promise<import("../types/auth.js").PublicUser>;
export declare function updateOwnAvatar(auth: AuthContext, file: Express.Multer.File | undefined): Promise<import("../types/auth.js").PublicUser>;
