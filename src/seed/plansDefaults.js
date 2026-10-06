/** Default pricing — aligned with create-space/src/data/pricingPlans.ts */

const basicFeatureLabels = [
  "WhatsApp bulk messaging",
  "Template campaigns & segments",
  "Shared inbox",
  "Up to 3 users",
  "Email support",
];

const proFeatureLabels = [
  "Everything in Basic",
  "Meta ads lead sync",
  "Click-to-WhatsApp campaigns",
  "WhatsApp chatbot builder",
  "AI-assisted replies",
  "Human handoff & routing",
  "Priority chat support",
];

export const DEFAULT_TRIAL = {
  enabled: true,
  days: 14,
  title: "14-day free trial",
  blurb: "Try Basic features with no credit card. Upgrade to Monthly or Yearly anytime.",
  cta: "Start free trial",
  features: [
    "Full Basic plan access for 14 days",
    "WhatsApp bulk messaging & shared inbox",
    "No credit card required",
    "Cancel anytime before the trial ends",
  ],
};

function planDoc(p) {
  return {
    id: p.slug,
    slug: p.slug,
    name: p.name,
    tier: p.tier,
    billingCycle: p.billingCycle,
    priceLabel: p.priceLabel,
    periodLabel: p.periodLabel,
    amountInPaise: p.amountInPaise,
    blurb: p.blurb,
    cta: p.cta,
    highlighted: p.highlighted,
    isActive: true,
    sortOrder: p.sortOrder,
    trialDays: p.trialDays,
    freeTrialEnabled: true,
    features: p.features,
    addons: p.addons ?? [],
  };
}

export const DEFAULT_PLANS = [
  planDoc({
    slug: "basic-monthly",
    name: "Basic",
    tier: "basic",
    billingCycle: "monthly",
    priceLabel: "₹4,999",
    periodLabel: "/month",
    amountInPaise: 499900,
    blurb: "WhatsApp bulk messaging for one team.",
    cta: "Get started",
    highlighted: false,
    sortOrder: 10,
    trialDays: 14,
    features: basicFeatureLabels,
    addons: [],
  }),
  planDoc({
    slug: "basic-yearly",
    name: "Basic",
    tier: "basic",
    billingCycle: "yearly",
    priceLabel: "₹49,990",
    periodLabel: "/year",
    amountInPaise: 4999000,
    blurb: "WhatsApp bulk messaging — 2 months free vs monthly.",
    cta: "Get started",
    highlighted: false,
    sortOrder: 11,
    trialDays: 14,
    features: basicFeatureLabels,
    addons: [],
  }),
  planDoc({
    slug: "pro-monthly",
    name: "Pro",
    tier: "pro",
    billingCycle: "monthly",
    priceLabel: "₹12,999",
    periodLabel: "/month",
    amountInPaise: 1299900,
    blurb: "Bulk messaging, Meta ads and chatbot in one plan.",
    cta: "Start Pro",
    highlighted: true,
    sortOrder: 20,
    trialDays: 14,
    features: proFeatureLabels,
    addons: [],
  }),
  planDoc({
    slug: "pro-yearly",
    name: "Pro",
    tier: "pro",
    billingCycle: "yearly",
    priceLabel: "₹1,29,990",
    periodLabel: "/year",
    amountInPaise: 12999000,
    blurb: "Full stack at a yearly rate — 2 months free vs monthly.",
    cta: "Start Pro",
    highlighted: true,
    sortOrder: 21,
    trialDays: 14,
    features: proFeatureLabels,
    addons: [],
  }),
];

export function defaultPlanCatalog() {
  return {
    trial: DEFAULT_TRIAL,
    plans: DEFAULT_PLANS,
    updatedAt: new Date().toISOString(),
  };
}
