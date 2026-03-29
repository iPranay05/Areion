"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        setIsScrolled(self.scroll() > 20);
      },
    });
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className={`px-8 py-3 rounded-full flex items-center gap-12 transition-all duration-500 ${
          isScrolled 
            ? "glass-card bg-white/80 scale-95 shadow-xl" 
            : "border border-transparent"
        }`}>
          <Link href="/" className="text-2xl font-space-grotesk font-bold tracking-tighter text-on-background">
            AREION<span className="text-primary">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-sm font-space-grotesk font-bold uppercase tracking-widest text-on-background/60 hover:text-primary transition-colors">Services</Link>
            <Link href="/portfolio" className="text-sm font-space-grotesk font-bold uppercase tracking-widest text-on-background/60 hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/about" className="text-sm font-space-grotesk font-bold uppercase tracking-widest text-on-background/60 hover:text-primary transition-colors">About</Link>
            <Link href="/process" className="text-sm font-space-grotesk font-bold uppercase tracking-widest text-on-background/60 hover:text-primary transition-colors">Process</Link>
          </div>
        </div>

        <Link 
          href="/contact" 
          className="kinetic-gradient px-8 py-3 rounded-full text-sm font-space-grotesk font-bold uppercase tracking-widest text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
