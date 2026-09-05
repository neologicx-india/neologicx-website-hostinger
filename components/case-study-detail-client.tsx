'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Clock, Users2, BarChart3, MessageCircleQuestion, Layers } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useQuery } from '@tanstack/react-query';
import { strapiService } from '@/services/strapiService';
import StrapiRichText from '@/components/StrapiRichText';
import Loader from '@/components/loader';

const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

// Helper to extract plain text from Strapi rich text blocks
function extractPlainText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks.map((block: any) => {
    if (block.type === 'text') return block.text || '';
    if (block.children) return extractPlainText(block.children);
    return '';
  }).join('');
}

// Helper to extract tech names from rich text (could be list items or paragraphs with "- TechName")
function extractTechNames(blocks: any[]): string[] {
  if (!blocks || !Array.isArray(blocks)) return [];
  const techs: string[] = [];

  const walk = (nodes: any[]) => {
    for (const node of nodes) {
      if (node.type === 'text' && node.text) {
        const cleaned = node.text.replace(/^-\s*/, '').trim();
        if (cleaned) techs.push(cleaned);
      }
      if (node.children) walk(node.children);
    }
  };
  walk(blocks);
  return techs;
}

interface CaseStudyDetailClientProps {
  slug: string;
  initialData?: any;
}

export default function CaseStudyDetailClient({ slug, initialData }: CaseStudyDetailClientProps) {

  const { data, isLoading, error } = useQuery({
    queryKey: ['caseStudy', slug],
    queryFn: () => strapiService.getCaseStudyBySlug(slug),
    initialData: initialData,
    staleTime: 60 * 1000
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6">
        <h1 className="text-4xl font-bold text-foreground">Case Study Not Found</h1>
        <p className="text-muted-foreground">The requested case study does not exist.</p>
        <Link href="/portfolio" className="inline-flex items-center text-primary font-semibold hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
        </Link>
      </div>
    );
  }

  const heroImageUrl = data.featuredImage?.url ? `${STRAPI_URL}${data.featuredImage.url}` : '/images/og-default.jpg';
  const techNames = extractTechNames(data.technologies || []);
  const galleryImages = (data.gallery || []).map((img: any) => ({
    url: `${STRAPI_URL}${img.url}`,
    alt: img.alternativeText || data.title,
    caption: img.caption || '',
    width: img.width,
    height: img.height,
  }));

  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt={`${data.title} — ${data.category} case study by Neologicx`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[6px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-950/30 to-slate-950/50"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link href="/portfolio" className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm font-medium group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              All Case Studies
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm w-fit"
          >
            <span className="text-sm font-semibold tracking-wider text-white uppercase">{data.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight drop-shadow-lg"
          >
            {data.title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl font-medium"
          >
            {data.summary}
          </motion.p>
        </div>

        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px] z-20" />
      </div>

      {/* Project Overview Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Users2, label: 'Client', value: data.clientName || '-' },
            { icon: BarChart3, label: 'Category', value: data.category || '-' },
            { icon: Clock, label: 'Duration', value: data.projectDuration || '-' },
            { icon: Code2, label: 'Technologies', value: techNames.length > 0 ? techNames.join(', ') : '-' },
          ].map((item, idx) => (
            <div key={idx} className="bg-card border border-border/50 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</span>
              </div>
              <p className="text-sm font-bold text-foreground leading-snug">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Project Showcase Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
            <Image
              src={heroImageUrl}
              alt={`${data.title} — Project Screenshot`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute bottom-0 left-0 right-0 px-8 py-5 bg-slate-950/80 backdrop-blur-md flex items-center justify-between z-10">
              <div>
                <p className="text-white font-bold text-lg">{data.title}</p>
                <p className="text-white/60 text-sm">{data.category}</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Our Approach / Process */}
        {data.approach && data.approach.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-sm font-semibold tracking-wider text-primary uppercase mb-4">
                <Layers className="w-4 h-4" />
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Project Overview</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-3xl p-8 md:p-10"
            >
              <StrapiRichText content={data.approach} />
            </motion.div>
          </div>
        )}
        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {data.challenge && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-3xl p-8 md:p-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-foreground mb-4">The Challenge</h2>
              <StrapiRichText content={data.challenge} />
            </motion.div>
          )}

          {data.solution && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-3xl p-8 md:p-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-foreground mb-4">The Solution</h2>
              <StrapiRichText content={data.solution} />
            </motion.div>
          )}
        </div>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
            >
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-sm font-semibold tracking-wider text-primary uppercase mb-4">
                  Project Gallery
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Visual Showcase</h2>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <button className="gallery-prev w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="gallery-next w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full relative"
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={32}
                slidesPerView={1}
                navigation={{
                  prevEl: '.gallery-prev',
                  nextEl: '.gallery-next',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="w-full pb-4"
              >
                {galleryImages.map((img: any, idx: number) => (
                  <SwiperSlide key={idx} className="h-auto pb-4">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group flex flex-col transition-all duration-300 hover:shadow-primary/20">
                      <Image
                        src={img.url}
                        alt={img.alt}
                        width={img.width || 1400}
                        height={img.height || 700}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      {img.caption && (
                        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-slate-950/70 backdrop-blur-md z-10">
                          <p className="text-white/90 text-sm font-medium">{img.caption}</p>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        )}

        {/* Key Features */}
        {data.keyFeatures && data.keyFeatures.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-sm font-semibold tracking-wider text-primary uppercase mb-4">
                Key Features
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">What We Delivered</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.keyFeatures.map((feature: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-card border border-border/50 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{feature}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {data.results && data.results.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-sm font-semibold tracking-wider text-primary uppercase mb-4">
                Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Results & Outcome</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-3xl p-8 md:p-10"
            >
              <StrapiRichText content={data.results} />
            </motion.div>
          </div>
        )}



        {/* FAQs */}
        {data.faqs && data.faqs.length > 0 && (
          <div className="mb-24 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-sm font-semibold tracking-wider text-primary uppercase mb-4">
                <MessageCircleQuestion className="w-4 h-4" />
                Q&A
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Project FAQs</h2>
            </motion.div>

            <div className="space-y-6">
              {data.faqs.map((faq: { question: string; answer: string }, idx: number) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {faq.question}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {faq.answer}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {techNames.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-sm font-semibold tracking-wider text-primary uppercase mb-4">
                Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Tech Stack</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {techNames.map((tech, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border/50 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Tags */}
        {data.tags && data.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {data.tags.map((tag: string, idx: number) => (
              <span key={idx} className="px-4 py-2 bg-muted/50 text-muted-foreground text-sm font-semibold rounded-full border border-border/50">
                {tag}
              </span>
            ))}
          </motion.div>
        )}

      </div>
    </div>
  );
}
