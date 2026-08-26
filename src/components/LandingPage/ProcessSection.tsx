const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

const steps = [
  { num: '01', title: 'Briefing', desc: 'Kami pahami tujuan bisnis, target audience, dan referensi yang Anda inginkan.' },
  { num: '02', title: 'Wireframe & Struktur', desc: 'Susun alur dan struktur halaman sebelum masuk ke desain visual.' },
  { num: '03', title: 'Desain & Development', desc: 'Proses inti pengerjaan, dengan checkpoint berkala untuk review bersama.' },
  { num: '04', title: 'Review & Revisi', desc: 'Anda cek hasilnya, catat yang perlu diubah, dan kami sempurnakan.' },
  { num: '05', title: 'Launch & Iterasi', desc: 'Website tayang, kami pastikan semua berjalan baik, dan siap dikembangkan lebih lanjut.' },
]

export default function ProcessSection() {
  return (
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
          {steps.map(({ num, title, desc }) => (
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
  )
}
