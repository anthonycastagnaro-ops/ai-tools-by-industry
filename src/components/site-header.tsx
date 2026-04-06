import Link from "next/link";

import { Container } from "@/components/container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries" },
  { href: "/compare/chatgpt-vs-claude", label: "Top Comparison" },
  { href: "/about", label: "About", desktopOnly: true },
  { href: "/contact", label: "Contact", desktopOnly: true },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="border-b border-slate-200 bg-[var(--surface-alt)]">
        <Container className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 text-xs font-medium text-slate-700">
          <span>Updated monthly</span>
          <span>Researched tools</span>
          <span>Independent recommendations</span>
        </Container>
      </div>
      <Container className="flex flex-col gap-3 py-3 md:h-18 md:flex-row md:items-center md:justify-between md:py-0">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand)] text-sm font-bold text-white">
            AI
          </span>
          <span className="text-xs font-semibold tracking-[0.18em] text-slate-900 uppercase sm:text-sm">
            AI Tools by Industry
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium text-slate-600 transition hover:text-slate-950 ${
                item.desktopOnly ? "hidden md:inline-flex" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
