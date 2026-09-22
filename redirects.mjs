export default async function customRedirects() {
  return [
    {
      source: '/project-showcase',
      destination: '/portfolio',
      permanent: true, // true for 308 redirect, false for 307
    },

    {
      source: '/hrms-services-software',
      destination: '/custom-erp-software-service',
      permanent: true,
    },
    {
      source: '/magento-development-services',
      destination: '/ecommerce-website-development-shoppingcart',
      permanent: true,
    },
    {
      source: '/complaint-management',
      destination: '/complaint-management-software',
      permanent: true,
    },
    {
      source: '/ecommerce-shopping-portal-woocommerce-magento',
      destination: '/ecommerce-website-development-shoppingcart',
      permanent: true,
    },
    {
      source: '/employee-performance-evaluation-system',
      destination: '/custom-erp-software-service',
      permanent: true,
    },
    {
      source: '/home/contact',
      destination: '/contact',
      permanent: true,
    },
    {
      source: '/home/services-we-offer',
      destination: '/services',
      permanent: true,
    },
    {
      source: '/home/our-portfolio',
      destination: '/portfolio',
      permanent: true,
    },
    {
      source: '/home/our-products',
      destination: '/products',
      permanent: true,
    },
    {
      source: '/portfolio-category/website',
      destination: '/portfolio',
      permanent: true,
    },
    {
      source: '/neologicx-whatsapp-chatbot-development',
      destination: '/whatsapp-chatbot-development',
      permanent: true,
    },
    {
      source: '/a-smart-app-idea-that-saves-time-for-caterers-and-halwais',
      destination: '/blog/a-smart-app-idea-that-saves-time-for-caterers-and-halwais',
      permanent: true,
    },
    {
      source: '/daily-struggle-in-bikaner-with-railway-crossing-problems-now',
      destination: '/blog/daily-struggle-in-bikaner-with-railway-crossing-problems-now',
      permanent: true,
    },
    {
      source: '/portfolio/swami-keshwanand-rajasthan-agricultural-university-skrau',
      destination: '/portfolio/rajuvas',
      permanent: true,
    },
    {
      source: '/the-complete-digital-routine-from-website-to-automation',
      destination: '/blog/the-complete-digital-routine-from-website-to-automation',
      permanent: true,
    },
    {
      source: '/startup-saathi-yojna-lets-build-your-idea-together',
      destination: '/blog/startup-saathi-yojna-lets-build-your-idea-together',
      permanent: true,
    },
    {
      source: '/your-website-gets-visitors-but-conversations-never-start',
      destination: '/blog/your-website-gets-visitors-but-conversations-never-start',
      permanent: true,
    },
    {
      source: '/new-rules-of-online-branding-every-business-should-know',
      destination: '/blog/new-rules-of-online-branding-every-business-should-know',
      permanent: true,
    },
    {
      source: '/from-an-idea-to-a-nationwide-change-the-story-behind-the-swachh-bharat-toilet-locator-app',
      destination: '/blog/from-an-idea-to-a-nationwide-change-the-story-behind-the-swachh-bharat-toilet-locator-app',
      permanent: true,

    },
    {
      source: '/portfolio/eck-alumni-connect',
      destination: '/portfolio/rtu-alumni-mobile-app',
      permanent: true,
    },
    {
      source: '/online-quiz-application-software',
      destination: '/portfolio/culture-heritage',
      permanent: true,
    },
    {
      source: '/the-new-rules-of-online-branding-every-business-should-know',
      destination: '/blog/new-rules-of-online-branding-every-business-should-know',
      permanent: true,
    },
    {
      source: '/neologicx-introduces-dedicated-website-development-hub-now',
      destination: '/blog/neologicx-introduces-dedicated-website-development-hub-now',
      permanent: true,
    },
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
    {
      source: '/e-commerce-shopping-portal',
      destination: '/ecommerce-website-development-shoppingcart',
      permanent: true,
    },
    {
      source: '/project-showcaseold',
      destination: '/portfolio',
      permanent: true,
    },

    // {
    //   source: '/old-route',
    //   destination: '/new-route',
    //   permanent: true,
    // }
  ];
}
