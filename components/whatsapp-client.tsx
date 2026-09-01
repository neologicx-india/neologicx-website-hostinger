'use client';

import { motion } from 'framer-motion';
import { 
  Headset, 
  ShoppingCart, 
  Bell, 
  Network, 
  Bot,
  ArrowRight,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const useCases = [
  {
    title: 'Customer Support',
    description: 'Structure inquiries and complaint workflows, route information to the right team and send relevant status updates.',
    icon: Headset
  },
  {
    title: 'Ordering & Commerce',
    description: 'Support conversational product/order flows and connect them to payments or commerce operations where appropriate.',
    icon: ShoppingCart
  },
  {
    title: 'Transactional Notifications',
    description: 'Send approved workflow notifications triggered by events in your application or business system.',
    icon: Bell
  },
  {
    title: 'System-connected Conversations',
    description: 'Link WhatsApp interactions to CRM, order, complaint or administration workflows instead of managing them as isolated chats.',
    icon: Network
  },
  {
    title: 'Rule-based or AI-assisted Flows',
    description: 'Use deterministic flows where rules matter and AI assistance only where the use case, data and guardrails justify it.',
    icon: Bot
  }
];

const portfolioItems = [
  {
    title: 'BIKAJI complaint management',
    description: 'WhatsApp notifications connected to a structured customer-care workflow.'
  },
  {
    title: 'WhatsApp commerce concept',
    description: 'Ordering, payment and complaint/support journeys through a conversational interface.'
  },
  {
    title: 'Health-worker support chatbot',
    description: 'AI-assisted learning/support concept with explicit guardrails; publish as a separate proof story only after domain/compliance review.'
  }
];

export default function WhatsappClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="WhatsApp Business Platform"
        title={<>WhatsApp Business Platform Integration & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-md">Automation</span></>}
        description="Turn WhatsApp from a standalone inbox into part of the business workflow. We connect customer conversations with ordering, support, notifications, payments and internal systems so the channel can do useful operational work."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss a WhatsApp Workflow", href: "/contact" },
          { label: "Explore Integration Services", href: "/api-development-services" }
        ]}
      />

      {/* Use Cases Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Use cases
            </h2>
            <p className="text-lg text-muted-foreground">
              Connecting conversations to operational outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 group flex flex-col ${idx >= 3 && idx < 5 ? 'lg:col-span-1.5' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <useCase.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Workflow Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Portfolio Text and CTA */}
            <div className="w-full lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-10"
              >
                Evidence from <span className="text-green-600">the portfolio</span>
              </motion.h2>
              
              <div className="flex flex-col gap-8 mb-12">
                {portfolioItems.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-green-700 shadow-green-600/20"
                >
                  Design the Conversation and the Workflow
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated Workflow Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-green-500/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/whatsapp_workflow.png"
                  alt="WhatsApp Business Workflow connected to CRM"
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
