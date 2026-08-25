import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Mail,
  ArrowRight
} from 'lucide-react';

const Facebook = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const Instagram = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const Twitter = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
const Linkedin = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;

import { Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/products' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Insights', href: '/blog' },
    { label: 'About', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Sitemap', href: '/sitemap' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/neologicx-resources-india-pvt-ltd-/' },
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: 'https://www.facebook.com/neologicxindia' },
    { icon: Instagram, href: 'https://www.instagram.com/neologicx.india/' },
  ];

  return (
    <footer className="bg-muted/30 font-sans">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">

          {/* Column 1: Company Info & Socials */}
          <div className="flex flex-col items-start">
            <Image
              src="/neo_logo.png"
              alt="Neologicx Resources Pvt Ltd"
              width={180}
              height={50}
              className="h-8 md:h-10 w-auto mb-6"
              priority
            />
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Neologicx Resources Pvt Ltd
            </h3>
            <p className="text-sm text-primary font-medium mb-4">
              Custom Software & Product Engineering <br /> • Established 2000
            </p>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              We help businesses transform and grow by engineering robust, scalable, and innovative software solutions tailored to your unique vision.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              More
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <span className="leading-relaxed">Bikaner, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <a href="mailto:support@neologicx.com" className="hover:text-primary transition-colors font-medium">
                  support@neologicx.com
                </a>
              </div>

              <div className="flex gap-3">
                {socials.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Neologicx Resources Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            {legalLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
