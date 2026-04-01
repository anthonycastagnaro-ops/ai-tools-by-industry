import Link from "next/link";

import { AffiliateLink } from "@/components/affiliate-link";
import type { Tool } from "@/lib/types";
import { getToolPricingUrl, getToolUrl } from "@/lib/utils";

export function ToolCard({
  tool,
  compact = false,
}: {
  tool: Tool;
  compact?: boolean;
}) {
  return (
    <article
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${
        compact ? "" : "h-full"
      }`}
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--brand)] uppercase">
        {tool.category}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-slate-950">{tool.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{tool.description}</p>
      <p className="mt-3 text-sm font-medium leading-7 text-slate-800">
        {tool.popularityNote}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <AffiliateLink
          href={tool.affiliateUrl}
          toolSlug={tool.slug}
          toolName={tool.name}
          placement="tool_card"
          pageType="home"
          ctaType="internal"
          ctaLocation="bottom"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Start Free Trial
        </AffiliateLink>
        <Link
          href={getToolPricingUrl(tool.slug)}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          View Pricing
        </Link>
        <Link
          href={getToolUrl(tool.slug)}
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          See Why It&apos;s #1
        </Link>
      </div>
    </article>
  );
}
