"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioItems = [
  {
    title: "BIKAJI",
    category: "Customer Care & Commerce",
    description: "e-commerce, mobile commerce and a structured customer-care portal with complaint tracking and WhatsApp notifications.",
    link: "/portfolio/bikaji"
  },
  {
    title: "Public Universities",
    category: "Web Platforms & CMS",
    description: "Content-driven web platforms and administration-focused systems for institutions including RAJUVAS and SKRAU.",
    link: "/portfolio/rajuvas"
  },
  {
    title: "The Jazz Café, Reading, UK",
    category: "Operations Platform",
    description: "Restaurant and event management workflows covering bookings, payments and event operations.",
    link: "/portfolio/jazz-cafe"
  },
  {
    title: "ECK–RTU Alumni Connect",
    category: "Mobile App",
    description: "Alumni discovery, events, donations and notifications across Android and iOS.",
    link: "/portfolio/eck-alumni-connect"
  }
];

export default function PortfolioSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full py-24 bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience grounded in real operations</h2>
            <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Our portfolio spans education and public institutions, FMCG and manufacturing, retail and e-commerce, 
              construction, hospitality, events and professional services. The common thread is operational complexity: 
              multiple users, approvals, data, transactions and systems that need to work together.
            </p>
          </div>
          
          {/* Custom Navigation */}
          <div className="flex items-center gap-3">
            <button 
              ref={prevRef}
              className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              ref={nextRef}
              className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // Re-assign navigation elements after init to ensure they bind correctly
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full pb-8"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full flex flex-col bg-background border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                    {item.description}
                  </p>
                  <Link 
                    href={item.link}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
