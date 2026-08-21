'use client';

import { motion } from 'framer-motion';
import {
  Network,
  Users,
  LayoutDashboard,
  BarChart3,
  Zap,
  ArrowRight,
  Factory,
  HardHat,
  Scale,
  GraduationCap,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';
import Image from 'next/image';

const capabilities = [
  {
    title: 'Operations & ERP-style Platforms',
    description: 'Connect processes such as procurement, inventory, production, billing, projects, documents and approvals according to the way your organization runs.',
    icon: Network
  },
  {
    title: 'CRM & Customer Workflows',
    description: 'Bring leads, accounts, conversations, tasks, service requests, pipeline stages and reporting into a workflow your team can actually adopt.',
    icon: Users
  },
  {
    title: 'Portals & Role-based Systems',
    description: 'Give staff, customers, vendors, members or partners the right information and actions based on their role.',
    icon: ShieldCheck
  },
  {
    title: 'Dashboards & Reporting',
    description: 'Turn operational data into views that help teams monitor status, exceptions and work that needs attention.',
    icon: BarChart3
  },
  {
    title: 'Integrations & Automation',
    description: 'Connect payments, messaging, email, vendors, logistics and existing applications so people are not re-entering the same information across systems.',
    icon: Zap
  }
];

const portfolioExamples = [
  {
    title: 'Manufacturing Operations',
    description: 'Milk collection, inventory, billing and production tracking in a connected web/mobile workflow.',
    icon: Factory,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    title: 'Engineering & Consultancy',
    description: 'Project planning, procurement, documentation, shipping, approvals and cross-department visibility.',
    icon: HardHat,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Legal Case Management',
    description: 'Centralized case records, cause-list workflows, team allocation and mobile updates.',
    icon: Scale,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  },
  {
    title: 'Institute Operations',
    description: 'Inquiries, counseling, tutor availability and matching, scheduling, enrollment, attendance and content workflows.',
    icon: GraduationCap,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  }
];

export default function CustomSoftwareClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Custom Software Development"
        title={<>Custom Software Development for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Complex Business Workflows</span></>}
        description="When spreadsheets, disconnected tools or generic software create more work than they remove, custom software can bring the workflow, data and decisions into one coherent system."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Map Your Workflow", href: "/contact" },
          { label: "View Business Software Work", href: "#portfolio" }
        ]}
      />

      {/* Software shaped around your operations */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Software shaped around your operations
            </h2>
            <p className="text-lg text-muted-foreground">
              We engineer custom applications that fit your unique business model, not the other way around.
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
      {/* Examples from our portfolio */}
      <section id="portfolio" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Examples from our portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              Proven operational workflows and system maps across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioExamples.map((example, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex items-start gap-6"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${example.bg} ${example.color} group-hover:scale-110 transition-transform duration-300`}>
                  <example.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-serif group-hover:text-primary transition-colors">
                    {example.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Modernize without losing business knowledge */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl"
              >
                <Image
                  src="/iso2.png"
                  alt="System Maps and Workflows"
                  fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover mix-blend-multiply bg-background"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-10">
                  <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-xl max-w-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Workflow className="w-6 h-6 text-primary" />
                      <h4 className="font-bold text-foreground">Workflow Mapping</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We identify what should be retained and stage the migration around business risk.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-8 leading-tight"
              >
                Modernize without losing <span className="text-primary">business knowledge</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                If an existing system already contains years of process knowledge, replacement should be planned carefully. We can map current workflows, dependencies and data, identify what should be retained, and stage the migration around business risk.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  Discuss Your Current System
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>




    </main>
  );
}
