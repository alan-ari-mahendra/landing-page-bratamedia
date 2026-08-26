import Link from 'next/link'
import {
  Layers,
  Utensils,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Factory,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'
import Navbar from '@/components/LandingPage/Navbar'
import Footer from '@/components/LandingPage/Footer'
import FloatingButtons from '@/components/LandingPage/FloatingButtons'
import ProcessSection from '@/components/LandingPage/ProcessSection'
import FAQAccordion from '@/components/LandingPage/FAQAccordion'
import RichText from '@/components/RichText'
import type { ServiceArea, PricingTier } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

type Props = {
  city: ServiceArea
  pricingTiers: PricingTier[]
  contactPhone: string
}

const INDUSTRY_ICON_MAP: Record<string, LucideIcon> = {
  'SaaS & Sistem Internal': Layers,
  'F&B dan Restoran': Utensils,
  'Ritel & E-commerce': ShoppingBag,
  Kesehatan: HeartPulse,
  Pendidikan: GraduationCap,
  'Manufaktur & Distribusi': Factory,
}

function getIndustryIcon(name: string): LucideIcon {
  return INDUSTRY_ICON_MAP[name] ?? Briefcase
}

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

function splitStatTitle(title: string): { number: string; label: string } {
  const match = title.match(/^([\d.,]+\+?|\d+%)\s*(.*)$/)
  if (!match || !match[2]) return { number: '', label: title }
  return { number: match[1] ?? '', label: match[2] }
}

export default function ServiceAreaDetailPage({ city, pricingTiers, contactPhone }: Props) {
  const SITE_URL = getServerSideURL()
  const pageUrl = `${SITE_URL}/layanan/website/${city.slug}`

  const waText = encodeURIComponent(
    `Halo Bratamedia! Saya ingin konsultasi pembuatan website untuk bisnis saya di ${city.cityName}.`,
  )

  const nearbyCities = (city.nearbyCities ?? []).filter(
    (c): c is ServiceArea => typeof c === 'object' && c !== null,
  )

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bratamedia',
    image: `${SITE_URL}/website-template-OG.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.1 Blok H, Pd. Bukit Agung 2nd Floor',
      addressLocality: 'Semarang',
      addressRegion: 'Jawa Tengah',
      addressCountry: 'ID',
    },
    areaServed: city.cityName,
    url: pageUrl,
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Jasa Pembuatan Website',
    provider: { '@type': 'LocalBusiness', name: 'Bratamedia' },
    areaServed: city.cityName,
    url: pageUrl,
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (city.faqs ?? []).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Layanan', item: `${SITE_URL}/#layanan` },
      { '@type': 'ListItem', position: 3, name: 'Website Development', item: `${SITE_URL}/#layanan` },
      { '@type': 'ListItem', position: 4, name: city.cityName, item: pageUrl },
    ],
  }

  return (
    <div className="bg-[#f9f9f8] text-[#1a1c1c] antialiased overflow-x-hidden">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Navbar />

      <main className="pt-20">
        {/* ── 1. Hero ── */}
        <section className="py-[100px] px-6 overflow-hidden relative">
          <div className="max-w-[1180px] mx-auto">
            <nav className="text-sm text-[#6E766F] mb-6" style={B} aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#E8592C] transition-colors">Beranda</Link>
              <span className="mx-2">/</span>
              <Link href="/#layanan" className="hover:text-[#E8592C] transition-colors">Layanan</Link>
              <span className="mx-2">/</span>
              <span className="text-[#1a1c1c] font-medium">{city.cityName}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBE4D9] border border-[#E3E5E1] rounded-full w-fit mb-8">
              <span className="material-symbols-outlined text-[#E8592C] text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                location_on
              </span>
              <span className="text-sm font-semibold text-[#59413a]" style={H}>
                Jasa Pembuatan Website untuk Bisnis di {city.cityName}
              </span>
            </div>

            <h1
              className="text-[32px] md:text-[48px] font-bold text-[#1a1c1c] leading-[40px] md:leading-[56px] max-w-3xl"
              style={{ ...H, letterSpacing: '-0.02em' }}
            >
              {city.heroHeadline}
            </h1>

            {city.heroSubheadline && (
              <div className="text-[#6E766F] text-[17px] leading-[28px] max-w-2xl mt-6" style={B}>
                <RichText data={city.heroSubheadline} enableGutter={false} enableProse={false} />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href={`https://wa.me/${contactPhone}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8592C] hover:bg-[#B8420E] text-white text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors text-center shadow-[0_4px_20px_rgba(232,89,44,0.2)]"
                style={H}
              >
                Konsultasi via WhatsApp
              </a>
              <a
                href="#harga"
                className="bg-white border border-[#E3E5E1] hover:border-[#E8592C] hover:text-[#E8592C] text-[#59413a] text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors text-center"
                style={H}
              >
                Lihat Paket Harga
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. Local Positioning ── */}
        <section className="py-20 px-6 bg-[#FBE4D9]/20">
          <div className="max-w-[800px] mx-auto text-center">
            <p
              className="text-[#E8592C] text-[14px] font-bold uppercase tracking-widest mb-2"
              style={{ ...H, letterSpacing: '0.05em' }}
            >
              CARA KAMI BEKERJA DI {city.cityName.toUpperCase()}
            </p>
            <h2
              className="text-[28px] md:text-[36px] font-bold text-[#1a1c1c] leading-[38px] md:leading-[44px] mb-6"
              style={{ ...H, letterSpacing: '-0.01em' }}
            >
              Berbasis di Semarang, Bekerja untuk Klien di {city.cityName}
            </h2>
            <div className="text-[#6E766F] text-[15px] leading-[26px] text-left md:text-center" style={B}>
              <RichText data={city.localPositioning} enableGutter={false} enableProse={false} />
            </div>
          </div>
        </section>

        {/* ── 3. Coverage Area ── */}
        <section className="py-[100px] px-6">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: descriptive text */}
            <div>
              <p
                className="text-[#E8592C] text-[14px] font-bold uppercase tracking-widest mb-2"
                style={{ ...H, letterSpacing: '0.05em' }}
              >
                AREA CAKUPAN
              </p>
              <h2
                className="text-[32px] font-bold text-[#1a1c1c] leading-[40px] mb-6"
                style={{ ...H, letterSpacing: '-0.01em' }}
              >
                Area Cakupan Layanan
              </h2>
              {city.coverageIntro && (
                <div className="text-[#6E766F] text-[15px] leading-[26px] max-w-md" style={B}>
                  <RichText data={city.coverageIntro} enableGutter={false} enableProse={false} />
                </div>
              )}
            </div>

            {/* Right: city tags */}
            <div className="flex flex-col gap-8">
              {city.coverageAreas && city.coverageAreas.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6E766F] mb-4" style={H}>
                    Wilayah Utama
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {city.coverageAreas.map((c) => (
                      <span
                        key={c.id ?? c.area}
                        className="px-5 py-2.5 bg-white border border-[#E3E5E1] rounded-full text-sm font-semibold text-[#59413a] shadow-sm hover:shadow-md hover:border-[#E8592C] hover:text-[#E8592C] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-default"
                        style={B}
                      >
                        {c.area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {nearbyCities.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6E766F] mb-4" style={H}>
                    Kota Terdekat yang Juga Kami Layani
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {nearbyCities.map((c) => (
                      <Link
                        key={c.id}
                        href={`/layanan/website/${c.slug}`}
                        className="px-3.5 py-1.5 bg-[#f9f9f8] border border-[#E3E5E1] rounded-full text-xs font-medium text-[#6E766F] hover:border-[#E8592C] hover:text-[#E8592C] hover:bg-[#FBE4D9]/40 hover:-translate-y-0.5 transition-all duration-200 ease-out"
                      >
                        {c.cityName}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 4. Industries Served ── */}
        {city.industriesServed && city.industriesServed.length > 0 && (
          <section className="py-[100px] px-6 bg-[#f9f9f8]">
            <div className="max-w-[1180px] mx-auto">
              <div className="max-w-xl mb-12">
                <p
                  className="text-[#E8592C] text-[14px] font-bold uppercase tracking-widest mb-2"
                  style={{ ...H, letterSpacing: '0.05em' }}
                >
                  SEKTOR INDUSTRI
                </p>
                <h2
                  className="text-[32px] font-bold text-[#1a1c1c] leading-[40px] mb-4"
                  style={{ ...H, letterSpacing: '-0.01em' }}
                >
                  Industri yang Kami Layani
                </h2>
                <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>
                  Dari sistem internal hingga platform pelanggan, berikut sektor bisnis yang paling sering bekerja sama dengan kami.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {city.industriesServed.map((ind) => {
                  const Icon = getIndustryIcon(ind.name)
                  return (
                    <div
                      key={ind.id ?? ind.name}
                      className="group h-full bg-white border border-[#E3E5E1] rounded-2xl p-7 flex flex-col gap-4 hover:border-[#E8592C] hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out"
                    >
                      <span className="w-12 h-12 rounded-full bg-[#FBE4D9] group-hover:bg-[#F5C7A8] flex items-center justify-center transition-colors duration-200">
                        <Icon className="w-6 h-6 text-[#E8592C]" strokeWidth={1.75} />
                      </span>
                      <div>
                        <h3 className="text-[17px] font-bold text-[#1a1c1c] mb-2 leading-snug" style={H}>
                          {ind.name}
                        </h3>
                        {ind.description && (
                          <p className="text-[#6E766F] text-sm leading-[22px]" style={B}>
                            {ind.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── 5. Why Bratamedia ── */}
        {(() => {
          const proofPoints = city.proofPoints
          if (!proofPoints || proofPoints.length === 0) return null
          const [headline, ...rest] = proofPoints
          const { number, label } = splitStatTitle(headline.title)
          return (
            <section className="py-[100px] px-6">
              <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: big stat */}
                <div>
                  <p
                    className="text-[#E8592C] text-[14px] font-bold uppercase tracking-widest mb-4"
                    style={{ ...H, letterSpacing: '0.05em' }}
                  >
                    MENGAPA BRATAMEDIA
                  </p>
                  {number ? (
                    <>
                      <span
                        className="block text-[88px] md:text-[112px] font-bold text-[#E8592C] leading-none"
                        style={{ ...H, letterSpacing: '-0.02em' }}
                      >
                        {number}
                      </span>
                      <h3
                        className="text-[24px] md:text-[28px] font-bold text-[#1a1c1c] leading-[34px] mt-3 mb-5"
                        style={{ ...H, letterSpacing: '-0.01em' }}
                      >
                        {label}
                      </h3>
                    </>
                  ) : (
                    <h3
                      className="text-[32px] font-bold text-[#1a1c1c] leading-[40px] mb-5"
                      style={{ ...H, letterSpacing: '-0.01em' }}
                    >
                      {label}
                    </h3>
                  )}
                  <p className="text-[#6E766F] text-[15px] leading-[26px] max-w-md" style={B}>
                    {headline.description}
                  </p>
                </div>

                {/* Right: checklist */}
                <div className="flex flex-col gap-8">
                  {rest.map((p) => (
                    <div key={p.id ?? p.title} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FBE4D9] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#E8592C] text-[20px]">check</span>
                      </span>
                      <div>
                        <h4 className="text-[17px] font-bold text-[#1a1c1c] mb-1" style={H}>
                          {p.title}
                        </h4>
                        <p className="text-[#6E766F] text-[15px] leading-[24px]" style={B}>
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        })()}

        {/* ── 6. What's Included ── */}
        {((city.scopeIncluded && city.scopeIncluded.length > 0) ||
          (city.scopeOptional && city.scopeOptional.length > 0)) && (
          <section className="py-[100px] px-6 bg-[#FBE4D9]/20">
            <div className="max-w-[1180px] mx-auto">
              <div className="text-center mb-12">
                <h2
                  className="text-[32px] font-bold text-[#1a1c1c] leading-[40px]"
                  style={{ ...H, letterSpacing: '-0.01em' }}
                >
                  Cakupan Layanan
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {city.scopeIncluded && city.scopeIncluded.length > 0 && (
                  <div className="bg-white border border-[#E3E5E1] p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-10 h-10 rounded-xl bg-[#1a1c1c] flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-[20px]">verified</span>
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[#1a1c1c]" style={H}>
                          Termasuk
                        </h3>
                        <p className="text-xs text-[#6E766F]" style={B}>
                          Sudah tercakup di setiap paket
                        </p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-1">
                      {city.scopeIncluded.map((s) => (
                        <li
                          key={s.id ?? s.item}
                          className="flex items-start gap-3 text-[#59413a] text-[15px] p-2.5 -mx-2.5 rounded-lg hover:bg-[#f9f9f8] transition-colors duration-200"
                          style={B}
                        >
                          <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#E8592C] flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-[13px]">check</span>
                          </span>
                          {s.item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {city.scopeOptional && city.scopeOptional.length > 0 && (
                  <div className="bg-gradient-to-br from-[#FBE4D9]/60 to-white border border-[#E8592C]/25 p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-10 h-10 rounded-xl bg-[#E8592C] flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-white text-[20px]">add_circle</span>
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[#1a1c1c]" style={H}>
                          Opsional / Add-on
                        </h3>
                        <p className="text-xs text-[#6E766F]" style={B}>
                          Ditambahkan sesuai kebutuhan
                        </p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-1">
                      {city.scopeOptional.map((s) => (
                        <li
                          key={s.id ?? s.item}
                          className="flex items-start gap-3 text-[#59413a] text-[15px] p-2.5 -mx-2.5 rounded-lg hover:bg-white/60 transition-colors duration-200"
                          style={B}
                        >
                          <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full border-2 border-[#E8592C] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#E8592C] text-[13px]">add</span>
                          </span>
                          {s.item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── 7. Pricing ── */}
        {pricingTiers.length > 0 && (
          <section className="py-[100px] px-6" id="harga">
            <div className="max-w-[1180px] mx-auto">
              <div className="text-center mb-16">
                <h2
                  className="text-[32px] font-bold text-[#1a1c1c] leading-[40px] mb-4"
                  style={{ ...H, letterSpacing: '-0.01em' }}
                >
                  Paket Harga
                </h2>
                <p className="text-[#6E766F] text-[15px] leading-[24px] max-w-xl mx-auto" style={B}>
                  Harga yang sama untuk semua klien kami, di mana pun lokasinya.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`relative p-8 rounded-2xl border bg-white flex flex-col gap-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#E8592C] ${
                      tier.isPopular
                        ? 'border-2 border-[#E8592C] shadow-xl hover:shadow-2xl'
                        : 'border-[#E3E5E1] shadow-sm hover:shadow-xl'
                    }`}
                  >
                    {tier.isPopular && (
                      <span
                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8592C] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase shadow-md whitespace-nowrap flex items-center gap-1"
                        style={H}
                      >
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                          star
                        </span>
                        Paling Populer
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-[#1a1c1c]" style={H}>
                      {tier.tierName}
                    </h3>
                    <p className="text-2xl font-bold text-[#E8592C]" style={H}>
                      {tier.priceLabel}
                    </p>
                    {tier.description && (
                      <p className="text-[#6E766F] text-sm" style={B}>
                        {tier.description}
                      </p>
                    )}
                    {tier.features && tier.features.length > 0 && (
                      <ul className="flex flex-col gap-2 mt-2">
                        {tier.features.map((f) => (
                          <li key={f.id ?? f.feature} className="flex items-start gap-2 text-[#59413a] text-sm" style={B}>
                            <span className="material-symbols-outlined text-[#E8592C] text-[16px] mt-0.5">check</span>
                            {f.feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 8. Testimonials ── */}
        {city.testimonials && city.testimonials.length > 0 && (
          <section className="py-[100px] px-6 bg-[#FBE4D9]/20">
            <div className="max-w-[1180px] mx-auto">
              <div className="text-center mb-10">
                <p
                  className="text-[#E8592C] text-[14px] font-bold uppercase tracking-widest mb-2"
                  style={{ ...H, letterSpacing: '0.05em' }}
                >
                  TESTIMONI
                </p>
                <h2
                  className="text-[32px] font-bold text-[#1a1c1c] leading-[40px] mb-4"
                  style={{ ...H, letterSpacing: '-0.01em' }}
                >
                  Kata Klien Kami di {city.cityName}
                </h2>
                <p className="text-[#6E766F] text-[15px] leading-[24px] max-w-xl mx-auto" style={B}>
                  Kepuasan klien adalah prioritas utama kami di setiap proyek yang kami kerjakan.
                </p>
              </div>
              <div
                className={`grid grid-cols-1 gap-8 ${
                  city.testimonials.length <= 2
                    ? 'md:grid-cols-2 max-w-3xl mx-auto'
                    : 'md:grid-cols-3'
                }`}
              >
                {city.testimonials.map((t) => (
                  <div
                    key={t.id ?? t.name}
                    className={`relative bg-white border border-[#E3E5E1] rounded-2xl shadow-sm hover:shadow-lg hover:border-[#E8592C]/50 transition-all duration-300 ease-out flex flex-col gap-6 ${
                      city.testimonials!.length <= 2 ? 'p-10' : 'p-8'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[#FBE4D9] text-[48px] leading-none -mb-2"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      format_quote
                    </span>
                    <p
                      className={`text-[#59413a] leading-[26px] flex-grow ${
                        city.testimonials!.length <= 2 ? 'text-[17px]' : 'text-[15px]'
                      }`}
                      style={B}
                    >
                      {t.quote}
                    </p>
                    <div className="h-px bg-[#E3E5E1] w-full" />
                    <div className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 w-11 h-11 rounded-full bg-[#FBE4D9] flex items-center justify-center text-[#E8592C] font-bold text-sm"
                        style={H}
                      >
                        {getInitials(t.name)}
                      </span>
                      <div>
                        <p className="text-[#1a1c1c] font-bold text-sm" style={H}>
                          {t.name}
                        </p>
                        <p className="text-[#6E766F] text-xs" style={B}>
                          {t.role}
                          {t.company ? `, ${t.company}` : ''}
                        </p>
                      </div>
                    </div>
                    {t.isPlaceholder && (
                      <span
                        className="inline-block w-fit px-3 py-1 bg-[#F2F3F1] border border-[#E3E5E1] rounded-full text-xs text-[#6E766F]"
                        style={B}
                      >
                        Sample testimonial format
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 9. Work Process ── */}
        <ProcessSection />

        {/* ── 10. FAQ ── */}
        {city.faqs && city.faqs.length > 0 && (
          <section className="py-[100px] px-6 bg-[#FBE4D9]/20" id="faq">
            <div className="max-w-[800px] mx-auto">
              <div className="text-center mb-12">
                <h2
                  className="text-[36px] font-bold text-[#1a1c1c] leading-[44px]"
                  style={{ ...H, letterSpacing: '-0.01em' }}
                >
                  Pertanyaan yang Sering Diajukan
                </h2>
              </div>
              <FAQAccordion faqs={city.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
            </div>
          </section>
        )}

        {/* ── 11. Closing CTA ── */}
        <section className="py-20 px-6 bg-[#121613] text-center">
          <div className="max-w-[800px] mx-auto">
            <h2
              className="text-[36px] font-bold text-white leading-[44px] mb-8"
              style={{ ...H, letterSpacing: '-0.01em' }}
            >
              {city.closingCtaHeadline || `Siap Membangun Website untuk Bisnis Anda di ${city.cityName}?`}
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/${contactPhone}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8592C] hover:bg-[#B8420E] text-white text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
                style={H}
              >
                Konsultasi Gratis
              </a>
              <Link
                href="/#hubungi-kami"
                className="bg-transparent border border-white hover:bg-white/10 text-white text-[16px] font-semibold px-8 py-4 rounded-xl transition-colors"
                style={H}
              >
                Isi Formulir Kontak
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  )
}
