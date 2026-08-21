import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import Navbar from '@/components/LandingPage/Navbar'
import Footer from '@/components/LandingPage/Footer'
import FloatingButtons from '@/components/LandingPage/FloatingButtons'
import type { Post, Category } from '@/payload-types'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

type Props = { post: Post; related: Post[] }

export default function BlogDetailPage({ post, related }: Props) {
  const categoryName =
    post.categories && post.categories.length > 0 && typeof post.categories[0] === 'object'
      ? (post.categories[0] as Category).title
      : ''

  const authorName = post.populatedAuthors?.[0]?.name ?? 'Tim Bratamedia'

  return (
    <>
      <Navbar />

      <main className="flex-grow pb-[100px] pt-20 bg-[#f9f9f8]">
        {/* Article Header */}
        <div className="max-w-[720px] mx-auto px-5 md:px-0 pt-16 pb-12 text-center">
          {/* Breadcrumb */}
          <nav
            className="flex justify-center items-center gap-2 text-sm text-[#6E766F] mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#E8592C] transition-colors" style={B}>
              Beranda
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#E8592C] transition-colors" style={B}>
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#1a1c1c] truncate max-w-[200px] md:max-w-none" style={B}>
              {post.title}
            </span>
          </nav>

          {/* Category badge */}
          {categoryName && (
            <span
              className="inline-block px-3 py-1 bg-[#FBE4D9] text-[#E8592C] text-[14px] font-bold uppercase tracking-[0.05em] rounded-full mb-6"
              style={H}
            >
              {categoryName}
            </span>
          )}

          {/* Title */}
          <h1
            className="text-[32px] md:text-[48px] font-bold text-[#1a1c1c] leading-[40px] md:leading-[56px] mb-8"
            style={{ ...H, letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div
            className="flex items-center justify-center gap-4 text-sm text-[#6E766F]"
            style={B}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-[#E3E5E1] bg-[#F2F3F1] flex-shrink-0" />
              <span className="font-semibold text-[#1a1c1c]">{authorName}</span>
            </div>
            <span>•</span>
            {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
            {post.readTime && (
              <>
                <span>•</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {post.heroImageUrl && (
          <div className="max-w-[1180px] mx-auto px-5 md:px-6 mb-16">
            <div className="relative aspect-[16/9] md:aspect-[16/7] rounded-xl overflow-hidden border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.heroImageUrl})` }}
              />
            </div>
          </div>
        )}

        {/* Article Body */}
        <article className="max-w-[720px] mx-auto px-5 md:px-0">
          {/* Excerpt / intro */}
          {post.excerpt && (
            <div className="space-y-6 text-[17px] text-[#59413a] leading-[1.7]" style={B}>
              <p>{post.excerpt}</p>
            </div>
          )}

          {/* Tags */}
          {categoryName && (
            <div className="mt-12 pt-8 border-t border-[#E3E5E1] flex flex-wrap gap-3">
              <span
                className="px-4 py-2 rounded-full border border-[#E3E5E1] text-sm text-[#5b5f5b] font-medium hover:border-[#E8592C] hover:text-[#E8592C] transition-colors cursor-pointer"
                style={B}
              >
                {categoryName}
              </span>
            </div>
          )}

          {/* Author Card */}
          <div className="mt-12 bg-[#F2F3F1] rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-[#E3E5E1]">
            <div className="w-20 h-20 rounded-full border border-[#E3E5E1] bg-[#E3E5E1] flex-shrink-0" />
            <div className="text-center md:text-left">
              <h3 className="text-[16px] font-semibold text-[#1a1c1c] mb-2" style={H}>
                {authorName}
              </h3>
              <p className="text-[#5b5f5b] text-sm leading-relaxed" style={B}>
                Tim developer dan digital marketing Bratamedia, membagikan wawasan dari pengalaman
                langsung di lapangan dalam mendigitalisasi bisnis di Indonesia.
              </p>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="max-w-[1180px] mx-auto px-5 md:px-6 mt-24">
            <h3
              className="text-[24px] md:text-[30px] font-bold text-[#1a1c1c] mb-10 text-center md:text-left"
              style={{ ...H, letterSpacing: '-0.01em' }}
            >
              Artikel Terkait
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group block bg-white rounded-xl border border-[#E3E5E1] overflow-hidden hover:shadow-[0_4px_20px_rgba(18,22,19,0.04)] transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#F2F3F1]">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${article.heroImageUrl ?? ''})` }}
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className="text-xs font-bold text-[#E8592C] uppercase tracking-[0.05em] mb-3 block"
                      style={H}
                    >
                      {typeof article.categories?.[0] === 'object' && article.categories[0] !== null
                        ? (article.categories[0] as Category).title
                        : ''}
                    </span>
                    <h4
                      className="text-xl font-bold text-[#1a1c1c] mb-3 group-hover:text-[#E8592C] transition-colors line-clamp-2"
                      style={H}
                    >
                      {article.title}
                    </h4>
                    <p className="text-sm text-[#6E766F] line-clamp-2" style={B}>
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-[1180px] mx-auto px-5 md:px-6 mt-24">
          <div className="bg-[#1C1F1D] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#E8592C] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E8592C] opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2
                className="text-[32px] md:text-[48px] font-bold text-white leading-[40px] md:leading-[56px] mb-8"
                style={{ ...H, letterSpacing: '-0.02em' }}
              >
                Konsultasikan Kebutuhan Digital Anda
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  className="w-full sm:w-auto bg-[#E8592C] hover:bg-[#B8420E] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                  style={H}
                >
                  Konsultasi Gratis
                </button>
                <button
                  className="w-full sm:w-auto border-2 border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                  style={H}
                >
                  Lihat Layanan Kami
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer activePage="Blog" />

      <FloatingButtons />
    </>
  )
}
