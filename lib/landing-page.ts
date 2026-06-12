export type LandingFeature = {
  title: string;
  description: string;
};

export type LandingPageContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  features: LandingFeature[];
  accentColor: string;
};

export const DEFAULT_LANDING_PAGE: LandingPageContent = {
  eyebrow: "Bayena",
  headline: "Branding and growth for companies that want to stand out",
  subheadline:
    "Strategy, design, campaigns, and web — a studio built for brands ready to scale.",
  primaryCtaText: "Start a project",
  primaryCtaHref: "mailto:hello@bayena.com",
  secondaryCtaText: "View our work",
  secondaryCtaHref: "#services",
  features: [
    {
      title: "Brand identity",
      description: "Logos, guidelines, and visual systems that feel unmistakably you.",
    },
    {
      title: "Campaigns",
      description: "Paid and organic growth with creative that converts.",
    },
    {
      title: "Web & landing pages",
      description: "Fast, polished sites built to capture leads and tell your story.",
    },
  ],
  accentColor: "#ea580c",
};
