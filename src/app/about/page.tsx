"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-header", { y: 30, opacity: 0, duration: 1 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="about-header max-w-4xl mb-20">
          <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-black tracking-tighter leading-[0.9] mb-8 text-on-background">
            THE ELECTRIC <br /> <span className="text-gradient">KINETIC.</span>
          </h1>
          <p className="text-lg text-on-background/60 leading-relaxed font-manrope">
            Unlike static agency sites that feel like digital brochures, AREION is designed to feel like a high-performance engine in motion. 
            We reject the "flatness" of modern design in favor of Tonal Depth and Atmospheric Energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="glass-card p-12 rounded-[3rem] border border-slate-100">
              <h3 className="text-xl md:text-2xl font-space-grotesk font-bold mb-6 italic text-primary/80">"Professional enough to secure enterprise contracts, energetic enough to lead a creative revolution."</h3>
              <p className="text-on-background/40 font-manrope text-sm">Founded in Berlin, serving the world with high-velocity creative and tech.</p>
           </div>
           <div className="glass-card p-12 rounded-[3rem] border border-slate-100">
              <h3 className="text-xl md:text-2xl font-space-grotesk font-bold mb-4 tracking-tight text-on-background">Our Mission</h3>
              <p className="text-on-background/60 leading-relaxed text-sm">To transform brands into digital powerhouses using the perfect intersection of cinema-grade visuals and rock-solid technical architecture.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
