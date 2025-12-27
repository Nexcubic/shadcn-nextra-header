"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Cloud, 
  Container, 
  Server, 
  GitBranch, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Chrome, 
  Smartphone,
  Database,
  Layers,
  Cpu,
  Globe,
  Zap
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface IconConfig {
  Icon: LucideIcon | null;
  color: string;
  img?: string;
}

const fallbackUrls = [
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=100&h=100&fit=crop"
];

const iconConfigs: IconConfig[] = [
  { Icon: Code, color: "#61DAFB" },
  { Icon: Cloud, color: "#FF9900" },
  { Icon: Container, color: "#2496ED" },
  { Icon: Server, color: "#339933" },
  { Icon: Layers, color: "#764ABC" },
  { Icon: Database, color: "#3178C6" },
  { Icon: GitBranch, color: "#181717" },
  { Icon: Twitter, color: "#1DA1F2" },
  { Icon: Linkedin, color: "#0077B5" },
  { Icon: Instagram, color: "#E1306C" },
  { Icon: Chrome, color: "#DB4437" },
  { Icon: Smartphone, color: "#000000" },
  { Icon: Cpu, color: "#1877F2" },
  { Icon: Globe, color: "#00D4AA" },
  { Icon: Zap, color: "#FFD700" },
  { Icon: null, color: "", img: fallbackUrls[0] },
  { Icon: null, color: "", img: fallbackUrls[1] },
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
        {/* Left side: Heading and Text */}
        <div className="relative z-10 flex flex-col items-start justify-center gap-6 md:w-1/2">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Transform Your Business With Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            Nexcubic delivers cutting-edge digital solutions that help startups and enterprises thrive. From web development to AI automation, we bring your vision to life.
          </p>
          <div className="flex gap-4">
            <Link to="/about#contact">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>

        {/* Right side: Orbit animation */}
        <div className="relative h-[400px] w-full md:w-1/2 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 flex items-center justify-center z-20">
              <Code className="h-8 w-8 text-accent" />
            </div>

            {/* Generate Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
              const angleStep = (2 * Math.PI) / iconsPerOrbit;
              const duration = 20 + orbitIdx * 10;
              const direction = orbitIdx % 2 === 0 ? 'normal' : 'reverse';

              return (
                <div
                  key={orbitIdx}
                  className="absolute left-1/2 top-1/2 rounded-full border border-border/30"
                  style={{
                    width: size,
                    height: size,
                    marginLeft: `calc(-${size} / 2)`,
                    marginTop: `calc(-${size} / 2)`,
                    animation: `spin ${duration}s linear infinite ${direction}`,
                  }}
                >
                  {iconConfigs
                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);

                      return (
                        <div
                          key={iconIdx}
                          className="absolute h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: 'translate(-50%, -50%)',
                            animation: `spin ${duration}s linear infinite ${direction === 'normal' ? 'reverse' : 'normal'}`,
                          }}
                        >
                          {cfg.Icon ? (
                            <cfg.Icon className="h-5 w-5" style={{ color: cfg.color }} />
                          ) : (
                            <img
                              src={cfg.img}
                              alt="tech"
                              className="h-6 w-6 rounded-full object-cover"
                            />
                          )}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}