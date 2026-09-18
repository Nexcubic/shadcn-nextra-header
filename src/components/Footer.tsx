import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { company, services } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 pb-24 lg:px-8 lg:pb-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid size-10 place-items-center bg-accent font-display text-xl font-black text-accent-foreground">N</span>
              <span className="font-display text-xl font-black uppercase">Nexcubic</span>
            </Link>
            <p className="mt-5 max-w-md text-primary-foreground/70">
              Web, mobile, AI automation, branding and digital marketing for startups and enterprises. Based in Bangalore, India.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <h2 className="mb-4 font-display text-sm font-bold uppercase">Services</h2>
            <ul className="space-y-2">
              {services.map((service) => <li key={service.slug}><Link to={service.slug} className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">{service.navLabel}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className="mb-4 font-display text-sm font-bold uppercase">Contact</h2>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-primary-foreground">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                <a href={`tel:${company.phoneE164}`} className="transition-colors hover:text-primary-foreground">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Bangalore, India</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-4 text-sm">
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">LinkedIn <ArrowUpRight className="size-3" /></a>
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">Instagram <ArrowUpRight className="size-3" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>
          © {new Date().getFullYear()} Nexcubic. Founded by{' '}
          <Link to="/about" className="font-medium text-primary-foreground hover:text-accent">
            Sanjay S
          </Link>
          .
          </span>
          <span>Privacy Policy · Terms — [CONTENT NEEDED]</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
