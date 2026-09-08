import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection, faqSchema } from '@/components/FaqSection';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { SITE_URL, company, type Faq } from '@/data/site';

const blocks = [
  {
    heading: 'Student startup programs',
    body: 'We run a free startup support program for college students: idea review, brand identity, a working website or store, and mentoring through launch. WaveTea and Trembly were both built this way by student founders.',
    items: ['Idea and market review', 'Brand identity and store build', 'Mentoring through launch'],
  },
  {
    heading: 'Hands-on AI and web development training',
    body: 'Project-based sessions in AI tools, automation, and web and app development. Students finish with something they have actually built and can show, rather than a certificate alone.',
    items: ['AI and automation workshops', 'Web and app development tracks', 'Project reviews and feedback'],
  },
  {
    heading: 'Incubation and industry connection',
    body: 'For departments and incubation cells we act as an industry partner: mentoring student teams, reviewing projects, and connecting promising students and developers with founders who need them.',
    items: ['Mentoring for student teams', 'Project and portfolio reviews', 'Hiring and internship referrals'],
  },
];

const faqs: Faq[] = [
  {
    q: 'Is the student startup program really free?',
    a: 'Yes. Nexcubic runs the student startup support program free of charge for college students. WaveTea and Trembly were both supported under it.',
  },
  {
    q: 'How does a college start a program with Nexcubic?',
    a: `Email ${company.email} or call ${company.phone}. We usually begin with a call to understand the department, the students involved and what outcome you want from the program.`,
  },
  {
    q: 'Do you deliver sessions on campus or online?',
    a: 'Both. We are based in Bangalore and deliver on campus locally, and run sessions and mentoring remotely for colleges elsewhere.',
  },
];

const CollegePrograms = () => (
  <Layout>
    <Seo
      title="College Programs | Student Startups, AI Training & Incubation | Nexcubic"
      description="Nexcubic partners with colleges on student startup programs, hands-on AI and web development training, project mentoring, and hiring connections for students and departments."
      path="/college-programs"
      breadcrumbs={[{ name: 'College Programs', path: '/college-programs' }]}
      schemas={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'College programs',
          serviceType: 'Student startup programs, AI and web development training, incubation support',
          description:
            'Nexcubic works with colleges on student startup programs, hands-on AI and web development training, project mentoring and hiring connections.',
          url: `${SITE_URL}/college-programs`,
          provider: { '@type': 'Organization', name: company.name, url: SITE_URL },
          areaServed: [{ '@type': 'Country', name: 'India' }],
        },
        faqSchema(faqs),
      ]}
    />

    <Breadcrumbs items={[{ name: 'College Programs', path: '/college-programs' }]} />

    <section className="pb-12 pt-8">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-medium text-accent">For colleges</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            College Programs: Student Startups, AI Training and Incubation
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Nexcubic works with colleges, departments and incubation cells to turn classroom projects into real
            products — through free student startup support, practical AI and development training, and mentoring from
            people doing the work commercially.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Talk to us about a program</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">See student brands we built</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {blocks.map((block) => (
      <section key={block.heading} className="border-t py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{block.heading}</h2>
            <p className="mt-4 text-muted-foreground">{block.body}</p>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {block.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border bg-card p-4 text-sm text-muted-foreground shadow-soft"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ))}

    <FaqSection faqs={faqs} heading="College program FAQs" headingId="college-faqs" />
  </Layout>
);

export default CollegePrograms;
