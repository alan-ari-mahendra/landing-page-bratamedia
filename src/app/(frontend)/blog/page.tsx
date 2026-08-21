import type { Metadata } from 'next'
import BlogPage from '@/components/Blog'

export const revalidate = 60 // 1 menit

export const metadata: Metadata = {
  title: 'Blog - Bratamedia',
  description:
    'Tips praktis, studi kasus, dan perkembangan teknologi yang relevan untuk pertumbuhan bisnis Anda.',
  openGraph: {
    title: 'Blog - Bratamedia',
    description:
      'Tips praktis, studi kasus, dan perkembangan teknologi yang relevan untuk pertumbuhan bisnis Anda.',
    url: '/blog',
    type: 'website',
  },
  alternates: { canonical: '/blog' },
}

export default function Page() {
  return <BlogPage />
}
