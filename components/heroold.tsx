"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// NOTE: register these once in your root layout (next/font/google), e.g.
// const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
// const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });
// then add `${spaceGrotesk.variable} ${plexMono.variable}` to <body>.

const slides = [
    {
        id: 1,
        code: "DWG-01",
        title: "Scalable Product Engineering",
        subtitle: "End-to-end SaaS and MVP development tailored for scale.",
        spec: "STACK — NEXT.JS · NODE · AWS",
        image: "/slide11.png",
        cta: "Explore Engineering",
        link: "/product-engineering"
    },
    {
        id: 2,
        code: "DWG-02",
        title: "Custom Software Solutions",
        subtitle: "Streamline operations with custom ERPs, CRMs, and business workflows.",
        spec: "SCOPE — ERP · CRM · WORKFLOW",
        image: "/slide2.png",
        cta: "View Solutions",
        link: "/custom-software-development"
    },
    {
        id: 3,
        code: "DWG-03",
        title: "Mobile & Commerce Engineering",
        subtitle: "Seamless mobile experiences and robust e-commerce architectures.",
        spec: "STACK — FLUTTER · iOS · ANDROID",
        image: "/slide33.png",
        cta: "Discover More",
        link: "/mobile-app-development-android-ios-flutter"
    }
];

const PAPER = "#E3F2FD";       // blueprint paper (page background)
const PAPER_DEEP = "#CFE6F8";  // recessed panel shade, slightly darker paper
const LINE = "rgba(14,42,71,0.14)";        // linework, light
const LINE_STRONG = "rgba(14,42,71,0.32)"; // linework, heavy
const INK = "#0E2A47";         // deep blueprint ink — primary text
const MUTED = "#4E7292";       // muted ink — secondary text
const SIGNAL = "#FF6A3D";      // safety-orange accent, unchanged

export default function HeroNew() {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = String(slides.length).padStart(2, "0");

    return (
        <section
            className="relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
        >
            {/* Blueprint grid — minor + major lines */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(${LINE} 1px, transparent 1px),
                        linear-gradient(90deg, ${LINE} 1px, transparent 1px),
                        linear-gradient(${LINE_STRONG} 1px, transparent 1px),
                        linear-gradient(90deg, ${LINE_STRONG} 1px, transparent 1px)
                    `,
                    backgroundSize: "36px 36px, 36px 36px, 180px 180px, 180px 180px"
                }}
            />
            <div
                className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(ellipse at 30% 20%, transparent 0%, ${PAPER} 82%)` }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Registration corner marks */}
                <CornerMark className="-top-2 -left-2 lg:top-0 lg:left-0" />
                <CornerMark className="-top-2 -right-2 lg:top-0 lg:right-0 rotate-90" />
                <CornerMark className="-bottom-2 -left-2 lg:bottom-0 lg:left-0 -rotate-90" />
                <CornerMark className="-bottom-2 -right-2 lg:bottom-0 lg:right-0 rotate-180" />

                {/* Header strip */}
                <div
                    className="flex items-center justify-between mb-10 pb-4"
                    style={{ borderBottom: `1px solid ${LINE_STRONG}`, fontFamily: "var(--font-mono, monospace)" }}
                >
                    <span className="text-[11px] tracking-[0.25em] uppercase" style={{ color: MUTED }}>
                        Neologicx / Engineering — Spec Sheet
                    </span>
                    <span className="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase" style={{ color: MUTED }}>
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ backgroundColor: SIGNAL, opacity: 0.5 }} />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SIGNAL }} />
                        </span>
                        System Status — Operational
                    </span>
                </div>

                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    speed={1200}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    pagination={{ el: ".bp-pagination", clickable: true }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[480px]">

                                {/* Left: Text */}
                                <div className="flex flex-col justify-center order-2 lg:order-1">
                                    <AnimatePresence mode="wait">
                                        {activeIndex === index && (
                                            <motion.div
                                                key={slide.id}
                                                initial={{ opacity: 0, x: -24 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 24 }}
                                                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                                            >
                                                <div
                                                    className="text-[12px] tracking-[0.2em] mb-5"
                                                    style={{ color: SIGNAL, fontFamily: "var(--font-mono, monospace)" }}
                                                >
                                                    {slide.code} / {String(index + 1).padStart(2, "0")}—{total}
                                                </div>

                                                <h1
                                                    className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold mb-6 leading-[1.1] tracking-tight"
                                                    style={{ color: INK, fontFamily: "var(--font-display, sans-serif)" }}
                                                >
                                                    {slide.title}
                                                </h1>

                                                <p className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed" style={{ color: MUTED }}>
                                                    {slide.subtitle}
                                                </p>

                                                {/* Dimension line */}
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                                                    style={{ transformOrigin: "left" }}
                                                    className="flex items-center gap-3 mb-9"
                                                >
                                                    <span style={{ color: LINE_STRONG }}>├</span>
                                                    <span className="flex-1 h-px" style={{ backgroundColor: LINE_STRONG }} />
                                                    <span
                                                        className="text-[11px] tracking-[0.15em] whitespace-nowrap"
                                                        style={{ color: MUTED, fontFamily: "var(--font-mono, monospace)" }}
                                                    >
                                                        {slide.spec}
                                                    </span>
                                                    <span style={{ color: LINE_STRONG }}>┤</span>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.45, duration: 0.5 }}
                                                >
                                                    <Link
                                                        href={slide.link}
                                                        className="group relative inline-flex items-center gap-3 px-7 py-3.5 font-semibold uppercase text-sm tracking-wide transition-all hover:-translate-y-0.5"
                                                        style={{
                                                            color: PAPER,
                                                            backgroundColor: INK,
                                                            border: `1px solid ${INK}`,
                                                            fontFamily: "var(--font-mono, monospace)"
                                                        }}
                                                    >
                                                        <span className="absolute -top-2 -left-2 w-3 h-3 border-t border-l" style={{ borderColor: SIGNAL }} />
                                                        <span className="absolute -bottom-2 -right-2 w-3 h-3 border-b border-r" style={{ borderColor: SIGNAL }} />
                                                        {slide.cta}
                                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Right: Image, framed as a drawing panel */}
                                <div className="order-1 lg:order-2 w-full h-full min-h-[340px] lg:min-h-[480px] relative">
                                    <div
                                        className="absolute inset-0 overflow-hidden"
                                        style={{ border: `1px solid ${LINE_STRONG}`, backgroundColor: PAPER_DEEP }}
                                    >
                                        <AnimatePresence mode="wait">
                                            {activeIndex === index && (
                                                <motion.div
                                                    key={`img-${slide.id}`}
                                                    initial={{ opacity: 0, scale: 1.04 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.97 }}
                                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                                    className="absolute inset-0 w-full h-full"
                                                >
                                                    <Image
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="object-cover object-center opacity-[0.92]"
                                                        priority={index === 0}
                                                    />
                                                    <div
                                                        className="absolute inset-0"
                                                        style={{ background: `linear-gradient(180deg, ${PAPER}00 60%, ${PAPER} 100%)` }}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {/* scale mark */}
                                    <span
                                        className="absolute top-3 right-3 text-[10px] tracking-[0.2em] px-2 py-1"
                                        style={{ color: MUTED, border: `1px solid ${LINE_STRONG}`, fontFamily: "var(--font-mono, monospace)" }}
                                    >
                                        SCALE 1:1
                                    </span>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Ruler-style pagination */}
                <div className="bp-pagination flex items-center gap-2 mt-10" />
            </div>

            <style jsx global>{`
                .bp-pagination { display: flex; }
                .bp-pagination .swiper-pagination-bullet {
                    width: 28px;
                    height: 3px;
                    border-radius: 0;
                    background: ${LINE_STRONG};
                    opacity: 1;
                    margin: 0 !important;
                    transition: all 0.35s ease;
                }
                .bp-pagination .swiper-pagination-bullet-active {
                    width: 56px;
                    background: ${SIGNAL};
                }
            `}</style>
        </section>
    );
}

function CornerMark({ className = "" }) {
    return (
        <span
            aria-hidden
            className={`hidden lg:block absolute w-5 h-5 border-t border-l ${className}`}
            style={{ borderColor: LINE_STRONG }}
        />
    );
}