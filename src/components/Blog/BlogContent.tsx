'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Post, Category } from '@/payload-types'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

type Props = {
  posts: Post[]
  categories: string[]
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function getCategoryName(post: Post): string {
  const cats = post.categories
  if (!cats || cats.length === 0) return ''
  const first = cats[0]
  if (typeof first === 'object' && first !== null) return (first as Category).title
  return ''
}

export default function BlogContent({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filtered =
    activeCategory === 'Semua'
      ? posts
      : posts.filter((p) => getCategoryName(p) === activeCategory)

  return (
    <section className="bg-[#F2F3F1] py-[100px]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12 sticky top-24 z-40 bg-[#F2F3F1]/90 backdrop-blur-md py-4">
          {['Semua', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-[#E8592C] text-white'
                  : 'bg-white text-[#6E766F] border border-[#E3E5E1] hover:border-[#E8592C] hover:text-[#E8592C]'
              }`}
              style={H}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F3F1]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.heroImageUrl ?? ''})` }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span
                  className="inline-block bg-[#FBE4D9] text-[#E8592C] text-xs font-bold uppercase tracking-[0.05em] px-3 py-1 rounded-full w-max mb-4"
                  style={H}
                >
                  {getCategoryName(post)}
                </span>
                <h3
                  className="text-[18px] font-bold text-[#1a1c1c] mb-3 line-clamp-2 group-hover:text-[#E8592C] transition-colors"
                  style={H}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-[#6E766F] leading-relaxed mb-6 line-clamp-2 flex-grow" style={B}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#E3E5E1]">
                  <div className="w-8 h-8 rounded-full bg-[#F2F3F1] border border-[#E3E5E1] flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#1a1c1c] leading-tight" style={H}>
                      {post.populatedAuthors?.[0]?.name ?? 'Tim Bratamedia'}
                    </p>
                    <p className="text-xs text-[#6E766F]" style={B}>
                      {post.publishedAt ? formatDate(post.publishedAt) : ''} · {post.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
