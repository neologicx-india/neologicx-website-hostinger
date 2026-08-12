'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Globe2,
  Briefcase,
  Search,
  Eye,
  CheckCircle,
  RefreshCcw,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import PageHero from '@/components/page-hero';

const approachSteps = [
  {
    icon: Search,
    title: "Understand before prescribing",
    description: "We start with users, workflows, constraints and outcomes instead of forcing every problem into the same product template."
  },
  {
    icon: Eye,
    title: "Make complexity visible",
    description: "Flows, roles, data and integrations are mapped early so technical decisions have business context."
  },
  {
    icon: RefreshCcw,
    title: "Deliver in reviewable increments",
    description: "Regular demonstrations and acceptance points make progress easier to evaluate and reduce late surprises."
  },
  {
    icon: FileCheck,
    title: "Build for handover and continuity",
    description: "Documentation, source ownership, access and post-launch support should be agreed as part of the engagement—not discovered at the end."
  },
  {
    icon: CheckCircle,
    title: "Proof should be specific",
    description: "Our new website deliberately avoids claims such as “best,” “top-tier,” “bug-free” or “100% secure.” Instead, explore the case studies to see the business context, workflows and solution scope behind selected projects."
  }
];

export default function AboutClient() {
  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Custom Hero Section for About Page */}
      <div className="relative w-full min-h-[600px] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-[140px] pb-[100px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/about_team.png"
            alt="Neologicx Team"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Lighter dark overlay with minimal blur for better image visibility */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/40 bg-primary/20 backdrop-blur-md"
          >
            <span className="text-sm font-bold tracking-wider text-white uppercase drop-shadow-md">About Neologicx</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-xl leading-tight"
          >
            25+ Years of Building Software <br className="hidden md:block" /> Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-primary drop-shadow-lg">Real Operations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-lg max-w-3xl mb-12"
          >
            Neologicx Resources Pvt Ltd is a software engineering company established in 2000 in Bikaner, Rajasthan, India. We build digital products and business systems for organizations that need technology to fit the way they actually operate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link
              href="/portfolio"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all hover:-translate-y-1"
            >
              Explore Our Work
            </Link>
            <Link
              href="/contact"
              className="bg-white text-slate-900 border-2 border-transparent px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-slate-100 transition-all hover:-translate-y-1"
            >
              Discuss Your Project
            </Link>
          </motion.div>
        </div>

        {/* Glowing Faded Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px] z-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        {/* Evolution & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative flex flex-col p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/20"></div>

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">From websites to connected business platforms</h3>
            <p className="relative z-10 text-foreground leading-relaxed">
              Our work has evolved with the web itself: from content-driven websites and early business applications to mobile products, e-commerce, ERP-style platforms, APIs, automation and SaaS. What has stayed consistent is our focus on solving a concrete business problem before choosing the technology.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative flex flex-col p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/20"></div>

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">Where our experience comes from</h3>
            <p className="relative z-10 text-foreground leading-relaxed">
              Over the years we have worked across public institutions and education, FMCG and manufacturing, retail and e-commerce, construction, hospitality and events, professional services and workforce-focused platforms. That breadth helps us recognize the operational patterns that repeat across industries—while still respecting the details that make each business different.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative flex flex-col p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/20"></div>

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <Globe2 className="w-8 h-8" />
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">Local roots. Global working mindset.</h3>
            <p className="relative z-10 text-foreground leading-relaxed">
              Our delivery base is in Bikaner, India, and our portfolio includes work for organizations in India as well as international engagements such as The Jazz Café in Reading, UK and an event marketplace spanning India and Singapore. For remote engagements, we emphasize clear ownership, documented scope, planned communication and practical time-zone overlap.
            </p>
          </motion.div>
        </div>

        {/* How we approach a project - Timeline Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">How we approach a project</h2>
              <p className="text-foreground leading-relaxed mb-8">
                We believe in transparency, iterative delivery, and grounding every technical decision in a clear business context.
              </p>
              <Image
                src="/images/about_team.png"
                alt="Neologicx Team Bikaner"
                width={600}
                height={400}
                className="rounded-3xl shadow-xl border border-border/50 object-cover"
              />
            </div>

            <div className="w-full md:w-2/3">
              <div className="relative border-l-2 border-primary/20 ml-6 md:ml-8 space-y-12 pb-8">
                {approachSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-10 md:pl-12"
                  >
                    <div className="absolute -left-[25px] top-1 w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-foreground leading-relaxed text-lg">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to explore our work?</h2>
          <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our new website deliberately avoids generic claims. Instead, explore our case studies to see the business context, workflows and solution scope behind selected projects.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            View Case Studies
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}
