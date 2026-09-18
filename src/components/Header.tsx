import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
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
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        {
          'border-border bg-background/95 shadow-soft backdrop-blur-lg':
            scrolled && !open,
          'bg-background': open,
        },
      )}
    >
      <nav
        className={cn(
          'mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 transition-all duration-300 lg:px-8',
          {
            'md:h-16': scrolled,
          },
        )}
      >
        <Link to="/" className="flex min-h-11 items-center gap-3 transition-opacity hover:opacity-80" aria-label="Nexcubic home">
          <span className="grid size-9 place-items-center bg-primary font-display text-lg font-black text-primary-foreground">N</span>
          <span className="font-display text-lg font-black uppercase tracking-normal">Nexcubic</span>
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
           <Link to="/contact">
             <Button className="ml-2 min-h-11">Start a Project</Button>
          </Link>
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
             <Link to="/contact" className="mt-4">
               <Button className="min-h-11 w-full">Start a Project</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
