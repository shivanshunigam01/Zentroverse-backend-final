import { Types } from "mongoose"
import { USER_ROLES } from "../constants/roles.js"
import { GuaranteeFollowUpModel } from "../models/guarantee-follow-up.model.js"
import { InvoiceModel } from "../models/invoice.model.js"
import { UserModel } from "../models/user.model.js"
import { notifyOnce } from "../notifications/notify.js"

const REMINDER_INTERVAL_MS = 15 * 60 * 1000

function dayKey(date: Date) {
  return date.toISOString().slice(0, 10)
}

function idOf(value: unknown): string {
  if (!value) return ""
  if (typeof value === "object" && "_id" in value) return String((value as { _id: unknown })._id)
  return String(value)
}

function uniqueIds(values: unknown[]) {
  return [...new Set(values.map(idOf).filter(Boolean))]
}

function reminderPhase(due: Date, now: Date) {
  const dueKey = dayKey(due)
  const today = dayKey(now)
  const tomorrow = new Date(`${today}T00:00:00.000Z`)
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)
  const tomorrowKey = dayKey(tomorrow)
  if (dueKey === tomorrowKey) return "due-tomorrow"
  if (dueKey === today) return "due-today"
  if (dueKey < today) return "overdue"
  return ""
}

function collectionPhase(due: Date, now: Date) {
  const basicPhase = reminderPhase(due, now)
  if (basicPhase !== "overdue") return basicPhase
  const dueMidnight = new Date(`${dayKey(due)}T00:00:00.000Z`).getTime()
  const todayMidnight = new Date(`${dayKey(now)}T00:00:00.000Z`).getTime()
  const daysOverdue = Math.floor((todayMidnight - dueMidnight) / 86_400_000)
  if (daysOverdue <= 7) return "overdue-early"
  if (daysOverdue <= 14) return "overdue-account-escalation"
  if (daysOverdue <= 30) return "overdue-management-escalation"
  return "overdue-leadership-escalation"
}

async function notifyAudience(input: {
  organizationId: string
  userIds: unknown[]
  title: string
  message: string
  link: string
  key: string
}) {
  await Promise.all(uniqueIds(input.userIds).map((userId) => notifyOnce({
    userId,
    organizationId: input.organizationId,
    title: input.title,
    message: input.message,
    type: "recruitment",
    link: input.link,
    metadata: { dedupeKey: input.key },
  })))
}

async function adminIds(organizationId: unknown) {
  return (await UserModel.find({
    organizationId: new Types.ObjectId(String(organizationId)),
    isActive: true,
    role: { $in: [USER_ROLES.SUPER_ADMIN, USER_ROLES.HR_ADMIN, USER_ROLES.MANAGER] },
  }).select("_id").lean()).map((user) => user._id)
}

/** Notify owners as invoices and placement guarantee check-ins approach or pass their due dates. */
export async function runPlacementReminders(now = new Date()) {
  const today = dayKey(now)
  const tomorrow = new Date(`${today}T00:00:00.000Z`)
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)
  const tomorrowEnd = new Date(`${dayKey(tomorrow)}T23:59:59.999Z`)

  const invoices = await InvoiceModel.find({
    dueDate: { $ne: null, $lte: tomorrowEnd },
    outstandingAmount: { $gt: 0 },
    status: { $nin: ["PAID", "CANCELLED"] },
  }).select("_id organizationId invoiceNumber dueDate outstandingAmount clientId").populate({ path: "clientId", select: "companyName" }).lean()

  const invoiceAudience = new Map<string, unknown[]>()
  for (const invoice of invoices) {
    if (!(invoice.dueDate instanceof Date)) continue
    const phase = collectionPhase(invoice.dueDate, now)
    if (!phase) continue
    const orgId = String(invoice.organizationId)
    if (!invoiceAudience.has(orgId)) invoiceAudience.set(orgId, await adminIds(invoice.organizationId))
    const client = invoice.clientId as unknown as { companyName?: string } | null
    const due = dayKey(invoice.dueDate)
    const isOverdue = phase.startsWith("overdue")
    const escalationMessage = phase === "overdue-leadership-escalation"
      ? "Escalate to leadership for a documented service-hold or recovery decision under the agreement."
      : phase === "overdue-management-escalation"
        ? "Escalate to the recruitment and finance managers and record a resolution plan."
        : phase === "overdue-account-escalation"
          ? "Escalate to the billing contact and account owner and agree a dated resolution plan."
          : "Resend the invoice, request a payment date, and log any dispute."
    await notifyAudience({
      organizationId: orgId,
      userIds: invoiceAudience.get(orgId) ?? [],
      title: phase === "overdue-leadership-escalation" ? "Invoice needs leadership escalation" : phase === "overdue-management-escalation" ? "Invoice needs management escalation" : phase === "overdue-account-escalation" ? "Invoice collection needs account escalation" : isOverdue ? "Invoice payment is overdue" : phase === "due-today" ? "Invoice payment is due today" : "Invoice payment is due tomorrow",
      message: `${invoice.invoiceNumber} for ${client?.companyName || "client"} has ${Number(invoice.outstandingAmount).toFixed(2)} outstanding; due ${due}. ${isOverdue ? escalationMessage : "Confirm receipt and expected payment."}`,
      link: "/recruitment/invoices",
      key: `invoice-due:${invoice._id}:${due}:${phase}`,
    })
  }

  const guarantees = await GuaranteeFollowUpModel.find({
    guaranteeEndDate: { $gte: new Date(`${today}T00:00:00.000Z`) },
  }).select("_id organizationId candidateId joiningDate guaranteeEndDate milestone30 milestone60 milestone90 milestone30Enabled milestone60Enabled milestone90Enabled mandateId")
    .populate({ path: "candidateId", select: "name firstName lastName" })
    .populate({ path: "mandateId", select: "position assignedRecruiters createdBy" })
    .lean()

  const adminAudience = new Map<string, unknown[]>()
  for (const followUp of guarantees) {
    if (!(followUp.joiningDate instanceof Date)) continue
    const candidate = followUp.candidateId as unknown as { name?: string; firstName?: string; lastName?: string } | null
    const mandate = followUp.mandateId as unknown as { position?: string; assignedRecruiters?: unknown[]; createdBy?: unknown } | null
    const candidateName = candidate?.name || `${candidate?.firstName ?? ""} ${candidate?.lastName ?? ""}`.trim() || "Candidate"
    for (const milestone of [30, 60, 90] as const) {
      const enabled = followUp[`milestone${milestone}Enabled` as const]
      const record = followUp[`milestone${milestone}` as const]
      if (!enabled || record?.status === "COMPLETED") continue
      const due = new Date(followUp.joiningDate)
      due.setUTCDate(due.getUTCDate() + milestone)
      const phase = reminderPhase(due, now)
      if (!phase || dayKey(due) > dayKey(followUp.guaranteeEndDate)) continue
      const orgId = String(followUp.organizationId)
      if (!adminAudience.has(orgId)) adminAudience.set(orgId, await adminIds(followUp.organizationId))
      const owners = [...(mandate?.assignedRecruiters ?? []), mandate?.createdBy, ...(adminAudience.get(orgId) ?? [])]
      const link = "/recruitment/guarantees"
      await notifyAudience({
        organizationId: orgId,
        userIds: owners,
        title: phase === "overdue" ? `${milestone}-day placement check-in is overdue` : `${milestone}-day placement check-in ${phase === "due-today" ? "is due today" : "is due tomorrow"}`,
        message: `Record the client and candidate retention check-in for ${candidateName} · ${mandate?.position || "placement"} by ${dayKey(due)}.`,
        link,
        key: `guarantee-checkin:${followUp._id}:${milestone}:${dayKey(due)}:${phase}`,
      })
    }
  }
}

export function startPlacementReminders() {
  const run = () => void runPlacementReminders().catch((error) => {
    console.error("[Recruitment] Failed to process placement reminders", error)
  })
  run()
  return setInterval(run, REMINDER_INTERVAL_MS)
}
