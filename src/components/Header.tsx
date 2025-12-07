import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import logo from '@/assets/logo.png';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'About Us', href: '/about' },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn('sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300', {
        'bg-background/95 supports-[backdrop-filter]:bg-background/80 border-border backdrop-blur-lg shadow-soft':
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src={logo} alt="Nexcubic" className="h-10 w-auto" />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'font-medium',
                location.pathname === link.href && 'bg-accent/10 text-accent'
              )}
              to={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">Sign In</Button>
          <Button variant="default">Get Started</Button>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu open={open} className="flex flex-col justify-between gap-4">
        <div className="grid gap-y-1">
          {links.map((link) => (
            <Link
              key={link.label}
              className={cn(
                buttonVariants({ variant: 'ghost', className: 'justify-start text-base' }),
                location.pathname === link.href && 'bg-accent/10 text-accent'
              )}
              to={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Button variant="outline" className="w-full">
            Sign In
          </Button>
          <Button className="w-full">Get Started</Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
        'fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden',
      )}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn(
          'data-[slot=open]:animate-fade-in ease-out',
          'size-full p-6',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Header;
