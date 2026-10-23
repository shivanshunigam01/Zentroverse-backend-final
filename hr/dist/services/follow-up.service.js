import { FOLLOW_UP_CANDIDATE_STATUS_LABELS, FOLLOW_UP_RISK_LEVEL_LABELS, FOLLOW_UP_TYPE_LABELS, } from "../constants/follow-ups.js";
import { MESSAGES } from "../constants/messages.js";
import { CandidateModel } from "../models/candidate.model.js";
import { OfferModel } from "../models/offer.model.js";
import { PreJoiningFollowUpModel } from "../models/pre-joining-follow-up.model.js";
import { UserModel } from "../models/user.model.js";
import { recordActivity } from "../utils/activity.js";
import { AppError } from "../utils/app-error.js";
import { utcDateFromKey } from "../utils/dates.js";
import { parseObjectId } from "../utils/object-id.js";
import { paginationMeta, paginationSkip } from "../utils/pagination.js";
import { applySearch, mongoSort, resolvedSearch } from "../utils/search.js";
const FOLLOW_UP_POPULATE = [
    { path: "candidateId", select: "firstName lastName name email candidateNumber" },
    { path: "offerId", select: "offeredDesignation offerStatus expectedJoiningDate joiningStatus" },
    { path: "createdBy", select: "name email role" },
];
function asId(value) {
    if (!value)
        return "";
    if (typeof value === "object" && value !== null && "_id" in value) {
        return String(value._id);
    }
    return String(value);
}
function isoOf(value) {
    if (value instanceof Date)
        return value.toISOString();
    if (typeof value === "string" && value)
        return new Date(value).toISOString();
    return "";
}
function dateKeyOf(value) {
    const iso = isoOf(value);
    return iso ? iso.slice(0, 10) : "";
}
function dateFromKey(value) {
    if (!value)
        return null;
    return utcDateFromKey(value);
}
function toUserRef(value) {
    if (!value)
        return null;
    if (typeof value === "object" && value !== null && "name" in value) {
        const user = value;
        return {
            id: String(user._id),
            name: user.name,
            email: user.email ?? "",
            role: user.role ?? "",
        };
    }
    return { id: String(value), name: "", email: "", role: "" };
}
function toCandidateRef(value) {
    if (!value)
        return null;
    if (typeof value === "object" && value !== null && ("name" in value || "email" in value)) {
        const candidate = value;
        const name = String(candidate.name ?? "").trim() ||
            `${candidate.firstName ?? ""} ${candidate.lastName ?? ""}`.trim();
        return {
            id: String(candidate._id),
            name,
            email: candidate.email ?? "",
            candidateNumber: candidate.candidateNumber ?? "",
        };
    }
    return { id: String(value), name: "", email: "", candidateNumber: "" };
}
function toOfferRef(value) {
    if (!value)
        return null;
    if (typeof value === "object" && value !== null && ("offeredDesignation" in value || "_id" in value)) {
        const offer = value;
        return {
            id: String(offer._id),
            offeredDesignation: offer.offeredDesignation ?? "",
            offerStatus: offer.offerStatus ?? "",
            expectedJoiningDate: dateKeyOf(offer.expectedJoiningDate),
            joiningStatus: offer.joiningStatus ?? "",
        };
    }
    return {
        id: String(value),
        offeredDesignation: "",
        offerStatus: "",
        expectedJoiningDate: "",
        joiningStatus: "",
    };
}
export function toPublicFollowUp(doc) {
    const candidate = toCandidateRef(doc.candidateId);
    const offer = toOfferRef(doc.offerId);
    const createdBy = toUserRef(doc.createdBy);
    const followUpType = String(doc.followUpType ?? "CALL") || "CALL";
    const candidateStatus = String(doc.candidateStatus ?? "POSITIVE") || "POSITIVE";
    const riskLevel = String(doc.riskLevel ?? "LOW") || "LOW";
    return {
        id: String(doc._id ?? doc.id),
        organizationId: asId(doc.organizationId),
        candidateId: candidate?.id ?? asId(doc.candidateId),
        candidate,
        offerId: offer?.id ?? asId(doc.offerId),
        offer,
        followUpDate: dateKeyOf(doc.followUpDate),
        followUpType,
        followUpTypeLabel: FOLLOW_UP_TYPE_LABELS[followUpType] ?? followUpType,
        candidateStatus,
        candidateStatusLabel: FOLLOW_UP_CANDIDATE_STATUS_LABELS[candidateStatus] ?? candidateStatus,
        joiningProbability: Number(doc.joiningProbability ?? 0),
        riskLevel,
        riskLevelLabel: FOLLOW_UP_RISK_LEVEL_LABELS[riskLevel] ?? riskLevel,
        remarks: String(doc.remarks ?? ""),
        nextFollowUpDate: dateKeyOf(doc.nextFollowUpDate),
        createdById: createdBy?.id ?? asId(doc.createdBy),
        createdBy,
        createdAt: isoOf(doc.createdAt),
        updatedAt: isoOf(doc.updatedAt),
    };
}
async function requireFollowUp(organizationId, id) {
    parseObjectId(id);
    const followUp = await PreJoiningFollowUpModel.findOne({ _id: id, organizationId }).populate([
        ...FOLLOW_UP_POPULATE,
    ]);
    if (!followUp) {
        throw AppError.notFound(MESSAGES.FOLLOW_UP_NOT_FOUND);
    }
    return followUp;
}
async function assertCandidate(organizationId, candidateId) {
    parseObjectId(candidateId, "Invalid candidate");
    const candidate = await CandidateModel.findOne({ _id: candidateId, organizationId }).select("_id name firstName lastName email candidateNumber");
    if (!candidate) {
        throw AppError.badRequest(MESSAGES.CANDIDATE_NOT_IN_ORGANIZATION);
    }
    return candidate;
}
async function assertOffer(organizationId, offerId) {
    parseObjectId(offerId, "Invalid offer");
    const offer = await OfferModel.findOne({ _id: offerId, organizationId }).select("_id candidateId offeredDesignation offerStatus expectedJoiningDate joiningStatus");
    if (!offer) {
        throw AppError.badRequest(MESSAGES.OFFER_NOT_FOUND);
    }
    return offer;
}
async function assertCreator(organizationId, userId) {
    parseObjectId(userId, "Invalid user");
    const user = await UserModel.findOne({
        _id: userId,
        organizationId,
        isActive: true,
    }).select("_id");
    if (!user) {
        throw AppError.badRequest(MESSAGES.INVALID_RECRUITERS);
    }
    return user;
}
export async function listFollowUps(auth, query) {
    const filter = { organizationId: auth.organizationId };
    if (query.candidateId) {
        parseObjectId(query.candidateId, "Invalid candidate");
        filter.candidateId = query.candidateId;
    }
    if (query.offerId) {
        parseObjectId(query.offerId, "Invalid offer");
        filter.offerId = query.offerId;
    }
    if (query.followUpType)
        filter.followUpType = query.followUpType;
    if (query.riskLevel)
        filter.riskLevel = query.riskLevel;
    if (query.candidateStatus)
        filter.candidateStatus = query.candidateStatus;
    applySearch(filter, ["remarks"], resolvedSearch(query));
    const [items, total] = await Promise.all([
        PreJoiningFollowUpModel.find(filter)
            .populate([...FOLLOW_UP_POPULATE])
            .sort(mongoSort(query, { followUpDate: -1, createdAt: -1 }))
            .skip(paginationSkip(query))
            .limit(query.limit)
            .lean(),
        PreJoiningFollowUpModel.countDocuments(filter),
    ]);
    return {
        items: items.map((item) => toPublicFollowUp(item)),
        ...paginationMeta(total, query),
    };
}
export async function getFollowUp(auth, id) {
    const followUp = await requireFollowUp(auth.organizationId, id);
    return toPublicFollowUp(followUp.toObject());
}
export async function createFollowUp(auth, input) {
    const offer = await assertOffer(auth.organizationId, input.offerId);
    const candidateId = input.candidateId ?? String(offer.candidateId);
    if (String(offer.candidateId) !== candidateId) {
        throw AppError.badRequest(MESSAGES.OFFER_CANDIDATE_MISMATCH);
    }
    const candidate = await assertCandidate(auth.organizationId, candidateId);
    const createdById = input.createdBy ?? auth.userId;
    await assertCreator(auth.organizationId, createdById);
    const created = await PreJoiningFollowUpModel.create({
        organizationId: auth.organizationId,
        candidateId: candidate._id,
        offerId: offer._id,
        followUpDate: dateFromKey(input.followUpDate) ?? new Date(),
        followUpType: input.followUpType ?? "CALL",
        candidateStatus: input.candidateStatus ?? "POSITIVE",
        joiningProbability: input.joiningProbability ?? 5,
        riskLevel: input.riskLevel ?? "LOW",
        remarks: input.remarks ?? "",
        nextFollowUpDate: dateFromKey(input.nextFollowUpDate),
        createdBy: createdById,
    });
    await created.populate([...FOLLOW_UP_POPULATE]);
    await recordActivity(auth.organizationId, {
        title: `Pre-joining follow-up for ${candidate.name || "candidate"}`,
        detail: `${offer.offeredDesignation || "Offer"} · ${input.followUpType ?? "CALL"}`,
        tone: "success",
    });
    return toPublicFollowUp(created.toObject());
}
export async function updateFollowUp(auth, id, input) {
    const followUp = await requireFollowUp(auth.organizationId, id);
    if (input.offerId !== undefined) {
        const offer = await assertOffer(auth.organizationId, input.offerId);
        followUp.set("offerId", offer._id);
        if (input.candidateId === undefined)
            followUp.set("candidateId", offer.candidateId);
    }
    if (input.candidateId !== undefined) {
        const candidate = await assertCandidate(auth.organizationId, input.candidateId);
        followUp.set("candidateId", candidate._id);
    }
    const offer = await assertOffer(auth.organizationId, asId(followUp.offerId));
    if (String(offer.candidateId) !== asId(followUp.candidateId)) {
        throw AppError.badRequest(MESSAGES.OFFER_CANDIDATE_MISMATCH);
    }
    if (input.followUpDate !== undefined) {
        followUp.followUpDate = dateFromKey(input.followUpDate) ?? followUp.followUpDate;
    }
    if (input.followUpType !== undefined)
        followUp.followUpType = input.followUpType;
    if (input.candidateStatus !== undefined)
        followUp.candidateStatus = input.candidateStatus;
    if (input.joiningProbability !== undefined)
        followUp.joiningProbability = input.joiningProbability;
    if (input.riskLevel !== undefined)
        followUp.riskLevel = input.riskLevel;
    if (input.remarks !== undefined)
        followUp.remarks = input.remarks ?? "";
    if (input.nextFollowUpDate !== undefined) {
        followUp.nextFollowUpDate = dateFromKey(input.nextFollowUpDate);
    }
    if (input.createdBy !== undefined) {
        await assertCreator(auth.organizationId, input.createdBy);
        followUp.set("createdBy", input.createdBy);
    }
    await followUp.save();
    await followUp.populate([...FOLLOW_UP_POPULATE]);
    return toPublicFollowUp(followUp.toObject());
}
export async function deleteFollowUp(auth, id) {
    parseObjectId(id);
    const deleted = await PreJoiningFollowUpModel.findOneAndDelete({
        _id: id,
        organizationId: auth.organizationId,
    });
    if (!deleted) {
        throw AppError.notFound(MESSAGES.FOLLOW_UP_NOT_FOUND);
    }
}
//# sourceMappingURL=follow-up.service.js.map