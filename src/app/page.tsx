import { Container } from "@/components/layout";
import { Heading, Label } from "@/components/typography";
import { Divider, Card, LinkArrow, Tag } from "@/components/ui";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";
import { TextReveal } from "@/components/animation/TextReveal";

const selectedEssays = [
  {
    title: "The product leader's job is to be wrong faster",
    description:
      "Why the best product decisions come from rapid invalidation, not brilliant intuition.",
    href: "/essays/wrong-faster",
    meta: "2025",
  },
  {
    title: "Scaling taste across a growing team",
    description:
      "How to embed design sensibility into an organization without becoming a bottleneck.",
    href: "/essays/scaling-taste",
    meta: "2025",
  },
  {
    title: "Building in public is a distribution strategy",
    description:
      "The compounding returns of sharing your work before it's ready.",
    href: "/essays/building-in-public",
    meta: "2024",
  },
];

const tools = [
  {
    category: "Product",
    title: "Outcome Mapper",
    description:
      "A lightweight framework for connecting business outcomes to product metrics and team actions.",
    tags: ["Strategy", "Metrics"],
    href: "https://outcomemapper.io",
    external: true,
  },
  {
    category: "Growth",
    title: "Loop Builder",
    description:
      "Visual tool for mapping growth loops and identifying compounding feedback mechanisms.",
    tags: ["Growth", "Systems"],
    href: "https://loopbuilder.dev",
    external: true,
  },
  {
    category: "Leadership",
    title: "1:1 Toolkit",
    description:
      "Structured templates and question banks for running high-signal one-on-one meetings.",
    tags: ["Management", "People"],
    href: "https://oneononetoolkit.com",
    external: true,
  },
];

export default function HomePage() {
  return (
    <Container>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="pt-[var(--space-15)] pb-[var(--space-10)]">
        <Heading level="display" className="max-w-[16ch]">
          <TextReveal text="Growing ideas and people." />
        </Heading>

        <div className="mt-[var(--space-6)]">
          <Label as="p">Business &amp; Product Leader</Label>
          <p className="mt-[var(--space-2)] max-w-[48ch] text-[var(--fg-muted)]">
            I build products, grow teams, and write about the intersection of
            strategy, craft, and leadership.
          </p>
        </div>
      </section>

      <Divider strong />

      {/* ── Selected Essays ───────────────────────────── */}
      <section className="py-[var(--space-10)]">
        <ScrollReveal>
          <Label as="p" className="mb-[var(--space-6)]">
            Selected Essays
          </Label>
        </ScrollReveal>

        <StaggerChildren>
          {selectedEssays.map((essay, i) => (
            <StaggerItem key={essay.href}>
              <Card
                href={essay.href}
                title={essay.title}
                description={essay.description}
                index={String(i + 1).padStart(2, "0")}
                meta={essay.meta}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ScrollReveal>
          <div className="mt-[var(--space-6)]">
            <LinkArrow href="/essays">All Essays</LinkArrow>
          </div>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ── Tools & Products ──────────────────────────── */}
      <section className="py-[var(--space-10)]">
        <ScrollReveal>
          <Label as="p" className="mb-[var(--space-6)]">
            Tools &amp; Products
          </Label>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 gap-[var(--space-1)] sm:grid-cols-2 sm:gap-[var(--space-3)] lg:grid-cols-3 lg:gap-[var(--space-4)]">
          {tools.map((tool) => (
            <StaggerItem key={tool.title}>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-row block no-underline border-t border-[var(--border)] py-[var(--space-4)]"
              >
                <div className="flex items-start justify-between">
                  <Label as="p" className="mb-[var(--space-2)]">
                    {tool.category}
                  </Label>
                  <span className="card-row-arrow text-[var(--fg-muted)]">→</span>
                </div>
                <h3 className="text-h3">{tool.title}</h3>
                <p className="mt-[var(--space-1)] text-[var(--text-small)] text-[var(--fg-muted)] leading-[1.5]">
                  {tool.description}
                </p>
                <div className="mt-[var(--space-3)] flex flex-wrap gap-[var(--space-1)]">
                  {tool.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-[var(--space-6)]">
          <LinkArrow href="/tools">All Tools</LinkArrow>
        </div>
      </section>
    </Container>
  );
}
