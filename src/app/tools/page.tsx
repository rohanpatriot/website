import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Heading, Label } from "@/components/typography";
import { Tag, Divider } from "@/components/ui";
import { MountReveal } from "@/components/animation/MountReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools & Products",
  description:
    "A compilation of my favorite tools, projects, and things. Affiliate links in use.",
};

export default function ToolsPage() {
  return (
    <Container>
      <section className="pt-[var(--space-15)] pb-[var(--space-10)]">
        <MountReveal>
          <Label as="p" className="mb-[var(--space-3)]">
            Resources
          </Label>
          <Heading level="h1">Tools &amp; Products</Heading>
          <p className="mt-[var(--space-3)] max-w-[52ch] text-[var(--fg-muted)]">
            A compilation of my favorite tools, projects, and things.
            Affiliate links in use.
          </p>
        </MountReveal>
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
                  <span className="arrow text-[var(--fg-muted)]">→</span>
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
