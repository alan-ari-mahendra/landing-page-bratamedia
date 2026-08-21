import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import Navbar from '@/components/LandingPage/Navbar'
import Footer from '@/components/LandingPage/Footer'
import FloatingButtons from '@/components/LandingPage/FloatingButtons'
import BlogContent from './BlogContent'
import type { Category } from '@/payload-types'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default async function BlogPage() {
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 100,
    depth: 1,
  })

  const featured = posts[0] ?? null

  const categorySet = new Set<string>()
  posts.forEach((p) => {
    p.categories?.forEach((cat) => {
      if (typeof cat === 'object' && cat !== null) categorySet.add((cat as Category).title)
    })
  })
  const categories = [...categorySet]

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20 bg-[#f9f9f8]">
        {/* Hero */}
        <section className="max-w-[1180px] mx-auto px-5 md:px-6 pt-[100px] pb-16">
          <div className="max-w-3xl">
            <p
              className="text-[14px] font-bold text-[#E8592C] uppercase tracking-[0.05em] mb-4"
              style={H}
            >
              BLOG
            </p>
            <h1
              className="text-[48px] font-bold text-[#1a1c1c] leading-[56px] mb-6"
              style={{ ...H, letterSpacing: '-0.02em' }}
            >
              Wawasan seputar digital untuk bisnis Anda.
            </h1>
            <p className="text-[17px] text-[#6E766F] leading-[1.7]" style={B}>
              Tips praktis, studi kasus, dan perkembangan teknologi yang relevan untuk pertumbuhan
              bisnis Anda.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="max-w-[1180px] mx-auto px-5 md:px-6 mb-20">
            <Link
              href={`/blog/${featured.slug}`}
              className="bg-white rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row"
            >
              <div className="md:w-[55%] relative h-64 md:h-auto">
                <div
                  className="bg-cover bg-center w-full h-full absolute inset-0"
                  style={{ backgroundImage: `url(${featured.heroImageUrl ?? ''})` }}
                />
              </div>
              <div className="md:w-[45%] p-8 md:p-10 flex flex-col justify-center">
                <span
                  className="inline-block bg-[#FBE4D9] text-[#E8592C] text-[14px] font-bold uppercase tracking-[0.05em] px-3 py-1 rounded-full w-max mb-6"
                  style={H}
                >
                  {typeof featured.categories?.[0] === 'object' && featured.categories[0] !== null
                    ? (featured.categories[0] as Category).title
                    : ''}
                </span>
                <h2
                  className="text-[36px] font-bold text-[#1a1c1c] leading-[44px] mb-4 group-hover:text-[#E8592C] transition-colors"
                  style={{ ...H, letterSpacing: '-0.01em' }}
                >
                  {featured.title}
                </h2>
                <p className="text-[15px] text-[#6E766F] leading-[24px] mb-8 line-clamp-2" style={B}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#F2F3F1] border border-[#E3E5E1] flex-shrink-0" />
                  <div>
                    <p className="text-[16px] font-semibold text-[#1a1c1c] leading-tight" style={H}>
                      {featured.populatedAuthors?.[0]?.name ?? 'Tim Bratamedia'}
                    </p>
                    <p className="text-[13px] text-[#6E766F] leading-tight" style={B}>
                      {featured.publishedAt ? formatDate(featured.publishedAt) : ''} ·{' '}
                      {featured.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Filter + Grid */}
        <BlogContent posts={posts} categories={categories} />

        {/* CTA */}
        <section className="max-w-[1180px] mx-auto px-5 md:px-6 py-20">
          <div className="bg-[#1C1F1D] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#E8592C] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E8592C] opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2
                className="text-[36px] font-bold text-white leading-[44px] mb-8"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                Konsultasikan Kebutuhan Digital Anda
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-[#E8592C] hover:bg-[#B8420E] text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg active:scale-95"
                  style={H}
                >
                  Konsultasi Gratis
                </button>
                <button
                  className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-colors active:scale-95"
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
