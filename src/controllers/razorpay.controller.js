import crypto from "node:crypto";
import Razorpay from "razorpay";
import { env } from "../config/env.js";

const planAmounts = {
  starter: 499900,
  growth: 1299900,
  pro: 2499900,
};

function getRazorpayClient() {
  if (!env.razorpayKeyId || !env.razorpayKeySecret) {
    const error = new Error("Razorpay is not configured");
    error.statusCode = 503;
    throw error;
  }

  return new Razorpay({
    key_id: env.razorpayKeyId,
    key_secret: env.razorpayKeySecret,
  });
}

export async function createOrder(req, res, next) {
  try {
    const { planId, email } = req.body || {};
    const amount = planAmounts[planId];
    if (!amount) return res.status(400).json({ error: "Invalid planId" });

    const razorpay = getRazorpayClient();
    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `zv_${planId}_${Date.now()}`,
      notes: { planId, email: email || "" },
    });

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: env.razorpayKeyId,
    });
  } catch (error) {
    next(error);
  }
}

export function verifyPayment(req, res) {
  if (!env.razorpayKeySecret) {
    return res.status(503).json({ ok: false, error: "Razorpay is not configured" });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ ok: false, error: "Missing payment verification fields" });
  }

  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto.createHmac("sha256", env.razorpayKeySecret).update(body).digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ ok: false, error: "Invalid payment signature" });
  }

  res.json({ ok: true });
}
