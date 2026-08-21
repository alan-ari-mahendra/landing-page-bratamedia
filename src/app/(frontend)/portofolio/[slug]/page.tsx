import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import PortfolioDetailPage from '@/components/Portfolio/PortfolioDetailPage'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'portfolios',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const item = docs[0]
  return {
    title: item ? `${item.title} - Portofolio Bratamedia` : 'Portofolio - Bratamedia',
    description: item?.desc,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'portfolios', limit: 100 })
  return docs.map((item) => ({ slug: item.slug }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs: all } = await payload.find({
    collection: 'portfolios',
    limit: 100,
    sort: 'createdAt',
  })

  const currentIndex = all.findIndex((p) => p.slug === slug)
  if (currentIndex === -1) notFound()

  const portfolio = all[currentIndex]!
  const prev = currentIndex > 0 ? all[currentIndex - 1]! : null
  const next = currentIndex < all.length - 1 ? all[currentIndex + 1]! : null

  return <PortfolioDetailPage portfolio={portfolio} prev={prev} next={next} />
}
