import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const { getPayload } = await import('payload')
const { default: config } = await import('@payload-config')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeLexical(text: string) {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              text,
              format: 0,
              detail: 0,
              mode: 'normal',
              style: '',
              version: 1,
            },
          ],
          direction: 'ltr',
          textFormat: 0,
        },
      ],
      direction: 'ltr',
    },
  }
}

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------

const BLOG_CATEGORIES = ['Tips Bisnis', 'Teknologi', 'Studi Kasus', 'Berita Bratamedia']

const BLOG_POSTS = [
  {
    slug: 'transformasi-digital-klinik-xyz-efisiensi-70-persen',
    category: 'Studi Kasus',
    title: 'Transformasi Digital: Bagaimana Klinik XYZ Meningkatkan Efisiensi 70%',
    excerpt:
      'Langkah demi langkah modernisasi sistem operasional klinik yang berdampak langsung pada pelayanan pasien dan pemangkasan biaya administratif.',
    readTime: '5 menit baca',
    publishedAt: new Date('2023-10-12'),
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBz9_kHbNcNUPQR2aEyOP4P32lk7PfPWrSfTKT9-sYblpr2jklU-z-SrzEssYpR-fRHTsfthrj8rcy3_vnI_-M34lIBvcYwIXIX7dg1ThUeHkwnKC7gMi_crNfnD7Nsn0ey__N6MUpXpkH5dswFhebMRPpyv3b3cwRQbi4WJR_KAc0UApJMOrlWrUQV-OvEn-Uj0eDCrfQ57BngDo_Ldt6_qKCD7ptJvg0p9hAt3LOR3989Od_7IpOR',
  },
  {
    slug: '5-tanda-website-sudah-waktunya-diperbarui',
    category: 'Tips Bisnis',
    title: '5 Tanda Website Anda Sudah Waktunya Diperbarui',
    excerpt:
      'Jangan biarkan website yang usang merugikan bisnis Anda. Kenali ciri-ciri utamanya sekarang.',
    readTime: '4 menit baca',
    publishedAt: new Date('2023-10-05'),
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQKdDCdBYL1-xqji7my54KL21Ji1OubgZSGWhoDp_ZA5XxmuokzLTCj54DrrnxrhL0ntAJAXhpTeYpf63Ud3itlqU1L6LvYlVNhJ3fwSw0zJU14crN6aWbtt63TRK426QpLCi5gxjlthOOtDhCE7BPt_s7Cn_zJUpTx8hjC0V4H-FMnYnHwvTonlC0CbXSaE8J2Pf1XkzE6CEHPF9yPXcyZhnzYLEeCF-z8rPsnebxdvGdIQw13Aci',
  },
  {
    slug: 'digitalisasi-pendaftaran-pasien-klinik-swasta',
    category: 'Studi Kasus',
    title: 'Studi Kasus: Digitalisasi Pendaftaran Pasien di Klinik Swasta',
    excerpt: 'Mengurangi antrean hingga 50% dengan sistem booking online yang terintegrasi.',
    readTime: '6 menit baca',
    publishedAt: new Date('2023-09-28'),
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcfZxfc2f7M4w0DkTYte8NS-E7lxvaHjLVHG29Qx_cVtOQvKdvUlKbjA-xIH706woIE-WJSc39xDZyN6K_TPgnFSAal0MiP8lAnXI4jwm-Hz0IBr3QbmfxM1-EuBq7at78bVTZjo9IDCne0eimAOd4dR1lcvXHqWNkhPf5Mp7Pi1GTYg7x6bs5Yd25CdZdBtXZYElxTj2rPb7HduaXbHpZEzsaiONsPbg4xgHcDicsAuMeNkbb3AoV',
  },
  {
    slug: 'kapan-bisnis-butuh-aplikasi-mobile',
    category: 'Tips Bisnis',
    title: 'Kapan Bisnis Anda Butuh Aplikasi Mobile, Bukan Sekadar Website?',
    excerpt:
      'Panduan praktis untuk menentukan platform digital yang tepat sesuai dengan model bisnis Anda.',
    readTime: '5 menit baca',
    publishedAt: new Date('2023-09-15'),
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC6fwECmP0An-p1ccii8mZJCznOjIioc_fpF7IBiegvs6OZIQSrTUkOsy_9XhO4kPiay2lsErklxW3At9EUs0I898W7WtcXFjAEJcBltIjXBq9ldrjzMKjXWtQa0',
  },
  {
    slug: 'mengenal-ai-automation-untuk-bisnis-kecil',
    category: 'Teknologi',
    title: 'Mengenal AI Automation dan Manfaatnya untuk Bisnis Kecil',
    excerpt:
      'Pelajari bagaimana kecerdasan buatan dapat menyederhanakan proses repetitif dan menghemat waktu berharga Anda.',
    readTime: '7 menit baca',
    publishedAt: new Date('2023-09-02'),
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuGFdQPxhmYF5uLTzJJx-5R5I-8ZUI7UrfULj7Tap_Y-Z6__rsnojYQU0_xaugg62xAfsNnSgHZwpJmMeU8CTlZ6hKkODaBc0drkhPCz_4BbcIHTdBZBc197jPzUBnl13SUdqhOMhNp9XbxN-0eJoXR5R7A17COC73ixzLY2_Dny1rC7eLmBpkSHlOsvx010mBrDJ7qJARmLX8Og66_Bxf8Re0VQXKz2KerXEDAP6o26PEmGlquQ1u',
  },
  {
    slug: 'bratamedia-kini-melayani-klien-luar-jawa-tengah',
    category: 'Berita Bratamedia',
    title: 'Bratamedia Kini Melayani Klien di Luar Jawa Tengah',
    excerpt:
      'Kami memperluas jangkauan layanan untuk membantu lebih banyak bisnis di seluruh Indonesia bertransformasi digital.',
    readTime: '3 menit baca',
    publishedAt: new Date('2023-08-20'),
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBONfQeJ5bL4fJ9LqtUe9BDd1XBed6j3Oh10OVolmECSfV4GWH0hn5lD9kiMZzsTcShcQPBRMSOi3SM9_pjY_xcvNx6PdWDO8CNE2QMA8gjcLQbxxadNguvD0UwNTa8Lqc_V2hNEt3rN1xKEzMRTMIDeU7fkZ9Sz9s6hBlbr98V4sBbbzmU4yFtiNidJ0WmwRkPqvfVBehInbrgN0_gCFiCPKLSp8OkbqCNZ4mPR9h_ZsYBd3UeSU4O',
  },
  {
    slug: 'perbedaan-landing-page-dan-company-profile',
    category: 'Tips Bisnis',
    title: 'Perbedaan Landing Page dan Company Profile, Mana yang Anda Butuhkan?',
    excerpt:
      'Pahami fungsi spesifik keduanya agar investasi digital Anda memberikan ROI yang maksimal.',
    readTime: '4 menit baca',
    publishedAt: new Date('2023-08-10'),
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdnaz-3wuOQa3-NE9tEYHbYrr1dxfKdxM_j8ainQGPAnrUEA_U8tDW8ZfeqnTqeEzD2TMH6MWMRlv7XdezGaCkjlTlOZeBxC9dMeWFPao-H4GB0wYRl0_gMZhTmTwskhxEbGqPIe3DYhCQ0sV218cDX_kSA24qspFZaiwOfjDCJVIoMTjbFzcVFNWd0PpV8QY4SHmlVOeX4D9MddgIe2S5InE_eYk8AYkvaBRIh9csPPout9ziQU8I',
  },
]

const TESTIMONIALS = [
  {
    slug: 'sistem-manajemen-klinik',
    title: 'Sistem Manajemen Klinik',
    category: 'Web App Development',
    desc: 'Sistem pendataan pasien dan jadwal dokter untuk klinik swasta, menggantikan pencatatan manual.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOS7TwU3lr3z3K-x-AmHHh4SwOiU4I7slx19TlBvebuZtCrE8aWm_iK2adlwQDCO94Ru28xs-DpfgiGr3Vm-88hJsRL76k5BzIELnl2oQBQu8EEJsWumyrdVNZtARGXo4rtmFpZt9vgUsJJjqoxaFcWRrZdcd7K9o2WbMNMqwoh-FWxtCu-PHJseP5Zlnihjj6R8Po9BdsuYfLrn8jB6de7Pg7wLsz5IoRdERq8wCkH-pokbaTJ3wV',
    client: 'Klinik Swasta di Semarang',
    duration: '8 Minggu, 2025',
    challenge: [
      'Tim sales yang menjual ke resto sering membuang waktu untuk manual searching lead lewat Google Maps satu per satu, lalu copy-paste data ke spreadsheet sebelum follow-up. Prosesnya lambat dan data cepat basi karena tidak ada tracking status lead yang jelas.',
      'Belum ada tools yang menggabungkan proses scraping data lead dengan CRM pipeline dalam satu platform, sehingga tim harus berpindah antar beberapa tools terpisah setiap hari.',
    ],
    solution:
      'Kami bangun platform full-stack yang menggabungkan scraping engine berbasis BullMQ dan Redis untuk menarik data resto dari Google Maps/OpenStreetMap secara asynchronous, dengan CRM pipeline lengkap (status lead, notes, activity log) dan modul AI outreach untuk generate pesan follow-up otomatis berdasarkan profil lead.',
    solutionImageUrl: '/images/projects/dinelead-solution.jpg',
    stats: [
      { value: '85%', label: 'Lebih Cepat', sub: 'Proses pengumpulan lead dibanding manual' },
      { value: '4', label: 'Format Export', sub: 'Excel, CSV, JSON, dan API' },
      { value: '100%', label: 'Async', sub: 'Scraping job berjalan di background tanpa blocking UI' },
    ],
    testimonial: {
      quote:
        '"Sebagai internal tool, DineLead jadi bukti kalau scraping pipeline dan CRM bisa berjalan mulus dalam satu sistem tanpa perlu integrasi pihak ketiga yang mahal."',
      initials: 'BM',
      name: 'Tim Bratamedia',
      role: 'Internal Product Team',
    },
    tech: ['Next.js', 'Supabase', 'Stripe', 'BullMQ', 'Redis'],
  },
  {
    slug: 'elevare-kanban-saas',
    title: 'Elevare — Real-time Kanban SaaS',
    category: 'SaaS Product Development',
    desc: 'Project management tool berbasis Kanban board dengan real-time collaboration, dibangun untuk tim kecil yang butuh workflow tracking tanpa kerumitan enterprise tools.',
    imageUrl: '/images/projects/elevare-hero.jpg',
    client: 'Produk Internal Bratamedia',
    duration: '6 Minggu, 2025',
    challenge: [
      'Tools project management enterprise seperti Jira sering kelebihan fitur untuk tim kecil, sementara tools sederhana seperti Trello kurang fleksibel untuk custom workflow dan real-time sync antar anggota tim.',
      'Dibutuhkan solusi ringan yang tetap punya real-time update ketika ada perubahan status task, tanpa harus refresh manual atau mengalami delay sinkronisasi.',
    ],
    solution:
      'Kami kembangkan Kanban board dengan real-time sync menggunakan Supabase Realtime, drag-and-drop task management, dan struktur board yang bisa dikustomisasi sesuai workflow masing-masing tim, dengan fokus pada performa dan kesederhanaan UI.',
    solutionImageUrl: '/images/projects/elevare-solution.jpg',
    stats: [
      { value: '<100ms', label: 'Sync Latency', sub: 'Update board antar user secara real-time' },
      { value: '0', label: 'Refresh Manual', sub: 'Semua perubahan tersinkron otomatis' },
      { value: '3', label: 'Board Layout', sub: 'Template workflow siap pakai' },
    ],
    testimonial: {
      quote:
        '"Elevare dibangun untuk membuktikan real-time collaboration tidak harus kompleks — tim kecil pun bisa dapat pengalaman kolaborasi yang responsif tanpa overhead setup."',
      initials: 'BM',
      name: 'Tim Bratamedia',
      role: 'Internal Product Team',
    },
    tech: ['Next.js', 'Supabase', 'Realtime', 'Tailwind CSS'],
  },
  {
    slug: 'dinelead-restaurant-crm',
    title: 'DineLead — Restaurant CRM & Lead Scraping Platform',
    category: 'SaaS Product Development',
    desc: 'Platform CRM untuk tim sales resto, dengan built-in scraping engine untuk kumpulin lead dari Google Maps dan AI outreach otomatis.',
    imageUrl: '/images/projects/dinelead-hero.jpg',
    client: 'Produk Internal Bratamedia',
    duration: '10 Minggu, 2025',
    challenge: [
      'Tim sales yang menjual ke resto sering membuang waktu untuk manual searching lead lewat Google Maps satu per satu, lalu copy-paste data ke spreadsheet sebelum follow-up. Prosesnya lambat dan data cepat basi karena tidak ada tracking status lead yang jelas.',
      'Belum ada tools yang menggabungkan proses scraping data lead dengan CRM pipeline dalam satu platform, sehingga tim harus berpindah antar beberapa tools terpisah setiap hari.',
    ],
    solution:
      'Kami bangun platform full-stack yang menggabungkan scraping engine berbasis BullMQ dan Redis untuk menarik data resto dari Google Maps/OpenStreetMap secara asynchronous, dengan CRM pipeline lengkap (status lead, notes, activity log) dan modul AI outreach untuk generate pesan follow-up otomatis berdasarkan profil lead.',
    solutionImageUrl: '/images/projects/dinelead-solution.jpg',
    stats: [
      { value: '85%', label: 'Lebih Cepat', sub: 'Proses pengumpulan lead dibanding manual' },
      { value: '4', label: 'Format Export', sub: 'Excel, CSV, JSON, dan API' },
      { value: '100%', label: 'Async', sub: 'Scraping job berjalan di background tanpa blocking UI' },
    ],
    testimonial: {
      quote:
        '"Sebagai internal tool, DineLead jadi bukti kalau scraping pipeline dan CRM bisa berjalan mulus dalam satu sistem tanpa perlu integrasi pihak ketiga yang mahal."',
      initials: 'BM',
      name: 'Tim Bratamedia',
      role: 'Internal Product Team',
    },
    tech: ['Next.js', 'Supabase', 'Stripe', 'BullMQ', 'Redis'],
  },
  {
    slug: 'elevare-kanban-saas',
    title: 'Elevare — Real-time Kanban SaaS',
    category: 'SaaS Product Development',
    desc: 'Project management tool berbasis Kanban board dengan real-time collaboration, dibangun untuk tim kecil yang butuh workflow tracking tanpa kerumitan enterprise tools.',
    imageUrl: '/images/projects/elevare-hero.jpg',
    client: 'Produk Internal Bratamedia',
    duration: '6 Minggu, 2025',
    challenge: [
      'Tools project management enterprise seperti Jira sering kelebihan fitur untuk tim kecil, sementara tools sederhana seperti Trello kurang fleksibel untuk custom workflow dan real-time sync antar anggota tim.',
      'Dibutuhkan solusi ringan yang tetap punya real-time update ketika ada perubahan status task, tanpa harus refresh manual atau mengalami delay sinkronisasi.',
    ],
    solution:
      'Kami kembangkan Kanban board dengan real-time sync menggunakan Supabase Realtime, drag-and-drop task management, dan struktur board yang bisa dikustomisasi sesuai workflow masing-masing tim, dengan fokus pada performa dan kesederhanaan UI.',
    solutionImageUrl: '/images/projects/elevare-solution.jpg',
    stats: [
      { value: '<100ms', label: 'Sync Latency', sub: 'Update board antar user secara real-time' },
      { value: '0', label: 'Refresh Manual', sub: 'Semua perubahan tersinkron otomatis' },
      { value: '3', label: 'Board Layout', sub: 'Template workflow siap pakai' },
    ],
    testimonial: {
      quote:
        '"Elevare dibangun untuk membuktikan real-time collaboration tidak harus kompleks — tim kecil pun bisa dapat pengalaman kolaborasi yang responsif tanpa overhead setup."',
      initials: 'BM',
      name: 'Tim Bratamedia',
      role: 'Internal Product Team',
    },
    tech: ['Next.js', 'Supabase', 'Realtime', 'Tailwind CSS'],
  },
  {
    slug: 'learnify-lms-platform',
    title: 'Learnify — LMS dengan AI Quiz Generator',
    category: 'SaaS Product Development',
    desc: 'Platform LMS multi-role (student, instructor, admin) dengan video course, progress tracking, sertifikat, dan AI quiz generator otomatis dari materi course.',
    imageUrl: '/images/projects/learnify-hero.jpg',
    client: 'Produk Internal Bratamedia',
    duration: '8 Minggu, 2025',
    challenge: [
      'Instructor sering kesulitan membuat kuis evaluasi yang relevan dari materi course secara manual, prosesnya memakan waktu dan kualitasnya inkonsisten antar course.',
      'Dibutuhkan sistem LMS yang tidak sekadar menampilkan video, tapi juga bisa memvalidasi progress belajar siswa secara otomatis dan menerbitkan sertifikat yang dapat diverifikasi.',
    ],
    solution:
      'Kami bangun LMS full-stack dengan tiga role terpisah (student, instructor, admin), integrasi AI untuk generate quiz otomatis dari transkrip/materi course, progress tracking real-time, dan sertifikat kelulusan dengan QR code verification.',
    solutionImageUrl: '/images/projects/learnify-solution.jpg',
    stats: [
      { value: '90%', label: 'Lebih Cepat', sub: 'Pembuatan quiz dibanding manual authoring' },
      { value: '3', label: 'User Role', sub: 'Student, Instructor, Admin dengan akses terpisah' },
      { value: '100%', label: 'Verifiable', sub: 'Sertifikat dengan QR code verification' },
    ],
    testimonial: {
      quote:
        '"Learnify jadi showcase bagaimana AI bisa dipakai untuk mempercepat proses content authoring instructor, bukan sekadar untuk chatbot atau generate teks biasa."',
      initials: 'BM',
      name: 'Tim Bratamedia',
      role: 'Internal Product Team',
    },
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AI Integration'],
  },
  {
    slug: 'griple-d2c-ecommerce',
    title: 'Griple — D2C Gym Apparel E-commerce',
    category: 'E-commerce Development',
    desc: 'Platform e-commerce direct-to-consumer untuk brand apparel gym, dengan katalog produk, cart, checkout, dan manajemen inventory dalam satu sistem.',
    imageUrl: '/images/projects/griple-hero.jpg',
    client: 'Produk Internal Bratamedia',
    duration: '5 Minggu, 2025',
    challenge: [
      'Brand D2C kecil biasanya bergantung pada marketplace pihak ketiga yang membebankan komisi tinggi dan membatasi kontrol atas branding serta pengalaman belanja pelanggan.',
      'Dibutuhkan platform sendiri yang ringan, cepat, dan mudah dikelola tanpa harus bergantung pada plugin e-commerce yang berat seperti WooCommerce.',
    ],
    solution:
      'Kami bangun storefront custom dengan Next.js dan Prisma, mencakup manajemen produk dan varian (ukuran, warna), cart persistence, checkout flow, dan dashboard admin untuk kelola stok dan pesanan tanpa ketergantungan marketplace pihak ketiga.',
    solutionImageUrl: '/images/projects/griple-solution.jpg',
    stats: [
      { value: '0%', label: 'Komisi Marketplace', sub: 'Full kontrol atas margin dan branding' },
      { value: '<2s', label: 'Page Load', sub: 'Storefront dioptimasi untuk performa checkout' },
      { value: '100%', label: 'Custom Branding', sub: 'Tanpa batasan template marketplace' },
    ],
    testimonial: {
      quote:
        '"Griple dibangun untuk menunjukkan storefront custom tetap bisa cepat dikembangkan dan dikelola tanpa kompleksitas platform e-commerce enterprise."',
      initials: 'BM',
      name: 'Tim Bratamedia',
      role: 'Internal Product Team',
    },
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
  },
]

const TESTIMONIALS = [
  {
    tag: 'Rilis Tepat Waktu',
    quote:
      '"Yang paling saya hargai, harga tidak berubah di tengah jalan. Semua sudah dijelaskan sejak penawaran pertama, dan tim Bratamedia selalu update progresnya tanpa perlu kami tanya duluan."',
    name: 'Ahmad Setiawan',
    role: 'Direktur, RS Telogorejo',
  },
  {
    tag: 'Hemat 8 Jam per Minggu',
    quote:
      '"Tim kami tidak lagi mencatat pesanan secara manual. Semua sudah masuk ke satu sistem yang rapi. Investasi terbaik yang pernah kami lakukan untuk efisiensi operasional tahun ini."',
    name: 'Retno Mulyani',
    role: 'Owner, Nyonya Meneer',
  },
  {
    tag: 'Respons Cepat < 15 Menit',
    quote:
      '"Setelah website tayang, mereka tidak menghilang. Tim support sangat responsif setiap kali kami butuh bantuan teknis atau ada fitur kecil yang ingin ditambahkan. Sangat membantu."',
    name: 'Dimas Wirawan',
    role: 'Marketing Manager, Sriboga',
  },
]

// ---------------------------------------------------------------------------
// Main seed function
// ---------------------------------------------------------------------------

async function seed() {
  const payload = await getPayload({ config })

  // Check if core content (posts/portfolios) is already seeded
  const existingPortfolios = await payload.find({
    collection: 'portfolios',
    limit: 1,
  })
  const coreAlreadySeeded = existingPortfolios.totalDocs > 0

  if (coreAlreadySeeded) {
    console.log('Core content already seeded — portfolios exist, skipping posts/portfolios.')
  } else {
    await seedCore(payload)
  }

  // Portfolio items are seeded independently and per-slug so re-running
  // this script only backfills items that don't exist yet, instead of
  // skipping all-or-nothing.
  console.log('Seeding portfolio items...')
  for (const item of PORTFOLIO_ITEMS) {
    const existing = await payload.find({
      collection: 'portfolios',
      where: { slug: { equals: item.slug } },
      limit: 1,
    })
    if (existing.totalDocs > 0) {
      console.log(`Portfolio already exists, skipping: ${item.slug}`)
      continue
    }
    await payload.create({
      collection: 'portfolios',
      data: {
        title: item.title,
        slug: item.slug,
        category: item.category,
        desc: item.desc,
        imageUrl: item.imageUrl,
        client: item.client,
        duration: item.duration,
        challenge: item.challenge.map((paragraph) => ({ paragraph })),
        solution: item.solution,
        solutionImageUrl: item.solutionImageUrl,
        stats: item.stats,
        testimonial: item.testimonial,
        tech: item.tech.map((name) => ({ name })),
      } as any,
    })
    console.log(`Portfolio: ${item.slug}`)
  }

  // Testimonials are seeded independently so re-running this script on an
  // already-seeded database still backfills collections added later.
  const existingTestimonials = await payload.find({
    collection: 'testimonials',
    limit: 1,
  })
  if (existingTestimonials.totalDocs > 0) {
    console.log('Testimonials already seeded, skipping.')
  } else {
    console.log('Seeding testimonials...')
    for (const t of TESTIMONIALS) {
      await payload.create({
        collection: 'testimonials',
        data: {
          tag: t.tag,
          quote: t.quote,
          name: t.name,
          role: t.role,
        },
      })
      console.log(`Testimonial: ${t.name}`)
    }
  }

  console.log('Seed complete.')
  process.exit(0)
}

async function seedCore(payload: Awaited<ReturnType<typeof getPayload>>) {
  console.log('Seeding...')

  // 1. Create author user
  let authorId: number | string | undefined
  try {
    const existingUser = await payload.find({
      collection: 'users',
      where: { email: { equals: 'tim@bratamedia.id' } },
      limit: 1,
    })
    if (existingUser.docs.length > 0) {
      authorId = existingUser.docs[0]!.id
    } else {
      const user = await payload.create({
        collection: 'users',
        data: {
          name: 'Tim Bratamedia',
          email: 'tim@bratamedia.id',
          password: 'Bratamedia2025!',
        },
      })
      authorId = user.id
    }
    console.log(`Author: ${authorId}`)
  } catch (e) {
    console.warn('Could not create/find author user:', e)
  }

  // 2. Create blog categories
  const categoryMap: Record<string, number | string> = {}
  for (const title of BLOG_CATEGORIES) {
    const existing = await payload.find({
      collection: 'categories',
      where: { title: { equals: title } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      categoryMap[title] = existing.docs[0]!.id
    } else {
      const cat = await payload.create({
        collection: 'categories',
        data: { title, slug: title.toLowerCase().replace(/\s+/g, '-') },
      })
      categoryMap[title] = cat.id
    }
  }
  console.log('Categories done')

  // 3. Seed blog posts
  if (skipPosts) {
    console.log('Posts already exist, skipping.')
  } else {
    for (const post of BLOG_POSTS) {
      const catId = categoryMap[post.category]
      await payload.create({
        collection: 'posts',
        data: {
          title: post.title,
          slug: post.slug,
          generateSlug: false,
          excerpt: post.excerpt,
          readTime: post.readTime,
          heroImageUrl: post.heroImageUrl,
          publishedAt: post.publishedAt.toISOString(),
          categories: catId ? [catId] : [],
          authors: authorId ? [authorId] : [],
          content: makeLexical(post.excerpt),
          _status: 'published',
        } as any,
      })
      console.log(`Post: ${post.slug}`)
    }
  }
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
