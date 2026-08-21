import { NextResponse } from 'next/server';

const baseUrl = 'https://neologicx.com';

const mockMetadataDb: Record<string, any> = {
  '/': {
    title: 'Neologicx | Custom Software & Product Engineering Company',
    description: 'Custom software and product engineering for web, mobile, SaaS, business systems, e-commerce and integrations. Established in 2000.',
    keywords: ['custom software', 'product engineering', 'web development', 'mobile apps', 'SaaS', 'Neologicx'],
  },
  '/about-us': {
    title: 'About Neologicx | Software Engineering Company Since 2000',
    description: 'Meet Neologicx, a software engineering company established in 2000, building web, mobile and business platforms from Bikaner, India.',
    keywords: ['about Neologicx', 'software company India', 'Bikaner IT company', 'established software firm'],
  },
  '/services': {
    title: 'Software Engineering Services | Neologicx',
    description: 'Product engineering, custom software, web and mobile development, e-commerce, APIs, integrations and automation from Neologicx.',
    keywords: ['software services', 'product engineering services', 'custom software development', 'API integration'],
  },
  '/products': {
    title: 'Configurable Business Software Solutions | Neologicx',
    description: 'Explore configurable software foundations for construction operations, complaint management, order workflows and education administration.',
    keywords: ['business software solutions', 'configurable software', 'Neologicx products', 'operations software'],
  },
  '/portfolio': {
    title: 'Software Development Case Studies | Neologicx',
    description: 'See selected Neologicx work across mobile apps, web platforms, business systems, e-commerce, education, government and international projects.',
    keywords: ['software case studies', 'development portfolio', 'Neologicx work', 'app portfolio'],
  },
  '/industries': {
    title: 'Software Development Across Industries | Neologicx',
    description: 'Neologicx software experience across education, manufacturing, FMCG, retail, construction, hospitality, events and professional workflows.',
    keywords: ['industry software', 'software for FMCG', 'retail software', 'education software', 'healthcare software'],
  },
  '/engagement-models': {
    title: 'Software Development Engagement Models | Neologicx',
    description: 'Choose a fixed-scope, dedicated-team, time-and-materials or ongoing support model for your Neologicx software engagement.',
    keywords: ['engagement models', 'software delivery models', 'dedicated team', 'fixed scope project'],
  },
  '/blog': {
    title: 'Software Engineering Insights | Neologicx',
    description: 'Practical perspectives from Neologicx on product engineering, custom software, mobile, integrations, e-commerce and software modernization.',
    keywords: ['software engineering blog', 'tech insights', 'Neologicx blog', 'development trends'],
  },
  '/contact': {
    title: 'Contact Neologicx | Discuss Your Software Project',
    description: 'Tell Neologicx about your software, mobile, SaaS, e-commerce or integration requirement and start a discovery conversation.',
    keywords: ['contact Neologicx', 'hire software team', 'discuss software project'],
  },
  '/product-engineering': {
    title: 'Product Engineering Services | Neologicx',
    description: 'Product discovery, MVP development, SaaS engineering, modernization and ongoing product delivery from Neologicx.',
    keywords: ['product engineering', 'SaaS development', 'MVP development', 'software products'],
  },
  '/custom-software-development': {
    title: 'Custom Software Development Services | Neologicx',
    description: 'Custom business applications, workflow systems, ERP-style platforms, CRM, portals, dashboards and automation built around your operations.',
    keywords: ['custom software development', 'ERP development', 'CRM development', 'workflow automation'],
  },
  '/web-development-design-website': {
    title: 'Custom Web Application Development | Neologicx',
    description: 'Custom web applications, portals, dashboards and content platforms designed for business workflows, institutions and digital products.',
    keywords: ['web application development', 'custom web portals', 'dashboard development', 'enterprise web apps'],
  },
  '/mobile-app-development-android-ios-flutter': {
    title: 'Mobile App Development for iOS, Android & Flutter | Neologicx',
    description: 'Design and development of iOS, Android and Flutter apps for customers, communities, field teams and connected business workflows.',
    keywords: ['mobile app development', 'iOS development', 'Android development', 'Flutter development'],
  },
  '/ecommerce-website-development-shoppingcart': {
    title: 'E-commerce Development & Engineering | Neologicx',
    description: 'E-commerce engineering across Magento Open Source / Adobe Commerce, WooCommerce, Shopify and custom commerce integrations.',
    keywords: ['ecommerce development', 'Magento development', 'WooCommerce development', 'Shopify integrations'],
  },
  '/api-development-services': {
    title: 'API Development, Systems Integration & Automation | Neologicx',
    description: 'Design APIs, connect business systems and automate workflows across payments, messaging, vendors, platforms and internal applications.',
    keywords: ['API development', 'systems integration', 'workflow automation', 'custom APIs'],
  },
  '/whatsapp-chatbot-development': {
    title: 'WhatsApp Business Platform Integration & Automation | Neologicx',
    description: 'Connect WhatsApp Business Platform to ordering, support, notifications, payments and business workflows with Neologicx.',
    keywords: ['WhatsApp integration', 'WhatsApp chatbot', 'WhatsApp business API', 'automated notifications'],
  },
  '/saas-development-services': {
    title: 'SaaS Product Development & Modernization | Neologicx',
    description: 'Build or modernize SaaS products with role-based workflows, integrations, billing, reporting, APIs and an architecture matched to your product model.',
    keywords: ['SaaS development', 'SaaS architecture', 'cloud applications', 'SaaS modernization'],
  },
  '/mvp-development-startup': {
    title: 'MVP Development for Startups & New Products | Neologicx',
    description: 'Define, design and build a focused MVP that tests the core product value and creates a practical foundation for the next release.',
    keywords: ['MVP development', 'startup software', 'minimum viable product', 'prototyping'],
  },
  '/crm-development-custom-software': {
    title: 'Custom CRM & Sales Workflow Automation | Neologicx',
    description: 'Custom CRM software for lead, account, pipeline, task, customer-service and reporting workflows that need to fit your business process.',
    keywords: ['custom CRM', 'sales automation', 'pipeline management', 'CRM software'],
  },
  '/custom-erp-software-service': {
    title: 'Custom Business Software & ERP Development | Neologicx',
    description: 'Custom ERP-style software for manufacturing, projects, institutes, workforce, inventory, billing, approvals, reporting and connected operations.',
    keywords: ['custom ERP', 'business operations software', 'ERP development', 'inventory software'],
  },
  '/wordpress-development-services': {
    title: 'WordPress & WooCommerce Development | Neologicx',
    description: 'Custom WordPress and WooCommerce development for content-rich sites, institutional platforms, migrations, commerce and ongoing improvement.',
    keywords: ['WordPress development', 'WooCommerce development', 'CMS development', 'content platforms'],
  },
  '/construction-software-mobileapp': {
    title: 'Construction Operations & Site Management Software | Neologicx',
    description: 'Coordinate multi-site construction operations including materials, workforce records, petty expenses, vendors and project-level financial visibility.',
    keywords: ['construction software', 'site management software', 'contractor software', 'construction operations'],
  },
  '/complaint-management-software': {
    title: 'Complaint Management Software & Customer Care Workflow | Neologicx',
    description: 'Capture, categorize, prioritize and track customer complaints with dashboards, status workflows and configurable notifications.',
    keywords: ['complaint management software', 'customer care portal', 'ticket management', 'customer service workflow'],
  },
  '/order-management-system': {
    title: 'Distributor–Retailer Order Management System | Neologicx',
    description: 'Centralize distributor-to-retailer orders, inventory status, fulfillment, shipping/returns and connected reporting in a configurable OMS.',
    keywords: ['order management system', 'OMS', 'distributor software', 'retailer supply chain'],
  },
  '/school-management-software': {
    title: 'School Management System for Education Operations | Neologicx',
    description: 'Manage admissions, attendance, academic records, fees, communication and parent/teacher workflows through a configurable school platform.',
    keywords: ['school management system', 'education software', 'student information system', 'academic ERP'],
  },
  '/portfolio/bikaji': {
    title: 'BIKAJI Customer Care & E-commerce Case Study | Neologicx',
    description: 'See Neologicx work for BIKAJI across e-commerce, mobile commerce and a structured customer-care portal with WhatsApp notifications.',
    keywords: ['BIKAJI case study', 'FMCG software', 'customer care portal', 'ecommerce case study'],
  },
  '/portfolio/eck-alumni-connect': {
    title: 'ECK–RTU Alumni Connect Mobile App Case Study | Neologicx',
    description: 'An Android and iOS alumni engagement app supporting discovery, events, donations and push notifications for the ECK–RTU community.',
    keywords: ['alumni app', 'university mobile app', 'ECK RTU case study', 'community app development'],
  },
  '/portfolio/e-parchi-android': {
    title: 'E- Parchi Android App — Red Cross Pilot | Neologicx',
    description: 'E- Parchi is an Android mobile initiative developed as a Red Cross Society pilot to help underserved users access private medical services.',
    keywords: ['E-Parchi app', 'Red Cross pilot', 'medical app', 'social impact software'],
  },
  '/portfolio/rajuvas': {
    title: 'RAJUVAS University Website Case Study | Neologicx',
    description: 'A responsive WordPress web platform for Rajasthan University of Veterinary & Animal Sciences, designed for complex institutional content and stakeholders.',
    keywords: ['RAJUVAS case study', 'university website', 'education portal', 'WordPress for universities'],
  },
  '/portfolio/swami-keshwanand-rajasthan-agricultural-university-skrau': {
    title: 'SKRAU Website & CMS Modernization Case Study | Neologicx',
    description: 'Website and backend/CMS modernization for Swami Keshwanand Rajasthan Agricultural University, supporting complex institutional information workflows.',
    keywords: ['SKRAU case study', 'university CMS', 'website modernization', 'public institution software'],
  },
  '/portfolio/eci-app': {
    title: 'Election Commission of India Mobile App Case Study | Neologicx',
    description: 'A mobile service application designed for the Election Commission of India, bringing election information and citizen utilities into one experience.',
    keywords: ['Election Commission app', 'ECI app case study', 'government mobile app', 'public service application'],
  },
  '/portfolio/culture-heritage': {
    title: 'Heritage Olympiad Mobile Learning App Case Study | Neologicx',
    description: 'A mobile culture and heritage learning experience covering tangible, intangible and natural heritage with quiz-based participation and leaderboards.',
    keywords: ['Heritage Olympiad', 'quiz app case study', 'learning app development', 'gamified education'],
  },
  '/portfolio/jazz-cafe': {
    title: 'The Jazz Café UK — Restaurant & Event Platform Case Study | Neologicx',
    description: 'Restaurant and event-management software for The Jazz Café in Reading, UK, covering bookings, event workflows, payments and reminders.',
    keywords: ['Jazz Cafe UK', 'restaurant management software', 'event platform', 'hospitality software'],
  },
  '/portfolio/wus-app-android': {
    title: 'WUS Worker Community Android App Case Study | Neologicx',
    description: 'A mobile community initiative for WUS / Worker Union Support, designed around digital connection and inclusion for workers.',
    keywords: ['WUS app', 'worker community app', 'trade union software', 'social inclusion app'],
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let path = searchParams.get('path') || '/';

  // Strip trailing slash if present (except for root)
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  const data = mockMetadataDb[path];

  if (!data) {
    return NextResponse.json({
      title: 'Neologicx',
      description: 'Software Engineering Company',
      keywords: ['software', 'neologicx'],
      canonicalUrl: `${baseUrl}${path}`,
    });
  }

  // Construct canonical and OpenGraph properties
  const fullData = {
    ...data,
    canonicalUrl: `${baseUrl}${path}`,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${baseUrl}${path}`,
      siteName: 'Neologicx',
      locale: 'en_US',
      type: 'website',
    },
  };

  return NextResponse.json(fullData);
}
