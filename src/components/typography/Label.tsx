interface LabelProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Label({
  children,
  className = "",
  as: Component = "span",
}: LabelProps) {
  return (
    <Component className={`text-overline ${className}`}>{children}</Component>
  );
}
