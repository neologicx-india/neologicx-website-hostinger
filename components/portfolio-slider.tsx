"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioItems = [
  {
    title: "BIKAJI",
    category: "Customer Care & Commerce",
    description: "e-commerce, mobile commerce and a structured customer-care portal with complaint tracking and WhatsApp notifications.",
    link: "/portfolio/bikaji",
    image: "/images/portfolio/bikaji.png"
  },
  {
    title: "Public Universities",
    category: "Web Platforms & CMS",
    description: "Content-driven web platforms and administration-focused systems for institutions including RAJUVAS and SKRAU.",
    link: "/portfolio/rajuvas",
    image: "/images/portfolio/public_universities.png"
  },
  {
    title: "The Jazz Café, UK",
    category: "Operations Platform",
    description: "Restaurant and event management workflows covering bookings, payments and event operations.",
    link: "/portfolio/jazz-cafe",
    image: "/images/portfolio/jazz_cafe.png"
  },
  {
    title: "ECK–RTU Alumni Connect",
    category: "Mobile App",
    description: "Alumni discovery, events, donations and notifications across Android and iOS.",
    link: "/portfolio/eck-alumni-connect",
    image: "/images/portfolio/alumni_connect.png"
  }
];

export default function PortfolioSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Experience grounded in <span className="text-primary">real operations</span>
            </h2>
            <div className="h-1.5 w-16 bg-primary rounded-full mb-8"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our portfolio spans education and public institutions, FMCG and manufacturing, retail and e-commerce,
              construction, hospitality, events and professional services. The common thread is operational complexity:
              multiple users, approvals, data, transactions and systems that need to work together.
            </p>
          </div>

          {/* Custom Navigation */}
          <div className="flex items-center gap-4 pb-2">
            <button
              ref={prevRef}
              className="w-14 h-14 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              ref={nextRef}
              className="w-14 h-14 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 sm:mx-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 24 },
              1024: { slidesPerView: 2.2, spaceBetween: 32 },
              1280: { slidesPerView: 2.8, spaceBetween: 32 },
            }}
            className="w-full pb-16 px-4 sm:px-0"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <Link href={item.link} className="block h-[450px] group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase mb-4 border border-white/20">
                        {item.category}
                      </span>
                      <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-sm">{item.title}</h3>
                      <p className="text-white/80 leading-relaxed mb-6 line-clamp-3 text-sm md:text-base">
                        {item.description}
                      </p>

                      <div className="inline-flex items-center text-sm font-bold text-white group/btn">
                        <span className="relative overflow-hidden flex h-5 items-center">
                          <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">View Case Study</span>
                          <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-primary-300">View Case Study</span>
                        </span>
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-2 text-primary-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
