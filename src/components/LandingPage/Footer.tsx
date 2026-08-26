import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

export default async function Footer({ activePage }: { activePage?: string }) {
  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/#layanan' },
    { label: 'Portfolio', href: '/portofolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontak', href: '/#hubungi-kami' },
  ]

  const services = [
    'Pembuatan Website',
    'Pengembangan Aplikasi',
    'Digital Marketing',
    'Desain UI/UX',
  ]

  const payload = await getPayload({ config })
  const { docs: cities } = await payload
    .find({
      collection: 'service-areas',
      where: { _status: { equals: 'published' } },
      sort: 'cityName',
      limit: 20,
      depth: 0,
      select: { slug: true, cityName: true },
    })
    .catch(() => ({ docs: [] as { slug: string; cityName: string }[] }))

  return (
    <footer className="bg-[#f9f9f8] border-t border-[#E3E5E1] pt-16 pb-8 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#1a1c1c] mb-4" style={H}>
              <Image
                src="/base-logo-brata.png"
                alt="Bratamedia"
                width={532}
                height={469}
                className="h-7 w-auto"
              />
              Bratamedia
            </Link>
            <p className="text-[#6E766F] text-sm mb-4" style={B}>
              Partner digital terpercaya Anda sejak 2013.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-[#1a1c1c] mb-4" style={H}>Layanan</h4>
            <ul className="space-y-2 text-sm text-[#6E766F]" style={B}>
              {services.map((l) => (
                <li key={l}>
                  <a className="hover:text-[#E8592C] transition-colors" href="#">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-bold text-[#1a1c1c] mb-4" style={H}>Navigasi</h4>
            <ul className="space-y-2 text-sm" style={B}>
              {navLinks.map((item) => {
                const isActive = activePage === item.label
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`transition-colors ${
                        isActive
                          ? 'text-[#E8592C] font-semibold'
                          : 'text-[#6E766F] hover:text-[#E8592C]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Area Layanan */}
          {cities.length > 0 && (
            <div>
              <h4 className="font-bold text-[#1a1c1c] mb-4" style={H}>Area Layanan</h4>
              <ul className="space-y-2 text-sm text-[#6E766F]" style={B}>
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/layanan/website/${c.slug}`}
                      className="hover:text-[#E8592C] transition-colors"
                    >
                      Jasa Website {c.cityName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-[#1a1c1c] mb-4" style={H}>Kontak</h4>
            <p className="text-sm text-[#6E766F]" style={B}>
              No.1 Blok H, Pd. Bukit Agung 2nd Floor,
              <br />
              Semarang, Jawa Tengah
              <br />
              <br />
              contact@bratamedia.com
              <br />
              +62 0895–3420–01544
            </p>
          </div>
        </div>

        <div className="border-t border-[#E3E5E1] pt-8 text-center text-sm text-[#6E766F]" style={B}>
          © 2018 Bratamedia. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
