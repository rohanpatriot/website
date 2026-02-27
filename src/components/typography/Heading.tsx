type Level = "display" | "h1" | "h2" | "h3";

const tagMap: Record<Level, React.ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

const classMap: Record<Level, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

interface HeadingProps {
  level?: Level;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  level = "h1",
  as,
  children,
  className = "",
}: HeadingProps) {
  const Component = as || tagMap[level];
  return (
    <Component className={`${classMap[level]} ${className}`}>
      {children}
    </Component>
  );
}
