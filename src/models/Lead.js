import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    city: { type: String, default: null },
    business_type: { type: String, default: null },
    product_interest: { type: String, default: null },
    message: { type: String, default: null },
    source: { type: String, default: "website" },
    form_type: { type: String, default: null },
    audit_type: { type: String, default: null },
    calculator_type: { type: String, default: null },
    company_name: { type: String, default: null },
    tool_id: { type: String, default: null },
    score: { type: Number, default: null },
    report_summary: { type: String, default: null },
    report_data: { type: mongoose.Schema.Types.Mixed, default: null },
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "won", "lost"],
      default: "new",
    },
    admin_notes: { type: String, default: null },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

leadSchema.set("toJSON", {
  virtuals: true,
  transform(_doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    if (ret.report_data != null && typeof ret.report_data === "object") {
      ret.report_data = JSON.stringify(ret.report_data);
    }
    return ret;
  },
});

export default mongoose.model("Lead", leadSchema);
