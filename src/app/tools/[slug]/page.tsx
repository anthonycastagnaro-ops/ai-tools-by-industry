import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AffiliateLink } from "@/components/affiliate-link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { EmailCapture } from "@/components/email-capture";
import { SectionHeading } from "@/components/section-heading";
import { affiliateLinks } from "@/data/affiliate-links";
import { tools } from "@/data/tools";
import { buildAbsoluteUrl } from "@/lib/site";
import {
  getAlternativesForTool,
  getBestIndustriesForTool,
  getComparisonUrl,
  getDefaultComparisonUrl,
  getIndustryUrl,
  getPrimaryToolCtaUrl,
  getToolBySlug,
  getToolPricingHref,
  getToolUrl,
} from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {};
  }

  const title = `${tool.name} Review`;
  const description = `${tool.name} overview, best use cases, pricing, pros and cons, best industries, and alternatives.`;
  const path = getToolUrl(tool.slug);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl(path),
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const bestIndustries = getBestIndustriesForTool(tool.slug);
  const alternatives = getAlternativesForTool(tool);
  const comparisonCandidates = alternatives.slice(0, 3);
  const pricingHref = getToolPricingHref(tool);
  const compareHref = comparisonCandidates[0]
    ? getComparisonUrl(tool.slug, comparisonCandidates[0].slug)
    : getDefaultComparisonUrl(tool);

  return (
    <div className="pb-20">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/industries", label: "Industries" },
          { label: tool.name },
        ]}
      />

      <Container className="space-y-14 py-10">
        <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand)] uppercase">
              {tool.category}
            </p>
            <h1 className="font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
              {tool.name}
            </h1>
            <p className="text-lg leading-8 text-slate-600">{tool.overview}</p>
            <p className="text-base leading-8 text-slate-600">
              Best for: {tool.bestUseCase} if you want to save time, automate
              repeatable work, and improve output quality faster.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-[var(--surface-alt)] px-4 py-2">
                {tool.businessUsage}
              </span>
              <span className="rounded-full bg-[var(--surface-alt)] px-4 py-2">
                {tool.popularityNote}
              </span>
              <span className="rounded-full bg-[var(--surface-alt)] px-4 py-2">
                Popular right now
              </span>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[var(--surface-alt)] p-6">
            <p className="text-sm font-semibold text-slate-900">Quick take</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {tool.tagline}
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-900">Pricing</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">{tool.pricing}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AffiliateLink
                href={getPrimaryToolCtaUrl(tool)}
                toolSlug={tool.slug}
                toolName={tool.name}
                placement="tool_hero"
                pageType="tool"
                ctaType="internal"
                ctaLocation="top"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start Free Trial
              </AffiliateLink>
              <Link
                href={pricingHref}
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                View Pricing
              </Link>
              <Link
                href={compareHref}
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Compare Top Picks
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Why We Recommend It"
            title={`Why we recommend ${tool.name}`}
            description={`${tool.name} makes the site because it solves a clear workflow problem, has a defined buyer fit, and continues to show up in serious buying decisions.`}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              tool.businessUsage,
              tool.popularityNote,
              `It stands out most when buyers need ${tool.bestUseCase.toLowerCase()}.`,
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-[var(--surface-alt)] p-6 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(tool)}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_recommendation"
              pageType="tool"
              ctaType="internal"
              ctaLocation="mid"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Try This Tool
            </AffiliateLink>
            <Link
              href={pricingHref}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8 rounded-3xl bg-[var(--surface-alt)] p-6">
            <p className="text-sm leading-7 text-slate-700">
              Need help setting this up? Hire an expert on Fiverr.
            </p>
            <div className="mt-4">
              <AffiliateLink
                href={affiliateLinks.fiverr}
                toolSlug="fiverr"
                toolName="Fiverr"
                placement="tool_page_fiverr"
                pageType="tool"
                ctaType="fiverr"
                ctaLocation="mid"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Find an Expert on Fiverr
              </AffiliateLink>
            </div>
          </div>
          <div className="mt-4 rounded-3xl bg-[var(--surface-alt)] p-6">
            <p className="text-sm leading-7 text-slate-700">
              Want an all-in-one platform for funnels, email marketing, and
              automation with a low-friction way to start? Systeme.io combines
              landing pages, email campaigns, and automations in one place, and
              you can start free.
            </p>
            <div className="mt-4">
              <AffiliateLink
                href={affiliateLinks.systeme}
                toolSlug="systeme"
                toolName="Systeme.io"
                placement="tool_page_systeme"
                pageType="tool"
                ctaType="systeme"
                ctaLocation="mid"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Start Free with Systeme.io
              </AffiliateLink>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Choose this if...</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Choose {tool.name} if your team mainly needs {tool.bestUseCase.toLowerCase()} and
              you want a tool that can earn a real place in your weekly workflow.
            </p>
          </article>
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Skip this if...</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Skip {tool.name} if your main problem is closer to {alternatives[0]?.bestUseCase.toLowerCase() || "a different workflow"} or
              if you need a much narrower specialist tool instead of a broader fit.
            </p>
          </article>
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">What to click next</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              If you are still unsure, the best next click is usually a
              head-to-head comparison or the industry page where this tool fits
              best.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {comparisonCandidates[0] ? (
                <Link
                  href={getComparisonUrl(tool.slug, comparisonCandidates[0].slug)}
                  className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Compare top alternative
                </Link>
              ) : null}
              {bestIndustries[0] ? (
                <Link
                  href={getIndustryUrl(bestIndustries[0].slug)}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  View best-fit industry
                </Link>
              ) : null}
            </div>
          </article>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Features"
            title={`${tool.name} core features`}
            description="These are the capabilities most buyers care about when comparing this tool against alternatives."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {tool.features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(tool)}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_features"
              pageType="tool"
              ctaType="internal"
              ctaLocation="mid"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Free Trial
            </AffiliateLink>
            <Link
              href={pricingHref}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View Pricing
            </Link>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Pros</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {tool.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Cons</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {tool.cons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Best Industries"
              title={`Where ${tool.name} fits best`}
              description="These industry pages recommend this tool because the workflow fit is strong, not just because it is popular."
            />
            <div className="flex flex-wrap gap-3">
              {bestIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/best-ai-tools-for-${industry.slug}`}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Alternatives"
              title={`Alternatives to ${tool.name}`}
              description="These are the tools most likely to come up when a buyer likes the category but is not fully convinced this is the right fit."
            />
            <div className="space-y-3">
              {alternatives.map((alternative) => (
                <Link
                  key={alternative.slug}
                  href={getToolUrl(alternative.slug)}
                  className="block rounded-2xl bg-[var(--surface-alt)] px-4 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {alternative.name}: {alternative.tagline}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {comparisonCandidates.map((candidate) => (
                <Link
                  key={`alt-${candidate.slug}`}
                  href={getComparisonUrl(tool.slug, candidate.slug)}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  {tool.name} vs {candidate.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Bottom Line"
            title={`Should you seriously consider ${tool.name}?`}
            description={`${tool.name} is worth serious consideration if your team needs ${tool.bestUseCase.toLowerCase()} and wants a tool that already shows up in real buyer shortlists. If your needs are narrower or more budget-sensitive, the alternative and comparison links above are the best next click.`}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(tool)}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_bottom_line"
              pageType="tool"
              ctaType="internal"
              ctaLocation="bottom"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Free Trial
            </AffiliateLink>
            <Link
              href={pricingHref}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View Pricing
            </Link>
          </div>
        </section>

        <section
          id="compare"
          className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
        >
          <SectionHeading
            eyebrow="Compare"
            title={`Head-to-head pages for ${tool.name}`}
            description="These comparison pages support deeper buying intent and make internal navigation stronger."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {comparisonCandidates.map((candidate) => (
              <Link
                key={candidate.slug}
                href={getComparisonUrl(tool.slug, candidate.slug)}
                className="rounded-3xl bg-[var(--surface-alt)] p-5 text-sm font-medium leading-7 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {tool.name} vs {candidate.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <AffiliateLink
              href={getPrimaryToolCtaUrl(tool)}
              toolSlug={tool.slug}
              toolName={tool.name}
              placement="tool_compare"
              pageType="tool"
              ctaType="internal"
              ctaLocation="bottom"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Try {tool.name}
            </AffiliateLink>
            <Link
              href={pricingHref}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              View Pricing
            </Link>
          </div>
        </section>

        <EmailCapture
          description={`If you want future buyer guides, tool updates, or comparison pages like this one, request updates here and the message will route through the editorial contact flow.`}
        />
      </Container>
    </div>
  );
}
