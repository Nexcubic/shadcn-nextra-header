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
    <section className="border-t py-20 lg:py-28" aria-labelledby={headingId}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="section-kicker">FAQ</p>
        <h2 id={headingId} className="mt-4 font-display text-4xl font-black text-foreground sm:text-5xl">
          {heading}
        </h2>
        {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
        <dl className="mt-10 grid border-l border-t md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-r p-6">
              <dt className="font-display text-lg font-bold text-foreground">{faq.q}</dt>
              <dd className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</dd>
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
