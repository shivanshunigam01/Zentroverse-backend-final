import { JOB_APPLICATION_STATUS_LABELS, } from "../constants/job-applications.js";
import { MESSAGES } from "../constants/messages.js";
import { CandidateModel } from "../models/candidate.model.js";
import { CandidateSubmissionModel } from "../models/candidate-submission.model.js";
import { JobApplicationModel } from "../models/job-application.model.js";
import { RecruitmentMandateModel } from "../models/recruitment-mandate.model.js";
import { AppError } from "../utils/app-error.js";
import { dateKeyFromDate, formatShortDate } from "../utils/dates.js";
import { parseObjectId } from "../utils/object-id.js";
import { paginationMeta, paginationSkip } from "../utils/pagination.js";
import { escapeRegex, mongoSort, resolvedSearch } from "../utils/search.js";
const POPULATE = [
    { path: "candidateId", select: "firstName lastName name email phone candidateNumber source status" },
    { path: "mandateId", select: "mandateNumber position status location" },
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
    if (value instanceof Date)
        return dateKeyFromDate(value);
    if (typeof value === "string" && value)
        return dateKeyFromDate(new Date(value));
    return "";
}
function toCandidate(value) {
    if (!value || typeof value !== "object")
        return null;
    const candidate = value;
    const name = String(candidate.name ?? "").trim() ||
        `${candidate.firstName ?? ""} ${candidate.lastName ?? ""}`.trim();
    return {
        id: String(candidate._id),
        name,
        email: candidate.email ?? "",
        phone: candidate.phone ?? "",
        candidateNumber: candidate.candidateNumber ?? "",
        source: candidate.source ?? "",
        status: candidate.status ?? "",
    };
}
function toMandate(value) {
    if (!value || typeof value !== "object")
        return null;
    const mandate = value;
    return {
        id: String(mandate._id),
        mandateNumber: mandate.mandateNumber ?? "",
        position: mandate.position ?? "",
        status: mandate.status ?? "",
        location: mandate.location ?? "",
    };
}
export function toPublicJobApplication(doc) {
    const candidate = toCandidate(doc.candidateId);
    const mandate = toMandate(doc.mandateId);
    const status = String(doc.status ?? "APPLIED");
    const appliedAt = dateKeyOf(doc.appliedAt);
    return {
        id: String(doc._id ?? doc.id),
        organizationId: asId(doc.organizationId),
        mandateId: mandate?.id ?? asId(doc.mandateId),
        candidateId: candidate?.id ?? asId(doc.candidateId),
        applicationNumber: String(doc.applicationNumber ?? ""),
        source: String(doc.source ?? "CAREER_PAGE"),
        status,
        statusLabel: JOB_APPLICATION_STATUS_LABELS[status] ?? status,
        notes: String(doc.notes ?? ""),
        appliedAt,
        appliedLabel: appliedAt ? formatShortDate(appliedAt) : "",
        candidate,
        mandate,
        createdAt: isoOf(doc.createdAt),
        updatedAt: isoOf(doc.updatedAt),
    };
}
export async function listJobApplications(auth, query) {
    const filter = { organizationId: auth.organizationId };
    if (query.mandateId) {
        parseObjectId(query.mandateId, "Invalid mandate");
        filter.mandateId = query.mandateId;
    }
    if (query.candidateId) {
        parseObjectId(query.candidateId, "Invalid candidate");
        filter.candidateId = query.candidateId;
    }
    if (query.status)
        filter.status = query.status;
    if (query.source)
        filter.source = query.source;
    const search = resolvedSearch(query);
    if (search) {
        const regex = new RegExp(escapeRegex(search), "i");
        const people = await CandidateModel.find({
            organizationId: auth.organizationId,
            $or: [{ name: regex }, { email: regex }, { phone: regex }],
        }).select("_id");
        filter.$or = [{ applicationNumber: regex }, { candidateId: { $in: people.map((item) => item._id) } }];
    }
    const [items, total] = await Promise.all([
        JobApplicationModel.find(filter)
            .populate([...POPULATE])
            .sort(mongoSort(query, { appliedAt: -1 }))
            .skip(paginationSkip(query))
            .limit(query.limit)
            .lean(),
        JobApplicationModel.countDocuments(filter),
    ]);
    return {
        items: items.map((item) => toPublicJobApplication(item)),
        ...paginationMeta(total, query),
    };
}
export async function getJobApplication(auth, id) {
    parseObjectId(id);
    const application = await JobApplicationModel.findOne({
        _id: id,
        organizationId: auth.organizationId,
    })
        .populate([...POPULATE])
        .lean();
    if (!application) {
        throw AppError.notFound(MESSAGES.JOB_APPLICATION_NOT_FOUND);
    }
    return toPublicJobApplication(application);
}
export async function updateJobApplication(auth, id, input) {
    parseObjectId(id);
    const application = await JobApplicationModel.findOne({
        _id: id,
        organizationId: auth.organizationId,
    });
    if (!application) {
        throw AppError.notFound(MESSAGES.JOB_APPLICATION_NOT_FOUND);
    }
    if (input.status)
        application.status = input.status;
    if (input.notes !== undefined)
        application.notes = input.notes;
    if (input.convertToWorkflow) {
        application.status = input.status ?? "UNDER_REVIEW";
        const mandate = await RecruitmentMandateModel.findOne({
            _id: application.mandateId,
            organizationId: auth.organizationId,
        }).select("clientId createdBy");
        if (mandate) {
            try {
                await CandidateSubmissionModel.create({
                    organizationId: auth.organizationId,
                    candidateId: application.candidateId,
                    clientId: mandate.clientId,
                    mandateId: mandate._id,
                    applicationId: application._id,
                    submittedBy: mandate.createdBy ?? auth.userId,
                    status: "DRAFT",
                    remarks: "Converted from career page application",
                });
            }
            catch (error) {
                if (!(typeof error === "object" && error !== null && "code" in error && error.code === 11000)) {
                    throw error;
                }
            }
        }
        await CandidateModel.updateOne({ _id: application.candidateId, organizationId: auth.organizationId }, { $set: { status: "SCREENING" } });
    }
    if (input.status === "UNDER_REVIEW" || input.status === "SHORTLISTED") {
        await CandidateModel.updateOne({ _id: application.candidateId, organizationId: auth.organizationId }, { $set: { status: input.status === "SHORTLISTED" ? "ACTIVE" : "SCREENING" } });
    }
    if (input.status === "REJECTED") {
        await CandidateModel.updateOne({ _id: application.candidateId, organizationId: auth.organizationId }, { $set: { status: "REJECTED" } });
    }
    await application.save();
    await application.populate([...POPULATE]);
    return toPublicJobApplication(application.toObject());
}
//# sourceMappingURL=job-application.service.js.map