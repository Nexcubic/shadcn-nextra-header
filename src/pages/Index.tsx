import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { FaqSection, faqSchema } from '@/components/FaqSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Code, Smartphone, Megaphone, Palette, GraduationCap, Users, Linkedin, Check } from 'lucide-react';
import { SITE_URL, audiences, caseStudies, company, homeFaqs, services } from '@/data/site';

const serviceIcons: Record<string, typeof Bot> = {
  '/services/ai-automation': Bot,
  '/services/web-development': Code,
  '/services/mobile-app-development': Smartphone,
  '/services/digital-marketing': Megaphone,
  '/services/branding': Palette,
};

const Index = () => (
  <Layout>
    <Seo
      title="Nexcubic | AI, Technology & Startup Growth Partner in Bangalore"
      description={company.shortDescription}
      path="/"
      schemas={[
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: company.name,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          description: company.shortDescription,
          email: company.email,
          telephone: company.phoneE164,
          slogan: company.legalTagline,
          address: {
            '@type': 'PostalAddress',
            addressLocality: company.city,
            addressRegion: company.region,
            addressCountry: 'IN',
          },
          founder: {
            '@type': 'Person',
            name: company.founder.name,
            jobTitle: company.founder.role,
            sameAs: [company.founder.linkedin, company.founder.instagram],
          },
          sameAs: [company.instagram, company.linkedin],
          areaServed: [{ '@type': 'Country', name: 'India' }],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: company.name,
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
        faqSchema(homeFaqs),
      ]}
    />

    {/* Hero */}
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 gradient-hero opacity-5 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-medium text-accent">{company.legalTagline}</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Nexcubic builds AI, technology and growth for businesses, founders and colleges
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{company.positioning}</p>
          <p className="mt-4 text-muted-foreground">
            We are a {company.city}-based team working across AI automation, web and app development, digital
            marketing and branding — plus edtech programs, hiring support and a free student startup program that has
            already launched real brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Explore services</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/startup-support">Startup support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* What we do */}
    <section className="py-20" aria-labelledby="what-we-do">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 id="what-we-do" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          What Nexcubic does
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Five core service lines, delivered by a small team that stays directly involved from scoping to handover.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] ?? Code;
            return (
              <article key={service.slug} className="group flex flex-col rounded-xl border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{service.navLabel}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.summary}</p>
                <Link
                  to={service.slug}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  {service.navLabel} details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
          <article className="flex flex-col rounded-xl border bg-card p-6 shadow-soft">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">Edtech & hiring support</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              Hands-on AI and web development training for students, plus hiring support that connects trained
              students and developers with founders who need them.
            </p>
            <Link to="/college-programs" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
              College programs <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>

    {/* Who we work with */}
    <section className="border-t bg-muted/30 py-20" aria-labelledby="who-we-work-with">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 id="who-we-work-with" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Who we work with
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.id} className="flex flex-col rounded-xl border bg-card p-6 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-foreground">{audience.label}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{audience.headline}</p>
              <p className="mt-3 flex-1 text-muted-foreground">{audience.description}</p>
              <Link to={audience.href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Community */}
    <section className="border-t py-20" aria-labelledby="community">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 id="community" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              A community for students, developers and founders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nexcubic runs an open community for college students, early developers and first-time founders. It is
              free to join, and everything happens in public: idea reviews, build feedback, hiring referrals and
              hands-on AI sessions.
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                'Students: free startup support, AI and web development training, real project experience',
                'Developers: build practice, code and product feedback, referrals to paid work',
                'Founders: idea validation, product scoping, launch and go-to-market help',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" /> Join via the Nexcubic LinkedIn page
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/students">Student program</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              To join, message the Nexcubic page on LinkedIn — mention whether you are a student, a developer or a
              founder.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-8 shadow-soft">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">How the community works</h3>
            <ol className="mt-4 space-y-3 text-muted-foreground">
              <li>1. Message the Nexcubic LinkedIn page with a one-line introduction.</li>
              <li>2. We route you to the right track: student program, developer track or founder support.</li>
              <li>3. You get a short call, then ongoing feedback while you build.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    {/* Work examples */}
    <section className="border-t bg-muted/30 py-20" aria-labelledby="work">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 id="work" className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Real projects we have supported
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.slug} className="flex flex-col rounded-xl border bg-card p-6 shadow-soft">
              <p className="text-sm font-medium text-accent">{study.category}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{study.name}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{study.work}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/case-studies">Read the full case studies</Link>
          </Button>
        </div>
      </div>
    </section>

    <FaqSection faqs={homeFaqs} heading="Nexcubic FAQs" />
  </Layout>
);

export default Index;
