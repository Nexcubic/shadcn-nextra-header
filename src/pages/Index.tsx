import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedHero } from '@/components/ui/animated-hero';
import IntegrationsSection from '@/components/ui/integrations-section';
import { Monitor, Shield, Headphones, Zap } from 'lucide-react';

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
        <AnimatedHero />
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

      {/* Integrations Section */}
      <IntegrationsSection />
    </Layout>
  );
};

export default Index;
