"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type ActionLinkTheme = "primary" | "secondary" | "whatsapp" | "outline";

interface PageActionLink {
  label: string;
  href: string;
  theme?: ActionLinkTheme;
  icon?: React.ReactNode;
}

const ACTION_THEME_CLASSES: Record<ActionLinkTheme, string> = {
  primary:
    "bg-primary text-primary-foreground border-2 border-transparent hover:bg-primary/90",
  secondary:
    "bg-white text-slate-900 border-2 border-transparent hover:bg-slate-100",
  whatsapp:
    "bg-[#25D366] text-white border-2 border-transparent hover:bg-[#20bd5a]",
  outline:
    "bg-white text-[#25D366] border-2 border-[#25D366]/60 backdrop-blur-sm hover:bg-[#25D366]/30 hover:border-[#25D366] hover:text-white",
};

const WhatsAppCtaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 shrink-0"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

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
  actionLinks,
}: PageHeroProps) {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[55vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt="Header Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <span className="text-sm font-semibold tracking-wider text-secondary uppercase">
              {badge}
            </span>
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
            className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full"
          >
            {actionLinks.map((link, idx) => {
              const resolvedTheme =
                link.theme ?? (idx === 0 ? "primary" : "secondary");
              const className = `inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-center whitespace-nowrap w-full sm:w-auto ${ACTION_THEME_CLASSES[resolvedTheme]}`;
              const iconNode =
                link.icon !== undefined ? (
                  link.icon
                ) : resolvedTheme === "whatsapp" ||
                  resolvedTheme === "outline" ? (
                  <WhatsAppCtaIcon />
                ) : null;
              const isExternal = link.href.startsWith("http");

              if (isExternal) {
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {iconNode}
                    <span>{link.label}</span>
                  </a>
                );
              }

              return (
                <Link key={idx} href={link.href} className={className}>
                  {iconNode}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Glowing Faded Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px] z-20" />
    </div>
  );
}
