import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { EmailCapture } from "@/components/email-capture";
import { SectionHeading } from "@/components/section-heading";
import { tools } from "@/data/tools";
import { buildAbsoluteUrl } from "@/lib/site";
import {
  getAlternativesForTool,
  getBestIndustriesForTool,
  getComparisonUrl,
  getToolBySlug,
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
          </div>
          <div className="rounded-[1.75rem] bg-[var(--surface-alt)] p-6">
            <p className="text-sm font-semibold text-slate-900">Quick take</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {tool.tagline}
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-900">Pricing</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">{tool.pricing}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noreferrer noopener sponsored"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Try {tool.name}
              </a>
              <a
                href={tool.website}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Visit Website
              </a>
            </div>
          </div>
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
              description="These industry pages recommend this tool as part of the core stack."
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
              description="These tools come up most often when buyers are comparing adjacent workflows or categories."
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
          </div>
        </section>

        <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
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
        </section>

        <EmailCapture
          description={`Get more buyer guides like this one plus side-by-side recommendations that help you pick tools with clearer ROI.`}
        />
      </Container>
    </div>
  );
}
