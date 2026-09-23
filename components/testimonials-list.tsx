"use client";

import { motion, Variants } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative group mb-8">
    <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
      <Quote size={64} className="rotate-180" />
    </div>

    <div className="flex items-center gap-1 mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>

    <p className="text-foreground/80 text-lg mb-8 relative z-10 font-medium italic">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-4 mt-auto">
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 relative shrink-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const MarqueeStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    @keyframes marquee-up {
      0% { transform: translateY(0%); }
      100% { transform: translateY(-50%); }
    }
    @keyframes marquee-down {
      0% { transform: translateY(-50%); }
      100% { transform: translateY(0%); }
    }
    .animate-marquee-up {
      animation: marquee-up var(--duration) linear infinite;
    }
    .animate-marquee-down {
      animation: marquee-down var(--duration) linear infinite;
    }
    .pause-on-hover:hover .animate-marquee-up,
    .pause-on-hover:hover .animate-marquee-down {
      animation-play-state: paused !important;
    }
  `}} />
);

const MarqueeColumn = ({ testimonials, duration, reverse = false }: { testimonials: any[], duration: number, reverse?: boolean }) => {
  return (
    <div
      className="relative h-full overflow-hidden flex flex-col pause-on-hover cursor-pointer"
      style={{ "--duration": `${duration}s` } as React.CSSProperties}
    >
      <div className={`flex flex-col w-full ${reverse ? 'animate-marquee-down' : 'animate-marquee-up'}`}>
        <div className="flex flex-col w-full">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`set1-${t.id}-${idx}`} testimonial={t} />
          ))}
        </div>
        <div className="flex flex-col w-full">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`set2-${t.id}-${idx}`} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsList({ initialTestimonials = [] }: { initialTestimonials?: any[] }) {
  if (!initialTestimonials || initialTestimonials.length === 0) {
    return (
      <section className="py-20 md:py-32 relative overflow-hidden bg-background text-center flex flex-col items-center justify-center min-h-[50vh]">
         <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
         <p className="text-lg text-muted-foreground">Check back soon for our client success stories!</p>
      </section>
    );
  }

  const displayTestimonials = initialTestimonials;

  const third = Math.ceil(displayTestimonials.length / 3);
  const col1 = displayTestimonials.slice(0, third);
  const col2 = displayTestimonials.slice(third, third * 2);
  const col3 = displayTestimonials.slice(third * 2);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background">
      <MarqueeStyles />
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 font-semibold text-sm">
            <Star className="w-4 h-4 fill-primary" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Don't just take our word for it
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our partners about how we've helped them transform their business and achieve their technological goals.
          </p>
        </motion.div>

        {/* Desktop Vertical Marquee */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 h-[750px] relative overflow-hidden rounded-3xl p-4">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

          <MarqueeColumn testimonials={col1} duration={40} />
          <MarqueeColumn testimonials={col2} duration={45} reverse />
          <MarqueeColumn testimonials={col3} duration={42} />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Mobile static view */}
        <div className="md:hidden grid grid-cols-1 gap-8 mt-12">
          {displayTestimonials.slice(0, 4).map((t: any) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-muted/50 p-6 md:p-8 rounded-3xl border border-border/50 shadow-sm max-w-4xl mx-auto">
            <div className="flex -space-x-4">
              {[11, 5, 12, 20].map((img, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/150?img=${img}`} alt="User" fill sizes="48px" className="object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-background bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                +50
              </div>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-xl text-foreground">Join our satisfied clients</h3>
              <p className="text-muted-foreground">Ready to start your next project with us?</p>
            </div>
            <Link href="/contact" className="btn-gradient sm:ml-auto whitespace-nowrap">
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
