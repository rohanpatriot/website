import { Container } from "@/components/layout";
import { Heading, Label } from "@/components/typography";
import { LinkArrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container>
      <section className="flex min-h-[60vh] flex-col justify-center">
        <Label as="p" className="mb-[var(--space-3)]">
          404
        </Label>
        <Heading level="h1">Page not found</Heading>
        <p className="mt-[var(--space-3)] max-w-[40ch] text-[var(--fg-muted)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-[var(--space-6)]">
          <LinkArrow href="/">Back to home</LinkArrow>
        </div>
      </section>
    </Container>
  );
}
