import { strapiService } from '@/services/strapiService';

export default async function DynamicStructuredData({ slug }: { slug: string }) {
  try {
    const seoData = await strapiService.getPageSeo(slug);
    if (seoData?.seo?.structuredData) {
      const dynamicJsonLd = seoData.seo.structuredData;
      return (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: typeof dynamicJsonLd === 'string' ? dynamicJsonLd : JSON.stringify(dynamicJsonLd)
          }}
        />
      );
    }
  } catch (error) {
    console.error(`Error fetching dynamic structured data for ${slug}:`, error);
  }
  return null;
}
