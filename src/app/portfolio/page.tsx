"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import WebsitePreviewModal from "@/components/WebsitePreviewModal";
import InstagramEmbed from "@/components/InstagramEmbed";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProjectType = 'website' | 'video' | 'social';

interface Project {
  title: string;
  category: string;
  type: ProjectType;
  desc: string;
  image: string;
  color: string;
  link: string;
  isRestricted?: boolean;
  videoUrl?: string;
}

const projects: Project[] = [
  { 
    title: 'PRECIOUS PACKAGING', 
    category: 'Websites', 
    type: 'website',
    desc: 'Premium sustainable packaging platform designed to elevate brand identity.', 
    color: 'from-primary/20',
    image: '/precious.png',
    link: 'http://precious-packaging.vercel.app/',
    isRestricted: false
  },
  { 
    title: 'SAMDARSHI FOUNDATION', 
    category: 'Websites', 
    type: 'website',
    desc: 'Empowering communities through health, education, and equality initiatives.', 
    color: 'from-secondary-areion/20',
    image: '/samdarshi.png',
    link: 'https://samdarshi-foundation.vercel.app/',
    isRestricted: false
  },
  { 
    title: 'BLUE ROOF INDIA', 
    category: 'Websites', 
    type: 'website',
    desc: 'Cutting-edge real estate ecosystem for modern property discovery.', 
    color: 'from-primary/20',
    image: '/blueroof.png',
    link: 'https://www.blueroofindia.com/',
    isRestricted: false
  },
  { 
    title: 'WANDER WORLD HOLIDAY', 
    category: 'Websites', 
    type: 'website',
    desc: 'Bespoke travel ecosystem offering dynamic journey planning.', 
    color: 'from-secondary-areion/20',
    image: '/LOGO!.png',
    link: 'https://wander-world-holiday.vercel.app/',
    isRestricted: false
  },
  { 
    title: 'ZON SECURE SERVICES', 
    category: 'Websites', 
    type: 'website',
    desc: 'Integrated facility management and high-security architecture.', 
    color: 'from-primary/10',
    image: '/zonsecure.png',
    link: 'https://zonsecureservices.com/',
    isRestricted: false
  },
  {
    title: 'LUXURY BRANDING REEL',
    category: 'Reel Editing',
    type: 'video',
    desc: 'High-conversion cinematic reel for premium brand storytelling.',
    color: 'from-purple-500/20',
    image: '/reel_thumb.png',
    videoUrl: 'https://www.instagram.com/reel/DWdbEdzjEEt/',
    link: 'https://www.instagram.com/reel/DWdbEdzjEEt/'
  },
  {
    title: 'LIFESTYLE & TRAVEL',
    category: 'Reel Editing',
    type: 'video',
    desc: 'Engaging lifestyle content capturing authentic moments.',
    color: 'from-blue-500/20',
    image: '/reel_thumb.png',
    videoUrl: 'https://www.instagram.com/reel/DV3CBdHDAu-/',
    link: 'https://www.instagram.com/reel/DV3CBdHDAu-/'
  },
  {
    title: 'EVENT SHOWCASE',
    category: 'Reel Editing',
    type: 'video',
    desc: 'Dynamic event coverage with high-energy editing patterns.',
    color: 'from-amber-500/20',
    image: '/reel_thumb.png',
    videoUrl: 'https://www.instagram.com/reel/DVyZIo8ihGd/',
    link: 'https://www.instagram.com/reel/DVyZIo8ihGd/'
  },
  {
    title: 'PRANAY ENTERPRISES',
    category: 'SMM',
    type: 'social',
    desc: 'Comprehensive brand management and audience growth strategy.',
    color: 'from-pink-500/10',
    image: '/pranay.png',
    link: 'https://www.instagram.com/pranayenterpriseskalyan/'
  },
  {
    title: 'INFINITY CLASSES',
    category: 'SMM',
    type: 'social',
    desc: 'Educational brand positioning and consistent content delivery.',
    color: 'from-slate-500/10',
    image: '/infinity.png',
    link: 'https://www.instagram.com/infinity_classes_thane'
  }
];

const categories = ['All', 'Websites', 'Reel Editing', 'SMM'];

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [preview, setPreview] = useState<{ isOpen: boolean; url: string; title: string; isRestricted: boolean }>({
    isOpen: false,
    url: "",
    title: "",
    isRestricted: false
  });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openPreview = (url: string, title: string, type: ProjectType, isRestricted: boolean = false) => {
    if (!url || url === '#') return;
    
    if (type === 'website') {
      setPreview({
        isOpen: true,
        url,
        title,
        isRestricted
      });
    } else {
      window.open(url, '_blank');
    }
  };

  useGSAP(() => {
    // Refresh scroll trigger on filter changes
    ScrollTrigger.refresh();
    
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
  }, { scope: containerRef, dependencies: [activeCategory] });

  return (
    <div ref={containerRef} className="overflow-hidden bg-white">
      <WebsitePreviewModal 
        isOpen={preview.isOpen}
        onClose={() => setPreview({ ...preview, isOpen: false })}
        url={preview.url}
        title={preview.title}
        isRestricted={preview.isRestricted}
      />
      
      <div className="container mx-auto px-6 pt-40 pb-20">
        {/* Header */}
        <div className="portfolio-header max-w-4xl mb-20">
          <span className="text-primary font-space-grotesk font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Artifacts</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-black tracking-tighter leading-[0.9] mb-8 text-on-background">
            THE PREMIUM <br /> <span className="text-gradient">PORTFOLIO.</span>
          </h1>
          <p className="text-lg text-on-background/60 leading-relaxed max-w-2xl font-manrope">
            A diverse collection of digital excellence, from high-performance ecosystems to viral creative storytelling.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-4 mb-20 border-b border-slate-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-space-grotesk font-bold uppercase tracking-widest text-[10px] transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-xl scale-105' 
                : 'bg-slate-50 text-on-background/40 hover:bg-slate-100 hover:text-on-background'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${activeCategory === 'Reels' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8 md:gap-12 transition-all duration-500`}>
           {filteredProjects.map((project, i) => (
             <div 
               key={`${activeCategory}-${i}`} 
               onClick={() => openPreview(project.link, project.title, project.type, project.isRestricted)}
               className="portfolio-item group cursor-pointer block"
             >
                <div className={`relative ${project.type === 'video' ? 'aspect-[9/16]' : project.type === 'social' ? 'aspect-square' : 'aspect-[16/11]'} rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-slate-100 bg-slate-50 mb-6 transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-2xl`}>
                   





                    {project.type === 'video' ? (
                      <div className="absolute inset-0 bg-slate-100 group-hover:shadow-inner transition-all duration-700">
                         {/* Enhanced Video Rendering: Support for both local .mp4 and Live IG Embeds */}
                         {project.videoUrl && (project.videoUrl.startsWith('http') || project.videoUrl.includes('instagram')) ? (
                           <div className="absolute inset-0 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                             <InstagramEmbed url={project.link} />
                           </div>
                         ) : (
                           <>
                             {project.videoUrl ? (
                               <video 
                                 src={project.videoUrl}
                                 poster={project.image}
                                 autoPlay
                                 muted
                                 loop
                                 playsInline
                                 className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 z-10"
                               />
                             ) : null}
                             <Image 
                               src={project.image} 
                               alt={project.title} 
                               fill 
                               className="object-cover opacity-50 z-0"
                             />
                           </>
                         )}
                        
                        {/* Overlay to ensure the card is clickable and has our branding */}
                        <div className="absolute inset-0 z-20 bg-black/0 hover:bg-black/5 transition-colors cursor-pointer" />
                     </div>
                   ) : (
                     <Image 
                       src={project.image} 
                       alt={project.title} 
                       fill 
                       className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                     />
                   )}

                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-20`}></div>
                   
                   {/* Persistent Button Overlay */}
                   <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500">
                      <div className="px-5 py-2.5 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-md shadow-2xl max-w-fit">
                         <span className="text-[9px] font-space-grotesk font-bold text-white uppercase tracking-[0.2em]">
                           {project.type === 'website' ? 'Live Preview' : project.type === 'video' ? 'Watch Reel' : 'View Page'}
                         </span>
                      </div>
                   </div>
                </div>
                <div>
                   <span className="text-on-background/40 font-space-grotesk font-bold uppercase tracking-[0.2em] text-[9px] mb-2 block">{project.category}</span>
                   <h3 className="text-xl md:text-2xl font-space-grotesk font-bold tracking-tight mb-3 transition-colors group-hover:text-primary text-on-background">{project.title}</h3>
                </div>
             </div>
           ))}
        </div>

        {/* Bottom CTA */}
        <section className="mt-60 text-center reveal-section bg-slate-50 py-24 rounded-[4rem] border border-slate-100 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#C04AE208_0%,transparent_60% )]"></div>
           <h2 className="text-4xl md:text-6xl font-space-grotesk font-black tracking-tighter mb-12 text-on-background uppercase">READY TO ACCELERATE?</h2>
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
