"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Menu,
  X,
  Code2,
  Smartphone,
  Globe,
  ShoppingCart,
  Zap,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: 'Solutions', route: '/products' },
  { label: 'Industries', route: '/industries' },
  { label: 'Case Studies', route: '/portfolio' },
  { label: 'Insights', route: '/blog' },
  { label: 'About', route: '/about-us' },
];

const serviceCategories = [
  {
    title: 'Product Engineering',
    route: '/product-engineering',
    icon: Cpu,
    description: 'End-to-end product engineering services to build scalable, secure, and future-ready digital products.',
    subLinks: [
      { label: 'SaaS Development', route: '/saas-development-services', description: 'Scalable, secure and multi-tenant SaaS solutions tailored for your business.' },
      { label: 'MVP Development', route: '/mvp-development-startup', description: 'Launch your idea faster with a validated MVP built for growth.' },
    ],
  },
  {
    title: 'Custom Software Development',
    route: '/custom-software-development',
    icon: Code2,
    description: 'Custom business applications, workflow systems, and portals built around your operations.',
    subLinks: [
      { label: 'Custom Business Software & ERP', route: '/custom-erp-software-service', description: 'Custom ERP-style software for connected operations.' },
      { label: 'Custom CRM', route: '/crm-development-custom-software', description: 'Custom CRM software for sales workflow automation.' },
    ],
  },
  {
    title: 'Web Application Development',
    route: '/web-development-design-website',
    icon: Globe,
    description: 'Custom web applications and portals designed for business workflows and institutions.',
    subLinks: [],
  },
  {
    title: 'Mobile App Development',
    route: '/mobile-app-development-android-ios-flutter',
    icon: Smartphone,
    description: 'Design and development of iOS, Android and Flutter apps for connected business workflows.',
    subLinks: [],
  },
  {
    title: 'E-commerce Engineering',
    route: '/ecommerce-website-development-shoppingcart',
    icon: ShoppingCart,
    description: 'E-commerce engineering across major open-source and custom commerce integrations.',
    subLinks: [
      { label: 'WordPress & WooCommerce', route: '/wordpress-development-services', description: 'Custom WordPress and WooCommerce development for commerce.' },
    ],
  },
  {
    title: 'API, Integration & Automation',
    route: '/api-development-services',
    icon: Zap,
    description: 'Design APIs, connect business systems and automate workflows across platforms.',
    subLinks: [
      { label: 'WhatsApp Business Platform', route: '/whatsapp-chatbot-development', description: 'Connect WhatsApp Business Platform to your business workflows.' },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[1000] transition-all duration-300 font-sans",
      "bg-background/90 backdrop-blur-md border-b border-border/50",
      isMenuOpen && "!bg-background !backdrop-blur-none",
      isScrolled ? "shadow-sm py-2" : "py-4"
    )}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0" onClick={closeMenu}>
          <Image
            src="/neo_logo.png"
            alt="Neologicx"
            width={180}
            height={50}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-2 list-none m-0 p-0">
          {/* Services Dropdown */}
          <li onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
            <button className={cn(
              "group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors",
              "text-foreground hover:text-muted-foreground hover:bg-muted/50",
              (servicesDropdown || pathname.includes('/services')) && "text-foreground bg-muted/50"
            )}>
              <Link href="/services" onClick={() => setServicesDropdown(false)}>Services</Link>
              <ChevronDown className={cn("w-4 h-4 opacity-50 transition-transform duration-200", servicesDropdown && "rotate-180")} />
            </button>

            {/* Mega Menu Dropdown */}
            <div className={cn(
              "absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-[900px] bg-background border border-border/50 rounded-xl shadow-2xl transition-all duration-200 overflow-hidden",
              servicesDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4 pointer-events-none"
            )}>
              {/* Invisible bridge to keep hover active */}
              <div className="absolute -top-16 left-0 right-0 h-16 bg-transparent" />

              <div className="flex min-h-[400px]">
                {/* Left Column - Service List */}
                <div className="w-[380px] bg-muted/20 border-r border-border/50 p-4 flex flex-col gap-1">
                  {serviceCategories.map((category, idx) => {
                    const Icon = category.icon;
                    const isActive = activeServiceIdx === idx;
                    return (
                      <Link
                        key={idx}
                        href={category.route}
                        onMouseEnter={() => setActiveServiceIdx(idx)}
                        onClick={() => setServicesDropdown(false)}
                        className={cn(
                          "group flex items-center justify-between p-3 rounded-lg transition-colors",
                          isActive ? "bg-primary/10" : "hover:bg-muted/50"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                            isActive ? "bg-background text-primary shadow-sm" : "bg-muted text-muted-foreground group-hover:text-primary"
                          )}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-primary mb-0.5 opacity-80">
                              0{idx + 1}
                            </span>
                            <span className={cn(
                              "text-sm font-semibold transition-colors",
                              isActive ? "text-primary" : "text-foreground"
                            )}>
                              {category.title}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className={cn(
                          "w-4 h-4 transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                        )} />
                      </Link>
                    );
                  })}
                </div>

                {/* Right Column - Active Service Details */}
                <div className="flex-1 p-8 bg-background flex flex-col justify-center">
                  {(() => {
                    const activeCat = serviceCategories[activeServiceIdx];
                    const ActiveIcon = activeCat.icon;
                    return (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-300 fill-mode-both" key={activeServiceIdx}>
                        <div className="flex items-start gap-5 mb-8">
                          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <ActiveIcon className="w-7 h-7" />
                          </div>
                          <div className="flex flex-col pt-1">
                            <h3 className="text-xl font-bold text-foreground mb-2">
                              {activeCat.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {activeCat.description}
                            </p>
                          </div>
                        </div>

                        {activeCat.subLinks.length > 0 && (
                          <>
                            <div className="h-px bg-border/50 w-full mb-6" />
                            <div className="flex flex-col gap-6">
                              {activeCat.subLinks.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={sub.route}
                                  onClick={() => setServicesDropdown(false)}
                                  className="group flex flex-col gap-1"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {sub.label}
                                      </span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </div>
                                  <p className="text-xs text-muted-foreground pl-4">
                                    {sub.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </li>

          {/* Standard Links */}
          {navLinks.map((link) => (
            <li key={link.route}>
              <Link
                href={link.route}
                className={cn(
                  "inline-flex px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  "text-foreground hover:text-muted-foreground hover:bg-muted/50",
                  pathname.startsWith(link.route) && "text-foreground bg-muted/50"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={cn(
                "inline-flex px-4 py-2 rounded-md text-sm font-medium transition-colors",
                "text-foreground hover:text-muted-foreground hover:bg-muted/50",
                pathname === '/contact' && "text-foreground bg-muted/50"
              )}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Discuss Your Project
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={cn(
        "lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-background overflow-y-auto transition-transform duration-300 ease-in-out border-t border-border",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-4 gap-2">
          {/* Mobile Services Accordion */}
          <div className="flex flex-col rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between p-4 bg-muted/30 text-sm font-medium text-foreground"
            >
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
            </button>
            <div className={cn(
              "overflow-hidden transition-all duration-300 bg-background",
              mobileServicesOpen ? "max-h-[1000px] border-t border-border/50" : "max-h-0"
            )}>
              <div className="p-2 flex flex-col gap-1">
                {serviceCategories.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <div key={idx} className="flex flex-col mb-2">
                      <Link
                        href={category.route}
                        onClick={closeMenu}
                        className="flex items-center gap-3 p-2 rounded-md text-sm font-medium text-foreground hover:bg-muted/50"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        {category.title}
                      </Link>
                      {category.subLinks.length > 0 && (
                        <div className="flex flex-col pl-9 gap-1 mt-1">
                          {category.subLinks.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.route}
                              onClick={closeMenu}
                              className="text-xs text-muted-foreground py-1 hover:text-primary"
                            >
                              • {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Standard Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              onClick={closeMenu}
              className="p-4 rounded-lg border border-transparent hover:bg-muted/50 text-sm font-medium text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="p-4 rounded-lg border border-transparent hover:bg-muted/50 text-sm font-medium text-foreground transition-colors"
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Discuss Your Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
