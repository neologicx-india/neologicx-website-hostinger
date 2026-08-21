'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Layers,
  CreditCard,
  BarChart,
  Wrench,
  ArrowRight,
  Server
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const capabilities = [
  {
    title: 'Product & Workflow Definition',
    description: 'Clarify user roles, core jobs, permissions, plan boundaries and the workflows that create value.',
    icon: Users
  },
  {
    title: 'Platform Architecture',
    description: 'Choose data, tenancy and application patterns that fit the product’s current stage and expected growth.',
    icon: Layers
  },
  {
    title: 'Billing & Third-party Integrations',
    description: 'Connect subscription/payment services and the external tools the product requires.',
    icon: CreditCard
  },
  {
    title: 'Administration & Reporting',
    description: 'Give operators the visibility and controls needed to manage users, configuration, exceptions and product activity.',
    icon: BarChart
  },
  {
    title: 'Modernization',
    description: 'Improve older SaaS applications through staged architecture, UX, performance and maintainability work.',
    icon: Wrench
  }
];

export default function SaasDevelopmentClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="SaaS Engineering"
        title={<>SaaS Product Development & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 drop-shadow-md">Modernization</span></>}
        description="Build a SaaS product around the users, roles, workflows and commercial model it actually needs—from an early release through ongoing product evolution."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your SaaS Product", href: "/contact" },
          { label: "Explore Product Engineering", href: "/product-engineering" }
        ]}
      />

      {/* SaaS Capabilities Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              SaaS capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end engineering for scalable multi-tenant platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col ${idx >= 3 && idx < 5 ? 'lg:col-span-1.5' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <cap.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & CTA Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Product Model Text & CTA */}
            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Start with the <span className="text-primary">product model</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                The right SaaS architecture depends on more than expected traffic.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-10"
              >
                Tenant boundaries, permissions, data isolation, billing, integrations, onboarding and support workflows should be understood before engineering decisions harden.
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
                  Plan Your SaaS Architecture
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated Architectural Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/saas_architecture.png"
                  alt="SaaS Platform Architecture Layers"
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
