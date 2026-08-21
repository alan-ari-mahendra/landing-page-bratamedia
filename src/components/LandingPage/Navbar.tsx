'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Beranda', href: '/', sectionId: null },
  { label: 'Layanan', href: '/#layanan', sectionId: 'layanan' },
  { label: 'Portfolio', href: '/portofolio', sectionId: null },
  { label: 'Blog', href: '/blog', sectionId: null },
  { label: 'Kontak', href: '/#hubungi-kami', sectionId: 'hubungi-kami' },
]

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }

    const sectionIds = ['layanan', 'hubungi-kami']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry!.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-30% 0px -50% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    // Clear active section when scrolled back near top
    const onScroll = () => {
      if (window.scrollY < 200) setActiveSection(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  const linkClass = (href: string, sectionId: string | null) => {
    let isActive = false
    if (href === '/blog') isActive = pathname.startsWith('/blog')
    else if (href === '/portofolio') isActive = pathname.startsWith('/portofolio')
    else if (sectionId) isActive = pathname === '/' && activeSection === sectionId
    else if (href === '/') isActive = pathname === '/' && activeSection === null
    else isActive = pathname === href

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
            <Link key={item.label} href={item.href} className={linkClass(item.href, item.sectionId)} style={H}>
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
              className={linkClass(item.href, item.sectionId)}
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
