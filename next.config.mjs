/** @type {import('next').NextConfig} */

// Safely parse the Strapi URL from environment variables
const strapiUrlString = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
let strapiUrl;
try {
  strapiUrl = new URL(strapiUrlString);
} catch (e) {
  strapiUrl = new URL('http://localhost:1337');
}

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowLocalIP: true, // Required for local dev with Strapi on localhost
    remotePatterns: [
      {
        protocol: strapiUrl.protocol.replace(':', ''),
        hostname: strapiUrl.hostname,
        port: strapiUrl.port,
        pathname: '/uploads/**',
      },
      // Local development fallbacks
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      }
    ]
  },
}

export default nextConfig
