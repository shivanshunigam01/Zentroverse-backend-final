import {
  MAX_FREE_REPLACEMENTS,
  REPLACEMENT_ELIGIBILITY_LABELS,
  REPLACEMENT_OPEN_STATUSES,
  REPLACEMENT_REASON_LABELS,
  REPLACEMENT_STATUS_LABELS,
  isClosedReplacementStatus,
  isOpenReplacementStatus,
  type ReplacementEligibilityResult,
  type ReplacementReason,
  type ReplacementStatus,
} from "../constants/replacements.js"
import { DEFAULT_REPLACEMENT_PERIOD_DAYS } from "../constants/agreements.js"
import { MESSAGES } from "../constants/messages.js"
import { CandidateModel } from "../models/candidate.model.js"
import { ClientAgreementModel } from "../models/client-agreement.model.js"
import { ClientModel } from "../models/client.model.js"
import { GuaranteeFollowUpModel } from "../models/guarantee-follow-up.model.js"
import { InvoiceModel } from "../models/invoice.model.js"
import { InvoicePaymentModel } from "../models/invoice-payment.model.js"
import { JoiningModel } from "../models/joining.model.js"
import { RecruitmentMandateModel } from "../models/recruitment-mandate.model.js"
import { ReplacementCaseModel } from "../models/replacement-case.model.js"
import type { AuthContext } from "../types/auth.js"
import { recordActivity } from "../utils/activity.js"
import { recordAudit } from "../utils/audit.js"
import { AppError } from "../utils/app-error.js"
import { utcDateFromKey } from "../utils/dates.js"
import { parseObjectId } from "../utils/object-id.js"
import { paginationMeta, paginationSkip } from "../utils/pagination.js"
import { evaluateReplacementEligibility } from "../utils/replacement-eligibility.js"
import { applySearch, mongoSort, resolvedSearch } from "../utils/search.js"
import type {
  CreateReplacementInput,
  ReplacementListQueryInput,
  UpdateReplacementInput,
} from "../validators/replacement.validators.js"

const REPLACEMENT_POPULATE = [
  { path: "candidateId", select: "firstName lastName name email candidateNumber" },
  { path: "replacementCandidateId", select: "firstName lastName name email candidateNumber" },
  { path: "joiningId", select: "joiningDate status" },
  { path: "mandateId", select: "mandateNumber position status" },
  { path: "clientId", select: "companyName" },
] as const

function asId(value: unknown) {
  if (!value) return ""
  if (typeof value === "object" && value !== null && "_id" in value) {
    return String((value as { _id: unknown })._id)
  }
  return String(value)
}

function isoOf(value: unknown) {
  if (value instanceof Date) return value.toISOString()
  if (typeof value === "string" && value) return new Date(value).toISOString()
  return ""
}

function dateKeyOf(value: unknown) {
  const iso = isoOf(value)
  return iso ? iso.slice(0, 10) : ""
}

function dateFromKey(value?: string | null) {
  if (!value) return null
  return utcDateFromKey(value)
}

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function isDuplicateKey(error: unknown) {
  return typeof error === "object" && error !== null && "code" in error && error.code === 11000
}

function toCandidateRef(value: unknown) {
  if (!value) return null
  if (typeof value === "object" && value !== null && ("name" in value || "email" in value)) {
    const candidate = value as {
      _id: unknown
      name?: string
      firstName?: string
      lastName?: string
      email?: string
      candidateNumber?: string
    }
    const name =
      String(candidate.name ?? "").trim() ||
      `${candidate.firstName ?? ""} ${candidate.lastName ?? ""}`.trim()
    return {
      id: String(candidate._id),
      name,
      email: candidate.email ?? "",
      candidateNumber: candidate.candidateNumber ?? "",
    }
  }
  return { id: String(value), name: "", email: "", candidateNumber: "" }
}

function toMandateRef(value: unknown) {
  if (!value) return null
  if (typeof value === "object" && value !== null && ("mandateNumber" in value || "_id" in value)) {
    const mandate = value as {
      _id: unknown
      mandateNumber?: string
      position?: string
      status?: string
    }
    return {
      id: String(mandate._id),
      mandateNumber: mandate.mandateNumber ?? "",
      position: mandate.position ?? "",
      status: mandate.status ?? "",
    }
  }
  return { id: String(value), mandateNumber: "", position: "", status: "" }
}

function toJoiningRef(value: unknown) {
  if (!value) return null
  if (typeof value === "object" && value !== null && ("joiningDate" in value || "_id" in value)) {
    const joining = value as { _id: unknown; joiningDate?: unknown; status?: string }
    return {
      id: String(joining._id),
      joiningDate: dateKeyOf(joining.joiningDate),
      status: joining.status ?? "",
    }
  }
  return { id: String(value), joiningDate: "", status: "" }
}

function toClientRef(value: unknown) {
  if (!value) return null
  if (typeof value === "object" && value !== null && ("companyName" in value || "_id" in value)) {
    const client = value as { _id: unknown; companyName?: string }
    return { id: String(client._id), companyName: client.companyName ?? "" }
  }
  return { id: String(value), companyName: "" }
}

export function toPublicReplacement(doc: Record<string, unknown>) {
  const candidate = toCandidateRef(doc.candidateId)
  const replacementCandidate = doc.replacementCandidateId
    ? toCandidateRef(doc.replacementCandidateId)
    : null
  const joining = toJoiningRef(doc.joiningId)
  const mandate = toMandateRef(doc.mandateId)
  const client = toClientRef(doc.clientId)
  const replacementReason = (String(doc.replacementReason ?? "OTHER") as ReplacementReason) || "OTHER"
  const status = (String(doc.status ?? "REPLACEMENT_REQUESTED") as ReplacementStatus) || "REPLACEMENT_REQUESTED"
  const eligibilityResult = String(doc.eligibilityResult ?? "") as ReplacementEligibilityResult | ""

  return {
    id: String(doc._id ?? doc.id),
    organizationId: asId(doc.organizationId),
    candidateId: candidate?.id ?? asId(doc.candidateId),
    candidate,
    mandateId: mandate?.id ?? asId(doc.mandateId),
    mandate,
    clientId: client?.id ?? asId(doc.clientId),
    client,
    joiningId: joining?.id ?? asId(doc.joiningId),
    joining,
    replacementReason,
    replacementReasonLabel: REPLACEMENT_REASON_LABELS[replacementReason] ?? replacementReason,
    replacementRequestedDate: dateKeyOf(doc.replacementRequestedDate),
    status,
    statusLabel: REPLACEMENT_STATUS_LABELS[status] ?? status,
    replacementCandidateId: replacementCandidate?.id ?? (doc.replacementCandidateId ? asId(doc.replacementCandidateId) : ""),
    replacementCandidate,
    eligibilityResult,
    eligibilityResultLabel: eligibilityResult
      ? (REPLACEMENT_ELIGIBILITY_LABELS[eligibilityResult as ReplacementEligibilityResult] ??
        eligibilityResult)
      : "",
    eligibilityReasons: Array.isArray(doc.eligibilityReasons)
      ? doc.eligibilityReasons.map((item) => String(item))
      : [],
    eligibilityBasis: (() => {
      const basis = doc.eligibilityBasis && typeof doc.eligibilityBasis === "object"
        ? doc.eligibilityBasis as Record<string, unknown>
        : {}
      return {
        agreementNumber: String(basis.agreementNumber ?? ""),
        agreementVerified: Boolean(basis.agreementVerified),
        replacementPeriodDays: basis.replacementPeriodDays == null ? null : Number(basis.replacementPeriodDays),
        guaranteeEndDate: dateKeyOf(basis.guaranteeEndDate),
        guaranteeRecordMatches: Boolean(basis.guaranteeRecordMatches),
        invoicePaymentStatus: String(basis.invoicePaymentStatus ?? "UNKNOWN"),
        priorFreeReplacements: Number(basis.priorFreeReplacements ?? 0),
        evaluatedAt: isoOf(basis.evaluatedAt),
        evaluatedBy: asId(basis.evaluatedBy),
        evidenceUrl: String(basis.evidenceUrl ?? ""),
        reviewNotes: String(basis.reviewNotes ?? ""),
      }
    })(),
    freeReplacement: Boolean(doc.freeReplacement),
    exclusions:
      doc.exclusions && typeof doc.exclusions === "object"
        ? (doc.exclusions as Record<string, boolean>)
        : {},
    manualOverride: Boolean(doc.manualOverride),
    closedAt: dateKeyOf(doc.closedAt),
    remarks: String(doc.remarks ?? ""),
    createdAt: isoOf(doc.createdAt),
    updatedAt: isoOf(doc.updatedAt),
  }
}

async function requireReplacement(organizationId: string, id: string) {
  parseObjectId(id)
  const replacement = await ReplacementCaseModel.findOne({ _id: id, organizationId }).populate([
    ...REPLACEMENT_POPULATE,
  ])
  if (!replacement) {
    throw AppError.notFound(MESSAGES.REPLACEMENT_NOT_FOUND)
  }
  return replacement
}

async function assertCandidate(organizationId: string, candidateId: string) {
  parseObjectId(candidateId, "Invalid candidate")
  const candidate = await CandidateModel.findOne({ _id: candidateId, organizationId }).select(
    "_id name firstName lastName email candidateNumber"
  )
  if (!candidate) {
    throw AppError.badRequest(MESSAGES.CANDIDATE_NOT_IN_ORGANIZATION)
  }
  return candidate
}

async function assertMandate(organizationId: string, mandateId: string) {
  parseObjectId(mandateId, "Invalid mandate")
  const mandate = await RecruitmentMandateModel.findOne({ _id: mandateId, organizationId }).select(
    "_id mandateNumber position status clientId agreementId replacementPeriodDays"
  )
  if (!mandate) {
    throw AppError.badRequest(MESSAGES.MANDATE_NOT_FOUND)
  }
  return mandate
}

async function assertClient(organizationId: string, clientId: string) {
  parseObjectId(clientId, "Invalid client")
  const client = await ClientModel.findOne({ _id: clientId, organizationId }).select("_id companyName")
  if (!client) {
    throw AppError.badRequest(MESSAGES.CLIENT_NOT_IN_ORGANIZATION)
  }
  return client
}

async function assertJoining(organizationId: string, joiningId: string) {
  parseObjectId(joiningId, "Invalid joining")
  const joining = await JoiningModel.findOne({ _id: joiningId, organizationId }).select(
    "_id candidateId mandateId clientId joiningDate status"
  )
  if (!joining) {
    throw AppError.badRequest(MESSAGES.JOINING_NOT_FOUND)
  }
  return joining
}

async function calculateEligibility(input: {
  organizationId: string
  joining: Awaited<ReturnType<typeof assertJoining>>
  mandate: Awaited<ReturnType<typeof assertMandate>>
  requestedDate: Date
  reason: ReplacementReason
  exclusions?: CreateReplacementInput["exclusions"]
  manualOverride: boolean
  evidenceUrl?: string
  reviewNotes?: string
  reviewedBy: string
  excludeCaseId?: string
}) {
  const agreement = input.mandate.agreementId
    ? await ClientAgreementModel.findOne({ _id: input.mandate.agreementId, organizationId: input.organizationId, clientId: input.joining.clientId })
        .select("agreementNumber status effectiveDate expiryDate signedDate signedDocument replacementPeriodDays")
    : null
  const signedDocument = agreement?.signedDocument as { fileUrl?: string } | undefined
  const periodDays = Number(agreement?.replacementPeriodDays ?? input.mandate.replacementPeriodDays ?? DEFAULT_REPLACEMENT_PERIOD_DAYS)
  const agreementVerified = Boolean(agreement && agreement.status === "ACTIVE" && agreement.signedDate && signedDocument?.fileUrl && agreement.effectiveDate <= input.requestedDate && (!agreement.expiryDate || agreement.expiryDate >= input.requestedDate))
  const guarantee = await GuaranteeFollowUpModel.findOne({ organizationId: input.organizationId, joiningId: input.joining._id })
    .select("guaranteeStartDate guaranteeEndDate replacementPeriodDays")
  const expectedEndDate = new Date(input.joining.joiningDate ?? new Date())
  expectedEndDate.setUTCDate(expectedEndDate.getUTCDate() + periodDays)
  const mandatePeriodMatches = Number(input.mandate.replacementPeriodDays ?? periodDays) === periodDays
  const guaranteeRecordMatches = guarantee
    ? mandatePeriodMatches && Number(guarantee.replacementPeriodDays ?? -1) === periodDays && dateKeyOf(guarantee.guaranteeEndDate) === dateKeyOf(expectedEndDate) && dateKeyOf(input.requestedDate) >= dateKeyOf(guarantee.guaranteeStartDate) && dateKeyOf(input.requestedDate) <= dateKeyOf(guarantee.guaranteeEndDate)
    : agreementVerified && mandatePeriodMatches

  const invoices = await InvoiceModel.find({ organizationId: input.organizationId, joiningId: input.joining._id, status: { $ne: "CANCELLED" } }).select("_id outstandingAmount dueDate amount")
  let invoicePaidOnTime: boolean | null = invoices.length ? true : null
  if (invoices.length) {
    const payments = await InvoicePaymentModel.find({ organizationId: input.organizationId, invoiceId: { $in: invoices.map((invoice) => invoice._id) }, status: "COMPLETED" }).select("invoiceId amount paymentDate")
    let unknown = false
    let late = false
    for (const invoice of invoices) {
      const paymentsForInvoice = payments.filter((payment) => String(payment.invoiceId) === String(invoice._id))
      if (!invoice.dueDate || paymentsForInvoice.length === 0) { unknown = true; continue }
      const paidByDue = paymentsForInvoice.filter((payment) => payment.paymentDate <= invoice.dueDate!).reduce((sum, payment) => sum + Number(payment.amount), 0)
      if (paidByDue + 0.01 < Number(invoice.amount ?? 0)) {
        if (Number(invoice.outstandingAmount ?? 0) > 0 && invoice.dueDate >= input.requestedDate) unknown = true
        else late = true
      }
    }
    invoicePaidOnTime = late ? false : unknown ? null : true
  }
  const priorFreeReplacements = await ReplacementCaseModel.countDocuments({ organizationId: input.organizationId, joiningId: input.joining._id, ...(input.excludeCaseId ? { _id: { $ne: input.excludeCaseId } } : {}), $or: [{ freeReplacementUsed: true }, { freeReplacement: true, status: "REPLACED" }] })
  const eligibility = evaluateReplacementEligibility({
    joiningDate: input.joining.joiningDate ?? new Date(), requestedDate: input.requestedDate, replacementPeriodDays: periodDays,
    reason: input.reason, exclusions: input.exclusions, invoicePaidOnTime, freeReplacementsUsed: priorFreeReplacements,
    maxFreeReplacements: MAX_FREE_REPLACEMENTS, manualOverride: input.manualOverride, agreementVerified, guaranteeRecordMatches,
  })
  const invoicePaymentStatus = (invoicePaidOnTime === true
    ? "PAID_ON_TIME"
    : invoicePaidOnTime === false
      ? "LATE"
      : invoices.length
        ? "PENDING"
        : "NO_INVOICE") as "PAID_ON_TIME" | "LATE" | "PENDING" | "NO_INVOICE"
  return {
    eligibility,
    eligibilityBasis: {
      agreementNumber: String(agreement?.agreementNumber ?? ""), agreementVerified, replacementPeriodDays: periodDays,
      guaranteeEndDate: guarantee?.guaranteeEndDate ?? expectedEndDate, guaranteeRecordMatches,
      invoicePaymentStatus,
      priorFreeReplacements, evaluatedAt: new Date(), evaluatedBy: input.reviewedBy,
      evidenceUrl: input.evidenceUrl ?? "", reviewNotes: input.reviewNotes ?? "",
    },
  }
}

async function assertNoOpenReplacement(organizationId: string, joiningId: string, excludeId?: string) {
  const existing = await ReplacementCaseModel.findOne({
    organizationId,
    joiningId,
    status: { $in: [...REPLACEMENT_OPEN_STATUSES] },
    ...(excludeId ? { _id: { $ne: excludeId } } : {}),
  }).select("_id")
  if (existing) {
    throw AppError.conflict(MESSAGES.REPLACEMENT_EXISTS)
  }
}

function resolveStatus(status: ReplacementStatus | undefined, hasReplacementCandidate: boolean): ReplacementStatus {
  if (status) return status
  return hasReplacementCandidate ? "REPLACEMENT_IN_PROGRESS" : "REPLACEMENT_REQUESTED"
}

function resolveClosedAt(status: ReplacementStatus, closedAt?: string | null, current?: Date | null) {
  if (isClosedReplacementStatus(status)) {
    return dateFromKey(closedAt) ?? current ?? new Date()
  }
  if (closedAt !== undefined) return dateFromKey(closedAt)
  return null
}

export async function listReplacements(auth: AuthContext, query: ReplacementListQueryInput) {
  const filter: Record<string, unknown> = { organizationId: auth.organizationId }

  if (query.candidateId) {
    parseObjectId(query.candidateId, "Invalid candidate")
    filter.candidateId = query.candidateId
  }
  if (query.joiningId) {
    parseObjectId(query.joiningId, "Invalid joining")
    filter.joiningId = query.joiningId
  }
  if (query.mandateId) {
    parseObjectId(query.mandateId, "Invalid mandate")
    filter.mandateId = query.mandateId
  }
  if (query.clientId) {
    parseObjectId(query.clientId, "Invalid client")
    filter.clientId = query.clientId
  }
  if (query.status) filter.status = query.status

  applySearch(filter, ["remarks"], resolvedSearch(query))

  const [items, total] = await Promise.all([
    ReplacementCaseModel.find(filter)
      .populate([...REPLACEMENT_POPULATE])
      .sort(mongoSort(query, { replacementRequestedDate: -1, createdAt: -1 }))
      .skip(paginationSkip(query))
      .limit(query.limit)
      .lean(),
    ReplacementCaseModel.countDocuments(filter),
  ])

  return {
    items: items.map((item) => toPublicReplacement(item as Record<string, unknown>)),
    ...paginationMeta(total, query),
  }
}

export async function getReplacement(auth: AuthContext, id: string) {
  const replacement = await requireReplacement(auth.organizationId, id)
  return toPublicReplacement(replacement.toObject() as Record<string, unknown>)
}

export async function createReplacement(auth: AuthContext, input: CreateReplacementInput) {
  const joining = await assertJoining(auth.organizationId, input.joiningId)
  if (joining.status !== "JOINED") {
    throw AppError.badRequest("Replacement eligibility can only be evaluated for a confirmed joining")
  }
  const candidateId = input.candidateId ?? String(joining.candidateId)
  const mandateId = input.mandateId ?? String(joining.mandateId)
  const clientId = input.clientId ?? String(joining.clientId)

  if (String(joining.candidateId) !== candidateId) {
    throw AppError.badRequest(MESSAGES.JOINING_CANDIDATE_MISMATCH)
  }
  if (String(joining.mandateId) !== mandateId) {
    throw AppError.badRequest(MESSAGES.JOINING_MANDATE_MISMATCH)
  }
  if (String(joining.clientId) !== clientId) {
    throw AppError.badRequest(MESSAGES.JOINING_CLIENT_MISMATCH)
  }

  const candidate = await assertCandidate(auth.organizationId, candidateId)
  const mandate = await assertMandate(auth.organizationId, mandateId)
  await assertClient(auth.organizationId, clientId)

  let replacementCandidateId: typeof candidate._id | null = null
  if (input.replacementCandidateId) {
    if (input.replacementCandidateId === candidateId) {
      throw AppError.badRequest(MESSAGES.REPLACEMENT_CANDIDATE_SAME)
    }
    const replacementCandidate = await assertCandidate(auth.organizationId, input.replacementCandidateId)
    replacementCandidateId = replacementCandidate._id
  }

  const replacementRequestedDate =
    dateFromKey(input.replacementRequestedDate) ?? utcDateFromKey(todayKey())
  const exclusions = input.exclusions ?? {}
  const manualOverride = Boolean(input.manualOverride)
  if (manualOverride && !["SUPER_ADMIN", "HR_ADMIN"].includes(auth.role)) {
    throw AppError.forbidden("Only HR admins or super admins can override replacement eligibility")
  }
  if (manualOverride && (!input.eligibilityReviewNotes?.trim() || !input.eligibilityEvidenceUrl?.trim())) {
    throw AppError.badRequest("An override requires review notes and supporting evidence")
  }
  const { eligibility, eligibilityBasis } = await calculateEligibility({
    organizationId: auth.organizationId, joining, mandate, requestedDate: replacementRequestedDate,
    reason: input.replacementReason, exclusions, manualOverride,
    evidenceUrl: input.eligibilityEvidenceUrl, reviewNotes: input.eligibilityReviewNotes, reviewedBy: auth.userId,
  })

  let status = resolveStatus(input.status, Boolean(replacementCandidateId))
  if (eligibility.result !== "APPROVED" && !manualOverride && status !== "REPLACEMENT_REQUESTED") {
    throw AppError.badRequest("A replacement with unresolved eligibility must remain in Requested status")
  }
  if (status === "REPLACED" && !replacementCandidateId) {
    throw AppError.badRequest(MESSAGES.REPLACEMENT_CANDIDATE_REQUIRED)
  }

  const closedAt = resolveClosedAt(status, input.closedAt)

  if (isOpenReplacementStatus(status)) {
    await assertNoOpenReplacement(auth.organizationId, String(joining._id))
  }

  let created
  try {
    created = await ReplacementCaseModel.create({
      organizationId: auth.organizationId,
      candidateId: candidate._id,
      mandateId: mandate._id,
      clientId,
      joiningId: joining._id,
      replacementReason: input.replacementReason,
      replacementRequestedDate,
      status,
      replacementCandidateId,
      closedAt,
      eligibilityResult: eligibility.result,
      eligibilityReasons: eligibility.reasons,
      eligibilityBasis,
      freeReplacement: eligibility.result === "APPROVED" && eligibility.reasons.length === 1 && eligibility.reasons[0] === "Eligible for one free replacement within guarantee period" && eligibility.freeReplacementAvailable,
      freeReplacementUsed: status === "REPLACED" && eligibility.result === "APPROVED" && eligibility.reasons.length === 1 && eligibility.reasons[0] === "Eligible for one free replacement within guarantee period" && eligibility.freeReplacementAvailable,
      manualOverride,
      exclusions,
      remarks: input.remarks ?? "",
    })
  } catch (error) {
    if (isDuplicateKey(error)) {
      throw AppError.conflict(MESSAGES.REPLACEMENT_EXISTS)
    }
    throw error
  }

  await created.populate([...REPLACEMENT_POPULATE])
  const publicReplacement = toPublicReplacement(created.toObject() as Record<string, unknown>)
  await recordActivity(auth.organizationId, {
    title: `Replacement case opened for ${candidate.name || "candidate"}`,
    detail: `${mandate.mandateNumber} · ${REPLACEMENT_STATUS_LABELS[status]}`,
    tone: "warning",
  })
  await recordAudit(auth, {
    module: "REPLACEMENTS",
    action: "CREATED",
    recordId: publicReplacement.id,
    newData: {
      ...publicReplacement,
      eligibility: {
        result: eligibility.result,
        reasons: eligibility.reasons,
        withinGuaranteePeriod: eligibility.withinGuaranteePeriod,
        freeReplacementAvailable: eligibility.freeReplacementAvailable,
      },
    },
  })

  return publicReplacement
}

export async function updateReplacement(auth: AuthContext, id: string, input: UpdateReplacementInput) {
  const replacement = await requireReplacement(auth.organizationId, id)
  const previousData = toPublicReplacement(replacement.toObject() as Record<string, unknown>)

  if (input.joiningId !== undefined) {
    const joining = await assertJoining(auth.organizationId, input.joiningId)
    replacement.set("joiningId", joining._id)
    if (input.candidateId === undefined) replacement.set("candidateId", joining.candidateId)
    if (input.mandateId === undefined) replacement.set("mandateId", joining.mandateId)
    if (input.clientId === undefined) replacement.set("clientId", joining.clientId)
  }
  if (input.candidateId !== undefined) {
    const candidate = await assertCandidate(auth.organizationId, input.candidateId)
    replacement.set("candidateId", candidate._id)
  }
  if (input.mandateId !== undefined) {
    const mandate = await assertMandate(auth.organizationId, input.mandateId)
    replacement.set("mandateId", mandate._id)
  }
  if (input.clientId !== undefined) {
    const client = await assertClient(auth.organizationId, input.clientId)
    replacement.set("clientId", client._id)
  }

  const joining = await assertJoining(auth.organizationId, asId(replacement.joiningId))
  if (String(joining.candidateId) !== asId(replacement.candidateId)) {
    throw AppError.badRequest(MESSAGES.JOINING_CANDIDATE_MISMATCH)
  }
  if (String(joining.mandateId) !== asId(replacement.mandateId)) {
    throw AppError.badRequest(MESSAGES.JOINING_MANDATE_MISMATCH)
  }
  if (String(joining.clientId) !== asId(replacement.clientId)) {
    throw AppError.badRequest(MESSAGES.JOINING_CLIENT_MISMATCH)
  }

  if (input.replacementReason !== undefined) replacement.replacementReason = input.replacementReason
  if (input.replacementRequestedDate !== undefined) {
    replacement.replacementRequestedDate =
      dateFromKey(input.replacementRequestedDate) ?? replacement.replacementRequestedDate
  }
  if (input.remarks !== undefined) replacement.remarks = input.remarks
  if (input.exclusions !== undefined) replacement.set("exclusions", input.exclusions)
  if (input.manualOverride !== undefined) replacement.manualOverride = input.manualOverride

  if (input.replacementCandidateId !== undefined) {
    if (!input.replacementCandidateId) {
      replacement.set("replacementCandidateId", null)
    } else {
      if (input.replacementCandidateId === asId(replacement.candidateId)) {
        throw AppError.badRequest(MESSAGES.REPLACEMENT_CANDIDATE_SAME)
      }
      const replacementCandidate = await assertCandidate(
        auth.organizationId,
        input.replacementCandidateId
      )
      replacement.set("replacementCandidateId", replacementCandidate._id)
    }
  }

  const hasReplacementCandidate = Boolean(asId(replacement.replacementCandidateId))
  const status = resolveStatus(input.status ?? (replacement.status as ReplacementStatus), hasReplacementCandidate)
  const manualOverride = Boolean(replacement.manualOverride)
  if (manualOverride && !["SUPER_ADMIN", "HR_ADMIN"].includes(auth.role)) {
    throw AppError.forbidden("Only HR admins or super admins can override replacement eligibility")
  }
  const priorBasis = (replacement.toObject() as { eligibilityBasis?: { evidenceUrl?: string; reviewNotes?: string } }).eligibilityBasis
  const evidenceUrl = input.eligibilityEvidenceUrl ?? priorBasis?.evidenceUrl ?? ""
  const reviewNotes = input.eligibilityReviewNotes ?? priorBasis?.reviewNotes ?? ""
  if (input.eligibilityEvidenceUrl !== undefined || input.eligibilityReviewNotes !== undefined || manualOverride) {
    if (input.eligibilityEvidenceUrl !== undefined || input.eligibilityReviewNotes !== undefined) {
      replacement.set("eligibilityBasis.evidenceUrl", evidenceUrl)
      replacement.set("eligibilityBasis.reviewNotes", reviewNotes)
    }
  }
  if (manualOverride && (!reviewNotes.trim() || !evidenceUrl.trim())) {
    throw AppError.badRequest("An override requires review notes and supporting evidence")
  }
  const mandate = await assertMandate(auth.organizationId, asId(replacement.mandateId))
  const requestedDate = replacement.replacementRequestedDate ?? new Date()
  const { eligibility, eligibilityBasis } = await calculateEligibility({
    organizationId: auth.organizationId, joining, mandate, requestedDate,
    reason: replacement.replacementReason as ReplacementReason,
    exclusions: replacement.exclusions as CreateReplacementInput["exclusions"],
    manualOverride, evidenceUrl, reviewNotes, reviewedBy: auth.userId, excludeCaseId: id,
  })
  if (eligibility.result !== "APPROVED" && !manualOverride && status !== "REPLACEMENT_REQUESTED") {
    throw AppError.badRequest("A replacement with unresolved eligibility must remain in Requested status")
  }
  if (status === "REPLACED" && !hasReplacementCandidate) {
    throw AppError.badRequest(MESSAGES.REPLACEMENT_CANDIDATE_REQUIRED)
  }
  replacement.status = status
  replacement.eligibilityResult = eligibility.result
  replacement.set("eligibilityReasons", eligibility.reasons)
  replacement.set("eligibilityBasis", eligibilityBasis)
  replacement.freeReplacement = eligibility.result === "APPROVED" && eligibility.reasons.length === 1 && eligibility.reasons[0] === "Eligible for one free replacement within guarantee period" && eligibility.freeReplacementAvailable
  if (status === "REPLACED" && replacement.freeReplacement) replacement.freeReplacementUsed = true
  replacement.closedAt = resolveClosedAt(
    status,
    input.closedAt,
    replacement.closedAt ?? null
  )

  if (isOpenReplacementStatus(status)) {
    await assertNoOpenReplacement(auth.organizationId, asId(replacement.joiningId), id)
  }

  try {
    await replacement.save()
  } catch (error) {
    if (isDuplicateKey(error)) {
      throw AppError.conflict(MESSAGES.REPLACEMENT_EXISTS)
    }
    throw error
  }

  await replacement.populate([...REPLACEMENT_POPULATE])
  const publicReplacement = toPublicReplacement(replacement.toObject() as Record<string, unknown>)
  await recordAudit(auth, {
    module: "REPLACEMENTS",
    action: "UPDATED",
    recordId: publicReplacement.id,
    previousData,
    newData: publicReplacement,
  })
  return publicReplacement
}

export async function deleteReplacement(auth: AuthContext, id: string) {
  parseObjectId(id)
  const deleted = await ReplacementCaseModel.findOneAndDelete({
    _id: id,
    organizationId: auth.organizationId,
  })
  if (!deleted) {
    throw AppError.notFound(MESSAGES.REPLACEMENT_NOT_FOUND)
  }
}
