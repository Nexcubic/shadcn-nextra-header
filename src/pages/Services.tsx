import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Code, Smartphone, Megaphone, Palette, GraduationCap, UserPlus, Check } from 'lucide-react';
import { SITE_URL, company, services } from '@/data/site';

const serviceIcons: Record<string, typeof Bot> = {
  '/services/ai-automation': Bot,
  '/services/web-development': Code,
  '/services/mobile-app-development': Smartphone,
  '/services/digital-marketing': Megaphone,
  '/services/branding': Palette,
};

const programs = [
  {
    icon: GraduationCap,
    title: 'Edtech and student training',
    text: 'Hands-on, project-based training in AI tools, automation, web development and product thinking. Delivered for colleges, departments and individual students, with a real build as the outcome rather than a certificate alone.',
    points: ['AI and automation workshops', 'Web and app development tracks', 'Project mentoring and reviews'],
    href: '/college-programs',
    cta: 'College programs',
  },
  {
    icon: UserPlus,
    title: 'Hiring and talent support',
    text: 'We connect founders and teams with students and developers from the Nexcubic community — people we have trained or worked alongside, so we can vouch for how they actually work.',
    points: ['Intern and fresher sourcing', 'Developer and designer referrals', 'Practical skill screening'],
    href: '/startup-support',
    cta: 'Startup support',
  },
];

const Services = () => (
  <Layout>
    <Seo
      title="Services | AI Automation, Web & App Development, Marketing | Nexcubic"
      description="Nexcubic services: AI automation, web and product development, mobile apps, digital marketing, branding and UI/UX, plus edtech training and hiring support for startups and colleges."
      path="/services"
      breadcrumbs={[{ name: 'Services', path: '/services' }]}
      schemas={[
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Nexcubic services',
          itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.navLabel,
            url: `${SITE_URL}${service.slug}`,
          })),
        },
      ]}
    />

    <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />

    <section className="pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Nexcubic Services: AI, Development, Marketing, Edtech and Hiring
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Nexcubic is a digital support company for startups, students and growing businesses. We build and market
            products, automate work with AI, train students, and help founders hire from our own community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Discuss your requirement</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">See project examples</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="border-t py-16" aria-labelledby="core-services">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 id="core-services" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Core services
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Each service has its own page with scope, deliverables and answers to the questions clients ask most.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] ?? Code;
            return (
              <article key={service.slug} className="group flex flex-col rounded-xl border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{service.navLabel}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{service.summary}</p>
                <ul className="mt-4 space-y-2">
                  {service.deliverables.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" className="mt-6 w-full justify-between">
                  <Link to={service.slug}>
                    {service.navLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="border-t bg-muted/30 py-16" aria-labelledby="programs">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 id="programs" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Edtech and hiring programs
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Alongside client work, Nexcubic runs training and talent programs for colleges, students and founders.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <article key={program.title} className="flex flex-col rounded-xl border bg-card p-6 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <program.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{program.title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{program.text}</p>
              <ul className="mt-4 space-y-2">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="mt-6 w-full justify-between">
                <Link to={program.href}>
                  {program.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t py-16" aria-labelledby="how-we-work">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 id="how-we-work" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          How engagements work
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { step: '1. Call', text: 'A short call to understand the requirement, the constraint and the deadline.' },
            { step: '2. Scope', text: 'A written scope with deliverables, timeline and what is deliberately excluded.' },
            { step: '3. Build', text: 'Delivery in stages, with something reviewable at the end of each stage.' },
            { step: '4. Handover', text: 'Accounts, code and documentation stay with you. Nothing is locked to us.' },
          ].map((item) => (
            <article key={item.step} className="rounded-xl border bg-card p-6 shadow-soft">
              <h3 className="font-display font-semibold text-foreground">{item.step}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">
          Ready to start? <Link to="/contact" className="text-accent hover:underline">Contact Nexcubic</Link> — or email{' '}
          <a href={`mailto:${company.email}`} className="text-accent hover:underline">{company.email}</a>.
        </p>
      </div>
    </section>
  </Layout>
);

export default Services;
