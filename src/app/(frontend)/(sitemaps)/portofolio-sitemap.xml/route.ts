import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getPortfolioSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'portfolios',
      depth: 0,
      limit: 1000,
      pagination: false,
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    return results.docs
      .filter((item) => Boolean(item?.slug))
      .map((item) => ({
        loc: `${SITE_URL}/portofolio/${item.slug}`,
        lastmod: item.updatedAt || dateFallback,
      }))
  },
  ['portofolio-sitemap'],
  {
    tags: ['portofolio-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPortfolioSitemap()
  return getServerSideSitemap(sitemap)
}
