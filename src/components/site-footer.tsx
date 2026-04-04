import Link from "next/link";

import { Container } from "@/components/container";

const footerLinks = [
  { href: "/industries", label: "Browse industries" },
  { href: "/compare/chatgpt-vs-claude", label: "Top comparison" },
  { href: "/tools/chatgpt", label: "Top tool review" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclosure", label: "Disclosure" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="grid gap-8 py-12 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
            AI Tools by Industry
          </p>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Independent buyer guides for finding the best AI tools for specific
            industries, workflows, and growth stages.
          </p>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Start with an industry guide, open a tool review, then use a
            comparison page when you are choosing between finalists.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-xs font-medium text-slate-500">
            <span>Updated monthly</span>
            <span>Researched tools</span>
            <span>Independent recommendations</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
