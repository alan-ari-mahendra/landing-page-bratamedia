import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import BlogDetailPage from '@/components/Blog/BlogDetailPage'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, _status: { equals: 'published' } },
    limit: 1,
  })
  const post = docs[0]
  return {
    title: post ? `${post.title} - Blog Bratamedia` : 'Blog - Bratamedia',
    description: post?.excerpt ?? undefined,
    openGraph: post
      ? {
          title: `${post.title} - Blog Bratamedia`,
          description: post.excerpt ?? undefined,
          url: `/blog/${slug}`,
          type: 'article',
          publishedTime: post.publishedAt ?? undefined,
          images: post.heroImageUrl ? [{ url: post.heroImageUrl, width: 1200, height: 630 }] : [],
        }
      : undefined,
    alternates: { canonical: `/blog/${slug}` },
  }
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'posts',
      where: { _status: { equals: 'published' } },
      limit: 100,
    })
    return docs.map((post) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, _status: { equals: 'published' } },
    limit: 1,
    depth: 1,
  })

  const post = docs[0]
  if (!post) notFound()

  const { docs: related } = await payload.find({
    collection: 'posts',
    where: {
      slug: { not_equals: slug },
      _status: { equals: 'published' },
    },
    limit: 3,
    sort: '-publishedAt',
    depth: 1,
  })

  return <BlogDetailPage post={post} related={related} />
}
