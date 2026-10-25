/**
 * Seed PeopleFlow HR demo data for all major modules (idempotent).
 *
 *   npm run seed:hr-demo
 *
 * Requires existing super-admin (npm run seed:hr-admin first).
 *
 * Optional:
 *   SEED_HR_EMAIL=hr.admin@zentroverse.in
 *   SEED_HR_DEMO_PASSWORD=Zentro@2026
 *   SEED_HR_DEMO_RESET=1   — wipe org-scoped HR data then re-seed (keeps org + super-admin user)
 */
import {
  getBackendRoot,
  hrImport,
  loadPeopleflowEnv,
} from "./lib/peopleflow-hr-bootstrap.mjs";

const DEMO_PASSWORD = process.env.SEED_HR_DEMO_PASSWORD || "Zentro@2026";
const ADMIN_EMAIL = (process.env.SEED_HR_EMAIL || "hr.admin@zentroverse.in").toLowerCase().trim();

const DEMO_USERS = [
  { email: "manager.demo@zentroverse.in", name: "Demo Manager", role: "MANAGER" },
  { email: "hr.ops@zentroverse.in", name: "Demo HR Admin", role: "HR_ADMIN" },
  { email: "priya.employee@zentroverse.in", name: "Priya Singh", role: "EMPLOYEE" },
  { email: "amit.employee@zentroverse.in", name: "Amit Kumar", role: "EMPLOYEE" },
];

function daysAgo(n) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - n);
  return d;
}

function atHour(base, hour, min = 0) {
  const d = new Date(base);
  d.setHours(hour, min, 0, 0);
  return d;
}

async function wipeOrgData(orgId, models) {
  const oid = orgId;
  const del = (M) => M.deleteMany({ organizationId: oid });
  const order = [
    models.OfferModel,
    models.InterviewModel,
    models.CandidateSubmissionModel,
    models.JobApplicationModel,
    models.JoiningModel,
    models.InvoicePaymentModel,
    models.InvoiceModel,
    models.JobModel,
    models.RecruitmentMandateModel,
    models.ClientAgreementModel,
    models.ClientModel,
    models.CandidateModel,
    models.LeaveRequestModel,
    models.LeaveBalanceModel,
    models.AttendanceModel,
    models.AssetAssignmentModel,
    models.AssetModel,
    models.GoalModel,
    models.AnnouncementModel,
    models.HolidayModel,
    models.LeaveTypeModel,
    models.EmployeeModel,
    models.DepartmentModel,
    models.DesignationModel,
  ];
  for (const M of order) {
    if (M) await del(M);
  }
  await models.UserModel.deleteMany({
    organizationId: oid,
    email: { $ne: ADMIN_EMAIL },
  });
}

async function ensureUser(UserModel, orgId, { email, name, role }) {
  const normalized = email.toLowerCase();
  let user = await UserModel.findOne({ email: normalized });
  if (!user) {
    user = await UserModel.create({
      organizationId: orgId,
      name,
      email: normalized,
      password: DEMO_PASSWORD,
      role,
      isActive: true,
      lastLogin: new Date(),
    });
    console.log(`  + user ${normalized} (${role})`);
  }
  return user;
}

async function ensureEmployee(EmployeeModel, orgId, user, data) {
  let emp = await EmployeeModel.findOne({ userId: user._id });
  if (!emp) {
    emp = await EmployeeModel.create({
      organizationId: orgId,
      userId: user._id,
      ...data,
    });
    console.log(`  + employee ${data.employeeCode}`);
  }
  return emp;
}

async function main() {
  const root = loadPeopleflowEnv();
  const dbMod = await hrImport(root, "config/db.js");
  await dbMod.connectDatabase();

  const { UserModel } = await hrImport(root, "models/user.model.js");
  const { OrganizationModel } = await hrImport(root, "models/organization.model.js");
  const { DepartmentModel } = await hrImport(root, "models/department.model.js");
  const { DesignationModel } = await hrImport(root, "models/designation.model.js");
  const { EmployeeModel } = await hrImport(root, "models/employee.model.js");
  const { LeaveTypeModel } = await hrImport(root, "models/leave-type.model.js");
  const { LeaveBalanceModel } = await hrImport(root, "models/leave-balance.model.js");
  const { LeaveRequestModel } = await hrImport(root, "models/leave-request.model.js");
  const { HolidayModel } = await hrImport(root, "models/holiday.model.js");
  const { AttendanceModel } = await hrImport(root, "models/attendance.model.js");
  const { ClientModel } = await hrImport(root, "models/client.model.js");
  const { ClientAgreementModel } = await hrImport(root, "models/client-agreement.model.js");
  const { RecruitmentMandateModel } = await hrImport(root, "models/recruitment-mandate.model.js");
  const { JobModel } = await hrImport(root, "models/job.model.js");
  const { CandidateModel } = await hrImport(root, "models/candidate.model.js");
  const { JobApplicationModel } = await hrImport(root, "models/job-application.model.js");
  const { CandidateSubmissionModel } = await hrImport(root, "models/candidate-submission.model.js");
  const { InterviewModel } = await hrImport(root, "models/interview.model.js");
  const { OfferModel } = await hrImport(root, "models/offer.model.js");
  const { AnnouncementModel } = await hrImport(root, "models/announcement.model.js");
  const { AssetModel } = await hrImport(root, "models/asset.model.js");
  const { AssetAssignmentModel } = await hrImport(root, "models/asset-assignment.model.js");
  const { GoalModel } = await hrImport(root, "models/goal.model.js");

  const admin = await UserModel.findOne({ email: ADMIN_EMAIL });
  if (!admin) {
    console.error(`No HR admin at ${ADMIN_EMAIL}. Run: npm run seed:hr-admin`);
    await dbMod.disconnectDatabase();
    process.exit(1);
  }

  const orgId = admin.organizationId;
  const org = await OrganizationModel.findById(orgId);
  console.log(`[PeopleFlow Demo] Organization: ${org?.name ?? orgId}`);

  if (process.env.SEED_HR_DEMO_RESET === "1" || process.env.SEED_HR_DEMO_RESET === "true") {
    console.log("[PeopleFlow Demo] Resetting org data (keeping super-admin)...");
    await wipeOrgData(orgId, {
      UserModel,
      OfferModel,
      InterviewModel,
      CandidateSubmissionModel,
      JobApplicationModel,
      JoiningModel: (await hrImport(root, "models/joining.model.js")).JoiningModel,
      InvoicePaymentModel: (await hrImport(root, "models/invoice-payment.model.js")).InvoicePaymentModel,
      InvoiceModel: (await hrImport(root, "models/invoice.model.js")).InvoiceModel,
      JobModel,
      RecruitmentMandateModel,
      ClientAgreementModel,
      ClientModel,
      CandidateModel,
      LeaveRequestModel,
      LeaveBalanceModel,
      AttendanceModel,
      AssetAssignmentModel,
      AssetModel,
      GoalModel,
      AnnouncementModel,
      HolidayModel,
      LeaveTypeModel,
      EmployeeModel,
      DepartmentModel,
      DesignationModel,
    });
  }

  console.log("[PeopleFlow Demo] Organization structure...");
  let deptHr = await DepartmentModel.findOne({ organizationId: orgId, code: "DEMO-HR" });
  if (!deptHr) {
    deptHr = await DepartmentModel.create({
      organizationId: orgId,
      name: "Human Resources",
      code: "DEMO-HR",
      description: "Demo HR department",
      headId: admin._id,
    });
  }
  let deptEng = await DepartmentModel.findOne({ organizationId: orgId, code: "DEMO-ENG" });
  if (!deptEng) {
    deptEng = await DepartmentModel.create({
      organizationId: orgId,
      name: "Engineering",
      code: "DEMO-ENG",
      description: "Demo engineering team",
    });
  }

  let desigHr = await DesignationModel.findOne({
    organizationId: orgId,
    departmentId: deptHr._id,
    title: "HR Executive",
  });
  if (!desigHr) {
    desigHr = await DesignationModel.create({
      organizationId: orgId,
      departmentId: deptHr._id,
      title: "HR Executive",
      description: "Demo designation",
    });
  }
  let desigDev = await DesignationModel.findOne({
    organizationId: orgId,
    departmentId: deptEng._id,
    title: "Software Engineer",
  });
  if (!desigDev) {
    desigDev = await DesignationModel.create({
      organizationId: orgId,
      departmentId: deptEng._id,
      title: "Software Engineer",
    });
  }

  console.log("[PeopleFlow Demo] Users & employees...");
  const managerUser = await ensureUser(UserModel, orgId, DEMO_USERS[0]);
  const hrOpsUser = await ensureUser(UserModel, orgId, DEMO_USERS[1]);
  const priyaUser = await ensureUser(UserModel, orgId, DEMO_USERS[2]);
  const amitUser = await ensureUser(UserModel, orgId, DEMO_USERS[3]);

  const managerEmp = await ensureEmployee(EmployeeModel, orgId, managerUser, {
    employeeCode: "DEMO-M001",
    firstName: "Demo",
    lastName: "Manager",
    phone: "919900000001",
    departmentId: deptHr._id,
    designationId: desigHr._id,
    joiningDate: daysAgo(400),
    employmentType: "full_time",
    employmentStatus: "active",
    workLocation: "office",
  });
  await ensureEmployee(EmployeeModel, orgId, hrOpsUser, {
    employeeCode: "DEMO-H001",
    firstName: "Demo",
    lastName: "HR Ops",
    phone: "919900000002",
    departmentId: deptHr._id,
    designationId: desigHr._id,
    managerId: managerEmp._id,
    joiningDate: daysAgo(300),
    employmentType: "full_time",
    employmentStatus: "active",
  });
  const priyaEmp = await ensureEmployee(EmployeeModel, orgId, priyaUser, {
    employeeCode: "DEMO-E001",
    firstName: "Priya",
    lastName: "Singh",
    phone: "919900000003",
    departmentId: deptEng._id,
    designationId: desigDev._id,
    managerId: managerEmp._id,
    joiningDate: daysAgo(200),
    employmentType: "full_time",
    employmentStatus: "active",
  });
  await ensureEmployee(EmployeeModel, orgId, amitUser, {
    employeeCode: "DEMO-E002",
    firstName: "Amit",
    lastName: "Kumar",
    phone: "919900000004",
    departmentId: deptEng._id,
    designationId: desigDev._id,
    managerId: managerEmp._id,
    joiningDate: daysAgo(180),
    employmentType: "full_time",
    employmentStatus: "active",
  });

  if (!deptHr.headId) {
    deptHr.headId = managerUser._id;
    await deptHr.save();
  }

  console.log("[PeopleFlow Demo] Leave & attendance...");
  const year = new Date().getFullYear();
  for (const lt of [
    { name: "Annual Leave", code: "DEMO-AL", maxDays: 18 },
    { name: "Sick Leave", code: "DEMO-SL", maxDays: 10 },
  ]) {
    let leaveType = await LeaveTypeModel.findOne({ organizationId: orgId, code: lt.code });
    if (!leaveType) {
      leaveType = await LeaveTypeModel.create({ organizationId: orgId, ...lt, isPaid: true });
    }
    for (const emp of [managerEmp, priyaEmp]) {
      const exists = await LeaveBalanceModel.findOne({
        organizationId: orgId,
        employeeId: emp._id,
        leaveTypeId: leaveType._id,
        year,
      });
      if (!exists) {
        await LeaveBalanceModel.create({
          organizationId: orgId,
          employeeId: emp._id,
          leaveTypeId: leaveType._id,
          year,
          total: lt.maxDays,
          used: 1,
          remaining: lt.maxDays - 1,
        });
      }
    }
  }

  const annualType = await LeaveTypeModel.findOne({ organizationId: orgId, code: "DEMO-AL" });
  if (annualType) {
    const pending = await LeaveRequestModel.findOne({
      organizationId: orgId,
      employeeId: priyaEmp._id,
      reason: "Demo pending leave for approval flow",
    });
    if (!pending) {
      await LeaveRequestModel.create({
        organizationId: orgId,
        employeeId: priyaEmp._id,
        leaveTypeId: annualType._id,
        startDate: daysAgo(-14),
        endDate: daysAgo(-12),
        totalDays: 2,
        reason: "Demo pending leave for approval flow",
        status: "pending",
      });
    }
  }

  if (!(await HolidayModel.findOne({ organizationId: orgId, name: "Demo Republic Day" }))) {
    await HolidayModel.create({
      organizationId: orgId,
      name: "Demo Republic Day",
      date: new Date(year, 0, 26),
      region: "Company-wide",
    });
  }

  for (const offset of [0, 1, 2]) {
    const day = daysAgo(offset);
    const exists = await AttendanceModel.findOne({
      organizationId: orgId,
      employeeId: priyaEmp._id,
      date: day,
    });
    if (!exists) {
      await AttendanceModel.create({
        organizationId: orgId,
        employeeId: priyaEmp._id,
        date: day,
        checkIn: atHour(day, 9, 45),
        checkOut: atHour(day, 18, 15),
        workingMinutes: 480,
        status: offset === 1 ? "late" : "present",
      });
    }
  }

  console.log("[PeopleFlow Demo] Clients & recruitment...");
  let client = await ClientModel.findOne({ organizationId: orgId, companyName: "Demo Client Alpha" });
  if (!client) {
    client = await ClientModel.create({
      organizationId: orgId,
      companyName: "Demo Client Alpha",
      industry: "Technology",
      city: "Patna",
      state: "Bihar",
      country: "India",
      status: "ACTIVE",
      onboardingStatus: "COMPLETED",
      KYCStatus: "VERIFIED",
      GSTNumber: "10DEMO0000A1Z5",
      contactPersons: [
        {
          name: "Ravi Mehta",
          designation: "HR Head",
          email: "ravi@democlientalpha.example",
          phone: "919988877766",
        },
      ],
      createdBy: admin._id,
    });
  }

  let agreement = await ClientAgreementModel.findOne({
    organizationId: orgId,
    agreementNumber: "DEMO-AGR-001",
  });
  if (!agreement) {
    agreement = await ClientAgreementModel.create({
      organizationId: orgId,
      clientId: client._id,
      agreementNumber: "DEMO-AGR-001",
      effectiveDate: daysAgo(60),
      expiryDate: daysAgo(-365),
      status: "ACTIVE",
      signedDate: daysAgo(58),
      createdBy: admin._id,
    });
  }

  let mandate = await RecruitmentMandateModel.findOne({
    organizationId: orgId,
    mandateNumber: "DEMO-MND-001",
  });
  if (!mandate) {
    mandate = await RecruitmentMandateModel.create({
      organizationId: orgId,
      clientId: client._id,
      agreementId: agreement._id,
      mandateNumber: "DEMO-MND-001",
      position: "Senior React Developer",
      department: "Engineering",
      employmentType: "full_time",
      vacancies: 2,
      location: "Patna / Hybrid",
      workMode: "HYBRID",
      status: "OPEN",
      isPublic: true,
      publishedAt: daysAgo(10),
      priority: "HIGH",
      mustHaveSkills: ["React", "TypeScript", "Node.js"],
      recruitmentFee: 8.33,
      feeType: "PERCENTAGE",
      createdBy: admin._id,
      assignedRecruiters: [hrOpsUser._id],
    });
  }

  if (!(await JobModel.findOne({ organizationId: orgId, mandateId: mandate._id }))) {
    await JobModel.create({
      organizationId: orgId,
      mandateId: mandate._id,
      title: "Senior React Developer",
      departmentId: deptEng._id,
      departmentName: "Engineering",
      location: "Patna",
      employmentType: "full_time",
      description: "Demo public job for careers page and pipeline testing.",
      status: "open",
      vacancies: 2,
    });
  }

  const candidates = [
    {
      number: "DEMO-CAND-001",
      name: "Neha Verma",
      email: "neha.verma.demo@example.com",
      phone: "919911122233",
      status: "INTERVIEWING",
    },
    {
      number: "DEMO-CAND-002",
      name: "Rohit Das",
      email: "rohit.das.demo@example.com",
      phone: "919922233344",
      status: "SCREENING",
    },
    {
      number: "DEMO-CAND-003",
      name: "Sana Khan",
      email: "sana.khan.demo@example.com",
      phone: "919933344455",
      status: "SUBMITTED",
    },
  ];

  const candDocs = [];
  for (const c of candidates) {
    let doc = await CandidateModel.findOne({ organizationId: orgId, email: c.email });
    if (!doc) {
      doc = await CandidateModel.create({
        organizationId: orgId,
        candidateNumber: c.number,
        firstName: c.name.split(" ")[0],
        lastName: c.name.split(" ").slice(1).join(" "),
        name: c.name,
        email: c.email,
        phone: c.phone,
        source: "NAUKRI",
        status: c.status,
        totalExperience: 5,
        currentCompany: "Acme Tech",
        currentDesignation: "Developer",
        skills: ["React", "JavaScript"],
        consent: { given: true, date: new Date(), method: "EMAIL" },
        createdBy: hrOpsUser._id,
      });
    }
    candDocs.push(doc);
  }

  let jobApp = await JobApplicationModel.findOne({
    organizationId: orgId,
    applicationNumber: "DEMO-APP-001",
  });
  if (!jobApp) {
    jobApp = await JobApplicationModel.create({
      organizationId: orgId,
      mandateId: mandate._id,
      candidateId: candDocs[0]._id,
      applicationNumber: "DEMO-APP-001",
      source: "CAREER_PAGE",
      status: "RESUME_SCREENING",
    });
  }

  let submission = await CandidateSubmissionModel.findOne({
    organizationId: orgId,
    candidateId: candDocs[0]._id,
    mandateId: mandate._id,
  });
  if (!submission) {
    submission = await CandidateSubmissionModel.create({
      organizationId: orgId,
      candidateId: candDocs[0]._id,
      clientId: client._id,
      mandateId: mandate._id,
      submittedBy: hrOpsUser._id,
      submittedAt: daysAgo(3),
      status: "SHORTLISTED",
      currentCompany: "Acme Tech",
      currentDesignation: "Senior Developer",
      totalExperience: 5,
      expectedCTC: 1200000,
      noticePeriod: "30 days",
      fitReasons: ["Strong React", "Patna based"],
    });
  }

  if (
    !(await InterviewModel.findOne({
      organizationId: orgId,
      submissionId: submission._id,
      round: 1,
    }))
  ) {
    await InterviewModel.create({
      organizationId: orgId,
      candidateId: candDocs[0]._id,
      mandateId: mandate._id,
      submissionId: submission._id,
      round: 1,
      interviewType: "VIDEO",
      scheduledAt: daysAgo(-2),
      duration: 45,
      interviewers: [managerUser._id],
      status: "SCHEDULED",
    });
  }

  if (!(await OfferModel.findOne({ organizationId: orgId, submissionId: submission._id }))) {
    await OfferModel.create({
      organizationId: orgId,
      candidateId: candDocs[0]._id,
      mandateId: mandate._id,
      submissionId: submission._id,
      offeredDesignation: "Senior React Developer",
      offeredCTC: 1150000,
      offerDate: daysAgo(1),
      offerStatus: "DRAFT",
      expectedJoiningDate: daysAgo(-30),
    });
  }

  console.log("[PeopleFlow Demo] Announcements, assets, goals...");
  if (!(await AnnouncementModel.findOne({ organizationId: orgId, title: "Welcome to PeopleFlow demo data" }))) {
    await AnnouncementModel.create({
      organizationId: orgId,
      title: "Welcome to PeopleFlow demo data",
      content: "This announcement was seeded for testing feeds and notifications.",
      category: "general",
      priority: "normal",
      createdBy: admin._id,
      publishDate: new Date(),
      isPublished: true,
      targetAudience: [],
    });
  }

  let asset = await AssetModel.findOne({ organizationId: orgId, assetCode: "DEMO-LAP-001" });
  if (!asset) {
    asset = await AssetModel.create({
      organizationId: orgId,
      name: "Demo MacBook Pro",
      assetCode: "DEMO-LAP-001",
      category: "laptop",
      serialNumber: "SN-DEMO-001",
      condition: "good",
      status: "assigned",
    });
  }

  if (
    !(await AssetAssignmentModel.findOne({
      organizationId: orgId,
      assetId: asset._id,
      employeeId: priyaEmp._id,
      status: "active",
    }))
  ) {
    await AssetAssignmentModel.create({
      organizationId: orgId,
      assetId: asset._id,
      employeeId: priyaEmp._id,
      assignedDate: daysAgo(30),
      assignedBy: admin._id,
      status: "active",
    });
  }

  if (!(await GoalModel.findOne({ organizationId: orgId, title: "Demo Q1 delivery goal" }))) {
    await GoalModel.create({
      organizationId: orgId,
      employeeId: priyaEmp._id,
      title: "Demo Q1 delivery goal",
      description: "Complete sprint milestones for demo performance module.",
      progress: 40,
      deadline: daysAgo(-90),
      status: "in_progress",
    });
  }

  await dbMod.disconnectDatabase();

  console.log("");
  console.log("[PeopleFlow Demo] Done. Log in at https://www.zentroverse.com/hr/login");
  console.log("");
  console.log("  Role          Email                           Password");
  console.log("  ------------  ------------------------------  ----------");
  console.log(`  SUPER_ADMIN   ${ADMIN_EMAIL.padEnd(30)}  ${DEMO_PASSWORD}`);
  for (const u of DEMO_USERS) {
    console.log(`  ${u.role.padEnd(12)}  ${u.email.padEnd(30)}  ${DEMO_PASSWORD}`);
  }
  console.log("");
  console.log("Modules seeded: org, departments, designations, employees, leave, attendance,");
  console.log("clients, agreements, mandates, jobs, candidates, applications, submissions,");
  console.log("interviews, offers, announcements, assets, goals.");
  console.log("");
  console.log("Re-run from scratch: SEED_HR_DEMO_RESET=1 npm run seed:hr-demo");
}

main().catch(async (err) => {
  console.error("[PeopleFlow Demo] Failed:", err instanceof Error ? err.message : err);
  process.exit(1);
});
