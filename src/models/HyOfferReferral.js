import mongoose from "mongoose";

const hyOfferReferralSchema = new mongoose.Schema(
  {
    referrerCode: String,
    referrerName: String,
    referrerMobile: String,
    friendName: String,
    friendMobile: String,
    friendEmail: String,
    referrerOffer: Number,
    friendOffer: Number,
    branch: String,
    status: { type: String, default: "new" },
    admin_notes: { type: String, default: null },
  },
  { timestamps: true },
);

hyOfferReferralSchema.methods.toJSON = function toJSON() {
  const o = this.toObject();
  return {
    id: o._id.toString(),
    referrerCode: o.referrerCode,
    referrerName: o.referrerName,
    referrerMobile: o.referrerMobile,
    friendName: o.friendName,
    friendMobile: o.friendMobile,
    friendEmail: o.friendEmail,
    referrerOffer: o.referrerOffer,
    friendOffer: o.friendOffer,
    branch: o.branch,
    status: o.status,
    admin_notes: o.admin_notes,
    createdAt: o.createdAt?.toISOString?.() ?? new Date().toISOString(),
  };
};

export default mongoose.model("HyOfferReferral", hyOfferReferralSchema);
