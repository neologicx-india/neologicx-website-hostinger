'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Clock, Users2, Globe2, Layers, BarChart3 } from 'lucide-react';

interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  client: string;
  industry: string;
  duration: string;
  platforms: string[];
  challenge: string;
  solution: string;
  features: { title: string; description: string }[];
  techStack: string[];
  results: { metric: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  gallery: string[];
  relatedSlugs: string[];
}

interface CaseStudyDetailClientProps {
  slug: string;
}

export default function CaseStudyDetailClient({ slug }: CaseStudyDetailClientProps) {
  const [data, setData] = useState<CaseStudyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [relatedStudies, setRelatedStudies] = useState<CaseStudyData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`/api/portfolio/${slug}`);
        if (!res.ok) throw new Error('Not found');
        const json = await res.json();
        setData(json);

        // Fetch related studies
        if (json.relatedSlugs && json.relatedSlugs.length > 0) {
          const relatedPromises = json.relatedSlugs.slice(0, 2).map((s: string) =>
            fetch(`/api/portfolio/${s}`).then(r => r.ok ? r.json() : null)
          );
          const related = (await Promise.all(relatedPromises)).filter(Boolean);
          setRelatedStudies(related);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          <p className="text-muted-foreground font-medium">Loading case study...</p>
        </div>
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

  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
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
            <span className="text-sm font-semibold tracking-wider text-primary uppercase">{data.category}</span>
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

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl font-medium"
          >
            {data.tagline}
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
            { icon: Users2, label: 'Client', value: data.client },
            { icon: Layers, label: 'Industry', value: data.industry },
            { icon: Clock, label: 'Duration', value: data.duration },
            { icon: Globe2, label: 'Platforms', value: data.platforms.join(', ') },
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

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
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
            <p className="text-muted-foreground leading-relaxed">{data.challenge}</p>
          </motion.div>

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
            <p className="text-muted-foreground leading-relaxed">{data.solution}</p>
          </motion.div>
        </div>

        {/* Project Showcase Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
            <Image
              src={data.heroImage}
              alt={`${data.title} — Project Screenshot`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Subtle gradient overlay at bottom for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0 px-8 py-5 bg-slate-950/60 backdrop-blur-md flex items-center justify-between z-10">
              <div>
                <p className="text-white font-bold text-lg">{data.title}</p>
                <p className="text-white/60 text-sm">{data.category}</p>
              </div>
              <span className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-xs font-semibold tracking-wider text-primary uppercase">
                {data.platforms.join(' · ')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
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
            {data.features.map((feature, idx) => (
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results */}
        {data.results.length > 0 && (
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Measurable Results</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {data.results.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative bg-card border border-border/50 rounded-3xl p-8 text-center overflow-hidden group hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-[30px] -mr-6 -mt-6 transition-all duration-500 group-hover:bg-primary/20"></div>
                  <p className="text-4xl md:text-5xl font-extrabold text-primary mb-3 tracking-tight">{result.value}</p>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{result.metric}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
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
            {data.techStack.map((tech, idx) => (
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

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-sm font-semibold tracking-wider text-primary uppercase mb-4">
                More Work
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Related Case Studies</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStudies.map((related, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <Link
                    href={`/portfolio/${related.slug}`}
                    className="group block bg-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={related.heroImage}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors">{related.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{related.tagline}</p>
                      <span className="inline-flex items-center text-primary font-bold text-sm">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
