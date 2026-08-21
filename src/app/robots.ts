import type { MetadataRoute } from 'next'

const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://example.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/'],
      },
    ],
    sitemap: [
      `${SITE_URL}/posts-sitemap.xml`,
      `${SITE_URL}/portofolio-sitemap.xml`,
      `${SITE_URL}/pages-sitemap.xml`,
    ],
  }
}
