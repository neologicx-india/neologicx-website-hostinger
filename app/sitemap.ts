import { MetadataRoute } from 'next';
import { strapiService } from '@/services/strapiService';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://neologicx.com';

  const staticRoutes = [
    '',
    '/about-us',
    '/ai-development-services',
    '/api-development-services',
    '/complaint-management-software',
    '/construction-software-mobileapp',
    '/contact',
    '/cookie-policy',
    '/crm-development-custom-software',
    '/custom-erp-software-service',
    '/custom-software-development',
    '/ecommerce-website-development-shoppingcart',
    '/engagement-models',
    '/faq',
    '/industries',
    '/mobile-app-development-android-ios-flutter',
    '/mvp-development-startup',
    '/order-management-system',
    '/portfolio',
    '/privacy-policy',
    '/product-engineering',
    '/products',
    '/saas-development-services',
    '/school-management-software',
    '/services',
    '/terms',
    '/web-development-design-website',
    '/whatsapp-chatbot-development',
    '/wordpress-development-services',
    '/blog'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    const [caseStudiesRes, blogsRes] = await Promise.all([
      strapiService.getAllCaseStudies(),
      strapiService.getAllBlogs(1, 100)
    ]);

    const caseStudies = caseStudiesRes?.data || [];
    const blogs = blogsRes?.data || [];

    caseStudies.forEach((study: any) => {
      const slug = study.attributes?.slug || study.slug;
      const updatedAt = study.attributes?.updatedAt || study.updatedAt || new Date();
      if (slug) {
        sitemapEntries.push({
          url: `${baseUrl}/portfolio/${slug}`,
          lastModified: new Date(updatedAt),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        });
      }
    });

    blogs.forEach((blog: any) => {
      const slug = blog.attributes?.slug || blog.slug;
      const updatedAt = blog.attributes?.updatedAt || blog.updatedAt || new Date();
      if (slug) {
        sitemapEntries.push({
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date(updatedAt),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        });
      }
    });
  } catch (error) {
    console.error('Error generating sitemap for dynamic routes:', error);
  }

  return sitemapEntries;
}
