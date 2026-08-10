'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, ArrowLeft, Loader2, Sparkles } from 'lucide-react';
import Image from 'next/image';
import PageHero from '@/components/page-hero';

interface Insight {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
}

const categories = [
  'All',
  'Product Engineering',
  'Custom Software & Modernization',
  'Mobile & Web Engineering',
  'Integration & Automation',
  'E-commerce',
  'Delivery & Quality'
];

export default function InsightsClient() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        // Simulated network delay for premium loader effect
        await new Promise(resolve => setTimeout(resolve, 800));
        const res = await fetch('/api/insights');
        if (res.ok) {
          const data = await res.json();
          setInsights(data);
        }
      } catch (error) {
        console.error('Failed to fetch insights', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const filteredInsights = activeCategory === 'All'
    ? insights
    : insights.filter(insight => insight.category === activeCategory);

  const totalPages = Math.ceil(filteredInsights.length / itemsPerPage);
  const paginatedInsights = filteredInsights.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <PageHero
        badge="Insights Hub"
        title={<>Practical Thinking on Building and Improving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Software</span></>}
        description="Lessons, patterns and decision guides from product delivery, custom software, mobile development, integrations, automation and modernization."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: 'Explore Latest Insights', href: '#insights-grid' },
          { label: 'Discuss a Project', href: '/contact' }
        ]}
      />

      {/* Main Content */}
      <div id="insights-grid" className="container mx-auto px-6 max-w-7xl pt-10 ">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                : 'bg-card text-foreground/80 hover:bg-card/80 border border-border/50 hover:border-primary/50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loader or Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col bg-card rounded-3xl overflow-hidden border border-border/50 h-[500px]">
                <div className="h-56 bg-muted/30 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="h-6 w-32 bg-muted/30 rounded-full mb-4 animate-pulse" />
                    <div className="h-8 w-full bg-muted/30 rounded-lg mb-3 animate-pulse" />
                    <div className="h-8 w-3/4 bg-muted/30 rounded-lg mb-6 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-muted/30 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-muted/30 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8 pt-6 border-t border-border/30">
                    <div className="h-4 w-20 bg-muted/30 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-muted/30 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {paginatedInsights.map((insight, idx) => (
                <motion.div
                  key={insight.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link href={`/blog/${insight.slug}`} className="group h-full flex flex-col bg-card hover:bg-card/80 rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={insight.heroImage}
                        alt={insight.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      <div className="absolute bottom-4 left-6">
                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold rounded-full">
                          {insight.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {insight.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                        {insight.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground pt-6 border-t border-border/50">
                        <div className="flex items-center gap-1.5">
                          <User className="w-4 h-4 text-primary/70" />
                          <span>{insight.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-primary/70" />
                          <span>{insight.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16 mb-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-card border border-border/50 hover:border-primary disabled:opacity-30 disabled:hover:border-border/50 transition-all shadow-sm hover:shadow-md disabled:hover:shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 ${currentPage === i + 1
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-110'
                      : 'bg-card text-foreground hover:bg-muted border border-border/50 hover:border-primary/50'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-card border border-border/50 hover:border-primary disabled:opacity-30 disabled:hover:border-border/50 transition-all shadow-sm hover:shadow-md disabled:hover:shadow-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
