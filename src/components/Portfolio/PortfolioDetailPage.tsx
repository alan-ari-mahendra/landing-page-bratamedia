import Link from 'next/link'
import Navbar from '@/components/LandingPage/Navbar'
import Footer from '@/components/LandingPage/Footer'
import FloatingButtons from '@/components/LandingPage/FloatingButtons'
import type { Portfolio } from '@/payload-types'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

type Props = {
  portfolio: Portfolio
  prev: Portfolio | null
  next: Portfolio | null
}

export default function PortfolioDetailPage({ portfolio, prev, next }: Props) {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#f9f9f8]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-6 py-[100px]">
          {/* Breadcrumb */}
          <nav className="flex text-sm text-[#6E766F] mb-8" aria-label="Breadcrumb" style={B}>
            <ol className="inline-flex items-center gap-1 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#E8592C] transition-colors">
                  Beranda
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <span className="mx-1">/</span>
                <Link href="/portofolio" className="hover:text-[#E8592C] transition-colors">
                  Portofolio
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <span className="mx-1">/</span>
                <span className="text-[#1a1c1c] font-medium truncate max-w-[200px] md:max-w-none">
                  {portfolio.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12 max-w-3xl">
            <span
              className="text-[14px] font-bold text-[#E8592C] uppercase tracking-[0.05em] mb-4 inline-block"
              style={H}
            >
              {portfolio.category}
            </span>
            <h1
              className="text-[32px] md:text-[48px] font-bold text-[#1a1c1c] leading-[40px] md:leading-[56px] mb-6"
              style={{ ...H, letterSpacing: '-0.02em' }}
            >
              {portfolio.title}.
            </h1>
            <p className="text-[17px] text-[#6E766F] leading-[1.7]" style={B}>
              {portfolio.desc}
            </p>
          </header>

          {/* Hero Image */}
          <div className="mb-[100px]">
            <div
              className="w-full aspect-video rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] bg-cover bg-center"
              style={{ backgroundImage: `url(${portfolio.imageUrl ?? ''})` }}
            />
          </div>

          {/* Summary Bar */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-y border-[#E3E5E1] py-8 mb-[100px]">
            <div className="md:border-r border-[#E3E5E1] md:pr-8">
              <h3
                className="text-xs font-bold text-[#6E766F] uppercase tracking-wider mb-2"
                style={H}
              >
                Klien
              </h3>
              <p className="text-[15px] font-medium text-[#1a1c1c]" style={B}>
                {portfolio.client ?? '-'}
              </p>
            </div>
            <div className="md:border-r border-[#E3E5E1] md:px-8">
              <h3
                className="text-xs font-bold text-[#6E766F] uppercase tracking-wider mb-2"
                style={H}
              >
                Layanan
              </h3>
              <p className="text-[15px] font-medium text-[#1a1c1c]" style={B}>
                {portfolio.category}
              </p>
            </div>
            <div className="md:pl-8">
              <h3
                className="text-xs font-bold text-[#6E766F] uppercase tracking-wider mb-2"
                style={H}
              >
                Durasi
              </h3>
              <p className="text-[15px] font-medium text-[#1a1c1c]" style={B}>
                {portfolio.duration ?? '-'}
              </p>
            </div>
          </section>

          {/* Tantangan & Solusi */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-[100px]">
            <div>
              <h2
                className="text-[36px] font-bold text-[#1a1c1c] leading-[44px] mb-6"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                Tantangan.
              </h2>
              <div className="space-y-4">
                {(portfolio.challenge ?? []).map((c, i) => (
                  <p key={i} className="text-[15px] text-[#6E766F] leading-[24px]" style={B}>
                    {c.paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2
                className="text-[36px] font-bold text-[#1a1c1c] leading-[44px] mb-6"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                Solusi.
              </h2>
              <p className="text-[15px] text-[#6E766F] leading-[24px] mb-8" style={B}>
                {portfolio.solution}
              </p>
              {portfolio.solutionImageUrl && (
                <div
                  className="w-full h-64 rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] bg-cover bg-center"
                  style={{ backgroundImage: `url(${portfolio.solutionImageUrl})` }}
                />
              )}
            </div>
          </section>

          {/* Dampak Bisnis */}
          {portfolio.stats && portfolio.stats.length > 0 && (
            <section className="mb-[100px] bg-[#F2F3F1] p-8 md:p-16 rounded-xl border border-[#E3E5E1]">
              <p
                className="text-[14px] font-bold text-[#E8592C] uppercase tracking-[0.05em] mb-8 text-center"
                style={H}
              >
                Dampak Bisnis
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolio.stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-white p-8 rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] text-center"
                  >
                    <span
                      className="block text-[48px] font-bold text-[#E8592C] mb-2 leading-none"
                      style={H}
                    >
                      {stat.value}
                    </span>
                    <span className="font-semibold text-[#1a1c1c] text-[16px]" style={H}>
                      {stat.label}
                    </span>
                    <p className="text-sm text-[#6E766F] mt-2" style={B}>
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonial */}
          {portfolio.testimonial?.quote && (
            <section className="mb-[100px] max-w-4xl mx-auto text-center">
              <div className="mb-8 text-[#E8592C]">
                <span
                  className="material-symbols-outlined text-[48px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  format_quote
                </span>
              </div>
              <blockquote
                className="text-[24px] md:text-[32px] font-medium text-[#1a1c1c] leading-tight mb-8"
                style={H}
              >
                {portfolio.testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 bg-[#FBE4D9] rounded-full flex items-center justify-center text-[#B8420E] font-bold text-lg"
                  style={H}
                >
                  {portfolio.testimonial.initials}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-[16px] text-[#1a1c1c]" style={H}>
                    {portfolio.testimonial.name}
                  </div>
                  <div className="text-sm text-[#6E766F]" style={B}>
                    {portfolio.testimonial.role}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Teknologi */}
          {portfolio.tech && portfolio.tech.length > 0 && (
            <section className="mb-[100px] border-t border-[#E3E5E1] pt-16 text-center">
              <h3
                className="text-sm font-bold text-[#6E766F] uppercase tracking-wider mb-6"
                style={H}
              >
                Teknologi yang Digunakan
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {portfolio.tech.map((t) => (
                  <span
                    key={t.id}
                    className="px-6 py-2 bg-[#F2F3F1] border border-[#E3E5E1] rounded-full text-[15px] text-[#1a1c1c]"
                    style={B}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Project Navigation */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#E3E5E1] pt-16">
            {prev ? (
              <Link
                href={`/portofolio/${prev.slug}`}
                className="group block p-8 bg-white border border-[#E3E5E1] rounded-xl hover:shadow-[0_4px_20px_rgba(18,22,19,0.04)] transition-all"
              >
                <div
                  className="text-sm text-[#6E766F] mb-2 group-hover:text-[#E8592C] transition-colors flex items-center gap-2"
                  style={B}
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span> Proyek
                  Sebelumnya
                </div>
                <div className="font-semibold text-lg text-[#1a1c1c]" style={H}>
                  {prev.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/portofolio/${next.slug}`}
                className="group block p-8 bg-white border border-[#E3E5E1] rounded-xl hover:shadow-[0_4px_20px_rgba(18,22,19,0.04)] transition-all text-right"
              >
                <div
                  className="text-sm text-[#6E766F] mb-2 group-hover:text-[#E8592C] transition-colors flex items-center gap-2 justify-end"
                  style={B}
                >
                  Proyek Selanjutnya{' '}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
                <div className="font-semibold text-lg text-[#1a1c1c]" style={H}>
                  {next.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
          </section>
        </div>

        {/* CTA */}
        <section className="bg-[#2f3130] py-24 px-5 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-[32px] md:text-[48px] font-bold text-white leading-[40px] md:leading-[56px] mb-6"
              style={{ ...H, letterSpacing: '-0.02em' }}
            >
              Konsultasikan Kebutuhan Digital Anda.
            </h2>
            <p className="text-[17px] text-[#c4c7c2] leading-[1.7] mb-10" style={B}>
              Mari diskusikan bagaimana solusi teknologi yang tepat dapat mempercepat pertumbuhan
              bisnis Anda.
            </p>
            <button
              className="bg-[#E8592C] hover:bg-[#B8420E] text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              style={H}
            >
              Mulai Percakapan
            </button>
          </div>
        </section>
      </main>

      <Footer activePage="Portfolio" />

      <FloatingButtons />
    </>
  )
}
