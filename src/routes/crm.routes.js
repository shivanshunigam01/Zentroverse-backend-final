import { Router } from "express";
import {
  convertQuotation,
  createCustomer,
  createInvoice,
  createQuotation,
  deleteCustomer,
  deleteInvoice,
  deleteQuotation,
  getSettings,
  importCrm,
  listCustomers,
  listInvoices,
  listQuotations,
  listReceipts,
  markInvoicePaid,
  putSettings,
  updateCustomer,
  updateInvoice,
  updateQuotation,
} from "../controllers/crm.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.use(requireAdmin);

router.get("/customers", listCustomers);
router.post("/customers", createCustomer);
router.put("/customers/:id", updateCustomer);
router.delete("/customers/:id", deleteCustomer);

router.get("/quotations", listQuotations);
router.post("/quotations", createQuotation);
router.put("/quotations/:id", updateQuotation);
router.delete("/quotations/:id", deleteQuotation);
router.post("/quotations/convert-to-invoice", convertQuotation);

router.get("/invoices", listInvoices);
router.post("/invoices", createInvoice);
router.put("/invoices/:id", updateInvoice);
router.delete("/invoices/:id", deleteInvoice);
router.post("/invoices/mark-paid", markInvoicePaid);

router.get("/receipts", listReceipts);
router.get("/settings", getSettings);
router.put("/settings", putSettings);
router.post("/import", importCrm);

export default router;
