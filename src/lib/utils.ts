import { industries } from "@/data/industries";
import { tools } from "@/data/tools";
import type { Industry, IndustryFaq, Tool } from "@/lib/types";

const industryPainPointsBySlug: Record<string, string[]> = {
  restaurants: [
    "Seasonal demand makes consistent marketing hard to maintain.",
    "Lean teams lose time to manual inbox, review, and reservation follow-up.",
    "Operators need promotions and local content without adding agency overhead.",
  ],
  "real-estate": [
    "Lead response speed directly affects close rate.",
    "Listing, follow-up, and nurture work is repetitive but high value.",
    "Agents need better client communication without losing the personal touch.",
  ],
  "law-firms": [
    "Too much valuable time disappears into document-heavy admin work.",
    "Client communication needs to stay clear, careful, and professional.",
    "Internal knowledge often lives in scattered notes instead of reusable systems.",
  ],
  dentists: [
    "Front-desk teams get overloaded by reminders, questions, and rescheduling.",
    "Practices need better education and follow-up to reduce no-shows.",
    "Marketing usually falls behind when the schedule gets busy.",
  ],
  "med-spas": [
    "Fast lead follow-up matters because consultation intent cools quickly.",
    "Promotional content must look polished without taking staff away from service.",
    "Retention depends on consistent reminders and post-visit communication.",
  ],
  salons: [
    "Empty slots hurt revenue immediately.",
    "Most salon marketing depends on steady visual content and local visibility.",
    "Client communication is frequent, repetitive, and hard to keep consistent.",
  ],
  ecommerce: [
    "Merchandising and product copy create constant production pressure.",
    "Paid acquisition is expensive, so efficiency and conversion matter more.",
    "Growing stores need automation before operations become chaotic.",
  ],
  consultants: [
    "High-value thinking gets squeezed by notes, proposals, and follow-up.",
    "Deliverables need to feel thoughtful, not AI-generated and generic.",
    "Consulting teams win when research turns into polished recommendations faster.",
  ],
  "marketing-agencies": [
    "Margins fall when production and reporting stay too manual.",
    "Teams need more content throughput without sacrificing quality control.",
    "Client communication and delivery systems must stay organized as accounts grow.",
  ],
  accountants: [
    "Busy season magnifies every inefficiency in communication and documentation.",
    "Clients need clear explanations, not jargon-heavy updates.",
    "Internal process knowledge is often hard to capture and reuse.",
  ],
  "mortgage-brokers": [
    "Borrowers need quick answers during a stressful, document-heavy process.",
    "Lead nurture gaps can quietly reduce funded volume.",
    "Educational content helps build trust but takes time to produce.",
  ],
  "insurance-agents": [
    "Follow-up consistency is difficult across quotes, renewals, and referrals.",
    "Prospects need clear explanations before they are ready to buy.",
    "Small teams spend too much time on repetitive policy communication.",
  ],
  "property-managers": [
    "Resident communication volume is relentless.",
    "Leasing and maintenance workflows are repetitive but easy to mishandle.",
    "Operations break down when updates live across too many disconnected tools.",
  ],
  "fitness-coaches": [
    "Coaches need steady content output to stay top of mind.",
    "Client check-ins create repeatable work that eats into delivery time.",
    "Lead nurture often slips when coaching calendars fill up.",
  ],
  "personal-trainers": [
    "Solo operators have limited time between sessions.",
    "Content, follow-up, and admin all compete with billable hours.",
    "Consistency matters more than complexity for local growth.",
  ],
  "content-creators": [
    "Publishing pressure never really slows down.",
    "Editing and repurposing take more time than most creators expect.",
    "The right tools should reduce production drag without flattening creative voice.",
  ],
  freelancers: [
    "Solo operators need leverage more than more software.",
    "Proposal writing, client delivery, and admin pull attention in different directions.",
    "Systems have to stay lightweight and useful, not bloated.",
  ],
  "virtual-assistants": [
    "Recurring client tasks require speed, accuracy, and documentation.",
    "Meeting notes and handoffs can become a hidden time sink.",
    "Good AI support should make execution faster without reducing reliability.",
  ],
  "interior-designers": [
    "Visual concepting is essential but time-consuming.",
    "Client-facing presentation quality strongly affects trust and conversions.",
    "Design teams need help organizing ideas, feedback, and communication.",
  ],
  "wedding-planners": [
    "Planning businesses depend on detail-heavy communication and coordination.",
    "Presentation and visual polish influence perceived value.",
    "Vendor, couple, and timeline follow-up can quickly become overwhelming.",
  ],
};

const industrySpecificFaqs: Record<string, IndustryFaq[]> = {
  restaurants: [
    {
      question: "What type of AI helps restaurants the most?",
      answer:
        "Most restaurants benefit first from tools that improve promotion creation, guest communication, and review or reservation follow-up. Those wins usually show up faster than more advanced back-office use cases.",
    },
    {
      question: "Can AI help a restaurant without replacing staff?",
      answer:
        "Yes. For restaurants, the best use of AI is usually handling repetitive writing, campaign setup, and customer communication so staff can stay focused on service and operations.",
    },
    {
      question: "Should restaurants prioritize marketing AI or automation AI first?",
      answer:
        "That depends on the bottleneck. Restaurants with inconsistent traffic often start with marketing and content tools, while busier teams usually see faster returns from inbox, reminder, and admin automation.",
    },
  ],
  "real-estate": [
    {
      question: "Which AI tools are best for real estate lead follow-up?",
      answer:
        "Real estate teams usually get the most value from CRM-connected tools, writing assistants for listing and outreach copy, and meeting tools that reduce follow-up friction after calls and showings.",
    },
    {
      question: "Can AI write listing descriptions that still sound local and human?",
      answer:
        "Yes, if the agent provides neighborhood context, buyer profile details, and the property angle. AI speeds up the draft, but local expertise should shape the final version.",
    },
    {
      question: "Is AI useful for small brokerages or mainly larger teams?",
      answer:
        "Smaller brokerages often see the clearest ROI because AI helps them keep response times high and marketing output steady without hiring more support staff.",
    },
  ],
  "law-firms": [
    {
      question: "What is the safest way for law firms to use AI?",
      answer:
        "The safest starting point is internal summarization, outline drafting, research organization, and administrative communication support, always with attorney review before anything client-facing or legal is finalized.",
    },
    {
      question: "Can AI help law firms save non-billable time?",
      answer:
        "Yes. Firms often reclaim time through document summaries, better internal notes, cleaner knowledge management, and faster first drafts for routine communications.",
    },
    {
      question: "What should law firms avoid when adopting AI?",
      answer:
        "They should avoid treating AI output as final legal work product, skipping review, or using tools without clear internal standards for confidentiality, review, and acceptable use.",
    },
  ],
  dentists: [
    {
      question: "How can dentists use AI without overwhelming the front desk?",
      answer:
        "Dental practices often start with reminders, patient education drafts, and follow-up workflows that reduce repetitive communication rather than adding new manual tasks.",
    },
    {
      question: "Can AI improve case acceptance for dentists?",
      answer:
        "It can help by making treatment education, follow-up messages, and recall communication clearer and more consistent, which supports patient confidence and response rates.",
    },
    {
      question: "What is the best first AI use case for a dental office?",
      answer:
        "A good first use case is usually patient communication because it touches scheduling efficiency, no-show reduction, and patient experience all at once.",
    },
  ],
  "med-spas": [
    {
      question: "Which AI tools matter most for med spa growth?",
      answer:
        "Lead response, promotional content creation, and automated follow-up usually matter most because they directly affect consultation volume and repeat bookings.",
    },
    {
      question: "Can AI help med spas with premium brand presentation?",
      answer:
        "Yes, especially through stronger copy, faster visual asset production, and better campaign execution, as long as final brand review stays human-led.",
    },
    {
      question: "Should a med spa start with design tools or CRM automation?",
      answer:
        "If lead leakage is the bigger issue, CRM and automation often come first. If awareness and demand are the bottleneck, content and design tools may have the larger short-term impact.",
    },
  ],
  salons: [
    {
      question: "Can AI help salons fill last-minute openings?",
      answer:
        "Yes. Salons can use AI-assisted marketing and follow-up workflows to promote cancellations, fill gaps, and keep communication consistent without extra admin effort.",
    },
    {
      question: "What AI content tools work best for salons?",
      answer:
        "Visual content, caption support, local marketing copy, and lightweight automation tools tend to be the best fit because salons need frequent, polished communication.",
    },
    {
      question: "Is AI worth it for a single-location salon?",
      answer:
        "Usually yes, because even a small salon can benefit from steadier local marketing, better client communication, and less repetitive admin.",
    },
  ],
  ecommerce: [
    {
      question: "What AI tools give ecommerce brands the fastest ROI?",
      answer:
        "Copy and merchandising tools often deliver fast ROI because they improve product page speed, campaign execution, and content volume without requiring a full systems overhaul.",
    },
    {
      question: "Can ecommerce teams use AI for both SEO and conversion?",
      answer:
        "Yes. Many teams combine writing or optimization tools for search visibility with design and automation tools that support merchandising and lifecycle marketing.",
    },
    {
      question: "What should ecommerce teams automate first?",
      answer:
        "Start with repeatable catalog, campaign, or retention workflows that currently take manual effort every week. That usually reveals the clearest payback.",
    },
  ],
  consultants: [
    {
      question: "How do consultants use AI without sounding generic?",
      answer:
        "The best approach is to use AI for synthesis, structuring, and first drafts, then layer in the consultant’s judgment, point of view, and client context before delivery.",
    },
    {
      question: "Which AI tools help consultants most during delivery?",
      answer:
        "Research assistants, long-form drafting tools, meeting-summary tools, and documentation systems usually create the strongest leverage in consulting workflows.",
    },
    {
      question: "Can AI reduce proposal time for consultants?",
      answer:
        "Yes. It can speed up scoping notes, proposal drafts, and follow-up messaging so consultants spend more time on high-value client work.",
    },
  ],
  "marketing-agencies": [
    {
      question: "What AI stack makes the most sense for agencies?",
      answer:
        "Agencies usually need a mix of writing, SEO, creative production, and automation tools. The strongest stack depends on whether the agency’s bottleneck is content volume, reporting, or delivery ops.",
    },
    {
      question: "Can AI actually improve agency margins?",
      answer:
        "It can, especially when it reduces production time on recurring assets, reporting, and internal coordination while maintaining strong review standards.",
    },
    {
      question: "What should agencies avoid when using AI for client work?",
      answer:
        "They should avoid unreviewed output, generic messaging, and over-automation that weakens brand nuance or strategic quality.",
    },
  ],
  accountants: [
    {
      question: "What is the best AI use case for accounting firms?",
      answer:
        "Many firms start with internal summaries, clearer client communication, and documentation support because those improve efficiency without creating unnecessary compliance risk.",
    },
    {
      question: "Can AI help accountants during busy season?",
      answer:
        "Yes. It can help teams draft updates faster, organize information more clearly, and reduce the friction around recurring internal and client-facing communication.",
    },
    {
      question: "How should accountants review AI output?",
      answer:
        "They should treat it as a draft or support layer, not a final answer. Human review remains essential for technical accuracy and client-specific judgment.",
    },
  ],
  "mortgage-brokers": [
    {
      question: "What AI tools are most useful for mortgage brokers?",
      answer:
        "Tools that improve borrower communication, pipeline follow-up, and content education usually deliver the best results because those activities strongly influence trust and conversion.",
    },
    {
      question: "Can AI help mortgage brokers close more efficiently?",
      answer:
        "It can help shorten response times, improve nurture quality, and keep communication more consistent across the loan journey.",
    },
    {
      question: "Is AI useful for borrower education content?",
      answer:
        "Yes. AI can speed up educational drafts and FAQ content, which is helpful in a category where borrower confidence shapes conversion.",
    },
  ],
  "insurance-agents": [
    {
      question: "How can insurance agents use AI without sounding robotic?",
      answer:
        "The best use is creating cleaner first drafts and follow-up systems, then editing for empathy, clarity, and the agency’s own client tone.",
    },
    {
      question: "What is the best first AI workflow for insurance agencies?",
      answer:
        "Lead and renewal follow-up is often the clearest starting point because it improves responsiveness without changing the core sales process too much.",
    },
    {
      question: "Can AI help agents explain products more clearly?",
      answer:
        "Yes. It can make policy explanations, comparisons, and renewal messaging easier to understand, which helps both acquisition and retention.",
    },
  ],
  "property-managers": [
    {
      question: "What AI tools matter most for property managers?",
      answer:
        "Communication and automation tools are usually the strongest early investment because resident updates, leasing messages, and repeatable workflows create the most operational drag.",
    },
    {
      question: "Can AI reduce admin load in property management?",
      answer:
        "Yes. It can help standardize messages, route information, and support recurring leasing or maintenance workflows that otherwise stay manual.",
    },
    {
      question: "What should property managers automate first?",
      answer:
        "Start with the workflows that create the most repetitive communication or handoff issues, such as leasing updates, resident follow-up, or maintenance intake coordination.",
    },
  ],
  "fitness-coaches": [
    {
      question: "What AI use cases are best for fitness coaches?",
      answer:
        "Coaches usually benefit most from content support, lead nurture, and check-in workflows that keep the business visible without taking time away from client delivery.",
    },
    {
      question: "Can AI help fitness coaches stay consistent with marketing?",
      answer:
        "Yes. It is especially helpful for planning ideas, writing content, and repurposing material into formats that are easier to publish regularly.",
    },
    {
      question: "Should fitness coaches focus on content or automation first?",
      answer:
        "If they already have demand, automation may create a faster win. If they need more visibility, content tools often make a bigger difference first.",
    },
  ],
  "personal-trainers": [
    {
      question: "Can personal trainers use AI without adding complexity?",
      answer:
        "Yes. The best setups stay simple and focus on a few repeatable wins like better follow-up, easier content creation, and cleaner client communication.",
    },
    {
      question: "What AI tool helps personal trainers the most?",
      answer:
        "That depends on the business model, but most trainers start with a writing or content tool plus a simple automation layer for leads and client follow-up.",
    },
    {
      question: "Is AI worthwhile for a solo trainer?",
      answer:
        "Usually yes, because solo operators benefit a lot from anything that reduces admin and keeps marketing more consistent.",
    },
  ],
  "content-creators": [
    {
      question: "What AI stack works best for content creators?",
      answer:
        "Creators usually need one idea and scripting tool, one editing or repurposing tool, and one visual tool. The best mix depends on whether the bottleneck is ideation, production, or publishing speed.",
    },
    {
      question: "Can AI help creators publish more without losing quality?",
      answer:
        "Yes, if it is used to reduce repetitive work like outlines, rough drafts, transcript cleanup, and asset repurposing rather than replacing creative judgment.",
    },
    {
      question: "What should creators review carefully when using AI?",
      answer:
        "They should review anything that affects voice, accuracy, or audience trust. AI should support the workflow, not flatten the creator’s distinct style.",
    },
  ],
  freelancers: [
    {
      question: "What AI tools are best for freelancers?",
      answer:
        "Freelancers usually need broad leverage: better proposals, faster delivery, and lighter admin. General assistants and lightweight documentation tools tend to be the best first choices.",
    },
    {
      question: "Can freelancers get ROI from AI without a large stack?",
      answer:
        "Yes. A small stack is often better. One drafting tool plus one organization or meeting-support tool is enough for many solo businesses.",
    },
    {
      question: "Should freelancers automate client work or internal ops first?",
      answer:
        "Internal ops often come first because they are lower risk and easier to standardize. That creates more time and clarity before changing client delivery workflows.",
    },
  ],
  "virtual-assistants": [
    {
      question: "How do virtual assistants use AI responsibly for client work?",
      answer:
        "They use it to speed up documentation, summaries, drafting, and recurring admin tasks while keeping review and final accountability with the assistant or client team.",
    },
    {
      question: "What is the best first AI workflow for VAs?",
      answer:
        "Meeting summaries, SOP drafting, and repeatable admin tasks are common starting points because they are easy to standardize and clearly time-saving.",
    },
    {
      question: "Can AI make a VA business more scalable?",
      answer:
        "Yes. It can improve throughput and consistency, which makes it easier to serve more clients or create more standardized delivery.",
    },
  ],
  "interior-designers": [
    {
      question: "What AI tools are best for interior designers?",
      answer:
        "Designers usually benefit from visual concept tools, presentation tools, and writing support for proposals and client communication.",
    },
    {
      question: "Can AI replace interior design judgment?",
      answer:
        "No. It can accelerate concepting and communication, but the designer’s taste, client understanding, and project judgment remain central.",
    },
    {
      question: "What is the best first AI use case for a design studio?",
      answer:
        "A common first win is concept and presentation support because it improves both internal speed and client-facing polish.",
    },
  ],
  "wedding-planners": [
    {
      question: "What AI helps wedding planners the most?",
      answer:
        "Wedding planners often benefit first from better communication workflows, meeting summaries, and faster content creation for marketing and client materials.",
    },
    {
      question: "Can AI help wedding planners stay high-touch?",
      answer:
        "Yes. Used well, AI reduces repetitive coordination work so planners can spend more energy on personalized service and relationship management.",
    },
    {
      question: "What should wedding planners automate first?",
      answer:
        "Start with recurring communication and follow-up flows, because those create a lot of invisible admin while still benefiting from strong process consistency.",
    },
  ],
};

export const formatList = (items: string[]) =>
  new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(
    items,
  );

export const toTitleCase = (value: string) =>
  value.replace(/\b\w/g, (char) => char.toUpperCase());

export const getIndustryUrl = (industrySlug: string) =>
  `/best-ai-tools-for-${industrySlug}`;

export const getToolUrl = (toolSlug: string) => `/tools/${toolSlug}`;

export const getComparisonSlug = (a: string, b: string) => {
  const firstIndex = tools.findIndex((tool) => tool.slug === a);
  const secondIndex = tools.findIndex((tool) => tool.slug === b);

  if (firstIndex === -1 || secondIndex === -1) {
    return `${a}-vs-${b}`;
  }

  return firstIndex < secondIndex ? `${a}-vs-${b}` : `${b}-vs-${a}`;
};

export const getComparisonUrl = (a: string, b: string) =>
  `/compare/${getComparisonSlug(a, b)}`;

export const getIndustryBySlug = (slug: string) =>
  industries.find((industry) => industry.slug === slug);

export const getToolBySlug = (slug: string) =>
  tools.find((tool) => tool.slug === slug);

export const getToolsForIndustry = (industry: Industry) =>
  industry.recommendedToolSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((tool): tool is Tool => Boolean(tool));

export const getBestIndustriesForTool = (toolSlug: string) =>
  industries.filter((industry) => industry.recommendedToolSlugs.includes(toolSlug));

export const getAlternativesForTool = (tool: Tool) =>
  tool.alternatives
    .map((slug) => getToolBySlug(slug))
    .filter((candidate): candidate is Tool => Boolean(candidate));

export const getComparisonPairFromSlug = (slug: string) => {
  const separator = "-vs-";
  if (!slug.includes(separator)) return null;
  const [a, b] = slug.split(separator);
  if (!a || !b || a === b) return null;
  const toolA = getToolBySlug(a);
  const toolB = getToolBySlug(b);
  if (!toolA || !toolB) return null;
  return { toolA, toolB };
};

export const getToolHighlightsForIndustry = (industry: Industry, tool: Tool) => {
  const jobs = industry.jobsToBeDone;
  const useCaseSeed = jobs[0] || `save time in ${industry.name.toLowerCase()}`;

  return {
    description: `${tool.name} helps ${industry.name.toLowerCase()} teams ${useCaseSeed.toLowerCase()} without adding another complicated system to manage.`,
    bestUseCase: `${tool.name} is strongest for ${industry.audience.toLowerCase()} teams that need to ${jobs[1]?.toLowerCase() || jobs[0].toLowerCase()} and still keep quality high.`,
    pros: [
      `Fits ${industry.name.toLowerCase()} workflows where speed and consistency both matter.`,
      `Reduces manual work around ${industry.painPoint.toLowerCase()}.`,
      `Gives lean teams a faster way to deliver polished output.`,
    ],
    cons: [
      `Still needs human review for brand voice and compliance in ${industry.name.toLowerCase()}.`,
      `The best results come from setting up prompts, templates, or automations first.`,
      `Value drops if the team does not build it into a repeatable workflow.`,
    ],
  };
};

export const getIndustryPainPoints = (industry: Industry) =>
  industryPainPointsBySlug[industry.slug] || [
    industry.painPoint,
    `Teams in ${industry.name.toLowerCase()} need more reliable processes.`,
    `The right AI tools should reduce admin and improve output quality.`,
  ];

export const getIndustryFaqs = (industry: Industry): IndustryFaq[] => {
  const specificFaqs = industrySpecificFaqs[industry.slug] || [];

  return [
    ...specificFaqs,
    {
      question: `How should a ${industry.name.toLowerCase()} business choose an AI tool?`,
      answer: `Start with the workflow that takes the most time or delays revenue. For most ${industry.name.toLowerCase()} operators, that means prioritizing tools that help with ${industry.jobsToBeDone[0].toLowerCase()}, ${industry.jobsToBeDone[1].toLowerCase()}, or ${industry.jobsToBeDone[2].toLowerCase()}.`,
    },
    {
      question: `Should ${industry.name.toLowerCase()} companies use more than one AI tool?`,
      answer: `Usually yes. One tool rarely covers research, content, design, follow-up, and workflow automation. The strongest setup pairs two or three tools that each have a clear job, then connects them with simple repeatable processes.`,
    },
  ];
};

export const getFeaturedIndustries = () => industries.slice(0, 8);

export const getFeaturedTools = () => tools.slice(0, 6);

export const getTopToolsThisMonth = () =>
  [...tools].sort((a, b) => b.scores.overall - a.scores.overall).slice(0, 6);

export const getIndustryQuickPicks = (industry: Industry) => {
  const industryTools = getToolsForIndustry(industry);

  const pickDistinct = (
    sortKey: "overall" | "beginner" | "value",
    used: Set<string>,
  ) => {
    const ordered = [...industryTools].sort(
      (a, b) => b.scores[sortKey] - a.scores[sortKey],
    );
    return ordered.find((tool) => !used.has(tool.slug)) || ordered[0];
  };

  const used = new Set<string>();
  const topPick = pickDistinct("overall", used);
  if (topPick) used.add(topPick.slug);
  const bestValue = pickDistinct("value", used);
  if (bestValue) used.add(bestValue.slug);
  const bestForBeginners = pickDistinct("beginner", used);

  return [
    topPick ? { label: "Top Pick", tool: topPick } : null,
    bestValue ? { label: "Best Value", tool: bestValue } : null,
    bestForBeginners ? { label: "Best for Beginners", tool: bestForBeginners } : null,
  ].filter((item): item is { label: string; tool: Tool } => Boolean(item));
};

export const getToolRecommendationReason = (industry: Industry, tool: Tool) =>
  `${tool.name} fits ${industry.name.toLowerCase()} particularly well because it helps teams ${industry.jobsToBeDone[0].toLowerCase()}, supports ${industry.jobsToBeDone[1].toLowerCase()}, and reduces friction around ${industry.painPoint.toLowerCase()}.`;

export const getComparisonRecommendation = (toolA: Tool, toolB: Tool) => {
  const winner = toolA.scores.overall >= toolB.scores.overall ? toolA : toolB;
  const runnerUp = winner.slug === toolA.slug ? toolB : toolA;

  return {
    winner,
    summary: `${winner.name} is the stronger all-around pick for most buyers, while ${runnerUp.name} is a better fit when your priority is ${runnerUp.bestUseCase.toLowerCase()}.`,
  };
};

export const allComparisonSlugs = tools.flatMap((tool, index) =>
  tools.slice(index + 1).map((otherTool) => getComparisonSlug(tool.slug, otherTool.slug)),
);
