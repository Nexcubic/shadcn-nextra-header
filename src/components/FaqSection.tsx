import type { Faq } from '@/data/site';

interface FaqSectionProps {
  faqs: Faq[];
  heading?: string;
  intro?: string;
  headingId?: string;
}

export function FaqSection({
  faqs,
  heading = 'Frequently Asked Questions',
  intro,
  headingId = 'faq',
}: FaqSectionProps) {
  return (
    <section className="border-t py-16 lg:py-20" aria-labelledby={headingId}>
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 id={headingId} className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          {heading}
        </h2>
        {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
        <dl className="mt-8 divide-y">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-5">
              <dt className="font-display text-lg font-semibold text-foreground">{faq.q}</dt>
              <dd className="mt-2 text-muted-foreground">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export default FaqSection;
