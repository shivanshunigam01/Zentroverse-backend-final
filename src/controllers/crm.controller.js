import CrmBundle from "../models/CrmBundle.js";
import { defaultCrmBundle } from "../seed/crmDefaults.js";
import { newId } from "../utils/ids.js";

async function getBundle() {
  let doc = await CrmBundle.findOne();
  if (!doc) doc = await CrmBundle.create(defaultCrmBundle());
  return doc;
}

async function saveBundle(doc) {
  await doc.save();
  return doc;
}

function nextNumber(prefix, items) {
  const n = items.length + 1;
  return `${prefix}-${String(n).padStart(4, "0")}`;
}

export async function listCustomers(_req, res, next) {
  try {
    const doc = await getBundle();
    res.json({ customers: doc.customers });
  } catch (e) {
    next(e);
  }
}

export async function createCustomer(req, res, next) {
  try {
    const doc = await getBundle();
    const customer = { ...req.body, id: newId("cus_"), createdAt: req.body.createdAt || new Date().toISOString().slice(0, 10) };
    doc.customers.push(customer);
    await saveBundle(doc);
    res.status(201).json({ customer });
  } catch (e) {
    next(e);
  }
}

export async function updateCustomer(req, res, next) {
  try {
    const doc = await getBundle();
    const idx = doc.customers.findIndex((c) => c.id === req.params.id);
    if (idx < 0) return res.status(404).json({ error: "Customer not found" });
    doc.customers[idx] = { ...doc.customers[idx], ...req.body, id: doc.customers[idx].id };
    await saveBundle(doc);
    res.json({ customer: doc.customers[idx] });
  } catch (e) {
    next(e);
  }
}

export async function deleteCustomer(req, res, next) {
  try {
    const doc = await getBundle();
    doc.customers = doc.customers.filter((c) => c.id !== req.params.id);
    await saveBundle(doc);
    res.json({ ok: true });
  } catch (e) {
    next(e);
  }
}

export async function listQuotations(_req, res, next) {
  try {
    const doc = await getBundle();
    res.json({ quotations: doc.quotations });
  } catch (e) {
    next(e);
  }
}

export async function createQuotation(req, res, next) {
  try {
    const doc = await getBundle();
    const quotation = {
      ...req.body,
      id: newId("qt_"),
      number: req.body.number || nextNumber("QT", doc.quotations),
    };
    doc.quotations.push(quotation);
    await saveBundle(doc);
    res.status(201).json({ quotation });
  } catch (e) {
    next(e);
  }
}

export async function updateQuotation(req, res, next) {
  try {
    const doc = await getBundle();
    const idx = doc.quotations.findIndex((q) => q.id === req.params.id);
    if (idx < 0) return res.status(404).json({ error: "Quotation not found" });
    doc.quotations[idx] = { ...doc.quotations[idx], ...req.body, id: doc.quotations[idx].id };
    await saveBundle(doc);
    res.json({ quotation: doc.quotations[idx] });
  } catch (e) {
    next(e);
  }
}

export async function deleteQuotation(req, res, next) {
  try {
    const doc = await getBundle();
    doc.quotations = doc.quotations.filter((q) => q.id !== req.params.id);
    await saveBundle(doc);
    res.json({ ok: true });
  } catch (e) {
    next(e);
  }
}

export async function convertQuotation(req, res, next) {
  try {
    const { id } = req.body || {};
    const doc = await getBundle();
    const qt = doc.quotations.find((q) => q.id === id);
    if (!qt) return res.status(404).json({ error: "Quotation not found" });
    const invoice = {
      id: newId("inv_"),
      number: nextNumber("INV", doc.invoices),
      customerId: qt.customerId,
      quotationId: qt.id,
      date: new Date().toISOString().slice(0, 10),
      dueDate: qt.dueDate,
      items: qt.items,
      gstPercent: qt.gstPercent,
      notes: qt.notes,
      status: "sent",
    };
    doc.invoices.push(invoice);
    qt.status = "accepted";
    await saveBundle(doc);
    res.json({ invoice });
  } catch (e) {
    next(e);
  }
}

export async function listInvoices(_req, res, next) {
  try {
    const doc = await getBundle();
    res.json({ invoices: doc.invoices });
  } catch (e) {
    next(e);
  }
}

export async function createInvoice(req, res, next) {
  try {
    const doc = await getBundle();
    const invoice = {
      ...req.body,
      id: newId("inv_"),
      number: req.body.number || nextNumber("INV", doc.invoices),
    };
    doc.invoices.push(invoice);
    await saveBundle(doc);
    res.status(201).json({ invoice });
  } catch (e) {
    next(e);
  }
}

export async function updateInvoice(req, res, next) {
  try {
    const doc = await getBundle();
    const idx = doc.invoices.findIndex((i) => i.id === req.params.id);
    if (idx < 0) return res.status(404).json({ error: "Invoice not found" });
    doc.invoices[idx] = { ...doc.invoices[idx], ...req.body, id: doc.invoices[idx].id };
    await saveBundle(doc);
    res.json({ invoice: doc.invoices[idx] });
  } catch (e) {
    next(e);
  }
}

export async function deleteInvoice(req, res, next) {
  try {
    const doc = await getBundle();
    doc.invoices = doc.invoices.filter((i) => i.id !== req.params.id);
    await saveBundle(doc);
    res.json({ ok: true });
  } catch (e) {
    next(e);
  }
}

export async function markInvoicePaid(req, res, next) {
  try {
    const { id, mode } = req.body || {};
    const doc = await getBundle();
    const inv = doc.invoices.find((i) => i.id === id);
    if (!inv) return res.status(404).json({ error: "Invoice not found" });
    inv.status = "paid";
    inv.paidAt = new Date().toISOString().slice(0, 10);
    const subtotal = (inv.items || []).reduce((s, it) => s + (it.qty || 0) * (it.rate || 0), 0);
    const amount = Math.round(subtotal * (1 + (inv.gstPercent || 0) / 100));
    const receipt = {
      id: newId("rc_"),
      number: nextNumber("RC", doc.receipts),
      invoiceId: inv.id,
      customerId: inv.customerId,
      amount,
      date: inv.paidAt,
      mode: mode || "UPI",
    };
    doc.receipts.push(receipt);
    const cust = doc.customers.find((c) => c.id === inv.customerId);
    if (cust) cust.totalSpend = (cust.totalSpend || 0) + amount;
    await saveBundle(doc);
    res.json({ invoice: inv, receipt });
  } catch (e) {
    next(e);
  }
}

export async function listReceipts(_req, res, next) {
  try {
    const doc = await getBundle();
    res.json({ receipts: doc.receipts });
  } catch (e) {
    next(e);
  }
}

export async function getSettings(_req, res, next) {
  try {
    const doc = await getBundle();
    res.json({ settings: doc.settings });
  } catch (e) {
    next(e);
  }
}

export async function putSettings(req, res, next) {
  try {
    const doc = await getBundle();
    doc.settings = { ...doc.settings, ...req.body };
    await saveBundle(doc);
    res.json({ settings: doc.settings });
  } catch (e) {
    next(e);
  }
}

export async function importCrm(req, res, next) {
  try {
    const doc = await getBundle();
    const { customers, quotations, invoices, receipts, settings } = req.body || {};
    if (Array.isArray(customers)) doc.customers = customers;
    if (Array.isArray(quotations)) doc.quotations = quotations;
    if (Array.isArray(invoices)) doc.invoices = invoices;
    if (Array.isArray(receipts)) doc.receipts = receipts;
    if (settings) doc.settings = settings;
    await saveBundle(doc);
    res.json({ ok: true });
  } catch (e) {
    next(e);
  }
}
