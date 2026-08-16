import { Link, useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection, faqSchema } from '@/components/FaqSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { SITE_URL, company, serviceBySlug, services } from '@/data/site';
import NotFound from './NotFound';

export function ServiceDetail() {
  const { pathname } = useLocation();
  const service = serviceBySlug(pathname.replace(/\/$/, '') || '/');

  if (!service) return <NotFound />;

  const related = services.filter((s) => s.slug !== service.slug);

  return (
    <Layout>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={service.slug}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: service.navLabel, path: service.slug },
        ]}
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.h1,
            serviceType: service.navLabel,
            description: service.summary,
            url: `${SITE_URL}${service.slug}`,
            provider: {
              '@type': 'Organization',
              name: company.name,
              url: SITE_URL,
            },
            areaServed: [
              { '@type': 'Country', name: 'India' },
              { '@type': 'City', name: company.city },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${service.navLabel} deliverables`,
              itemListElement: service.deliverables.map((d) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: d },
              })),
            },
          },
          faqSchema(service.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', path: '/services' },
          { name: service.navLabel, path: service.slug },
        ]}
      />

      <section className="pb-12 pt-8">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-medium text-accent">{service.navLabel}</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{service.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Discuss your requirement</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">See project examples</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 rounded-xl border bg-card p-6 shadow-soft">
            <h2 className="font-display text-xl font-semibold text-foreground">Who this is for</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {service.bestFor.map((item) => (
                <li key={item} className="flex gap-2 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {service.sections.map((section) => (
        <section key={section.heading} className="border-t py-14">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{section.heading}</h2>
              <p className="mt-4 text-muted-foreground">{section.body}</p>
            </div>
            {section.bullets && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {section.bullets.map((bullet) => (
                  <article key={bullet.title} className="rounded-xl border bg-card p-5 shadow-soft">
                    <h3 className="font-display font-semibold text-foreground">{bullet.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{bullet.text}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="border-t bg-muted/30 py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">What you receive</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-2 rounded-lg border bg-card p-4 text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection
        faqs={service.faqs}
        heading={`${service.navLabel}: Frequently Asked Questions`}
        headingId="service-faq"
      />

      <section className="border-t bg-muted/30 py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Other services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={item.slug}
                className="group rounded-xl border bg-card p-5 shadow-soft transition-all hover:shadow-elevated"
              >
                <h3 className="font-display font-semibold text-foreground">{item.navLabel}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ServiceDetail;
