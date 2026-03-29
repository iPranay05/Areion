"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import WebsitePreviewModal from "@/components/WebsitePreviewModal";
import { useState } from "react";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { 
    title: 'PRECIOUS PACKAGING', 
    category: 'Website Portfolio', 
    desc: 'Premium sustainable packaging platform designed to elevate brand identity through high-quality eco-conscious materials.', 
    color: 'from-primary/20',
    image: '/precious.png',
    link: 'http://precious-packaging.vercel.app/',
    isRestricted: false
  },
  { 
    title: 'SAMDARSHI FOUNDATION', 
    category: 'Website Portfolio', 
    desc: 'Empowering communities through health, education, and equality initiatives across India.', 
    color: 'from-secondary-areion/20',
    image: '/samdarshi.png',
    link: 'https://samdarshi-foundation.vercel.app/',
    isRestricted: false
  },
  { 
    title: 'AETHER PERPETUAL', 
    category: 'SMM Ecosystem', 
    desc: 'Editorial vertical content and distribution strategy for an ultra-luxury minimalist watch collective.', 
    color: 'from-primary/30',
    image: '/hero-bg.png',
    isRestricted: false
  },
  { 
    title: 'VANGUARD OS', 
    category: 'Digital System', 
    desc: 'Full-stack design and development of an immersive, interactive operating system for creative studios.', 
    color: 'from-secondary-areion/30',
    image: '/tech.png',
    isRestricted: false
  },
  { 
    title: 'SEO ENGINE ARCHITECTURE', 
    category: 'Technical SEO', 
    desc: 'Semantic indexing and technical optimization for a global enterprise, achieving 400% organic growth in 90 days.', 
    color: 'from-primary/10',
    image: '/tech.png',
    isRestricted: false
  },
];

export default function PortfolioPage() {
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
    gsap.from(".portfolio-header", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    const items = gsap.utils.toArray(".portfolio-item");
    items.forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="overflow-hidden">
      <WebsitePreviewModal 
        isOpen={preview.isOpen}
        onClose={() => setPreview({ ...preview, isOpen: false })}
        url={preview.url}
        title={preview.title}
        isRestricted={preview.isRestricted}
      />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="portfolio-header max-w-4xl mb-32">
          <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Artifacts</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-black tracking-tighter leading-[0.9] mb-8 text-on-background">
            THE PREMIUM <br /> <span className="text-gradient">WEBSITE PORTFOLIO.</span>
          </h1>
          <p className="text-lg text-on-background/60 leading-relaxed max-w-2xl font-manrope">
            A showcase of high-performance digital artifacts, ranging from viral creative content to robust technical infrastructure.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {projects.map((project, i) => (
             <div 
               key={i} 
               onClick={() => openPreview(project.link || '', project.title, project.isRestricted)}
               className="portfolio-item group cursor-pointer block"
             >
                <div className="relative aspect-[16/11] rounded-[3.5rem] overflow-hidden border border-slate-100 bg-slate-50 mb-8 transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-xl">
                   <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-20`}></div>
                   <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7l10 10M17 7V17H7"/></svg>
                      </div>
                   </div>
                </div>
                <div>
                   <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">{project.category}</span>
                   <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold tracking-tight mb-4 transition-colors group-hover:text-primary text-on-background">{project.title}</h3>
                   <p className="text-on-background/60 leading-relaxed font-manrope text-sm max-w-lg">{project.desc}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Bottom CTA */}
        <section className="mt-60 text-center reveal-section bg-slate-50 py-24 rounded-[4rem] border border-slate-100 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#C04AE208_0%,transparent_60% )]"></div>
           <h2 className="text-4xl md:text-6xl font-space-grotesk font-black tracking-tighter mb-12 text-on-background">READY TO ACCELERATE?</h2>
           <Link 
              href="/contact" 
              className="kinetic-gradient inline-block px-12 py-6 rounded-full text-base font-space-grotesk font-black uppercase tracking-widest text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
            >
              Start Your Project
            </Link>
        </section>
      </div>
    </div>
  );
}
