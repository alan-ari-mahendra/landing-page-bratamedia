import type { Metadata } from 'next'
import PortfolioPage from '@/components/Portfolio'

export const metadata: Metadata = {
  title: 'Portofolio - Bratamedia',
  description:
    'Proyek yang sudah kami kerjakan untuk 50+ bisnis. Dari website perusahaan sampai sistem internal.',
}

export default function Page() {
  return <PortfolioPage />
}
