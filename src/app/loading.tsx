import { Container } from "@/components/layout";

export default function Loading() {
  return (
    <Container>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-overline animate-blink text-[var(--fg-muted)]">
          Loading
        </div>
      </div>
    </Container>
  );
}
