'use client';

import { motion } from 'framer-motion';
import {
  LayoutTemplate,
  Building2,
  ShoppingCart,
  RefreshCw,
  Wrench,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const wordpressWork = [
  {
    title: 'Custom Content Websites',
    description: 'Information architecture, reusable page components and content models aligned to how editors actually publish.',
    icon: LayoutTemplate
  },
  {
    title: 'Institutional Platforms',
    description: 'Structured public websites for organizations with departments, programs, notices and large content sets.',
    icon: Building2
  },
  {
    title: 'WooCommerce',
    description: 'Product catalogs, checkout, payments and extensions/integrations for suitable commerce use cases.',
    icon: ShoppingCart
  },
  {
    title: 'Migration & Redesign',
    description: 'Move or restructure an existing site while protecting useful content, URLs and search equity.',
    icon: RefreshCw
  },
  {
    title: 'Maintenance & Improvement',
    description: 'Planned updates, compatibility work, performance improvements and content/system enhancements.',
    icon: Wrench
  }
];

export default function WordpressClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Web Development"
        title={<>WordPress & WooCommerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Development</span></>}
        description="For content-led websites and WooCommerce stores, WordPress can be a practical, maintainable choice when the information architecture, content model, performance and update process are designed properly from the start."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Discuss Your WordPress Project", href: "/contact" },
          { label: "Explore Web Applications", href: "/saas-development-services" }
        ]}
      />

      {/* WordPress Work Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              WordPress work
            </h2>
            <p className="text-lg text-foreground">
              Purpose-built solutions for content-heavy and commerce platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wordpressWork.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col ${idx >= 3 && idx < 5 ? 'lg:col-span-1.5' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When NOT to use & CTA Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Philosophy & CTA */}
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mb-8 border border-destructive/20">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                When WordPress is <span className="text-destructive">not the right answer</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-10"
              >
                If the requirement is primarily a workflow-heavy product, complex operational system or deeply integrated application, we will recommend a custom web application instead of forcing the project into a CMS.
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
                  Choose the Right Web Approach
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated CMS Mockup Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/wordpress_cms_mockup.png"
                  alt="Modern Content Management System Mockup"
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
