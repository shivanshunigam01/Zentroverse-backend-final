import mongoose from "mongoose";

const crmBundleSchema = new mongoose.Schema(
  {
    customers: { type: [mongoose.Schema.Types.Mixed], default: [] },
    quotations: { type: [mongoose.Schema.Types.Mixed], default: [] },
    invoices: { type: [mongoose.Schema.Types.Mixed], default: [] },
    receipts: { type: [mongoose.Schema.Types.Mixed], default: [] },
    settings: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

export default mongoose.model("CrmBundle", crmBundleSchema);
