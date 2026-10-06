import mongoose from "mongoose";

/** Keyed JSON blob for HR, ZentroFlow, etc. */
const moduleStoreSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    data: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

export default mongoose.model("ModuleStore", moduleStoreSchema);
