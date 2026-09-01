'use client';

import { motion } from 'framer-motion';
import {
  ShoppingCart,
  PackageSearch,
  Truck,
  RotateCcw,
  Plug,
  LineChart,
  ArrowRight,
  GitMerge
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const workflowFeatures = [
  {
    title: 'Order Processing',
    description: 'Capture and manage orders through clear states from placement through fulfillment and delivery.',
    icon: ShoppingCart
  },
  {
    title: 'Inventory Visibility',
    description: 'Connect stock information to order decisions and surface low-stock conditions where configured.',
    icon: PackageSearch
  },
  {
    title: 'Fulfillment & Dispatch',
    description: 'Track processing and shipping status so internal teams and trading partners share the same operational view.',
    icon: Truck
  },
  {
    title: 'Returns',
    description: 'Manage return requests through a defined status workflow where the business process requires it.',
    icon: RotateCcw
  },
  {
    title: 'Connected Systems',
    description: 'Integrate e-commerce, CRM, accounting or other systems when they need to exchange order/customer information.',
    icon: Plug
  },
  {
    title: 'Reporting',
    description: 'Review order volume, status and exceptions through role-appropriate operational reports.',
    icon: LineChart
  }
];

export default function OrderClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Operations Software"
        title={<>Distributor–Retailer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Order Management System</span></>}
        description="Centralize the order lifecycle between distributors and retailers so teams can see orders, stock context, fulfillment status and exceptions without coordinating everything through calls, spreadsheets and disconnected messages."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Request a Product Demo", href: "/contact" },
          { label: "Discuss Your Order Flow", href: "/contact" }
        ]}
      />

      {/* Workflow Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Bring the order lifecycle into one workflow
            </h2>
            <p className="text-lg text-foreground">
              End-to-end visibility from placement to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Model & Mockup Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Philosophy & CTA */}
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                <GitMerge className="w-8 h-8" />
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Fit the system to your channel model
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-10"
              >
                Distributor, dealer and retailer networks differ in pricing, territories, approvals and fulfillment rules. We begin by mapping those rules so the configured product reflects the way orders actually move through your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-primary/90 shadow-primary/20"
                >
                  Map Your Order Workflow
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated Order Dashboard Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-[4/3] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/order_dashboard_mockup.png"
                  alt="Order Management Dashboard showing lifecycle pipeline"
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
