import type { Metadata } from 'next'
import PortfolioDetailPage from '@/components/Portfolio/PortfolioDetailPage'
import { PORTFOLIO_ITEMS } from '@/components/Portfolio/data'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = PORTFOLIO_ITEMS.find((p) => p.slug === slug)
  return {
    title: item ? `${item.title} - Portofolio Bratamedia` : 'Portofolio - Bratamedia',
    description: item?.desc,
  }
}

export async function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({ slug: item.slug }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <PortfolioDetailPage slug={slug} />
}
