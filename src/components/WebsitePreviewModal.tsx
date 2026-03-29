"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface WebsitePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  isRestricted?: boolean;
}

export default function WebsitePreviewModal({ isOpen, onClose, url, title, isRestricted }: WebsitePreviewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        display: "block"
      });
      gsap.fromTo(contentRef.current, 
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power4.out", delay: 0.1 }
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        display: "none"
      });
    }
  }, { dependencies: [isOpen] });

  if (!isOpen && typeof window !== 'undefined') return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] hidden opacity-0"
    >
      <div 
        className="absolute inset-0 bg-on-background/10 backdrop-blur-xl"
        onClick={onClose}
      ></div>
      
      <div 
        ref={contentRef}
        className="absolute inset-4 md:inset-10 bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col border border-slate-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 py-6 bg-slate-50 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <span className="text-sm font-space-grotesk font-bold uppercase tracking-widest text-on-background/40 ml-4">Live Preview</span>
            <span className="text-sm font-space-grotesk font-black text-on-background">{title}</span>
          </div>
          
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-on-background text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 bg-slate-100 relative overflow-hidden">
          {isRestricted ? (
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
              <div className="max-w-md">
                <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="text-3xl font-space-grotesk font-black tracking-tighter mb-4 text-on-background">SECURITY BOUNDARY REACHED.</h3>
                <p className="text-on-background/60 font-manrope leading-relaxed mb-10">
                  This deployment is protected by high-level security protocols that prevent in-page embedding. Experience the full performance on its native production server.
                </p>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="kinetic-gradient inline-block px-10 py-5 rounded-full text-sm font-space-grotesk font-bold uppercase tracking-widest text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
                >
                  Enter Live Site
                </a>
              </div>
            </div>
          ) : (
            <iframe 
              src={url} 
              className="w-full h-full border-none bg-white"
              title={`Preview of ${title}`}
            />
          )}
        </div>

        {/* Modal Footer (Controls) */}
        {!isRestricted && (
          <div className="px-8 py-4 bg-white border-t border-slate-100 flex items-center justify-between">
            <p className="text-[10px] font-space-grotesk font-bold uppercase tracking-[0.2em] text-on-background/40">
              Interactive Preview Mode • Powered by Areion Systems
            </p>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-space-grotesk font-bold uppercase tracking-widest text-primary hover:underline"
            >
              Open in New Tab →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
