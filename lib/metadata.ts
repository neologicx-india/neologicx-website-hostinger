import { Metadata } from 'next';

export async function getDynamicMetadata(path: string): Promise<Metadata> {
  // In a real scenario, you'd use a robust environment variable for the base URL.
  // For dev, it defaults to localhost:3000.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  try {
    const res = await fetch(`${baseUrl}/api/metadata?path=${encodeURIComponent(path)}`, {
      // In Next.js App Router, you can use 'force-cache' for static generation,
      // or 'no-store' if metadata changes frequently.
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch metadata: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      alternates: {
        canonical: data.canonicalUrl,
      },
      openGraph: data.openGraph,
      // You can add twitter metadata here as well
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description: data.description,
      },
    };
  } catch (error) {
    console.error(`Error fetching metadata for ${path}:`, error);
    // Fallback metadata in case the API fails
    return {
      title: 'Neologicx',
      description: 'Software Engineering Company',
    };
  }
}
