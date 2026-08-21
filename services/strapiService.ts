const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

async function fetchAPI(endpoint: string, options = {}) {
  const requestUrl = `${STRAPI_URL}${endpoint}`;

  try {
    const res = await fetch(requestUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      // Added revalidation so the page updates periodically if backend changes
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error(`API error! status: ${res.status} on endpoint: ${endpoint}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`Fetch error on ${endpoint}:`, error);
    throw error;
  }
}

export const strapiService = {
  // --- BLOGS API ---
  async getAllBlogs(page = 1, pageSize = 100, category = 'All') {
    let endpoint = `/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    if (category !== 'All') {
      endpoint += `&filters[categories][name][$eq]=${category}`;
    }
    return await fetchAPI(endpoint);
  },

  async getBlogBySlug(slug: string) {
    const data = await fetchAPI(`/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
    return data?.data?.[0] || null;
  },

  // --- CASE STUDIES API ---
  async getAllCaseStudies() {
    return await fetchAPI('/api/case-studies?populate=*');
  },

  async getCaseStudyBySlug(slug: string) {
    const data = await fetchAPI(`/api/case-studies?filters[slug][$eq]=${slug}&populate=*`);
    return data?.data?.[0] || null;
  },

  // --- PAGE SEO API ---
  async getPageSeo(pageSlug: string) {
    const data = await fetchAPI(`/api/page-seos?filters[pageSlug][$eq]=${pageSlug}&populate=*`);
    return data?.data?.[0] || null;
  }
};
