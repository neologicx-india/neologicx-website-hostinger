'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users } from 'lucide-react';
import { solutionsData } from '@/lib/solutions-data';
import { useMemo } from 'react';

interface RelatedSolutionsProps {
  currentPath: string;
}

export default function RelatedSolutions({ currentPath }: RelatedSolutionsProps) {
  // Randomly pick 3 solutions excluding the current one
  const selectedSolutions = useMemo(() => {
    // Exact match for current page to exclude it
    const filtered = solutionsData.filter(s => s.href !== currentPath);
    // Shuffle using Fisher-Yates
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 3);
  }, [currentPath]);

  if (selectedSolutions.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Explore More Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Configurable software foundations designed for recurring operational needs.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all whitespace-nowrap"
          >
            View All Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all flex flex-col h-full"
            >
              <Link href={solution.href} className="absolute inset-0 z-10" aria-hidden="true" />

              {/* Image Header */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted/20">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 w-12 h-12 bg-background rounded-2xl flex items-center justify-center border border-border/50 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {solution.description}
                </p>

                <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
                  <p className="text-xs text-foreground font-semibold flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-muted-foreground" />
                    {solution.targetUser.length > 25 ? solution.targetUser.substring(0, 25) + '...' : solution.targetUser}
                  </p>
                  <Link href={solution.href} className="relative z-20 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
