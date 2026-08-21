'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Globe2, MessageSquare, Clock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Delivering across UK, Singapore and beyond."
  },
  {
    icon: Clock,
    title: "Planned Overlap",
    description: "Strategic syncs for the conversations that matter."
  },
  {
    icon: MessageSquare,
    title: "Clear Visibility",
    description: "Documented decisions and transparent progress."
  },
  {
    icon: MapPin,
    title: "Delivery Base",
    description: "Anchored in Bikaner, Rajasthan, India."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15
    }
  }
};

export default function GlobalDelivery() {
  return (
    <section className="relative w-full py-28 bg-background border-b border-border/50 overflow-hidden">
      {/* Dynamic Background Ambient Lighting */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
              Working with teams beyond our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">time zone</span>
            </h2>
            <div className="h-1.5 w-16 bg-primary rounded-full mb-8"></div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              A good offshore relationship depends on visibility, not proximity. We structure projects around 
              agreed milestones, documented decisions, shared project communication and planned overlap for 
              the conversations that matter. Engagements can be shaped around a defined scope, an ongoing 
              product team or time-and-materials delivery.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="group flex flex-col items-start gap-4 p-5 rounded-2xl hover:bg-card border border-transparent hover:border-border/50 hover:shadow-lg transition-all duration-300 -m-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 relative w-full h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-border/50"
          >
             {/* Glow behind image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 mix-blend-overlay z-10 pointer-events-none"></div>
             
             <Image
               src="/images/global_delivery.png"
               alt="Global Delivery and Remote Offshore Teams"
               fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
               priority
             />

             {/* Overlay gradient to blend nicely with layout */}
             <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
