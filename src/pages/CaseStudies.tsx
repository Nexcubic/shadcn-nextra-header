import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { SITE_URL, caseStudies, company } from '@/data/site';

const CaseStudies = () => (
  <Layout>
    <Seo
      title="Case Studies | Real Projects Supported by Nexcubic"
      description="Real projects Nexcubic has worked on: the WaveTea and Trembly student brands built through our free startup program, and our in-house community farming initiative."
      path="/case-studies"
      breadcrumbs={[{ name: 'Case Studies', path: '/case-studies' }]}
      schemas={[
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Nexcubic case studies',
          itemListElement: caseStudies.map((study, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: study.name,
            url: study.site || `${SITE_URL}/case-studies`,
          })),
        },
      ]}
    />

    <Breadcrumbs items={[{ name: 'Case Studies', path: '/case-studies' }]} />

    <section className="pb-12 pt-8">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Case Studies: Projects Nexcubic Has Supported
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Only real work is listed here, described without invented numbers. Where an initiative is still in progress,
          we say so instead of claiming results in advance.
        </p>
      </div>
    </section>

    {caseStudies.map((study) => (
      <section key={study.slug} className="border-t py-14" aria-labelledby={study.slug}>
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-sm font-medium text-accent">{study.category}</p>
          <h2 id={study.slug} className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
            {study.name}
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Challenge: </span>
              {study.challenge}
            </p>
            <p>
              <span className="font-semibold text-foreground">What we did: </span>
              {study.work}
            </p>
            <p>
              <span className="font-semibold text-foreground">Where it stands: </span>
              {study.outcome}
            </p>
          </div>
          {study.site && (
            <a
              href={study.site}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-medium text-accent hover:underline"
            >
              Visit {study.name}
            </a>
          )}
        </div>
      </section>
    ))}

    <section className="border-t bg-muted/30 py-14" aria-labelledby="cs-next">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 id="cs-next" className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Want work like this for your idea?
        </h2>
        <p className="mt-4 text-muted-foreground">
          {company.name} works with founders, businesses and colleges. Students can apply to the free startup program.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Start a conversation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/students">Free student program</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/startup-support">Startup support</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
