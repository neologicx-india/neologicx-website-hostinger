'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  Target,
  Layers,
  RefreshCw,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Users,
  Search,
  CheckSquare,
  Wrench,
  TrendingUp
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';
import Image from 'next/image';

const capabilities = [
  {
    title: 'Product Discovery',
    description: 'Clarify users, workflows, product risks, priorities, assumptions and what must be learned before committing to a large build.',
    icon: Search
  },
  {
    title: 'MVP Development',
    description: "Define a focused first release that tests the product's core value without treating 'minimum' as an excuse for fragile engineering.",
    icon: Target
  },
  {
    title: 'SaaS Engineering',
    description: 'Build role-based platforms, subscription/payment integrations, workflows, reporting and APIs around the product\'s operating model.',
    icon: Layers
  },
  {
    title: 'Product Modernization',
    description: 'Improve an existing product through staged UX, architecture, performance, integration and maintainability work rather than an automatic big-bang rewrite.',
    icon: RefreshCw
  },
  {
    title: 'Ongoing Product Delivery',
    description: 'Maintain a prioritized roadmap, ship reviewable increments and continue improving the product after launch.',
    icon: Rocket
  }
];

const productionSteps = [
  'Frame the problem and identify the riskiest assumptions.',
  'Map the primary user journeys, roles and business rules.',
  'Prioritize the release and define acceptance criteria.',
  'Design and build in increments that can be demonstrated and reviewed.',
  'Validate critical flows and integrations before release.',
  'Use feedback and operating data to shape the next roadmap decisions.'
];

const lifecycleStages = [
  { title: 'Discover', icon: Search, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Validate', icon: CheckSquare, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { title: 'Build', icon: Wrench, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { title: 'Scale', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' }
];

export default function ProductEngineeringClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Product Engineering"
        title={<>Product Engineering for SaaS, MVPs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Digital Platforms</span></>}
        description="Turn a product idea, an evolving SaaS platform or an aging digital product into a clear roadmap and a maintainable software system. We can support the full journey from discovery and UX through engineering, release and iteration."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your Product", href: "/contact" },
          { label: "Explore Case Studies", href: "/portfolio" }
        ]}
      />

      {/* Where we can help */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Where we can help
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive product engineering services from concept to scale.
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
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col ${idx === 3 || idx === 4 ? 'lg:col-span-1.5' : ''}`}
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

      {/* Lifecycle Visual */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
            {/* Connecting Line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2 z-0" />

            {lifecycleStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center gap-4 bg-background p-6 rounded-2xl border border-border/50 shadow-sm md:w-48 text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${stage.bg} ${stage.color}`}>
                  <stage.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-foreground text-lg">{stage.title}</h4>
                {idx < lifecycleStages.length - 1 && (
                  <ArrowRight className="md:hidden w-6 h-6 text-muted-foreground mt-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* From idea to production */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-8 leading-tight"
              >
                From idea to <span className="text-primary">production</span>
              </motion.h2>

              <div className="space-y-6">
                {productionSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-foreground/90 font-medium leading-relaxed pt-1">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl"
              >
                <Image
                  src="/images/insights_integration.png"
                  alt="Product Engineering Flow"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-10">
                  <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-xl max-w-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Lightbulb className="w-6 h-6 text-primary" />
                      <h4 className="font-bold text-foreground">Iterative Delivery</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We focus on delivering reviewable increments and actionable feedback loops.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for stakeholders */}
      <section className="py-24 bg-muted/20 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8"
            >
              <Users className="w-4 h-4" />
              Multi-Stakeholder Platforms
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-8"
            >
              Built for products with more than one stakeholder
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-12"
            >
              Our portfolio includes platforms for organizers and attendees, institutions and students, alumni communities, authors and editors, and operational teams with role-based responsibilities. Those projects reinforce an important product lesson: the difficult part is often not the screen—it is the interaction between roles, rules, transactions and information.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {['Event Marketplaces', 'Alumni Platforms', 'Conference Portals'].map((tag, idx) => (
                <div key={idx} className="px-5 py-2.5 rounded-lg bg-background border border-border shadow-sm text-sm font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        title="Plan Your Product Roadmap"
        description="Share your product goals and challenges with our engineering team."
        ctaText="Discuss Your Product"
        ctaLink="/contact"
      />
    </main>
  );
}
