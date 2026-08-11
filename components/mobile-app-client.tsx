'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Smartphone, 
  Wrench,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Landmark,
  Activity,
  Award
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const capabilities = [
  {
    title: 'Customer & Community Apps',
    description: 'Registration, profiles, discovery, communication, transactions and engagement experiences.',
    icon: Users
  },
  {
    title: 'Field & Operational Apps',
    description: 'Mobile workflows for teams that need to capture, retrieve or update business information away from a desk.',
    icon: Briefcase
  },
  {
    title: 'Connected Mobile Products',
    description: 'Apps integrated with web platforms, APIs, payments, notifications and administration dashboards.',
    icon: Smartphone
  },
  {
    title: 'App Evolution & Maintenance',
    description: 'Release updates, UX improvements, compatibility work and backend/integration changes as the product evolves.',
    icon: Wrench
  }
];

const portfolio = [
  {
    title: 'ECK-RTU Alumni Connect',
    description: 'Alumni discovery, events, donations and notifications on Android and iOS.',
    icon: GraduationCap,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  },
  {
    title: 'Election Commission of India',
    description: 'A mobile service platform consolidating election information and citizen-facing utilities.',
    icon: Landmark,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    title: 'E-Parchi',
    description: 'A Red Cross Society pilot mobile initiative intended to improve access to private medical services for underserved users.',
    icon: Activity,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10'
  },
  {
    title: 'Heritage Olympiad',
    description: 'Culture and heritage learning with quiz-based participation and leaderboards.',
    icon: Award,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  }
];

const deliverySteps = [
  {
    title: 'Strategy & Use Case',
    description: 'Define the mobile use case and what must work offline/online.',
  },
  {
    title: 'Architecture & Integrations',
    description: 'Map the backend, data, notifications, payments and external integrations.',
  },
  {
    title: 'Prototyping & UX',
    description: 'Prototype critical journeys and validate them before full engineering.',
  },
  {
    title: 'Engineering & QA',
    description: 'Build, test on representative devices and prepare store/release assets.',
  },
  {
    title: 'Launch & Evolution',
    description: 'Monitor, maintain and evolve the app after launch.',
  }
];

export default function MobileAppClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Mobile App Development"
        title={<>Mobile App Development for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">iOS, Android & Flutter</span></>}
        description="We design and build mobile applications for customer experiences, public services, communities and field workflows—with the backend, APIs and administration tools needed to make the app useful in real operations."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your Mobile App", href: "/contact" },
          { label: "View Mobile Case Studies", href: "#portfolio" }
        ]}
      />

      {/* Capabilities */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              From the app screen to the system behind it
            </h2>
            <p className="text-lg text-muted-foreground">
              Delivering complete mobile solutions, not just standalone interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex items-start gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <cap.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Mobile Work with Image */}
      <section id="portfolio" className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
                  Selected <span className="text-primary">mobile work</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Transforming field workflows, community engagement, and public services into robust mobile experiences.
                </p>
              </div>

              <div className="space-y-6">
                {portfolio.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center"
              >
                <Image
                  src="/images/mobile_mockups.png"
                  alt="Mobile Portfolio Examples"
                  fill
                  className="object-contain p-8 drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Path Redesigned */}
      <section className="py-24 relative overflow-hidden bg-muted/30">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              A practical mobile delivery path
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology from concept to launch and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col justify-center"
              >
                <div className="absolute -right-4 -top-6 text-[120px] font-black text-muted/20 group-hover:text-primary/5 transition-colors duration-500 pointer-events-none">
                  {idx + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Final CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-3xl p-8 shadow-xl bg-gradient-to-br from-primary to-blue-600 text-primary-foreground flex flex-col justify-center items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4 font-serif">
                  Ready to start?
                </h3>
                <p className="text-primary-foreground/80 mb-8 text-sm">
                  Let's outline the requirements, architecture and roadmap for your next mobile application.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-primary transition-all hover:scale-[1.03] hover:shadow-xl group-hover:bg-background/90"
                >
                  Plan Your Mobile Product
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
