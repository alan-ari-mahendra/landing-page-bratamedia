import type { Metadata } from 'next'
import BlogPage from '@/components/Blog'

export const metadata: Metadata = {
  title: 'Blog - Bratamedia',
  description:
    'Tips praktis, studi kasus, dan perkembangan teknologi yang relevan untuk pertumbuhan bisnis Anda.',
}

export default function Page() {
  return <BlogPage />
}
