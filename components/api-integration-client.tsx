'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Workflow,
  RefreshCw,
  Zap,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';
const capabilities = [
  {
    title: 'API Design & Development',
    description: 'Application interfaces for web, mobile, partner and internal systems with clear data contracts and access rules.',
    icon: Code2
  },
  {
    title: 'Third-party Integrations',
    description: 'Connect payments, messaging, email, vendor, logistics and platform services to the workflows that need them.',
    icon: Workflow
  },
  {
    title: 'Data Synchronization',
    description: 'Move and reconcile information between systems where teams currently depend on exports, re-entry or manual status updates.',
    icon: RefreshCw
  },
  {
    title: 'Webhooks & Event-driven Workflows',
    description: 'Trigger downstream actions when orders, payments, messages or operational states change.',
    icon: Zap
  },
  {
    title: 'Integration Testing & Support',
    description: 'Validate failure paths, retries, permissions and real production edge cases—not only the happy-path API call.',
    icon: ShieldCheck
  }
];

export default function ApiIntegrationClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="API & Integration"
        title={<>API Development, Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Integration & Automation</span></>}
        description="Connect the systems your business already depends on. We design APIs and integration workflows that move data and actions between applications, reduce duplicate manual work and make new digital products possible."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss an Integration", href: "/contact" },
          { label: "Explore WhatsApp Automation", href: "/ecommerce-website-development-shoppingcart" }
        ]}
      />

      {/* Integration Capabilities Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Integration work we can support
            </h2>
            <p className="text-lg text-foreground">
              Robust connections across your entire technical ecosystem.
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
                <p className="text-foreground leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Diagram & Examples Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">

          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Examples from <span className="text-primary">our work</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground leading-relaxed mb-8"
              >
                Our portfolio includes engineering/consultancy workflows connected with vendors, logistics and email, as well as WhatsApp ordering, payment and customer-support flows.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-10"
              >
                These are the kinds of cross-system problems where integration becomes part of the product experience rather than a back-office detail.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-primary/90"
                >
                  Map Your Systems
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Generated Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/api_integration_mockup.png"
                  alt="API System Integration Diagram"
                  fill
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
