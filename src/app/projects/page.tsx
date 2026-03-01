import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Heading, Label } from "@/components/typography";
import { GridRow, Divider } from "@/components/ui";
import { MountReveal } from "@/components/animation/MountReveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animation/StaggerChildren";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work and career highlights.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <section className="pt-[var(--space-15)] pb-[var(--space-10)]">
        <MountReveal>
          <Label as="p" className="mb-[var(--space-3)]">
            Projects
          </Label>
          <Heading level="h1">Projects</Heading>
          <p className="mt-[var(--space-3)] max-w-[52ch] text-[var(--fg-muted)]">
            A selected history of the teams, products, and problems I&apos;ve
            worked on.
          </p>
        </MountReveal>
      </section>

      <Divider strong />

      <section className="py-[var(--space-2)]">
        <StaggerChildren>
          {projects.map((project, i) => (
            <StaggerItem key={project.period}>
              <GridRow label={project.period} className={i === 0 ? "!border-t-0" : ""}>
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
