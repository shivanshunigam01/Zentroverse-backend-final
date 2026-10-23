import mongoose from "mongoose";
import type { AuthContext } from "../types/auth.js";
type JoiningLike = {
    _id: mongoose.Types.ObjectId | string;
    organizationId: mongoose.Types.ObjectId | string;
    clientId: mongoose.Types.ObjectId | string;
    candidateId: mongoose.Types.ObjectId | string;
    mandateId: mongoose.Types.ObjectId | string;
    offerId: mongoose.Types.ObjectId | string;
    joiningDate: Date;
};
/**
 * Idempotent: create auto invoice + guarantee when joining is CONFIRMED/JOINED.
 * Does not create a second auto-generated invoice for the same joining.
 */
export declare function ensureJoiningSideEffects(auth: AuthContext, joining: JoiningLike): Promise<{
    invoiceId: string;
    guaranteeId: string;
    professionalFee: number;
    totalAmount: number;
}>;
export {};
