import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-[var(--space-12)] border-t border-[var(--border)]">
      <Container>
        <div className="flex flex-col gap-[var(--space-2)] py-[var(--space-6)] md:flex-row md:items-center md:justify-between">
          <span className="text-mono text-[var(--text-overline)] text-[var(--fg-muted)]">
            &copy; {new Date().getFullYear()} @huntsyea
          </span>

          <div className="flex gap-[var(--space-4)]">
            <Link
              href="https://twitter.com/huntsyea"
              className="nav-link nav-link--muted text-mono text-[var(--text-overline)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com/in/huntsyea"
              className="nav-link nav-link--muted text-mono text-[var(--text-overline)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/huntsyea"
              className="nav-link nav-link--muted text-mono text-[var(--text-overline)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
