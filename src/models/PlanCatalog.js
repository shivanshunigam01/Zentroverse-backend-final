import mongoose from "mongoose";

const planCatalogSchema = new mongoose.Schema(
  {
    trial: { type: mongoose.Schema.Types.Mixed, required: true },
    plans: { type: [mongoose.Schema.Types.Mixed], default: [] },
    updatedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

export default mongoose.model("PlanCatalog", planCatalogSchema);
