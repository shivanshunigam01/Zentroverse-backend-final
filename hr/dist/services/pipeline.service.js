import mongoose from "mongoose";
import { PIPELINE_ALLOWED_TRANSITIONS, PIPELINE_STAGE_LABELS, PIPELINE_STAGES, } from "../constants/pipeline.js";
import { isConfirmedJoiningStatus } from "../constants/joinings.js";
import { isOpenReplacementStatus } from "../constants/replacements.js";
import { isIntroducedSubmissionStatus } from "../constants/submissions.js";
import { CandidateConsentModel } from "../models/candidate-consent.model.js";
import { CandidateEvaluationModel } from "../models/candidate-evaluation.model.js";
import { CandidateSubmissionModel } from "../models/candidate-submission.model.js";
import { CandidateModel } from "../models/candidate.model.js";
import { GuaranteeFollowUpModel } from "../models/guarantee-follow-up.model.js";
import { InterviewModel } from "../models/interview.model.js";
import { JobApplicationModel } from "../models/job-application.model.js";
import { JoiningModel } from "../models/joining.model.js";
import { OfferModel } from "../models/offer.model.js";
import { RecruitmentMandateModel } from "../models/recruitment-mandate.model.js";
import { ReplacementCaseModel } from "../models/replacement-case.model.js";
import { AppError } from "../utils/app-error.js";
import { parseObjectId } from "../utils/object-id.js";
import { paginationMeta, paginationSkip } from "../utils/pagination.js";
import { escapeRegex, resolvedSearch } from "../utils/search.js";
import { resolveEvaluationTotal } from "../utils/evaluation-score.js";
function pairKey(candidateId, mandateId) {
    return `${candidateId}:${mandateId}`;
}
function asId(value) {
    if (!value)
        return "";
    if (typeof value === "object" && value !== null && "_id" in value) {
        return String(value._id);
    }
    return String(value);
}
function candidateName(doc) {
    const name = String(doc.name ?? "").trim();
    if (name)
        return name;
    return `${String(doc.firstName ?? "")} ${String(doc.lastName ?? "")}`.trim();
}
function toCandidateRef(doc) {
    if (!doc)
        return null;
    return {
        id: asId(doc._id ?? doc.id),
        name: candidateName(doc),
        email: String(doc.email ?? ""),
        candidateNumber: String(doc.candidateNumber ?? ""),
        status: String(doc.status ?? ""),
    };
}
function toMandateRef(doc) {
    if (!doc)
        return null;
    return {
        id: asId(doc._id ?? doc.id),
        mandateNumber: String(doc.mandateNumber ?? ""),
        position: String(doc.position ?? ""),
        status: String(doc.status ?? ""),
        clientId: asId(doc.clientId),
    };
}
function consentIsActive(consent) {
    if (!consent)
        return false;
    if (consent.withdrawnAt)
        return false;
    if (!consent.consentGiven)
        return false;
    const expiry = consent.expiryDate;
    if (expiry) {
        const key = expiry instanceof Date
            ? expiry.toISOString().slice(0, 10)
            : String(expiry).slice(0, 10);
        if (key && key < new Date().toISOString().slice(0, 10))
            return false;
    }
    return true;
}
function duplicateNeedsReview(status) {
    return (status === "POSSIBLE_DUPLICATE" ||
        status === "CONFIRMED_DUPLICATE" ||
        status === "DISPUTED");
}
function offerIsActive(status) {
    return status === "DRAFT" || status === "SENT" || status === "ACCEPTED";
}
export function derivePipelineStage(ctx) {
    const replacementStatus = String(ctx.replacement?.status ?? "");
    if (replacementStatus && isOpenReplacementStatus(replacementStatus)) {
        return "REPLACEMENT";
    }
    const joiningStatus = String(ctx.joining?.status ?? "");
    const joiningConfirmed = joiningStatus && isConfirmedJoiningStatus(joiningStatus);
    if (ctx.guarantee && joiningConfirmed) {
        return "GUARANTEE";
    }
    if (joiningStatus === "JOINED" || joiningStatus === "CONFIRMED") {
        return "JOINED";
    }
    if (joiningStatus === "NO_SHOW" || joiningStatus === "WITHDRAWN") {
        return "NOT_JOINED";
    }
    const offerStatus = String(ctx.offer?.offerStatus ?? "");
    if (offerStatus === "ACCEPTED") {
        return "OFFER_ACCEPTED";
    }
    if (offerStatus && offerIsActive(offerStatus)) {
        return "OFFER";
    }
    if (ctx.interview) {
        return "INTERVIEW";
    }
    const duplicateStatus = String(ctx.submission?.duplicateStatus ?? "");
    if (ctx.submission && duplicateNeedsReview(duplicateStatus)) {
        return "DUPLICATE_REVIEW";
    }
    const submissionStatus = String(ctx.submission?.status ?? "");
    if (ctx.submission && isIntroducedSubmissionStatus(submissionStatus)) {
        return "SUBMITTED";
    }
    if (ctx.evaluation) {
        return "EVALUATED";
    }
    if (consentIsActive(ctx.consent)) {
        return "CONSENT_RECEIVED";
    }
    if (ctx.consent || ctx.linkedViaApplication || ctx.submission || ctx.evaluation) {
        return "CONSENT_PENDING";
    }
    return "SOURCED";
}
function quickActionsFor(stage, candidateId, mandateId, ctx) {
    const q = `candidateId=${candidateId}&mandateId=${mandateId}`;
    const actions = [];
    switch (stage) {
        case "SOURCED":
        case "CONSENT_PENDING":
            actions.push({ label: "Record consent", href: `/recruitment/consents/new?${q}` });
            break;
        case "CONSENT_RECEIVED":
            actions.push({ label: "Evaluate", href: `/recruitment/evaluations/new?${q}` });
            break;
        case "EVALUATED":
            actions.push({
                label: "Submit to client",
                href: `/recruitment/submissions/new?${q}${ctx.evaluation ? `&evaluationId=${asId(ctx.evaluation._id)}` : ""}`,
            });
            break;
        case "SUBMITTED":
            actions.push({
                label: "Schedule interview",
                href: `/recruitment/interviews/new?${q}${ctx.submission ? `&submissionId=${asId(ctx.submission._id)}` : ""}`,
            });
            if (ctx.submission) {
                actions.push({
                    label: "Review submission",
                    href: `/recruitment/submissions/${asId(ctx.submission._id)}/edit`,
                });
            }
            break;
        case "DUPLICATE_REVIEW":
            if (ctx.submission) {
                actions.push({
                    label: "Resolve duplicate",
                    href: `/recruitment/submissions/${asId(ctx.submission._id)}/edit`,
                });
            }
            break;
        case "INTERVIEW":
            actions.push({
                label: "Create offer",
                href: `/recruitment/offers/new?${q}${ctx.submission ? `&submissionId=${asId(ctx.submission._id)}` : ""}`,
            });
            break;
        case "OFFER":
            if (ctx.offer) {
                actions.push({
                    label: "Update offer",
                    href: `/recruitment/offers/${asId(ctx.offer._id)}/edit`,
                });
            }
            break;
        case "OFFER_ACCEPTED":
            actions.push({
                label: "Record joining",
                href: `/recruitment/joinings/new?${q}${ctx.offer ? `&offerId=${asId(ctx.offer._id)}` : ""}`,
            });
            actions.push({ label: "Pre-joining follow-up", href: `/recruitment/pre-joining/new?${q}` });
            break;
        case "JOINED":
            actions.push({
                label: "Guarantee tracking",
                href: `/recruitment/guarantees/new?${ctx.joining ? `joiningId=${asId(ctx.joining._id)}` : q}`,
            });
            break;
        case "GUARANTEE":
            if (ctx.guarantee) {
                actions.push({
                    label: "Update guarantee",
                    href: `/recruitment/guarantees/${asId(ctx.guarantee._id)}/edit`,
                });
            }
            actions.push({
                label: "Open replacement",
                href: `/recruitment/replacements/new?${ctx.joining ? `joiningId=${asId(ctx.joining._id)}` : q}`,
            });
            break;
        case "REPLACEMENT":
            if (ctx.replacement) {
                actions.push({
                    label: "Update replacement",
                    href: `/recruitment/replacements/${asId(ctx.replacement._id)}/edit`,
                });
            }
            break;
        case "NOT_JOINED":
        case "CLOSED":
            actions.push({ label: "View candidate", href: `/recruitment/candidates/${candidateId}/edit` });
            break;
        default:
            break;
    }
    actions.push({ label: "View candidate", href: `/recruitment/candidates/${candidateId}/edit` });
    return actions;
}
function emptyStageCounts() {
    return Object.fromEntries(PIPELINE_STAGES.map((stage) => [stage, 0]));
}
async function loadPairContext(organizationId, candidateId, mandateId, linkedViaApplication) {
    const [consent, evaluation, submission, interview, offer, joining, guarantee, replacement,] = await Promise.all([
        CandidateConsentModel.findOne({ organizationId, candidateId, mandateId })
            .sort({ createdAt: -1 })
            .lean(),
        CandidateEvaluationModel.findOne({ organizationId, candidateId, mandateId })
            .sort({ evaluatedAt: -1, createdAt: -1 })
            .lean(),
        CandidateSubmissionModel.findOne({ organizationId, candidateId, mandateId })
            .sort({ submittedAt: -1, createdAt: -1 })
            .lean(),
        InterviewModel.findOne({
            organizationId,
            candidateId,
            mandateId,
            status: { $ne: "CANCELLED" },
        })
            .sort({ scheduledAt: -1 })
            .lean(),
        OfferModel.findOne({
            organizationId,
            candidateId,
            mandateId,
            offerStatus: { $nin: ["WITHDRAWN", "EXPIRED"] },
        })
            .sort({ createdAt: -1 })
            .lean(),
        JoiningModel.findOne({ organizationId, candidateId, mandateId })
            .sort({ joiningDate: -1, createdAt: -1 })
            .lean(),
        GuaranteeFollowUpModel.findOne({ organizationId, candidateId, mandateId })
            .sort({ createdAt: -1 })
            .lean(),
        ReplacementCaseModel.findOne({
            organizationId,
            candidateId,
            mandateId,
            status: { $in: ["ACTIVE", "REPLACEMENT_REQUESTED", "REPLACEMENT_IN_PROGRESS"] },
        })
            .sort({ createdAt: -1 })
            .lean(),
    ]);
    return {
        consent: consent,
        evaluation: evaluation,
        submission: submission,
        interview: interview,
        offer: offer,
        joining: joining,
        guarantee: guarantee,
        replacement: replacement,
        linkedViaApplication,
    };
}
/**
 * Mandate-centric pipeline: stages are derived from linked recruitment entities
 * (consent → evaluation → submission → interview → offer → joining → guarantee/replacement).
 */
export async function getMandatePipeline(auth, query) {
    const organizationId = auth.organizationId;
    const orgOid = new mongoose.Types.ObjectId(organizationId);
    const mandateFilter = { organizationId };
    if (query.mandateId) {
        parseObjectId(query.mandateId, "Invalid mandate");
        mandateFilter._id = query.mandateId;
    }
    if (query.recruiterId) {
        parseObjectId(query.recruiterId, "Invalid recruiter");
        mandateFilter.assignedRecruiters = query.recruiterId;
    }
    const mandates = await RecruitmentMandateModel.find(mandateFilter)
        .select("_id mandateNumber position status clientId assignedRecruiters")
        .lean();
    const mandateIds = mandates.map((m) => m._id);
    const mandateById = new Map(mandates.map((m) => [String(m._id), m]));
    const mandatesSummary = mandates.map((m) => ({
        id: String(m._id),
        mandateNumber: String(m.mandateNumber ?? ""),
        position: String(m.position ?? ""),
        status: String(m.status ?? ""),
        clientId: asId(m.clientId),
    }));
    if (mandateIds.length === 0) {
        return {
            mandates: mandatesSummary,
            stageCounts: emptyStageCounts(),
            items: [],
            ...paginationMeta(0, query),
        };
    }
    const [consents, evaluations, submissions, applications] = await Promise.all([
        CandidateConsentModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .select("candidateId mandateId")
            .lean(),
        CandidateEvaluationModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .select("candidateId mandateId")
            .lean(),
        CandidateSubmissionModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .select("candidateId mandateId")
            .lean(),
        JobApplicationModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .select("candidateId mandateId")
            .lean(),
    ]);
    const pairMap = new Map();
    const mark = (candidateId, mandateId, viaApp = false) => {
        const c = asId(candidateId);
        const m = asId(mandateId);
        if (!c || !m)
            return;
        const key = pairKey(c, m);
        const existing = pairMap.get(key);
        if (existing) {
            existing.viaApp = existing.viaApp || viaApp;
            return;
        }
        pairMap.set(key, { candidateId: c, mandateId: m, viaApp });
    };
    for (const row of consents)
        mark(row.candidateId, row.mandateId);
    for (const row of evaluations)
        mark(row.candidateId, row.mandateId);
    for (const row of submissions)
        mark(row.candidateId, row.mandateId);
    for (const row of applications)
        mark(row.candidateId, row.mandateId, true);
    const pairs = [...pairMap.values()];
    const candidateIds = [...new Set(pairs.map((p) => p.candidateId))];
    const candidates = await CandidateModel.find({
        _id: { $in: candidateIds.map((id) => new mongoose.Types.ObjectId(id)) },
        organizationId: orgOid,
    })
        .select("_id name firstName lastName email candidateNumber status")
        .lean();
    const candidateById = new Map(candidates.map((c) => [String(c._id), c]));
    const search = resolvedSearch(query);
    const searchRegex = search ? new RegExp(escapeRegex(search), "i") : null;
    const built = [];
    // Batch-load related docs for all pairs (scoped by mandate set)
    const [allConsents, allEvaluations, allSubmissions, allInterviews, allOffers, allJoinings, allGuarantees, allReplacements,] = await Promise.all([
        CandidateConsentModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .sort({ createdAt: -1 })
            .lean(),
        CandidateEvaluationModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .sort({ evaluatedAt: -1, createdAt: -1 })
            .lean(),
        CandidateSubmissionModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .sort({ submittedAt: -1, createdAt: -1 })
            .lean(),
        InterviewModel.find({
            organizationId,
            mandateId: { $in: mandateIds },
            status: { $ne: "CANCELLED" },
        })
            .sort({ scheduledAt: -1 })
            .lean(),
        OfferModel.find({
            organizationId,
            mandateId: { $in: mandateIds },
            offerStatus: { $nin: ["WITHDRAWN", "EXPIRED"] },
        })
            .sort({ createdAt: -1 })
            .lean(),
        JoiningModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .sort({ joiningDate: -1, createdAt: -1 })
            .lean(),
        GuaranteeFollowUpModel.find({ organizationId, mandateId: { $in: mandateIds } })
            .sort({ createdAt: -1 })
            .lean(),
        ReplacementCaseModel.find({
            organizationId,
            mandateId: { $in: mandateIds },
            status: { $in: ["ACTIVE", "REPLACEMENT_REQUESTED", "REPLACEMENT_IN_PROGRESS"] },
        })
            .sort({ createdAt: -1 })
            .lean(),
    ]);
    function latestByPair(rows) {
        const map = new Map();
        for (const row of rows) {
            const key = pairKey(asId(row.candidateId), asId(row.mandateId));
            if (!map.has(key))
                map.set(key, row);
        }
        return map;
    }
    const consentMap = latestByPair(allConsents);
    const evaluationMap = latestByPair(allEvaluations);
    const submissionMap = latestByPair(allSubmissions);
    const interviewMap = latestByPair(allInterviews);
    const offerMap = latestByPair(allOffers);
    const joiningMap = latestByPair(allJoinings);
    const guaranteeMap = latestByPair(allGuarantees);
    const replacementMap = latestByPair(allReplacements);
    const stageCounts = emptyStageCounts();
    for (const pair of pairs) {
        const candidate = toCandidateRef(candidateById.get(pair.candidateId));
        const mandate = toMandateRef(mandateById.get(pair.mandateId));
        if (!candidate || !mandate)
            continue;
        if (searchRegex) {
            const haystack = [
                candidate.name,
                candidate.email,
                candidate.candidateNumber,
                mandate.mandateNumber,
                mandate.position,
            ].join(" ");
            if (!searchRegex.test(haystack))
                continue;
        }
        const key = pairKey(pair.candidateId, pair.mandateId);
        const ctx = {
            consent: consentMap.get(key) ?? null,
            evaluation: evaluationMap.get(key) ?? null,
            submission: submissionMap.get(key) ?? null,
            interview: interviewMap.get(key) ?? null,
            offer: offerMap.get(key) ?? null,
            joining: joiningMap.get(key) ?? null,
            guarantee: guaranteeMap.get(key) ?? null,
            replacement: replacementMap.get(key) ?? null,
            linkedViaApplication: pair.viaApp,
        };
        const stage = derivePipelineStage(ctx);
        stageCounts[stage] += 1;
        if (query.stage && query.stage !== stage)
            continue;
        const evaluation = ctx.evaluation;
        const evaluationScore = evaluation
            ? resolveEvaluationTotal({
                scoringVersion: String(evaluation.scoringVersion ?? ""),
                scorecard: evaluation.scorecard,
                scores: evaluation.scores,
                totalScore: Number(evaluation.totalScore ?? NaN),
            })
            : ctx.submission?.evaluationScore != null
                ? Number(ctx.submission.evaluationScore)
                : null;
        built.push({
            candidateId: pair.candidateId,
            candidate,
            mandateId: pair.mandateId,
            mandate,
            stage,
            stageLabel: PIPELINE_STAGE_LABELS[stage],
            submissionId: ctx.submission ? asId(ctx.submission._id) : "",
            evaluationScore,
            ownershipStatus: String(ctx.submission?.ownershipStatus ?? ""),
            quickActions: quickActionsFor(stage, pair.candidateId, pair.mandateId, ctx),
            ctx,
        });
    }
    // Stable order: mandate number, then candidate name
    built.sort((a, b) => {
        const m = a.mandate.mandateNumber.localeCompare(b.mandate.mandateNumber);
        if (m !== 0)
            return m;
        return a.candidate.name.localeCompare(b.candidate.name);
    });
    const total = built.length;
    const pageItems = built.slice(paginationSkip(query), paginationSkip(query) + query.limit);
    return {
        mandates: mandatesSummary,
        stageCounts,
        items: pageItems.map(({ ctx: _ctx, ...item }) => item),
        ...paginationMeta(total, query),
    };
}
export async function transitionPipelineStage(auth, input) {
    parseObjectId(input.candidateId, "Invalid candidate");
    parseObjectId(input.mandateId, "Invalid mandate");
    const candidate = await CandidateModel.findOne({
        _id: input.candidateId,
        organizationId: auth.organizationId,
    }).select("_id name");
    if (!candidate) {
        throw AppError.badRequest("Candidate not found in this organization");
    }
    const mandate = await RecruitmentMandateModel.findOne({
        _id: input.mandateId,
        organizationId: auth.organizationId,
    }).select("_id mandateNumber position status");
    if (!mandate) {
        throw AppError.badRequest("Mandate not found in this organization");
    }
    const viaApp = Boolean(await JobApplicationModel.exists({
        organizationId: auth.organizationId,
        candidateId: input.candidateId,
        mandateId: input.mandateId,
    }));
    const ctx = await loadPairContext(auth.organizationId, input.candidateId, input.mandateId, viaApp);
    const currentStage = derivePipelineStage(ctx);
    const allowed = PIPELINE_ALLOWED_TRANSITIONS[currentStage];
    if (!allowed.includes(input.targetStage)) {
        throw AppError.badRequest(`Cannot move from ${PIPELINE_STAGE_LABELS[currentStage]} to ${PIPELINE_STAGE_LABELS[input.targetStage]}. Allowed: ${allowed.length
            ? allowed.map((s) => PIPELINE_STAGE_LABELS[s]).join(", ")
            : "none"}.`);
    }
    const q = `candidateId=${input.candidateId}&mandateId=${input.mandateId}`;
    const target = input.targetStage;
    // Safe minimal updates where entity already exists or no inventable data is required.
    if (target === "DUPLICATE_REVIEW") {
        if (!ctx.submission) {
            throw AppError.badRequest(`Submit the candidate first via /recruitment/submissions/new?${q}`);
        }
        await CandidateSubmissionModel.updateOne({ _id: ctx.submission._id }, { $set: { duplicateStatus: "POSSIBLE_DUPLICATE" } });
        return {
            message: "Marked for duplicate review",
            currentStage: "DUPLICATE_REVIEW",
            stageLabel: PIPELINE_STAGE_LABELS.DUPLICATE_REVIEW,
        };
    }
    if (target === "SUBMITTED" && currentStage === "DUPLICATE_REVIEW") {
        if (!ctx.submission) {
            throw AppError.badRequest("Submission not found for this candidate and mandate");
        }
        await CandidateSubmissionModel.updateOne({ _id: ctx.submission._id }, { $set: { duplicateStatus: "NOT_DUPLICATE" } });
        return {
            message: "Duplicate cleared; candidate remains submitted",
            currentStage: "SUBMITTED",
            stageLabel: PIPELINE_STAGE_LABELS.SUBMITTED,
        };
    }
    if (target === "OFFER_ACCEPTED") {
        if (!ctx.offer) {
            throw AppError.badRequest(`Create and send an offer first via /recruitment/offers/new?${q}`);
        }
        await OfferModel.updateOne({ _id: ctx.offer._id }, { $set: { offerStatus: "ACCEPTED" } });
        return {
            message: "Offer marked as accepted",
            currentStage: "OFFER_ACCEPTED",
            stageLabel: PIPELINE_STAGE_LABELS.OFFER_ACCEPTED,
        };
    }
    if (target === "NOT_JOINED") {
        if (ctx.joining) {
            await JoiningModel.updateOne({ _id: ctx.joining._id }, { $set: { status: "WITHDRAWN" } });
            return {
                message: "Joining marked as withdrawn (not joined)",
                currentStage: "NOT_JOINED",
                stageLabel: PIPELINE_STAGE_LABELS.NOT_JOINED,
            };
        }
        if (ctx.offer) {
            await OfferModel.updateOne({ _id: ctx.offer._id }, { $set: { offerStatus: "REJECTED", joiningStatus: "WITHDRAWN" } });
            return {
                message: "Offer marked rejected / not joined",
                currentStage: "NOT_JOINED",
                stageLabel: PIPELINE_STAGE_LABELS.NOT_JOINED,
            };
        }
        throw AppError.badRequest(`Record an offer or joining before marking not joined. Use /recruitment/offers/new?${q}`);
    }
    // Transitions that require dedicated forms / inventable data
    const guidance = {
        CONSENT_PENDING: `Open the consent form: /recruitment/consents/new?${q}`,
        CONSENT_RECEIVED: `Record consent as given: /recruitment/consents/new?${q}`,
        EVALUATED: `Complete the evaluation scorecard: /recruitment/evaluations/new?${q}`,
        SUBMITTED: `Submit the candidate to the client: /recruitment/submissions/new?${q}`,
        INTERVIEW: `Schedule an interview (cannot invent rounds): /recruitment/interviews/new?${q}`,
        OFFER: `Create an offer from the interview outcome: /recruitment/offers/new?${q}`,
        JOINED: `Record joining confirmation: /recruitment/joinings/new?${q}`,
        GUARANTEE: ctx.joining
            ? `Start guarantee tracking: /recruitment/guarantees/new?joiningId=${asId(ctx.joining._id)}`
            : `Record joining first, then start guarantee tracking.`,
        REPLACEMENT: ctx.joining
            ? `Open a replacement case: /recruitment/replacements/new?joiningId=${asId(ctx.joining._id)}`
            : `Record a joining before opening replacement.`,
        CLOSED: "Close from the mandate or related records (cancel mandate / withdraw submission) on their pages. Pipeline stages are derived and cannot invent a closed state.",
        SOURCED: "Candidate is already at sourced for this mandate.",
    };
    throw AppError.badRequest(guidance[target] ??
        `Complete this step on the dedicated form. Current stage: ${PIPELINE_STAGE_LABELS[currentStage]}.`);
}
//# sourceMappingURL=pipeline.service.js.map