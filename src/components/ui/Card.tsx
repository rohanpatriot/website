import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  description?: string;
  index?: string;
  meta?: string;
  external?: boolean;
  className?: string;
}

export function Card({
  href,
  title,
  description,
  index,
  meta,
  external = false,
  className = "",
}: CardProps) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`card-row block border-t border-[var(--border)] py-[var(--space-3)] no-underline md:py-[var(--space-4)] ${className}`}
      {...linkProps}
    >
      <div className="flex items-start justify-between gap-[var(--space-3)]">
        <div className="flex min-w-0 flex-1 items-start gap-[var(--space-3)] md:gap-[var(--space-4)]">
          {index && (
            <span className="text-mono mt-[2px] shrink-0 text-[var(--text-small)] text-[var(--fg-subtle)]">
              {index}
            </span>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="text-h3">{title}</h3>
            {description && (
              <p className="mt-[var(--space-1)] text-[var(--fg-muted)] leading-[1.5]">
                {description}
              </p>
            )}
            {meta && (
              <span className="text-mono mt-[var(--space-1)] block text-[var(--text-overline)] text-[var(--fg-subtle)]">
                {meta}
              </span>
            )}
          </div>
        </div>
        <span className="arrow mt-1 shrink-0 text-[var(--fg-subtle)]">
          &rarr;
        </span>
      </div>
    </Link>
  );
}
