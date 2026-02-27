import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Heading, Label } from "@/components/typography";
import { GridRow, Divider } from "@/components/ui";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work and career highlights.",
};

const projects = [
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

export default function ProjectsPage() {
  return (
    <Container>
      <section className="pt-[var(--space-15)] pb-[var(--space-10)]">
        <ScrollReveal>
          <Label as="p" className="mb-[var(--space-3)]">
            Projects
          </Label>
          <Heading level="h1">Projects</Heading>
          <p className="mt-[var(--space-3)] max-w-[52ch] text-[var(--fg-muted)]">
            A selected history of the teams, products, and problems I&apos;ve
            worked on.
          </p>
        </ScrollReveal>
      </section>

      <Divider strong />

      <section className="py-[var(--space-2)]">
        <StaggerChildren>
          {projects.map((project) => (
            <StaggerItem key={project.period}>
              <GridRow label={project.period}>
                <h3 className="text-h3">{project.title}</h3>
                <p className="mt-[2px] text-[var(--text-small)] text-[var(--fg-muted)]">
                  {project.company}
                </p>
                <p className="mt-[var(--space-2)] max-w-[48ch] text-[var(--fg-muted)] leading-[1.5]">
                  {project.description}
                </p>
              </GridRow>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>
    </Container>
  );
}
