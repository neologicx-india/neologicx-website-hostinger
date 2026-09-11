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
    // {
    //   source: '/old-route',
    //   destination: '/new-route',
    //   permanent: true,
    // }
  ];
}
