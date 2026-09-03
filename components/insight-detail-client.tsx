'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import PageHero from '@/components/page-hero';
import StrapiRichText from '@/components/StrapiRichText';

interface Insight {
  slug: string;
  title: string;
  category: string;
  categories?: string[];
  date: string;
  author: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  content: any[];
}

export default function InsightDetailClient({ initialInsight }: { initialInsight: Insight | null }) {
  const insight = initialInsight;
  const relatedInsights: Insight[] = []; // Will fetch related from API later

  // Extract headings for Table of Contents
  const extractText = (node: any): string => {
    if (!node) return '';
    if (node.type === 'text') return node.text || '';
    if (Array.isArray(node.children)) return node.children.map(extractText).join('');
    return '';
  };

  const headings = insight?.content && Array.isArray(insight.content)
    ? insight.content.filter((b: any) => b.type === 'heading').map((b: any) => {
      const text = extractText(b);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      return { text, id, level: b.level || 2 };
    })
    : [];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: insight?.title,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!insight) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-extrabold mb-4">Insight Not Found</h2>
        <p className="text-muted-foreground mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link href="/blog" className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all">
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section via PageHero */}
      <PageHero
        badge={insight.category}
        title={insight.title}
        description={insight.excerpt}
      />

      {/* Main Content Area */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Column: Article Content */}
            <div className="lg:col-span-8">

              {/* Back button */}
              <div className="mb-8">
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold text-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Insights
                </Link>
              </div>

              {/* Dedicated Image Section for high visibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-border/40 group bg-muted/5">
                  <Image
                    src={insight.heroImage}
                    alt={insight.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                </div>

                {/* Meta data directly below the image */}
                <div className="flex flex-wrap items-center justify-start gap-6 text-sm font-semibold text-muted-foreground mt-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    <span>{insight.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{insight.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12"
              >
                <StrapiRichText content={insight.content} />
              </motion.div>

              {/* Bottom Actions */}
              <div className="mt-16 pt-10 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-foreground">Share this insight:</span>
                  <button onClick={handleShare} className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-center">
                  Discuss a Project
                </Link>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 mt-16 lg:mt-0">
              <div className="sticky top-24">

                {/* Table of Contents */}
                {headings.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl font-extrabold text-foreground mb-6 pb-3 border-b border-border/50">
                      Table of Contents
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {headings.map((h, idx) => (
                        <li key={idx} className={`${h.level === 3 ? 'ml-4' : h.level > 3 ? 'ml-8' : ''}`}>
                          <a
                            href={`#${h.id}`}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold block"
                            onClick={(e) => {
                              e.preventDefault();
                              const el = document.getElementById(h.id);
                              if (el) {
                                // Offset for fixed header
                                const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                              }
                            }}
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Categories */}
                {insight.categories && insight.categories.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-extrabold text-foreground mb-6 pb-3 border-b border-border/50">
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {insight.categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-muted/50 text-muted-foreground text-sm font-semibold rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-pointer"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}



                <div className="mt-8 pt-8 border-t border-border/50">
                  <Link
                    href="/blog"
                    className="group flex items-center justify-between w-full p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <span className="font-bold text-primary">View All Insights</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
