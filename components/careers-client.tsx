'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';

// Strapi Content Type Requirements for "Career":
// - title (Text)
// - type (Text, e.g., "Full-time")
// - location (Text, e.g., "Remote", "Jaipur")
// - experience (Text, e.g., "2-5 Years")
// - description (Text/RichText)
// - accepting (Boolean, true = accepting applications)
// - applyLink (Text, email mailto or external URL for application)

type Career = {
  id: number;
  attributes: {
    title: string;
    type: string;
    location: string;
    experience: string;
    description: string;
    accepting: boolean;
    applyLink: string;
    createdAt: string;
  };
};

export default function CareersClient({ initialCareers }: { initialCareers: Career[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <PageHero
        title="Careers at Neologicx"
        description="Join our team of engineers, designers, and innovators. We're looking for passionate individuals to build the future of software with us."
        badge="Join Us"
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg">
              Explore our current job openings. If you don't see a role that fits but still want to join, reach out to us anyway!
            </p>
          </div>

          {initialCareers && initialCareers.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {initialCareers.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    job.attributes.accepting
                      ? 'bg-card border-border hover:border-primary/50 shadow-sm hover:shadow-md'
                      : 'bg-muted/30 border-border/50 opacity-80'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {job.attributes.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        {job.attributes.experience && (
                          <span className="flex items-center gap-1.5 bg-background px-2.5 py-1 rounded-md border">
                            <Briefcase className="w-4 h-4 text-primary" />
                            {job.attributes.experience}
                          </span>
                        )}
                        {job.attributes.location && (
                          <span className="flex items-center gap-1.5 bg-background px-2.5 py-1 rounded-md border">
                            <MapPin className="w-4 h-4 text-primary" />
                            {job.attributes.location}
                          </span>
                        )}
                        {job.attributes.type && (
                          <span className="flex items-center gap-1.5 bg-background px-2.5 py-1 rounded-md border">
                            <Clock className="w-4 h-4 text-primary" />
                            {job.attributes.type}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      {job.attributes.accepting ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-400">
                          <CheckCircle className="w-3.5 h-3.5" />
                          Accepting
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full dark:bg-red-900/30 dark:text-red-400">
                          <XCircle className="w-3.5 h-3.5" />
                          Not Accepting
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="prose prose-sm dark:prose-invert text-muted-foreground mb-8 line-clamp-3">
                    {job.attributes.description}
                  </div>

                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    {job.attributes.accepting ? (
                      <a
                        href={job.attributes.applyLink || "mailto:support@neologicx.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium transition-colors rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium transition-colors rounded-lg bg-muted text-muted-foreground cursor-not-allowed">
                        Closed
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center p-12 border border-dashed rounded-2xl bg-muted/20">
              <p className="text-muted-foreground">We currently have no open positions. Please check back later!</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
