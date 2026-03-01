import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { Heading, Label, Mono } from "@/components/typography";
import { Divider } from "@/components/ui";
import { MountReveal } from "@/components/animation/MountReveal";
import {
  getEssayBySlug,
  getEssaySlugs,
  getAdjacentEssays,
} from "@/lib/essays";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getEssayBySlug(slug);
  return {
    title: meta.title,
    description: meta.description,
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function EssayPage({ params }: PageProps) {
  const { slug } = await params;
  const { meta } = getEssayBySlug(slug);
  const { prev, next } = getAdjacentEssays(slug);

  const { default: Content } = await import(
    `@/content/essays/${slug}.mdx`
  );

  return (
    <Container>
      {/* ── Header ─────────────────────────────────── */}
      <header className="pt-[var(--space-15)] pb-[var(--space-10)]">
        <MountReveal>
          <Mono className="text-[var(--text-overline)] text-[var(--fg-muted)]">
            {formatDate(meta.date)} · {meta.readingTime}
          </Mono>

          <Heading level="h1" className="mt-[var(--space-3)] max-w-[20ch]">
            {meta.title}
          </Heading>

          <p className="mt-[var(--space-3)] max-w-[52ch] text-[var(--fg-muted)]">
            {meta.description}
          </p>
        </MountReveal>
      </header>

      <Divider strong />

      {/* ── Prose ──────────────────────────────────── */}
      <article className="prose-swiss py-[var(--space-10)]">
        <Content />
      </article>

      <Divider />

      {/* ── Prev / Next ────────────────────────────── */}
      <nav className="grid grid-cols-1 gap-[var(--space-1)] py-[var(--space-8)] md:grid-cols-2">
        {prev ? (
          <Link
            href={`/essays/${prev.slug}`}
            className="card-row nav-essay-link group block py-[var(--space-3)] no-underline"
          >
            <Label as="span" className="mb-[var(--space-1)] block">
              Previous
            </Label>
            <span className="text-h3">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/essays/${next.slug}`}
            className="card-row nav-essay-link group block py-[var(--space-3)] no-underline md:text-right"
          >
            <Label as="span" className="mb-[var(--space-1)] block">
              Next
            </Label>
            <span className="text-h3">{next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </Container>
  );
}
