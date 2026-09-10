const SectionIds = {
  HowItWorks: "how-it-works",
  Security: "security",
  TechStack: "tech-stack",
  Pricing: "pricing",
} as const;

export type SectionId = (typeof SectionIds)[keyof typeof SectionIds];

export default SectionIds;
