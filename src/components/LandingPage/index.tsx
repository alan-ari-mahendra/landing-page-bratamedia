import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import ServicesCarousel from './ServicesCarousel'
import FAQSection from './FAQSection'
import FloatingButtons from './FloatingButtons'
import { getPayload } from 'payload'
import config from '@payload-config'
import ContactForm from './ContactForm'
import { Media } from '@/components/Media'
import { resolveImageUrl } from '@/utilities/getMediaUrl'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

export default async function LandingPage() {
  const payload = await getPayload({ config })
  const { docs: portfolioItems } = await payload.find({
    collection: 'portfolios',
    limit: 3,
    sort: 'createdAt',
  })

  const { docs: clients } = await payload.find({
    collection: 'clients',
    limit: 100,
    sort: 'order',
  })

  const { docs: testimonials } = await payload.find({
    collection: 'testimonials',
    limit: 100,
    sort: 'order',
  })

  const contactInfo = await payload.findGlobal({ slug: 'contact-info' }).catch(() => null)
  const contactEmail = contactInfo?.email ?? 'contact@bratamedia.com'
  const contactPhone = contactInfo?.phone ?? '6281234567890'
  const contactLocation = contactInfo?.location ?? 'Semarang, Indonesia'
  return (
    <div className="bg-[#f9f9f8] text-[#1a1c1c] antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* ── 1. Hero ── */}
        <section className="py-[100px] px-6 overflow-hidden relative">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBE4D9] border border-[#E3E5E1] rounded-full w-fit">
                <span
                  className="material-symbols-outlined text-[#E8592C] text-[18px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-sm font-semibold text-[#59413a]" style={H}>
                  10+ Tahun Melayani Bisnis di Semarang dan Indonesia
                </span>
              </div>

              <h1
                className="text-[32px] md:text-[48px] font-bold text-[#1a1c1c] leading-[40px] md:leading-[56px]"
                style={{ ...H, letterSpacing: '-0.02em' }}
              >
                Digital marketing dan pengembangan website yang{' '}
                <span className="text-[#E8592C] relative inline-block">
                  benar-benar membantu bisnis Anda tumbuh.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-[#FBE4D9] z-[-1]"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                  >
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="bg-[#E8592C] hover:bg-[#B8420E] text-white text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors text-center shadow-[0_4px_20px_rgba(232,89,44,0.2)]"
                  style={H}
                >
                  Konsultasi Gratis
                </button>
                <button
                  className="bg-white border border-[#E3E5E1] hover:border-[#E8592C] hover:text-[#E8592C] text-[#59413a] text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors text-center"
                  style={H}
                >
                  Lihat Layanan Kami
                </button>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <span
                  className="material-symbols-outlined text-[#6E766F] text-[20px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  verified
                </span>
                <p className="text-[15px] leading-[24px] text-[#6E766F] max-w-md" style={B}>
                  Dipercaya RS Telogorejo, Mitsubishi Motors, Sriboga, dan 50+ bisnis lainnya semenjak
                  2013.
                </p>
              </div>
            </div>

            {/* Right: Receipt Card */}
            <div className="relative z-10 lg:pl-10">
              <div className="bg-white border border-[#E3E5E1] rounded-xl p-8 md:p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] rotate-1 hover:rotate-0 transition-transform duration-500 relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3
                      className="text-[14px] font-bold text-[#6E766F] tracking-widest uppercase"
                      style={{ ...H, letterSpacing: '0.05em' }}
                    >
                      PENAWARAN PROYEK
                    </h3>
                    <p className="text-[15px] text-[#1a1c1c] font-semibold mt-1" style={B}>
                      No. BM-2026-084
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[#E3E5E1] text-[40px]">
                    description
                  </span>
                </div>

                <div className="border-t border-dashed border-[#E3E5E1] w-full mb-6" />

                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Desain custom', value: <span className="material-symbols-outlined text-[18px] align-middle">check</span> },
                    { label: 'Waktu pengerjaan', value: '4 minggu' },
                    { label: 'Revisi', value: '3x' },
                    { label: 'Garansi teknis', value: '30 hari' },
                    { label: 'Kepemilikan', value: '100% Milik Anda' },
                    { label: 'Biaya tersembunyi', value: 'Rp 0' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-end">
                      <span className="text-[15px] font-medium text-[#1a1c1c]" style={B}>
                        {label}
                      </span>
                      <div className="bm-dotted-leader" />
                      <span className="text-[15px] text-[#59413a] font-medium" style={B}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dashed border-[#E3E5E1] w-full mt-6 mb-6" />

                <div className="flex justify-between items-end relative">
                  <div>
                    <p className="text-sm text-[#6E766F] mb-1" style={B}>
                      Status Penawaran
                    </p>
                    <p className="text-[24px] font-bold text-[#1a1c1c]" style={H}>
                      Final
                    </p>
                  </div>
                  <div
                    className="absolute right-0 bottom-0 border-2 border-[#E8592C] text-[#E8592C] px-3 py-1 rounded-sm opacity-90"
                    style={{ transform: 'rotate(-15deg)' }}
                  >
                    <p className="font-bold text-sm tracking-widest uppercase" style={H}>
                      DISEPAKATI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Stats ── */}
        <section className="py-12 px-6 border-t border-b border-[#E3E5E1] bg-[#FBE4D9]/20">
          <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[#E3E5E1]">
            {[
              { num: '10+', label: 'Tahun Pengalaman' },
              { num: '50+', label: 'Klien Aktif' },
              { num: '4', label: 'Layanan Utama' },
              { num: 'Semarang & Indonesia', label: 'Area Jangkauan', numSize: 'text-[40px]' },
            ].map(({ num, label, numSize }) => (
              <div key={label} className="flex flex-col items-center md:items-start text-center md:text-left px-4">
                <h2
                  className={`font-bold text-[#E8592C] ${numSize ?? 'text-[48px] md:text-[56px]'} leading-none mb-4`}
                  style={{ ...H, letterSpacing: '-0.01em' }}
                >
                  {num}
                </h2>
                <p className="text-[15px] font-medium text-[#59413a] mt-2" style={B}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. Tech Marquee ── */}
        <section className="py-12 bg-white border-b border-[#E3E5E1] overflow-hidden">
          <div className="max-w-[1180px] mx-auto">
            <p
              className="text-center text-[14px] font-bold text-[#6E766F] uppercase tracking-widest mb-8"
              style={{ ...H, letterSpacing: '0.05em' }}
            >
              Dibangun dengan teknologi modern dan andal
            </p>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="flex overflow-hidden">
                <div className="bm-animate-marquee whitespace-nowrap gap-12 items-center">
                  {[
                    'Next.js','React','TypeScript','Laravel','Node.js',
                    'PostgreSQL','MySQL','Docker','Tailwind CSS',
                    'Next.js','React','TypeScript','Laravel','Node.js',
                    'PostgreSQL','MySQL','Docker','Tailwind CSS',
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="mx-6 text-xl font-bold text-[#6E766F]/50"
                      style={H}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Problems ── */}
        <section className="py-[100px] px-6 bg-[#f9f9f8]">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-[36px] font-bold text-[#1a1c1c] leading-[44px]"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                Masalah yang Sering Dihadapi
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-10">
              <div className="bg-white border border-[#E3E5E1] p-8 rounded-xl flex flex-col items-start md:translate-y-8">
                <div className="w-12 h-12 bg-[#FBE4D9] rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#E8592C]">trending_down</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1c1c] mb-3" style={H}>
                  Website Tidak Menghasilkan
                </h3>
                <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>
                  Sudah punya website tapi sepi pengunjung dan tidak ada konversi penjualan.
                </p>
              </div>

              <div className="bg-[#E8592C]/5 border border-[#E8592C]/30 p-10 md:p-12 rounded-2xl flex flex-col items-start relative z-10 shadow-sm">
                <div className="w-16 h-16 bg-[#FBE4D9] rounded-xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-[#E8592C] text-[32px]">engineering</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1c1c] mb-3" style={H}>
                  Operasional Manual
                </h3>
                <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>
                  Sistem bisnis masih manual, lambat, dan rentan terhadap kesalahan manusia.
                </p>
              </div>

              <div className="bg-white border border-[#E3E5E1] p-8 rounded-xl flex flex-col items-start md:-translate-y-8">
                <div className="w-12 h-12 bg-[#FBE4D9] rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#E8592C]">handshake</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1c1c] mb-3" style={H}>
                  Butuh Partner Jangka Panjang
                </h3>
                <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>
                  Kesulitan mencari partner IT yang bisa dipercaya dan mendukung pertumbuhan bisnis secara
                  berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Services (client carousel) ── */}
        <ServicesCarousel />

        {/* ── 6. Process ── */}
        <section className="py-[100px] px-6 bg-[#f9f9f8] overflow-hidden" id="cara-kerja">
          <div className="max-w-[1180px] mx-auto">
            <div className="mb-16">
              <p
                className="text-[#E8592C] text-[14px] font-bold uppercase tracking-widest mb-2"
                style={{ ...H, letterSpacing: '0.05em' }}
              >
                CARA KERJA
              </p>
              <h2
                className="text-[36px] font-bold text-[#1a1c1c] leading-[44px] mb-4"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                Lima Tahap Kerja Kami
              </h2>
              <p className="text-[#6E766F] text-[15px] leading-[24px] max-w-md" style={B}>
                Proses profesional kami untuk memastikan hasil terbaik bagi bisnis Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
              {[
                { num: '01', title: 'Briefing', desc: 'Kami pahami tujuan bisnis, target audience, dan referensi yang Anda inginkan.' },
                { num: '02', title: 'Wireframe & Struktur', desc: 'Susun alur dan struktur halaman sebelum masuk ke desain visual.' },
                { num: '03', title: 'Desain & Development', desc: 'Proses inti pengerjaan, dengan checkpoint berkala untuk review bersama.' },
                { num: '04', title: 'Review & Revisi', desc: 'Anda cek hasilnya, catat yang perlu diubah, dan kami sempurnakan.' },
                { num: '05', title: 'Launch & Iterasi', desc: 'Website tayang, kami pastikan semua berjalan baik, dan siap dikembangkan lebih lanjut.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="group flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[48px] md:text-[56px] font-bold text-[#E8592C]/20 leading-none transition-colors duration-300 group-hover:text-[#E8592C]"
                      style={H}
                    >
                      {num}
                    </span>
                    <div className="hidden md:block h-px bg-[#E3E5E1] flex-grow" />
                  </div>
                  <h3 className="text-[24px] font-bold text-[#1a1c1c]" style={H}>
                    {title}
                  </h3>
                  <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Clients ── */}
        <section className="py-[100px] px-6 bg-[#FBE4D9]/20">
          <div className="max-w-[1180px] mx-auto text-center">
            <h2
              className="text-[36px] font-bold text-[#1a1c1c] leading-[44px] mb-16"
              style={{ ...H, letterSpacing: '-0.01em' }}
            >
              Klien Kami
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {clients.map((client) => {
                const logo = (
                  <Media
                    resource={client.logo}
                    htmlElement={null}
                    imgClassName="max-h-[250px] max-w-[250px] w-auto h-auto object-contain mx-auto"
                  />
                )
                return (
                  <div
                    key={client.id}
                    className="flex items-center justify-center h-[280px] p-4 transition-transform duration-300 hover:scale-105"
                  >
                    {client.website ? (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                      >
                        {logo}
                      </a>
                    ) : (
                      logo
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── 8. Testimonials ── */}
        <section className="py-[100px] px-6 bg-[#FBE4D9]/20">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-16">
              <p
                className="text-[#E8592C] text-[14px] font-bold uppercase tracking-widest mb-2"
                style={{ ...H, letterSpacing: '0.05em' }}
              >
                TESTIMONI
              </p>
              <h2
                className="text-[36px] font-bold text-[#1a1c1c] leading-[44px] mb-4"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                Yang mereka rasakan setelah bekerja dengan kami.
              </h2>
              <p className="text-[#6E766F] text-[15px] leading-[24px] max-w-2xl mx-auto" style={B}>
                Kami tidak hanya membangun sistem, kami membangun kepercayaan jangka panjang.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(({ id, tag, quote, initials, name, role }) => (
                <div
                  key={id}
                  className="bg-white border border-[#E3E5E1] p-8 rounded-xl shadow-sm flex flex-col gap-6"
                >
                  <p className="text-[#E8592C] text-xs font-bold uppercase tracking-wider" style={H}>
                    {tag}
                  </p>
                  <p className="text-[#6E766F] text-[15px] leading-[24px] flex-grow" style={B}>
                    {quote}
                  </p>
                  <div className="h-px bg-[#E3E5E1] w-full" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FBE4D9] flex items-center justify-center text-[#E8592C] font-bold text-sm" style={H}>
                      {initials}
                    </div>
                    <div>
                      <p className="text-[#1a1c1c] font-bold text-sm" style={H}>{name}</p>
                      <p className="text-[#6E766F] text-xs" style={B}>{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. Portfolio ── */}
        <section className="py-[100px] px-6 bg-[#f9f9f8]" id="portofolio">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-[36px] font-bold text-[#1a1c1c] leading-[44px]"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                Portofolio Pilihan
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/portofolio/${item.slug}`}
                  className="bg-white border border-[#E3E5E1] rounded-xl overflow-hidden shadow-sm group hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F3F1]">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${resolveImageUrl(item.imageUrl, item.heroImage)})` }}
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className="inline-block px-3 py-1 bg-[#FBE4D9] text-[#E8592C] text-xs font-bold rounded-full mb-3 uppercase"
                      style={H}
                    >
                      {item.category}
                    </span>
                    <h3 className="font-bold text-lg text-[#1a1c1c] mb-2 group-hover:text-[#E8592C] transition-colors" style={H}>{item.title}</h3>
                    <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link
                href="/portofolio"
                className="bg-white border border-[#E3E5E1] hover:border-[#E8592C] hover:text-[#E8592C] text-[#59413a] text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2"
                style={H}
              >
                Lihat Semua Portofolio
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ (client) ── */}
        <FAQSection />

        {/* ── 11. CTA ── */}
        <section className="py-20 px-6 bg-[#121613] text-center">
          <div className="max-w-[800px] mx-auto">
            <h2
              className="text-[36px] font-bold text-white leading-[44px] mb-8"
              style={{ ...H, letterSpacing: '-0.01em' }}
            >
              Konsultasikan kebutuhan digital Anda.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className="bg-[#E8592C] hover:bg-[#B8420E] text-white text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
                style={H}
              >
                Konsultasi Gratis
              </button>
              <button
                className="bg-transparent border border-white hover:bg-white/10 text-white text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors"
                style={H}
              >
                Lihat Layanan Kami
              </button>
            </div>
          </div>
        </section>

        {/* ── 12. Contact ── */}
        <section className="py-[100px] px-6 bg-white" id="hubungi-kami">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-start">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E8592C] rounded-full" />
                <span
                  className="text-[14px] font-bold text-[#E8592C] uppercase tracking-widest"
                  style={{ ...H, letterSpacing: '0.05em' }}
                >
                  HUBUNGI KAMI
                </span>
              </div>
              <h2
                className="text-[32px] md:text-[48px] font-bold text-[#1a1c1c] leading-[40px] md:leading-[56px]"
                style={{ ...H, letterSpacing: '-0.02em' }}
              >
                Ceritakan rencana Anda,
                <br />
                <span className="text-[#E8592C]">kami bantu</span>
                <br />
                wujudkan.
              </h2>
              <p className="text-[#6E766F] text-[15px] leading-[24px] max-w-md" style={B}>
                Tuliskan kebutuhan atau ide yang ingin Anda bangun. Tim kami balas dalam 24 jam, atau
                lebih cepat lewat WhatsApp.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#FBE4D9] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#E8592C]">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#6E766F] uppercase tracking-wider" style={H}>
                      EMAIL
                    </p>
                    <p className="text-[15px] font-semibold text-[#1a1c1c]" style={B}>
                      {contactEmail}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#FBE4D9] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#E8592C]">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#6E766F] uppercase tracking-wider" style={H}>
                      BERBASIS DI
                    </p>
                    <p className="text-[15px] font-semibold text-[#1a1c1c]" style={B}>
                      {contactLocation}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: 'verified', label: 'Kode Milik Anda' },
                  { icon: 'schedule', label: 'Respons 24 Jam' },
                  { icon: 'chat_bubble', label: 'Konsultasi Gratis' },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 px-3 py-1 border border-[#E3E5E1] rounded-full text-xs font-medium text-[#59413a]"
                    style={H}
                  >
                    <span className="material-symbols-outlined text-[#E8592C] text-sm">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm phone={contactPhone} email={contactEmail} />
          </div>
        </section>
      </main>

      <Footer />

      <FloatingButtons />
    </div>
  )
}
