"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".process-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  const steps = [
    { num: '01', title: 'DISCOVERY', desc: 'Deep dive into brand DNA and technical requirements.' },
    { num: '02', title: 'BLUEPRINT', desc: 'Architecture of the digital engine and creative strategy.' },
    { num: '03', title: 'IGNITION', desc: 'High-velocity production and parallel technical build-out.' },
    { num: '04', title: 'LAUNCH', desc: 'Deployment with maximum algorithmic impact and performance.' },
  ];

  return (
    <div ref={containerRef} className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Methodology</span>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-black tracking-tighter leading-[0.9] text-on-background">
            THE KINETIC <br /> <span className="text-gradient">PROCESS.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {steps.map((step) => (
             <div key={step.num} className="process-item glass-card p-12 rounded-[3.5rem] border border-slate-100 group hover:border-primary/20 transition-all duration-500">
                <span className="text-6xl font-space-grotesk font-black text-primary group-hover:text-primary/50 transition-colors uppercase">{step.num}</span>
                <h3 className="text-2xl font-space-grotesk font-black tracking-tight mb-4 text-on-background uppercase">{step.title}</h3>
                <p className="text-on-background/60 leading-relaxed font-manrope text-base">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
