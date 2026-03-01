export interface Project {
  period: string;
  title: string;
  company: string;
  description: string;
}

export const projects: Project[] = [
  {
    period: "2023 — Present",
    title: "Product & Growth",
    company: "Series B SaaS",
    description:
      "Leading product and growth for a developer tools platform. Scaled from 10K to 100K+ users through product-led growth loops and systematic experimentation.",
  },
  {
    period: "2021 — 2023",
    title: "Head of Product",
    company: "Series A Startup",
    description:
      "Built and led a product team of 8 across three product lines. Established the product development process, hiring bar, and design review culture.",
  },
  {
    period: "2019 — 2021",
    title: "Senior Product Manager",
    company: "Growth-stage Fintech",
    description:
      "Owned the core payments experience serving 2M+ users. Shipped a redesigned onboarding flow that improved activation by 34%.",
  },
  {
    period: "2017 — 2019",
    title: "Product Manager",
    company: "Enterprise Platform",
    description:
      "First PM hire. Defined the product strategy for the platform's API and developer ecosystem. Grew third-party integrations from 12 to 80+.",
  },
  {
    period: "2015 — 2017",
    title: "Business Operations",
    company: "Management Consulting",
    description:
      "Strategy and operations consulting for Fortune 500 technology companies. Focused on go-to-market strategy and organizational design.",
  },
];
