'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Map,
  Code2,
  FlaskConical,
  ArrowRight,
  Lightbulb
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

const mvpPath = [
  {
    phase: '1. Discovery',
    description: 'Users, problem, assumptions and constraints.',
    icon: Target
  },
  {
    phase: '2. Scope',
    description: 'Must-have journeys, data, integrations and acceptance criteria.',
    icon: Map
  },
  {
    phase: '3. Prototype',
    description: 'Validate important interaction choices before engineering.',
    icon: FigmaIcon
  },
  {
    phase: '4. Build',
    description: 'Deliver the smallest coherent release that can test the product premise.',
    icon: Code2
  },
  {
    phase: '5. Release & learn',
    description: 'Collect feedback and convert what you learn into the next roadmap decision.',
    icon: FlaskConical
  }
];

export default function MvpClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="MVP Development"
        title={<>MVP Development for Startups & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">New Digital Products</span></>}
        description="An MVP should reduce uncertainty—not simply reduce the feature list. We help teams identify what the first release must prove, then design and build a focused product that can be tested with real users."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Scope Your MVP", href: "/contact" },
          { label: "Explore Product Engineering", href: "/product-engineering" }
        ]}
      />

      {/* Problem & Funnel Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Text */}
            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                A useful MVP answers a question
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground leading-relaxed mb-6"
              >
                Before estimating screens, we define the customer problem, target user, critical journey and the assumptions that create the most risk.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground font-medium leading-relaxed"
              >
                That gives the first release a job: validate a behavior, workflow or commercial premise that matters to the product roadmap.
              </motion.p>
            </div>

            {/* Right Side: Generated Scope Funnel Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/mvp_scope_funnel.png"
                  alt="MVP Scope Funnel mapping problem to roadmap"
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

      {/* Our MVP Path (Timeline) */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 -translate-y-1/2" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Our MVP path
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {mvpPath.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-24 pb-16 last:pb-0 group"
              >
                {/* Timeline Line */}
                {index !== mvpPath.length - 1 && (
                  <div className="absolute left-6 md:left-[3.25rem] top-12 bottom-0 w-px bg-border group-hover:bg-primary/20 transition-colors" />
                )}

                {/* Timeline Node/Icon */}
                <div className="absolute left-0 md:left-6 top-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center text-primary shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 z-10">
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-serif">
                    {step.phase}
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution & CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-foreground to-primary flex items-center justify-center p-12 text-center"
              >
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                    Ready to build?
                  </h3>
                  <p className="text-white/80 text-lg mb-10 max-w-md">
                    Let's identify the assumptions that create risk and scope the perfect MVP to test them.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-bold text-primary transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-background/90"
                  >
                    Discuss Your Product Idea
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Think beyond version one
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground leading-relaxed mb-6"
              >
                We make deliberate trade-offs in an MVP, but we also identify which shortcuts are temporary and which architectural decisions will be expensive to reverse.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-foreground font-medium leading-relaxed"
              >
                That makes the next phase a planned evolution rather than an emergency rewrite.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
