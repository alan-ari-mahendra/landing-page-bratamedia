import type { Metadata } from 'next'
import BlogDetailPage from '@/components/Blog/BlogDetailPage'

export const metadata: Metadata = {
  title: 'Studi Kasus: Digitalisasi Pendaftaran Pasien di Klinik Swasta - Bratamedia',
  description:
    'Mengurangi antrean hingga 50% dengan sistem booking online yang terintegrasi. Studi kasus digitalisasi klinik swasta oleh Bratamedia.',
}

export default function Page() {
  return <BlogDetailPage />
}
