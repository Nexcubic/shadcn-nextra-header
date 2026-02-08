import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FinancialHeroProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl1: string;
  imageUrl2: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
      staggerChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const FinancialHero = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl1,
  imageUrl2,
  className,
}: FinancialHeroProps) => {
  const gridBackgroundStyle = {
    backgroundImage:
      'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
    backgroundSize: '3rem 3rem',
  };

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-background py-16 md:py-24',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={gridBackgroundStyle}
      />

      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:gap-8 lg:gap-16">
        {/* Left: Text Content */}
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="max-w-md text-lg text-muted-foreground"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" className="gap-2" asChild>
              <a href={buttonLink}>
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Card Images */}
        <motion.div
          className="relative flex h-72 items-center justify-center md:h-96"
          variants={cardsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Back Card */}
          <motion.img
            src={imageUrl1}
            alt="Project image 1"
            className="absolute right-8 top-0 h-56 w-44 rounded-2xl object-cover shadow-2xl md:right-16 md:h-72 md:w-56"
            variants={cardItemVariants}
          />
          {/* Front Card */}
          <motion.img
            src={imageUrl2}
            alt="Project image 2"
            className="absolute bottom-0 left-8 h-56 w-44 rounded-2xl object-cover shadow-2xl md:left-16 md:h-72 md:w-56"
            variants={cardItemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};
