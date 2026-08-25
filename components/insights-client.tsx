'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import PageHero from '@/components/page-hero';
import Loader from '@/components/loader';
import { strapiService } from '@/services/strapiService';
import { useQuery } from '@tanstack/react-query';

export interface Insight {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
}

interface InsightsClientProps {
  initialCategories: string[];
}

export default function InsightsClient({ initialCategories = ['All'] }: InsightsClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: queryData, isLoading: loading } = useQuery({
    queryKey: ['blogs', currentPage, activeCategory],
    queryFn: () => strapiService.getAllBlogs(currentPage, itemsPerPage, activeCategory),
    staleTime: 5 * 60 * 1000, // Keep data fresh for 5 minutes
  });

  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

  // Safely map the returned data
  const insights: Insight[] = queryData?.data?.map((blog: any) => {
    const cat = blog.categories && blog.categories.length > 0 ? blog.categories[0].name : 'Uncategorized';
    const dateObj = new Date(blog.publishedDate || blog.createdAt);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    return {
      slug: blog.slug,
      title: blog.title,
      category: cat,
      date: formattedDate,
      author: blog.author || 'Neologicx',
      readTime: blog.readingTime || '5 mins',
      heroImage: blog.featuredImage?.url ? `${STRAPI_URL}${blog.featuredImage.url}` : '/images/placeholder.jpg',
      excerpt: blog.excerpt || ''
    };
  }) || [];

  const totalPages = queryData?.meta?.pagination?.pageCount || 1;
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        badge="Insights Hub"
        title={<>Practical Thinking on Building and Improving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Software</span></>}
        description="Lessons, patterns and decision guides from product delivery, custom software, mobile development, integrations, automation and modernization."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: 'Explore Our Work', href: '/portfolio' },
          { label: 'Discuss a Project', href: '/contact' }
        ]}
      />

      {/* Main Content */}
      <div id="insights-grid" className="container mx-auto px-6 max-w-7xl py-10 ">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {initialCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1); // Reset page on category change
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

        {/* Grid or Loader */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader />
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {insights.map((insight, idx) => (
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={idx <= 2}
                      />
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
                      <p className="text-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                        {insight.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-xs font-semibold text-foreground pt-6 border-t border-border/50">
                        <div className="flex items-center gap-1.5">
                          <User className="w-4 h-4 text-primary/70" />
                          <span>{insight.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-primary" />
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
