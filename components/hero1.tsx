"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
    {
        id: 1,
        badge: "Built for scale",
        title: "Software",
        highlight: "Development",
        subtitle: "End-to-end SaaS and MVP development tailored for scale. We build robust architectures that grow with your business.",
        image: "/iso1-Photoroom.png",
        link: "/product-engineering"
    },
    {
        id: 2,
        badge: "Intelligent automation",
        title: "Custom Business",
        highlight: "Systems",
        subtitle: "Streamline operations with custom ERPs, CRMs, and business workflows. Empower your team with intelligent automation.",
        image: "/iso2.png",
        link: "/custom-software-development"
    },
    {
        id: 3,
        badge: "Seamless experiences",
        title: "Mobile App",
        highlight: "Engineering",
        subtitle: "Seamless mobile experiences and robust e-commerce architectures. Deliver value to your customers wherever they are.",
        image: "/iso3-Photoroom.png",
        link: "/mobile-app-development-android-ios-flutter"
    }
];

export default function HeroNew() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full bg-background overflow-hidden  py-16 lg:py-24 pb-0 lg:pb-0 border-b border-border">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[110px]" />
                <div className="absolute right-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[130px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    speed={1000}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + ' custom-light-pagination"></span>';
                        }
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full !pb-12 lg:!pb-16"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center min-h-[600px]">

                                {/* Left Side Text Content */}
                                <div className="flex flex-col justify-center order-2 lg:order-1 px-4 lg:px-0">
                                    <AnimatePresence mode="wait">
                                        {activeIndex === index && (
                                            <motion.div
                                                key={slide.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                                className="max-w-xl"
                                            >
                                                {/* Badge */}
                                                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 mb-7">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                    <span className="text-xs font-medium tracking-wide text-muted-foreground">
                                                        {slide.badge}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h1 className="text-[2.75rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[3.6rem] mb-6">
                                                    {slide.title}
                                                    <br />
                                                    <span className="text-primary">{slide.highlight}</span>
                                                </h1>

                                                {/* Subtitle */}
                                                <p className="text-lg leading-relaxed text-muted-foreground mb-9">
                                                    {slide.subtitle}
                                                </p>

                                                {/* Buttons */}
                                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-14">
                                                    <Link
                                                        href={slide.link}
                                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:bg-primary/90 shadow-lg shadow-primary/20"
                                                    >
                                                        Start Your Project
                                                        <svg
                                                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                                                            viewBox="0 0 14 14"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                                                                stroke="currentColor"
                                                                strokeWidth="1.6"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </Link>
                                                    <Link
                                                        href="#work"
                                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                                                    >
                                                        View Our Work
                                                    </Link>
                                                </div>

                                                {/* Trust row stats */}
                                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                                                    {[
                                                        ["50+", "Projects shipped"],
                                                        ["100%", "Quality code"],
                                                        ["Fast", "Avg. launch time"],
                                                    ].map(([stat, label], i) => (
                                                        <div key={label} className="flex items-center gap-8">
                                                            <div>
                                                                <div className="text-2xl font-bold text-foreground">
                                                                    {stat}
                                                                </div>
                                                                <div className="mt-0.5 text-xs text-muted-foreground font-medium">{label}</div>
                                                            </div>
                                                            {i < 2 && <div className="hidden h-9 w-px bg-border sm:block" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Right Side Isometric Image */}
                                <div className="order-1 lg:order-2 relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        {activeIndex === index && (
                                            <motion.div
                                                key={`img-${slide.id}`}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{
                                                    opacity: { duration: 0.8 },
                                                    scale: { duration: 0.8, ease: "easeOut" },
                                                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                                                }}
                                                className="absolute w-full h-full"
                                            >
                                                <Image
                                                    src={slide.image}
                                                    alt={`${slide.title} ${slide.highlight}`}
                                                    fill
                                                    className="object-contain object-center mix-blend-multiply"
                                                    priority={index === 0}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .custom-light-pagination {
                    width: 30px;
                    height: 4px;
                    border-radius: 4px;
                    background: hsl(var(--muted-foreground));
                    opacity: 0.3;
                    display: inline-block;
                    margin: 0 4px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .swiper-pagination-bullet-active.custom-light-pagination {
                    background: hsl(var(--primary));
                    opacity: 1;
                    width: 40px;
                }
            `}</style>
        </section>
    );
}