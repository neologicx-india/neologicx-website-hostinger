"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Scalable Product Engineering",
    subtitle: "End-to-end SaaS and MVP development tailored for scale.",
    image: "/slide1.png",
    cta: "Explore Engineering",
    link: "/product-engineering"
  },
  {
    id: 2,
    title: "Custom Software Solutions",
    subtitle: "Streamline operations with custom ERPs, CRMs, and business workflows.",
    image: "/slide2.png",
    cta: "View Solutions",
    link: "/custom-software-development"
  },
  {
    id: 3,
    title: "Mobile & Commerce Engineering",
    subtitle: "Seamless mobile experiences and robust e-commerce architectures.",
    image: "/slide3.png",
    cta: "Discover More",
    link: "/mobile-app-development-android-ios-flutter"
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] bg-slate-950 overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' custom-pagination-bullet"></span>';
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                fill 
                className="object-cover object-center" 
                priority={index === 0} 
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/40 md:bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-16">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-2xl"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/30 text-white text-sm font-semibold tracking-wide border border-primary/50 backdrop-blur-md"
                    >
                      Neologicx Engineering
                    </motion.div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <Link 
                        href={slide.link} 
                        className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                      >
                        {slide.cta}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
