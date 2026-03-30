import Link from "next/link";

import type { Industry } from "@/lib/types";
import { getIndustryUrl } from "@/lib/utils";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={getIndustryUrl(industry.slug)}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--brand)] uppercase">
        {industry.audience}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-950">{industry.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{industry.intro}</p>
      <p className="mt-4 text-sm font-medium text-slate-900 transition group-hover:text-[var(--brand)]">
        Explore the guide
      </p>
    </Link>
  );
}
