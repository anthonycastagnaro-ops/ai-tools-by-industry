import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";

export function WhyTrust({
  title = "Why trust this site",
  description = "The site is structured like an editorial buyer guide, not a thin directory. Recommendations are organized around workflow fit, real buying decisions, and practical next steps for serious software buyers.",
  items,
}: {
  title?: string;
  description?: string;
  items: string[];
}) {
  return (
    <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <SectionHeading eyebrow="Why Trust This Site" title={title} description={description} />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-3xl bg-[var(--surface-alt)] p-6 text-sm leading-7 text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/about"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          About the site
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Contact editorial team
        </Link>
        <Link
          href="/disclosure"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Disclosure policy
        </Link>
      </div>
    </section>
  );
}
