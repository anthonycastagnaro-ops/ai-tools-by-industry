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

const industryToolOverrides: Record<
  string,
  Record<
    string,
    {
      description: string;
      bestUseCase: string;
      pros: string[];
      cons: string[];
      reason: string;
    }
  >
> = {
  restaurants: {
    chatgpt: {
      description:
        "ChatGPT is a practical fit for restaurant operators who need campaign ideas, promo copy, staff-facing SOP drafts, and fast responses to everyday marketing bottlenecks.",
      bestUseCase:
        "Best when a restaurant needs one flexible tool for promotions, guest messaging, and operational writing.",
      pros: [
        "Quickly turns rough offer ideas into usable promo copy.",
        "Useful for drafting replies to reviews, guest questions, and event inquiries.",
        "Helps owners create SOPs and internal docs without starting from a blank page.",
      ],
      cons: [
        "Needs clear prompting to avoid generic hospitality copy.",
        "Does not replace a reservation, POS, or CRM workflow on its own.",
        "Staff still need to review anything customer-facing before publishing.",
      ],
      reason:
        "It fits restaurants because it can support both marketing and operations on the same day, which matters for small teams wearing multiple hats.",
    },
    canva: {
      description:
        "Canva works well for restaurants that need polished social posts, menu promos, event flyers, and local ad creative without depending on a designer.",
      bestUseCase:
        "Best for creating recurring visual marketing assets quickly and keeping the brand present across local channels.",
      pros: [
        "Makes weekly promo graphics and in-store collateral much faster to produce.",
        "Good fit for restaurants running social, events, and seasonal specials.",
        "Easy for non-design staff to use after a short setup period.",
      ],
      cons: [
        "Templates can look generic without a simple brand system.",
        "Not meant for advanced custom design work.",
        "Still needs someone on the team to keep creative output consistent.",
      ],
      reason:
        "Restaurants usually need frequency more than complexity, and Canva is one of the fastest ways to maintain that visual consistency.",
    },
    zapier: {
      description:
        "Zapier is a strong choice for restaurants that want to connect forms, email tools, booking workflows, and internal notifications without heavy technical setup.",
      bestUseCase:
        "Best for automating repetitive admin like lead routing, inquiry follow-up, and internal alerts.",
      pros: [
        "Can automate event inquiries, lead notifications, and lightweight follow-up.",
        "Helps operators reduce small manual tasks that pile up every week.",
        "Usually easier to launch than more complex automation platforms.",
      ],
      cons: [
        "The value depends on whether the restaurant already uses connected tools.",
        "Complex automations can become harder to manage over time.",
        "Not every restaurant needs automation before fixing simpler process issues.",
      ],
      reason:
        "It is especially useful when a restaurant is already getting leads but losing time to repetitive handoffs and missed follow-up.",
    },
    "hubspot-ai": {
      description:
        "HubSpot AI fits restaurant groups, event-heavy venues, and operators with active lead funnels who want more structure around nurture and follow-up.",
      bestUseCase:
        "Best for restaurants that treat private dining, catering, or multi-location growth as a serious revenue channel.",
      pros: [
        "Useful for managing event, catering, and lead nurture workflows in one place.",
        "Stronger long-term option for operators with a real sales process.",
        "Can support more disciplined follow-up than basic inbox management.",
      ],
      cons: [
        "Too much CRM for many single-location operators.",
        "Needs process discipline to deliver strong ROI.",
        "Pricing and setup make more sense for bigger revenue opportunities.",
      ],
      reason:
        "It makes the most sense when restaurant revenue depends on structured inquiry follow-up rather than walk-in traffic alone.",
    },
    grammarly: {
      description:
        "Grammarly helps restaurants clean up guest communication, event replies, proposal emails, and web copy so the brand feels more polished and trustworthy.",
      bestUseCase:
        "Best for teams that already write a lot of customer-facing copy and want it to sound tighter and more professional.",
      pros: [
        "Improves clarity in guest-facing emails and proposal responses.",
        "Low-friction tool for managers who communicate across many channels.",
        "Useful for editing copy created by broader AI tools.",
      ],
      cons: [
        "It polishes writing but does not create a marketing system by itself.",
        "Less valuable if the team rarely writes beyond short messages.",
        "Can smooth away brand personality if used too aggressively.",
      ],
      reason:
        "For hospitality businesses, tone matters, and Grammarly helps prevent sloppy communication from undermining the experience.",
    },
    perplexity: {
      description:
        "Perplexity is useful for restaurant teams researching local trends, competitor offers, pricing ideas, and content angles before launching new promotions.",
      bestUseCase:
        "Best for quick market research before planning offers, menus, or local marketing campaigns.",
      pros: [
        "Faster than manual search for local inspiration and competitor checks.",
        "Helpful when operators need source-backed answers quickly.",
        "A good support tool for strategy before content production starts.",
      ],
      cons: [
        "Not a replacement for local intuition or direct market knowledge.",
        "More useful for planning than for execution.",
        "Smaller teams may prioritize content or automation tools first.",
      ],
      reason:
        "It earns its place when a restaurant wants sharper local strategy before spending time or money on promotion.",
    },
  },
  "real-estate": {
    chatgpt: {
      description:
        "ChatGPT fits real estate teams that need listing copy, follow-up drafts, market updates, and marketing ideas without slowing down daily client work.",
      bestUseCase:
        "Best for agents who want one flexible assistant for listing, nurture, and content support.",
      pros: [
        "Useful for writing listing descriptions and follow-up emails quickly.",
        "Helps solo agents stay more consistent with marketing output.",
        "Can turn notes into client-facing drafts fast.",
      ],
      cons: [
        "Needs agent review to sound local and specific.",
        "Does not handle pipeline structure by itself.",
        "Generic prompts can produce generic listing language.",
      ],
      reason:
        "Real estate teams often need range more than specialization, and ChatGPT covers a lot of that day-to-day writing surface area well.",
    },
    "hubspot-ai": {
      description:
        "HubSpot AI is a strong fit for brokerages and lead-driven teams that need tighter follow-up, pipeline visibility, and better long-term nurture.",
      bestUseCase:
        "Best for real estate businesses that already have meaningful lead flow and need better conversion systems.",
      pros: [
        "Supports structured follow-up around buyer and seller pipelines.",
        "Useful for teams that want AI inside an actual CRM workflow.",
        "Can improve consistency across nurture, outreach, and reporting.",
      ],
      cons: [
        "Often too heavy for agents with very simple workflows.",
        "Value depends on real CRM adoption, not just sign-up.",
        "Requires more operational maturity than a lightweight writing tool.",
      ],
      reason:
        "It is a better fit for growth-minded teams treating lead management like a system, not just a series of inbox tasks.",
    },
    canva: {
      description:
        "Canva works well for real estate teams producing listing graphics, neighborhood guides, social content, and presentation materials at a steady pace.",
      bestUseCase:
        "Best for agents who need polished visual assets without waiting on outside design help.",
      pros: [
        "Makes listing and social creative faster to produce.",
        "Useful for buyer guides, market recaps, and branded presentations.",
        "Easy for agents and coordinators to keep using consistently.",
      ],
      cons: [
        "Strong templates still need local personality layered in.",
        "Not ideal for custom design-heavy brokerages.",
        "Can become repetitive if the team does not refresh creative direction.",
      ],
      reason:
        "Real estate is visual, and Canva shortens the time between a new listing and a usable marketing package.",
    },
    fireflies: {
      description:
        "Fireflies is helpful for real estate teams juggling buyer calls, seller updates, and handoffs where follow-up details can easily get lost.",
      bestUseCase:
        "Best for teams running lots of calls and wanting more reliable summaries and action items.",
      pros: [
        "Cuts down on manual note-taking after buyer and seller conversations.",
        "Makes handoffs smoother across assistants, coordinators, and agents.",
        "Useful when client communication volume is high.",
      ],
      cons: [
        "Most valuable for teams that are actually call-heavy.",
        "Still needs a follow-up process after the summary is generated.",
        "Less important than CRM or writing tools for some solo agents.",
      ],
      reason:
        "It fits real estate because missed details and inconsistent follow-up are expensive, especially when volume increases.",
    },
    zapier: {
      description:
        "Zapier helps real estate teams connect lead forms, CRMs, calendars, and internal notifications so promising inquiries do not sit untouched.",
      bestUseCase:
        "Best for automating lead routing and basic follow-up triggers across common tools.",
      pros: [
        "Can improve response speed without adding more manual admin.",
        "Useful for connecting forms, email, and CRM tools.",
        "A practical first automation layer for many brokerages.",
      ],
      cons: [
        "Not every team needs automation before fixing messaging and process.",
        "More advanced workflows may outgrow the simplest setup.",
        "The ROI depends on already having steady lead volume.",
      ],
      reason:
        "It matters most when a team already knows where leads are slipping through the cracks and needs a simple fix.",
    },
    claude: {
      description:
        "Claude is a strong fit for real estate professionals who want more polished long-form writing for market commentary, seller packets, and thoughtful client communication.",
      bestUseCase:
        "Best for teams that want more refined writing than a quick general assistant draft.",
      pros: [
        "Produces stronger long-form market and advisory content.",
        "Helpful for thoughtful client communication and seller materials.",
        "Good for turning rough notes into cleaner narratives.",
      ],
      cons: [
        "Less broad than ChatGPT for mixed operational tasks.",
        "Not a substitute for CRM or design tooling.",
        "Some teams may not need its strengths if they mostly need quick drafts.",
      ],
      reason:
        "It earns a spot when positioning, market commentary, and polished communication matter as much as speed.",
    },
  },
  ecommerce: {
    chatgpt: {
      description:
        "ChatGPT is a strong default pick for ecommerce teams that need faster product-page drafts, campaign ideas, merchandising support, and quick internal problem-solving across many workflows.",
      bestUseCase:
        "Best when an ecommerce team wants one flexible assistant for product copy, campaign planning, and day-to-day execution support.",
      pros: [
        "Useful for product descriptions, promo angles, and merchandising ideas.",
        "Helps lean teams move faster when launches and campaign calendars pile up.",
        "Strong first AI tool if the business wants broad leverage before adding specialist software.",
      ],
      cons: [
        "Still needs brand and conversion review before copy goes live.",
        "Less structured than a specialist marketing or SEO tool.",
        "Can produce generic ecommerce copy if prompts are thin.",
      ],
      reason:
        "Most ecommerce teams should start with ChatGPT when they need one tool that can support copy, planning, and execution without forcing a new workflow.",
    },
    jasper: {
      description:
        "Jasper fits ecommerce brands that care about brand consistency across product launches, lifecycle campaigns, and paid-traffic landing pages.",
      bestUseCase:
        "Best for ecommerce marketing teams that need more structured campaign production than a general assistant usually provides.",
      pros: [
        "Useful for campaigns where brand voice has to stay consistent across channels.",
        "Better fit than broad AI assistants when repeatable marketing workflows matter.",
        "Helpful for teams shipping offers, launches, and promotional assets at scale.",
      ],
      cons: [
        "Less compelling if the brand mostly needs flexible everyday support.",
        "Can be harder to justify for smaller stores with limited marketing volume.",
        "Still needs a conversion-minded marketer to guide final output.",
      ],
      reason:
        "It fits ecommerce best when the bottleneck is not just writing faster, but keeping campaigns and product messaging aligned across channels.",
    },
    "surfer-seo": {
      description:
        "Surfer SEO earns its place for ecommerce teams that publish collection content, buying guides, and search-driven landing pages that need a clearer optimization process.",
      bestUseCase:
        "Best for ecommerce brands using organic search as a meaningful acquisition channel rather than a side project.",
      pros: [
        "Useful for planning and improving search-focused category and editorial content.",
        "Helps content teams prioritize structure and on-page coverage more consistently.",
        "A strong support tool for stores investing in SEO-led growth.",
      ],
      cons: [
        "Less useful if the brand does not publish enough search content to justify it.",
        "Does not replace product positioning or broader SEO strategy.",
        "Can lead to formulaic content if used too mechanically.",
      ],
      reason:
        "It is the better fit when ecommerce growth depends on winning more qualified search traffic, not just writing copy faster.",
    },
    canva: {
      description:
        "Canva works well for ecommerce teams producing promo graphics, email assets, ad creative, and landing-page visuals without waiting on a designer for every request.",
      bestUseCase:
        "Best for fast-moving brands that need a steady stream of usable creative across campaigns and merchandising moments.",
      pros: [
        "Makes campaign asset production faster for small in-house teams.",
        "Useful for social, email, offers, and lightweight landing-page creative.",
        "Easy to keep using across promotions, launches, and seasonal pushes.",
      ],
      cons: [
        "Creative can feel repetitive without stronger brand direction.",
        "Not a substitute for higher-end design systems or art direction.",
        "Less important than copy or lifecycle tools if design is not the bottleneck.",
      ],
      reason:
        "It fits ecommerce because most brands need more creative velocity long before they need more design complexity.",
    },
    zapier: {
      description:
        "Zapier is a practical choice for ecommerce teams that want to connect forms, customer notifications, spreadsheets, support tools, and lightweight retention workflows without engineering help.",
      bestUseCase:
        "Best for automating repetitive operational work across common ecommerce tools.",
      pros: [
        "Useful for reducing manual handoffs between marketing, ops, and support.",
        "Can improve speed around alerts, reporting, and simple lifecycle workflows.",
        "Often the fastest way to prove ROI from automation in a small store.",
      ],
      cons: [
        "Only worth it if the business already has repeatable workflows to automate.",
        "More advanced logic can become harder to manage over time.",
        "Some brands should fix process issues before layering on automations.",
      ],
      reason:
        "It makes the most sense when the store is losing time to repetitive operational work rather than a pure copy or creative bottleneck.",
    },
    "hubspot-ai": {
      description:
        "HubSpot AI fits ecommerce businesses that treat email capture, lead nurture, and customer lifecycle marketing as structured revenue channels rather than one-off campaigns.",
      bestUseCase:
        "Best for ecommerce teams that need a more organized lifecycle and CRM layer around repeat purchase or lead-driven revenue.",
      pros: [
        "Useful for brands with more complex retention, nurture, or lead-capture flows.",
        "Can bring follow-up, segmentation, and campaign execution into one system.",
        "Better fit than lighter tools when ecommerce revenue depends on lifecycle discipline.",
      ],
      cons: [
        "Too much platform for many smaller stores.",
        "Needs real process ownership to justify the cost and complexity.",
        "Less attractive if the brand mainly needs better product copy or creative.",
      ],
      reason:
        "It belongs on the list for ecommerce brands that are past basic campaign execution and now need a more structured lifecycle engine.",
    },
  },
  "law-firms": {
    claude: {
      description:
        "Claude fits law firms that need careful long-form drafting, document synthesis, and more polished written output from dense source material.",
      bestUseCase:
        "Best for firms using AI to summarize documents and draft thoughtful internal or client-facing writing under review.",
      pros: [
        "Strong at working through long documents and producing cleaner summaries.",
        "Useful for turning rough legal or business notes into structured drafts.",
        "Often produces more measured output than lighter drafting tools.",
      ],
      cons: [
        "Still requires lawyer review on anything substantive.",
        "Not a practice-management tool.",
        "The quality depends on giving it the right material and context.",
      ],
      reason:
        "For law firms, the value is less about speed alone and more about making complex material easier to work with.",
    },
    chatgpt: {
      description:
        "ChatGPT works well for law firms that want a broader assistant for internal drafting, client update drafts, brainstorms, and process support.",
      bestUseCase:
        "Best for firms looking for a flexible general-purpose AI assistant rather than a single-purpose legal workflow tool.",
      pros: [
        "Useful across admin, drafting, and research organization tasks.",
        "A practical first AI tool for firms still learning where AI fits.",
        "Helps reduce blank-page time for internal and external communication.",
      ],
      cons: [
        "Needs tighter prompting to avoid generic or overly broad output.",
        "Requires strong review standards inside the firm.",
        "Less specialized for dense document work than Claude.",
      ],
      reason:
        "It fits firms that want versatility across many smaller tasks instead of optimizing around one specific document-heavy use case.",
    },
    "notion-ai": {
      description:
        "Notion AI is most useful for law firms trying to turn scattered internal notes, SOPs, and knowledge fragments into a more searchable operating system.",
      bestUseCase:
        "Best for internal knowledge management, playbooks, and recurring process documentation.",
      pros: [
        "Helps capture institutional knowledge that usually stays trapped in scattered docs.",
        "Useful for SOPs, internal templates, and team onboarding material.",
        "Fits firms trying to build repeatable internal systems.",
      ],
      cons: [
        "Only worth it if the firm is serious about documentation.",
        "Less useful if the team does not already work in Notion.",
        "Not a replacement for stronger drafting or analysis tools.",
      ],
      reason:
        "It stands out when the operational problem is not drafting speed but knowledge that never becomes reusable.",
    },
    grammarly: {
      description:
        "Grammarly is a practical support tool for law firms that need client updates, proposals, and day-to-day written communication to stay polished.",
      bestUseCase:
        "Best for editing and tightening written communication before it goes to clients or referral partners.",
      pros: [
        "Raises the baseline quality of emails, memos, and client-facing drafts.",
        "Low-effort tool to roll out across a firm.",
        "Pairs well with broader drafting assistants.",
      ],
      cons: [
        "It improves writing quality but does not create legal judgment.",
        "Less impactful than summarization tools for document-heavy practices.",
        "Can feel limited if a firm needs deeper drafting help.",
      ],
      reason:
        "For many firms, credibility shows up in the details, and Grammarly improves those details quickly.",
    },
    fireflies: {
      description:
        "Fireflies works best for law firms that spend a lot of time in consultations, internal meetings, and case-related discussions that generate follow-up tasks.",
      bestUseCase:
        "Best for capturing meeting takeaways and reducing manual note friction.",
      pros: [
        "Makes post-meeting summaries and action items easier to track.",
        "Useful for intake-heavy or communication-heavy practices.",
        "Can reduce note burden across busy teams.",
      ],
      cons: [
        "Value depends on call volume and internal adoption.",
        "Still needs a clear process around confidentiality and review.",
        "Not every practice will prioritize meeting tooling early.",
      ],
      reason:
        "It is a support tool, but a useful one, when too much billable and non-billable context gets trapped in meetings.",
    },
    perplexity: {
      description:
        "Perplexity is most useful for firms doing quick market, business, or background research where source visibility matters early in the process.",
      bestUseCase:
        "Best for research-heavy support work that benefits from source-backed exploration.",
      pros: [
        "Helps firms move faster when exploring unfamiliar topics or industries.",
        "Useful citations make it easier to verify starting points.",
        "A practical supplement to broader drafting tools.",
      ],
      cons: [
        "It is a research aid, not a final answer engine.",
        "Some firms may get more immediate value from drafting and knowledge tools first.",
        "Source review still matters on anything important.",
      ],
      reason:
        "Its value is highest when research speed matters but credibility still needs a paper trail.",
    },
  },
  dentists: {
    chatgpt: {
      description:
        "ChatGPT is a practical fit for dental practices that need patient communication drafts, recall messaging, educational content, and lighter front-desk writing support.",
      bestUseCase:
        "Best for practices that want one flexible AI tool for patient-facing communication and marketing support.",
      pros: [
        "Useful for patient FAQs, recall outreach, and treatment education drafts.",
        "Helps practices keep content and communication moving with small teams.",
        "A strong general-purpose assistant for offices just starting with AI.",
      ],
      cons: [
        "Needs staff review before sending patient-facing material.",
        "Does not replace scheduling or practice-management systems.",
        "Generic prompts can produce bland healthcare copy.",
      ],
      reason:
        "It fits dentistry because it helps both the front desk and marketing side of the practice without needing a complex setup.",
    },
    "hubspot-ai": {
      description:
        "HubSpot AI makes sense for dental groups or growth-focused practices that care deeply about lead nurture, treatment inquiry follow-up, and pipeline visibility.",
      bestUseCase:
        "Best for practices treating consultation and treatment acceptance as structured growth workflows.",
      pros: [
        "Better fit than lightweight tools when lead management matters.",
        "Can organize inquiry follow-up more consistently.",
        "Useful for practices investing in serious patient acquisition.",
      ],
      cons: [
        "Often too much CRM for smaller offices.",
        "Requires process discipline to pay off.",
        "Not every dental practice needs a full system here first.",
      ],
      reason:
        "It earns its place when patient acquisition is a real growth machine, not just an occasional campaign.",
    },
    canva: {
      description:
        "Canva works well for dental practices creating educational graphics, social content, referral material, and local promotional assets.",
      bestUseCase:
        "Best for keeping visual marketing polished and consistent without relying on a designer.",
      pros: [
        "Makes patient education and local promo assets easier to produce.",
        "Useful for practices posting regularly across social and email.",
        "Simple enough for in-house teams to maintain.",
      ],
      cons: [
        "Templates still need a recognizable brand layer.",
        "Less useful if the practice barely publishes visual content.",
        "Not a substitute for deeper marketing strategy.",
      ],
      reason:
        "Dentistry is trust-driven, and cleaner visual communication helps practices look more modern and reliable.",
    },
    zapier: {
      description:
        "Zapier helps dental practices connect forms, reminders, simple follow-up flows, and internal notifications without custom development.",
      bestUseCase:
        "Best for offices trying to reduce manual admin around inquiries and communication.",
      pros: [
        "Can reduce repetitive front-desk tasks.",
        "Useful for connecting intake, reminders, and notifications.",
        "A straightforward first step into automation.",
      ],
      cons: [
        "Only as valuable as the tools it connects.",
        "May be unnecessary before fixing simpler office workflows.",
        "More complex use cases can get messy.",
      ],
      reason:
        "It is most useful when the office knows where routine admin work is slowing response times down.",
    },
    grammarly: {
      description:
        "Grammarly is a small but useful upgrade for practices that want patient emails, treatment explanations, and referral communication to sound clearer and more polished.",
      bestUseCase:
        "Best for tightening writing quality across the team with very little setup.",
      pros: [
        "Improves clarity in patient-facing communication quickly.",
        "Low-friction tool for busy office teams.",
        "Useful as a final pass on copy drafted elsewhere.",
      ],
      cons: [
        "Its role is supportive rather than transformational.",
        "Does not fix process or follow-up gaps on its own.",
        "Some offices may get more value from broader writing tools first.",
      ],
      reason:
        "For healthcare businesses, cleaner communication strengthens trust, even when the tool itself is simple.",
    },
    fireflies: {
      description:
        "Fireflies is useful for larger or treatment-focused dental practices that handle lots of consult calls, handoffs, and team meetings.",
      bestUseCase:
        "Best for practices that want stronger summaries and follow-up after patient or team conversations.",
      pros: [
        "Reduces note-taking burden after calls and meetings.",
        "Useful for handoffs between treatment coordinators and clinical staff.",
        "Can make follow-up tasks more visible.",
      ],
      cons: [
        "Less important for smaller practices with low call complexity.",
        "Still needs a process for acting on summaries.",
        "Meeting tools are rarely the first AI investment for every office.",
      ],
      reason:
        "It fits best when communication volume and coordination complexity are already high enough to justify it.",
    },
  },
  "med-spas": {
    chatgpt: {
      description:
        "ChatGPT works well for med spas that need consultation follow-up drafts, campaign copy, treatment explainers, and content ideas without slowing staff down.",
      bestUseCase:
        "Best for med spas that want one versatile tool to support both nurture and marketing.",
      pros: [
        "Useful for promo copy, treatment education, and lead nurture drafts.",
        "Helps teams create more consistent messaging around offers and bookings.",
        "Can support both marketing and front-desk workflows.",
      ],
      cons: [
        "Needs human review to keep premium brand tone intact.",
        "Generic prompts can flatten the brand.",
        "Does not replace CRM or booking systems.",
      ],
      reason:
        "It is a strong fit because med spas need both speed and polish, often from the same small team.",
    },
    canva: {
      description:
        "Canva is especially useful for med spas that need polished promotional assets, story graphics, launch visuals, and branded before-and-after support content.",
      bestUseCase:
        "Best for keeping aesthetic marketing output consistent across weekly campaigns.",
      pros: [
        "Fast way to create premium-looking visuals without a design bottleneck.",
        "Useful for promotions, announcements, and educational posts.",
        "Easy for in-house teams to reuse and maintain.",
      ],
      cons: [
        "Requires brand discipline to avoid template-heavy visuals.",
        "Not a substitute for higher-end creative direction.",
        "Less impactful if the bigger issue is lead conversion rather than awareness.",
      ],
      reason:
        "The med spa category is highly visual, and Canva helps teams maintain that standard without slowing down.",
    },
    "hubspot-ai": {
      description:
        "HubSpot AI fits med spas that are serious about lead capture, consultation nurture, and retention flows rather than just ad hoc follow-up.",
      bestUseCase:
        "Best for growing med spas that need a more structured patient acquisition and retention engine.",
      pros: [
        "Useful for consultation follow-up and nurture at scale.",
        "Helps larger teams organize lead stages more clearly.",
        "Can support repeat-visit marketing inside a single system.",
      ],
      cons: [
        "Too much system for some smaller operators.",
        "Needs operational follow-through to work well.",
        "Higher lift than simpler content or automation tools.",
      ],
      reason:
        "It matters most when the med spa is already buying attention and now needs a better system to convert it.",
    },
    zapier: {
      description:
        "Zapier works well for med spas that want lighter automation around lead notifications, follow-up triggers, and admin tasks tied to marketing and booking workflows.",
      bestUseCase:
        "Best for removing repetitive process gaps without implementing a heavier system first.",
      pros: [
        "Can tighten up internal follow-up and lead handling quickly.",
        "Useful for connecting inquiry points to team alerts and reminders.",
        "Lower-friction automation than more advanced platforms.",
      ],
      cons: [
        "Limited if the underlying funnel process is weak.",
        "Not a full CRM replacement.",
        "Complex scenarios may eventually need more structure.",
      ],
      reason:
        "It is a practical middle ground when a med spa needs better execution before it needs a full CRM overhaul.",
    },
    midjourney: {
      description:
        "Midjourney is valuable for med spa brands that want concept exploration, mood-board style creative ideas, and premium visual inspiration before final campaign design.",
      bestUseCase:
        "Best for concepting campaigns and refining a more elevated visual direction.",
      pros: [
        "Useful for generating higher-end creative directions and campaign inspiration.",
        "Can speed up ideation for launches or new offers.",
        "Helps teams think beyond overused local-medical creative patterns.",
      ],
      cons: [
        "It is more inspiration engine than daily production tool.",
        "Final marketing assets usually need refinement elsewhere.",
        "Not the first tool to buy if follow-up is the bigger problem.",
      ],
      reason:
        "It earns a spot when the brand needs more visual distinction, not just more content volume.",
    },
    grammarly: {
      description:
        "Grammarly helps med spas tighten promotional copy, patient communication, and follow-up messaging so the brand feels more polished and credible.",
      bestUseCase:
        "Best as a quality-control layer for email, SMS, and website messaging.",
      pros: [
        "Quickly improves clarity and professionalism in patient-facing writing.",
        "Low-friction tool for busy teams.",
        "Works well alongside broader drafting tools.",
      ],
      cons: [
        "It refines copy but does not solve content strategy or lead management.",
        "Less important than stronger conversion tools for some businesses.",
        "Can over-smooth tone if no one checks final voice.",
      ],
      reason:
        "In a trust-sensitive category, cleaner copy helps support the premium experience the business is selling.",
    },
  },
  salons: {
    canva: {
      description:
        "Canva is often the easiest high-impact tool for salons because it helps owners create polished promos, stylist spotlights, and local content without waiting on outside design help.",
      bestUseCase:
        "Best for salons that need frequent visual marketing but do not need a full designer.",
      pros: [
        "Makes it easier to promote openings, offers, and seasonal campaigns.",
        "Strong fit for social-first local marketing.",
        "Fast enough for salon owners and managers to keep using regularly.",
      ],
      cons: [
        "Needs a simple brand system to avoid template fatigue.",
        "Not meant for advanced design work.",
        "Content frequency still needs an owner inside the business.",
      ],
      reason:
        "Salons win with consistency and presentation, and Canva helps with both more immediately than most tools.",
    },
    chatgpt: {
      description:
        "ChatGPT is useful for salons that need caption ideas, local promo copy, client communication drafts, and fast marketing support without a big planning process.",
      bestUseCase:
        "Best for salons that want a flexible assistant for writing, brainstorming, and day-to-day communication.",
      pros: [
        "Helps owners move faster on captions, promos, and email copy.",
        "Useful for client-facing messaging and staff-facing SOP drafts.",
        "A practical tool for small salons with limited admin capacity.",
      ],
      cons: [
        "Still needs editing to sound like the salon’s actual brand.",
        "Does not create visual assets or automation by itself.",
        "Generic prompts can make the content feel interchangeable.",
      ],
      reason:
        "It works well when the problem is not just what to post, but how to keep communicating consistently at all.",
    },
    zapier: {
      description:
        "Zapier fits salons that already know where their booking, inquiry, or reminder workflows are getting missed and want a lighter automation layer.",
      bestUseCase:
        "Best for basic automation around forms, notifications, and small front-desk process gaps.",
      pros: [
        "Can improve response speed without adding more manual admin.",
        "Useful for connecting salon tools to notifications and follow-up steps.",
        "Usually easier to launch than a more complex automation setup.",
      ],
      cons: [
        "Not every salon needs automation before fixing simpler consistency problems.",
        "Depends on what tools are already in place.",
        "The payoff is weaker if the team rarely follows a defined process.",
      ],
      reason:
        "It matters most for salons that already have demand but keep losing time to repetitive task switching.",
    },
    grammarly: {
      description:
        "Grammarly helps salon teams tighten client communication, website copy, and promotional writing so the brand feels more polished and deliberate.",
      bestUseCase:
        "Best for salons that care about tone and professionalism in everyday client messaging.",
      pros: [
        "Improves clarity in appointment, referral, and promo communication.",
        "Low-lift tool with a quick learning curve.",
        "Useful for polishing copy from broader AI tools.",
      ],
      cons: [
        "It is a refinement tool rather than a growth engine on its own.",
        "Some salons may see bigger returns from design or automation first.",
        "Can only help if the team is actually writing regularly.",
      ],
      reason:
        "It is a subtle but useful trust-builder in a category where brand feel matters almost as much as the service itself.",
    },
    "hubspot-ai": {
      description:
        "HubSpot AI is a better fit for multi-stylist or growth-focused salons that treat lead follow-up, campaigns, and retention as structured revenue systems.",
      bestUseCase:
        "Best for salons with enough lead volume to justify a more serious nurture setup.",
      pros: [
        "Useful for follow-up workflows and stronger campaign organization.",
        "Can support retention and repeat-visit communication more systematically.",
        "More strategic long-term option for scaling businesses.",
      ],
      cons: [
        "Too much CRM for many salons.",
        "Requires consistency and process ownership to work well.",
        "Not the right first purchase for every small local business.",
      ],
      reason:
        "It belongs on the list because some salons are running a real growth engine, not just filling a chair one appointment at a time.",
    },
    midjourney: {
      description:
        "Midjourney is useful for salons that want more distinctive campaign concepts, launch visuals, or creative inspiration than template-driven tools can provide.",
      bestUseCase:
        "Best for visual concepting when the salon brand wants a more distinctive look.",
      pros: [
        "Helps teams think beyond standard local beauty creative.",
        "Useful for concept boards and campaign ideation.",
        "Can elevate the visual direction of launches or seasonal promos.",
      ],
      cons: [
        "Not a daily-use tool for every salon.",
        "Needs refinement before visuals become real brand assets.",
        "Less urgent than Canva or ChatGPT for many owners.",
      ],
      reason:
        "It is more of a creative edge tool than a foundational one, but it can be valuable for brands that want stronger differentiation.",
    },
  },
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

export const getPrimaryToolCtaUrl = (tool: Tool) =>
  tool.affiliateUrl || tool.websiteUrl;

export const getToolPricingHref = (tool: Tool) =>
  tool.pricingUrl || tool.websiteUrl;

export const getToolPricingUrl = (toolSlug: string) => {
  const tool = getToolBySlug(toolSlug);
  return tool ? getToolPricingHref(tool) : `${getToolUrl(toolSlug)}#pricing`;
};

export const getDefaultComparisonUrl = (tool: Tool) => {
  const primaryAlternative = getAlternativesForTool(tool)[0];
  return primaryAlternative
    ? getComparisonUrl(tool.slug, primaryAlternative.slug)
    : "/compare/chatgpt-vs-claude";
};

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
  const override = industryToolOverrides[industry.slug]?.[tool.slug];

  if (override) {
    return override;
  }

  const jobs = industry.jobsToBeDone;
  const useCaseSeed = jobs[0] || `save time in ${industry.name.toLowerCase()}`;

  return {
    description: `${tool.name} is one of the best choices for ${industry.name.toLowerCase()} teams that need to ${useCaseSeed.toLowerCase()} without adding another complicated system to manage.`,
    bestUseCase: `Best choice if you want to ${jobs[1]?.toLowerCase() || jobs[0].toLowerCase()} and still keep quality high.`,
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
  industryToolOverrides[industry.slug]?.[tool.slug]?.reason ||
  `Most ${industry.name.toLowerCase()} businesses should start with ${tool.name} if they need help with ${industry.jobsToBeDone[0].toLowerCase()}, ${industry.jobsToBeDone[1].toLowerCase()}, and reducing friction around ${industry.painPoint.toLowerCase()}.`;

export const getComparisonQuickPicks = (toolA: Tool, toolB: Tool) => {
  const freeBias = (tool: Tool) => (tool.pricing.toLowerCase().includes("free") ? 1 : 0);
  const pickHigher = (
    scoreKey: "overall" | "beginner" | "value",
    fallbackBias = false,
  ) => {
    const aScore = toolA.scores[scoreKey] + (fallbackBias ? freeBias(toolA) : 0);
    const bScore = toolB.scores[scoreKey] + (fallbackBias ? freeBias(toolB) : 0);
    return aScore >= bScore ? toolA : toolB;
  };

  const overall = pickHigher("overall");
  let beginner = pickHigher("beginner", true);
  let value = pickHigher("value", true);

  if (beginner.slug === overall.slug) {
    const other = overall.slug === toolA.slug ? toolB : toolA;
    if (other.scores.beginner >= overall.scores.beginner - 1 || freeBias(other)) {
      beginner = other;
    }
  }

  if (value.slug === overall.slug || value.slug === beginner.slug) {
    const other = value.slug === toolA.slug ? toolB : toolA;
    if (other.scores.value >= value.scores.value - 1 || freeBias(other)) {
      value = other;
    }
  }

  return [
    { label: "Best Overall", tool: overall },
    { label: "Best for Beginners", tool: beginner },
    { label: "Best Value", tool: value },
  ];
};

export const getComparisonRecommendation = (toolA: Tool, toolB: Tool) => {
  const pair = [toolA.slug, toolB.slug].sort().join(":");
  if (pair === "chatgpt:claude") {
    const winner = toolA.slug === "chatgpt" ? toolA : toolB;
    const runnerUp = winner.slug === toolA.slug ? toolB : toolA;

    return {
      winner,
      summary: `${winner.name} is the safer default for most teams that want one AI assistant for drafting, brainstorming, and everyday business work. Choose ${runnerUp.name} if your priority is cleaner long-form writing, document-heavy workflows, and a more measured first draft.`,
    };
  }

  const winner = toolA.scores.overall >= toolB.scores.overall ? toolA : toolB;
  const runnerUp = winner.slug === toolA.slug ? toolB : toolA;
  const gap = Math.abs(toolA.scores.overall - toolB.scores.overall);
  const sameCategory = toolA.category === toolB.category;

  if (sameCategory && gap <= 1) {
    return {
      winner,
      summary: `This is a close call, but ${winner.name} is the better all-around pick for most teams. Choose ${runnerUp.name} only if your day-to-day priority is ${runnerUp.bestUseCase.toLowerCase()}.`,
    };
  }

  if (sameCategory) {
    return {
      winner,
      summary: `${winner.name} is the stronger recommendation for most buyers in this category. Choose ${runnerUp.name} if the deciding factor is ${runnerUp.bestUseCase.toLowerCase()}.`,
    };
  }

  return {
    winner,
    summary: `${winner.name} is the better pick if you want broader impact right away. Choose ${runnerUp.name} if your main constraint is ${runnerUp.bestUseCase.toLowerCase()}.`,
  };
};

export const allComparisonSlugs = tools.flatMap((tool, index) =>
  tools.slice(index + 1).map((otherTool) => getComparisonSlug(tool.slug, otherTool.slug)),
);
