'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Clock, Send, ArrowRight,
  MessageSquare, Building2, Globe2, CheckCircle2
} from 'lucide-react';
import OurLocations from './OurLocations';
import GlobalLocations from './GlobalLocations';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@neologicx.com',
    href: 'mailto:hello@neologicx.com',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 151 252 4697',
    href: 'tel:+911512524697',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Bikaner, Rajasthan, India',
    href: '#',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat, 10:00 AM – 7:00 PM IST',
    href: '#',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
];



export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    companyWebsite: '',
    countryTimezone: '',
    projectNeed: '',
    projectDescription: '',
    budget: '',
    startWindow: '',
    privacyConsent: false,
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setFormData(prev => ({ ...prev, [target.name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [target.name]: target.value }));
    }
  };

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result as string;
        encoded = encoded.split(',')[1]; // Remove data:mime/type;base64,
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    let fileData = null;
    let fileName = null;
    let mimeType = null;

    if (file) {
      try {
        fileData = await getBase64(file);
        fileName = file.name;
        mimeType = file.type || 'application/octet-stream';
      } catch (err) {
        console.error("Error encoding file", err);
      }
    }

    const payload = {
      ...formData,
      fileData,
      fileName,
      mimeType
    };

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzRr3WJDb1Qa6XhTk-rvQmorerbg3KxXCXapm5BAP8YVJfVch5Yuy-Yp5qYXs12_BdL/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] md:min-h-[480px] lg:min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/2151893431.jpg"
            alt="Contact Neologicx"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[3px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm"
          >
            <span className="text-sm font-semibold tracking-wider text-blue-200 uppercase">Start a Conversation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg leading-tight"
          >
            Tell Us What You Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Building</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-white/80 leading-relaxed font-medium max-w-3xl"
          >
            Tell Neologicx about your software, mobile, SaaS, e‑commerce or integration requirement and start a discovery conversation.
          </motion.p>
        </div>

        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px] z-20" />
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.href}
              className="bg-card border border-border/50 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${info.bg} flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{info.label}</span>
              </div>
              <p className="text-sm font-bold text-foreground leading-snug">{info.value}</p>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Main Content: Form + Side Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Form — 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-card border border-border/50 rounded-3xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold text-foreground mb-4">Message Sent!</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
                  Thank you for reaching out. We will review your requirement and get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFile(null); setFormData({ name: '', workEmail: '', companyWebsite: '', countryTimezone: '', projectNeed: '', projectDescription: '', budget: '', startWindow: '', privacyConsent: false }); }}
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-foreground">Project Inquiry Form</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-work-email" className="block text-sm font-semibold text-foreground mb-2">Work Email *</label>
                      <input
                        id="contact-work-email"
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Company/Website & Country/Timezone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company-website" className="block text-sm font-semibold text-foreground mb-2">Company / Website *</label>
                      <input
                        id="contact-company-website"
                        type="text"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        required
                        placeholder="Your company or website URL"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-country" className="block text-sm font-semibold text-foreground mb-2">Country & Time Zone *</label>
                      <input
                        id="contact-country"
                        type="text"
                        name="countryTimezone"
                        value={formData.countryTimezone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. India, IST (UTC+5:30)"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* What do you need? */}
                  <div>
                    <label htmlFor="contact-project-need" className="block text-sm font-semibold text-foreground mb-2">What do you need? *</label>
                    <select
                      id="contact-project-need"
                      name="projectNeed"
                      value={formData.projectNeed}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="Product Engineering">Product Engineering</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Integration & Automation">Integration & Automation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="contact-description" className="block text-sm font-semibold text-foreground mb-2">Briefly describe the problem or project *</label>
                    <textarea
                      id="contact-description"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe the problem you are solving, the users involved, and what you expect the software to do..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Budget & Start Window (both optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-semibold text-foreground mb-2">Indicative Budget Range <span className="text-foreground font-normal">(optional)</span></label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none"
                      >
                        <option value="">Select range...</option>
                        <option value="Under ₹5 Lakh">Under ₹5 Lakh</option>
                        <option value="₹5 – 15 Lakh">₹5 – 15 Lakh</option>
                        <option value="₹15 – 50 Lakh">₹15 – 50 Lakh</option>
                        <option value="₹50 Lakh+">₹50 Lakh+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-start-window" className="block text-sm font-semibold text-foreground mb-2">Expected Start Window <span className="text-foreground font-normal">(optional)</span></label>
                      <select
                        id="contact-start-window"
                        name="startWindow"
                        value={formData.startWindow}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none"
                      >
                        <option value="">Select timeline...</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="Flexible / Not decided">Flexible / Not decided</option>
                      </select>
                    </div>
                  </div>

                  {/* File Upload (optional) */}
                  <div>
                    <label htmlFor="contact-file" className="block text-sm font-semibold text-foreground mb-2">File or Brief Upload <span className="text-foreground font-normal">(optional)</span></label>
                    <div className="relative">
                      <input
                        id="contact-file"
                        type="file"
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg,.zip"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-foreground mt-1.5">PDF, DOC, PPT, images or ZIP — max 10 MB</p>
                  </div>

                  {/* Privacy Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      id="contact-privacy"
                      type="checkbox"
                      name="privacyConsent"
                      checked={formData.privacyConsent as unknown as boolean}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/50 cursor-pointer accent-primary"
                    />
                    <label htmlFor="contact-privacy" className="text-sm text-foreground leading-snug cursor-pointer">
                      I agree that Neologicx may store and process my data to respond to this inquiry. We will not share your information with third parties. *
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!formData.privacyConsent || loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-base hover:bg-primary/90 hover:shadow-xl transition-all hover:-translate-y-0.5 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Submitting..." : "Submit Inquiry"}
                    {!loading && <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />}
                  </button>
                </form>
              </div>
            )}
          </motion.div>

          {/* Side Info — 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* What Happens Next */}
            <div className="bg-card border border-border/50 rounded-3xl p-8">
              <h3 className="text-xl font-extrabold text-foreground mb-6">What Happens Next</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'We Review Your Requirement', desc: 'Our team reads through your brief and identifies the right expertise to respond.' },
                  { step: '02', title: 'Discovery Conversation', desc: 'We schedule a call to understand your users, workflows, constraints and timelines.' },
                  { step: '03', title: 'Scoping & Proposal', desc: 'We share a tailored scope, timeline and engagement model that fits your context.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs text-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Neologicx */}
            <div className="bg-card border border-border/50 rounded-3xl p-8">
              <h3 className="text-xl font-extrabold text-foreground mb-6">Why Neologicx</h3>
              <div className="space-y-4">
                {[
                  '25+ years of software delivery',
                  'Full-stack web, mobile & backend capabilities',
                  'Government, FMCG, education & international projects',
                  'Transparent engagement models',
                  'Long-term partnerships, not one-off contracts',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-card border border-border/50 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-extrabold text-foreground">Direct Contact</h3>
              </div>

              <p className="text-sm font-bold text-foreground mb-1">Neologicx Resources Pvt Ltd</p>
              <p className="text-sm text-foreground mb-5">Bikaner, Rajasthan, India</p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a href="mailto:rajeev@neologicx.com" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                    rajeev@neologicx.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-foreground/80">
                    <a href="tel:+919414138694" className="hover:text-primary transition-colors">+91 94141 38694</a>
                    {' / '}
                    <a href="tel:+919414138620" className="hover:text-primary transition-colors">+91 94141 38620</a>
                  </div>
                </div>
              </div>

              <p className="text-xs text-foreground mt-5 leading-relaxed">
                For international calls, use the scheduling link to choose a mutually workable time.
              </p>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Our Locations Section */}
      <GlobalLocations />

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg overflow-hidden h-[450px] relative border-t border-border/50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.0021667234846!2d73.31716039999999!3d28.024409600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd70b06eb227%3A0xb876dfcceb70afec!2sNeologicx%20Resources%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1786360621537!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full transition-all duration-700"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
