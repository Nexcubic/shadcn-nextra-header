import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Code, Bot, Palette, Megaphone, Rocket, ArrowRight } from 'lucide-react';
import StackFeatureSection from '@/components/ui/stack-feature-section';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Website & App Development',
      description: 'We build custom, scalable web and mobile applications that bring your vision to life. From concept to deployment, we ensure your digital products are fast, secure, and user-friendly.',
      features: ['Custom web applications', 'Mobile app development', 'E-commerce solutions', 'API integrations'],
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamline your operations and reduce workload with our AI-powered automation solutions. We implement intelligent systems that boost productivity and efficiency.',
      features: ['Workflow automation', 'AI chatbots', 'Data processing', 'Smart integrations'],
    },
    {
      icon: Palette,
      title: 'Branding & UI/UX Design',
      description: 'Create a lasting impression with our comprehensive branding and design services. We craft brand identities and user-centric interfaces that resonate with your audience.',
      features: ['Brand identity design', 'Logo creation', 'UI/UX design', 'Design systems'],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing & Advertising',
      description: 'Establish a strong online presence and reach your target audience effectively. Our digital marketing strategies help businesses grow and thrive in the digital landscape.',
      features: ['SEO optimization', 'Social media marketing', 'Content strategy', 'Paid advertising'],
    },
    {
      icon: Rocket,
      title: 'Startup Support',
      description: 'A free initiative for college students to help validate business ideas, get guidance, build brand identity, and create an online presence. We believe in nurturing the next generation of entrepreneurs.',
      features: ['Idea validation', 'Mentorship', 'Brand building', 'MVP development'],
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Orbit Animation */}
      <StackFeatureSection />

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-xl border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="mt-6 w-full justify-between">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
