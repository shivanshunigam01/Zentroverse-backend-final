import { newId } from "../utils/ids.js";

export function defaultZfStore() {
  const tenantId = newId("tnt_");
  const branchId = newId("br_");
  const userId = newId("usr_");
  const now = new Date().toISOString();
  return {
    tenants: [
      {
        id: tenantId,
        name: "Demo Dealer",
        key: "demo-dealer",
        status: "active",
        plan: "pro",
        timezone: "Asia/Kolkata",
        entitlements: { leads: true, automations: true },
        contact: { name: "Demo Admin", email: "demo@zentroflow.in", phone: "919999999999" },
        created_at: now,
      },
    ],
    users: [
      {
        id: userId,
        email: "demo@zentroflow.in",
        name: "Demo Admin",
        role: "tenant_admin",
        tenant_id: tenantId,
        branch_ids: [branchId],
        passwordHash: null,
        status: "active",
      },
    ],
    branches: [{ id: branchId, name: "Main Branch", branch_code: "MAIN", tenant_id: tenantId }],
    leads: [],
    jobs: [],
    integrations: [],
    automations: [],
    capiEvents: [],
    audit: [],
    followups: [],
    timelines: {},
    assignments: {},
  };
}

export function defaultHrStore() {
  return {
    organizations: [],
    users: [],
    employees: [],
    departments: [],
    designations: [],
    attendance: [],
    leaveTypes: [
      { id: "lt_1", name: "Casual Leave", code: "CL", daysPerYear: 12, isPaid: true },
      { id: "lt_2", name: "Sick Leave", code: "SL", daysPerYear: 10, isPaid: true },
    ],
    leaveRequests: [],
    announcements: [],
    platformAdmin: {
      email: "hr-platform@zentroverse.in",
      passwordHash: null,
      name: "HR Platform",
      role: "SUPER_ADMIN",
    },
  };
}
