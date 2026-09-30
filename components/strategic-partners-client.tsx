'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Shield, BrainCircuit, Paintbrush } from 'lucide-react';
import PageHero from '@/components/page-hero';
import CTASection from '@/components/cta-section';

const partners = [
  {
    id: 'august',
    name: 'August Communications',
    label: 'Creative and branding partner',
    location: 'India',
    icon: Paintbrush,
    shortDesc: 'Brand strategy, creative campaigns and communication across digital, print, film and outdoor media.',
    longDesc: 'August Communications is an India-based, full-service advertising and creative agency with capabilities in brand strategy, identity design, campaign development, digital and social media communication, films, print, outdoor advertising, and packaging. Its portfolio spans consumer electronics, insurance, education, retail, food and beverage, and babycare.\n\nNeologicx has worked with August on the Swachh Bharat Toilet Locator, ECI Apps, E-Parchi and other projects. We act as a technology arm for selected August-led engagements, while August brings branding and creative expertise to selected Neologicx projects. Together, we connect creative communication with practical digital delivery.',
    capabilities: ['Brand strategy and identity', 'Integrated advertising campaigns', 'Digital and social media marketing', 'Films and visual storytelling', 'Print, outdoor and packaging design', 'Media planning and buying'],
    partnershipFocus: ['Technology delivery for August-led projects', 'Branding and creative support for Neologicx engagements'],
    website: 'https://itsaugust.com',
    websiteLabel: 'itsaugust.com',
    portfolioLabel: "Explore August's portfolio",
    portfolioLink: 'https://itsaugust.com/portfolio/'
  },
  {
    id: 'a2ai',
    name: 'A2.AI',
    label: 'AI and automation partner',
    location: 'Australia',
    icon: BrainCircuit,
    shortDesc: 'AI, machine learning and workflow automation expertise, supported by custom software and integration capabilities.',
    longDesc: 'A2.AI is an Australia-based technology company focused on AI, machine learning, automation and digital product development. Its portfolio includes AI-powered customer support, document and legal workflow automation, manufacturing resource planning, and other business applications. Its wider capabilities cover web and mobile development, custom software, and API, data and platform integrations.\n\nNeologicx and A2.AI maintain a strategic technology partnership for AI and automation related opportunities. For relevant client requirements, we can bring specialist expertise into discovery and solution planning, with each team\'s scope and responsibilities agreed for the engagement.',
    capabilities: ['AI and machine learning', 'Conversational AI and customer support', 'Document and workflow automation', 'Manufacturing planning and analytics', 'Web and mobile applications', 'Custom software and integrations'],
    partnershipFocus: ['AI-enabled solutions', 'Business process automation', 'Integration with client systems'],
    website: 'https://a2ai.com.au',
    websiteLabel: 'a2ai.com.au',
    portfolioLabel: "Explore A2.AI's portfolio",
    portfolioLink: 'https://www.a2ai.com.au/portfolio'
  },
  {
    id: 'mtechnix',
    name: 'MTechnix Sdn. Bhd.',
    label: 'Cybersecurity and technology delivery partner',
    location: 'Malaysia',
    icon: Shield,
    shortDesc: 'OT and IT cybersecurity expertise, engineering capabilities and Malaysia-based delivery collaboration.',
    longDesc: 'MTechnix Sdn. Bhd. is a Malaysia-based company with capabilities in operational technology (OT) and information technology (IT) cybersecurity, engineering services, standards and certification consulting, project management, and professional training. Its cybersecurity services include security posture and risk assessments, penetration testing, technology risk frameworks, resilience reviews, and industrial control system security. Its wider engineering work covers areas such as instrumentation and controls, process safety, asset integrity, and maintenance.\n\nNeologicx partners with MTechnix for cybersecurity related opportunities and technology delivery collaboration in Malaysia. Where a client engagement calls for these capabilities, we will define each team\'s contribution, scope and delivery responsibilities for that project.',
    capabilities: ['OT and IT cybersecurity', 'Security assessments and penetration testing', 'Risk and compliance consulting', 'Industrial engineering and process safety', 'Professional training'],
    partnershipFocus: ['Cybersecurity related opportunities', 'Technology delivery in Malaysia'],
    website: 'https://mtechnix.com',
    websiteLabel: 'mtechnix.com'
  }
];

const collaborations = [
  {
    title: 'Swachh Bharat Toilet Locator',
    description: 'A public-service mobile initiative to help citizens discover public toilets and support management of location data.',
    link: '/portfolio/ministry-of-urban-development-government-of-india'
  },
  {
    title: 'ECI Apps',
    description: 'An election information and services mobile initiative serving different stakeholder groups.',
    link: '/portfolio/eci-app'
  },
  {
    title: 'E-Parchi',
    description: 'A mobile application associated with access to medical services.',
    link: '/portfolio/e-parchi-android'
  }
];

export default function StrategicPartnersClient() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageHero
        title="Strategic Partners"
        description="Specialist expertise brought together for the right project. Neologicx works with a small group of strategic partners whose capabilities complement our software engineering work. These ongoing relationships help us bring branding and creative thinking, AI and automation, cybersecurity, and regional technology delivery expertise into relevant engagements. We define each team’s role according to the project."
        actionLinks={[{ label: 'Discuss Your Project', href: '/contact' }]}
        badge="Partnerships"
      />

      {/* Overview Cards */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => {
                const element = document.getElementById(partner.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex flex-col p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <partner.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{partner.location}</p>
                </div>
              </div>
              <p className="text-primary font-bold mb-3 text-sm tracking-wide uppercase">{partner.label}</p>
              <p className="text-foreground leading-relaxed">{partner.shortDesc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Profiles */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-32"
                id={partner.id}
              >
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Partner Profile {idx + 1}</h4>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">{partner.name}</h2>
                <p className="text-lg text-primary font-medium mb-6">
                  {partner.label} <span className="text-muted-foreground font-normal mx-2">|</span> {partner.location}
                </p>
                <div className="text-lg text-foreground/90 leading-relaxed mb-8 max-w-4xl space-y-4">
                  {partner.longDesc.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
                    <h5 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider text-muted-foreground">Capabilities</h5>
                    <div className="flex flex-wrap gap-2">
                      {partner.capabilities.map((item, i) => (
                        <span key={i} className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
                    <h5 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider text-muted-foreground">Partnership focus</h5>
                    <div className="flex flex-wrap gap-2">
                      {partner.partnershipFocus.map((item, i) => (
                        <span key={i} className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
                  >
                    Partner website: {partner.websiteLabel}
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  {partner.portfolioLabel && (
                    <>
                      <span className="text-muted-foreground hidden sm:inline">|</span>
                      <a 
                        href={partner.portfolioLink || partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
                      >
                        {partner.portfolioLabel}
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Collaborations */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Selected Collaborations with August</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Projects we have worked on together</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Selected examples of our working relationship with August Communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborations.map((collab, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{collab.title}</h3>
              <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">{collab.description}</p>
              <Link 
                href={collab.link}
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:underline underline-offset-4"
              >
                View case study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 md:py-32 bg-primary/5 text-foreground relative overflow-hidden border-y border-border/50">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">How we work</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-foreground drop-shadow-sm">The right team for the requirement</h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            We first understand the client&apos;s objective and determine which capabilities the project needs. Where a partner is involved, we agree the scope of work, responsibilities, communication and delivery arrangements for that specific engagement. This gives the client a clear view of who is contributing and how the work will be managed.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title={
          <>
            Have a project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary drop-shadow-lg">in mind?</span>
          </>
        }
        description="Tell us what you are trying to build or improve. We can discuss the technical requirement and, where relevant, bring the appropriate partner into the conversation."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />
    </div>
  );
}
