'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShoppingCart, Users, Vote, GraduationCap, Music, Landmark } from 'lucide-react';
import PageHero from '@/components/page-hero';

const caseStudies = [
  {
    num: "01",
    title: "BIKAJI",
    category: "Customer Care & Commerce",
    description: "E-commerce and customer-care workflows, including structured complaint handling, severity tracking, an administration dashboard and WhatsApp notifications.",
    features: [
      "Structured complaint handling",
      "Severity tracking workflows",
      "Administration dashboard",
      "WhatsApp notifications"
    ],
    tags: ["E-commerce", "Workflow", "WhatsApp", "Dashboard"],
    link: "/portfolio/bikaji",
    image: "/images/portfolio/bikaji.png",
    icon: ShoppingCart
  },
  {
    num: "02",
    title: "ECK–RTU",
    category: "Alumni Connect",
    description: "Android and iOS alumni experience covering registration, discovery by batch/city/industry, events, donations and push notifications.",
    features: [
      "Registration & discovery",
      "Batch/city/industry filtering",
      "Events & push notifications",
      "Donation processing"
    ],
    tags: ["Mobile App", "iOS", "Android", "Community"],
    link: "/portfolio/eck-alumni-connect",
    image: "/images/portfolio/alumni_connect.png",
    icon: Users
  },
  {
    num: "03",
    title: "Election Commission of India",
    category: "Mobile Service Platform",
    description: "A public-facing mobile application bringing election information and citizen-facing utilities into a consolidated experience.",
    features: [
      "Candidate & affidavit information",
      "Past election data & trends",
      "Digital voter-slip functionality",
      "Complaint submission"
    ],
    tags: ["Mobile App", "Public Service", "Citizen Experience"],
    link: "/portfolio/eci-app",
    image: "/images/portfolio/eci.png",
    icon: Vote
  },
  {
    num: "04",
    title: "RAJUVAS & SKRAU",
    category: "University Web Platforms",
    description: "Content-rich, responsive public university websites and CMS/backend workflows designed for complex institutional information.",
    features: [
      "Responsive public websites",
      "Content-rich architecture",
      "CMS & backend workflows",
      "Institutional information management"
    ],
    tags: ["Web Platform", "CMS", "Education", "Backend"],
    link: "/portfolio/rajuvas",
    image: "/images/portfolio/public_universities.png",
    icon: GraduationCap
  },
  {
    num: "05",
    title: "The Jazz Café, UK",
    category: "Restaurant & Event Operations",
    description: "A web-based system supporting bookings, events, payments, reminders and back-office coordination.",
    features: [
      "Restaurant bookings",
      "Event operations",
      "Payments & reminders",
      "Back-office coordination"
    ],
    tags: ["Web System", "Hospitality", "Operations", "UK"],
    link: "/portfolio/jazz-cafe",
    image: "/images/portfolio/jazz_cafe.png",
    icon: Music
  },
  {
    num: "06",
    title: "Heritage Olympiad",
    category: "Culture & Learning",
    description: "A mobile learning and quiz experience focused on tangible, intangible and natural heritage, with competitive play and leaderboards.",
    features: [
      "Mobile quiz experience",
      "Tangible & natural heritage content",
      "Single/multiplayer competitive play",
      "Leaderboards for engagement"
    ],
    tags: ["Mobile App", "EdTech", "Quiz Platform"],
    link: "/portfolio/culture-heritage",
    image: "/images/portfolio/heritage.png",
    icon: Landmark
  }
];

export default function PortfolioClient() {
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
        
        {/* Case Studies List */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            const Icon = study.icon;

            return (
              <div key={index} className="relative flex flex-col lg:flex-row items-center gap-0 lg:gap-0">
                
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`w-full lg:w-[60%] relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl z-0 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill 
                    className="object-cover" 
                  />
                  {/* Floating Number Badge on Image */}
                  <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} bg-background/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-foreground shadow-sm`}>
                    {study.num}
                  </div>
                </motion.div>

                {/* Content Card Section (Overlapping) */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className={`w-full lg:w-[45%] relative z-10 -mt-16 lg:mt-0 ${
                    isEven ? 'lg:-ml-20 lg:order-2' : 'lg:-mr-20 lg:order-1'
                  }`}
                >
                  <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col h-full">
                    
                    {/* Icon & Category */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-primary uppercase tracking-wider">
                        {study.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-3xl font-extrabold text-foreground mb-4 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-10 text-[15px]">
                      {study.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                      {study.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pill Tags */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-semibold rounded-full border border-border/50">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <Link 
                        href={study.link} 
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

      </div>
    </div>
  );
}
