'use client'

import { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import Image from 'next/image'
import { strapiService } from '@/services/strapiService'

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await strapiService.getAllTestimonials();
        const strapiData = res?.data || [];
        
        const mapped = strapiData.map((t: any) => {
          let imageUrl = "/user.png";
          if (t.image && t.image.url) {
            imageUrl = t.image.url.startsWith('http') ? t.image.url : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${t.image.url}`;
          }
          return {
            id: t.id,
            name: t.name || 'Anonymous',
            role: t.role || '',
            content: t.content || '',
            rating: t.rating || 5,
            image: imageUrl
          };
        });
        
        setTestimonials(mapped);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTestimonials();
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  if (isLoading) {
    return <div className="py-20 flex justify-center"><div className="w-8 h-8 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div></div>;
  }

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background font-sans overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center mb-1">
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border border-primary/20"
            >
              <Star className="w-4 h-4 fill-primary" />
              Client Success Stories
            </motion.span>
          </div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Don't just take our word for it
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Hear from our partners about how we've helped them transform their business and achieve their technological goals.
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="mb-10 relative w-full">
          <div className="-mx-4 -my-8 px-4 py-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                speed={800}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={{
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="!py-4"
              >
              {testimonials.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id} className="h-auto">
                    <div className="h-full bg-card border border-border/50 rounded-3xl p-8 flex flex-col hover:shadow-xl hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                      
                      {/* Quote Mark */}
                      <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                        <Quote size={48} className="rotate-180" />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-6 relative z-10">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg leading-relaxed text-foreground/80 font-medium italic mb-8 flex-1 relative z-10">
                        "{testimonial.content}"
                      </p>

                      <div className="w-12 h-1 bg-primary/20 rounded-full mb-6"></div>

                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 relative shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-12 h-12 shrink-0 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground shadow-sm transition-all duration-300 hover:bg-primary/5 hover:border-primary/30 hover:text-primary"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2.5 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperInstance?.slideToLoop(index)}
                className={`h-2 rounded-full border-none p-0 transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-12 h-12 shrink-0 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground shadow-sm transition-all duration-300 hover:bg-primary/5 hover:border-primary/30 hover:text-primary"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}
