"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight, GraduationCap, Palette, Globe, FileText, Building2, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import waveteaImg from "@/assets/wavetea-student.png";
import tremblyImg from "@/assets/trembly-student.png";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-accent font-medium uppercase tracking-wider">
          Free Student Startup Program
        </span>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Students Started With Us
        </h3>
        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6">
          Transform your startup idea into a thriving business — <strong>completely free for students!</strong> We provide end-to-end support from branding to development, helping college students validate ideas and build their dream brands.
        </p>
        
        <div className="space-y-3 my-6">
          <div className="flex items-start gap-3">
            <GraduationCap className="h-5 w-5 text-accent mt-0.5" />
            <span className="text-muted-foreground"><strong>100% Free</strong> for college students</span>
          </div>
          <div className="flex items-start gap-3">
            <Palette className="h-5 w-5 text-accent mt-0.5" />
            <span className="text-muted-foreground">Complete <strong>branding & UI/UX design</strong></span>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-accent mt-0.5" />
            <span className="text-muted-foreground"><strong>Web development</strong> & digital presence</span>
          </div>
          <div className="flex items-start gap-3">
            <Megaphone className="h-5 w-5 text-accent mt-0.5" />
            <span className="text-muted-foreground"><strong>Digital marketing</strong> strategy & execution</span>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-accent mt-0.5" />
            <span className="text-muted-foreground"><strong>GST, Udhyam, Trademark</strong> registration support</span>
          </div>
          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-accent mt-0.5" />
            <span className="text-muted-foreground"><strong>Startup India</strong> recognition & HR services</span>
          </div>
        </div>

        <Link to="/about#contact">
          <Button size="lg" className="gap-2">
            Apply for Free Program <MoveRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      {/* Student Success Stories - Two Images */}
      <div className="flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <a href="https://www.wavetea.shop" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="overflow-hidden rounded-3xl shadow-elevated border border-border/50 transition-transform duration-300 group-hover:scale-[1.02]">
              <img 
                src={waveteaImg} 
                alt="WaveTea - First Student Onboarded by Nexcubic" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-border/50">
              <p className="font-display font-semibold text-foreground text-sm">WaveTea</p>
              <p className="text-xs text-muted-foreground">First student brand - Now live at wavetea.shop</p>
            </div>
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <a href="https://www.trembly.shop" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="overflow-hidden rounded-3xl shadow-elevated border border-border/50 transition-transform duration-300 group-hover:scale-[1.02]">
              <img 
                src={tremblyImg} 
                alt="Trembly - Fashion Clothes Brand by Nexcubic Student" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-border/50">
              <p className="font-display font-semibold text-foreground text-sm">Trembly</p>
              <p className="text-xs text-muted-foreground">Fashion startup - Launching soon at trembly.shop</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
