const SectionIds = {
  HowItWorks: "how-it-works",
  Security: "security",
  TechStack: "tech-stack",
} as const;

export type SectionId = (typeof SectionIds)[keyof typeof SectionIds];

export default SectionIds;
