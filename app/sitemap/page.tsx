import Link from 'next/link';
import { strapiService } from '@/services/strapiService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Neologicx',
  description: 'HTML Sitemap for Neologicx Custom Software & Product Engineering',
};

export const dynamic = 'force-dynamic';

const mainPages = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Contact', url: '/contact' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Engagement Models', url: '/engagement-models' },
  { name: 'Industries', url: '/industries' },
  { name: 'Privacy Policy', url: '/privacy-policy' },
  { name: 'Cookie Policy', url: '/cookie-policy' },
  { name: 'Terms of Service', url: '/terms' },
];

const servicePages = [
  { name: 'AI Development Services', url: '/ai-development-services' },
  { name: 'API Development Services', url: '/api-development-services' },
  { name: 'Complaint Management Software', url: '/complaint-management-software' },
  { name: 'Construction Software Mobile App', url: '/construction-software-mobileapp' },
  { name: 'CRM Development Custom Software', url: '/crm-development-custom-software' },
  { name: 'Custom ERP Software Service', url: '/custom-erp-software-service' },
  { name: 'Custom Software Development', url: '/custom-software-development' },
  { name: 'Ecommerce Website Development', url: '/ecommerce-website-development-shoppingcart' },
  { name: 'Mobile App Development (Android, iOS)', url: '/mobile-app-development-android-ios-flutter' },
  { name: 'MVP Development Startup', url: '/mvp-development-startup' },
  { name: 'Order Management System', url: '/order-management-system' },
  { name: 'Product Engineering', url: '/product-engineering' },
  { name: 'SaaS Development Services', url: '/saas-development-services' },
  { name: 'School Management Software', url: '/school-management-software' },
  { name: 'Web Development Design Website', url: '/web-development-design-website' },
  { name: 'WhatsApp Chatbot Development', url: '/whatsapp-chatbot-development' },
  { name: 'WordPress Development Services', url: '/wordpress-development-services' },
];

export default async function SitemapPage() {
  const [caseStudiesRes, blogsRes] = await Promise.all([
    strapiService.getAllCaseStudies(),
    strapiService.getAllBlogs(1, 100)
  ]);

  const caseStudies = caseStudiesRes?.data || [];
  const blogs = blogsRes?.data || [];

  return (
    <div className="w-full bg-slate-50 py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-200/60">
        <div className="mb-12 border-b border-slate-100 pb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Site Map</h1>
          <p className="text-slate-500 mt-3 text-lg">Navigate through our pages, services, portfolio, and insights.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Main Pages */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
              Main Pages
            </h2>
            <ul className="space-y-3">
              {mainPages.map((page) => (
                <li key={page.url}>
                  <Link href={page.url} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    {page.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Services Hub</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Portfolio Hub</Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Products Hub</Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Blog Hub</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-indigo-500 rounded-full"></div>
              Our Services
            </h2>
            <ul className="space-y-3">
              {servicePages.map((page) => (
                <li key={page.url}>
                  <Link href={page.url} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-amber-500 rounded-full"></div>
              Portfolio
            </h2>
            {caseStudies.length > 0 ? (
              <ul className="space-y-3">
                {caseStudies.map((study: any) => {
                  const slug = study.attributes?.slug || study.slug;
                  const title = study.attributes?.title || study.title || slug;
                  return (
                    <li key={slug}>
                      <Link href={`/portfolio/${slug}`} className="text-slate-600 hover:text-blue-600 transition-colors font-medium line-clamp-2">
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-slate-400 text-sm">No portfolio items found.</p>
            )}
          </div>

          {/* Blogs */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
              Recent Blogs
            </h2>
            {blogs.length > 0 ? (
              <ul className="space-y-3">
                {blogs.map((blog: any) => {
                  const slug = blog.attributes?.slug || blog.slug;
                  const title = blog.attributes?.title || blog.title || slug;
                  return (
                    <li key={slug}>
                      <Link href={`/blog/${slug}`} className="text-slate-600 hover:text-blue-600 transition-colors font-medium line-clamp-2">
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-slate-400 text-sm">No blogs found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
