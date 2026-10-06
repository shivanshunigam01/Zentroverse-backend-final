export function defaultCrmBundle() {
  return {
    customers: [
      {
        id: "cus_1",
        name: "Rajesh Kumar",
        company: "Kumar Motors",
        gstin: "27ABCDE1234F1Z5",
        phone: "+91 98200 11111",
        email: "rajesh@kumarmotors.in",
        city: "Mumbai",
        address: "12 Linking Rd, Bandra W, Mumbai 400050",
        totalSpend: 245000,
        createdAt: "2026-01-12",
      },
    ],
    quotations: [],
    invoices: [],
    receipts: [],
    settings: {
      name: "Zentroverse Pvt Ltd",
      address: "5th Floor, Spectrum Tower, MG Road, Bengaluru, Karnataka 560001",
      gstin: "29AAACZ1234F1Z5",
      phone: "+91 80 1234 5678",
      email: "billing@zentroverse.in",
      defaultGstPercent: 18,
      bankDetails: "HDFC Bank • A/c 50100123456789 • IFSC HDFC0000123",
      footerNote: "Thank you for your business with Zentroverse.",
      logoDataUrl: "",
    },
  };
}
