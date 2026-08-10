'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import PageHero from '@/components/page-hero';
import ReactMarkdown from 'react-markdown';

interface Insight {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  content: string;
}

export default function InsightDetailClient({ slug }: { slug: string }) {
  const [insight, setInsight] = useState<Insight | null>(null);
  const [relatedInsights, setRelatedInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        // Simulated network delay for premium loader effect
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Fetch all insights to get the current one and related ones
        const res = await fetch('/api/insights');
        if (res.ok) {
          const allData: Insight[] = await res.json();
          const current = allData.find(i => i.slug === slug);
          
          if (current) {
            setInsight(current);
            
            // Get 3 other insights for the sidebar
            // Prefer same category, otherwise just take first 3
            let related = allData.filter(i => i.slug !== slug && i.category === current.category);
            if (related.length < 3) {
              const others = allData.filter(i => i.slug !== slug && i.category !== current.category);
              related = [...related, ...others].slice(0, 3);
            } else {
              related = related.slice(0, 3);
            }
            setRelatedInsights(related);
          }
        }
      } catch (error) {
        console.error('Failed to fetch insight', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-20">
        {/* Premium Skeleton Header */}
        <div className="relative h-[60vh] min-h-[500px] w-full bg-muted/20 animate-pulse overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center container mx-auto px-6 max-w-4xl pb-20 z-10">
            <div className="h-6 w-32 bg-muted/40 rounded-full mb-6 mx-auto" />
            <div className="h-12 w-3/4 bg-muted/40 rounded-xl mb-4 mx-auto" />
            <div className="h-12 w-2/4 bg-muted/40 rounded-xl mb-8 mx-auto" />
          </div>
        </div>
        
        {/* Skeleton Content Grid */}
        <div className="container mx-auto px-6 max-w-7xl py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="w-full aspect-[21/9] bg-muted/20 rounded-3xl animate-pulse mb-12" />
              <div className="space-y-6">
                <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
                <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
                <div className="h-4 w-11/12 bg-muted/20 rounded animate-pulse" />
                <div className="h-8 w-1/3 bg-muted/20 rounded animate-pulse mt-12 mb-6" />
                <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-muted/20 rounded animate-pulse" />
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="h-8 w-1/2 bg-muted/20 rounded animate-pulse mb-8" />
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-32 w-full bg-muted/20 rounded-2xl animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
                  <Image
                    src={insight.heroImage}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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

              {/* Markdown Content with Refined Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="
                  w-full max-w-none
                  [&>h2]:text-3xl [&>h2]:font-extrabold [&>h2]:text-foreground [&>h2]:mt-16 [&>h2]:mb-6
                  [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-12 [&>h3]:mb-4
                  [&>p]:text-[1.125rem] [&>p]:text-slate-600 dark:[&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-8
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:text-[1.125rem] [&>ul>li]:text-slate-600 dark:[&>ul>li]:text-slate-300 [&>ul>li]:mb-3
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:text-[1.125rem] [&>ol>li]:text-slate-600 dark:[&>ol>li]:text-slate-300 [&>ol>li]:mb-3
                  [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:bg-primary/5 [&>blockquote]:py-4 [&>blockquote]:px-6 [&>blockquote]:my-8 [&>blockquote]:rounded-r-lg [&>blockquote]:italic [&>blockquote>p]:text-foreground/90 [&>blockquote>p]:m-0
                  [&_strong]:font-extrabold [&_strong]:text-foreground
                  [&_a]:text-primary [&_a]:underline hover:[&_a]:text-primary/80
                "
              >
                <ReactMarkdown>{insight.content}</ReactMarkdown>
              </motion.div>

              {/* Bottom Actions */}
              <div className="mt-16 pt-10 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-foreground">Share this insight:</span>
                  <button className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                
                <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-center">
                  Discuss a Project
                </Link>
              </div>
            </div>

            {/* Right Column: Sidebar (Related Insights) */}
            <div className="lg:col-span-4 mt-16 lg:mt-0">
              <div className="sticky top-24">
                <h3 className="text-2xl font-extrabold text-foreground mb-8 pb-4 border-b border-border/50">
                  Related Insights
                </h3>
                
                <div className="flex flex-col gap-6">
                  {relatedInsights.map((related, idx) => (
                    <motion.div
                      key={related.slug}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                    >
                      <Link 
                        href={`/blog/${related.slug}`}
                        className="group flex flex-col sm:flex-row lg:flex-col gap-4 bg-card rounded-2xl p-4 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all"
                      >
                        <div className="relative w-full sm:w-1/3 lg:w-full aspect-video rounded-xl overflow-hidden flex-shrink-0">
                          <Image 
                            src={related.heroImage} 
                            alt={related.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <span className="text-xs font-bold text-primary mb-2">{related.category}</span>
                          <h4 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {related.title}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mt-auto">
                            <Clock className="w-3 h-3" />
                            <span>{related.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

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
