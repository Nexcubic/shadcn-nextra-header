import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection, faqSchema } from '@/components/FaqSection';
import { Button } from '@/components/ui/button';
import { Check, Linkedin } from 'lucide-react';
import { SITE_URL, company } from '@/data/site';

const stages = [
  {
    heading: 'Idea and validation',
    body: 'Before anything is built we pressure-test the idea: who the customer is, what they do today instead, and what evidence exists that they would pay. If the honest answer is that the idea is not ready, we say so — that is cheaper than a wasted build.',
    items: ['Problem and customer definition', 'Competitor and alternative review', 'Scope cut to one testable workflow'],
  },
  {
    heading: 'Product and MVP build',
    body: 'We build the first version of the product around the single flow that proves the idea, with authentication, data and payments only where they are actually needed. Everything ships in your own accounts so you own the product from day one.',
    items: ['MVP scoping document', 'Web or mobile build', 'Analytics and error tracking'],
  },
  {
    heading: 'Brand and launch',
    body: 'A launch needs a name people can repeat, a visual identity that holds together, and a website or store that converts. We produce the identity, the launch collateral and the site, then take the product live.',
    items: ['Brand identity and logo system', 'Launch website or online store', 'Launch assets for social and ads'],
  },
  {
    heading: 'Go-to-market and growth',
    body: 'After launch the work shifts to distribution: SEO and AI visibility, content, social and paid experiments run in small budgets until something repeats. We report what worked and what did not.',
    items: ['SEO and AI search visibility', 'Content and social execution', 'Paid experiments with clear reporting'],
  },
  {
    heading: 'Hiring and team support',
    body: 'When a founder needs hands, we introduce students and developers from the Nexcubic community — people we have trained or built with, so the referral comes with context rather than a resume alone.',
    items: ['Intern and fresher sourcing', 'Developer and designer referrals', 'Practical skill screening'],
  },
];

const faqs = [
  {
    q: 'Who is Nexcubic startup support for?',
    a: 'Early-stage founders who need product, brand, launch and go-to-market execution without hiring a full team. College student founders are supported free of charge through the student startup program.',
  },
  {
    q: 'Is startup support free?',
    a: 'For college students, yes — the student startup program is free. For funded or revenue-generating startups it is paid project work, scoped and quoted before we begin.',
  },
  {
    q: 'Can Nexcubic help us hire?',
    a: 'Yes. We refer students and developers from the Nexcubic community, including people trained in our own programs, and screen them on practical work rather than only on resumes.',
  },
  {
    q: 'How do we start?',
    a: `Contact Nexcubic through the contact page, email ${company.email}, or message the Nexcubic page on LinkedIn. The first step is a short call to scope the requirement.`,
  },
];

const StartupSupport = () => (
  <Layout>
    <Seo
      title="Startup Support | Product, Launch, GTM & Hiring | Nexcubic"
      description="Nexcubic supports founders end to end: idea validation, MVP build, branding, launch, go-to-market execution and hiring from our student and developer community. Free for college students."
      path="/startup-support"
      breadcrumbs={[{ name: 'Startup Support', path: '/startup-support' }]}
      schemas={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Startup support',
          serviceType: 'Startup product, launch, go-to-market and hiring support',
          description:
            'End-to-end startup support from Nexcubic: idea validation, MVP build, branding, launch, go-to-market execution and hiring support.',
          url: `${SITE_URL}/startup-support`,
          provider: { '@type': 'Organization', name: company.name, url: SITE_URL },
          areaServed: [{ '@type': 'Country', name: 'India' }],
        },
        faqSchema(faqs),
      ]}
    />

    <Breadcrumbs items={[{ name: 'Startup Support', path: '/startup-support' }]} />

    <section className="pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-medium text-accent">For founders</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Startup Support: Build, Launch, Grow and Hire
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Nexcubic works with early-stage founders as a single execution partner — product, brand, launch,
            go-to-market and hiring — so you are not stitching together five vendors before you have customers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Talk to us about your startup</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">See startups we supported</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {stages.map((stage) => (
      <section key={stage.heading} className="border-t py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{stage.heading}</h2>
            <p className="mt-4 text-muted-foreground">{stage.body}</p>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {stage.items.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-lg border bg-card p-4 text-sm text-muted-foreground shadow-soft">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ))}

    <section className="border-t bg-muted/30 py-16" aria-labelledby="founder-community">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <h2 id="founder-community" className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Join the founder and developer community
          </h2>
          <p className="mt-4 text-muted-foreground">
            The Nexcubic community brings together first-time founders, student entrepreneurs and developers. It is
            free to join and runs on direct feedback rather than paid cohorts. To join, message the Nexcubic page on
            LinkedIn and say whether you are a founder, a developer or a student.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" /> Message Nexcubic on LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/college-programs">College and student programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <FaqSection faqs={faqs} heading="Startup support FAQs" headingId="startup-faq" />
  </Layout>
);

export default StartupSupport;
