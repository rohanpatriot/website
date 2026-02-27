import Link from "next/link";

interface LinkArrowProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function LinkArrow({
  href,
  children,
  external = false,
  className = "",
}: LinkArrowProps) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`link-arrow inline-flex items-center gap-[6px] no-underline ${className}`}
      {...linkProps}
    >
      <span>{children}</span>
      <span className="arrow">&rarr;</span>
    </Link>
  );
}
