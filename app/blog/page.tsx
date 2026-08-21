import InsightsClient from '@/components/insights-client';
import { Metadata } from 'next';
import { strapiService } from '@/services/strapiService';

// Dynamically generate metadata using the Page SEO API
export async function generateMetadata(): Promise<Metadata> {
  try {
    // Assuming the slug for this page in Strapi is 'blog'
    const seoData = await strapiService.getPageSeo('blog'); 
    
    if (seoData && seoData.seo) {
      return {
        title: seoData.seo.metaTitle || 'Software Engineering Insights | Neologicx',
        description: seoData.seo.metaDescription || 'Practical perspectives from Neologicx on product engineering, custom software, mobile, integrations, e-commerce and software modernization.',
      };
    }
  } catch (error) {
    console.error("Error fetching SEO data:", error);
  }

  // Fallback metadata if API fails or SEO is not set
  return {
    title: 'Software Engineering Insights | Neologicx',
    description: 'Practical perspectives from Neologicx on product engineering, custom software, mobile, integrations, e-commerce and software modernization.',
  };
}

export default async function BlogPage() {
  // Fetch all blogs just to extract all possible categories for the filters
  const blogsData = await strapiService.getAllBlogs();
  
  const categories = ['All'];
  if (blogsData && blogsData.data) {
    blogsData.data.forEach((blog: any) => {
      if (blog.categories) {
        blog.categories.forEach((cat: any) => {
          if (!categories.includes(cat.name)) {
            categories.push(cat.name);
          }
        });
      }
    });
  }

  return <InsightsClient initialCategories={categories} />;
}
