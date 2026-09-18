import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { FaqSection, faqSchema } from '@/components/FaqSection';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Bot, Code2, Smartphone, Megaphone, Palette, Check, ExternalLink,
  Search, PenTool, Rocket, LifeBuoy, Building2, BriefcaseBusiness, GraduationCap,
} from 'lucide-react';
import { SITE_URL, caseStudies, company, homeFaqs, services } from '@/data/site';
import waveteaImage from '@/assets/wavetea-student.png';
import tremblyImage from '@/assets/trembly-student.png';
import sanjayProfile from '@/assets/sanjay-profile.jpg';

const serviceIcons = [Bot, Code2, Smartphone, Palette, Megaphone];
const projectImages: Record<string, string> = { wavetea: waveteaImage, trembly: tremblyImage };

const serviceSchemas = services.map((service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.h1,
  serviceType: service.navLabel,
  description: service.summary,
  url: `${SITE_URL}${service.slug}`,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [{ '@type': 'City', name: 'Bangalore' }, { '@type': 'Country', name: 'India' }],
}));

const Index = () => (
  <Layout>
    <Seo
      title="Nexcubic - Digital Solutions Company | Web Development, AI Automation, Branding"
      description={company.shortDescription}
      path="/"
      schemas={[
        {
          '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE_URL}/#organization`,
          name: company.name, url: SITE_URL, logo: `${SITE_URL}/logo.png`, description: company.shortDescription,
          founder: { '@type': 'Person', name: company.founder.name, jobTitle: company.founder.jobTitle, sameAs: [company.founder.linkedin] },
          address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: company.region, addressCountry: 'IN' },
          email: company.email, telephone: company.phoneE164, sameAs: [company.linkedin, company.instagram],
        },
        { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: company.name, publisher: { '@id': `${SITE_URL}/#organization` } },
        ...serviceSchemas,
        faqSchema(homeFaqs.slice(0, 6)),
      ]}
    />

    <section className="relative overflow-hidden border-b bg-primary text-primary-foreground">
      <div className="editorial-grid mx-auto grid min-h-[670px] max-w-7xl lg:grid-cols-[1.35fr_.65fr]">
        <div className="flex flex-col justify-center px-4 py-20 sm:px-8 lg:py-28">
          <p className="section-kicker">Bangalore · Digital solutions company</p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-black leading-[.96] sm:text-7xl lg:text-[5.5rem]">
            We build the product, the brand, and the systems behind growth.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/72 sm:text-xl">
            Nexcubic delivers web development, mobile apps, AI automation, branding and digital marketing for startups and enterprises.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary" className="min-h-12">
              <Link to="/contact">Start a Project <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-12 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/case-studies">See Our Work</Link>
            </Button>
          </div>
        </div>
        <div className="hidden border-l border-primary-foreground/15 p-8 lg:flex lg:flex-col lg:justify-end">
          <p className="text-xs font-bold uppercase text-accent">Five connected capabilities</p>
          <ol className="mt-5 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
            {services.map((service, index) => (
              <li key={service.slug} className="flex items-center gap-4 py-4">
                <span className="text-xs text-primary-foreground/40">0{index + 1}</span>
                <span className="font-semibold">{service.navLabel}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <section className="border-b bg-card" aria-label="Selected work">
      <div className="mx-auto grid max-w-7xl md:grid-cols-[.55fr_1fr_1fr]">
        <div className="flex items-center border-b p-5 md:border-b-0 md:border-r lg:p-7">
          <p className="section-kicker">Selected work</p>
        </div>
        {caseStudies.slice(0, 2).map((study) => (
          <a key={study.slug} href={study.site} target="_blank" rel="noopener noreferrer" className="group flex min-h-20 items-center justify-between border-b p-5 transition-colors hover:bg-muted/60 md:border-b-0 md:border-r lg:p-7">
            <span><strong className="block text-lg">{study.name}</strong><span className="text-sm text-muted-foreground">{study.category}</span></span>
            <ExternalLink className="size-5 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        ))}
      </div>
    </section>

    <section className="py-20 lg:py-28" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div><p className="section-kicker">What we deliver</p><h2 id="services-title" className="mt-4 text-4xl font-black sm:text-5xl">Five services.<br />One accountable team.</h2></div>
          <p className="max-w-2xl text-lg text-muted-foreground lg:justify-self-end">From first scope to launch and growth, our services work together—or independently—around the practical needs of your business.</p>
        </div>
        <div className="mt-14 grid border-l border-t sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return <article key={service.slug} className="group flex min-h-[330px] flex-col border-b border-r bg-card p-6 transition-colors hover:bg-primary hover:text-primary-foreground">
              <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/50">0{index + 1}</span>
              <Icon className="mt-8 size-7 text-accent" aria-hidden="true" />
              <h3 className="mt-7 text-xl font-bold">{service.navLabel}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70">{service.summary}</p>
              <Link to={service.slug} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-accent">View service <ArrowRight className="size-4" /></Link>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="border-y bg-muted/40 py-20 lg:py-28" aria-labelledby="proof-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="section-kicker">Proof, not promises</p>
        <h2 id="proof-title" className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">Real brands moved from idea to public launch.</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {caseStudies.slice(0, 2).map((study) => (
            <article key={study.slug} className="overflow-hidden border bg-card shadow-soft">
              <div className="aspect-[16/10] overflow-hidden bg-muted"><img src={projectImages[study.slug]} alt={`${study.name} student brand project supported by Nexcubic`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]" width="900" height="563" loading="lazy" /></div>
              <div className="p-6 sm:p-8"><p className="section-kicker">{study.category}</p><h3 className="mt-3 text-3xl font-black">{study.name}</h3><p className="mt-4 text-muted-foreground">{study.work}</p><p className="mt-5 border-l-2 border-accent pl-4 text-sm"><strong>Verified result:</strong> {study.outcome}</p><Link to="/case-studies" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-accent">Read the case study <ArrowRight className="size-4" /></Link></div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
        <div className="relative max-w-md"><img src={sanjayProfile} alt="Sanjay S, founder of Nexcubic in Bangalore" className="aspect-[4/5] w-full object-cover" width="640" height="800" loading="lazy" /><div className="absolute bottom-0 right-0 bg-accent p-5 text-accent-foreground"><strong className="block">Sanjay S</strong><span className="text-sm">Founder · Nexcubic</span></div></div>
        <div><p className="section-kicker">Founder-led</p><h2 id="about-title" className="mt-4 text-4xl font-black sm:text-5xl">Technical depth. Direct accountability.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Nexcubic was founded by Sanjay S, an AI/ML specialist, Assistant Professor in Computer Science and Bangalore-based entrepreneur. He leads client work across AI automation, web and app development, branding and digital marketing.</p><p className="mt-4 max-w-2xl text-muted-foreground">Sanjay holds an MCA specialised in Artificial Intelligence and Machine Learning and is active in Bangalore’s startup and developer ecosystem.</p><Button asChild variant="outline" className="mt-7 min-h-11"><Link to="/about">About Nexcubic <ArrowRight className="ml-2 size-4" /></Link></Button></div>
      </div>
    </section>

    <section className="border-y bg-primary py-20 text-primary-foreground" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 lg:px-8"><p className="section-kicker">A clear way to work</p><h2 id="process-title" className="mt-4 text-4xl font-black sm:text-5xl">From requirement to working release.</h2>
        <div className="mt-12 grid border-l border-t border-primary-foreground/20 md:grid-cols-4">
          {[{i:'01',t:'Discovery',d:'Understand the problem, users, constraints and definition of done.',x:Search},{i:'02',t:'Build',d:'Deliver reviewable work in focused stages, not a black box.',x:PenTool},{i:'03',t:'Launch',d:'Deploy, verify and put the finished work in front of users.',x:Rocket},{i:'04',t:'Support',d:'Handover clearly, then maintain and improve where required.',x:LifeBuoy}].map((step) => <article key={step.i} className="min-h-64 border-b border-r border-primary-foreground/20 p-6"><span className="text-xs text-primary-foreground/40">{step.i}</span><step.x className="mt-8 size-7 text-accent"/><h3 className="mt-6 text-xl font-bold">{step.t}</h3><p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">{step.d}</p></article>)}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28" aria-labelledby="audiences-title"><div className="mx-auto max-w-7xl px-4 lg:px-8"><p className="section-kicker">Who we serve</p><h2 id="audiences-title" className="mt-4 text-4xl font-black sm:text-5xl">Built around real operating needs.</h2><div className="mt-12 grid gap-px bg-border lg:grid-cols-3">{[
      {icon:BriefcaseBusiness,title:'Startups & founders',text:'Early-stage teams that need an MVP, launch identity, online store, automation or focused go-to-market execution.',href:'/startup-support'},
      {icon:Building2,title:'Businesses & enterprises',text:'SMEs and established teams improving customer experiences, internal workflows, digital presence and measurable acquisition.',href:'/services'},
      {icon:GraduationCap,title:'College-linked ventures',text:'Colleges, student founders and departments moving classroom ideas into practical products and public launches.',href:'/college-programs'},
    ].map((item) => <article key={item.title} className="bg-background p-7"><item.icon className="size-7 text-accent"/><h3 className="mt-6 text-2xl font-bold">{item.title}</h3><p className="mt-3 text-muted-foreground">{item.text}</p><Link to={item.href} className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-accent">Explore <ArrowRight className="size-4"/></Link></article>)}</div></div></section>

    <FaqSection faqs={homeFaqs.slice(0, 6)} heading="Questions before we start" headingId="faq" />

    <section className="border-t bg-accent py-20 text-accent-foreground"><div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-8"><div><p className="text-xs font-bold uppercase">Start with a conversation</p><h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-6xl">Tell us what needs to work better.</h2></div><div className="lg:justify-self-end"><div className="space-y-2 text-lg font-semibold"><a href={`mailto:${company.email}`} className="block underline underline-offset-4">{company.email}</a><a href={`tel:${company.phoneE164}`} className="block underline underline-offset-4">{company.phone}</a></div><Button asChild size="lg" className="mt-6 min-h-12"><Link to="/contact">Start a Project <ArrowRight className="ml-2 size-4"/></Link></Button></div></div></section>
  </Layout>
);

export default Index;