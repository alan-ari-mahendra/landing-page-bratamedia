'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from './data'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filtered =
    activeCategory === 'Semua'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Sticky Filter Bar */}
      <div className="sticky top-20 bg-[#f9f9f8]/90 backdrop-blur-md border-b border-[#E3E5E1] py-4 z-40 overflow-x-auto">
        <div className="max-w-[1180px] mx-auto px-5 md:px-6 flex gap-3 min-w-max">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#E8592C] text-white'
                  : 'border border-[#E3E5E1] text-[#6E766F] hover:border-[#E8592C] hover:text-[#E8592C]'
              }`}
              style={B}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <section className="py-[100px] px-5 md:px-6">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/portofolio/${item.slug}`}
              className="bg-white border border-[#E3E5E1] rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgba(18,22,19,0.04)] hover:shadow-lg block"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F3F1]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute top-4 left-4 bg-[#E8592C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider" style={H}>
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <h3
                  className="text-[22px] leading-tight font-bold text-[#1a1c1c] mb-2 group-hover:text-[#E8592C] transition-colors"
                  style={H}
                >
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#6E766F] leading-[24px]" style={B}>
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
