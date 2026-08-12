'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  Landmark,
  LayoutDashboard,
  RefreshCw,
  ArrowRight,
  Monitor,
  Code2,
  Server
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';
import Image from 'next/image';

const capabilities = [
  {
    title: 'Business Web Applications',
    description: 'Role-based applications for internal operations, approvals, reporting and cross-team workflows.',
    icon: Briefcase
  },
  {
    title: 'Customer & Partner Portals',
    description: 'Secure experiences for customers, vendors, members or partners to access information, transactions and services.',
    icon: Users
  },
  {
    title: 'Institutional Web Platforms',
    description: 'Structured, content-rich platforms for universities, public institutions and organizations with complex information architecture.',
    icon: Landmark
  },
  {
    title: 'Dashboards & Administration',
    description: 'Operational views and admin tools for managing content, users, transactions, exceptions and reporting.',
    icon: LayoutDashboard
  },
  {
    title: 'Modernization',
    description: 'Incremental redesign, architecture and performance improvements for web applications that have outgrown their original implementation.',
    icon: RefreshCw
  }
];

export default function WebDevelopmentClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Web Application Development"
        title={<>Custom Web Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Development</span></>}
        description="We build web platforms that do more than publish pages—customer portals, operational systems, dashboards, institutional platforms and digital products designed around users, data and integrations."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your Web Platform", href: "/contact" },
          { label: "View Web Case Studies", href: "/portfolio" }
        ]}
      />

      {/* What we build */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              What we build
            </h2>
            <p className="text-lg text-muted-foreground">
              Robust web applications designed for operational efficiency and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col ${idx >= 3 ? 'lg:col-span-1.5' : ''}`}
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

      {/* Designed as a system */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-8 leading-tight"
              >
                Designed as a system, not a <span className="text-primary">collection of pages</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Good web engineering starts with content or data models, user roles, key workflows, integrations, performance needs and the way the application will be operated after launch. The interface should make that underlying system easier to use—not hide complexity behind visual effects.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground px-4 py-2 rounded-full border border-border bg-background">
                  <Monitor className="w-4 h-4 text-primary" />
                  Dashboards
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground px-4 py-2 rounded-full border border-border bg-background">
                  <Users className="w-4 h-4 text-primary" />
                  Portals
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl"
              >
                <Image
                  src="/images/system_architecture.png"
                  alt="System Architecture and Dashboards"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology approach */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[120px] -z-10" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8"
            >
              <Code2 className="w-4 h-4" />
              Technology Approach
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-8"
            >
              Built for long-term maintainability
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-12"
            >
              We choose the implementation around the product's requirements and your team's long-term maintainability. For the new Neologicx capability presentation, the engineering team should approve the exact current stack before publishing named frameworks and cloud platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-6 text-muted-foreground"
            >
              <div className="w-16 h-16 rounded-full border border-border/50 bg-card/50 flex items-center justify-center shadow-sm">
                <Server className="w-6 h-6" />
              </div>
              <div className="w-16 h-16 rounded-full border border-border/50 bg-card/50 flex items-center justify-center shadow-sm">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="w-16 h-16 rounded-full border border-border/50 bg-card/50 flex items-center justify-center shadow-sm">
                <Monitor className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        title="Start with a Technical Discovery"
        description="Let's discuss how we can engineer your custom web platform."
        ctaText="Start with a Technical Discovery"
        ctaLink="/contact"
      />
    </main>
  );
}
