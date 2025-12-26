import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Nexcubic" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Helping startups and enterprises build an online presence and accelerate growth through technology. Based in Bangalore, India.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:sanjays@nexcubic.com" className="hover:text-accent transition-colors">
                  sanjays@nexcubic.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+919740501114" className="hover:text-accent transition-colors">
                  +91 9740501114
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nexcubic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
