import { Metadata } from 'next';
import TestimonialsList from '@/components/testimonials-list';
import { strapiService } from '@/services/strapiService';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await strapiService.getPageSeo('testimonials');

    if (seoData && seoData.seo) {
      const metadata: Metadata = {
        title: seoData.seo.metaTitle || 'Testimonials | Client Success Stories | Neologicx',
        description: seoData.seo.metaDescription || 'Hear from our clients about how Neologicx helped them achieve their business goals through custom software and digital transformation.',
      };

      if (seoData.seo.canonicalUrl) {
        metadata.alternates = {
          canonical: seoData.seo.canonicalUrl,
        };
      } else {
        metadata.alternates = {
          canonical: 'https://neologicx.com/testimonials',
        };
      }
      return metadata;
    }
  } catch (error) {
    console.error("Error fetching SEO data for testimonials:", error);
  }

  return {
    title: 'Testimonials | Client Success Stories | Neologicx',
    description: 'Hear from our clients about how Neologicx helped them achieve their business goals through custom software and digital transformation.',
    alternates: {
      canonical: 'https://neologicx.com/testimonials',
    },
  };
}

export default async function TestimonialsPage() {
  const seoDataRes = await strapiService.getPageSeo('testimonials').catch(e => { console.error("Error fetching testimonials SEO data:", e); return null; });
  const dynamicJsonLd = seoDataRes?.seo?.structuredData;
  
  const testimonialsRes = await strapiService.getAllTestimonials().catch(e => { console.error("Error fetching testimonials data:", e); return null; });
  const strapiTestimonials = testimonialsRes?.data || [];

  const mappedTestimonials = strapiTestimonials.map((t: any) => {
    let imageUrl = "/user.png";
    if (t.image && t.image.url) {
      imageUrl = t.image.url.startsWith('http') ? t.image.url : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${t.image.url}`;
    }

    return {
      id: t.id,
      name: t.name || 'Anonymous',
      role: t.role || '',
      content: t.content || '',
      rating: t.rating || 5,
      image: imageUrl
    };
  });

  return (
    <main className="w-full min-h-screen pt-5">
      {dynamicJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: typeof dynamicJsonLd === 'string' ? dynamicJsonLd : JSON.stringify(dynamicJsonLd) 
          }}
        />
      )}
      <TestimonialsList initialTestimonials={mappedTestimonials} />
    </main>
  );
}
