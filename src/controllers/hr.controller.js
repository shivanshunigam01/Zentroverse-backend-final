import { mutateModuleData, getModuleData } from "../services/moduleStore.service.js";
import { hashPassword, verifyPassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";
import { newId } from "../utils/ids.js";
import { env } from "../config/env.js";
import { defaultHrStore } from "../seed/moduleDefaults.js";

const HR_KEY = "hr";

function ok(res, data) {
  res.json({ success: true, data });
}

function fail(res, status, message) {
  res.status(status).json({ success: false, message });
}

function slugify(name) {
  return String(name || "org")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function mapUser(u) {
  return {
    id: u.id,
    organizationId: u.organizationId,
    organizationName: u.organizationName,
    employeeId: u.employeeId ?? null,
    name: u.name,
    email: u.email,
    profileImage: u.profileImage,
    role: u.role,
    isActive: u.isActive ?? true,
    isPlatform: u.isPlatform ?? false,
  };
}

async function loadHr() {
  return getModuleData(HR_KEY, defaultHrStore());
}

export async function hrRegister(req, res, next) {
  try {
    const { organizationName, name, email, password } = req.body || {};
    if (!organizationName || !name || !email || !password) {
      return fail(res, 400, "organizationName, name, email and password are required");
    }

    const result = await mutateModuleData(HR_KEY, (store) => {
      if (store.users.some((u) => u.email === email.toLowerCase())) {
        throw Object.assign(new Error("Email already registered"), { status: 409 });
      }
      const orgId = newId("org_");
      const userId = newId("usr_");
      const org = {
        id: orgId,
        name: organizationName,
        slug: slugify(organizationName),
        email,
      };
      store.organizations.push(org);
      const user = {
        id: userId,
        organizationId: orgId,
        organizationName,
        name,
        email: email.toLowerCase(),
        role: "HR_ADMIN",
        passwordHash: hashPassword(password),
        employeeId: null,
      };
      store.users.push(user);
      return store;
    }, defaultHrStore());

    const user = result.users.find((u) => u.email === email.toLowerCase());
    const org = result.organizations.find((o) => o.id === user.organizationId);
    const token = signToken({ kind: "hr", sub: user.id, organizationId: org.id, role: user.role });
    ok(res, { token, user: mapUser(user), organization: org });
  } catch (error) {
    if (error.status) return fail(res, error.status, error.message);
    next(error);
  }
}

export async function hrLogin(req, res, next) {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return fail(res, 400, "email and password required");

    const store = await loadHr();
    const user = store.users.find((u) => u.email === email.toLowerCase());
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return fail(res, 401, "Invalid email or password");
    }

    const org = store.organizations.find((o) => o.id === user.organizationId) || null;
    const token = signToken({ kind: "hr", sub: user.id, organizationId: user.organizationId, role: user.role });
    ok(res, { token, user: mapUser(user), organization: org });
  } catch (error) {
    next(error);
  }
}

export async function hrMe(req, res, next) {
  try {
    const store = await loadHr();
    const user = store.users.find((u) => u.id === req.auth.sub);
    if (!user) return fail(res, 401, "User not found");
    const org = store.organizations.find((o) => o.id === user.organizationId) || null;
    const employee = store.employees.find((e) => e.id === user.employeeId) || null;
    ok(res, { user: mapUser(user), employee, organization: org });
  } catch (error) {
    next(error);
  }
}

export async function hrPlatformOverview(_req, res, next) {
  try {
    const store = await loadHr();
    ok(res, {
      organizations: store.organizations.length,
      employees: store.employees.length,
      users: store.users.length,
      leavePending: store.leaveRequests.filter((r) => r.status === "pending").length,
    });
  } catch (error) {
    next(error);
  }
}

export async function hrOrganizations(_req, res, next) {
  try {
    const store = await loadHr();
    ok(res, { items: store.organizations });
  } catch (error) {
    next(error);
  }
}

export async function hrDashboard(req, res, next) {
  try {
    const store = await loadHr();
    const orgId = req.auth.organizationId;
    const employees = store.employees.filter((e) => e.organizationId === orgId);
    const today = new Date().toISOString().slice(0, 10);
    const presentToday = store.attendance.filter((a) => a.date === today && a.status === "present").length;
    ok(res, {
      employees: employees.length,
      presentToday,
      pendingLeave: store.leaveRequests.filter((r) => r.organizationId === orgId && r.status === "pending").length,
      departments: store.departments.filter((d) => d.organizationId === orgId).length,
      announcements: store.announcements
        .filter((a) => a.organizationId === orgId)
        .slice(0, 5)
        .map((a) => ({ id: a.id, title: a.title, body: a.body, createdAt: a.createdAt })),
    });
  } catch (error) {
    next(error);
  }
}

export async function hrOrganization(req, res, next) {
  try {
    const store = await loadHr();
    const org = store.organizations.find((o) => o.id === req.auth.organizationId);
    if (!org) return fail(res, 404, "Organization not found");
    if (req.method === "PATCH") {
      Object.assign(org, req.body || {});
      await mutateModuleData(HR_KEY, () => store, store);
    }
    ok(res, org);
  } catch (error) {
    next(error);
  }
}

function orgScopedList(store, orgId, key) {
  return store[key].filter((x) => x.organizationId === orgId);
}

export async function hrDepartments(req, res, next) {
  try {
    const orgId = req.auth.organizationId;
    if (req.method === "POST") {
      const dept = { id: newId("dept_"), organizationId: orgId, ...req.body };
      await mutateModuleData(HR_KEY, (store) => {
        store.departments.push(dept);
        return store;
      }, defaultHrStore());
      return ok(res, dept);
    }
    const store = await loadHr();
    ok(res, { items: orgScopedList(store, orgId, "departments") });
  } catch (error) {
    next(error);
  }
}

export async function hrDesignations(req, res, next) {
  try {
    const orgId = req.auth.organizationId;
    if (req.method === "POST") {
      const item = { id: newId("des_"), organizationId: orgId, ...req.body };
      await mutateModuleData(HR_KEY, (store) => {
        store.designations.push(item);
        return store;
      }, defaultHrStore());
      return ok(res, item);
    }
    const store = await loadHr();
    ok(res, { items: orgScopedList(store, orgId, "designations") });
  } catch (error) {
    next(error);
  }
}

export async function hrEmployees(req, res, next) {
  try {
    const orgId = req.auth.organizationId;
    const store = await loadHr();
    if (req.method === "GET" && req.params.id) {
      const emp = store.employees.find((e) => e.id === req.params.id && e.organizationId === orgId);
      if (!emp) return fail(res, 404, "Employee not found");
      return ok(res, emp);
    }
    if (req.method === "POST") {
      const body = req.body || {};
      const emp = {
        id: newId("emp_"),
        organizationId: orgId,
        employeeCode: body.employeeCode || `E${Date.now()}`,
        firstName: body.firstName || "",
        lastName: body.lastName || "",
        fullName: body.fullName || `${body.firstName || ""} ${body.lastName || ""}`.trim(),
        employmentStatus: body.employmentStatus || "active",
        employmentType: body.employmentType || "full_time",
        ...body,
      };
      await mutateModuleData(HR_KEY, (s) => {
        s.employees.push(emp);
        return s;
      }, defaultHrStore());
      return ok(res, emp);
    }
    if (req.method === "PATCH") {
      await mutateModuleData(HR_KEY, (s) => {
        const idx = s.employees.findIndex((e) => e.id === req.params.id && e.organizationId === orgId);
        if (idx < 0) throw Object.assign(new Error("Employee not found"), { status: 404 });
        s.employees[idx] = { ...s.employees[idx], ...req.body, id: s.employees[idx].id };
        return s;
      }, defaultHrStore());
      const updated = (await loadHr()).employees.find((e) => e.id === req.params.id);
      return ok(res, updated);
    }
    const q = (req.query.q || "").toLowerCase();
    let items = orgScopedList(store, orgId, "employees");
    if (q) items = items.filter((e) => e.fullName?.toLowerCase().includes(q) || e.employeeCode?.toLowerCase().includes(q));
    ok(res, { items });
  } catch (error) {
    if (error.status) return fail(res, error.status, error.message);
    next(error);
  }
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export async function hrAttendanceToday(req, res, next) {
  try {
    const store = await loadHr();
    const user = store.users.find((u) => u.id === req.auth.sub);
    const row = store.attendance.find((a) => a.employeeId === user?.employeeId && a.date === todayStr()) || null;
    ok(res, row);
  } catch (error) {
    next(error);
  }
}

export async function hrAttendanceCheckIn(req, res, next) {
  try {
    const store = await loadHr();
    const user = store.users.find((u) => u.id === req.auth.sub);
    const now = new Date().toISOString();
    const row = {
      id: newId("att_"),
      employeeId: user?.employeeId,
      organizationId: req.auth.organizationId,
      date: todayStr(),
      status: "present",
      checkInAt: now,
      checkOutAt: null,
      workMinutes: 0,
    };
    await mutateModuleData(HR_KEY, (s) => {
      s.attendance.push(row);
      return s;
    }, defaultHrStore());
    ok(res, row);
  } catch (error) {
    next(error);
  }
}

export async function hrAttendanceCheckOut(req, res, next) {
  try {
    const store = await loadHr();
    const user = store.users.find((u) => u.id === req.auth.sub);
    let row = store.attendance.find((a) => a.employeeId === user?.employeeId && a.date === todayStr());
    if (!row) return fail(res, 400, "No check-in for today");
    const out = new Date();
    const checkIn = row.checkInAt ? new Date(row.checkInAt) : out;
    row = {
      ...row,
      checkOutAt: out.toISOString(),
      workMinutes: Math.max(0, Math.round((out - checkIn) / 60000)),
    };
    await mutateModuleData(HR_KEY, (s) => {
      const idx = s.attendance.findIndex((a) => a.id === row.id);
      if (idx >= 0) s.attendance[idx] = row;
      return s;
    }, defaultHrStore());
    ok(res, row);
  } catch (error) {
    next(error);
  }
}

export async function hrAttendanceList(_req, res, next) {
  try {
    const store = await loadHr();
    ok(res, { items: store.attendance.filter((a) => a.organizationId === _req.auth.organizationId) });
  } catch (error) {
    next(error);
  }
}

export async function hrLeaveTypes(_req, res, next) {
  try {
    const store = await loadHr();
    ok(res, { items: store.leaveTypes });
  } catch (error) {
    next(error);
  }
}

export async function hrLeaveRequests(req, res, next) {
  try {
    const orgId = req.auth.organizationId;
    if (req.method === "POST") {
      const body = req.body || {};
      const store = await loadHr();
      const user = store.users.find((u) => u.id === req.auth.sub);
      const reqRow = {
        id: newId("lr_"),
        organizationId: orgId,
        employeeId: body.employeeId || user?.employeeId,
        leaveTypeId: body.leaveTypeId,
        startDate: body.startDate,
        endDate: body.endDate,
        days: body.days || 1,
        reason: body.reason || "",
        status: "pending",
        createdAt: new Date().toISOString(),
      };
      await mutateModuleData(HR_KEY, (s) => {
        s.leaveRequests.push(reqRow);
        return s;
      }, defaultHrStore());
      return ok(res, reqRow);
    }
    const status = req.query.status;
    const store = await loadHr();
    let items = store.leaveRequests.filter((r) => r.organizationId === orgId);
    if (status) items = items.filter((r) => r.status === status);
    ok(res, { items });
  } catch (error) {
    next(error);
  }
}

export async function hrLeaveReview(req, res, next) {
  try {
    const { status, reviewNote } = req.body || {};
    await mutateModuleData(HR_KEY, (s) => {
      const idx = s.leaveRequests.findIndex((r) => r.id === req.params.id);
      if (idx < 0) throw Object.assign(new Error("Leave request not found"), { status: 404 });
      s.leaveRequests[idx].status = status;
      s.leaveRequests[idx].reviewNote = reviewNote;
      return s;
    }, defaultHrStore());
    ok(res, { ok: true });
  } catch (error) {
    if (error.status) return fail(res, error.status, error.message);
    next(error);
  }
}

export async function hrAnnouncements(req, res, next) {
  try {
    const orgId = req.auth.organizationId;
    if (req.method === "POST") {
      const ann = {
        id: newId("ann_"),
        organizationId: orgId,
        title: req.body.title,
        body: req.body.body,
        published: true,
        createdAt: new Date().toISOString(),
      };
      await mutateModuleData(HR_KEY, (s) => {
        s.announcements.push(ann);
        return s;
      }, defaultHrStore());
      return ok(res, ann);
    }
    const store = await loadHr();
    ok(res, { items: store.announcements.filter((a) => a.organizationId === orgId) });
  } catch (error) {
    next(error);
  }
}

export async function hrProfilePatch(req, res, next) {
  try {
    await mutateModuleData(HR_KEY, (s) => {
      const idx = s.users.findIndex((u) => u.id === req.auth.sub);
      if (idx < 0) throw Object.assign(new Error("User not found"), { status: 404 });
      s.users[idx] = { ...s.users[idx], ...req.body };
      return s;
    }, defaultHrStore());
    const user = (await loadHr()).users.find((u) => u.id === req.auth.sub);
    ok(res, mapUser(user));
  } catch (error) {
    if (error.status) return fail(res, error.status, error.message);
    next(error);
  }
}

export async function ensureHrPlatformAdmin() {
  await mutateModuleData(HR_KEY, (store) => {
    if (!store.platformAdmin?.passwordHash) {
      store.platformAdmin = {
        ...store.platformAdmin,
        email: env.adminEmail,
        name: "Platform HR",
        role: "SUPER_ADMIN",
        passwordHash: hashPassword(env.adminPassword),
      };
    }
    return store;
  }, defaultHrStore());
}
