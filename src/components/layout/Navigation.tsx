"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { easeSwiss } from "@/lib/animations";

const links = [
  { href: "/essays", label: "Essays" },
  { href: "/tools", label: "Tools", matches: ["/tools", "/projects"] },
  { href: "/about", label: "About" },
];

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.4, ease: easeSwiss },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: easeSwiss },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 40,
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeSwiss,
      delay: 0.15 + i * 0.08,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easeSwiss,
      delay: i * 0.04,
    },
  }),
};

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(link: (typeof links)[number]) {
    if (link.matches) {
      return link.matches.some((m) => pathname.startsWith(m));
    }
    return pathname.startsWith(link.href);
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 z-50 w-full bg-[var(--bg)]"
        style={{
          borderBottom: "1px solid",
          borderColor:
            scrolled && !menuOpen ? "var(--border)" : "transparent",
          transition: `border-color var(--duration-base) var(--ease-swiss)`,
        }}
      >
        <Container>
          <div className="flex h-[var(--space-8)] items-center justify-between">
            <Link
              href="/"
              className="relative z-[60] text-mono text-[var(--text-small)] font-medium tracking-tight no-underline"
            >
              @huntsyea
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-[var(--space-5)] md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-[var(--text-small)] ${
                    isActive(link) ? "nav-link--active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <div className="flex w-[18px] flex-col items-center justify-center">
                <span
                  className="block h-px w-[18px] bg-[var(--fg)]"
                  style={{
                    transform: menuOpen
                      ? "translateY(0.5px) rotate(45deg)"
                      : "translateY(-2.5px) rotate(0deg)",
                    transition: `transform var(--duration-base) var(--ease-swiss)`,
                  }}
                />
                <span
                  className="block h-px w-[18px] bg-[var(--fg)]"
                  style={{
                    transform: menuOpen
                      ? "translateY(-0.5px) rotate(-45deg)"
                      : "translateY(2.5px) rotate(0deg)",
                    transition: `transform var(--duration-base) var(--ease-swiss)`,
                  }}
                />
              </div>
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col bg-[var(--bg)] md:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-1 flex-col justify-center px-[var(--space-3)]">
              <nav className="flex flex-col gap-[var(--space-4)]">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="exit"
                    custom={i}
                  >
                    <Link
                      href={link.href}
                      className="text-display block no-underline"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom mark */}
            <motion.div
              className="px-[var(--space-3)] pb-[var(--space-6)]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: easeSwiss },
              }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <span className="text-mono text-[var(--text-overline)] text-[var(--fg-subtle)]">
                Business &amp; Product Leader
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
