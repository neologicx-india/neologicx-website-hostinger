'use client';

import { motion } from 'framer-motion';
import {
  Users,
  CreditCard,
  CalendarCheck,
  GraduationCap,
  Clock,
  Eye,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Image from 'next/image';

const workflowFeatures = [
  {
    title: 'Admissions & Student Records',
    description: 'Manage application/admission information, documents and centralized student records.',
    icon: Users,
    role: 'Administrator'
  },
  {
    title: 'Fees & Communication',
    description: 'Connect fee status and institutional notifications where payment/communication functions are configured.',
    icon: CreditCard,
    role: 'Administrator'
  },
  {
    title: 'Attendance',
    description: 'Record and report attendance through configured digital workflows and keep relevant stakeholders informed.',
    icon: CalendarCheck,
    role: 'Teacher'
  },
  {
    title: 'Academic Progress',
    description: 'Manage grades/results and share appropriate progress information with students and parents.',
    icon: GraduationCap,
    role: 'Teacher'
  },
  {
    title: 'Teacher & Timetable Workflows',
    description: 'Support classes, scheduling and teacher-facing administration where included in scope.',
    icon: Clock,
    role: 'Teacher'
  },
  {
    title: 'Parent Access',
    description: 'Provide parents with appropriate visibility into attendance, progress, fees and announcements.',
    icon: Eye,
    role: 'Parent'
  }
];

export default function SchoolClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        badge="Operations Software"
        title={<>School Management System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-md">Connected Administration</span></>}
        description="Bring student administration, attendance, academic information, communication and parent/teacher workflows into one configurable platform designed around the way your institution operates."
        backgroundImage="/images/insights_hero_bg.png"
        actionLinks={[
          { label: "Request a Walkthrough", href: "/contact" },
          { label: "Discuss Your Institution", href: "/contact" }
        ]}
      />

      {/* Role-Based Workflows Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Core workflow areas
            </h2>
            <p className="text-lg text-foreground">
              Explore the system capabilities based on user roles within your institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col relative"
              >
                <div className="absolute top-6 right-6 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 uppercase tracking-wider">
                  {feature.role}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif pr-16 mt-2">
                  {feature.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Experience & Mockup Section */}
      <section className="py-24 relative overflow-hidden bg-muted/20 border-y border-border/50">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-0">
            {/* Left Side: Philosophy & CTA */}
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                <BookOpen className="w-8 h-8" />
              </div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6"
              >
                Education experience beyond one product
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground font-medium leading-relaxed mb-10"
              >
                Neologicx&apos;s portfolio also includes institute operations, university websites and portals, alumni engagement, online assessment/heritage learning and public-sector education workflows. That experience can inform configuration without assuming every institution follows the same process.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-xl hover:bg-primary/90 shadow-primary/20"
                >
                  Review the Education Portfolio
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side: Generated School Dashboard Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-[4/3] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50"
              >
                <Image
                  src="/images/school_dashboard_mockup.png"
                  alt="Education portal showing attendance and timetables"
                  fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
