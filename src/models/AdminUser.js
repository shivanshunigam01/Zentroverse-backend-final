import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, default: "Admin" },
    role: { type: String, default: "admin" },
    passwordHash: { type: String, required: true, select: false },
  },
  { timestamps: true },
);

adminUserSchema.methods.toProfile = function toProfile() {
  return {
    id: this._id.toString(),
    email: this.email,
    name: this.name,
    role: this.role,
  };
};

export default mongoose.model("AdminUser", adminUserSchema);
