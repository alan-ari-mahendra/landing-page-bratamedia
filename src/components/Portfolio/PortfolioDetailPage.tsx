import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/LandingPage/Navbar'
import Footer from '@/components/LandingPage/Footer'
import FloatingButtons from '@/components/LandingPage/FloatingButtons'
import { PORTFOLIO_ITEMS } from './data'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

// Static case-study content — replaced when Payload integration happens
const CASE_STUDY = {
  description:
    'Transformasi digital menyeluruh untuk klinik swasta terkemuka di Semarang, menggantikan proses pencatatan manual dengan sistem terintegrasi yang efisien, aman, dan mudah digunakan.',
  client: 'Klinik Swasta di Semarang',
  duration: '8 Minggu, 2025',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB-JN3zEZJF5C1jRXdB0pZpgCKGtjQf-E79KIkCeajgzNW-HUKZ7uc0ObtCTFRAF0zKDABcEp3hOjjqS6lveOiiV1w6p50ByD0MEGLmuXfmH_HdOewhDuib3YpkVLAPgNZJz3uCOxhivgctPVD4r1eAg0NWe6PCJwHtkiZ_B6-o_H2FjHnZA8DhTyMYwx4B2NZHscaA4xTBvIlW77Pw6_zhvdvC6BfH0cO0F9pMDf5XsZ8Db30dzUNx',
  solutionImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBoS6zZAVrjMERshxa5mxKqwDKO3lnWb_jJ4ECH8cDR4qRE4RXCJe6-e3sgYIW5-_zWCCr18k4cFN-IFkH2XsOEYIF9kofamTJc7o1Ne-JA7FjvwkjgyygGw4X2uArnI4xMUwZpZUBUE4FDMB_sQaXOul81mKSoT1ItDk7v9gPGuO2lSOz_9XhO4kPiay2lsErklxW3At9EUs0I898W7WtcXFjAEJcBltIjXBq9ldrjzMKjXWtQa0',
  challenge: [
    'Sebelum kolaborasi ini, klinik menghadapi kendala signifikan akibat proses operasional yang masih mengandalkan pencatatan manual. Rekam medis fisik rentan hilang atau rusak, pencarian data pasien memakan waktu lama, dan sering terjadi tumpang tindih jadwal konsultasi.',
    'Sistem pelaporan keuangan dan inventaris obat yang terpisah juga menyulitkan manajemen dalam mengambil keputusan strategis yang cepat dan akurat.',
  ],
  solution:
    'Kami merancang dan mengembangkan Web App khusus yang mengintegrasikan seluruh alur kerja klinik. Dimulai dari pendaftaran pasien online, manajemen antrean real-time, Electronic Medical Record (EMR) terenkripsi, hingga modul apotek dan kasir yang saling terhubung.',
  stats: [
    { value: '70%', label: 'Lebih Cepat', sub: 'Dalam proses administrasi pasien' },
    { value: '0', label: 'Data Ganda', sub: 'Sinkronisasi EMR akurat 100%' },
    { value: '3', label: 'Cabang', sub: 'Terintegrasi dalam satu sistem pusat' },
  ],
  testimonial: {
    quote:
      '"Transisi ke sistem digital yang dikembangkan Bratamedia sangat mulus. Tim klinik kami lebih produktif, dan yang terpenting, pelayanan pasien menjadi jauh lebih responsif. Investasi teknologi yang sangat sepadan."',
    initials: 'DR',
    name: 'Dr. Hendra',
    role: 'Pemilik Klinik',
  },
  tech: ['Next.js', 'Laravel', 'PostgreSQL', 'Docker'],
}

type Props = { slug: string }

export default function PortfolioDetailPage({ slug }: Props) {
  const currentIndex = PORTFOLIO_ITEMS.findIndex((p) => p.slug === slug)
  if (currentIndex === -1) notFound()

  const item = PORTFOLIO_ITEMS[currentIndex]!
  const prev = currentIndex > 0 ? PORTFOLIO_ITEMS[currentIndex - 1] : null
  const next = currentIndex < PORTFOLIO_ITEMS.length - 1 ? PORTFOLIO_ITEMS[currentIndex + 1] : null

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
                  {item.title}
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
              {item.category}
            </span>
            <h1
              className="text-[32px] md:text-[48px] font-bold text-[#1a1c1c] leading-[40px] md:leading-[56px] mb-6"
              style={{ ...H, letterSpacing: '-0.02em' }}
            >
              {item.title}.
            </h1>
            <p className="text-[17px] text-[#6E766F] leading-[1.7]" style={B}>
              {CASE_STUDY.description}
            </p>
          </header>

          {/* Hero Image */}
          <div className="mb-[100px]">
            <div
              className="w-full aspect-video rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
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
                {CASE_STUDY.client}
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
                {item.category}
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
                {CASE_STUDY.duration}
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
                {CASE_STUDY.challenge.map((p, i) => (
                  <p key={i} className="text-[15px] text-[#6E766F] leading-[24px]" style={B}>
                    {p}
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
                {CASE_STUDY.solution}
              </p>
              <div
                className="w-full h-64 rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] bg-cover bg-center"
                style={{ backgroundImage: `url(${CASE_STUDY.solutionImage})` }}
              />
            </div>
          </section>

          {/* Dampak Bisnis */}
          <section className="mb-[100px] bg-[#F2F3F1] p-8 md:p-16 rounded-xl border border-[#E3E5E1]">
            <p
              className="text-[14px] font-bold text-[#E8592C] uppercase tracking-[0.05em] mb-8 text-center"
              style={H}
            >
              Dampak Bisnis
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CASE_STUDY.stats.map((stat) => (
                <div
                  key={stat.label}
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

          {/* Testimonial */}
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
              {CASE_STUDY.testimonial.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div
                className="w-12 h-12 bg-[#FBE4D9] rounded-full flex items-center justify-center text-[#B8420E] font-bold text-lg"
                style={H}
              >
                {CASE_STUDY.testimonial.initials}
              </div>
              <div className="text-left">
                <div className="font-semibold text-[16px] text-[#1a1c1c]" style={H}>
                  {CASE_STUDY.testimonial.name}
                </div>
                <div className="text-sm text-[#6E766F]" style={B}>
                  {CASE_STUDY.testimonial.role}
                </div>
              </div>
            </div>
          </section>

          {/* Teknologi */}
          <section className="mb-[100px] border-t border-[#E3E5E1] pt-16 text-center">
            <h3
              className="text-sm font-bold text-[#6E766F] uppercase tracking-wider mb-6"
              style={H}
            >
              Teknologi yang Digunakan
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {CASE_STUDY.tech.map((t) => (
                <span
                  key={t}
                  className="px-6 py-2 bg-[#F2F3F1] border border-[#E3E5E1] rounded-full text-[15px] text-[#1a1c1c]"
                  style={B}
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

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
