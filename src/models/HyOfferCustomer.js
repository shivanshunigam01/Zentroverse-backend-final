import mongoose from "mongoose";

const hyOfferCustomerSchema = new mongoose.Schema(
  {
    customerName: String,
    mobileNo: String,
    dealerName: String,
    referralCode: { type: String, unique: true, sparse: true },
    referralLink: String,
    deliveryStatus: { type: String, default: "pending" },
    linkClicked: { type: Boolean, default: false },
    formSubmitted: { type: Boolean, default: false },
    clickedAt: String,
    submittedAt: String,
    lastMessageAt: String,
    failureReason: String,
    branch: String,
  },
  { timestamps: true },
);

export default mongoose.model("HyOfferCustomer", hyOfferCustomerSchema);
