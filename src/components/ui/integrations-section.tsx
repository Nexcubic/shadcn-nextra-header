"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const integrations = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
  "https://cdn-icons-png.flaticon.com/512/174/174872.png",
  "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  "https://cdn-icons-png.flaticon.com/512/888/888853.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  "https://cdn-icons-png.flaticon.com/512/732/732218.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968755.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
  "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968885.png",
  "https://cdn-icons-png.flaticon.com/512/2111/2111370.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
];

export default function IntegrationsSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 border-t bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
            Technologies We Work With
          </span>

          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Supercharge your digital presence
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We integrate with the latest tools and platforms to build powerful, scalable solutions that drive your business forward.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
            <Button variant="link" size="lg" asChild>
              <Link to="/about#contact">Get in Touch →</Link>
            </Button>
          </div>
        </div>

        {/* Right Side - Logo Grid */}
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6">
          {integrations.map((url, idx) => (
            <div
              key={idx}
              className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-card p-3 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <img
                src={url}
                alt={`Integration ${idx + 1}`}
                className="h-8 w-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
