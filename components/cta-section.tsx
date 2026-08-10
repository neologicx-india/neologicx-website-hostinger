import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: React.ReactNode;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function CTASection({
  title = (
    <>
      Have a product, platform or process that needs <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary drop-shadow-lg">better software?</span>
    </>
  ),
  description = "Tell us what you are trying to improve. We will help you identify the right starting point and a practical path to delivery.",
  ctaText = "Discuss Your Project",
  ctaLink = "/contact"
}: CTASectionProps) {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/images/cta.jpg"
          alt="Call to action background"
          fill
          className="object-cover opacity-80"
        />
        {/* Premium Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-600/30 mix-blend-overlay"></div>
        {/* Glow accents */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          {description}
        </p>
        
        <Link 
          href={ctaLink}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-900 border-2 border-transparent rounded-full font-bold text-lg hover:bg-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1 shadow-xl group"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 text-primary" />
        </Link>
      </div>
    </section>
  );
}
