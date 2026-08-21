'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

const testimonials = [
  {
    id: 1,
    tag: 'EXPERT CARE',
    text: "Ms Pundir is an exceptional doctor. Her expertise in endometriosis and laparoscopic surgery changed my life. She explained every step of the procedure with great patience and care. I couldn't recommend her highly enough.",
    author: 'Anonymous',
    location: 'London',
    initials: 'A',
  },
  {
    id: 2,
    tag: 'IVF SUCCESS',
    text: 'After years of struggling with fertility, meeting Ms Pundir was a turning point. Her tailored approach to our IVF cycle resulted in our beautiful baby girl. She was always compassionate, clear, and reassuring.',
    author: 'Sarah M.',
    location: 'Tunbridge Wells',
    initials: 'SM',
  },
  {
    id: 3,
    tag: 'HIGHLY RECOMMENDED',
    text: 'I felt completely at ease from my first consultation. Ms Pundir took the time to listen to my concerns and thoroughly investigated my symptoms before suggesting surgery. The recovery was quick and the care was outstanding.',
    author: 'Emma T.',
    location: 'Kent',
    initials: 'ET',
  },
  {
    id: 4,
    tag: 'COMPASSIONATE',
    text: 'An incredibly warm and empathetic specialist. Dealing with infertility is emotionally draining, but Ms Pundir and her team made us feel supported every single step of the way. Truly a world-class professional.',
    author: 'Rachel & Tom',
    location: 'Surrey',
    initials: 'RT',
  },
  {
    id: 5,
    tag: 'SURGICAL EXCELLENCE',
    text: "I was very nervous about having a laparoscopy, but Ms Pundir's calm demeanor completely reassured me. The surgery was a success, and the aftercare I received was brilliant. She is a top-tier gynaecologist.",
    author: 'Chloe J.',
    location: 'London',
    initials: 'CJ',
  },
  {
    id: 6,
    tag: 'DEDICATED PROFESSIONAL',
    text: 'Ms Pundir went above and beyond for us. Her attention to detail in diagnosing our recurrent issues was incredible. For the first time, we felt like we were in safe hands. Thank you for everything!',
    author: 'Laura B.',
    location: 'Essex',
    initials: 'LB',
  },
  {
    id: 7,
    tag: 'FERTILITY JOURNEY',
    text: "We are forever grateful to Ms Pundir. She didn't just offer standard protocols; she created a bespoke treatment plan that finally worked for us. Her knowledge of reproductive medicine is second to none.",
    author: 'Katy & James',
    location: 'London',
    initials: 'KJ',
  },
  {
    id: 8,
    tag: 'TRUSTED SPECIALIST',
    text: 'I have been a patient of Ms Pundir for over two years now for ongoing gynaecological issues. She is consistently professional, incredibly knowledgeable, and always takes the time to explain my options clearly.',
    author: 'Anonymous',
    location: 'Tunbridge Wells',
    initials: 'A',
  },
  {
    id: 9,
    tag: 'EXCEPTIONAL SUPPORT',
    text: 'Outstanding experience. From the initial consultation to the successful IVF transfer, Ms Pundir was simply amazing. She gave us realistic expectations while maintaining a positive and encouraging environment.',
    author: 'Sophie L.',
    location: 'Sussex',
    initials: 'SL',
  },
  {
    id: 10,
    tag: 'CLEAR COMMUNICATION',
    text: 'What I appreciated most was her clear communication. She draws diagrams, explains the medical terms in plain English, and ensures you leave the clinic fully understanding your treatment plan.',
    author: 'Hannah W.',
    location: 'London',
    initials: 'HW',
  },
  {
    id: 11,
    tag: 'OUTSTANDING CARE',
    text: 'I cannot thank Ms Pundir enough for her surgical skill. My endometriosis pain had been debilitating for years, but since my surgery, my quality of life has drastically improved. A truly gifted surgeon.',
    author: 'Jessica P.',
    location: 'Kent',
    initials: 'JP',
  },
  {
    id: 12,
    tag: 'OUR MIRACLE',
    text: "Thanks to Ms Pundir's expertise in reproductive health, we are now expecting our first child. She was thorough, empathetic, and always available when we had questions during the delicate early stages.",
    author: 'Anna & Mark',
    location: 'London',
    initials: 'AM',
  }
]

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="testimonials" className="py-[90px] pb-[72px] bg-[#faf7f2] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-[52px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center mb-1">
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-[#DCF2EA] text-[#1E5C45] text-[11px] font-medium tracking-[2.5px] uppercase px-[18px] py-[6px] rounded-full mb-[18px] border border-[#8ECFB8]"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#5BAF8E] shrink-0"></span>
              Real Stories
            </motion.span>
          </div>
          
          <motion.h2 variants={itemVariants} className="text-[30px] md:text-[38px] lg:text-[48px] font-serif font-semibold text-[#2A2118] leading-[1.15] mb-2.5">
            Lives We&apos;ve <em className="italic text-[#C9714A] font-normal">Touched</em>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[15px] text-[#2A2118]/45 tracking-[0.3px]"
          >
            Thousands of families trust us on their journey to parenthood
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="mb-9 relative w-full">
          {/* We use negative margins and padding to hide overflow of cards outside this container but preserve the box-shadows */}
          <div className="-mx-4 -my-12 px-4 py-12 overflow-hidden">
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
                speed={650}
                autoplay={{
                  delay: 3800,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="!py-4"
              >
              {testimonials.map((testimonial, index) => {
                const isPeach = testimonial.id % 2 !== 0;
                return (
                  <SwiperSlide key={testimonial.id} className="h-auto">
                    <div
                      className={`relative h-full bg-white rounded-[24px] px-[28px] pt-[36px] pb-[32px] flex flex-col overflow-hidden transition-all duration-300 group
                        ${isPeach 
                          ? 'border-[1.5px] border-[#C9714A]/20 shadow-[0_4px_24px_rgba(201,113,74,0.07)] hover:shadow-[0_20px_48px_rgba(201,113,74,0.13)] hover:border-[#C9714A]/40 hover:-translate-y-[6px]' 
                          : 'border-[1.5px] border-[#5BAF8E]/25 shadow-[0_4px_24px_rgba(91,175,142,0.09)] hover:shadow-[0_20px_48px_rgba(91,175,142,0.15)] hover:border-[#5BAF8E]/50 hover:-translate-y-[6px]'
                        }`}
                    >
                      {/* Top Gradient Accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        ${isPeach ? 'bg-primary' : 'bg-secondary'}`} 
                      />

                      {/* Bottom Right Blob */}
                      <div className={`absolute -bottom-[30px] -right-[30px] w-[100px] h-[100px] rounded-full pointer-events-none
                        ${isPeach ? 'bg-[#C9714A]/10' : 'bg-[#5BAF8E]/10'}`} 
                      />

                      {/* Badge */}
                      <span className={`absolute top-[22px] right-[22px] font-sans text-[10px] font-semibold tracking-[1.5px] uppercase px-[12px] py-[4px] rounded-full
                        ${isPeach ? 'bg-[#FDF0E8] text-[#8A4A2A] border border-[#E8C0A0]' : 'bg-[#DCF2EA] text-[#1E5C45] border border-[#8ECFB8]'}`}>
                        {testimonial.tag}
                      </span>

                      {/* Quote Mark */}
                      <span className={`font-serif text-[80px] leading-[0.5] mb-[24px] block
                        ${isPeach ? 'text-[#C9714A]/20' : 'text-[#5BAF8E]/20'}`}>
                        &quot;
                      </span>

                      {/* Stars */}
                      <div className="flex gap-[3px] mb-[16px]">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-[14px] h-[14px] bg-[#E8A030]" 
                            style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-[15px] leading-[1.8] text-[#2A2118]/65 font-normal mb-[28px] flex-1">
                        {testimonial.text}
                      </p>

                      {/* Divider */}
                      <div className={`w-[40px] h-[1.5px] rounded-[2px] mt-auto shrink-0
                        ${isPeach ? 'bg-[#C9714A]/30' : 'bg-[#5BAF8E]/40'}`} 
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-5 mt-9">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-[44px] h-[44px] shrink-0 rounded-full bg-white border-[1.5px] border-[#C9714A]/25 flex items-center justify-center text-[#2A2118]/40 shadow-[0_2px_12px_rgba(201,113,74,0.08)] transition-all duration-300 hover:bg-[#FDF0E8] hover:border-[#C9714A] hover:text-[#C9714A] hover:shadow-[0_4px_16px_rgba(201,113,74,0.2)]"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperInstance?.slideToLoop(index)}
                className={`h-[7px] rounded-[4px] border-none p-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  index === activeIndex ? 'w-[28px] bg-[#C9714A]' : 'w-[7px] bg-[#2A2118]/15 hover:bg-[#C9714A]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-[44px] h-[44px] shrink-0 rounded-full bg-white border-[1.5px] border-[#C9714A]/25 flex items-center justify-center text-[#2A2118]/40 shadow-[0_2px_12px_rgba(201,113,74,0.08)] transition-all duration-300 hover:bg-[#FDF0E8] hover:border-[#C9714A] hover:text-[#C9714A] hover:shadow-[0_4px_16px_rgba(201,113,74,0.2)]"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  )
}
