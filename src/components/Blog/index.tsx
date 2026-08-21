import Navbar from '@/components/LandingPage/Navbar'
import Footer from '@/components/LandingPage/Footer'
import FloatingButtons from '@/components/LandingPage/FloatingButtons'
import BlogContent from './BlogContent'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

const FEATURED = {
  slug: 'transformasi-digital-klinik-xyz-efisiensi-70-persen',
  category: 'Studi Kasus',
  title: 'Transformasi Digital: Bagaimana Klinik XYZ Meningkatkan Efisiensi 70%',
  excerpt:
    'Langkah demi langkah modernisasi sistem operasional klinik yang berdampak langsung pada pelayanan pasien dan pemangkasan biaya administratif.',
  author: 'Tim Bratamedia',
  date: '12 Okt 2023',
  readTime: '5 menit baca',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBz9_kHbNcNUPQR2aEyOP4P32lk7PfPWrSfTKT9-sYblpr2jklU-z-SrzEssYpR-fRHTsfthrj8rcy3_vnI_-M34lIBvcYwIXIX7dg1ThUeHkwnKC7gMi_crNfnD7Nsn0ey__N6MUpXpkH5dswFhebMRPpyv3b3cwRQbi4WJR_KAc0UApJMOrlWrUQV-OvEn-Uj0eDCrfQ57BngDo_Ldt6_qKCD7ptJvg0p9hAt3LOR3989Od_7IpOR',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDDN8mVj_lb7OxtdHskgBfM-HASkIwc0jiAVVfH2CmmetG8mUJWXHMUu4Al2TgfcYt8wYrk3b4DaUDvfKhnzjKqZ9nK-WlDb-gnF343NANPbXRKV6tfZU-0Qsye3HJAHbuITouP3KI1YtOO1RSurdEpKUyfUbENGdlXJq3Zh85WcZ4Ota3XkOjWZ_3yvpc1RG8OdtrdSas3WeRI1b1oPlRE5QwiUf34idHtBb6c7G9WS92p-QL9HSe',
}

export default function BlogPage() {
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
        <section className="max-w-[1180px] mx-auto px-5 md:px-6 mb-20">
          <Link href={`/blog/${FEATURED.slug}`} className="bg-white rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row">
            <div className="md:w-[55%] relative h-64 md:h-auto">
              <div
                className="bg-cover bg-center w-full h-full absolute inset-0"
                style={{ backgroundImage: `url(${FEATURED.image})` }}
              />
            </div>
            <div className="md:w-[45%] p-8 md:p-10 flex flex-col justify-center">
              <span
                className="inline-block bg-[#FBE4D9] text-[#E8592C] text-[14px] font-bold uppercase tracking-[0.05em] px-3 py-1 rounded-full w-max mb-6"
                style={H}
              >
                {FEATURED.category}
              </span>
              <h2
                className="text-[36px] font-bold text-[#1a1c1c] leading-[44px] mb-4 group-hover:text-[#E8592C] transition-colors"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                {FEATURED.title}
              </h2>
              <p
                className="text-[15px] text-[#6E766F] leading-[24px] mb-8 line-clamp-2"
                style={B}
              >
                {FEATURED.excerpt}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#F2F3F1] overflow-hidden border border-[#E3E5E1] flex-shrink-0">
                  <div
                    className="bg-cover bg-center w-full h-full"
                    style={{ backgroundImage: `url(${FEATURED.avatar})` }}
                  />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#1a1c1c] leading-tight" style={H}>
                    {FEATURED.author}
                  </p>
                  <p className="text-[13px] text-[#6E766F] leading-tight" style={B}>
                    {FEATURED.date} · {FEATURED.readTime}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Filter + Grid */}
        <BlogContent />

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
