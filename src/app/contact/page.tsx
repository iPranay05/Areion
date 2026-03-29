"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".contact-hero", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".contact-content", {
      x: -30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(".contact-form", {
      x: 30,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-40 pb-40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="contact-hero max-w-4xl mb-32">
          <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Ready to Scale?</span>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-black tracking-tighter leading-[0.9] mb-8 text-on-background">
            LET'S BUILD THE <br /> <span className="text-gradient">FUTURE TOGETHER.</span>
          </h1>
          <p className="text-lg text-on-background/60 leading-relaxed font-manrope">
            Reach out for a consultation on SMM, Automation, or High-Performance Development. 
            We respond within 24 hours to all qualified inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="contact-content">
             <div className="mb-16">
                <h3 className="font-space-grotesk font-bold uppercase tracking-[0.2em] text-primary text-[10px] mb-6">Email Us</h3>
                <Link href="mailto:hello@areion.agency" className="text-2xl md:text-4xl font-space-grotesk font-bold text-on-background hover:text-primary transition-colors underline decoration-primary/10 underline-offset-8 hover:decoration-primary">
                   hello@areion.agency
                </Link>
             </div>
             
             <div className="mb-16">
                <h3 className="font-space-grotesk font-bold uppercase tracking-[0.2em] text-primary text-[10px] mb-6">Studio</h3>
                <p className="text-2xl md:text-4xl font-space-grotesk font-bold leading-tight text-on-background">
                   Berlin, DE — <br /><span className="text-on-background/20 italic">Global Creative Hub</span>
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
                <div className="glass-card p-10 rounded-[2.5rem] border border-slate-100">
                   <span className="text-[9px] font-space-grotesk font-bold uppercase tracking-widest text-on-background/40 block mb-3">Call Direct</span>
                   <p className="font-space-grotesk font-bold text-lg text-on-background">+49 30 1234 5678</p>
                </div>
                <div className="glass-card p-10 rounded-[2.5rem] border border-slate-100">
                   <span className="text-[9px] font-space-grotesk font-bold uppercase tracking-widest text-on-background/40 block mb-3">Instagram</span>
                   <p className="font-space-grotesk font-bold text-lg text-on-background">@areion.agency</p>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="contact-form">
             <form className="glass-card p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-space-grotesk font-bold uppercase tracking-[0.2em] text-on-background/40 ml-4">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-primary/40 transition-all font-manrope text-on-background" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-space-grotesk font-bold uppercase tracking-[0.2em] text-on-background/40 ml-4">Email Address</label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-primary/40 transition-all font-manrope text-on-background" />
                   </div>
                </div>

                <div className="space-y-4 mb-8">
                   <label className="text-[10px] font-space-grotesk font-bold uppercase tracking-[0.2em] text-on-background/40 ml-4">Core Interest</label>
                   <div className="relative">
                      <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-primary/40 transition-all font-manrope text-on-background appearance-none cursor-pointer">
                         <option>SMM Strategy</option>
                         <option>Next.js Development</option>
                         <option>App Architecture</option>
                         <option>AI Automation</option>
                         <option>Creative Production</option>
                      </select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-on-background/40">
                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4l4 4 4-4"/></svg>
                      </div>
                   </div>
                </div>

                <div className="space-y-4 mb-10">
                   <label className="text-[10px] font-space-grotesk font-bold uppercase tracking-[0.2em] text-on-background/40 ml-4">Project Brief</label>
                   <textarea placeholder="Tell us about your mission..." rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-primary/40 transition-all font-manrope text-on-background resize-none"></textarea>
                </div>

                <button type="submit" className="kinetic-gradient w-full py-6 rounded-full text-base font-space-grotesk font-black uppercase tracking-widest text-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                   Send Engine Request
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
