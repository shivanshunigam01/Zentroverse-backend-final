export const NOTIFICATION_TYPES = [
  "leave",
  "attendance",
  "announcement",
  "document",
  "payroll",
  "recruitment",
  "system",
] as const

export type NotificationType = (typeof NOTIFICATION_TYPES)[number]
