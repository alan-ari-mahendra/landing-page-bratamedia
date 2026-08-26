'use client'

import { useState, useRef, useEffect } from 'react'

const services = [
  {
    icon: 'web',
    title: 'Web App Development',
    desc: 'Sistem dan dashboard custom yang dibangun sesuai alur kerja bisnis Anda, bukan template siap pakai.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    desc: 'Aplikasi Android dan iOS untuk mendukung operasional atau layanan pelanggan Anda.',
  },
  {
    icon: 'campaign',
    title: 'Landing Page & Branding',
    desc: 'Halaman promosi dan identitas visual yang dirancang untuk satu tujuan: mengubah pengunjung jadi calon klien.',
  },
  {
    icon: 'smart_toy',
    title: 'AI & Automation',
    desc: 'Integrasi AI dan otomatisasi alur kerja untuk mengurangi pekerjaan manual yang berulang.',
  },
  {
    icon: 'language',
    title: 'Web Application',
    desc: 'Website perusahaan, company profile, dan portal informasi yang cepat dan mudah ditemukan di Google.',
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => setVisibleItems(window.innerWidth >= 768 ? 3 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, services.length - visibleItems)

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
  }

  useEffect(() => {
    if (!trackRef.current) return
    const items = trackRef.current.children
    if (!items.length) return
    const itemWidth = items[0].getBoundingClientRect().width
    const gap = parseFloat(window.getComputedStyle(trackRef.current).gap) || 0
    trackRef.current.style.transform = `translateX(-${currentIndex * (itemWidth + gap)}px)`
  }, [currentIndex, visibleItems])

  return (
    <section className="py-[100px] px-6 bg-[#FBE4D9]/20" id="layanan">
      <div className="max-w-[1180px] mx-auto relative">
        <div className="text-center mb-16">
          <h2
            className="text-[36px] font-bold text-[#1a1c1c] leading-[44px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif', letterSpacing: '-0.01em' }}
          >
            Layanan Kami
          </h2>
        </div>

        <div className="relative flex items-center">
          {/* Prev */}
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute -left-16 z-10 w-12 h-12 rounded-full border border-[#E3E5E1] items-center justify-center bg-white hover:border-[#E8592C] hover:text-[#E8592C] transition-colors text-[#1a1c1c] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex transition-transform duration-300 ease-in-out gap-8"
            >
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="flex-none w-full md:w-[calc(33.333%-1.33rem)] bg-white border border-[#E3E5E1] p-8 rounded-xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#FBE4D9] rounded-lg flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#E8592C]">{svc.icon}</span>
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1a1c1c] mb-3"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-[#6E766F] text-[15px] leading-[24px] mb-6"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {svc.desc}
                  </p>
                  <a
                    href="#"
                    className="text-[#E8592C] font-semibold hover:text-[#B8420E] inline-flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                  >
                    Pelajari layanan{' '}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === maxIndex}
            className="hidden md:flex absolute -right-16 z-10 w-12 h-12 rounded-full border border-[#E3E5E1] items-center justify-center bg-white hover:border-[#E8592C] hover:text-[#E8592C] transition-colors text-[#1a1c1c] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-[#E8592C] w-6' : 'bg-[#E3E5E1] w-2 hover:bg-[#6E766F]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
