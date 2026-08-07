import React from 'react';
import Link from 'next/link';
import { 
  Layers, 
  Code2, 
  MonitorSmartphone, 
  Smartphone, 
  ShoppingCart, 
  Webhook,
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
    title: "Integration & Automation",
    description: "APIs, payment and third-party integrations, WhatsApp Business Platform workflows and automation that reduce disconnected manual work.",
    icon: Webhook,
    link: "/api-development-services"
  }
];

export default function Features() {
  return (
    <section className="w-full py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">What we build</h2>
          <div className="h-1 w-12 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>
              <Link 
                href={feature.link}
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
