"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 180;
  const content = testimonial.content || "";
  const isLong = content.length > maxLength;
  
  const displayContent = isLong && !isExpanded 
    ? `${content.substring(0, maxLength)}...` 
    : content;

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative group flex flex-col h-full">
      <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300 pointer-events-none">
        <Quote size={64} className="rotate-180" />
      </div>

      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>

      <div className="mb-8 relative z-10 flex-grow">
        <p className="text-left text-foreground/80 text-lg font-medium italic whitespace-pre-wrap">
          "{displayContent}"
        </p>
        {isLong && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary mt-3 text-sm font-semibold hover:underline inline-block focus:outline-none"
          >
            {isExpanded ? 'View less' : 'View more'}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
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
          <h4 className="font-bold text-foreground text-lg leading-tight">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
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

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background">
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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialTestimonials.map((t: any, idx: number) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
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
