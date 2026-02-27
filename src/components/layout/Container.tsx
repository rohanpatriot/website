interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[var(--max-w-content)] px-[var(--space-3)] md:px-[var(--space-6)] ${className}`}
    >
      {children}
    </Component>
  );
}
