import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import Navbar from '@/components/LandingPage/Navbar'
import Footer from '@/components/LandingPage/Footer'
import FloatingButtons from '@/components/LandingPage/FloatingButtons'
import PortfolioContent from './PortfolioContent'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

export default async function PortfolioPage() {
  const payload = await getPayload({ config })
  const { docs: items } = await payload.find({
    collection: 'portfolios',
    limit: 100,
    sort: 'createdAt',
  })

  const categories = [...new Set(items.map((item) => item.category))]

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#f9f9f8]">
        {/* Hero */}
        <section className="max-w-[1180px] mx-auto px-5 md:px-6 pt-[50px] pb-[50px]">
          <p
            className="text-[14px] font-bold text-[#E8592C] uppercase tracking-[0.05em] mb-4 block"
            style={H}
          >
            PORTOFOLIO
          </p>
          <h1
            className="text-[32px] md:text-[48px] font-bold text-[#1a1c1c] leading-[40px] md:leading-[56px] mb-6 max-w-3xl"
            style={{ ...H, letterSpacing: '-0.02em' }}
          >
            Proyek yang sudah kami kerjakan untuk 50+ bisnis.
          </h1>
          <p className="text-[15px] text-[#6E766F] leading-[24px] max-w-2xl" style={B}>
            Dari website perusahaan sampai sistem internal, berikut sebagian pekerjaan yang bisa
            kami tunjukkan hasilnya.
          </p>
        </section>

        {/* Filter + Grid */}
        <PortfolioContent items={items} categories={categories} />

        {/* CTA */}
        <section className="py-[100px] px-5 md:px-6">
          <div className="max-w-[1180px] mx-auto bg-[#1A1A1A] rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#E8592C] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E8592C] opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2
                className="text-[32px] md:text-[48px] font-bold text-white leading-[40px] md:leading-[56px] mb-8"
                style={{ ...H, letterSpacing: '-0.02em' }}
              >
                Konsultasikan Kebutuhan Digital Anda
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  className="bg-[#E8592C] hover:bg-[#B8420E] text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                  style={H}
                >
                  Konsultasi Gratis
                </button>
                <Link
                  href="/#layanan"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-colors hover:bg-white/10 text-center"
                  style={H}
                >
                  Lihat Layanan Kami
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer activePage="Portfolio" />

      <FloatingButtons />
    </>
  )
}
