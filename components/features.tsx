'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Layers, 
  Code2, 
  MonitorSmartphone, 
  Smartphone, 
  ShoppingCart, 
  Webhook,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    title: "Product Engineering",
    description: "MVPs, SaaS products and digital platforms built around a clear product roadmap, usable interfaces and an architecture that can evolve.",
    icon: Layers,
    link: "/product-engineering"
  },
  {
    title: "Custom Business Software",
    description: "ERP-style systems, CRM workflows, operations platforms, dashboards and portals tailored to the processes your team needs to run.",
    icon: Code2,
    link: "/custom-software-development"
  },
  {
    title: "Web Applications",
    description: "Responsive web platforms, customer portals, content-rich institutional websites and workflow applications connected to your existing systems.",
    icon: MonitorSmartphone,
    link: "/web-development-design-website"
  },
  {
    title: "Mobile Applications",
    description: "iOS, Android and Flutter applications for customer experiences, field teams, communities and operational workflows.",
    icon: Smartphone,
    link: "/mobile-app-development-android-ios-flutter"
  },
  {
    title: "E-commerce Engineering",
    description: "Storefronts and commerce workflows across Magento Open Source / Adobe Commerce, WooCommerce, Shopify and custom platforms.",
    icon: ShoppingCart,
    link: "/ecommerce-website-development-shoppingcart"
  },
  {
    title: "AI & Intelligent Automation",
    description: "Implement machine learning models, conversational AI, and advanced workflow automation to optimize operations and drive smarter decisions.",
    icon: BrainCircuit,
    link: "/ai-automation-services"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Features() {
  return (
    <section className="relative w-full py-24 bg-background overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Build</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We craft robust digital solutions tailored to your unique business needs, combining cutting-edge technology with intuitive design.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Link href={feature.link} className="group block h-full">
                <div className="relative h-full flex flex-col p-8 rounded-3xl bg-card border border-border/40 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden z-10">
                  {/* Subtle gradient hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Icon Container */}
                  <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 ease-out shadow-sm">
                    <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col relative z-20">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-[15px]">
                      {feature.description}
                    </p>
                    
                    {/* Action Link */}
                    <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                      <span className="relative overflow-hidden flex h-5 items-center">
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Learn more</span>
                        <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0">Learn more</span>
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
