'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Factory, ShoppingCart, HardHat, Utensils, Building, Briefcase } from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';

const industries = [
  {
    title: 'Education & Public Institutions',
    description: 'University websites and portals, institute operations, school administration, recruitment workflows, examinations, learning and alumni engagement.',
    icon: GraduationCap,
    example: 'ECK–RTU Alumni Connect, ECI App',
    link: '/portfolio',
  },
  {
    title: 'FMCG & Manufacturing',
    description: 'Customer-care workflows, inventory, billing, production visibility, procurement and operational systems for manufacturing environments.',
    icon: Factory,
    example: 'BIKAJI Customer Care Workflows',
    link: '/portfolio/bikaji',
  },
  {
    title: 'Retail & E-commerce',
    description: 'Commerce platforms, catalogs, payments, orders, inventory and customer-service integrations for brands and retailers.',
    icon: ShoppingCart,
    example: 'E-commerce & Distribution Platforms',
    link: '/portfolio',
  },
  {
    title: 'Construction & Field Operations',
    description: 'Multi-site workflows covering supervisors, materials, workforce records, petty expenses and vendor payments.',
    icon: HardHat,
    example: 'Site Operations Dashboards',
    link: '/products',
  },
  {
    title: 'Hospitality & Events',
    description: 'Restaurant/event booking and management, event marketplaces, online payments, reminders and stakeholder dashboards.',
    icon: Utensils,
    example: 'Event Marketplaces & Booking Engines',
    link: '/portfolio',
  },
  {
    title: 'Professional & Member Organizations',
    description: 'Legal case management, clubs, associations, business directories and member/community platforms.',
    icon: Building,
    example: 'Member Community Platforms',
    link: '/portfolio',
  }
];

export default function IndustriesClient() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <PageHero
        badge="Industries Hub"
        title={<>Software Experience Across <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Operationally Complex Industries</span></>}
        description="Industry knowledge matters most when it helps a team ask better questions. Our experience spans environments where roles, approvals, transactions, reporting and communication need to work reliably across many stakeholders."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: 'View Case Studies', href: '/portfolio' },
          { label: 'Discuss Your Industry', href: '/contact' }
        ]}
      />

      {/* Industries Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground mb-6"
            >
              Where we have worked
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                  <industry.icon className="w-32 h-32 text-primary" />
                </div>

                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-primary/20 group-hover:-translate-y-1 transition-transform duration-300">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {industry.description}
                  </p>

                  <div className="pt-6 border-t border-border/50 mt-auto">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Example Project</p>
                    <Link
                      href={industry.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {industry.example}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-card relative overflow-hidden border-y border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-lg">
              <Briefcase className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">
              Your domain will still be <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">different</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed md:px-12">
              We use prior experience to accelerate discovery, not to assume your process. Every engagement begins by mapping the roles, rules, exceptions, data and integrations that are specific to your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        title={<>Talk Through Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary drop-shadow-lg">Workflow</span></>}
        description="Tell us about the operational challenges in your industry. We will help you identify the right technical approach and a practical path to delivery."
        ctaText="Discuss Your Industry"
      />
    </div>
  );
}
