"use client";

import { Container } from "@/components/layout";
import { Heading, Label } from "@/components/typography";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container>
      <section className="flex min-h-[60vh] flex-col justify-center">
        <Label as="p" className="mb-[var(--space-3)]">
          Error
        </Label>
        <Heading level="h1">Something went wrong</Heading>
        <p className="mt-[var(--space-3)] max-w-[40ch] text-[var(--fg-muted)]">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-[var(--space-6)]">
          <button
            onClick={() => reset()}
            className="text-overline cursor-pointer border border-[var(--fg)] px-[var(--space-3)] py-[var(--space-1)] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-swiss)] hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            Try Again
          </button>
        </div>
      </section>
    </Container>
  );
}
