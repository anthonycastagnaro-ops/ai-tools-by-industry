import Link from "next/link";

import { Container } from "@/components/container";
import { EmailCapture } from "@/components/email-capture";
import { IndustryCard } from "@/components/industry-card";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { WhyTrust } from "@/components/why-trust";
import {
  getFeaturedIndustries,
  getFeaturedTools,
  getTopToolsThisMonth,
} from "@/lib/utils";

const featuredIndustries = getFeaturedIndustries();
const featuredTools = getFeaturedTools();
const topToolsThisMonth = getTopToolsThisMonth();
const featuredComparisons = [
  {
    href: "/compare/chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    body: "Best for buyers choosing between a broad AI assistant and a more writing-first option.",
  },
  {
    href: "/compare/zapier-vs-make",
    title: "Zapier vs Make",
    body: "Best for teams deciding whether they need quick no-code automation or more workflow depth.",
  },
  {
    href: "/compare/jasper-vs-copy-ai",
    title: "Jasper vs Copy.ai",
    body: "Best for marketing teams comparing brand control against faster go-to-market execution.",
  },
];
const curatedTopToolNotes: Record<string, string> = {
  chatgpt: "Best broad-use pick for businesses that want one tool to cover content, research, and internal execution.",
  canva: "Best design-side pick for teams that need fast visual output without hiring extra help.",
  zapier: "Best quick-win automation choice for businesses trying to remove repetitive admin first.",
  claude: "Best for buyers who care more about polished long-form output than fast, rough drafts.",
  make: "Best value automation option for teams that need more logic than simple trigger tools allow.",
  grammarly: "Best lightweight upgrade for teams that want stronger client-facing communication immediately.",
};

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <Container className="grid gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div className="space-y-8">
            <p className="text-sm font-semibold tracking-[0.24em] text-[var(--brand)] uppercase">
              AI buyer guides for operators who want faster growth
            </p>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Find the best AI tools to save time, grow revenue, and run your business more efficiently
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                This site helps business owners, operators, freelancers, and
                agencies find the right AI tools for their specific workflow,
                not just browse a generic software list. Start with your
                industry, review the strongest options, and use comparisons when
                you are down to finalists.
              </p>
              <p className="max-w-2xl text-sm leading-7 text-slate-500">
                Recommendations are organized like an editorial buyer guide:
                clear fit, realistic tradeoffs, and practical next clicks for
                people who are actually evaluating software.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/industries"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                See Best Tools
              </Link>
              <Link
                href="/compare/chatgpt-vs-claude"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Compare Top Picks
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
            {[
              "20 tailored industry buyer guides",
              "15 editorial-style tool reviews",
              "105 comparison pages for deeper decision support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[var(--surface-alt)] px-5 py-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
                Revenue-ready structure
              </p>
              <p className="mt-3 text-lg leading-8 text-white/90">
                Pages are built to help buyers shortlist tools quickly, validate
                fit, and keep moving through the site without feeling pushed
                into a decision too early.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Who this is for",
              body: "Business owners, operators, service firms, and lean teams that want help choosing software without reading generic roundups.",
            },
            {
              title: "How tools are evaluated",
              body: "Pages are organized around workflow fit, likely tradeoffs, and whether a tool deserves a place on a real shortlist.",
            },
            {
              title: "Where to start",
              body: "Open your industry page first, then move to one tool review and one comparison page before making a decision.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Industries"
            title="Start with the industry that matches your business"
            description="The fastest way to use the site is to open the guide that matches how you actually make money. Each one is built around the bottlenecks, tools, and buying questions that matter in that niche."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredIndustries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="How To Use The Site"
            title="How this site works"
            description="The site is designed to move buyers from broad research to a focused shortlist without making the process feel overwhelming."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1. Pick your industry",
                body: "Open the page closest to your business model so the recommendations are tied to your actual bottlenecks, not general AI hype.",
                href: "/industries",
                label: "See best tools by industry",
              },
              {
                title: "2. Review the top tools",
                body: "Tool pages explain who each product is really for, what tradeoffs to expect, and when an alternative is the smarter choice.",
                href: "/tools/chatgpt",
                label: "Review a top tool",
              },
              {
                title: "3. Use a comparison page",
                body: "Comparison pages are built for buyers who are close to a decision and need a more specific recommendation.",
                href: "/compare/chatgpt-vs-claude",
                label: "Compare top picks",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <WhyTrust
            description="The site is built to feel like an editorial buyer-guide brand: researched, commercial in intent, but still useful enough to help a real buyer make a smarter decision."
            items={[
              "Recommendations are organized around workflows, fit, tradeoffs, and buyer intent rather than generic software roundups.",
              "Tool and comparison pages are written to help buyers choose, not just skim features.",
              "Trust pages are visible and professional so readers and affiliate partners can evaluate the site like a real publication.",
            ]}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Top Tools This Month"
            title="Top AI tools this month"
            description="This shortlist is curated, not exhaustive. These are the tools most often worth reviewing first when a buyer wants practical upside, strong fit, and a realistic path to ROI rather than a bloated stack."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {topToolsThisMonth.map((tool) => (
              <div key={tool.slug} className="space-y-4">
                <ToolCard tool={tool} />
                <p className="px-2 text-sm leading-7 text-slate-600">
                  {curatedTopToolNotes[tool.slug]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Comparisons"
            title="Comparison pages readers use before making a decision"
            description="These pages tend to be the best next click when you already know the category and want help choosing between two strong options."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredComparisons.map((item) => (
              <article
                key={item.href}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  Open comparison
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Tools"
            title="Popular AI software buyers keep comparing"
            description="These review pages anchor the site’s internal linking structure and help readers move from discovery to a stronger final decision."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <EmailCapture />
      </Container>
    </div>
  );
}
