'use client';

import { motion } from 'framer-motion';
import {
  Settings,
  Package,
  FolderKanban,
  Receipt,
  Users,
  PieChart,
  ArrowRight,
  Database,
  CheckCircle2
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const workflowAreas = [
  {
    title: 'Operations & Production',
    description: 'Production tracking, operational status, resource movement and process visibility matched to the business.',
    icon: Settings
  },
  {
    title: 'Inventory, Procurement & Vendors',
    description: 'Purchasing, materials, stock, vendor activity and approvals connected to downstream work.',
    icon: Package
  },
  {
    title: 'Projects & Documentation',
    description: 'Planning, milestones, documents, shipping/logistics and cross-department status for project-driven organizations.',
    icon: FolderKanban
  },
  {
    title: 'Billing & Financial Workflows',
    description: 'Operational billing, expenses, collections or approvals where they form part of the solution scope.',
    icon: Receipt
  },
  {
    title: 'Workforce & HR Workflows',
    description: 'Attendance, leave, performance or workforce administration where a business system needs these functions.',
    icon: Users
  },
  {
    title: 'Dashboards & Reporting',
    description: 'Role-specific operational visibility, status, exceptions and reports built from the shared workflow data.',
    icon: PieChart
  }
];

const portfolioExamples = [
  {
    title: 'Manufacturing',
    description: 'Mobile milk collection plus inventory, billing and production tracking.'
  },
  {
    title: 'Engineering & consultancy',
    description: 'Project planning, procurement, documentation, shipping, role-based approvals and status visibility.'
  },
  {
    title: 'Institute operations',
    description: 'Inquiry, counseling, tutor pool, scheduling, enrollment and attendance.'
  },
  {
    title: 'Legal case management',
    description: 'Case records, cause-list workflows, client/team coordination and daily updates.'
  },
  {
    title: 'Club management',
    description: 'Member services, facilities, bookings, usage charges and monthly billing.'
  }
];

export default function ErpClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Business Software"
        title={<>Custom Business Software & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">ERP Development</span></>}
        description="Bring disconnected operational processes into software designed around your roles, approvals and information flow—from inventory and production to projects, documents, workforce workflows and reporting."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your Operations", href: "/contact" },
          { label: "View Business Software Examples", href: "/portfolio" }
        ]}
      />

      {/* Workflow Areas Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Typical workflow areas
            </h2>
            <p className="text-lg text-foreground">
              Modular capabilities designed for your exact operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {area.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Core, Portfolio & CTA Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">

          <div className="flex flex-col lg:flex-row gap-16 items-start mb-0">
            {/* Left Side: Text and Portfolio */}
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                <Database className="w-8 h-8" />
              </div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Replace spreadsheets <span className="text-primary">in stages</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground leading-relaxed mb-6"
              >
                Business software succeeds when the rollout respects the people and processes already doing the work.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-12"
              >
                We can prioritize the highest-friction workflow first, integrate what must remain, and expand the system as adoption and requirements become clearer.
              </motion.p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-6 border-b border-border/50 pb-4">
                  Portfolio examples
                </h3>
                <div className="flex flex-col gap-6">
                  {portfolioExamples.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex gap-4 items-start"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-primary/90 shadow-primary/20"
                >
                  Map Your Business Workflow
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated Data Core Image */}
            <div className="w-full lg:w-1/2 sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/erp_data_core.png"
                  alt="Custom ERP Data Core with Manufacturing and Engineering Modules"
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
