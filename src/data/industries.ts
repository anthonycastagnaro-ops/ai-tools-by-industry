import type { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    audience: "restaurant operators",
    intro:
      "Restaurants need AI tools that help them keep tables full, respond faster, and run tighter operations without adding more work for already stretched teams.",
    painPoint:
      "thin margins, staffing pressure, and inconsistent marketing follow-through",
    jobsToBeDone: [
      "create promotions faster",
      "respond to customer inquiries",
      "standardize operations",
    ],
    recommendedToolSlugs: ["chatgpt", "canva", "zapier", "hubspot-ai", "grammarly", "perplexity"],
    relatedSlugs: ["salons", "med-spas", "wedding-planners"],
    featuredComparisonSlugs: ["chatgpt-vs-jasper", "zapier-vs-make"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    audience: "real estate teams",
    intro:
      "Real estate teams need AI tools that help them move faster on listings, follow up before leads cool off, and stay visible without sounding generic.",
    painPoint:
      "slow lead follow-up, repetitive listing work, and constant client communication",
    jobsToBeDone: [
      "write listing copy quickly",
      "respond to prospects faster",
      "keep pipelines organized",
    ],
    recommendedToolSlugs: ["chatgpt", "hubspot-ai", "canva", "fireflies", "zapier", "claude"],
    relatedSlugs: ["mortgage-brokers", "property-managers", "insurance-agents"],
    featuredComparisonSlugs: ["hubspot-ai-vs-zapier", "chatgpt-vs-claude"],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    audience: "legal service teams",
    intro:
      "Law firms benefit most from AI that supports document review, internal drafting, client communication, and better knowledge management without sacrificing oversight.",
    painPoint:
      "document-heavy workflows, knowledge bottlenecks, and non-billable admin time",
    jobsToBeDone: [
      "summarize long documents",
      "prepare clearer client updates",
      "capture internal knowledge",
    ],
    recommendedToolSlugs: ["claude", "chatgpt", "notion-ai", "grammarly", "fireflies", "perplexity"],
    relatedSlugs: ["accountants", "consultants", "insurance-agents"],
    featuredComparisonSlugs: ["chatgpt-vs-claude", "perplexity-vs-chatgpt"],
  },
  {
    slug: "dentists",
    name: "Dentists",
    audience: "dental practice teams",
    intro:
      "Dental practices can use AI to improve patient communication, automate reminders, and create educational marketing content that keeps schedules full.",
    painPoint:
      "front-desk overload, patient follow-up gaps, and inconsistent marketing",
    jobsToBeDone: [
      "handle appointment communication",
      "create educational content",
      "reduce admin workload",
    ],
    recommendedToolSlugs: ["chatgpt", "hubspot-ai", "canva", "zapier", "grammarly", "fireflies"],
    relatedSlugs: ["med-spas", "salons", "fitness-coaches"],
    featuredComparisonSlugs: ["chatgpt-vs-copy-ai", "zapier-vs-make"],
  },
  {
    slug: "med-spas",
    name: "Med Spas",
    audience: "med spa operators",
    intro:
      "Med spas need AI tools that support lead nurturing, before-and-after content workflows, and quick follow-up for consultations and repeat visits.",
    painPoint:
      "high lead leakage, content demands, and manual follow-up",
    jobsToBeDone: [
      "nurture consultation leads",
      "create polished promotional content",
      "automate reminders and follow-up",
    ],
    recommendedToolSlugs: ["chatgpt", "canva", "hubspot-ai", "zapier", "midjourney", "grammarly"],
    relatedSlugs: ["salons", "dentists", "fitness-coaches"],
    featuredComparisonSlugs: ["canva-vs-midjourney", "hubspot-ai-vs-copy-ai"],
  },
  {
    slug: "salons",
    name: "Salons",
    audience: "salon owners and stylists",
    intro:
      "Salons can use AI to stay visible locally, keep appointment books full, and create better customer communication with less administrative drag.",
    painPoint:
      "inconsistent local marketing and repetitive front-desk work",
    jobsToBeDone: [
      "fill empty appointment slots",
      "post content consistently",
      "speed up client communication",
    ],
    recommendedToolSlugs: ["canva", "chatgpt", "zapier", "grammarly", "hubspot-ai", "midjourney"],
    relatedSlugs: ["med-spas", "restaurants", "wedding-planners"],
    featuredComparisonSlugs: ["canva-vs-chatgpt", "zapier-vs-make"],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    audience: "ecommerce teams",
    intro:
      "Ecommerce brands need AI tools that help them launch pages faster, improve conversion efficiency, and reduce the manual work behind merchandising, retention, and campaign execution.",
    painPoint:
      "content bottlenecks, rising acquisition costs, and operational complexity",
    jobsToBeDone: [
      "write product and campaign copy",
      "optimize acquisition channels",
      "automate merchandising workflows",
    ],
    recommendedToolSlugs: ["chatgpt", "jasper", "surfer-seo", "canva", "zapier", "hubspot-ai"],
    relatedSlugs: ["marketing-agencies", "content-creators", "freelancers"],
    featuredComparisonSlugs: ["jasper-vs-copy-ai", "surfer-seo-vs-perplexity"],
  },
  {
    slug: "consultants",
    name: "Consultants",
    audience: "consulting teams",
    intro:
      "Consultants get the biggest win from AI when it helps them think faster, package insights better, and spend more time on client delivery instead of admin.",
    painPoint:
      "knowledge-heavy delivery, proposal workload, and meeting overhead",
    jobsToBeDone: [
      "turn research into recommendations",
      "write proposals and deliverables",
      "capture meeting follow-up",
    ],
    recommendedToolSlugs: ["claude", "chatgpt", "perplexity", "fireflies", "notion-ai", "grammarly"],
    relatedSlugs: ["law-firms", "accountants", "freelancers"],
    featuredComparisonSlugs: ["claude-vs-chatgpt", "fireflies-vs-notion-ai"],
  },
  {
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    audience: "agency teams",
    intro:
      "Agencies need AI tools that increase content throughput, improve reporting, and reduce the manual effort behind client delivery and campaign operations.",
    painPoint:
      "production pressure, reporting fatigue, and margin compression",
    jobsToBeDone: [
      "produce client content faster",
      "optimize campaigns and SEO",
      "standardize client delivery",
    ],
    recommendedToolSlugs: ["jasper", "copy-ai", "surfer-seo", "canva", "descript", "make"],
    relatedSlugs: ["content-creators", "ecommerce", "consultants"],
    featuredComparisonSlugs: ["jasper-vs-copy-ai", "zapier-vs-make"],
  },
  {
    slug: "accountants",
    name: "Accountants",
    audience: "accounting firms",
    intro:
      "Accounting teams need AI that helps them communicate more clearly, summarize information faster, and reduce internal admin without cutting corners.",
    painPoint:
      "busy-season overload, repetitive client communication, and documentation drag",
    jobsToBeDone: [
      "summarize financial information",
      "write clearer client updates",
      "document recurring processes",
    ],
    recommendedToolSlugs: ["claude", "chatgpt", "grammarly", "notion-ai", "fireflies", "perplexity"],
    relatedSlugs: ["law-firms", "consultants", "insurance-agents"],
    featuredComparisonSlugs: ["chatgpt-vs-claude", "grammarly-vs-chatgpt"],
  },
  {
    slug: "mortgage-brokers",
    name: "Mortgage Brokers",
    audience: "mortgage teams",
    intro:
      "Mortgage brokers can use AI to keep borrowers informed, speed up follow-up, and create educational content that builds trust during a complex buying process.",
    painPoint:
      "lead response delays, document-heavy communication, and pipeline follow-up",
    jobsToBeDone: [
      "follow up with borrowers quickly",
      "explain loan options clearly",
      "organize pipeline activity",
    ],
    recommendedToolSlugs: ["hubspot-ai", "chatgpt", "fireflies", "grammarly", "zapier", "claude"],
    relatedSlugs: ["real-estate", "insurance-agents", "property-managers"],
    featuredComparisonSlugs: ["hubspot-ai-vs-chatgpt", "zapier-vs-make"],
  },
  {
    slug: "insurance-agents",
    name: "Insurance Agents",
    audience: "insurance sales teams",
    intro:
      "Insurance agents need AI that helps them follow up consistently, explain products clearly, and handle the communication load that slows down quoting and renewals.",
    painPoint:
      "follow-up inconsistency and communication-heavy sales cycles",
    jobsToBeDone: [
      "respond to leads faster",
      "write clearer policy explanations",
      "track renewal conversations",
    ],
    recommendedToolSlugs: ["hubspot-ai", "chatgpt", "grammarly", "fireflies", "zapier", "copy-ai"],
    relatedSlugs: ["mortgage-brokers", "real-estate", "accountants"],
    featuredComparisonSlugs: ["hubspot-ai-vs-copy-ai", "chatgpt-vs-grammarly"],
  },
  {
    slug: "property-managers",
    name: "Property Managers",
    audience: "property management teams",
    intro:
      "Property managers can use AI to improve resident communication, standardize operations, and reduce the manual load around maintenance and leasing workflows.",
    painPoint:
      "high message volume, repetitive updates, and operational fragmentation",
    jobsToBeDone: [
      "handle resident communication",
      "standardize leasing workflows",
      "reduce repetitive admin",
    ],
    recommendedToolSlugs: ["chatgpt", "zapier", "make", "hubspot-ai", "grammarly", "fireflies"],
    relatedSlugs: ["real-estate", "mortgage-brokers", "consultants"],
    featuredComparisonSlugs: ["zapier-vs-make", "hubspot-ai-vs-zapier"],
  },
  {
    slug: "fitness-coaches",
    name: "Fitness Coaches",
    audience: "fitness coaching businesses",
    intro:
      "Fitness coaches need AI that helps them create content, communicate with clients at scale, and stay consistent without spending all day in admin.",
    painPoint:
      "content demands, check-in admin, and inconsistent lead nurturing",
    jobsToBeDone: [
      "create coaching content",
      "follow up with prospects and clients",
      "streamline weekly check-ins",
    ],
    recommendedToolSlugs: ["chatgpt", "canva", "descript", "hubspot-ai", "zapier", "grammarly"],
    relatedSlugs: ["personal-trainers", "med-spas", "content-creators"],
    featuredComparisonSlugs: ["descript-vs-canva", "chatgpt-vs-jasper"],
  },
  {
    slug: "personal-trainers",
    name: "Personal Trainers",
    audience: "personal training businesses",
    intro:
      "Personal trainers can use AI to make client communication more consistent, produce better content, and reduce the admin that competes with paid coaching time.",
    painPoint:
      "time pressure between sessions and inconsistent marketing execution",
    jobsToBeDone: [
      "create useful client content",
      "respond to leads promptly",
      "organize follow-up workflows",
    ],
    recommendedToolSlugs: ["chatgpt", "canva", "grammarly", "hubspot-ai", "zapier", "descript"],
    relatedSlugs: ["fitness-coaches", "content-creators", "salons"],
    featuredComparisonSlugs: ["chatgpt-vs-claude", "descript-vs-canva"],
  },
  {
    slug: "content-creators",
    name: "Content Creators",
    audience: "creator businesses",
    intro:
      "Content creators need AI tools that speed up ideation, production, editing, and repurposing so they can publish more without lowering quality.",
    painPoint:
      "content volume pressure and time-consuming post-production",
    jobsToBeDone: [
      "generate content ideas quickly",
      "edit audio and video faster",
      "repurpose long-form content into more assets",
    ],
    recommendedToolSlugs: ["chatgpt", "descript", "canva", "midjourney", "notion-ai", "grammarly"],
    relatedSlugs: ["marketing-agencies", "freelancers", "fitness-coaches"],
    featuredComparisonSlugs: ["descript-vs-canva", "midjourney-vs-canva"],
  },
  {
    slug: "freelancers",
    name: "Freelancers",
    audience: "freelance service providers",
    intro:
      "Freelancers get the most value from AI when it reduces context switching, speeds up client delivery, and makes solo operations feel more scalable.",
    painPoint:
      "wearing every hat across sales, delivery, and operations",
    jobsToBeDone: [
      "deliver client work faster",
      "write proposals and outreach",
      "stay organized without a big tech stack",
    ],
    recommendedToolSlugs: ["chatgpt", "claude", "notion-ai", "grammarly", "canva", "fireflies"],
    relatedSlugs: ["consultants", "content-creators", "virtual-assistants"],
    featuredComparisonSlugs: ["chatgpt-vs-claude", "notion-ai-vs-fireflies"],
  },
  {
    slug: "virtual-assistants",
    name: "Virtual Assistants",
    audience: "virtual assistant businesses",
    intro:
      "Virtual assistants can use AI to handle documentation, summaries, writing, and process-heavy client work with more speed and consistency.",
    painPoint:
      "high task volume and too much repetitive coordination work",
    jobsToBeDone: [
      "document client processes",
      "summarize meetings and updates",
      "execute recurring admin tasks faster",
    ],
    recommendedToolSlugs: ["chatgpt", "notion-ai", "fireflies", "zapier", "grammarly", "claude"],
    relatedSlugs: ["freelancers", "consultants", "property-managers"],
    featuredComparisonSlugs: ["fireflies-vs-notion-ai", "zapier-vs-make"],
  },
  {
    slug: "interior-designers",
    name: "Interior Designers",
    audience: "interior design studios",
    intro:
      "Interior designers need AI that helps them visualize concepts, streamline client communication, and package ideas more clearly during the sales process.",
    painPoint:
      "visual production demands and communication-heavy project workflows",
    jobsToBeDone: [
      "develop visual concepts faster",
      "create client-ready presentations",
      "manage project communication",
    ],
    recommendedToolSlugs: ["midjourney", "canva", "chatgpt", "grammarly", "fireflies", "notion-ai"],
    relatedSlugs: ["wedding-planners", "content-creators", "consultants"],
    featuredComparisonSlugs: ["midjourney-vs-canva", "chatgpt-vs-claude"],
  },
  {
    slug: "wedding-planners",
    name: "Wedding Planners",
    audience: "wedding planning businesses",
    intro:
      "Wedding planners need AI tools that make client communication smoother, help them market beautifully, and reduce coordination overhead across vendors and timelines.",
    painPoint:
      "high-touch client communication and coordination-heavy delivery",
    jobsToBeDone: [
      "communicate clearly with couples",
      "produce polished marketing content",
      "manage meeting and planning follow-up",
    ],
    recommendedToolSlugs: ["chatgpt", "canva", "grammarly", "fireflies", "midjourney", "notion-ai"],
    relatedSlugs: ["interior-designers", "salons", "restaurants"],
    featuredComparisonSlugs: ["canva-vs-midjourney", "fireflies-vs-notion-ai"],
  },
];
