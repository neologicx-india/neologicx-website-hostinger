'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Settings, Users, FileText, Blocks, Target, Building2, ShoppingBag, GraduationCap, MessagesSquare, Code2 } from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';

const solutions = [
  {
    title: 'Construction Operations',
    description: 'Coordinate multiple sites, material movement, workforce records, petty expenses and vendor payments from a shared operational view.',
    icon: Building2,
    image: '/images/solution_construction.png',
    features: ['Multi-site Coordination', 'Workforce & Expense Tracking', 'Vendor Management'],
    targetUser: 'Site Managers & Operations Directors',
    href: '/construction-software-mobileapp'
  },
  {
    title: 'Complaint Management',
    description: 'Capture customer issues, categorize and prioritize complaints, track resolution and keep customers informed through structured notifications.',
    icon: MessagesSquare,
    image: '/images/solution_complaint.png',
    features: ['Structured Ticketing', 'Priority Routing', 'Automated Notifications'],
    targetUser: 'Customer Support & Success Teams',
    href: '/complaint-management-software'
  },
  {
    title: 'Distributor-Retailer Order Management',
    description: 'Centralize order intake, inventory visibility, fulfillment status, shipping/returns workflows and connected reporting.',
    icon: ShoppingBag,
    image: '/images/solution_order.png',
    features: ['Centralized Order Intake', 'Inventory Visibility', 'Fulfillment Workflows'],
    targetUser: 'Supply Chain & Sales Operations',
    href: '/order-management-system'
  },
  {
    title: 'School Management',
    description: 'Admissions, attendance, academic records, fees, communications and parent/teacher workflows.',
    icon: GraduationCap,
    image: '/images/solution_school.png',
    features: ['Admissions & Fees', 'Academic Records', 'Parent-Teacher Communication'],
    targetUser: 'School Administrators & Teachers',
    conditional: true, // Display conditionally based on the spec
    href: '/school-management-software'
  }
];

export default function ProductsClient() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <PageHero
        badge="Solutions Hub"
        title={<>Configurable Software Solutions Built Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Real Workflows</span></>}
        description="Some business problems do not need to start from a blank page. Neologicx has developed reusable foundations for recurring operational needs that can be configured around your users, approvals, reporting and integrations."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: 'Request a Walkthrough', href: '/contact' },
          { label: 'Discuss a Custom Requirement', href: '/contact' }
        ]}
      />

      {/* Solutions Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all flex flex-col h-full"
              >
                {/* Absolute link to make the whole card clickable */}
                <Link href={solution.href} className="absolute inset-0 z-10" aria-hidden="true" />

                {/* Conditional Badge */}
                {solution.conditional && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-yellow-500/90 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                    Beta / Conditional
                  </div>
                )}

                {/* Image Header */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted/20">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    priority
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

                  {/* Floating Icon */}
                  <div className="absolute bottom-6 left-6 w-14 h-14 bg-background rounded-2xl flex items-center justify-center border border-border/50 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="mt-auto space-y-6 pt-6 border-t border-border/50">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">Workflow Scope</span>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">Target User</span>
                      <p className="text-sm text-foreground font-semibold flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        {solution.targetUser}
                      </p>
                    </div>

                    <Link
                      href={solution.href}
                      className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all mt-4 relative z-20"
                    >
                      View Solution Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="py-24 bg-card relative overflow-hidden border-t border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                Configuration, not a one-size-fits-all promise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A solution foundation can shorten discovery and development, but your roles, approvals, integrations, reports and deployment environment still matter. We begin with a fit assessment, identify what can be reused, and make the customization boundary explicit before implementation.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { icon: Target, title: 'Fit Assessment', desc: 'Evaluating gaps between the foundation and your operations.' },
                  { icon: Blocks, title: 'Customization Boundaries', desc: 'Clear scope on what is reused vs. built from scratch.' },
                  { icon: Settings, title: 'Workflow Adaptation', desc: 'Tuning roles, approvals, and reporting to match your team.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 p-4 rounded-2xl bg-background border border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl group"
            >
              <Image
                src="/slide33.png"
                alt="Software Configuration and Integration"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Software CTA Section */}
      <CTASection
        title="Need something more specific?"
        description="Our custom software team also builds ERP-style operations platforms, CRM workflows, portals and industry-specific systems when a configurable foundation is not the right fit."
        ctaText="Explore Custom Software Development"
        ctaLink="/custom-software-development"
      />
    </div>
  );
}
