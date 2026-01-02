import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Rocket, Palette, Globe, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import waveteaImage from '@/assets/wavetea-student.png';
import tremblyImage from '@/assets/trembly-student.png';
import studentProgramImage from '@/assets/student-program.png';

const Students = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "100% Free for Students",
      description: "No upfront costs. We invest in your potential and grow together."
    },
    {
      icon: Palette,
      title: "Professional Branding",
      description: "Get a complete brand identity including logo, colors, and visual guidelines."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom website built with modern technologies to showcase your business."
    },
    {
      icon: TrendingUp,
      title: "Marketing Support",
      description: "Social media strategy, content creation, and digital marketing guidance."
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "One-on-one guidance from experienced entrepreneurs and tech professionals."
    },
    {
      icon: CheckCircle,
      title: "Business Registration",
      description: "Help with legal setup, documentation, and official registration."
    }
  ];

  const successStories = [
    {
      name: "WaveTea",
      founder: "Student Entrepreneur",
      image: waveteaImage,
      description: "A premium bubble tea brand that started as a student's dream. Now serving delicious drinks with a unique identity crafted by Nexcubic.",
      services: ["Brand Identity", "Logo Design", "Social Media Strategy", "Website Development"],
      link: "https://www.instagram.com/wavetea.pk/",
      nexcubicPost: "https://www.instagram.com/nexcubic/"
    },
    {
      name: "Trembly",
      founder: "Student Entrepreneur",
      image: tremblyImage,
      description: "A fashion startup bringing trendy clothing to young adults. From concept to launch, we helped build their complete digital presence.",
      services: ["Brand Strategy", "Visual Identity", "E-commerce Guidance", "Marketing Materials"],
      link: "https://www.instagram.com/trembly.pk/",
      nexcubicPost: "https://www.instagram.com/nexcubic/"
    }
  ];

  const eligibility = [
    "Currently enrolled in a college or university",
    "Have a viable business idea or early-stage startup",
    "Committed to building and growing your venture",
    "Ready to collaborate and take feedback",
    "Based in Pakistan (priority) or anywhere globally"
  ];

  return (
    <Layout>
      <Helmet>
        <title>Student Program - Free Startup Support | Nexcubic</title>
        <meta name="description" content="Nexcubic's free student program provides branding, web development, and marketing support for student entrepreneurs. Launch your startup with professional help at zero cost." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-5 h-5" />
                <span className="font-medium">Student Startup Program</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Launch Your Startup <br />
                <span className="text-primary">100% Free</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We believe in student potential. Get professional branding, web development, and marketing support at zero cost. Your idea deserves to shine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/about#contact">
                  <Button size="lg" className="gap-2">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://www.instagram.com/nexcubic/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    See Our Work
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your idea into a professional business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the student startups we've helped launch
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border"
              >
                <div className="bg-muted/50 p-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{story.name}</h3>
                    <span className="text-sm text-muted-foreground">{story.founder}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{story.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.services.map((service) => (
                      <span 
                        key={service}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={story.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full">
                        Visit {story.name}
                      </Button>
                    </a>
                    <a 
                      href={story.nexcubicPost} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full">
                        Our Post
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Who Can Apply?
                </h2>
                <ul className="space-y-4">
                  {eligibility.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src={studentProgramImage} 
                  alt="Student Program" 
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Don't let resources hold you back. Apply now and let us help you build something amazing.
            </p>
            <Link to="/about#contact">
              <Button size="lg" className="gap-2">
                Apply for Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Students;
