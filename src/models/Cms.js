import mongoose from "mongoose";

const cmsSchema = new mongoose.Schema({
  slug: { type: String, default: "main", unique: true, index: true },
  payload: { type: mongoose.Schema.Types.Mixed, required: true },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Cms", cmsSchema);
