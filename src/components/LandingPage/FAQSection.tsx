'use client'

import { useState } from 'react'

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
  const [openIndex, setOpenIndex] = useState<number>(0)

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

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className={i === 0 ? 'py-8' : 'border-t border-[#E3E5E1] py-8'}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span
                  className="font-bold text-[#1a1c1c]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                >
                  {faq.q}
                </span>
                <span className="material-symbols-outlined text-sm opacity-50 flex-shrink-0 ml-4">
                  {openIndex === i ? 'remove' : 'expand_more'}
                </span>
              </button>
              {openIndex === i && (
                <p
                  className="text-[#6E766F] text-[15px] leading-[24px] mt-6"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
