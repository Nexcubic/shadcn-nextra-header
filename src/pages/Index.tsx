import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Monitor, Shield, Headphones, Zap, ArrowRight } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Remote Support',
      description: 'Get instant help from our experts without leaving your desk.',
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Protect your business with enterprise-grade security.',
    },
    {
      icon: Headphones,
      title: '24/7 Helpdesk',
      description: 'Round-the-clock support whenever you need it.',
    },
    {
      icon: Zap,
      title: 'Fast Resolution',
      description: 'Quick turnaround times with expert technicians.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in">
              Best Tech Support for{' '}
              <span className="text-gradient">Your Business</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Nexcubic delivers professional IT solutions that keep your business running smoothly. From troubleshooting to security, we've got you covered.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" variant="hero">
                Get Started <ArrowRight className="ml-1" />
              </Button>
              <Button size="lg" variant="hero-outline">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Nexcubic?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive tech support tailored to your needs
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-xl border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="rounded-2xl gradient-hero p-8 text-center sm:p-12 lg:p-16">
            <h2 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
              Ready to Transform Your IT Experience?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Join hundreds of businesses that trust Nexcubic for reliable tech support.
            </p>
            <Button size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
