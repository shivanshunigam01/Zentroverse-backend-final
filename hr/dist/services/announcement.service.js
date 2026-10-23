import mongoose from "mongoose";
import { ANNOUNCEMENT_PRIORITIES, } from "../constants/announcements.js";
import { MESSAGES } from "../constants/messages.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { USER_ROLE_VALUES } from "../constants/roles.js";
import { AnnouncementModel } from "../models/announcement.model.js";
import { hasAnyPermission } from "../utils/access.js";
import { recordActivity } from "../utils/activity.js";
import { notifyAnnouncementPublished } from "../notifications/index.js";
import { AppError } from "../utils/app-error.js";
import { dateKeyFromDate, dateKeyInTimeZone, formatShortDate, utcDateFromKey, } from "../utils/dates.js";
import { parseObjectId } from "../utils/object-id.js";
import { paginationMeta, paginationSkip } from "../utils/pagination.js";
import { applySearch, mongoSort, resolvedSearch } from "../utils/search.js";
const DEFAULT_TIMEZONE = "Asia/Kolkata";
const PRIORITY_RANK = {
    urgent: 3,
    high: 2,
    normal: 1,
};
function todayKey() {
    return dateKeyInTimeZone(new Date(), DEFAULT_TIMEZONE);
}
function canManage(auth) {
    return hasAnyPermission(auth.role, [PERMISSIONS.ANNOUNCEMENTS_MANAGE]);
}
function asId(value) {
    if (!value)
        return "";
    if (typeof value === "object" && value !== null && "_id" in value) {
        return String(value._id);
    }
    return String(value);
}
function excerptFrom(content) {
    const compact = content.replace(/\s+/g, " ").trim();
    if (compact.length <= 180)
        return compact;
    return `${compact.slice(0, 177).trimEnd()}…`;
}
function audienceList(value) {
    if (!Array.isArray(value))
        return [];
    return value.filter((item) => USER_ROLE_VALUES.includes(item));
}
function audienceLabel(roles) {
    if (roles.length === 0)
        return "Everyone";
    const labels = {
        SUPER_ADMIN: "Super admins",
        HR_ADMIN: "HR admins",
        MANAGER: "Managers",
        EMPLOYEE: "Employees",
    };
    return roles.map((role) => labels[role]).join(", ");
}
function visibilityOf(doc) {
    const today = todayKey();
    if (!doc.isPublished)
        return "draft";
    const publish = doc.publishDate instanceof Date ? dateKeyFromDate(doc.publishDate) : today;
    if (publish > today)
        return "scheduled";
    if (doc.expiryDate instanceof Date && dateKeyFromDate(doc.expiryDate) < today) {
        return "expired";
    }
    return "live";
}
function matchesAudience(roles, role) {
    return roles.length === 0 || roles.includes(role);
}
function liveMatch(today) {
    const start = utcDateFromKey(today);
    return {
        isPublished: true,
        $and: [
            {
                $or: [{ publishDate: null }, { publishDate: { $lte: start } }],
            },
            {
                $or: [{ expiryDate: null }, { expiryDate: { $gte: start } }],
            },
        ],
    };
}
function visibilityMatch(visibility, today) {
    const start = utcDateFromKey(today);
    if (visibility === "draft") {
        return { isPublished: false };
    }
    if (visibility === "scheduled") {
        return { isPublished: true, publishDate: { $gt: start } };
    }
    if (visibility === "expired") {
        return { isPublished: true, expiryDate: { $ne: null, $lt: start } };
    }
    return liveMatch(today);
}
function toPublic(doc) {
    const publishDate = doc.publishDate instanceof Date ? dateKeyFromDate(doc.publishDate) : null;
    const expiryDate = doc.expiryDate instanceof Date ? dateKeyFromDate(doc.expiryDate) : null;
    const author = doc.createdBy && typeof doc.createdBy === "object" && "name" in doc.createdBy
        ? doc.createdBy
        : null;
    const targetAudience = audienceList(doc.targetAudience);
    const content = String(doc.content ?? "");
    const visibility = visibilityOf({
        isPublished: Boolean(doc.isPublished),
        publishDate: doc.publishDate instanceof Date ? doc.publishDate : null,
        expiryDate: doc.expiryDate instanceof Date ? doc.expiryDate : null,
    });
    return {
        id: String(doc._id ?? doc.id),
        organizationId: asId(doc.organizationId),
        title: String(doc.title),
        content,
        excerpt: excerptFrom(content),
        category: String(doc.category),
        priority: String(doc.priority ?? "normal"),
        createdBy: author ? { id: String(author._id), name: author.name } : null,
        publishDate,
        publishLabel: publishDate ? formatShortDate(publishDate) : null,
        expiryDate,
        expiryLabel: expiryDate ? formatShortDate(expiryDate) : null,
        targetAudience,
        audienceLabel: audienceLabel(targetAudience),
        isPublished: Boolean(doc.isPublished),
        visibility,
        createdAt: doc.createdAt instanceof Date ? doc.createdAt.toISOString() : String(doc.createdAt ?? ""),
        updatedAt: doc.updatedAt instanceof Date ? doc.updatedAt.toISOString() : String(doc.updatedAt ?? ""),
    };
}
function assertDateRange(publishDate, expiryDate) {
    if (publishDate && expiryDate && expiryDate < publishDate) {
        throw AppError.badRequest(MESSAGES.ANNOUNCEMENT_DATE_RANGE);
    }
}
function featuredScore(item) {
    const priority = PRIORITY_RANK[item.priority] ?? 0;
    const important = item.category === "important" ? 2 : 0;
    return important * 10 + priority;
}
async function loadAnnouncement(auth, id) {
    parseObjectId(id);
    const row = await AnnouncementModel.findOne({
        _id: id,
        organizationId: auth.organizationId,
    })
        .populate({ path: "createdBy", select: "name" })
        .lean();
    if (!row) {
        throw AppError.notFound(MESSAGES.ANNOUNCEMENT_NOT_FOUND);
    }
    return row;
}
function assertReadable(auth, doc) {
    if (canManage(auth))
        return;
    const publicItem = toPublic(doc);
    if (publicItem.visibility !== "live" || !matchesAudience(publicItem.targetAudience, auth.role)) {
        throw AppError.notFound(MESSAGES.ANNOUNCEMENT_NOT_FOUND);
    }
}
export async function listAnnouncements(auth, query) {
    const today = todayKey();
    const manage = canManage(auth);
    const filter = { organizationId: auth.organizationId };
    if (query.category)
        filter.category = query.category;
    if (query.priority)
        filter.priority = query.priority;
    applySearch(filter, ["title", "content"], resolvedSearch(query));
    if (!manage) {
        Object.assign(filter, liveMatch(today));
        filter.$and = [
            ...(filter.$and ?? []),
            {
                $or: [{ targetAudience: { $size: 0 } }, { targetAudience: auth.role }],
            },
        ];
    }
    else if (query.visibility) {
        Object.assign(filter, visibilityMatch(query.visibility, today));
    }
    const pagination = { page: query.page, limit: query.limit };
    const orgId = new mongoose.Types.ObjectId(auth.organizationId);
    const [items, total, summaryRows] = await Promise.all([
        AnnouncementModel.find(filter)
            .populate({ path: "createdBy", select: "name" })
            .sort(mongoSort(query, { publishDate: -1, createdAt: -1 }))
            .skip(paginationSkip(pagination))
            .limit(pagination.limit)
            .lean(),
        AnnouncementModel.countDocuments(filter),
        manage
            ? Promise.all([
                AnnouncementModel.countDocuments({ organizationId: orgId, ...liveMatch(today) }),
                AnnouncementModel.countDocuments({ organizationId: orgId, isPublished: false }),
                AnnouncementModel.countDocuments({
                    organizationId: orgId,
                    ...visibilityMatch("scheduled", today),
                }),
                AnnouncementModel.countDocuments({
                    organizationId: orgId,
                    ...visibilityMatch("expired", today),
                }),
            ])
            : Promise.resolve([0, 0, 0, 0]),
    ]);
    const mapped = items.map((item) => toPublic(item));
    const showFeatured = (!query.visibility || query.visibility === "live") && !query.search;
    let featured = null;
    if (showFeatured) {
        const featuredFilter = {
            organizationId: auth.organizationId,
            ...liveMatch(today),
            $or: [{ category: "important" }, { priority: { $in: ["high", "urgent"] } }],
        };
        if (query.category)
            featuredFilter.category = query.category;
        if (!manage) {
            featuredFilter.$and = [
                ...(featuredFilter.$and ?? []),
                {
                    $or: [{ targetAudience: { $size: 0 } }, { targetAudience: auth.role }],
                },
            ];
        }
        const featuredRows = await AnnouncementModel.find(featuredFilter)
            .populate({ path: "createdBy", select: "name" })
            .sort({ publishDate: -1 })
            .limit(12)
            .lean();
        featured =
            featuredRows
                .map((item) => toPublic(item))
                .sort((a, b) => featuredScore(b) - featuredScore(a))[0] ?? null;
    }
    return {
        items: mapped,
        featured,
        summary: manage
            ? {
                live: summaryRows[0],
                drafts: summaryRows[1],
                scheduled: summaryRows[2],
                expired: summaryRows[3],
            }
            : undefined,
        ...paginationMeta(total, pagination),
    };
}
export async function getAnnouncement(auth, id) {
    const row = await loadAnnouncement(auth, id);
    assertReadable(auth, row);
    return toPublic(row);
}
export async function createAnnouncement(auth, input) {
    const publish = Boolean(input.publish);
    const publishDate = input.publishDate || (publish ? todayKey() : undefined);
    assertDateRange(publishDate, input.expiryDate);
    const created = await AnnouncementModel.create({
        organizationId: auth.organizationId,
        title: input.title,
        content: input.content,
        category: input.category,
        priority: input.priority ?? "normal",
        createdBy: auth.userId,
        publishDate: publishDate ? utcDateFromKey(publishDate) : null,
        expiryDate: input.expiryDate ? utcDateFromKey(input.expiryDate) : null,
        targetAudience: input.targetAudience ?? [],
        isPublished: publish,
    });
    if (publish) {
        await recordActivity(auth.organizationId, {
            title: "Announcement published",
            detail: created.title,
            tone: created.category === "important" || created.priority === "urgent" ? "warning" : "brand",
        });
    }
    const row = await loadAnnouncement(auth, String(created._id));
    const publicItem = toPublic(row);
    if (publish) {
        await notifyAnnouncementPublished({
            organizationId: auth.organizationId,
            actorUserId: auth.userId,
            announcementId: publicItem.id,
            title: publicItem.title,
            excerpt: publicItem.excerpt,
            targetAudience: publicItem.targetAudience,
        });
    }
    return publicItem;
}
export async function updateAnnouncement(auth, id, input) {
    const row = await AnnouncementModel.findOne({
        _id: parseObjectId(id),
        organizationId: auth.organizationId,
    });
    if (!row) {
        throw AppError.notFound(MESSAGES.ANNOUNCEMENT_NOT_FOUND);
    }
    const wasPublished = row.isPublished;
    if (input.title !== undefined)
        row.title = input.title;
    if (input.content !== undefined)
        row.content = input.content;
    if (input.category !== undefined)
        row.category = input.category;
    if (input.priority !== undefined)
        row.priority = input.priority;
    if (input.targetAudience !== undefined)
        row.targetAudience = input.targetAudience;
    if (input.publishDate !== undefined) {
        row.publishDate = input.publishDate ? utcDateFromKey(input.publishDate) : null;
    }
    if (input.expiryDate !== undefined) {
        row.expiryDate = input.expiryDate ? utcDateFromKey(input.expiryDate) : null;
    }
    const publishKey = row.publishDate instanceof Date ? dateKeyFromDate(row.publishDate) : undefined;
    const expiryKey = row.expiryDate instanceof Date ? dateKeyFromDate(row.expiryDate) : undefined;
    assertDateRange(publishKey, expiryKey);
    if (input.publish === true) {
        row.isPublished = true;
        if (!row.publishDate) {
            row.publishDate = utcDateFromKey(todayKey());
        }
    }
    if (input.publish === false) {
        row.isPublished = false;
    }
    await row.save();
    const hydrated = await loadAnnouncement(auth, id);
    const publicItem = toPublic(hydrated);
    if (!wasPublished && row.isPublished) {
        await notifyAnnouncementPublished({
            organizationId: auth.organizationId,
            actorUserId: auth.userId,
            announcementId: publicItem.id,
            title: publicItem.title,
            excerpt: publicItem.excerpt,
            targetAudience: publicItem.targetAudience,
        });
    }
    return publicItem;
}
export async function publishAnnouncement(auth, id) {
    return updateAnnouncement(auth, id, { publish: true });
}
export async function unpublishAnnouncement(auth, id) {
    return updateAnnouncement(auth, id, { publish: false });
}
export async function deleteAnnouncement(auth, id) {
    parseObjectId(id);
    const row = await AnnouncementModel.findOne({
        _id: id,
        organizationId: auth.organizationId,
    });
    if (!row) {
        throw AppError.notFound(MESSAGES.ANNOUNCEMENT_NOT_FOUND);
    }
    await row.deleteOne();
}
//# sourceMappingURL=announcement.service.js.map