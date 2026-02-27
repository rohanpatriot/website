interface MonoProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Mono({
  children,
  className = "",
  as: Component = "span",
}: MonoProps) {
  return (
    <Component className={`text-mono ${className}`}>{children}</Component>
  );
}
