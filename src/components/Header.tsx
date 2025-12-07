import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import logo from '@/assets/logo.png';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Services', href: '/services' },
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
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-6xl border-b border-transparent transition-all duration-300 md:rounded-lg md:border',
        {
          'bg-background/95 supports-[backdrop-filter]:bg-background/80 border-border backdrop-blur-lg md:top-4 md:max-w-5xl md:shadow-soft':
            scrolled && !open,
          'bg-background/90': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-4 transition-all duration-300 md:h-14',
          {
            'md:px-3': scrolled,
          },
        )}
      >
        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
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

      <div
        className={cn(
          'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
          'fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-fade-in ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-6',
          )}
        >
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
        </div>
      </div>
    </header>
  );
}

export default Header;
