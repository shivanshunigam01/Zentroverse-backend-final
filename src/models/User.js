import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    phoneDialCode: { type: String, default: "" },
    phoneNational: { type: String, default: "" },
    companyName: { type: String, default: "" },
    companyDescription: { type: String, default: "" },
    country: { type: String, default: "" },
    state: { type: String, default: "" },
    companySize: { type: String, default: "" },
    industry: { type: String, default: "" },
    websiteUrl: { type: String, default: "" },
    timezone: { type: String, default: "" },
    picture: { type: String, default: null },
    authMethod: {
      type: String,
      enum: ["password", "google", "pending"],
      default: "pending",
    },
    passwordHash: { type: String, default: null, select: false },
  },
  { timestamps: true }
);

userSchema.methods.toPublicJSON = function toPublicJSON() {
  return {
    fullName: this.fullName,
    email: this.email,
    phoneDialCode: this.phoneDialCode,
    phoneNational: this.phoneNational,
    companyName: this.companyName,
    companyDescription: this.companyDescription,
    country: this.country,
    state: this.state,
    companySize: this.companySize,
    industry: this.industry,
    websiteUrl: this.websiteUrl,
    timezone: this.timezone,
    picture: this.picture ?? undefined,
    password: null,
    authMethod: this.authMethod,
  };
};

export default mongoose.model("User", userSchema);
