import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["innovative", "scalable", "impactful", "powerful", "creative"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-32">
          <div>
            <Link to="/blog">
              <Button variant="secondary" size="sm" className="gap-4">
                Explore our insights <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="max-w-2xl text-center font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Digital solutions that are
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                <AnimatePresence mode="wait">
                  {titles.map((title, index) => (
                    titleNumber === index && (
                      <motion.span
                        key={index}
                        className="absolute text-accent"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                      >
                        {title}
                      </motion.span>
                    )
                  ))}
                </AnimatePresence>
              </span>
            </h1>

            <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed md:text-xl">
              Nexcubic helps startups and enterprises build their online presence 
              and accelerate growth through cutting-edge technology solutions.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="tel:+919740501114">
              <Button size="lg" className="gap-4" variant="outline">
                Call us <PhoneCall className="h-4 w-4" />
              </Button>
            </a>
            <Link to="/about#contact">
              <Button size="lg" className="gap-4">
                Get Started <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
