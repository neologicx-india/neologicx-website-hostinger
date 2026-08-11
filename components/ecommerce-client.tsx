'use client';

import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Code,
  CreditCard,
  PackageCheck,
  Wrench,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Store,
  Box
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const capabilities = [
  {
    title: 'Storefront Development',
    description: 'Responsive catalogs, product discovery, cart and checkout experiences aligned to your brand and buying journey.',
    icon: ShoppingCart
  },
  {
    title: 'Platform Engineering',
    description: 'Implementation and customization across Magento Open Source / Adobe Commerce, WooCommerce, Shopify and custom commerce when appropriate.',
    icon: Code
  },
  {
    title: 'Payments & Integrations',
    description: 'Payment gateways and connections to order, inventory, CRM, messaging or other business systems.',
    icon: CreditCard
  },
  {
    title: 'Order & Inventory Workflows',
    description: 'Operational integration after the purchase so teams can manage fulfillment, stock, status and exceptions with less re-entry.',
    icon: PackageCheck
  },
  {
    title: 'Modernization & Support',
    description: 'Platform upgrades, performance work, integration changes and staged improvements for existing commerce operations.',
    icon: Wrench
  }
];

const portfolioBrands = [
  "BIKAJI",
  "Bhikharam Chandmal",
  "Panchranga Garments",
  "Mota's Chips",
  "God's Treat"
];

export default function EcommerceClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="E-commerce Engineering"
        title={<>E-commerce Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Growing Retail & D2C Businesses</span></>}
        description="A commerce site is only one part of the operation. We build and improve storefronts together with the product, payment, order, inventory and integration workflows that keep the business moving after checkout."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your Commerce Platform", href: "/contact" },
          { label: "View E-commerce Work", href: "#portfolio" }
        ]}
      />

      {/* Commerce Capabilities */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Commerce capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end engineering for robust, scalable retail operations.
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
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col ${idx >= 3 ? 'lg:col-span-1.5' : ''}`}
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

      {/* Selected Commerce Experience */}
      <section id="portfolio" className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-background border border-border/50"
              >
                <Image
                  src="/images/ecommerce_mockups.png"
                  alt="E-commerce Storefront Mockups"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-8 leading-tight"
              >
                Selected <span className="text-primary">commerce experience</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Our portfolio includes enterprise and mid-market commerce work for food/FMCG and retail businesses. Present these as evidence of delivered work—not as performance guarantees.
              </motion.p>

              <div className="flex flex-wrap gap-4 mb-10">
                {portfolioBrands.map((brand, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.05) }}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border/50 shadow-sm font-semibold text-foreground"
                  >
                    <Store className="w-4 h-4 text-primary" />
                    {brand}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Browser (WhatsApp) & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center bg-card p-12 md:p-16 rounded-[3rem] border border-border/50 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-primary/5 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-green-500/10 text-green-600 mb-8"
              >
                <MessageCircle className="w-10 h-10" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Beyond the browser
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
              >
                Commerce can also move into conversational channels. Our portfolio includes WhatsApp-based ordering, support and complaint workflows that connect customer conversations to business systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-green-700 shadow-green-600/20"
                >
                  Explore WhatsApp Integration & Automation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
