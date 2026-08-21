'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface InsightsSliderProps {
  blogs?: any[];
}

export default function InsightsSlider({ blogs = [] }: InsightsSliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full pt-24 bg-muted/10 border-b border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Insights</span>
            </h2>
            <div className="h-1.5 w-16 bg-primary rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our thoughts on software engineering, product design, business strategy, and the future of digital innovation.
            </p>
          </motion.div>

          {/* Custom Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 pb-2"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative -mx-4 sm:mx-0"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
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
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full !pb-12 !pt-4 -mt-4 px-4 sm:px-0"
          >
            {blogs.map((blog, index) => {
              const imageUrl = blog.featuredImage?.url 
                ? (blog.featuredImage.url.startsWith('http') ? blog.featuredImage.url : `http://localhost:1337${blog.featuredImage.url}`)
                : '/images/placeholder.jpg';
                
              const dateObj = new Date(blog.publishedAt || Date.now());
              const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
              
              const categoryName = blog.categories?.[0]?.name || 'Technology';

              return (
                <SwiperSlide key={index} className="h-auto">
                  <div className="h-full group flex flex-col rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden">

                    {/* Image Container */}
                    <div className="relative w-full h-60 overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <Image
                        src={imageUrl}
                        alt={blog.title || 'Blog Post'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-foreground text-xs font-bold tracking-wider uppercase border border-border/50 shadow-sm">
                          {categoryName}
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-8 flex flex-col flex-grow relative">
                      {/* Subtle gradient hover background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{blog.readTime || '5 min read'}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed flex-grow mb-8 line-clamp-3 text-[15px]">
                        {blog.excerpt || 'Read more about this topic...'}
                      </p>

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center text-sm font-bold text-primary mt-auto group/btn"
                      >
                        <span className="relative overflow-hidden flex h-5 items-center">
                          <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">Read Article</span>
                          <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-primary/80">Read Article</span>
                        </span>
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section >
  );
}
