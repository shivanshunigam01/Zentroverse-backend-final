export declare const CLIENT_STATUSES: readonly ["LEAD", "ACTIVE", "INACTIVE", "CLOSED"];
export type ClientStatus = (typeof CLIENT_STATUSES)[number];
export declare const CLIENT_ONBOARDING_STATUSES: readonly ["PENDING", "COMPLETED", "REJECTED"];
export type ClientOnboardingStatus = (typeof CLIENT_ONBOARDING_STATUSES)[number];
export declare const CLIENT_KYC_STATUSES: readonly ["PENDING", "VERIFIED", "REJECTED"];
export type ClientKycStatus = (typeof CLIENT_KYC_STATUSES)[number];
export declare const CLIENT_STATUS_LABELS: Record<ClientStatus, string>;
export declare const CLIENT_ONBOARDING_LABELS: Record<ClientOnboardingStatus, string>;
export declare const CLIENT_KYC_LABELS: Record<ClientKycStatus, string>;
