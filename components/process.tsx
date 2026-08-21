'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Align on the business problem, users, workflows, constraints and success criteria."
  },
  {
    num: "02",
    title: "Define",
    description: "Turn requirements into scope, priorities, architecture and a realistic delivery plan."
  },
  {
    num: "03",
    title: "Design",
    description: "Map user journeys, wireframes and interfaces before expensive rework reaches engineering."
  },
  {
    num: "04",
    title: "Build",
    description: "Develop in reviewable increments with source control, peer review and documented decisions."
  },
  {
    num: "05",
    title: "Validate",
    description: "Test critical flows, integrations, devices and release candidates against agreed acceptance criteria."
  },
  {
    num: "06",
    title: "Launch & improve",
    description: "Deploy, monitor, support and evolve the product as real usage creates new priorities."
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
  hidden: { y: 30, opacity: 0 },
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

export default function Process() {
  return (
    <section className="relative w-full py-28 bg-background overflow-hidden border-b border-border/50">
      {/* Dynamic Background Ambient Lighting */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -left-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            A delivery process designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We follow a structured, transparent, and iterative approach to ensure your project is delivered on time, on budget, and beyond expectations.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative group h-full"
            >
              <div className="h-full relative p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 z-10 overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex flex-col mb-6 relative">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-muted-foreground/10 to-transparent group-hover:from-primary/20 group-hover:to-transparent transition-all duration-500 absolute -top-4 -right-4 pointer-events-none select-none">
                    {step.num}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {step.num}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-[15px] relative z-10 pt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
