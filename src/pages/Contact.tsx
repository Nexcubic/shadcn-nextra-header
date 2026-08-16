import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { SITE_URL, company } from '@/data/site';

const Contact = () => (
  <Layout>
    <Seo
      title="Contact Nexcubic | AI, Web, App & Growth Projects in Bangalore"
      description={`Contact Nexcubic in Bangalore. Email ${company.email} or call ${company.phone} to discuss AI automation, web and app development, marketing, or a student startup program.`}
      path="/contact"
      breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      schemas={[
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Nexcubic',
          url: `${SITE_URL}/contact`,
          mainEntity: {
            '@type': 'Organization',
            name: company.name,
            email: company.email,
            telephone: company.phoneE164,
            url: SITE_URL,
            address: {
              '@type': 'PostalAddress',
              addressLocality: company.city,
              addressRegion: company.region,
              addressCountry: 'IN',
            },
          },
        },
      ]}
    />

    <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

    <section className="pb-10 pt-8">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Nexcubic
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us what you are trying to build, automate or launch. The first step is a short call to understand
            the requirement and scope it honestly — including telling you when something is not worth building yet.
          </p>
        </div>
      </div>
    </section>

    <section id="contact" className="border-t bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Reach us directly</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                <a href={`tel:${company.phoneE164}`} className="hover:text-accent transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                <span>
                  {company.city}, {company.region}, {company.country}
                </span>
              </li>
            </ul>

            <h3 className="mt-10 font-display text-lg font-semibold text-foreground">Follow Nexcubic</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexcubic on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-accent transition-colors hover:bg-accent/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={company.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${company.founder.name} on LinkedIn`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-accent transition-colors hover:bg-accent/10"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 rounded-xl border bg-card p-5 text-sm text-muted-foreground shadow-soft">
              <h3 className="font-display font-semibold text-foreground">Are you a student or a college?</h3>
              <p className="mt-2">
                Student startup support is free. Mention your college and your idea in the message and it will be
                routed to the student program directly.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-soft lg:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We reply to enquiries from this form by email or phone.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
