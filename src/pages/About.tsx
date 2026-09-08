import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import sanjayProfile from '@/assets/sanjay-profile.jpg';
import { SITE_URL, company, services } from '@/data/site';

const About = () => (
  <Layout>
    <Seo
      title="About Nexcubic | Founded by Sanjay S in Bengaluru"
      description="Nexcubic is a Bengaluru-based digital solutions company founded by Sanjay S, an AI/ML specialist and Assistant Professor in Computer Science. Meet the founder and how we work."
      path="/about"
      breadcrumbs={[{ name: 'About', path: '/about' }]}
      schemas={[
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': `${SITE_URL}/about#sanjay-s`,
          name: company.founder.name,
          jobTitle: company.founder.jobTitle,
          url: company.founder.linkedin,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bengaluru',
            addressRegion: company.region,
            addressCountry: 'IN',
          },
          worksFor: {
            '@type': 'Organization',
            name: company.name,
            url: SITE_URL,
            logo: `${SITE_URL}/favicon.png`,
          },
          sameAs: [company.founder.linkedin],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Nexcubic',
          url: `${SITE_URL}/about`,
          mainEntity: { '@id': `${SITE_URL}/about#sanjay-s` },
        },
      ]}
    />

    <Breadcrumbs items={[{ name: 'About', path: '/about' }]} />

    <section className="pb-12 pt-8">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          About Nexcubic
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Nexcubic was founded by Sanjay S, an AI/ML specialist, Assistant Professor in Computer Science, and
          Bengaluru-based technology entrepreneur. Nexcubic builds AI-driven digital solutions for startups and
          enterprises — including AI agents, web and app development, UI/UX design, branding, and digital marketing.
          Sanjay holds an MCA specialized in Artificial Intelligence &amp; Machine Learning, and is actively engaged in
          Bengaluru's developer and AI community ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">Back to the Nexcubic homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services">Explore our services</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="border-t py-14" aria-labelledby="founder">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 id="founder" className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Founder
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-[200px_1fr] sm:items-start">
          <img
            src={sanjayProfile}
            alt="Sanjay S, founder of Nexcubic, AI/ML specialist and Assistant Professor in Computer Science based in Bengaluru"
            className="w-full max-w-[200px] rounded-xl border object-cover shadow-soft"
            loading="lazy"
          />
          <dl className="space-y-3 text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Name</dt>
              <dd>{company.founder.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Role</dt>
              <dd>Founder</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Location</dt>
              <dd>Bengaluru, Karnataka, India</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">LinkedIn</dt>
              <dd>
                <a
                  href={company.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" /> linkedin.com/in/sanjay-s-258781240
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <p className="mt-8 text-muted-foreground">{company.founder.bio}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href={company.founder.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
          </a>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" /> Nexcubic on LinkedIn
          </a>
        </div>
      </div>
    </section>

    <section className="border-t bg-muted/30 py-14" aria-labelledby="what-we-build">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 id="what-we-build" className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          What we build
        </h2>
        <ul className="mt-6 space-y-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                to={service.slug}
                className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
              >
                {service.navLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="text-muted-foreground">{service.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-t py-14" aria-labelledby="reach-us">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 id="reach-us" className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Reach us
        </h2>
        <ul className="mt-6 space-y-3 text-muted-foreground">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            <a href={`mailto:${company.email}`} className="hover:text-accent">
              {company.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            <a href={`tel:${company.phoneE164}`} className="hover:text-accent">
              {company.phone}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Bengaluru, Karnataka, India</span>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default About;
