import { Layout } from '@/components/Layout';
import { AnimatedHero } from '@/components/ui/animated-hero';
import IntegrationsSection from '@/components/ui/integrations-section';
import { ShuffleHero } from '@/components/ui/shuffle-grid';
import { Code, Bot, Palette, Megaphone, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const features = [
    {
      icon: Code,
      title: 'Website & App Development',
      description: 'Building custom, scalable web and mobile applications tailored to your needs.',
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamlining tasks and boosting productivity using powerful AI tools.',
    },
    {
      icon: Palette,
      title: 'Branding & UI/UX Design',
      description: 'Crafting brand identities and user-centric interfaces that stand out.',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Helping businesses establish a strong online presence and grow.',
    },
    {
      icon: Rocket,
      title: 'Startup Support',
      description: 'Free initiative for college students to validate ideas and build brands.',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Nexcubic - Digital Solutions Company | Web Development, AI Automation, Branding</title>
        <meta name="description" content="Nexcubic is a Bangalore-based digital solutions company specializing in web development, mobile apps, AI automation, branding, and digital marketing for startups and enterprises." />
        <meta name="keywords" content="web development, mobile app development, AI automation, digital marketing, branding, UI/UX design, startup support, Bangalore, India" />
        <link rel="canonical" href="https://nexcubic.com" />
        <meta property="og:title" content="Nexcubic - Digital Solutions Company" />
        <meta property="og:description" content="Helping startups and enterprises build an online presence and accelerate growth through technology." />
        <meta property="og:url" content="https://nexcubic.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <AnimatedHero />
      </section>

      {/* Shuffle Hero Section */}
      <section className="border-t bg-muted/30 py-12">
        <ShuffleHero />
      </section>

      {/* Features Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <header className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Nexcubic?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transform your ideas into impactful digital experiences
            </p>
          </header>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((feature, index) => (
              <article
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
              </article>
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