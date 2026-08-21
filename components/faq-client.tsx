'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What services does Neologicx provide?',
        a: 'We specialize in custom software development, product engineering, SaaS development, mobile app development, web application development, e-commerce solutions, and API integrations.'
      },
      {
        q: 'Where are you located?',
        a: 'We are headquartered in Bikaner, Rajasthan, India, and we serve clients globally.'
      },
      {
        q: 'Do you provide ongoing support after project completion?',
        a: 'Yes! We offer ongoing maintenance, support, and modernization services to ensure your software remains secure, scalable, and up-to-date with the latest technologies.'
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What technology stacks do you specialize in?',
        a: 'We work with modern, robust technologies including React, Next.js, Node.js, Python, Flutter, React Native, Java, and scalable cloud infrastructure like AWS, Azure, and Google Cloud.'
      },
      {
        q: 'Can you help modernize an existing legacy application?',
        a: 'Absolutely. We offer comprehensive modernization services to refactor, re-architect, and migrate legacy applications to modern, cloud-native frameworks.'
      },
      {
        q: 'How do you ensure data security and compliance?',
        a: 'Security is integrated at every layer of our architecture. We implement encryption, secure APIs, role-based access control, and follow industry best practices to ensure compliance with relevant standards.'
      }
    ]
  },
  {
    category: 'Process & Engagement',
    questions: [
      {
        q: 'What is your software development process?',
        a: 'We follow an Agile methodology. Our process typically involves Discovery & Planning, Design & Prototyping, Iterative Development, Testing & QA, Deployment, and Ongoing Support.'
      },
      {
        q: 'How do you handle project communication and updates?',
        a: 'We maintain complete transparency through regular sprint reviews, weekly status reports, and dedicated project managers who act as your primary point of contact.'
      },
      {
        q: 'Do you work with startups or enterprise clients?',
        a: 'We work with both! We help startups launch MVPs rapidly and scale them, and we assist enterprise clients in streamlining complex business operations through custom enterprise software.'
      }
    ]
  }
];

export default function FAQClient() {
  const [openId, setOpenId] = useState<string | null>('General-0');

  return (
    <main className="min-h-screen bg-background pb-0">
      <PageHero
        title={
          <span>
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Questions</span>
          </span>
        }
        description="Find answers to common questions about our services, processes, and expertise."
        badge="FAQ"
      />

      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">We&#39;re here to help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our frequently asked questions to learn more about how we partner with you to build exceptional digital products.
            </p>
          </div>

          <div className="space-y-16">
            {faqs.map((category, catIdx) => (
              <div key={catIdx} className="scroll-mt-32">
                <h3 className="text-2xl font-bold font-serif mb-8 text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                    <MessageCircleQuestion className="w-5 h-5" />
                  </div>
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.questions.map((item, qIdx) => {
                    const id = `${category.category}-${qIdx}`;
                    const isOpen = openId === id;

                    return (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: qIdx * 0.1 }}
                        className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-primary/5 border-primary/30 shadow-md' : 'bg-card border-border/50 hover:border-primary/30'}`}
                      >
                        <button
                          onClick={() => setOpenId(isOpen ? null : id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className={`text-lg font-semibold pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                            {item.q}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${isOpen ? 'bg-primary text-primary-foreground rotate-180' : 'bg-muted text-muted-foreground'}`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
