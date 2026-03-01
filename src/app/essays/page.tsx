import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Heading, Label, Mono } from "@/components/typography";
import { Card, Divider } from "@/components/ui";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { MountReveal } from "@/components/animation/MountReveal";
import { getEssaysByYear } from "@/lib/essays";

export const metadata: Metadata = {
  title: "Essays",
  description: "Writing on product leadership, team building, and strategy.",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function EssaysPage() {
  const essaysByYear = getEssaysByYear();
  const years = Object.keys(essaysByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <Container>
      <section className="pt-[var(--space-15)] pb-[var(--space-10)]">
        <MountReveal>
          <Label as="p" className="mb-[var(--space-3)]">
            Writing
          </Label>
          <Heading level="h1">Essays</Heading>
          <p className="mt-[var(--space-3)] max-w-[52ch] text-[var(--fg-muted)]">
            On product leadership, growing teams, and building things that
            matter.
          </p>
        </MountReveal>
      </section>

      <Divider strong />

      {years.map((year) => (
        <section key={year} className="py-[var(--space-5)]">
          <ScrollReveal>
            <Mono className="mb-[var(--space-2)] block text-[var(--text-small)] text-[var(--fg-subtle)]">
              {year}
            </Mono>
          </ScrollReveal>

          <StaggerChildren>
            {essaysByYear[year].map((essay) => (
              <StaggerItem key={essay.slug}>
                <Card
                  href={`/essays/${essay.slug}`}
                  title={essay.title}
                  description={essay.description}
                  meta={`${formatDate(essay.date)} · ${essay.readingTime}`}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>
      ))}
    </Container>
  );
}
