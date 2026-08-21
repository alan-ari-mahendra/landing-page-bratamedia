'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Portfolio', href: '/#portofolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tentang', href: '#' },
  { label: 'Kontak', href: '/#hubungi-kami' },
]

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (href: string) => {
    const isActive = href === '/blog' ? pathname.startsWith('/blog') : pathname === href
    return `transition-colors text-[16px] font-semibold ${
      isActive ? 'text-[#E8592C]' : 'text-[#59413a] hover:text-[#E8592C]'
    }`
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f9f9f8]/90 backdrop-blur-md border-b border-[#E3E5E1]">
      <div className="flex justify-between items-center max-w-[1180px] mx-auto px-6 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-[36px] font-bold text-[#1a1c1c]" style={H}>
          Bratamedia
          <div className="w-2 h-2 bg-[#E8592C] mt-2" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} className={linkClass(item.href)} style={H}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <button
            className="bg-[#E8592C] hover:bg-[#B8420E] text-white text-[16px] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            style={H}
          >
            Konsultasi Gratis
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#1a1c1c]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f9f9f8] border-t border-[#E3E5E1] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={linkClass(item.href)}
              style={H}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="bg-[#E8592C] hover:bg-[#B8420E] text-white text-[16px] font-semibold px-6 py-3 rounded-xl transition-colors text-center"
            style={H}
          >
            Konsultasi Gratis
          </button>
        </div>
      )}
    </nav>
  )
}
