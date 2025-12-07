import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Happy Clients', value: '500+' },
    { label: 'Issues Resolved', value: '50K+' },
    { label: 'Team Members', value: '25+' },
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our clients at the center of everything we do, ensuring their success is our success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every interaction, delivering solutions that exceed expectations.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Count on us to be there when you need us most, with consistent and dependable support.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to bring you the most effective solutions.',
    },
  ];

  const team = [
    { name: 'Sarah Chen', role: 'CEO & Founder', initials: 'SC' },
    { name: 'Michael Torres', role: 'CTO', initials: 'MT' },
    { name: 'Emily Watson', role: 'Head of Support', initials: 'EW' },
    { name: 'David Kim', role: 'Security Lead', initials: 'DK' },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in">
              About Nexcubic
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              We're a team of passionate tech experts dedicated to providing exceptional IT support for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="font-display text-3xl font-bold text-accent sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                At Nexcubic, we believe that every business deserves access to reliable, professional IT support. Our mission is to empower organizations by providing technology solutions that drive growth and efficiency.
              </p>
              <p className="mt-4 text-muted-foreground">
                Founded in 2009, we've grown from a small local IT consultancy to a trusted technology partner for hundreds of businesses across the country. Our commitment to excellence and customer satisfaction remains at the core of everything we do.
              </p>
              <Button className="mt-8" size="lg">
                Get in Touch
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="rounded-xl border bg-card p-6 shadow-soft animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-muted-foreground">
              The experienced professionals driving our success
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group text-center animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center text-2xl font-display font-bold text-foreground shadow-soft group-hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-1">
                  {member.initials}
                </div>
                <h3 className="mt-4 font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
