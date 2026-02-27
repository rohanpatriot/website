interface GridRowProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function GridRow({ label, children, className = "" }: GridRowProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-[var(--space-1)] border-t border-[var(--border)] py-[var(--space-4)] md:grid-cols-[1fr_2fr] md:gap-[var(--space-6)] ${className}`}
    >
      <span className="text-overline pt-px">{label}</span>
      <div>{children}</div>
    </div>
  );
}
