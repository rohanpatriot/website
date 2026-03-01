import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-h1 mt-[2.5em] mb-[0.75em] first:mt-0" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-h2 mt-[2em] mb-[0.625em]" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-h3 mt-[1.75em] mb-[0.5em]" {...props} />
  ),
  p: (props) => <p className="mb-[1.5em] last:mb-0" {...props} />,
  a: (props) => (
    <a
      className="link-underline text-[var(--fg)]"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-[var(--black)] pl-[var(--space-3)] my-[2em] text-[var(--fg-muted)] not-italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="text-mono bg-[var(--gray-100)] px-[0.375em] py-[0.125em] text-[0.875em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-[var(--gray-900)] text-[var(--gray-100)] p-[var(--space-3)] overflow-x-auto my-[2em] text-[0.8125rem] leading-[1.7] [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
      {...props}
    />
  ),
  hr: () => (
    <hr className="border-0 border-t border-[var(--border)] my-[3em]" />
  ),
  ul: (props) => (
    <ul className="pl-[1.25em] mb-[1.5em] list-disc" {...props} />
  ),
  ol: (props) => (
    <ol className="pl-[1.25em] mb-[1.5em] list-decimal" {...props} />
  ),
  li: (props) => <li className="mb-[0.375em]" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
};
