import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Users, Award, Clock, Target, Send, Linkedin, Instagram } from 'lucide-react';
import sanjayProfile from '@/assets/sanjay-profile.jpg';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { Helmet } from 'react-helmet-async';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").regex(/^[\d\s\+\-\(\)]+$/, "Invalid phone number format"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our clients at the center of everything we do, ensuring their success is our success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Count on us to deliver on time, every time, with consistent and dependable service.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to bring you the most effective solutions.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xzdbegyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>About Us - Nexcubic | Digital Solutions Company in Bangalore</title>
        <meta name="description" content="Learn about Nexcubic, a Bangalore-based digital solutions company helping startups and enterprises build online presence through web development, AI automation, and branding." />
        <meta name="keywords" content="about Nexcubic, digital solutions Bangalore, tech company India, startup support, web development company" />
        <link rel="canonical" href="https://nexcubic.com/about" />
        <meta property="og:title" content="About Nexcubic - Digital Solutions Company" />
        <meta property="og:description" content="Helping startups and enterprises build an online presence and accelerate growth through technology." />
        <meta property="og:url" content="https://nexcubic.com/about" />
      </Helmet>

      {/* Header */}
      <section className="relative overflow-hidden border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in">
              About Nexcubic
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              A digital solutions company based in Bangalore, India, specializing in helping startups and enterprises build an online presence and accelerate growth through technology.
            </p>
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
                At Nexcubic, we believe that every business deserves access to cutting-edge digital solutions. Our mission is to empower organizations by providing technology solutions that drive growth and efficiency.
              </p>
              <p className="mt-4 text-muted-foreground">
                We specialize in transforming ideas into impactful digital experiences. Whether you're a startup looking to establish your online presence or an enterprise seeking to accelerate growth, we have the expertise to help you succeed.
              </p>
              <p className="mt-4 text-muted-foreground">
                Based in Bangalore, India, we work with clients globally to deliver custom web and mobile applications, AI automation solutions, branding, and digital marketing services.
              </p>
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

      {/* Founder Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Meet Our Founder
            </h2>
            <p className="mt-4 text-muted-foreground">
              The visionary behind Nexcubic
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl border bg-card p-8 shadow-soft">
              <div className="flex-shrink-0">
                <img
                  src={sanjayProfile}
                  alt="Sanjay S - Founder & Mentor at Nexcubic"
                  className="h-48 w-48 rounded-full object-cover border-4 border-accent/20 shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Sanjay S
                </h3>
                <p className="text-accent font-medium mt-1">Founder & Mentor</p>
                <p className="mt-4 text-muted-foreground">
                  A passionate tech entrepreneur and mentor dedicated to helping startups and students succeed in the digital world. With expertise in AI, web development, and digital marketing, Sanjay leads Nexcubic's mission to empower businesses with cutting-edge technology solutions.
                </p>
                <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://www.linkedin.com/in/sanjay-s-258781240/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/sanjay.s.journey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <header className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Get In Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </header>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'border-destructive' : ''}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 9740501114"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'border-destructive' : ''}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && <p id="phone-error" className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-destructive' : ''}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'border-destructive' : ''}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>Or reach out directly:</p>
              <p className="mt-2">
                <a href="mailto:sanjays@nexcubic.com" className="text-accent hover:underline">
                  sanjays@nexcubic.com
                </a>
                {' '} | {' '}
                <a href="tel:+919740501114" className="text-accent hover:underline">
                  +91 9740501114
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;