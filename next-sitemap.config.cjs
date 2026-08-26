const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://example.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: false,
  exclude: [
    '/posts-sitemap.xml',
    '/pages-sitemap.xml',
    '/portofolio-sitemap.xml',
    '/service-areas-sitemap.xml',
    '/posts/*',
    '/admin',
    '/admin/*',
    '/api/*',
    '/next/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/api/*'],
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/pages-sitemap.xml`,
      `${SITE_URL}/posts-sitemap.xml`,
      `${SITE_URL}/portofolio-sitemap.xml`,
      `${SITE_URL}/service-areas-sitemap.xml`,
    ],
  },
}
