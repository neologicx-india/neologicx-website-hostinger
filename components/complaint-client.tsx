'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  AlertCircle,
  UserCheck,
  Bell,
  BarChart,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const resolutionFeatures = [
  {
    title: 'Complaint Capture',
    description: 'Create a structured record with the information your team needs to understand and act on the issue.',
    icon: FileText
  },
  {
    title: 'Category & Severity',
    description: 'Classify complaints so teams can prioritize, route and report on recurring types of problems.',
    icon: AlertCircle
  },
  {
    title: 'Ownership & Status',
    description: 'Track who is responsible, what stage the complaint has reached and where follow-up is required.',
    icon: UserCheck
  },
  {
    title: 'Customer Notifications',
    description: 'Keep customers informed through configured notification channels, including WhatsApp workflows where implemented and approved.',
    icon: Bell
  },
  {
    title: 'Administration & Reporting',
    description: 'Use dashboards to review complaint status, categories, patterns and unresolved work.',
    icon: BarChart
  }
];

export default function ComplaintClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Operations Software"
        title={<>Complaint Management Software for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Structured Customer Service</span></>}
        description="Move complaints out of scattered calls, messages and spreadsheets into a workflow where each issue can be captured, categorized, prioritized, assigned, tracked and communicated to the customer."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Request a Walkthrough", href: "/contact" },
          { label: "Discuss Your Complaint Workflow", href: "/contact" }
        ]}
      />

      {/* Resolution Path Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              A clear path from complaint to resolution
            </h2>
            <p className="text-lg text-foreground">
              Structured workflows ensure no customer issue falls through the cracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolutionFeatures.map((feature, idx) => (
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

      {/* FMCG Context & Mockup Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Philosophy & CTA */}
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Proven in an FMCG customer-care context
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-10"
              >
                The portfolio includes a complaint-management portal for BIKAJI in which customers could raise complaints, administrators could categorize and track severity/status, and WhatsApp notifications were used to keep the customer informed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/portfolio/bikaji"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-primary/90 shadow-primary/20"
                >
                  View the BIKAJI Case Study
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated Ticketing Dashboard Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-[4/3] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/complaint_dashboard_mockup.png"
                  alt="Complaint Management Dashboard showing Severity, Category, and Status"
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
