import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Heading, Label } from "@/components/typography";
import { Tag, Divider } from "@/components/ui";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";

export const metadata: Metadata = {
  title: "Tools & Products",
  description:
    "Frameworks, templates, and tools for product leaders and builders.",
};

const tools = [
  {
    category: "Product",
    title: "Outcome Mapper",
    description:
      "A lightweight framework for connecting business outcomes to product metrics and team actions. Maps strategy to execution without the overhead of full OKR systems.",
    tags: ["Strategy", "Metrics", "Framework"],
    href: "https://outcomemapper.io",
    external: true,
  },
  {
    category: "Growth",
    title: "Loop Builder",
    description:
      "Visual tool for mapping growth loops and identifying compounding feedback mechanisms. Helps teams see the system, not just the funnel.",
    tags: ["Growth", "Systems", "Visual"],
    href: "https://loopbuilder.dev",
    external: true,
  },
  {
    category: "Leadership",
    title: "1:1 Toolkit",
    description:
      "Structured templates and question banks for running high-signal one-on-one meetings. Includes career conversation frameworks and skip-level guides.",
    tags: ["Management", "People", "Templates"],
    href: "https://oneononetoolkit.com",
    external: true,
  },
  {
    category: "Engineering",
    title: "RFC Template",
    description:
      "A decision document template designed for async-first engineering teams. Separates problem, solution, and alternatives into reviewable sections.",
    tags: ["Process", "Documentation", "Async"],
    href: "https://rfctemplate.dev",
    external: true,
  },
  {
    category: "Product",
    title: "Assumption Tracker",
    description:
      "Spreadsheet-based tool for cataloging and prioritizing product assumptions. Ranks by risk and effort to test, creating a natural experimentation backlog.",
    tags: ["Experimentation", "Risk", "Prioritization"],
    href: "https://assumptiontracker.io",
    external: true,
  },
  {
    category: "Leadership",
    title: "Team Health Pulse",
    description:
      "A lightweight, async-friendly survey for measuring team health across six dimensions. Designed to surface patterns, not scores.",
    tags: ["Culture", "Feedback", "Teams"],
    href: "https://teamhealthpulse.com",
    external: true,
  },
];

export default function ToolsPage() {
  return (
    <Container>
      <section className="pt-[var(--space-15)] pb-[var(--space-10)]">
        <ScrollReveal>
          <Label as="p" className="mb-[var(--space-3)]">
            Resources
          </Label>
          <Heading level="h1">Tools &amp; Products</Heading>
          <p className="mt-[var(--space-3)] max-w-[52ch] text-[var(--fg-muted)]">
            Frameworks, templates, and tools built from years of product
            leadership. Free to use and adapt.
          </p>
        </ScrollReveal>
      </section>

      <Divider strong />

      <StaggerChildren>
        {tools.map((tool) => (
          <StaggerItem key={tool.title}>
            <a
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-row block no-underline border-t border-[var(--border)] py-[var(--space-5)] first:border-t-0"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between">
                  <Label as="p" className="mb-[var(--space-2)]">
                    {tool.category}
                  </Label>
                  <span className="card-row-arrow text-[var(--fg-muted)]">→</span>
                </div>
                <h3 className="text-h3">{tool.title}</h3>
                <p className="mt-[var(--space-1)] max-w-[56ch] text-[var(--fg-muted)] leading-[1.5]">
                  {tool.description}
                </p>
                <div className="mt-[var(--space-3)] flex flex-wrap gap-[var(--space-1)]">
                  {tool.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Container>
  );
}
