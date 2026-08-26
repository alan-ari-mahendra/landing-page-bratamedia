'use client'

import FAQAccordion from './FAQAccordion'

const faqs = [
  {
    q: 'Berapa biaya pembuatan website?',
    a: 'Biaya bervariasi tergantung kompleksitas dan fitur yang dibutuhkan. Silakan konsultasi untuk estimasi yang akurat.',
  },
  {
    q: 'Berapa lama waktu pengerjaan?',
    a: 'Rata-rata 4–6 minggu untuk website standar, tergantung scope dan kompleksitas proyek.',
  },
  {
    q: 'Apakah ada garansi?',
    a: 'Ya, kami memberikan garansi teknis 30 hari setelah website tayang.',
  },
  {
    q: 'Siapa yang mengelola hosting?',
    a: 'Kami bisa bantu setup hosting, atau Anda bisa gunakan hosting sendiri. Kode sepenuhnya milik Anda.',
  },
  {
    q: 'Apakah desain bisa dicustom?',
    a: 'Tentu. Semua proyek kami dimulai dari briefing dan wireframe, desain dibuat khusus sesuai brand Anda.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-[100px] px-6 bg-[#FBE4D9]/20" id="faq">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-[36px] font-bold text-[#1a1c1c] leading-[44px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif', letterSpacing: '-0.01em' }}
          >
            FAQ
          </h2>
        </div>

        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  )
}
