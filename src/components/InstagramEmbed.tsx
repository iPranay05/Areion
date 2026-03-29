'use client';

import { useEffect, useRef } from 'react';

interface InstagramEmbedProps {
  url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script if not already present
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="w-full h-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50 flex items-center justify-center">
      <blockquote 
        className="instagram-media w-full" 
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ 
          background: '#FFF', 
          border: '0', 
          borderRadius: '3px', 
          boxShadow: 'none', 
          margin: '0', 
          padding: '0',
          width: '100%' 
        }}
      >
      </blockquote>
    </div>
  );
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
