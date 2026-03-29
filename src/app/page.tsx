"use client";

import Link from "next/link";
import Image from "next/image";
import WebsitePreviewModal from "@/components/WebsitePreviewModal";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState<{ isOpen: boolean; url: string; title: string; isRestricted: boolean }>({
    isOpen: false,
    url: "",
    title: "",
    isRestricted: false
  });

  const openPreview = (url: string, title: string, isRestricted: boolean = false) => {
    setPreview({
      isOpen: true,
      url,
      title,
      isRestricted
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-title span", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
    })
    .from(".hero-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.7")
    .from(".hero-cta", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.5");

    // Floating artifacts animation
    gsap.to(".artifact-card", {
      y: "random(-15, 15)",
      x: "random(-10, 10)",
      rotation: "random(-1, 1)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 1,
        from: "random"
      }
    });

    const sections = gsap.utils.toArray(".reveal-section");
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, { scope: containerRef });

  return (
    <main className="min-h-screen bg-background-areion">
      <Navbar />
      
      <WebsitePreviewModal 
        isOpen={preview.isOpen}
        onClose={() => setPreview({ ...preview, isOpen: false })}
        url={preview.url}
        title={preview.title}
        isRestricted={preview.isRestricted}
      />

      <div ref={containerRef} className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <Image 
            src="/hero-bg.png" 
            alt="Areion High Performance" 
            fill 
            className="object-cover opacity-50 contrast-125 brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#C04AE208_0%,transparent_50% )]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              {/* Left Content */}
              <div className="lg:w-7/12 text-left">
                <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-black tracking-tighter leading-[0.9] mb-8 text-on-background">
                  <span className="inline-block">AREION:</span> <br />
                  <span className="text-gradient inline-block">WE BUILD,</span> <br />
                  <span className="inline-block">WE SCALE,</span> <br />
                  <span className="inline-block text-on-background">WE CREATE.</span>
                </h1>
                
                <div className="hero-content space-y-8 max-w-xl">
                  <p className="text-on-background/60 text-lg md:text-xl font-manrope leading-relaxed">
                    A high-performance creative ecosystem dedicated to hyper-scaling brands. We don't just design; we architect digital dominance.
                  </p>
                  
                  <div className="hero-cta flex flex-wrap gap-6 items-center pt-6">
                    <Link 
                      href="/portfolio" 
                      className="kinetic-gradient px-12 py-5 rounded-full text-xs font-space-grotesk font-black uppercase tracking-widest text-white shadow-lg hover:scale-105 transition-all"
                    >
                      View Deployments
                    </Link>
                    <Link 
                      href="/contact" 
                      className="group flex items-center gap-4 text-xs font-space-grotesk font-black uppercase tracking-widest text-on-background"
                    >
                      <span className="w-12 h-px bg-on-background/20 group-hover:w-20 transition-all duration-500"></span>
                      Initialize Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Visuals */}
              <div className="lg:w-5/12 relative hidden lg:block">
                <div className="relative w-full aspect-square">
                   <div className="artifact-card absolute top-0 left-0 w-72 h-96 rounded-[3.5rem] glass-card overflow-hidden border-slate-100 p-4 transform -rotate-[6deg] shadow-2xl z-20">
                      <div className="relative w-full h-56 bg-white rounded-[2.5rem] mb-6 overflow-hidden">
                         <Image src="/tech.png" alt="Creative" fill className="object-cover opacity-90" />
                      </div>
                      <div className="space-y-4 px-2">
                         <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
                         <div className="h-2 w-1/2 bg-slate-50 rounded-full"></div>
                      </div>
                   </div>
                   
                   <div className="artifact-card absolute bottom-0 right-0 w-64 h-80 rounded-[3rem] glass-card overflow-hidden border-slate-100 p-4 transform rotate-[4deg] shadow-xl z-10 scale-105">
                      <div className="relative w-full h-48 bg-slate-50 rounded-[2rem] mb-6 overflow-hidden">
                         <Image src="/tech.png" alt="Tech" fill className="object-cover opacity-80" />
                      </div>
                      <div className="space-y-3 px-2">
                         <div className="h-1.5 w-2/3 bg-slate-100 rounded-full"></div>
                         <div className="h-1.5 w-1/2 bg-slate-50 rounded-full"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Mechanics (Services) */}
        <section className="reveal-section py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Engine Core</span>
                <h2 className="text-4xl md:text-6xl font-space-grotesk font-black tracking-tighter leading-[0.9] text-on-background">OUR CORE <br /> MECHANICS.</h2>
              </div>
              <p className="text-on-background/60 max-w-md text-base leading-relaxed mb-4 font-manrope">
                High-velocity creative output fused with heavy-duty technical architecture. Professional meets energetic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: '01', title: 'SMM Strategy', desc: 'Aggressive growth strategies that capture attention and convert audiences at scale.' },
                { id: '02', title: 'Web Design', desc: 'Architecting digital experiences that blend brutalist tech with editorial elegance.' },
                { id: '03', title: 'App Dev', desc: 'Custom SaaS and mobile architectures built for maximum velocity and stability.' },
                { id: '04', title: 'Automation', desc: 'AI-integrated workflows that eliminate friction and reclaim your team\'s time.' },
                { id: '05', title: 'Reel Shoots', desc: 'Cinema-grade vertical content tailored for the algorithm. Edited for impact.' },
                { id: '06', title: 'SEO Engine', desc: 'High-velocity technical SEO and semantic indexing for maximum visibility.' },
              ].map((service) => (
                <div key={service.id} className="glass-card p-10 rounded-[2.5rem] group hover:border-primary/30 transition-all duration-500">
                  <span className="text-5xl font-space-grotesk font-black text-primary group-hover:text-primary/50 transition-colors duration-500">{service.id}</span>
                  <h3 className="text-2xl font-space-grotesk font-bold mt-6 mb-4 text-on-background">{service.title}</h3>
                  <p className="text-on-background/60 leading-relaxed font-manrope text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="reveal-section py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Client Deployments</span>
              <h2 className="text-4xl md:text-6xl font-space-grotesk font-black tracking-tighter leading-[0.9] text-on-background">WEBSITE PORTFOLIO.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: 'PRECIOUS PACKAGING', category: 'Website Portfolio', color: 'from-primary/20', image: '/precious.png', link: 'http://precious-packaging.vercel.app/' },
                { title: 'SAMDARSHI FOUNDATION', category: 'Website Portfolio', color: 'from-secondary-areion/20', image: '/samdarshi.png', link: 'https://samdarshi-foundation.vercel.app/' },
              ].map((project, i) => (
                <div 
                  key={i} 
                  onClick={() => openPreview(project.link, project.title, false)}
                  className={`relative aspect-[16/10] rounded-[3.5rem] overflow-hidden group border border-slate-100 block cursor-pointer bg-slate-50`}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-20`}></div>
                  
                  {/* Hover UI */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 bg-black/5 hover:bg-black/20 backdrop-blur-[2px] hover:backdrop-blur-sm">
                    <div className="kinetic-gradient px-8 py-3 rounded-full text-[10px] font-space-grotesk font-black uppercase tracking-widest text-white shadow-2xl transition-all">
                        LIVE PREVIEW
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <span className="text-[10px] font-space-grotesk font-bold uppercase tracking-[0.2em] text-primary mb-3 block">{project.category}</span>
                    <h3 className="text-3xl font-space-grotesk font-bold tracking-tight text-white">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 group">
              <div className="relative min-h-[400px] flex items-center justify-center rounded-[3.5rem] overflow-hidden border border-slate-100 p-12 bg-slate-50">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary-areion/5 opacity-50"></div>
                  <div className="relative z-10 max-w-3xl text-center">
                    <h3 className="text-2xl md:text-4xl font-space-grotesk font-bold mb-10 italic tracking-tight leading-snug text-on-background">
                      "AREION didn't just rebuild our platform; they rebuilt our entire brand trajectory. Their systems saved us 40 hours a week."
                    </h3>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
                      <p className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-xs">MARCUS VANCE</p>
                      <p className="text-on-background/40 font-manrope text-[10px] mt-2 uppercase tracking-widest">CEO, NEXUS GLOBAL</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="reveal-section py-40 bg-white relative border-t border-slate-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#C04AE205_0%,transparent_50% )]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-black tracking-tighter leading-[0.8] mb-12 text-on-background">
                TRANSFORM YOUR <br /> BUSINESS TODAY.
              </h2>
              <Link 
                href="/contact" 
                className="kinetic-gradient inline-block px-14 py-7 rounded-full text-lg font-space-grotesk font-black uppercase tracking-widest text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
              >
                Get Started Now
              </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
