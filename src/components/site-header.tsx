import Link from "next/link";

import { Container } from "@/components/container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand)] text-sm font-bold text-white">
            AI
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
            AI Tools by Industry
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
