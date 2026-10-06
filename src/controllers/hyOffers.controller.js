import HyOfferReferral from "../models/HyOfferReferral.js";
import HyOfferCustomer from "../models/HyOfferCustomer.js";
import { newId } from "../utils/ids.js";

export async function submitReferral(req, res, next) {
  try {
    const body = req.body || {};
    if (!body.referrerCode || !body.friendName || !body.friendMobile) {
      return res.status(400).json({ error: "referrerCode, friendName and friendMobile are required." });
    }
    const submission = await HyOfferReferral.create({
      referrerCode: body.referrerCode,
      referrerName: body.referrerName || "",
      referrerMobile: body.referrerMobile || "",
      friendName: body.friendName,
      friendMobile: body.friendMobile,
      friendEmail: body.friendEmail,
      referrerOffer: body.referrerOffer ?? 0,
      friendOffer: body.friendOffer ?? 0,
      branch: body.branch,
      status: "new",
    });
    res.status(201).json({ submission: submission.toJSON() });
  } catch (error) {
    next(error);
  }
}

export async function listReferrals(_req, res, next) {
  try {
    const rows = await HyOfferReferral.find().sort({ createdAt: -1 });
    res.json({ referrals: rows.map((r) => r.toJSON()) });
  } catch (error) {
    next(error);
  }
}

export async function updateReferral(req, res, next) {
  try {
    const { id, status, admin_notes } = req.body || {};
    if (!id) return res.status(400).json({ error: "id is required" });
    const referral = await HyOfferReferral.findByIdAndUpdate(
      id,
      { ...(status !== undefined ? { status } : {}), ...(admin_notes !== undefined ? { admin_notes } : {}) },
      { new: true },
    );
    if (!referral) return res.status(404).json({ error: "Referral not found" });
    res.json({ referral: referral.toJSON() });
  } catch (error) {
    next(error);
  }
}

export async function trackClick(req, res, next) {
  try {
    const { referrerCode } = req.body || {};
    if (!referrerCode) return res.status(400).json({ error: "referrerCode is required" });
    await HyOfferCustomer.findOneAndUpdate(
      { referralCode: referrerCode },
      { linkClicked: true, clickedAt: new Date().toISOString() },
      { upsert: false },
    );
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
}

export async function lookupCustomer(req, res, next) {
  try {
    const customer = await HyOfferCustomer.findOne({ referralCode: req.params.code });
    if (!customer) return res.status(404).json({ error: "Not found" });
    res.json({
      customer: {
        customerName: customer.customerName,
        mobileNo: customer.mobileNo,
        referralCode: customer.referralCode,
        dealerName: customer.dealerName,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function importCustomers(req, res, next) {
  try {
    const { customers, branch } = req.body || {};
    if (!Array.isArray(customers)) return res.status(400).json({ error: "customers array required" });
    const imported = [];
    for (const row of customers) {
      const code = row.referralCode || row.code || newId("ref_");
      const doc = await HyOfferCustomer.findOneAndUpdate(
        { referralCode: code },
        {
          customerName: row.customerName || row.name || "",
          mobileNo: row.mobileNo || row.mobile || "",
          dealerName: row.dealerName || branch || "",
          referralCode: code,
          referralLink: row.referralLink || "",
          branch,
        },
        { upsert: true, new: true },
      );
      imported.push(doc);
    }
    res.json({ ok: true, count: imported.length });
  } catch (error) {
    next(error);
  }
}
