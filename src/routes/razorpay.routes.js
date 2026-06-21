import { Router } from "express";
import { createOrder, verifyPayment } from "../controllers/razorpay.controller.js";

const router = Router();

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);

export default router;
