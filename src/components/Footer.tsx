import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-space-grotesk font-bold tracking-tighter text-on-background mb-6 block">
              AREION<span className="text-primary">.</span>
            </Link>
            <p className="text-on-background/60 max-w-sm mb-8 leading-relaxed">
              The electric fusion of high-performance tech and cinematic creative strategy. We transform brands into digital powerhouses.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <Link href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-on-background/40 hover:border-primary hover:text-primary transition-all">In</Link>
               <Link href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-on-background/40 hover:border-primary hover:text-primary transition-all">Ig</Link>
               <Link href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-on-background/40 hover:border-primary hover:text-primary transition-all">X</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-space-grotesk font-bold uppercase tracking-widest text-on-background mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-on-background/60 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-on-background/60 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/process" className="text-on-background/60 hover:text-primary transition-colors">Process</Link></li>
              <li><Link href="/contact" className="text-on-background/60 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-space-grotesk font-bold uppercase tracking-widest text-on-background mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-on-background/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-on-background/60 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-on-background/60 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-on-background/40">
          <p>© {new Date().getFullYear()} Areion Agency. All rights reserved.</p>
          <p className="font-space-grotesk">EST. 2024 / BERLIN</p>
        </div>
      </div>
    </footer>
  );
}
