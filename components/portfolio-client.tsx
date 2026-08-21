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

        {/* Case Studies List */}
        {!isLoading && !error && (
          <div className="space-y-32">
            {caseStudies.map((study: any, index: number) => {
              const isEven = index % 2 === 0;
              const num = (index + 1).toString().padStart(2, '0');
              const category = study.category || study.clientName || 'Case Study';
              const link = `/portfolio/${study.slug}`;
              const imageUrl = study.featuredImage?.url ? `${STRAPI_URL}${study.featuredImage.url}` : '/images/og-default.jpg';
              const iconUrl = study.categoryIcon?.url ? `${STRAPI_URL}${study.categoryIcon.url}` : null;

              return (
                <div key={study.id || index} className="relative flex flex-col lg:flex-row items-center gap-0 lg:gap-0">

                  {/* Image Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`w-full lg:w-[60%] relative h-[50vh] md:h-[70vh] lg:h-[87vh] rounded-3xl overflow-hidden shadow-2xl z-0 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <Image
                      src={imageUrl}
                      alt={study.title || 'Case Study'}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    {/* Floating Number Badge on Image */}
                    <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} bg-background/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-foreground shadow-sm`}>
                      {num}
                    </div>
                  </motion.div>

                  {/* Content Card Section (Overlapping) */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className={`w-full lg:w-[45%] relative z-10 -mt-16 lg:mt-0 ${isEven ? 'lg:-ml-20 lg:order-2' : 'lg:-mr-20 lg:order-1'
                      }`}
                  >
                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col h-full">

                      {/* Icon & Category */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          {iconUrl ? (
                            <Image src={iconUrl} alt="category" width={24} height={24} className="object-contain" />
                          ) : (
                            <ShoppingCart className="w-6 h-6" />
                          )}
                        </div>
                        <span className="text-sm font-bold text-primary uppercase tracking-wider">
                          {category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-3xl font-extrabold text-foreground mb-4 leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-10 text-[15px]">
                        {study.summary}
                      </p>

                      {/* Features Grid */}
                      {study.keyFeatures && study.keyFeatures.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                          {study.keyFeatures.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Pill Tags */}
                      {study.tags && study.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-10">
                          {study.tags.map((tag: string, idx: number) => (
                            <span key={idx} className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-semibold rounded-full border border-border/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* CTA Link */}
                      <div className="mt-auto pt-4 border-t border-border/50">
                        <Link
                          href={link}
                          className="inline-flex items-center text-primary font-bold text-sm group/link hover:text-primary/80 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
