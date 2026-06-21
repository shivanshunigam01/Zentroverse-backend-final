import User from "../models/User.js";
import { hashPassword, verifyPassword } from "../utils/password.js";

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function pickUserFields(body) {
  return {
    fullName: body.fullName?.trim(),
    email: normalizeEmail(body.email),
    phoneDialCode: body.phoneDialCode?.trim() || "",
    phoneNational: body.phoneNational?.trim() || "",
    companyName: body.companyName?.trim() || "",
    companyDescription: body.companyDescription?.trim() || "",
    country: body.country?.trim() || "",
    state: body.state?.trim() || "",
    companySize: body.companySize?.trim() || "",
    industry: body.industry?.trim() || "",
    websiteUrl: body.websiteUrl?.trim() || "",
    timezone: body.timezone?.trim() || "",
    picture: body.picture?.trim() || null,
    authMethod: body.authMethod || "pending",
  };
}

export async function authExists(req, res, next) {
  try {
    const email = normalizeEmail(req.query.email);
    if (!email) return res.status(400).json({ error: "email is required" });

    const user = await User.findOne({ email }).select("authMethod");
    res.json({
      exists: Boolean(user),
      authMethod: user?.authMethod ?? null,
    });
  } catch (error) {
    next(error);
  }
}

export async function authProfile(req, res, next) {
  try {
    const email = normalizeEmail(req.query.email);
    if (!email) return res.status(400).json({ error: "email is required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ user: user.toPublicJSON() });
  } catch (error) {
    next(error);
  }
}

export async function registerUser(req, res, next) {
  try {
    const fields = pickUserFields(req.body || {});
    if (!fields.fullName || !fields.email) {
      return res.status(400).json({ error: "fullName and email are required" });
    }

    const existing = await User.findOne({ email: fields.email });
    if (existing) {
      return res.status(409).json({ error: "An account with this email already exists." });
    }

    const authMethod = ["password", "google", "pending"].includes(fields.authMethod)
      ? fields.authMethod
      : "pending";

    const userData = { ...fields, authMethod };

    if (authMethod === "password" && req.body?.password) {
      userData.passwordHash = hashPassword(String(req.body.password));
    }

    const user = await User.create(userData);
    res.status(201).json({ user: user.toPublicJSON() });
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req, res, next) {
  try {
    const email = normalizeEmail(req.body?.email);
    const password = req.body?.password;

    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }

    const user = await User.findOne({ email }).select("+passwordHash");
    if (!user || !user.passwordHash || !verifyPassword(String(password), user.passwordHash)) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    if (user.authMethod === "pending") {
      return res.status(403).json({
        error:
          "Your account is pending. An administrator will assign your password — please sign in after you receive access.",
      });
    }

    res.json({ user: user.toPublicJSON() });
  } catch (error) {
    next(error);
  }
}
