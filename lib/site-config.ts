export const siteConfig = {
  name: "Sanestix Academy",
  tagline: "Learn AI. Build Real Systems. Get Paid.",
  description:
    "A hands-on, weekend live program to help you learn AI automation, AI agents, calling agents and AI websites — then package and sell it as a freelancer or agency.",
  seoDescription:
    "Learn AI automation, AI agents, calling agents & AI websites in 2 months of live weekend classes (Sat & Sun). Includes a freelancing & agency module. Enroll for PKR 4,990 (was PKR 9,990).",
  keywords: [
    "AI automation course",
    "AI agents course",
    "learn AI agents",
    "calling agents AI",
    "AI voice agent course",
    "AI website course",
    "AI freelancing course",
    "AI agency course",
    "Sanestix Academy",
    "AI automation training Pakistan",
    "weekend AI course",
    "live AI course",
    "no-code AI automation",
    "build AI agents",
  ],
  url: "https://academy.sanestix.com",
  cohort: {
    label: "Cohort 04",
    startsOn: "Oct 12, 2026",
  },
  schedule: {
    duration: "2 Months",
    days: "Saturdays & Sundays",
    classesPerWeek: 2,
    totalClasses: "16+",
    format: "Live, Online",
  },
  pricing: {
    currency: "PKR",
    currencySymbol: "Rs.",
    current: 4990,
    original: 9990,
    discountPercent: 50,
    note: "Early-bird pricing for this cohort — seats are limited.",
  },
};

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Curriculum", href: "/course" },
  { label: "Projects", href: "/projects" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Academy",
    links: [
      { label: "Course curriculum", href: "/course" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Enroll", href: "/enroll" },
      { label: "Refund policy", href: "/refund" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export const stats = [
  { value: "2 Months", label: "Weekend Live Program" },
  { value: "16+", label: "Live Classes (Sat & Sun)" },
  { value: "5 Modules", label: "Automation to Agency" },
  { value: "Lifetime Access", label: "Recordings & Resources" },
];

export const programPillars = [
  {
    title: "Build",
    description: "Build AI automations, agents, calling agents and AI websites.",
    icon: "build",
  },
  {
    title: "Ship",
    description: "Create production-ready, client-style AI projects.",
    icon: "ship",
  },
  {
    title: "Sell",
    description: "Learn how to package and sell your skills as a freelancer.",
    icon: "sell",
  },
  {
    title: "Grow",
    description: "Turn your skills into a freelancing career or your own agency.",
    icon: "grow",
  },
] as const;

export type CourseModule = {
  id: string;
  range: string;
  title: string;
  summary: string;
  topics: string[];
};

export const courseModules: CourseModule[] = [
  {
    id: "ai-foundations",
    range: "Week 1",
    title: "AI Foundations & n8n",
    summary: "Understand LLMs and automation basics.",
    topics: [
      "How modern AI automation actually works",
      "Choosing and connecting the right tools & APIs",
      "Building your first end-to-end automated workflow",
      "Handling data, triggers and error handling",
      "Project: Auto-Sync CRM Leads",
    ],
  },
  {
    id: "ai-agents",
    range: "Week 2",
    title: "AI Agents",
    summary: "Design and build autonomous AI agents that reason and take action.",
    topics: [
      "Agent architecture: memory, tools & decision-making",
      "Multi-step, agentic workflows",
      "Connecting agents to real data and services",
      "Testing and deploying reliable agent behavior",
      "Project: Customer Support Bot",
    ],
  },
  {
    id: "voice-agents",
    range: "Week 3",
    title: "Voice Agents",
    summary: "Build human-like AI calling agents (with Retell etc.).",
    topics: [
      "How AI voice / calling agents work",
      "Designing natural, goal-driven conversations",
      "Building inbound and outbound calling agents",
      "Integrating calling agents with your CRM & backend",
      "Project: AI Phone Receptionist",
    ],
  },
  {
    id: "ai-websites",
    range: "Week 4",
    title: "AI Websites",
    summary: "Create modern websites with AI tools.",
    topics: [
      "Building fast, modern websites with AI tools",
      "Embedding AI agents & chat widgets on a site",
      "Client-ready landing pages that convert",
      "Deploying and handing off a finished site",
      "Project: Your Agency Website",
    ],
  },
  {
    id: "ecommerce-ai",
    range: "Week 5",
    title: "Ecommerce AI",
    summary: "Automate Shopify stores and eCommerce workflows.",
    topics: [
      "Connecting Shopify to AI workflows",
      "Automating inventory and order tracking",
      "Building an AI personal shopper",
      "Handling customer inquiries autonomously",
      "Project: Automated Shopify Assistant",
    ],
  },
  {
    id: "meta-ads",
    range: "Week 6",
    title: "Meta Ads & Lead Gen",
    summary: "Find clients with paid ads and automation.",
    topics: [
      "Setting up high-converting Meta Ads",
      "Automating lead qualification via WhatsApp",
      "Syncing leads to your CRM instantly",
      "Nurturing prospects with AI follow-ups",
      "Project: Automated Lead Gen Funnel",
    ],
  },
  {
    id: "client-acquisition",
    range: "Week 7-8",
    title: "Client Acquisition & Capstone",
    summary: "Work on real projects and present your final system.",
    topics: [
      "Positioning, pricing and packaging your services",
      "Building a portfolio & case studies from your projects",
      "Outreach, discovery calls and closing your first client",
      "Running your own AI freelancing business or agency",
      "Project: Final Production System",
    ],
  },
];
