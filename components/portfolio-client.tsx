'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShoppingCart } from 'lucide-react';
import PageHero from '@/components/page-hero';
import Loader from '@/components/loader';
import { useQuery } from '@tanstack/react-query';
import { strapiService } from '@/services/strapiService';

const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export default function PortfolioClient() {
  const { data: response, isLoading, error } = useQuery({
    queryKey: ['caseStudies'],
    queryFn: () => strapiService.getAllCaseStudies(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  const caseStudies = response?.data || [];

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <PageHero
        badge="Case Studies Hub"
        title={<>Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Real-World Workflows</span></>}
        description="Selected projects from more than two decades of software delivery—shown through the business problem, the workflow we helped digitize and the solution that was delivered."
        actionLinks={[
          { label: "Discuss a Similar Project", href: "/contact" },
          { label: "Explore Services", href: "/services" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {isLoading && (
          <div className="flex justify-center items-center py-24">
            <Loader />
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center py-20 text-destructive">
            Failed to load case studies. Please try again later.
          </div>
        )}

        {/* Case Studies Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((study: any, index: number) => {
              const num = (index + 1).toString().padStart(2, '0');
              const category = study.category || study.clientName || 'Case Study';
              const link = `/portfolio/${study.slug}`;
              const imageUrl = study.featuredImage?.url ? `${STRAPI_URL}${study.featuredImage.url}` : '/images/og-default.jpg';
              const iconUrl = study.categoryIcon?.url ? `${STRAPI_URL}${study.categoryIcon.url}` : null;

              return (
                <motion.div
                  key={study.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="group flex flex-col bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Section (Top) */}
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-muted/20">
                    <Image
                      src={imageUrl}
                      alt={study.title || 'Case Study'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Floating Number Badge on Image */}
                    <div className="absolute top-5 left-5 bg-background/95 backdrop-blur-md px-3.5 py-1.5 rounded-full font-bold text-sm text-foreground shadow-sm">
                      {num}
                    </div>
                  </div>

                  {/* Content Section (Bottom) */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    {/* Icon & Category */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {iconUrl ? (
                          <Image src={iconUrl} alt="category" width={20} height={20} className="object-contain" />
                        ) : (
                          <ShoppingCart className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-extrabold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-[15px] line-clamp-3">
                      {study.summary}
                    </p>

                    {/* Features Grid */}
                    {study.keyFeatures && study.keyFeatures.length > 0 && (
                      <div className="grid grid-cols-1 gap-y-3 mb-8">
                        {study.keyFeatures.slice(0, 3).map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/80 leading-snug line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Pill Tags */}
                    {study.tags && study.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {study.tags.slice(0, 3).map((tag: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-muted/50 text-muted-foreground text-[11px] font-semibold rounded-full border border-border/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA Link */}
                    <div className="pt-5 border-t border-border/50 mt-auto">
                      <Link
                        href={link}
                        className="inline-flex items-center text-primary font-bold text-sm group/link hover:text-primary/80 transition-colors"
                      >
                        Read Case Study
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
