'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/page-hero';
import { Calendar } from 'lucide-react';

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({ title, description, lastUpdated, sections }: LegalPageLayoutProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section comes into view, set it as active
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' } // Adjust this margin to trigger active state correctly
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Initial state setup to avoid empty selection
  useEffect(() => {
    if (sections.length > 0 && !activeId) {
      setActiveId(sections[0].id);
    }
  }, [sections, activeId]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for fixed navbar
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <PageHero
        title={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">{title}</span></>}
        description={description}
        backgroundImage="/images/insights_hero_bg.png"
      />

      <section className="py-20 relative">
        {/* Abstract Backgrounds Wrapper (prevents horizontal scroll without breaking sticky) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl">

          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-12 border-b border-border/50 pb-6">
            <Calendar className="w-4 h-4 text-primary" />
            Last Updated: {lastUpdated}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

            {/* Left Sidebar: Sticky Table of Contents */}
            <aside className="w-full lg:w-1/4 hidden lg:block">
              <div className="sticky top-32">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
                  Table of Contents
                </h3>
                <nav className="flex flex-col space-y-2 border-l-2 border-border">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => handleNavClick(e, section.id)}
                      className={`block px-4 py-2 text-sm font-semibold transition-all duration-300 -ml-[2px] border-l-2 ${activeId === section.id
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile Table of Contents (Non-sticky) */}
            <div className="lg:hidden w-full bg-card border border-border/50 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold text-foreground mb-4">Table of Contents</h3>
              <nav className="flex flex-col space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleNavClick(e, section.id)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="w-full lg:w-3/4 pb-24">
              <div className="max-w-4xl">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="scroll-mt-32" // Adds offset for when navigating directly via hash
                  >
                    <h2 className="text-2xl font-bold font-sans text-foreground mb-3 leading-tight tracking-normal">
                      {section.title}
                    </h2>
                    <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 [&>p]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-1 [&>ul>li]:text-gray-600">
                      {section.content}
                    </div>

                    {/* Divider between sections */}
                    {index < sections.length - 1 && (
                      <hr className="my-5 border-border/70" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
