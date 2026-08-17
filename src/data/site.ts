/**
 * Single source of truth for Nexcubic company facts, services and page content.
 * Used by pages, structured data, the sitemap generator and public/llms.txt.
 *
 * RULE: only verifiable facts here. No invented clients, metrics,
 * certifications, partnerships or testimonials.
 */

export const SITE_URL = 'https://nexcubic.com';

export const company = {
  name: 'Nexcubic',
  legalTagline: 'AI, technology and startup growth partner',
  positioning:
    'Nexcubic helps businesses, startups and colleges build, launch and grow using AI, technology and digital execution.',
  shortDescription:
    'Nexcubic is a Bangalore-based technology and digital execution company. We build websites, apps and AI automation, run digital marketing and branding, and support founders and colleges with startup and student programs.',
  city: 'Bangalore',
  region: 'Karnataka',
  country: 'India',
  email: 'sanjays@nexcubic.com',
  phone: '+91 9740501114',
  phoneE164: '+919740501114',
  instagram: 'https://www.instagram.com/nexcubic/',
  linkedin: 'https://www.linkedin.com/company/nexcubic/',
  founder: {
    name: 'Sanjay S',
    role: 'Founder & Mentor',
    bio: 'Sanjay S founded Nexcubic and leads its client work and mentoring. He works hands-on across AI automation, web and app development, and digital marketing, and personally runs the free student startup support program.',
    linkedin: 'https://www.linkedin.com/in/sanjay-s-258781240/',
    instagram: 'https://www.instagram.com/sanjay.s.journey/',
  },
} as const;

export const audiences = [
  {
    id: 'businesses',
    label: 'Businesses',
    headline: 'AI, technology and growth',
    description:
      'For established businesses and teams: AI automation for repetitive work, web and app development, and digital marketing that is measured rather than guessed.',
    href: '/services',
  },
  {
    id: 'founders',
    label: 'Founders',
    headline: 'Product, launch, GTM and business support',
    description:
      'For early-stage founders: MVP scoping and build, branding, a launch-ready website or store, and go-to-market execution with a small, direct team.',
    href: '/startup-support',
  },
  {
    id: 'colleges',
    label: 'Colleges',
    headline: 'Incubation, student startup programs and industry connections',
    description:
      'For colleges and departments: student startup programs, hands-on AI and web development training, and mentoring that connects classroom projects to real products.',
    href: '/college-programs',
  },
] as const;

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  heading: string;
  body: string;
  bullets?: { title: string; text: string }[];
}

export interface ServiceDef {
  slug: string;
  h1: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  bestFor: string[];
  sections: ServiceSection[];
  deliverables: string[];
  faqs: Faq[];
}

export const services: ServiceDef[] = [
  {
    slug: '/services/ai-automation',
    navLabel: 'AI & Automation',
    h1: 'AI Automation for Businesses and Startups',
    metaTitle: 'AI Automation Services in Bangalore | Nexcubic',
    metaDescription:
      'Nexcubic builds practical AI automation: workflow automation, AI assistants, document and data processing, and integrations with the tools your team already uses.',
    summary:
      'We automate the repetitive parts of a business with AI and integrations, starting from the workflows that cost your team the most hours.',
    bestFor: [
      'Teams doing repeated manual work in spreadsheets, email or WhatsApp',
      'Businesses with support or sales enquiries arriving faster than they can answer',
      'Startups that need automation before they can afford more headcount',
    ],
    sections: [
      {
        heading: 'AI automation for startups',
        body: 'Early teams usually do not need a large AI platform. They need two or three workflows removed from a founder\'s day. We scope the highest-cost manual steps first, automate those, and keep the setup small enough that a non-technical founder can run it. Typical starting points are lead capture and qualification, automated replies and follow-ups, quotation or proposal drafting, and reporting that assembles itself instead of being copy-pasted every week.',
      },
      {
        heading: 'AI automation for enterprises and established teams',
        body: 'For larger teams the constraint is rarely the model — it is the process, the data and the handover to a human. We map the current process end to end, decide which steps AI should draft versus decide, and put review points where an error would be expensive. Work is delivered in stages so each automation is in production and measured before the next one starts.',
      },
      {
        heading: 'Business process automation with AI',
        body: 'Most of the value comes from joining systems together rather than from any single clever prompt. We connect forms, inboxes, sheets, CRMs, storage and messaging tools, then add AI where language understanding is genuinely needed: classifying incoming requests, extracting fields from documents and invoices, summarising long threads, and drafting responses in your own tone.',
        bullets: [
          {
            title: 'Workflow automation',
            text: 'Multi-step processes triggered by a form, message, file or schedule, with clear logging so you can see what ran.',
          },
          {
            title: 'AI assistants and chatbots',
            text: 'Assistants grounded in your own documents, pricing and policies, with fallbacks to a human when confidence is low.',
          },
          {
            title: 'Document and data processing',
            text: 'Extract structured data from PDFs, invoices, forms and images, then push it into your existing system of record.',
          },
          {
            title: 'Reporting and summaries',
            text: 'Scheduled digests of sales, support or operations data, written in plain language instead of raw dashboards.',
          },
        ],
      },
      {
        heading: 'How we work',
        body: 'We begin with a short discovery call to list the candidate workflows and the time each one consumes today. We then propose the smallest useful first automation, build it, run it alongside the manual process until the output is trusted, and only then switch over. You keep access to every account and tool we use, so nothing is locked to us.',
      },
    ],
    deliverables: [
      'Workflow map of the current process',
      'Automations built in your own accounts and tools',
      'AI assistant or chatbot grounded in your documents',
      'Integrations between forms, email, sheets, CRM and messaging',
      'Handover documentation and a walkthrough session',
    ],
    faqs: [
      {
        q: 'Do we need our own AI subscriptions?',
        a: 'Usually yes. We build inside your accounts so the automations, data and billing stay with you. We will tell you exactly which subscriptions a build needs before starting.',
      },
      {
        q: 'Can AI automation work with WhatsApp, Google Sheets or our existing CRM?',
        a: 'Those are the most common integrations we are asked for. If a tool has an API or a supported automation connector, it can normally be included.',
      },
      {
        q: 'How do you avoid AI making mistakes on important work?',
        a: 'We keep a human review step wherever an error would be costly, and let AI draft rather than decide. Every automated run is logged so mistakes can be traced and corrected.',
      },
    ],
  },
  {
    slug: '/services/web-development',
    navLabel: 'Web & Product Development',
    h1: 'Web and Product Development',
    metaTitle: 'Web Development & MVP Build for Startups | Nexcubic',
    metaDescription:
      'Custom websites, web applications and startup MVPs built by Nexcubic in Bangalore — fast, responsive, SEO-ready builds with clean handover.',
    summary:
      'We design and build websites, web applications and first product versions that are fast, responsive, crawlable and straightforward to maintain.',
    bestFor: [
      'Businesses whose current site is slow, dated or not mobile-first',
      'Founders who need a first product version in front of real users',
      'Teams that need an internal tool or dashboard rather than a brochure site',
    ],
    sections: [
      {
        heading: 'Web development for startups and small businesses',
        body: 'A business website has two jobs: explain clearly what you do, and make the next step obvious. We build marketing sites that load quickly on mobile networks, use real semantic HTML so search engines and AI assistants can read them, and let you update content without calling a developer. Every build ships with correct titles, descriptions, canonical URLs, structured data and a sitemap rather than those being bolted on later.',
      },
      {
        heading: 'MVP and product development for startups',
        body: 'For a first product version the goal is learning, not completeness. We help cut the scope to the single workflow that proves the idea, build that properly with authentication, data and payments where needed, and instrument it so you can see what users actually do. From there we iterate in short cycles instead of disappearing for months.',
        bullets: [
          {
            title: 'Scoping',
            text: 'We separate the must-have flow from everything that can wait, and write it down before any code is committed.',
          },
          {
            title: 'Build',
            text: 'Modern React front ends with a managed backend for database, authentication, file storage and server functions.',
          },
          {
            title: 'Launch',
            text: 'Deployment, custom domain, analytics and error tracking so problems surface before your users report them.',
          },
          {
            title: 'Iterate',
            text: 'Short cycles driven by real usage, with a clear backlog you can reprioritise.',
          },
        ],
      },
      {
        heading: 'E-commerce and online stores',
        body: 'For product businesses we build stores with catalogue, cart, checkout and payment integration, plus the operational pieces that get forgotten — order notifications, inventory updates and a place for the team to work day to day. Two of the student brands we supported, WaveTea and Trembly, launched their online presence this way.',
      },
      {
        heading: 'Internal tools and dashboards',
        body: 'When a business runs on a fragile spreadsheet, a small internal tool usually pays for itself. We build admin panels, dashboards and data-entry tools with proper access control, so the right people see the right records and history is not lost to an accidental overwrite.',
      },
    ],
    deliverables: [
      'Responsive, mobile-first website or web application',
      'Technical SEO foundation: metadata, structured data, sitemap, robots.txt',
      'Content structure you can update without a developer',
      'Deployment, custom domain and analytics setup',
      'Source code and accounts handed over to you',
    ],
    faqs: [
      {
        q: 'How long does a website or MVP take?',
        a: 'A focused marketing site is usually a matter of weeks; an MVP depends entirely on scope. We give a stage-by-stage timeline after scoping rather than a single number up front.',
      },
      {
        q: 'Do we own the code?',
        a: 'Yes. Code, hosting and third-party accounts are yours, and we hand over access at the end of a project.',
      },
      {
        q: 'Can you work on an existing site instead of rebuilding it?',
        a: 'Often, yes. We review the current stack first and tell you honestly whether improving it or rebuilding will cost less over the next year.',
      },
    ],
  },
  {
    slug: '/services/mobile-app-development',
    navLabel: 'Mobile App Development',
    h1: 'Mobile App Development',
    metaTitle: 'Mobile App Development Company in Bangalore | Nexcubic',
    metaDescription:
      'Nexcubic builds cross-platform mobile apps for Android and iOS — from a first release to store submission, with backend, notifications and analytics included.',
    summary:
      'We build cross-platform mobile apps for Android and iOS, from first release through store submission and ongoing updates.',
    bestFor: [
      'Businesses whose customers expect an app, not just a website',
      'Founders validating a mobile-first product idea',
      'Teams needing a field or staff app that works on patchy connectivity',
    ],
    sections: [
      {
        heading: 'Cross-platform by default',
        body: 'For most projects a single cross-platform codebase covers Android and iOS at a fraction of the cost of two native apps, with the same look and feel on both. We recommend fully native only when a project genuinely depends on platform-specific capability, and we will say so during scoping rather than after.',
      },
      {
        heading: 'What a mobile build includes',
        body: 'An app is more than screens. We plan the backend, accounts, notifications and release process as part of the same project so the first version can actually ship.',
        bullets: [
          { title: 'Accounts and authentication', text: 'Email, phone or social sign-in with secure session handling.' },
          { title: 'Backend and data sync', text: 'A managed database and APIs, with sensible behaviour when the network drops.' },
          { title: 'Push notifications', text: 'Transactional and campaign notifications wired to your own console.' },
          { title: 'Store submission', text: 'Assets, listing copy, privacy details and the review process for Play Store and App Store.' },
        ],
      },
      {
        heading: 'After launch',
        body: 'Mobile platforms change every year, so an app needs maintenance to keep working. We offer ongoing update cycles covering platform and dependency upgrades, crash monitoring, and small feature releases driven by what users do in the app.',
      },
    ],
    deliverables: [
      'Cross-platform app for Android and iOS',
      'Backend, database and authentication',
      'Push notifications and analytics',
      'Play Store and App Store submission support',
      'Source code, signing keys and console access handed over',
    ],
    faqs: [
      {
        q: 'Can you publish the app under our own developer accounts?',
        a: 'Yes, and we recommend it. Owning the Play Console and App Store Connect accounts keeps your listing, reviews and users under your control.',
      },
      {
        q: 'Do we need a website as well as an app?',
        a: 'Usually yes. App stores and AI assistants both look for a website to verify who you are, and a landing page remains the cheapest way to explain the product.',
      },
    ],
  },
  {
    slug: '/services/digital-marketing',
    navLabel: 'Digital Marketing',
    h1: 'Digital Marketing and Growth Execution',
    metaTitle: 'Digital Marketing Services in Bangalore | Nexcubic',
    metaDescription:
      'SEO, content, social media and paid ads executed by Nexcubic — set up with tracking first so you can see which channel actually produces enquiries.',
    summary:
      'We run search, content, social and paid channels with tracking in place first, so spend is judged on enquiries rather than impressions.',
    bestFor: [
      'Businesses getting traffic but no enquiries',
      'Founders launching a new product or store',
      'Teams spending on ads without knowing what converts',
    ],
    sections: [
      {
        heading: 'Search and AI visibility (SEO and GEO)',
        body: 'Search is no longer only a list of blue links. Buyers ask AI assistants questions and act on the summarised answer, which means a site now needs to be machine-readable as well as human-readable: real HTML content, a clean heading hierarchy, structured data, accurate canonical URLs and factual pages that answer specific questions. We fix those technical foundations first, then build content around the questions your buyers actually ask.',
      },
      {
        heading: 'Content that answers buyer questions',
        body: 'We plan content from real intent — comparison, cost, process and suitability questions — rather than keyword volume alone. Each page is written to answer one question completely, in plain language, so it is useful to a reader and quotable by an AI assistant.',
      },
      {
        heading: 'Social media and brand presence',
        body: 'We plan and produce social content for the platforms where your audience already is, keeping a consistent visual identity across posts, profiles and website. For local businesses this includes profile setup and the basic hygiene that makes a brand look established.',
      },
      {
        heading: 'Paid advertising',
        body: 'Paid channels work when the tracking and the landing page are right. We set up conversion tracking, build focused landing pages, start with small controlled budgets, and scale only the campaigns that produce qualified enquiries. You keep ownership of the ad accounts and the data in them.',
        bullets: [
          { title: 'Tracking first', text: 'Analytics and conversion events verified before budget is committed.' },
          { title: 'Landing pages', text: 'Pages built for one offer and one action instead of pointing ads at a homepage.' },
          { title: 'Reporting', text: 'Plain-language reporting on cost per enquiry, not vanity metrics.' },
        ],
      },
    ],
    deliverables: [
      'Technical SEO audit and fixes',
      'Content plan mapped to buyer questions',
      'Analytics and conversion tracking setup',
      'Social content calendar and production',
      'Paid campaign setup, landing pages and reporting',
    ],
    faqs: [
      {
        q: 'How long does SEO take to show results?',
        a: 'Technical fixes can affect how you are crawled and cited within weeks. Ranking and demand growth from content is a months-long effort, and any agency promising a fixed date is guessing.',
      },
      {
        q: 'Do you guarantee first-page rankings?',
        a: 'No. Nobody can guarantee search rankings. We commit to the work — technical quality, content and tracking — and report the results honestly.',
      },
    ],
  },
  {
    slug: '/services/branding',
    navLabel: 'Branding & UI/UX',
    h1: 'Branding and UI/UX Design',
    metaTitle: 'Branding, Logo and UI/UX Design Services | Nexcubic',
    metaDescription:
      'Brand identity, logo design, packaging and UI/UX design from Nexcubic — a consistent visual system across product, website and social.',
    summary:
      'We build brand identities and interface design systems that stay consistent across product, website, packaging and social.',
    bestFor: [
      'New brands that need an identity before launch',
      'Businesses whose materials look different in every place',
      'Products where users get lost in the interface',
    ],
    sections: [
      {
        heading: 'Brand identity',
        body: 'Identity work starts with positioning: who the brand is for and what it should feel like. From there we design the logo and its variants, choose type and colour, and document usage so the brand survives contact with a dozen different files and vendors.',
        bullets: [
          { title: 'Logo system', text: 'Primary, secondary and icon marks in light and dark variants, exported for print and screen.' },
          { title: 'Type and colour', text: 'A defined palette and type scale with accessible contrast.' },
          { title: 'Guidelines', text: 'A short, practical usage guide rather than a document nobody opens.' },
        ],
      },
      {
        heading: 'UI/UX design',
        body: 'For products we design the flow before the pixels: what the user is trying to do, the shortest path there, and what happens when something goes wrong. Designs are delivered as a reusable component system so the build stays consistent and future screens do not drift.',
      },
      {
        heading: 'Launch and packaging collateral',
        body: 'Brands need more than a logo on day one. We produce the practical collateral a launch needs — social profile assets, post templates, product and packaging visuals, and website imagery — all drawn from the same identity.',
      },
    ],
    deliverables: [
      'Logo system with light and dark variants',
      'Colour palette, type scale and usage guidelines',
      'UI component system and key screen designs',
      'Social and packaging templates',
      'Editable source files handed over',
    ],
    faqs: [
      {
        q: 'Can you redesign an existing brand without losing recognition?',
        a: 'Yes. Where a brand already has recognition we evolve the existing marks and palette rather than replacing them, and keep a transition plan for existing materials.',
      },
      {
        q: 'Do we get editable design files?',
        a: 'Yes. Source files and exported assets are handed over so you are not dependent on us for small changes.',
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/** Real project examples only — described without unverified numbers. */
export const caseStudies = [
  {
    slug: 'wavetea',
    name: 'WaveTea',
    category: 'Student brand — beverages',
    site: 'https://wavetea.shop',
    challenge:
      'A college student wanted to turn an idea for tropical smoothies and iced herbal teas into a real, sellable brand, with no budget for an agency.',
    work: 'Nexcubic supported the build free of charge through its student startup program: positioning and naming direction, brand identity, product and packaging visuals, and an online store at wavetea.shop.',
    outcome:
      'The brand launched publicly with a working store and a consistent identity across packaging and social, run by the student founder.',
  },
  {
    slug: 'trembly',
    name: 'Trembly',
    category: 'Student brand — fashion',
    site: 'https://trembly.shop',
    challenge:
      'A student founder had a clear fashion concept — bold colours, distinctive cuts and textures — but no brand system or route to selling online.',
    work: 'Through the same free student program we developed the brand identity and visual direction, produced launch collateral, and built the online store at trembly.shop.',
    outcome:
      'Trembly moved from a dorm-room concept to a launch-ready fashion brand with its own storefront and social presence.',
  },
  {
    slug: 'community-farming',
    name: 'Self-sufficient community farming initiative',
    category: 'In-house social initiative — in progress',
    site: '',
    challenge:
      'Orphanages and old age homes depend heavily on donations for everyday food and running costs.',
    work: 'Nexcubic is developing an in-house initiative to set up mushroom farming and hydroponics units at partner homes, covering the growing setup and the training needed to run it.',
    outcome:
      'The initiative is in progress and not yet launched. We will publish results here once units are operating, rather than claiming outcomes in advance.',
  },
];

export const homeFaqs: Faq[] = [
  {
    q: 'What does Nexcubic do?',
    a: 'Nexcubic is a Bangalore-based technology and digital execution company. We build websites, web applications and mobile apps, implement AI automation, run digital marketing and branding, and support founders and colleges through startup and student programs.',
  },
  {
    q: 'Is Nexcubic only a web development agency?',
    a: 'No. Web and app development is one part of the work. The other parts are AI automation for business processes, digital marketing and branding, and startup and college programs including student training and hiring support.',
  },
  {
    q: 'Who does Nexcubic work with?',
    a: 'Three groups: businesses that need AI, technology and growth execution; founders who need product, launch and go-to-market support; and colleges running incubation or student startup programs.',
  },
  {
    q: 'Where is Nexcubic based?',
    a: 'Nexcubic is based in Bangalore, Karnataka, India, and works with clients remotely as well.',
  },
  {
    q: 'Is the student startup support really free?',
    a: 'Yes. The student startup program is run free of charge for college students. WaveTea and Trembly were both supported under it.',
  },
  {
    q: 'How do we start a project with Nexcubic?',
    a: `Email ${company.email} or call ${company.phone}, or use the form on the contact page. The first step is a short call to understand the requirement and scope it.`,
  },
];

export interface RouteMeta {
  path: string;
  label: string;
  description: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
  inNav?: boolean;
}

export const routes: RouteMeta[] = [
  { path: '/', label: 'Home', description: 'Company overview and what Nexcubic does', changefreq: 'weekly', priority: '1.0', inNav: true },
  { path: '/services', label: 'Services', description: 'All services with links to detail pages', changefreq: 'monthly', priority: '0.9', inNav: true },
  { path: '/services/ai-automation', label: 'AI & Automation', description: 'AI automation for startups, enterprises and business processes', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/web-development', label: 'Web & Product Development', description: 'Websites, web apps and startup MVP development', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/mobile-app-development', label: 'Mobile App Development', description: 'Cross-platform Android and iOS app development', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/digital-marketing', label: 'Digital Marketing', description: 'SEO, AI visibility, content, social and paid advertising', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/branding', label: 'Branding & UI/UX', description: 'Brand identity, logo systems and UI/UX design', changefreq: 'monthly', priority: '0.8' },
  { path: '/startup-support', label: 'Startup Support', description: 'Product, launch, GTM and business support for founders', changefreq: 'monthly', priority: '0.9', inNav: true },
  { path: '/college-programs', label: 'College Programs', description: 'Incubation, student startup programs and industry connections for colleges', changefreq: 'monthly', priority: '0.9', inNav: true },
  { path: '/case-studies', label: 'Case Studies', description: 'Real project examples supported by Nexcubic', changefreq: 'monthly', priority: '0.7', inNav: true },
  { path: '/students', label: 'Students', description: 'Free student startup program details and success stories', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', label: 'Blog', description: 'Articles on AI, startups and technology', changefreq: 'weekly', priority: '0.7', inNav: true },
  { path: '/about', label: 'About', description: 'Company background, founder information and how we work', changefreq: 'monthly', priority: '0.8', inNav: true },
  { path: '/contact', label: 'Contact', description: 'Contact form, email and phone', changefreq: 'monthly', priority: '0.8' },
];
