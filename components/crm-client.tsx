'use client';

import { motion } from 'framer-motion';
import {
  UserPlus,
  Users,
  Kanban,
  HeartHandshake,
  BarChart3,
  ArrowRight,
  Workflow
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const lifecycleStages = [
  {
    title: 'Lead & Inquiry Management',
    description: 'Capture, assign, qualify and follow up on inquiries with clear ownership and status.',
    icon: UserPlus
  },
  {
    title: 'Accounts & Contacts',
    description: 'Centralize customer context, activities, documents and the information teams need at the point of work.',
    icon: Users
  },
  {
    title: 'Pipeline & Tasks',
    description: 'Model stages, actions, reminders, approvals and exceptions around your actual sales process.',
    icon: Kanban
  },
  {
    title: 'Service & Complaint Workflows',
    description: 'Connect post-sale support and complaint status to a structured customer record where the use case requires it.',
    icon: HeartHandshake
  },
  {
    title: 'Reporting & Integrations',
    description: 'Create operational views and connect the CRM with messaging, payments, ERP or other business applications.',
    icon: BarChart3
  }
];

export default function CrmClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Custom Software"
        title={<>Custom CRM & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Sales Workflow Automation</span></>}
        description="When a standard CRM creates workarounds instead of adoption, a tailored system can align customer information, tasks, pipeline stages and service workflows with the way your team actually sells and supports."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Map Your CRM Workflow", href: "/contact" },
          { label: "Explore Custom Software", href: "/custom-software-development" }
        ]}
      />

      {/* Lifecycle Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Build around the customer lifecycle
            </h2>
            <p className="text-lg text-foreground">
              A CRM that works the way your business does.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col ${idx >= 3 && idx < 5 ? 'lg:col-span-1.5' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stage.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {stage.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Workflow & CTA Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Philosophy & CTA */}
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                <Workflow className="w-8 h-8" />
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Custom does not have to mean complicated
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground leading-relaxed mb-6"
              >
                The goal is not to reproduce every feature in a large commercial CRM.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-10"
              >
                It is to identify the workflows that matter, remove unnecessary steps and give teams a system they can understand and maintain.
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
                  Discuss Your Current CRM Gaps
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated Workflow Dashboard Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/crm_dashboard_pipeline.png"
                  alt="Custom CRM Dashboard and Workflow Pipeline"
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
