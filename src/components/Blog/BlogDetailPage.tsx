import Link from 'next/link'
import Navbar from '@/components/LandingPage/Navbar'
import FloatingButtons from '@/components/LandingPage/FloatingButtons'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

const RELATED = [
  {
    category: 'Development',
    title: 'Membangun Web App Skalabel dengan Arsitektur Microservices',
    excerpt: 'Panduan teknis bagi startup yang merencanakan pertumbuhan eksponensial.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzs8Ph73_HNc5NYTxd2kw831Z63i03XGCPetzuPxMDl2d66uZsecb250bup1qWHYeg9SXV92UBXtOQYWjRa1ShBFzksrmVwwH8d-91zPs1iRT6LzB4z1F8nrkoZAhr4qRwHXAIIGiVysC-Wm-sHg91UycxhdM8BM6kOXTySvBOGalSpvYKm2wyBR79ZmenoQvbAFliUi1MMIBVIrd18hTKvoJz1Ws11SAGSJbTTyNku9ynFuo09oC4',
  },
  {
    category: 'UI/UX Design',
    title: 'Pentingnya Audit UX untuk Meningkatkan Retensi Pengguna',
    excerpt:
      'Jangan biarkan pengguna meninggalkan aplikasi Anda karena pengalaman yang membingungkan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCchBXfuoIzCBzEgOT_7mYLzkMWHKFG_CiTpF0JTLd4P4be485Gc0eTXlGmM_6aFjwBgZ8O4S8prWKvJGIJIeUh2_oKYWoUmNtLCTOPOyNDvoy8QGN7La4ULpx0ObKryyLlfDwIj7TIMb_3ODZglNhhLFH6Ub9Z6VOysa4Cmy3jblKX6--LO170zRzcndW6uScHc3HuXqL4BafCtG-Im1ZmMZGxdvvUqKg3T0VVmLQhR61654Arh0bk',
  },
  {
    category: 'Marketing',
    title: 'Strategi SEO 2024: Adaptasi Terhadap Algoritma Baru',
    excerpt: 'Langkah-langkah taktis untuk mempertahankan visibilitas organik bisnis Anda.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOenzceLSqhSV4A8_MsxUYnVPASkWHiDb9i5_1LfishTQJMsOBbE2wnR75_73EPRGtgsfLA8pu00DJcqnDa5e3RDq8WX8eAvjUNfxpo8eUes9CF8UWYNzslUup2AvfWzOdKJnV_AFqLEmeyis-wlywLd6QQT-wiri9xz54fL58SCZbCZXJeOhjYDQidr33Qpi5TLgPSMlu7JSad6S5HWxadfLkQ1FLvCNea2NHgEtC1-9QUGVYKw9T',
  },
]

export default function BlogDetailPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pb-[100px] pt-20 bg-[#f9f9f8]">
        {/* Article Header */}
        <div className="max-w-[720px] mx-auto px-5 md:px-0 pt-16 pb-12 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center gap-2 text-sm text-[#6E766F] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E8592C] transition-colors" style={B}>
              Beranda
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#E8592C] transition-colors" style={B}>
              Blog
            </Link>
            <span>/</span>
            <span
              className="text-[#1a1c1c] truncate max-w-[200px] md:max-w-none"
              style={B}
            >
              Studi Kasus: Digitalisasi Pendaftaran...
            </span>
          </nav>

          {/* Category badge */}
          <span
            className="inline-block px-3 py-1 bg-[#FBE4D9] text-[#E8592C] text-[14px] font-bold uppercase tracking-[0.05em] rounded-full mb-6"
            style={H}
          >
            Studi Kasus
          </span>

          {/* Title */}
          <h1
            className="text-[32px] md:text-[48px] font-bold text-[#1a1c1c] leading-[40px] md:leading-[56px] mb-8"
            style={{ ...H, letterSpacing: '-0.02em' }}
          >
            Studi Kasus: Digitalisasi Pendaftaran Pasien di Klinik Swasta
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-4 text-sm text-[#6E766F]" style={B}>
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full border border-[#E3E5E1] bg-[#F2F3F1] bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage:
                    'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDMVSoXhJXYJo68eDNSXzcdHaCF39kQhvcQBiATP11lIptT32qjueqZvxbvXuC_4KHRdPfzM7V5xo9r1TfUdv6QIUNc1TOe6ChdjH2hwFtWzu44tmpaIZj64bWZdnV37USSIgF5CUd0fcLc_HoM10j1lshoYmt1aKg6scvso3B0mkewCmP6Qwt3o7mouwuSc2ZHw1ci8XNUG-K9wAMc92tO855ecpcDAPJp56SEOrkQE6bjWOY0xOpI)',
                }}
              />
              <span className="font-semibold text-[#1a1c1c]">Tim Bratamedia</span>
            </div>
            <span>•</span>
            <span>28 Sep 2023</span>
            <span>•</span>
            <span>5 menit baca</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-[1180px] mx-auto px-5 md:px-6 mb-16">
          <div className="relative aspect-[16/9] md:aspect-[16/7] rounded-xl overflow-hidden border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDkwFn22KL35H7nIkjPZxCv3pMYxtimHc4kBn7arFelZWsuUtBhNZagF97Adbz-49FtYMTe-B30vFjSk43FfBiY3_NFxw8Y6LYo28yDmW6W9KeOfLkUkDRYdq8ucbOyY6lqVSmmENZO-M2bdCf7zHLXvdUdWN1R_sImI-5sYnW2hE9ph_QIfJ6Zw-90Z6u4cKeiftJkHBwZpfuyaj0l_Hh0mUncocH2Q58NsrJAOsFG-fluJhoZG2UV)',
              }}
            />
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-[720px] mx-auto px-5 md:px-0">
          {/* Prose content */}
          <div className="space-y-6 text-[17px] text-[#59413a] leading-[1.7]" style={B}>
            <p>
              Transformasi digital di sektor kesehatan bukan lagi sebuah kemewahan, melainkan
              kebutuhan mendesak. Dalam studi kasus ini, kami membedah perjalanan sebuah klinik
              swasta di Jakarta yang beralih dari sistem pendaftaran berbasis kertas ke solusi
              digital terintegrasi yang kami kembangkan.
            </p>
            <p>
              Klinik tersebut menghadapi masalah antrean panjang setiap pagi, kebingungan jadwal
              dokter, dan inefisiensi pencatatan rekam medis yang sering memicu keluhan pasien.
            </p>

            <h2
              className="text-[24px] md:text-[30px] font-bold text-[#1a1c1c] mt-12 mb-6"
              style={{ ...H, letterSpacing: '-0.01em' }}
            >
              Menemukan Titik Terhambat dalam Proses Manual
            </h2>
            <p>
              Sebelum implementasi sistem, staf resepsionis menghabiskan rata-rata 45% waktu kerja
              mereka hanya untuk mengelola jadwal secara manual via telepon dan WhatsApp. Hal ini
              menyebabkan tingginya margin error dalam penjadwalan ganda.
            </p>

            <blockquote className="my-10 pl-6 border-l-4 border-[#E8592C] italic text-[#6E766F] text-xl font-medium" style={B}>
              "Efisiensi bukan hanya soal teknologi, tapi tentang bagaimana teknologi tersebut
              memudahkan hidup manusia."
            </blockquote>

            <h2
              className="text-[24px] md:text-[30px] font-bold text-[#1a1c1c] mt-12 mb-6"
              style={{ ...H, letterSpacing: '-0.01em' }}
            >
              Solusi Digital yang Terintegrasi
            </h2>
            <p>
              Pendekatan kami difokuskan pada dua pengguna utama: Pasien dan Staf Klinik. Untuk
              pasien, kami membangun Web App pendaftaran mandiri yang intuitif. Untuk staf, sebuah
              dashboard admin yang menyajikan jadwal dokter secara real-time.
            </p>

            <figure className="my-10">
              <div
                className="w-full aspect-[16/9] rounded-xl border border-[#E3E5E1] shadow-sm bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDeIB0q9YUUx3YN48xppTi8HG_e_g3bUSG-qZjpSIbJF3g2yZt-SeQOZHa57ftWs7T9m9LKrEeZPVBoEeAOsOk5QjzpH3oTDuXfPYrtv1KpmI9mOW3yUIuExyakbw1zWw93B3kNRmq_KdjgFB2hQuaQwNmkku8huIpaMF48ZHpdKDIO-Fq4QRpeXYMcZkVmkZQfaX5Hf50VsP_cbkdiyisBpuhjPg8yCuIWUl0e3g7zCdi33vHaxjyb)',
                }}
              />
              <figcaption
                className="text-center text-sm text-[#6E766F] mt-3"
                style={B}
              >
                Dashboard Manajemen Antrean Real-time
              </figcaption>
            </figure>

            <p>
              Hasilnya terlihat dalam bulan pertama implementasi: pengurangan waktu tunggu pasien
              sebesar 60%, dan staf resepsionis kini dapat fokus pada pelayanan tatap muka yang
              lebih ramah karena beban administratif berkurang drastis.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#E3E5E1] flex flex-wrap gap-3">
            {['Web App Development', 'AI & Automation'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-[#E3E5E1] text-sm text-[#5b5f5b] font-medium hover:border-[#E8592C] hover:text-[#E8592C] transition-colors cursor-pointer"
                style={B}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Card */}
          <div className="mt-12 bg-[#F2F3F1] rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-[#E3E5E1]">
            <div
              className="w-20 h-20 rounded-full border border-[#E3E5E1] bg-cover bg-center flex-shrink-0 bg-white"
              style={{
                backgroundImage:
                  'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAZSCS7qeogJD0vbdgvxwnxXiTEgguSVj_cCKJ74MjQ-t4WBdBWQ7R_lkS2haq6IveFDstb-FOACAOOoiWlCJfFmvTNqWtu9r8QziqB7AAlDkXzrDO7H7WYzt7iAbdFb2OJkbDkcmfFmiGh9f_Gt5uWLzhiG0_Mb9wS-qMBaXU0tFFFz5nnDSLwYgSZYbUqE6EXHX4LCceaoAapCqz3Lj5bNWVKOIGK_gDho3hirNxZaP0h8slfcWHr)',
              }}
            />
            <div className="text-center md:text-left">
              <h3 className="text-[16px] font-semibold text-[#1a1c1c] mb-2" style={H}>
                Tim Bratamedia
              </h3>
              <p className="text-[#5b5f5b] text-sm leading-relaxed" style={B}>
                Tim developer dan digital marketing Bratamedia, membagikan wawasan dari pengalaman
                langsung di lapangan dalam mendigitalisasi bisnis di Indonesia.
              </p>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="max-w-[1180px] mx-auto px-5 md:px-6 mt-24">
          <h3
            className="text-[24px] md:text-[30px] font-bold text-[#1a1c1c] mb-10 text-center md:text-left"
            style={{ ...H, letterSpacing: '-0.01em' }}
          >
            Artikel Terkait
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED.map((article) => (
              <Link
                key={article.title}
                href="#"
                className="group block bg-white rounded-xl border border-[#E3E5E1] overflow-hidden hover:shadow-[0_4px_20px_rgba(18,22,19,0.04)] transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#F2F3F1]">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                </div>
                <div className="p-6">
                  <span
                    className="text-xs font-bold text-[#E8592C] uppercase tracking-[0.05em] mb-3 block"
                    style={H}
                  >
                    {article.category}
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

      {/* Footer */}
      <footer className="bg-[#F2F3F1] border-t border-[#E3E5E1] py-[100px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col gap-6">
            <div
              className="text-[36px] font-bold text-[#1a1c1c] flex items-center gap-2"
              style={H}
            >
              Bratamedia
              <div className="w-2 h-2 bg-[#E8592C] mt-2" />
            </div>
            <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>
              Membangun ekosistem digital yang kuat untuk pertumbuhan bisnis berkelanjutan di era
              modern.
            </p>
            <p className="text-[#6E766F] text-[15px] mt-auto" style={B}>
              © 2024 Bratamedia. Seluruh Hak Cipta Dilindungi.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 mt-8 md:mt-0">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#1a1c1c] mb-2" style={H}>
                Navigasi
              </h4>
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Layanan', href: '/#layanan' },
                { label: 'Portfolio', href: '/#portofolio' },
                { label: 'Blog', href: '/blog', active: true },
                { label: 'Tentang', href: '#' },
                { label: 'Kontak', href: '/#hubungi-kami' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[15px] transition-colors ${
                    item.active
                      ? 'text-[#E8592C] font-semibold'
                      : 'text-[#6E766F] hover:text-[#1a1c1c]'
                  }`}
                  style={B}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#1a1c1c] mb-2" style={H}>
                Layanan
              </h4>
              {['Web Development', 'UI/UX Design', 'Digital Marketing', 'Brand Identity'].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-[15px] text-[#6E766F] hover:text-[#1a1c1c] transition-colors"
                    style={B}
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="font-bold text-[#1a1c1c] mb-2" style={H}>
                Sosial Media
              </h4>
              <div className="flex gap-4">
                {['link', 'share', 'mail'].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white border border-[#E3E5E1] flex items-center justify-center text-[#1a1c1c] hover:text-[#E8592C] hover:border-[#E8592C] transition-colors shadow-[0_4px_20px_rgba(18,22,19,0.04)]"
                  >
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FloatingButtons />
    </>
  )
}
