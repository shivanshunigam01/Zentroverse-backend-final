import mongoose from "mongoose";

const bajajApplicationSchema = new mongoose.Schema(
  {
    state: String,
    districts: [String],
    locations: [String],
    target_location: String,
    target_location_label: String,
    district: String,
    applicant_name: String,
    mobile: String,
    alternate_mobile: String,
    email: String,
    current_town: String,
    pan: String,
    gst_number: String,
    is_existing_business: String,
    business_name: String,
    business_type: String,
    other_business_type: String,
    years_in_business: String,
    existing_oem: String,
    oem_brand: String,
    investment_capacity: String,
    space_status: String,
    showroom_space: String,
    workshop_space: String,
    space_size: String,
    frontage: String,
    start_timeline: String,
    applicant_remarks: String,
    contact_consent: Boolean,
    disclaimer_ack: Boolean,
    consent_policy_version: String,
    consent_at: String,
    lead_score: Number,
    lead_id: { type: String, default: null },
    status: { type: String, default: "new" },
    admin_notes: { type: String, default: null },
    submitted_at: String,
  },
  { timestamps: true },
);

bajajApplicationSchema.methods.toJSON = function toJSON() {
  const o = this.toObject();
  return {
    id: o._id.toString(),
    ...o,
    _id: undefined,
    __v: undefined,
    created_at: o.createdAt?.toISOString?.() ?? o.createdAt,
    updated_at: o.updatedAt?.toISOString?.() ?? o.updatedAt,
    createdAt: undefined,
    updatedAt: undefined,
  };
};

export default mongoose.model("BajajApplication", bajajApplicationSchema);
