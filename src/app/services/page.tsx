"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".service-hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const sections = gsap.utils.toArray(".reveal-section");
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-32 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
          <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block relative z-10">Capabilities</span>
          <h1 className="service-hero-title text-5xl md:text-7xl font-space-grotesk font-black tracking-tighter leading-[0.9] mb-8 relative z-10 text-on-background">
            WE BUILD <br /> <span className="text-gradient">DIGITAL ENGINES.</span>
          </h1>
          <p className="text-xl text-on-background/60 leading-relaxed font-manrope relative z-10 max-w-2xl">
            High-velocity creative output fused with heavy-duty technical architecture. 
            From viral reels to autonomous enterprise systems.
          </p>
        </div>

        {/* Creative Force */}
        <section className="reveal-section mb-48">
           <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-black tracking-tighter mb-8 text-on-background uppercase">Creative Force</h2>
                <p className="text-base text-on-background/60 leading-relaxed font-manrope mb-8">
                  We don't just shoot; we engineer attention. Our creative strategy is built for the high-velocity world of cinematic vertical content.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {['SMM Strategy', 'Vertical Content', 'Website Portfolio'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{i+1}</div>
                      <span className="font-space-grotesk font-bold uppercase tracking-widest text-[10px] text-on-background">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative aspect-square w-full">
                 <Image 
                    src="/creative.png" 
                    alt="Creative Force" 
                    fill 
                    className="object-cover rounded-[3rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-1000"
                  />
              </div>
           </div>
        </section>

        {/* Technical Architecture */}
        <section className="reveal-section mb-48">
           <div className="flex flex-col-reverse lg:flex-row gap-16 items-center mb-16">
              <div className="lg:w-1/2 relative aspect-square w-full">
                 <Image 
                    src="/tech.png" 
                    alt="Technical Architecture" 
                    fill 
                    className="object-cover rounded-[3rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-1000"
                  />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-black tracking-tighter mb-8 text-on-background uppercase">Technical Architecture</h2>
                <p className="text-base text-on-background/60 leading-relaxed font-manrope mb-8 underline decoration-secondary-areion/10 underline-offset-8">
                  Precision engineering for enterprise stability. We architect autonomous workflows that reclaim your team's most valuable asset: time.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {['Premium Web Design', 'SEO Engine Architecture', 'AI-Integrated Systems'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-secondary-areion/20 transition-all">
                      <div className="w-8 h-8 rounded-full bg-secondary-areion/10 flex items-center justify-center text-secondary-areion font-bold text-xs">{i+1}</div>
                      <span className="font-space-grotesk font-bold uppercase tracking-widest text-[10px] text-on-background">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </section>

        {/* The Kinetic Process */}
        <section className="reveal-section mb-20 bg-slate-50 p-12 md:p-24 rounded-[4rem] relative overflow-hidden border border-slate-100">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
           <div className="text-center mb-20 relative z-10">
              <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Methodology</span>
              <h2 className="text-4xl md:text-6xl font-space-grotesk font-black tracking-tighter text-on-background">THE KINETIC PROCESS.</h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { title: 'Discovery', desc: 'Deep dive into your business mechanics and growth inhibitors.' },
                { title: 'Blueprint', desc: 'Engineering the technical and creative roadmap for the next 90 days.' },
                { title: 'Ignition', desc: 'High-velocity execution and deployment of your new systems.' },
                { title: 'Launch', desc: 'Market entry and continuous optimization for maximum impact.' },
              ].map((step, i) => (
                 <div key={i} className="relative group">
                    <div className="text-8xl font-space-grotesk font-black text-slate-200/80 absolute -top-12 -left-6 group-hover:text-primary/10 transition-colors duration-500">0{i+1}</div>
                    <h4 className="text-lg font-space-grotesk font-bold mb-3 relative z-10 text-on-background">{step.title}</h4>
                    <p className="text-on-background/60 text-xs leading-relaxed relative z-10 font-manrope">{step.desc}</p>
                 </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
