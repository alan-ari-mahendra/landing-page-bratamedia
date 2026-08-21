import type { Metadata } from 'next'
import PortfolioPage from '@/components/Portfolio'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Portofolio - Bratamedia',
  description:
    'Proyek yang sudah kami kerjakan untuk 50+ bisnis. Dari website perusahaan sampai sistem internal.',
  openGraph: {
    title: 'Portofolio - Bratamedia',
    description:
      'Proyek yang sudah kami kerjakan untuk 50+ bisnis. Dari website perusahaan sampai sistem internal.',
    url: '/portofolio',
    type: 'website',
  },
  alternates: { canonical: '/portofolio' },
}

export default function Page() {
  return <PortfolioPage />
}
