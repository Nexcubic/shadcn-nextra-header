import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Monitor, Shield, Headphones, Server, Cloud, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Remote Desktop Support',
      description: 'Get real-time assistance from our certified technicians who can access your system remotely to diagnose and fix issues quickly.',
      features: ['Instant connection', 'Screen sharing', 'File transfer', 'Multi-platform support'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business from cyber threats with our comprehensive security services including monitoring, prevention, and incident response.',
      features: ['Threat monitoring', 'Firewall setup', 'Malware protection', 'Security audits'],
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Keep your servers running at peak performance with proactive monitoring, maintenance, and optimization services.',
      features: ['24/7 monitoring', 'Performance tuning', 'Backup solutions', 'Disaster recovery'],
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Migrate to the cloud seamlessly with our expert guidance and ongoing management of your cloud infrastructure.',
      features: ['Cloud migration', 'AWS/Azure support', 'Cost optimization', 'Scalability planning'],
    },
    {
      icon: Headphones,
      title: 'Help Desk Support',
      description: 'Our dedicated help desk team is available around the clock to assist your employees with any technical issues.',
      features: ['24/7 availability', 'Ticket tracking', 'SLA guarantees', 'Knowledge base access'],
    },
    {
      icon: Wrench,
      title: 'Hardware Support',
      description: 'From repairs to upgrades, our technicians can handle all your hardware needs to keep your equipment running smoothly.',
      features: ['On-site repairs', 'Hardware upgrades', 'Procurement', 'Lifecycle management'],
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Comprehensive tech support solutions designed to keep your business running smoothly and securely.
            </p>
          </div>
        </div>
      </section>

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
