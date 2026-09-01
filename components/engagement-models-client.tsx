'use client';

import { motion } from 'framer-motion';
import { Target, Users, Clock, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';
import Image from 'next/image';

const engagementModels = [
  {
    title: 'Defined Scope',
    description: 'Best when requirements and acceptance criteria are sufficiently clear. Scope, milestones, assumptions and change control are agreed before delivery begins.',
    icon: Target,
  },
  {
    title: 'Dedicated Product Team',
    description: 'Best for products with an ongoing roadmap. A stable team works through prioritized outcomes over successive delivery cycles.',
    icon: Users,
  },
  {
    title: 'Time & Materials',
    description: 'Best when requirements will evolve or discovery is part of the work. Priorities can change while effort and progress remain visible.',
    icon: Clock,
  },
  {
    title: 'Support & Modernization',
    description: 'Best for an existing application that needs maintenance, upgrades, integrations, performance work or a staged modernization plan.',
    icon: Wrench,
  }
];

const kickoffChecklist = [
  'Scope, assumptions, exclusions and acceptance criteria',
  'Team roles and decision owners on both sides',
  'Communication rhythm, demonstrations and escalation path',
  'Source repository, environments and access ownership',
  'Quality, security and release responsibilities appropriate to the project',
  'Documentation, IP/code handover and post-launch support expectations'
];

export default function EngagementModelsClient() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <PageHero
        badge="Engagement Models"
        title={<>A Delivery Model That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Fits the Work</span></>}
        description="A well-structured software engagement makes ownership, priorities, communication and cost easier to manage. We can shape the working model around the maturity of your scope and the continuity your product needs."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: 'Discuss the Right Model', href: '/contact' },
          { label: 'View Our Process', href: '/about-us' }
        ]}
      />

      {/* Ways to Engage Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10 translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Ways to Engage
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the working model that aligns with your project\'s predictability and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:-translate-y-1 transition-transform">
                  <model.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {model.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kickoff Requirements Section */}
      <section className="py-24 bg-card relative overflow-hidden border-t border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                What should be clear before kickoff
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Regardless of the engagement model you choose, aligning on these foundational elements ensures a smooth start and transparent delivery.
              </p>

              <ul className="space-y-4">
                {kickoffChecklist.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-background border border-border/50 items-start"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl"
            >
              <Image
                src="/images/solution_engagement.png"
                alt="Engagement Kickoff Alignment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="py-12 container mx-auto px-6 max-w-7xl">
        <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl border border-border/50">
          <CTASection
            title="Not sure which model fits?"
            description="Start with the uncertainty. If scope is clear, we can discuss a defined delivery plan; if the product is still evolving, a more flexible model is usually more realistic."
            ctaText="Book a Discovery Conversation"
            ctaLink="/contact"
          />
        </div>
      </div>
    </div>
  );
}
