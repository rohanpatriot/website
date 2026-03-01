import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Heading, Label } from "@/components/typography";
import { GridRow, Divider } from "@/components/ui";
import { MountReveal } from "@/components/animation/MountReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";

export const metadata: Metadata = {
  title: "About",
  description: "Business and Product Leader. Growing ideas and people.",
};

export default function AboutPage() {
  return (
    <Container>
      <section className="pt-[var(--space-15)] pb-[var(--space-10)]">
        <MountReveal>
          <Label as="p" className="mb-[var(--space-3)]">
            Info
          </Label>
          <Heading level="h1">About</Heading>
        </MountReveal>
      </section>

      <Divider strong />

      <section className="py-[var(--space-2)]">
        <StaggerChildren>
          <StaggerItem>
            <GridRow label="Bio" className="!border-t-0">
              <div className="max-w-[48ch] space-y-[1.25em] text-[var(--fg-muted)] leading-[var(--leading-body)]">
                <p>
                  I&apos;m a product and business leader focused on building
                  things that matter. My work sits at the intersection of
                  strategy, design, and execution — figuring out what to build,
                  why it matters, and how to do it well.
                </p>
                <p>
                  I&apos;ve spent the last decade building products, growing
                  teams, and scaling organizations from early-stage to
                  growth. I care deeply about craft, clarity, and creating
                  environments where talented people do their best work.
                </p>
                <p>
                  I write about product leadership, team building, and the
                  systems that make good work possible. I believe the best
                  products come from teams with strong taste, low ego, and high
                  standards.
                </p>
              </div>
            </GridRow>
          </StaggerItem>

          <StaggerItem>
            <GridRow label="Values">
              <ul className="space-y-[var(--space-2)] list-none">
                <li>
                  <strong className="font-semibold">Taste is a skill.</strong>{" "}
                  <span className="text-[var(--fg-muted)]">
                    Design sensibility can be developed through deliberate
                    exposure and practice.
                  </span>
                </li>
                <li>
                  <strong className="font-semibold">
                    Speed over certainty.
                  </strong>{" "}
                  <span className="text-[var(--fg-muted)]">
                    The best way to be right is to be wrong quickly and cheaply.
                  </span>
                </li>
                <li>
                  <strong className="font-semibold">
                    Systems over heroics.
                  </strong>{" "}
                  <span className="text-[var(--fg-muted)]">
                    Sustainable results come from good processes, not individual
                    brilliance.
                  </span>
                </li>
                <li>
                  <strong className="font-semibold">Write it down.</strong>{" "}
                  <span className="text-[var(--fg-muted)]">
                    Clear thinking requires clear writing. If you can&apos;t
                    write it, you don&apos;t understand it.
                  </span>
                </li>
              </ul>
            </GridRow>
          </StaggerItem>

          <StaggerItem>
            <GridRow label="Experience">
              <div className="space-y-[var(--space-3)]">
                <div>
                  <p className="font-medium">Product &amp; Growth Lead</p>
                  <p className="text-[var(--text-small)] text-[var(--fg-muted)]">
                    Series B SaaS · 2023 — Present
                  </p>
                </div>
                <div>
                  <p className="font-medium">Head of Product</p>
                  <p className="text-[var(--text-small)] text-[var(--fg-muted)]">
                    Series A Startup · 2021 — 2023
                  </p>
                </div>
                <div>
                  <p className="font-medium">Senior Product Manager</p>
                  <p className="text-[var(--text-small)] text-[var(--fg-muted)]">
                    Growth-stage Fintech · 2019 — 2021
                  </p>
                </div>
              </div>
            </GridRow>
          </StaggerItem>

          <StaggerItem>
            <GridRow label="Contact">
              <div className="space-y-[var(--space-1)]">
                <p>
                  <a
                    href="mailto:hunter@huntsyea.com"
                    className="link-underline"
                  >
                    hunter@huntsyea.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://twitter.com/huntsyea"
                    className="link-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  {" · "}
                  <a
                    href="https://linkedin.com/in/huntsyea"
                    className="link-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  {" · "}
                  <a
                    href="https://github.com/huntsyea"
                    className="link-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </GridRow>
          </StaggerItem>
        </StaggerChildren>
      </section>
    </Container>
  );
}
