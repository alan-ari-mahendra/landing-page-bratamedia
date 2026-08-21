import Navbar from './Navbar'
import ServicesCarousel from './ServicesCarousel'
import FAQSection from './FAQSection'
import FloatingButtons from './FloatingButtons'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

export default function LandingPage() {
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
              { num: 'Semarang & Indonesia', label: 'Area Jangkauan' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col items-center md:items-start text-center md:text-left px-4">
                <h2
                  className="font-bold text-[#E8592C] text-[48px] md:text-[56px] leading-none mb-4"
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
                <div key={num} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[48px] md:text-[56px] font-bold text-[#E8592C]/20 leading-none"
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
              {['RS. Telogorejo','Nyonya Meneer','Alifa Kids','Klien 4','Klien 5','Klien 6','Klien 7','Klien 8'].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center p-4 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 cursor-pointer"
                >
                  <span className="text-[#6E766F] font-bold text-lg" style={H}>{name}</span>
                </div>
              ))}
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
              {[
                {
                  tag: 'Rilis Tepat Waktu',
                  quote: '"Yang paling saya hargai, harga tidak berubah di tengah jalan. Semua sudah dijelaskan sejak penawaran pertama, dan tim Bratamedia selalu update progresnya tanpa perlu kami tanya duluan."',
                  initials: 'AS',
                  name: 'Nama Klien',
                  role: 'Direktur, Nama Perusahaan',
                },
                {
                  tag: 'Hemat 8 Jam per Minggu',
                  quote: '"Tim kami tidak lagi mencatat pesanan secara manual. Semua sudah masuk ke satu sistem yang rapi. Investasi terbaik yang pernah kami lakukan untuk efisiensi operasional tahun ini."',
                  initials: 'RM',
                  name: 'Nama Klien',
                  role: 'Owner, Nama Bisnis',
                },
                {
                  tag: 'Respons Cepat < 15 Menit',
                  quote: '"Setelah website tayang, mereka tidak menghilang. Tim support sangat responsif setiap kali kami butuh bantuan teknis atau ada fitur kecil yang ingin ditambahkan. Sangat membantu."',
                  initials: 'DW',
                  name: 'Nama Klien',
                  role: 'Marketing Manager, Startup',
                },
              ].map(({ tag, quote, initials, name, role }) => (
                <div
                  key={tag}
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
              {[
                { tag: 'E-COMMERCE', title: 'Toko Online Modern', desc: 'Platform belanja daring yang memudahkan transaksi pelanggan secara aman.' },
                { tag: 'CORPORATE', title: 'Portal Perusahaan', desc: 'Pusat informasi digital terintegrasi untuk meningkatkan kredibilitas bisnis.' },
                { tag: 'APLIKASI', title: 'Sistem Manajemen', desc: 'Solusi perangkat lunak untuk mengelola operasional internal secara efisien.' },
              ].map(({ tag, title, desc }) => (
                <div
                  key={tag}
                  className="bg-white border border-[#E3E5E1] rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="aspect-[16/10] bg-[#e2e2e2] w-full" />
                  <div className="p-6">
                    <span
                      className="inline-block px-3 py-1 bg-[#FBE4D9] text-[#E8592C] text-xs font-bold rounded-full mb-3 uppercase"
                      style={H}
                    >
                      {tag}
                    </span>
                    <h3 className="font-bold text-lg text-[#1a1c1c] mb-2" style={H}>{title}</h3>
                    <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <button
                className="bg-white border border-[#E3E5E1] hover:border-[#E8592C] hover:text-[#E8592C] text-[#59413a] text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2"
                style={H}
              >
                Lihat Semua Portofolio
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
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
                      contact@bratamedia.com
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
                      Semarang, Indonesia
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
            <div className="bg-white border border-[#e1bfb5]/50 rounded-xl p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
                      NAMA LENGKAP
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8]"
                      placeholder="Nama Anda"
                      type="text"
                      style={B}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
                      EMAIL
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8]"
                      placeholder="nama@perusahaan.com"
                      type="email"
                      style={B}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
                      JENIS PROYEK
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8]"
                      style={B}
                    >
                      <option>Web Application</option>
                      <option>Mobile App</option>
                      <option>Landing Page & Branding</option>
                      <option>AI & Automation</option>
                      <option>Web App Development</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
                      PERKIRAAN ANGGARAN
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8]"
                      style={B}
                    >
                      <option disabled value="">
                        Pilih kisaran anggaran
                      </option>
                      <option>{'< Rp 10 Juta'}</option>
                      <option>Rp 10 - 50 Juta</option>
                      <option>Rp 50 - 100 Juta</option>
                      <option>{'> Rp 100 Juta'}</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
                    PESAN
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8] resize-none"
                    placeholder="Ceritakan kebutuhan atau ide proyek Anda..."
                    rows={4}
                    style={B}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    className="flex-1 bg-[#E8592C] hover:bg-[#B8420E] text-white font-semibold px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    type="button"
                    style={H}
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Kirim via WhatsApp
                  </button>
                  <button
                    className="flex-1 bg-transparent border border-[#E8592C] text-[#E8592C] hover:bg-[#FBE4D9]/20 font-semibold px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    type="button"
                    style={H}
                  >
                    <span className="material-symbols-outlined">mail</span>
                    Kirim via Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#f9f9f8] border-t border-[#E3E5E1] pt-16 pb-8 px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-[#1a1c1c] mb-4" style={H}>
                Bratamedia
                <div className="w-2 h-2 bg-[#E8592C] mt-1" />
              </div>
              <p className="text-[#6E766F] text-sm mb-4" style={B}>
                Partner digital terpercaya Anda sejak 2013.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#1a1c1c] mb-4" style={H}>Layanan</h4>
              <ul className="space-y-2 text-sm text-[#6E766F]" style={B}>
                {['Pembuatan Website','Pengembangan Aplikasi','Digital Marketing','Desain UI/UX'].map((l) => (
                  <li key={l}><a className="hover:text-[#E8592C] transition-colors" href="#">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1a1c1c] mb-4" style={H}>Perusahaan</h4>
              <ul className="space-y-2 text-sm text-[#6E766F]" style={B}>
                {['Tentang Kami','Portofolio','Karir','Blog'].map((l) => (
                  <li key={l}><a className="hover:text-[#E8592C] transition-colors" href="#">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1a1c1c] mb-4" style={H}>Kontak</h4>
              <p className="text-sm text-[#6E766F]" style={B}>
                Jl. Tanjungsari 1 No. 18,
                <br />
                Semarang, Jawa Tengah
                <br />
                <br />
                halo@bratamedia.com
                <br />
                +62 812-3456-7890
              </p>
            </div>
          </div>
          <div className="border-t border-[#E3E5E1] pt-8 text-center text-sm text-[#6E766F]" style={B}>
            © 2024 Bratamedia. All rights reserved.
          </div>
        </div>
      </footer>

      <FloatingButtons />
    </div>
  )
}
