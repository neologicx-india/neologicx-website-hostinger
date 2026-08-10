import { NextResponse } from 'next/server';

export interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  client: string;
  industry: string;
  duration: string;
  platforms: string[];
  challenge: string;
  solution: string;
  features: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery: string[];
  relatedSlugs: string[];
}

const caseStudiesDb: Record<string, CaseStudyData> = {
  'bikaji': {
    slug: 'bikaji',
    title: 'BIKAJI',
    category: 'Customer Care & Commerce',
    tagline: 'Digitizing customer care and commerce workflows for one of India\'s leading FMCG brands.',
    description: 'E-commerce and customer-care workflows, including structured complaint handling, severity tracking, an administration dashboard and WhatsApp notifications.',
    heroImage: '/images/portfolio/bikaji.png',
    client: 'Bikaji Foods International Ltd.',
    industry: 'FMCG / Food Manufacturing',
    duration: 'Ongoing since 2019',
    platforms: ['Web', 'Mobile', 'WhatsApp'],
    challenge: 'Bikaji needed a unified system to manage customer complaints across multiple product lines and regions, while also building a modern e-commerce presence. The existing process was manual, lacked severity tracking and offered no real-time visibility to management.',
    solution: 'We built an integrated customer-care portal with structured complaint handling, severity-based routing, an admin dashboard with real-time analytics and automated WhatsApp notifications. In parallel, we engineered a scalable e-commerce platform supporting mobile and web ordering.',
    features: [
      { title: 'Structured Complaint Handling', description: 'Multi-level complaint categorization with severity tracking and automatic escalation workflows.' },
      { title: 'Administration Dashboard', description: 'Real-time analytics, complaint status visibility and operational reports for management.' },
      { title: 'WhatsApp Notifications', description: 'Automated customer updates via WhatsApp Business API for complaint status and order confirmations.' },
      { title: 'E-commerce Platform', description: 'Scalable online ordering with mobile-first design, inventory management and payment integration.' }
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'WhatsApp Business API', 'AWS'],
    results: [
      { metric: 'Complaint Resolution', value: '60% faster' },
      { metric: 'Customer Satisfaction', value: '4.2x improvement' },
      { metric: 'Order Processing', value: '3x throughput' }
    ],
    gallery: ['/images/portfolio/bikaji.png'],
    relatedSlugs: ['eck-alumni-connect', 'eci-app']
  },
  'eck-alumni-connect': {
    slug: 'eck-alumni-connect',
    title: 'ECK–RTU Alumni Connect',
    category: 'Alumni Connect',
    tagline: 'Bringing together thousands of alumni across batches, cities and industries.',
    description: 'Android and iOS alumni experience covering registration, discovery by batch/city/industry, events, donations and push notifications.',
    heroImage: '/images/portfolio/alumni_connect.png',
    client: 'ECK–RTU Alumni Association',
    industry: 'Education / Community',
    duration: '6 months initial + ongoing',
    platforms: ['iOS', 'Android'],
    challenge: 'The alumni association had no digital platform to connect graduates spread across India and abroad. Event management was done via email chains and donation collection was entirely offline.',
    solution: 'We designed and developed a cross-platform mobile app enabling alumni registration, discovery by batch/city/industry, event management with RSVP, secure donation processing and push notifications to keep the community engaged.',
    features: [
      { title: 'Registration & Discovery', description: 'Smart alumni directory with filters for batch year, city, industry and professional background.' },
      { title: 'Event Management', description: 'In-app event creation, ticketing, RSVP tracking and calendar integration.' },
      { title: 'Secure Donations', description: 'Integrated payment gateway for alumni contributions with receipt generation and tracking.' },
      { title: 'Push Notifications', description: 'Targeted push notifications for events, news and community updates.' }
    ],
    techStack: ['React Native', 'Firebase', 'Node.js', 'Razorpay'],
    results: [
      { metric: 'Registered Alumni', value: '5,000+' },
      { metric: 'Event Participation', value: '3x increase' },
      { metric: 'Donation Volume', value: '200% growth' }
    ],
    gallery: ['/images/portfolio/alumni_connect.png'],
    relatedSlugs: ['bikaji', 'culture-heritage']
  },
  'eci-app': {
    slug: 'eci-app',
    title: 'Election Commission of India',
    category: 'Mobile Service Platform',
    tagline: 'Empowering citizens with election information and digital voter services.',
    description: 'A public-facing mobile application bringing election information and citizen-facing utilities into a consolidated experience.',
    heroImage: '/images/portfolio/eci.png',
    client: 'Election Commission of India',
    industry: 'Government / Public Service',
    duration: 'Project-based delivery',
    platforms: ['Android', 'iOS'],
    challenge: 'Citizens needed a single point of access for election-related information including candidate details, affidavits, past election data and digital voter services. The existing system was fragmented across multiple government websites.',
    solution: 'We developed a mobile application that consolidates election information, candidate and affidavit details, past election trends, digital voter-slip functionality and citizen complaint submission into a unified, accessible experience.',
    features: [
      { title: 'Candidate & Affidavit Information', description: 'Complete candidate profiles with filed affidavits, criminal records and asset declarations.' },
      { title: 'Past Election Data & Trends', description: 'Historical election results with visual trend analysis across constituencies.' },
      { title: 'Digital Voter-Slip', description: 'Generate and share digital voter slips with booth information and QR verification.' },
      { title: 'Complaint Submission', description: 'In-app complaint filing for election irregularities with status tracking.' }
    ],
    techStack: ['Android (Java)', 'iOS (Swift)', 'REST APIs', 'Government Data APIs'],
    results: [
      { metric: 'Downloads', value: '1M+' },
      { metric: 'Active Users', value: '500K+' },
      { metric: 'User Rating', value: '4.1★' }
    ],
    gallery: ['/images/portfolio/eci.png'],
    relatedSlugs: ['rajuvas', 'culture-heritage']
  },
  'rajuvas': {
    slug: 'rajuvas',
    title: 'RAJUVAS & SKRAU',
    category: 'University Web Platforms',
    tagline: 'Content-rich digital presence for public universities.',
    description: 'Content-rich, responsive public university websites and CMS/backend workflows designed for complex institutional information.',
    heroImage: '/images/portfolio/public_universities.png',
    client: 'RAJUVAS & SKRAU Universities',
    industry: 'Education / Government',
    duration: 'Multi-phase engagement',
    platforms: ['Web', 'CMS'],
    challenge: 'Both universities needed modern, content-rich websites that could handle complex institutional hierarchies, thousands of documents, departmental pages and dynamic announcements while remaining accessible to diverse stakeholders.',
    solution: 'We built responsive public university websites with a custom CMS backend supporting multi-level content hierarchies, document management, departmental workflows and real-time announcement systems designed for high-traffic institutional use.',
    features: [
      { title: 'Responsive Public Websites', description: 'Mobile-first, WCAG-compliant university websites with intuitive navigation structures.' },
      { title: 'Content-Rich Architecture', description: 'Support for thousands of pages, documents, images and departmental hierarchies.' },
      { title: 'CMS & Backend Workflows', description: 'Custom content management with role-based publishing, approval workflows and versioning.' },
      { title: 'Institutional Information Management', description: 'Centralized management of notices, circulars, results and academic calendars.' }
    ],
    techStack: ['WordPress', 'PHP', 'MySQL', 'Custom Plugins'],
    results: [
      { metric: 'Monthly Visitors', value: '200K+' },
      { metric: 'Published Pages', value: '10,000+' },
      { metric: 'Uptime', value: '99.9%' }
    ],
    gallery: ['/images/portfolio/public_universities.png'],
    relatedSlugs: ['eci-app', 'jazz-cafe']
  },
  'jazz-cafe': {
    slug: 'jazz-cafe',
    title: 'The Jazz Café, UK',
    category: 'Restaurant & Event Operations',
    tagline: 'Streamlining restaurant and event operations in Reading, UK.',
    description: 'A web-based system supporting bookings, events, payments, reminders and back-office coordination.',
    heroImage: '/images/portfolio/jazz_cafe.png',
    client: 'The Jazz Café, Reading, UK',
    industry: 'Hospitality / Events',
    duration: 'Ongoing partnership',
    platforms: ['Web', 'Admin Dashboard'],
    challenge: 'The restaurant needed to coordinate bookings, events, payments and staff scheduling through a unified system instead of multiple disconnected tools and manual processes.',
    solution: 'We developed a web-based operations platform integrating table bookings, event management, payment processing, automated reminders and back-office coordination — all tailored for the restaurant and live music venue workflow.',
    features: [
      { title: 'Restaurant Bookings', description: 'Online reservation system with table management, capacity tracking and confirmation emails.' },
      { title: 'Event Operations', description: 'Event creation, ticketing, artist management and promotional tools for live music events.' },
      { title: 'Payments & Reminders', description: 'Integrated payment processing with automated booking confirmations and event reminders.' },
      { title: 'Back-Office Coordination', description: 'Staff scheduling, inventory alerts and financial reporting dashboard.' }
    ],
    techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel'],
    results: [
      { metric: 'Booking Efficiency', value: '70% faster' },
      { metric: 'No-Show Rate', value: '45% reduction' },
      { metric: 'Event Revenue', value: '2.5x growth' }
    ],
    gallery: ['/images/portfolio/jazz_cafe.png'],
    relatedSlugs: ['bikaji', 'rajuvas']
  },
  'culture-heritage': {
    slug: 'culture-heritage',
    title: 'Heritage Olympiad',
    category: 'Culture & Learning',
    tagline: 'Gamifying heritage education through competitive mobile learning.',
    description: 'A mobile learning and quiz experience focused on tangible, intangible and natural heritage, with competitive play and leaderboards.',
    heroImage: '/images/portfolio/heritage.png',
    client: 'Heritage Olympiad Foundation',
    industry: 'Education / EdTech',
    duration: '4 months development',
    platforms: ['Android', 'iOS'],
    challenge: 'The foundation wanted to engage students and the public in learning about India\'s cultural heritage in an interactive way, moving beyond passive reading to active, competitive participation.',
    solution: 'We created a mobile quiz platform covering tangible, intangible and natural heritage topics with single and multiplayer competitive modes, leaderboards, achievement badges and curated content organized by heritage categories.',
    features: [
      { title: 'Mobile Quiz Experience', description: 'Timed quizzes with multiple-choice, image-based and scenario questions across heritage categories.' },
      { title: 'Heritage Content Library', description: 'Curated content covering UNESCO sites, intangible heritage, natural landmarks and regional traditions.' },
      { title: 'Competitive Play', description: 'Single-player challenges and multiplayer head-to-head modes with real-time scoring.' },
      { title: 'Leaderboards & Achievements', description: 'National and regional leaderboards with achievement badges and progress tracking.' }
    ],
    techStack: ['Flutter', 'Firebase', 'Cloud Functions', 'Firestore'],
    results: [
      { metric: 'Active Players', value: '10,000+' },
      { metric: 'Quizzes Completed', value: '100K+' },
      { metric: 'Avg. Session Time', value: '12 mins' }
    ],
    gallery: ['/images/portfolio/heritage.png'],
    relatedSlugs: ['eci-app', 'eck-alumni-connect']
  },
  'e-parchi-android': {
    slug: 'e-parchi-android',
    title: 'E-Parchi',
    category: 'Healthcare Mobile App',
    tagline: 'A Red Cross Society pilot to improve private medical service access.',
    description: 'E-Parchi is an Android mobile initiative developed as a Red Cross Society pilot to help underserved users access private medical services.',
    heroImage: '/images/portfolio/bikaji.png',
    client: 'Red Cross Society (Pilot)',
    industry: 'Healthcare / Social Impact',
    duration: 'Pilot project',
    platforms: ['Android'],
    challenge: 'Underserved communities lacked a simple, accessible way to discover and access private medical services in their area. Information was fragmented and unreliable.',
    solution: 'We developed E-Parchi, a lightweight Android application that connects users to nearby private medical service providers, enabling appointment booking and digital health record access.',
    features: [
      { title: 'Service Discovery', description: 'Locate nearby private medical facilities with real-time availability information.' },
      { title: 'Digital Health Records', description: 'Store and share basic health records digitally for continuity of care.' },
      { title: 'Appointment Booking', description: 'Book appointments with verified medical service providers.' },
      { title: 'Offline Support', description: 'Core functionality available even with limited internet connectivity.' }
    ],
    techStack: ['Android (Java)', 'SQLite', 'REST APIs', 'Google Maps API'],
    results: [
      { metric: 'Pilot Users', value: '500+' },
      { metric: 'Service Providers', value: '50+ enrolled' },
      { metric: 'Appointments', value: '1,200+ booked' }
    ],
    gallery: [],
    relatedSlugs: ['eci-app', 'eck-alumni-connect']
  },
  'wus-app-android': {
    slug: 'wus-app-android',
    title: 'WUS Worker Community',
    category: 'Community Mobile App',
    tagline: 'Digital connection and inclusion for workers.',
    description: 'A mobile community initiative for WUS / Worker Union Support, designed around digital connection and inclusion for workers.',
    heroImage: '/images/portfolio/alumni_connect.png',
    client: 'WUS Organization',
    industry: 'Social / Community',
    duration: 'Project-based',
    platforms: ['Android'],
    challenge: 'Workers in the community lacked a digital platform for communication, resource sharing and collective engagement beyond physical meetings.',
    solution: 'We built a community-focused Android application enabling worker registration, news feeds, event coordination and resource sharing within the WUS network.',
    features: [
      { title: 'Worker Registration', description: 'Simple registration and profile creation for community members.' },
      { title: 'News & Updates', description: 'Centralized feed for community news, policy updates and announcements.' },
      { title: 'Event Coordination', description: 'Meeting scheduling, RSVP and location sharing for community events.' },
      { title: 'Resource Sharing', description: 'Document library for shared resources, guidelines and community materials.' }
    ],
    techStack: ['Android (Java)', 'Firebase', 'REST APIs'],
    results: [
      { metric: 'Community Members', value: '1,000+' },
      { metric: 'Events Coordinated', value: '50+' },
      { metric: 'Resources Shared', value: '200+' }
    ],
    gallery: [],
    relatedSlugs: ['eck-alumni-connect', 'e-parchi-android']
  },
  'swami-keshwanand-rajasthan-agricultural-university-skrau': {
    slug: 'swami-keshwanand-rajasthan-agricultural-university-skrau',
    title: 'SKRAU',
    category: 'University CMS Modernization',
    tagline: 'Website and CMS modernization for Swami Keshwanand Rajasthan Agricultural University.',
    description: 'Website and backend/CMS modernization for Swami Keshwanand Rajasthan Agricultural University, supporting complex institutional information workflows.',
    heroImage: '/images/portfolio/public_universities.png',
    client: 'SKRAU University',
    industry: 'Education / Government',
    duration: 'Multi-phase',
    platforms: ['Web', 'CMS'],
    challenge: 'The university\'s legacy website was outdated, difficult to manage and could not handle the growing volume of institutional content and academic information.',
    solution: 'We modernized the entire web presence with a responsive design, custom CMS workflows for departmental content management, document archives and academic information systems.',
    features: [
      { title: 'Website Modernization', description: 'Complete redesign with responsive, accessible and performance-optimized architecture.' },
      { title: 'Custom CMS Workflows', description: 'Role-based content management for departments, faculties and administrative offices.' },
      { title: 'Document Archive', description: 'Centralized document management for circulars, results, notifications and academic papers.' },
      { title: 'Academic Information System', description: 'Integration of academic calendars, examination schedules and result publication workflows.' }
    ],
    techStack: ['WordPress', 'PHP', 'MySQL', 'Custom Themes'],
    results: [
      { metric: 'Page Load Time', value: '60% faster' },
      { metric: 'Content Updates', value: '5x easier' },
      { metric: 'User Satisfaction', value: '90%+' }
    ],
    gallery: ['/images/portfolio/public_universities.png'],
    relatedSlugs: ['rajuvas', 'eci-app']
  }
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const data = caseStudiesDb[slug];

  if (!data) {
    return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}

// Get all slugs for static generation
export async function POST() {
  const slugs = Object.keys(caseStudiesDb);
  return NextResponse.json({ slugs });
}
