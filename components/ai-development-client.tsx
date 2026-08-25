'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  MessageSquare,
  Workflow,
  FileText,
  Sparkles,
  Bot,
  ArrowRight,
  CheckCircle2,
  Quote,
  ShieldCheck
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';
import Image from 'next/image';

const capabilities = [
  {
    title: 'AI Knowledge Assistants',
    description: 'Assistants grounded in approved company documents, policies, manuals and knowledge bases.',
    icon: BookOpen
  },
  {
    title: 'Customer Support AI',
    description: 'Conversational systems for answering questions, classifying requests, drafting responses and escalating complex cases.',
    icon: MessageSquare
  },
  {
    title: 'AI Workflow Automation',
    description: 'Workflows that interpret unstructured information, trigger controlled actions and connect with existing business systems.',
    icon: Workflow
  },
  {
    title: 'Intelligent Document Processing',
    description: 'Extract, classify, summarize and route information from forms, invoices, applications and other documents.',
    icon: FileText
  },
  {
    title: 'AI Features for Existing Software',
    description: 'Add search, recommendations, summarization or intelligent assistance to web, mobile, SaaS, CRM and ERP platforms.',
    icon: Sparkles
  },
  {
    title: 'AI Agents & System Integration',
    description: 'Connect AI with approved APIs and tools so it can retrieve information or perform controlled actions.',
    icon: Bot
  }
];

const flowSteps = [
  {
    title: 'Understand Intent',
    description: 'Interpret user questions, unstructured emails or incoming documents using natural language processing.'
  },
  {
    title: 'Retrieve Grounding Data',
    description: 'Fetch approved facts from your private knowledge base, APIs or existing software systems.'
  },
  {
    title: 'Process & Generate',
    description: 'Synthesize the retrieved information into a helpful response, summary or structured data object.'
  },
  {
    title: 'Execute & Escalate',
    description: 'Trigger a downstream workflow, update a system of record or escalate to a human reviewer.'
  }
];

export default function AiDevelopmentClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="AI & Intelligent Automation"
        title={<>AI Solutions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Intelligent Automation</span></>}
        description="Turn business knowledge, documents and repetitive processes into useful AI-enabled experiences. We build intelligent assistants and connected workflows that work with your existing applications, APIs and business data."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your AI Use Case", href: "/contact" },
          { label: "Explore Our AI Work", href: "/portfolio" }
        ]}
      />

      {/* Intro & Principle Callout */}
      <section className="py-24 relative overflow-hidden bg-muted/10 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl group"
              >
                <Image
                  src="/images/practical_ai_business.png"
                  alt="Practical AI for Business Operations"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
              </motion.div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 w-fit"
              >
                <Sparkles className="w-4 h-4" />
                <span>Our Engineering Principle</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-8 leading-tight"
              >
                Practical AI for <span className="text-primary">Business Operations</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative p-8 md:p-10 bg-background border-l-4 border-primary shadow-lg rounded-r-3xl rounded-bl-xl mt-4"
              >
                <Quote className="absolute -top-5 -left-5 w-10 h-10 text-primary/20 rotate-180 bg-background rounded-full p-1" />
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed italic relative z-10">
                  "Not every process needs AI. Combine deterministic business rules, software integrations and AI where each adds genuine value. Consequential actions require clearly defined control or human approval."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              AI Capabilities
            </h2>
            <p className="text-lg text-foreground">
              We design and implement AI features that solve specific business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <cap.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {cap.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected AI Flow */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              How Connected AI Works
            </h2>
            <p className="text-lg text-foreground">
              Moving from standalone chatbots to integrated assistants that take action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {flowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 z-10 shadow-lg">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground">{step.description}</p>
                </div>
                {idx < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-primary/20 -z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Panel / Responsible AI */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card rounded-[3rem] p-10 md:p-14 shadow-2xl border border-border/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <ShieldCheck className="w-32 h-32 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 relative z-10 font-serif">
                  Trust, Control & Guardrails
                </h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    'Approved knowledge sources and retrieval grounding where appropriate.',
                    'Role-based access and data boundaries inherited from connected systems.',
                    'Scope limits, fallback responses and human escalation paths.',
                    'Evaluation of representative questions and failure cases before release.',
                    'Logging, monitoring and versioned prompts/configuration where implemented.',
                    'Privacy and sensitive-data review appropriate to the use case.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Responsible <span className="text-primary">AI Implementation</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground leading-relaxed mb-8"
              >
                We do not publish '100% accurate' or 'fully autonomous' claims. Business AI requires verifiable grounding and a clear understanding of its limits.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground leading-relaxed"
              >
                Our approach ensures that any automated action is controlled, measurable, and easily auditable by your human teams. We implement appropriate guardrails to keep interactions within defined operational scopes.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={<>Ready to integrate AI into your <br className="hidden md:block" />workflows?</>}
        description="Let's discuss how intelligent assistants and automated processes can help your team work faster."
        ctaText="Discuss Your AI Use Case"
        ctaLink="/contact"
      />
    </main>
  );
}
