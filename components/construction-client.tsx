'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Package,
  HardHat,
  Wallet,
  Landmark,
  ArrowRight,
  Settings
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const operationsFeatures = [
  {
    title: 'Multi-site Visibility',
    description: 'View project/site activity from a centralized administration layer while supervisors work with their assigned site data.',
    icon: Globe
  },
  {
    title: 'Materials',
    description: 'Record and review material supplied, procured or used across sites so operational teams have a consistent trail.',
    icon: Package
  },
  {
    title: 'Workforce Records',
    description: 'Manage attendance and related workforce information such as salary/leave workflows where configured.',
    icon: HardHat
  },
  {
    title: 'Petty Expenses',
    description: 'Capture routine site expenses by category instead of reconstructing them later from cash notes and messages.',
    icon: Wallet
  },
  {
    title: 'Vendors & Payments',
    description: 'Track vendor/subcontractor payment information and project-level expenses in the same operational context.',
    icon: Landmark
  }
];

export default function ConstructionClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Operations Software"
        title={<>Construction Site Operations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Project Control Software</span></>}
        description="Give owners and supervisors a shared operational view across multiple construction sites—covering materials, workforce records, daily expenses and vendor payments without relying on disconnected registers and spreadsheets."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Request a Walkthrough", href: "/contact" },
          { label: "Discuss Your Workflow", href: "/contact" }
        ]}
      />

      {/* Operations Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Built around daily site operations
            </h2>
            <p className="text-lg text-foreground">
              A centralized approach to managing disconnected site activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationsFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col ${idx >= 3 && idx < 5 ? 'lg:col-span-1.5' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Controls & Mockup Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Philosophy & CTA */}
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                <Settings className="w-8 h-8" />
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Configure it around your project controls
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground leading-relaxed mb-6"
              >
                Construction businesses differ in cost heads, approval rules, reporting and responsibility across sites.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-10"
              >
                The implementation begins by mapping your current registers and approvals, then configuring the system around the controls that matter to management and site teams.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-primary/90 shadow-primary/20"
                >
                  See Whether the Solution Fits
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated Construction Dashboard Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-[4/3] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/construction_dashboard_mockup.png"
                  alt="Construction Operations Rugged Dashboard Mockup"
                  fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
