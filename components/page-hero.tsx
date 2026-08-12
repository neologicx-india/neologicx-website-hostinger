'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageActionLink {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string | React.ReactNode;
  description?: string;
  backgroundImage?: string;
  badge?: string;
  actionLinks?: PageActionLink[];
}

export default function PageHero({
  title,
  description,
  backgroundImage = "/images/2151893431.jpg",
  badge,
  actionLinks
}: PageHeroProps) {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[55vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt="Header Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Lighter dark overlay with minimal blur for better image visibility */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm"
          >
            <span className="text-sm font-semibold tracking-wider text-secondary uppercase">{badge}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: badge ? 0.1 : 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg leading-tight"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: badge ? 0.2 : 0.1 }}
            className="text-base md:text-lg text-white/80 leading-relaxed font-medium drop-shadow-md max-w-3xl mb-8"
          >
            {description}
          </motion.p>
        )}

        {/* Buttons / CTAs */}
        {actionLinks && actionLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            {actionLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`px-8 py-3.5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-center w-full sm:w-auto ${idx === 0
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-slate-900 border-2 border-transparent hover:bg-slate-100"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>

      {/* Glowing Faded Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px] z-20" />
    </div>
  );
}
