import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import ServiceAreaDetailPage from '@/components/ServiceArea/ServiceAreaDetailPage'
import { resolveImageUrl } from '@/utilities/getMediaUrl'
import { getServerSideURL } from '@/utilities/getURL'
import type { PricingTier } from '@/payload-types'

type Props = { params: Promise<{ city: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'service-areas',
    where: { slug: { equals: city }, _status: { equals: 'published' } },
    limit: 1,
  })
  const item = docs[0]

  if (!item) {
    return { title: 'Layanan Website - Bratamedia' }
  }

  const title = item.metaTitle || `Jasa Pembuatan Website di ${item.cityName} - Bratamedia`
  const description =
    item.metaDescription ||
    `Layanan pembuatan website profesional untuk bisnis di ${item.cityName}, ${item.provinceName}. Tim Bratamedia berbasis di Semarang, melayani secara remote.`
  const ogImage =
    resolveImageUrl(undefined, item.ogImage) || `${getServerSideURL()}/website-template-OG.webp`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/layanan/website/${city}`,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    alternates: { canonical: `/layanan/website/${city}` },
  }
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'service-areas',
      where: { _status: { equals: 'published' } },
      limit: 100,
      select: { slug: true },
    })
    return docs.map((item) => ({ city: item.slug! }))
  } catch {
    return []
  }
}

export default async function Page({ params }: Props) {
  const { city } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'service-areas',
    where: { slug: { equals: city }, _status: { equals: 'published' } },
    limit: 1,
    depth: 2,
  })
  const serviceArea = docs[0]
  if (!serviceArea) notFound()

  const pricingTiers = serviceArea.pricingOverride?.length
    ? serviceArea.pricingOverride.filter((t): t is PricingTier => typeof t === 'object' && t !== null)
    : (await payload.find({ collection: 'pricing-tiers', sort: 'order', limit: 20 })).docs

  const contactInfo = await payload.findGlobal({ slug: 'contact-info' }).catch(() => null)
  const contactPhone = contactInfo?.phone ?? '6281234567890'

  return (
    <ServiceAreaDetailPage city={serviceArea} pricingTiers={pricingTiers} contactPhone={contactPhone} />
  )
}
