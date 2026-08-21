'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Cpu,
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Zap,
  ArrowRight,
  CheckCircle2,
  Bot
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';

const coreCapabilities = [
  {
    title: 'Product Engineering',
    description: 'Discovery, MVP development, SaaS engineering, product modernization and ongoing product enhancement.',
    icon: Cpu,
    href: '/product-engineering'
  },
  {
    title: 'Custom Software Development',
    description: 'Business applications, ERP-style platforms, CRM workflows, operational dashboards, portals and workflow automation.',
    icon: Code2,
    href: '/custom-software-development'
  },
  {
    title: 'Web Application Development',
    description: 'Customer-facing platforms, enterprise portals, institutional websites, content platforms and responsive web applications.',
    icon: Globe,
    href: '/web-development-design-website'
  },
  {
    title: 'Mobile App Development',
    description: 'iOS, Android and Flutter applications for customers, communities, field teams and business operations.',
    icon: Smartphone,
    href: '/mobile-app-development-android-ios-flutter'
  },
  {
    title: 'E-commerce Engineering',
    description: 'Commerce platforms, catalogs, checkout, payments, order and inventory integrations, and platform modernization.',
    icon: ShoppingCart,
    href: '/ecommerce-website-development-shoppingcart'
  },
  {
    title: 'API, Integration & Automation',
    description: 'APIs, webhooks, third-party systems, payments, WhatsApp Business Platform workflows and data synchronization.',
    icon: Zap,
    href: '/api-development-services'
  },
  {
    title: 'AI Solutions & Intelligent Automation',
    description: 'AI knowledge assistants, connected workflows, document intelligence and AI features integrated with business systems.',
    icon: Bot,
    href: '/ai-development-services'
  }
];

const specialistServices = [
  { title: 'SaaS product development and modernization', href: '/saas-development-services' },
  { title: 'MVP development for startups and new initiatives', href: '/mvp-development-startup' },
  { title: 'Custom CRM and sales workflow automation', href: '/crm-development-custom-software' },
  { title: 'Custom business software and ERP development', href: '/custom-erp-software-service' },
  { title: 'WhatsApp Business Platform integration and automation', href: '/whatsapp-chatbot-development' },
  { title: 'WordPress and WooCommerce development for content and commerce use cases', href: '/wordpress-development-services' }
];

const engagementSteps = [
  {
    title: 'Discovery and requirements',
    description: 'users, workflows, priorities, constraints and success criteria.'
  },
  {
    title: 'UX and solution definition',
    description: 'journeys, interfaces, data, integrations and technical approach.'
  },
  {
    title: 'Incremental engineering',
    description: 'reviewable builds, demos and transparent issue tracking.'
  },
  {
    title: 'Quality engineering',
    description: 'functional, integration, device/browser and release validation matched to project risk.'
  },
  {
    title: 'Deployment and support',
    description: 'release planning, production handover, monitoring and agreed maintenance.'
  }
];

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Services Hub"
        title={<>Software Engineering Services from <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Discovery to Support</span></>}
        description="Whether you are validating a new product, replacing a legacy workflow or connecting systems that no longer work well together, we can take responsibility for the path from discovery and UX through engineering, release and ongoing improvement."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your Project", href: "/contact" },
          { label: "View Case Studies", href: "/portfolio" }
        ]}
      />

      {/* Core Capabilities */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
            >
              Core Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Comprehensive engineering services tailored to modern business requirements.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                  <capability.icon className="w-32 h-32 text-primary" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                    <capability.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-8">
                    {capability.description}
                  </p>

                  <Link
                    href={capability.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors mt-auto w-fit group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Services row */}
      <section className="py-24 bg-muted/30 border-y border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              Specialist Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Focused engineering solutions for targeted business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialistServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="flex flex-col h-full justify-between p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <CheckCircle2 className="w-24 h-24 text-primary" />
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex-1 mb-6 font-serif">
                      {service.title}
                    </span>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors mt-auto">
                      Explore service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How an engagement moves */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              How an engagement moves
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured, transparent approach to delivering reliable software solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-border hidden md:block" />

            <div className="space-y-8 relative">
              {engagementSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-8 group"
                >
                  <div className="flex items-center md:items-start gap-4 md:w-14 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center text-xl font-bold text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm z-10 relative">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm group-hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        title={<>Start with the problem, not the service label</>}
        description="If your requirement crosses several categories, that is normal. Share the business goal and current constraints; we will help shape the right combination of product, software, integration and support work."
        ctaText="Tell Us What You Need"
        ctaLink="/contact"
      />
    </main>
  );
}
