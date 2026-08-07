import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="w-full py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[400px] h-[400px] bg-black opacity-10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          Have a product, platform or process that needs better software?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tell us what you are trying to improve. We will help you identify the right starting point and a 
          practical path to delivery.
        </p>
        
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-black/10 group"
        >
          Discuss Your Project
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
