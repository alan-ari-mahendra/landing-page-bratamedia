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
    tag: 'Rilis Tepat Waktu',
    quote:
      'Bratamedia berhasil mendelivery sistem klinik kami tepat waktu dan sesuai spesifikasi. Tim mereka sangat responsif dan memahami kebutuhan bisnis kami.',
    name: 'Dr. Hendra Wijaya',
    role: 'Direktur, Klinik Prima Sehat',
    order: 1,
  },
  {
    tag: 'Hemat 8 Jam per Minggu',
    quote:
      'Sejak menggunakan chatbot AI dari Bratamedia, tim customer service kami bisa fokus menangani kasus kompleks. Pertanyaan rutin sudah ditangani otomatis.',
    name: 'Budi Hartono',
    role: 'Head of Operations, TokoMaju',
    order: 2,
  },
  {
    tag: 'Konversi Naik 3x',
    quote:
      'Landing page yang dibuat Bratamedia langsung memberikan dampak signifikan. Konversi pre-order kami melonjak 3x lipat dari target awal.',
    name: 'Rina Widyastuti',
    role: 'Marketing Director, NusaBrand',
    order: 3,
  },
  {
    tag: 'Tim Cabang Mandiri',
    quote:
      'Akhirnya kami punya website yang bisa dikelola cabang masing-masing tanpa harus koordinasi ke IT pusat setiap saat.',
    name: 'Suharto Wibowo',
    role: 'IT Manager, ManufakturJaya',
    order: 4,
  },
  {
    tag: 'Data Real-Time',
    quote:
      'Dashboard dari Bratamedia mengubah cara kami mengelola bisnis retail. Semua toko terpantau real-time dari satu layar.',
    name: 'Teguh Hartono',
    role: 'Owner, RetailMaju',
    order: 5,
  },
  {
    tag: 'Aplikasi Stabil',
    quote:
      'Aplikasi booking yang dibangun Bratamedia sudah berjalan lebih dari setahun tanpa downtime berarti. Pengguna aktif terus bertambah.',
    name: 'Andi Santoso',
    role: 'CEO, LayananKu',
    order: 6,
  },
]

const CLIENT_NAMES = [
  'RS Telogorejo',
  'Mitsubishi Motors',
  'Sriboga',
  'Bank Jateng',
  'Djarum',
  'Telkom Indonesia',
  'PLN',
  'Indosat',
]

const PORTFOLIO_ITEMS = [
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
      'Sebelum kolaborasi ini, klinik menghadapi kendala signifikan akibat proses operasional yang masih mengandalkan pencatatan manual. Rekam medis fisik rentan hilang atau rusak, pencarian data pasien memakan waktu lama, dan sering terjadi tumpang tindih jadwal konsultasi.',
      'Sistem pelaporan keuangan dan inventaris obat yang terpisah juga menyulitkan manajemen dalam mengambil keputusan strategis yang cepat dan akurat.',
    ],
    solution:
      'Kami merancang dan mengembangkan Web App khusus yang mengintegrasikan seluruh alur kerja klinik. Dimulai dari pendaftaran pasien online, manajemen antrean real-time, Electronic Medical Record (EMR) terenkripsi, hingga modul apotek dan kasir yang saling terhubung.',
    solutionImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBoS6zZAVrjMERshxa5mxKqwDKO3lnWb_jJ4ECH8cDR4qRE4RXCJe6-e3sgYIW5-_zWCCr18k4cFN-IFkH2XsOEYIF9kofamTJc7o1Ne-JA7FjvwkjgyygGw4X2uArnI4xMUwZpZUBUE4FDMB_sQaXOul81mKSoT1ItDk7v9gPGuO2lSOz_9XhO4kPiay2lsErklxW3At9EUs0I898W7WtcXFjAEJcBltIjXBq9ldrjzMKjXWtQa0',
    stats: [
      { value: '70%', label: 'Lebih Cepat', sub: 'Dalam proses administrasi pasien' },
      { value: '0', label: 'Data Ganda', sub: 'Sinkronisasi EMR akurat 100%' },
      { value: '3', label: 'Cabang', sub: 'Terintegrasi dalam satu sistem pusat' },
    ],
    testimonial: {
      quote:
        '"Transisi ke sistem digital yang dikembangkan Bratamedia sangat mulus. Tim klinik kami lebih produktif, dan yang terpenting, pelayanan pasien menjadi jauh lebih responsif. Investasi teknologi yang sangat sepadan."',
      initials: 'DR',
      name: 'Dr. Hendra',
      role: 'Pemilik Klinik',
    },
    tech: ['Next.js', 'Laravel', 'PostgreSQL', 'Docker'],
  },
  {
    slug: 'aplikasi-pemesanan-layanan',
    title: 'Aplikasi Pemesanan Layanan',
    category: 'Mobile App',
    desc: 'Aplikasi booking dan tracking layanan berbasis lokasi untuk pelanggan rumahan.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEJiVDGdHB-6Ue_5AhX_-abf9vvxEMHkQ8JTZ0_eOcejGCtUY-ld4wXY3bPBl4-eqBVUXwB6AVCPcrc3TY-PaM4Ptt65Oh9YnxjhTQRp_dd4QqNJvXTvN6H35M_6MRKEAJ9k41KohpsXpXnAP9lUqzbMN9fTUII77j4DGd1HfFU4ZZAO4c-gXfIk-LujkBopUBwZj5_Snhjs_QxdL_lu5BMvRRJpd52HH06JJbHA3v3MLyPCpmR4sl',
    client: 'Startup Layanan Rumahan',
    duration: '12 Minggu, 2024',
    challenge: [
      'Klien membutuhkan platform yang dapat menghubungkan pelanggan dengan penyedia layanan rumahan (kebersihan, reparasi, taman) secara real-time.',
      'Tantangan utama adalah sistem tracking lokasi yang akurat dan notifikasi status yang handal untuk kedua sisi pengguna.',
    ],
    solution:
      'Aplikasi mobile Flutter cross-platform dengan backend Node.js, integrasi Google Maps untuk tracking real-time, dan sistem notifikasi push yang andal. Panel admin web untuk manajemen mitra layanan.',
    solutionImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBoS6zZAVrjMERshxa5mxKqwDKO3lnWb_jJ4ECH8cDR4qRE4RXCJe6-e3sgYIW5-_zWCCr18k4cFN-IFkH2XsOEYIF9kofamTJc7o1Ne-JA7FjvwkjgyygGw4X2uArnI4xMUwZpZUBUE4FDMB_sQaXOul81mKSoT1ItDk7v9gPGuO2lSOz_9XhO4kPiay2lsErklxW3At9EUs0I898W7WtcXFjAEJcBltIjXBq9ldrjzMKjXWtQa0',
    stats: [
      { value: '2000+', label: 'Pengguna Aktif', sub: 'Dalam 3 bulan pertama' },
      { value: '4.8', label: 'Rating App', sub: 'Di Play Store & App Store' },
      { value: '95%', label: 'On-Time', sub: 'Layanan tepat waktu' },
    ],
    testimonial: {
      quote:
        '"Bratamedia memahami kebutuhan bisnis kami dengan sangat baik. Aplikasi yang mereka bangun langsung bisa kami operasikan tanpa hambatan berarti."',
      initials: 'AS',
      name: 'Andi Santoso',
      role: 'CEO, LayananKu',
    },
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
  },
  {
    slug: 'landing-page-peluncuran-produk',
    title: 'Landing Page Peluncuran Produk',
    category: 'Landing Page & Branding',
    desc: 'Halaman promosi dan identitas visual untuk peluncuran produk konsumen baru.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMd04l1Q4q8v12EzHYAaCCOy1-xV8TT8IhbvSQWqef908BgCwFWvjwehF0GMOevdKNNvctEZx2wQkZ5v-6iBUCARRrT1Soz_2LI-4xEQoqXer2cDRv1aiM3caXM8zdQZ72F2z4i3J35HYSqL0beZlajx10I6hCb_npNcTBIdU4A3gqy2iTv0y-yPE5DZJRaU8gggqS4g3GYwmWCtz9Z4ZxKgkDcid4FUZqAhGvSbShuOpGtrIUHz4V',
    client: 'Brand FMCG Nasional',
    duration: '3 Minggu, 2024',
    challenge: [
      'Klien membutuhkan landing page yang mampu mengkonversi pengunjung menjadi pembeli dalam waktu singkat untuk peluncuran produk baru.',
      'Desain harus mencerminkan identitas brand yang premium namun tetap accessible untuk segmen pasar yang luas.',
    ],
    solution:
      'Landing page high-converting dengan storytelling visual, social proof terintegrasi, dan form pre-order yang dioptimalkan. Dilengkapi A/B testing untuk memaksimalkan konversi.',
    solutionImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBoS6zZAVrjMERshxa5mxKqwDKO3lnWb_jJ4ECH8cDR4qRE4RXCJe6-e3sgYIW5-_zWCCr18k4cFN-IFkH2XsOEYIF9kofamTJc7o1Ne-JA7FjvwkjgyygGw4X2uArnI4xMUwZpZUBUE4FDMB_sQaXOul81mKSoT1ItDk7v9gPGuO2lSOz_9XhO4kPiay2lsErklxW3At9EUs0I898W7WtcXFjAEJcBltIjXBq9ldrjzMKjXWtQa0',
    stats: [
      { value: '8.3%', label: 'Konversi', sub: 'Di atas rata-rata industri 2-3%' },
      { value: '500+', label: 'Pre-Order', sub: 'Dalam 48 jam pertama' },
      { value: '3x', label: 'ROI', sub: 'Dari biaya pengembangan' },
    ],
    testimonial: {
      quote:
        '"Landing page yang Bratamedia buat melampaui ekspektasi kami. Konversi pre-order jauh di atas target awal kami."',
      initials: 'RW',
      name: 'Rina Widyastuti',
      role: 'Marketing Director',
    },
    tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'Analytics'],
  },
  {
    slug: 'asisten-chat-otomatis',
    title: 'Asisten Chat Otomatis untuk Layanan Pelanggan',
    category: 'AI & Automation',
    desc: 'Chatbot AI yang menjawab pertanyaan pelanggan dan meneruskan lead ke tim sales secara otomatis.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDydGUYNjlrbY4mvRpXOpbCVIOYfu8RqgK_CYjSDbsEgTEhd3t4ULQf2hPj0CGX420Q_utjQL_WTRjnN3objwXe7IDikrL_TTwV1JE-KUv9iqFU8EudKhhbTXkEy6Mc5eiJAgfctO9iVIEL4JnYjkFHX4VaSjbZoFJahndf-Fewh-28TiCr9jqIf-RiXxCGG0RuJM0-tJevhbNxBviPg5Ai6_W6PJgO6Tdfj656h4jabiOb1FEVFtD2',
    client: 'Perusahaan E-commerce Regional',
    duration: '6 Minggu, 2025',
    challenge: [
      'Tim customer service kewalahan menangani ratusan pertanyaan serupa setiap harinya, menyebabkan response time yang lambat dan penurunan kepuasan pelanggan.',
      'Perusahaan membutuhkan solusi yang dapat bekerja 24/7 tanpa menambah beban biaya operasional.',
    ],
    solution:
      'Chatbot AI berbasis LLM yang terintegrasi dengan WhatsApp Business dan website. Dilengkapi knowledge base produk, kemampuan hand-off ke agen manusia untuk kasus kompleks, dan dashboard analytics percakapan.',
    solutionImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBoS6zZAVrjMERshxa5mxKqwDKO3lnWb_jJ4ECH8cDR4qRE4RXCJe6-e3sgYIW5-_zWCCr18k4cFN-IFkH2XsOEYIF9kofamTJc7o1Ne-JA7FjvwkjgyygGw4X2uArnI4xMUwZpZUBUE4FDMB_sQaXOul81mKSoT1ItDk7v9gPGuO2lSOz_9XhO4kPiay2lsErklxW3At9EUs0I898W7WtcXFjAEJcBltIjXBq9ldrjzMKjXWtQa0',
    stats: [
      { value: '80%', label: 'Auto-Resolve', sub: 'Pertanyaan terselesaikan tanpa agen' },
      { value: '<2 min', label: 'Response Time', sub: 'Turun dari rata-rata 4 jam' },
      { value: '40%', label: 'Hemat Biaya', sub: 'Operasional customer service' },
    ],
    testimonial: {
      quote:
        '"Chatbot AI dari Bratamedia berjalan mulus sejak hari pertama. Pelanggan kami bahkan tidak sadar sedang berbicara dengan AI."',
      initials: 'BH',
      name: 'Budi Hartono',
      role: 'Head of Operations',
    },
    tech: ['Python', 'OpenAI API', 'WhatsApp Business API', 'PostgreSQL'],
  },
  {
    slug: 'website-korporat-multi-cabang',
    title: 'Website Korporat Multi-Cabang',
    category: 'Web Application',
    desc: 'Website perusahaan dengan halaman khusus tiap cabang dan sistem manajemen konten mandiri.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9YImQ5Yh6M3722wHuo8Dkx_lELGUv4W_REvPXdN2bnJ0MzJWxOma8juYk9ieu2SYWusoN5tRT3i_eGCP6mpmC97hUKLsC9zq8cEdtGG74OzwLx3fbMXK3LHRDY9NSGbrws5GA_Kfg6IXBL2dTrEJFwdmDm5JlG9YA6-4R3HRDqrHWWxCSjaVa1kUPVq3HMdll-xLnvDhBhYcFqQu7iBZd-Z19a9EnSNwrRPOMiaJVqokRONOgNW1C',
    client: 'Perusahaan Manufaktur Multi-Cabang',
    duration: '10 Minggu, 2024',
    challenge: [
      'Perusahaan dengan 8 cabang di berbagai kota membutuhkan website yang bisa merepresentasikan setiap cabang secara individual namun tetap konsisten dalam branding.',
      'Tim marketing di tiap cabang harus bisa memperbarui konten mereka sendiri tanpa ketergantungan pada tim IT pusat.',
    ],
    solution:
      'Website multi-tenant berbasis Next.js dengan CMS headless Payload. Setiap cabang mendapat subdomain dan dashboard konten mandiri, sementara branding global dikontrol terpusat.',
    solutionImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBoS6zZAVrjMERshxa5mxKqwDKO3lnWb_jJ4ECH8cDR4qRE4RXCJe6-e3sgYIW5-_zWCCr18k4cFN-IFkH2XsOEYIF9kofamTJc7o1Ne-JA7FjvwkjgyygGw4X2uArnI4xMUwZpZUBUE4FDMB_sQaXOul81mKSoT1ItDk7v9gPGuO2lSOz_9XhO4kPiay2lsErklxW3At9EUs0I898W7WtcXFjAEJcBltIjXBq9ldrjzMKjXWtQa0',
    stats: [
      { value: '8', label: 'Cabang', sub: 'Terintegrasi dalam satu platform' },
      { value: '100%', label: 'Mandiri', sub: 'Tim cabang kelola konten sendiri' },
      { value: '60%', label: 'Lebih Cepat', sub: 'Waktu update konten' },
    ],
    testimonial: {
      quote:
        '"Akhirnya kami punya website yang bisa dikelola cabang masing-masing. Bratamedia berhasil membuat sistem yang kompleks terasa sangat mudah digunakan."',
      initials: 'SW',
      name: 'Suharto Wibowo',
      role: 'IT Manager',
    },
    tech: ['Next.js', 'Payload CMS', 'PostgreSQL', 'Vercel'],
  },
  {
    slug: 'dashboard-operasional-retail',
    title: 'Dashboard Operasional Retail',
    category: 'Web App Development',
    desc: 'Dashboard pemantauan stok dan penjualan real-time untuk jaringan toko retail.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzTezZikOpQN78e-15uRvZ7sgGXgTxE2YZkmdRX1GZ15iKfbBWKCDbeSytAQ_01AAhzwxFIpsBfkQzMSXCtlfIRWj-O3kIM5kVXI1tixGYwy8P9qdgKPAeJ381XRAY7lnSYGV9F8-0ijLiWSLUm34K5ZV7URQ1inX2xgszVwEZLg5bE8t5sJY1YydKV92a56XmZVJigsyy_3TBMAXfw-Xgo5Ik8Pc9dKKibosI3yXiyRgc-s',
    client: 'Jaringan Retail Jawa Tengah',
    duration: '7 Minggu, 2025',
    challenge: [
      'Jaringan retail dengan 15 toko tidak memiliki visibilitas real-time terhadap stok dan performa penjualan tiap gerai.',
      'Keputusan pembelian stok sering terlambat karena data baru tersedia keesokan harinya dari laporan manual.',
    ],
    solution:
      'Dashboard web real-time dengan WebSocket untuk update stok instan, chart analitik penjualan, alert stok menipis otomatis, dan laporan yang bisa diekspor ke Excel/PDF.',
    solutionImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBoS6zZAVrjMERshxa5mxKqwDKO3lnWb_jJ4ECH8cDR4qRE4RXCJe6-e3sgYIW5-_zWCCr18k4cFN-IFkH2XsOEYIF9kofamTJc7o1Ne-JA7FjvwkjgyygGw4X2uArnI4xMUwZpZUBUE4FDMB_sQaXOul81mKSoT1ItDk7v9gPGuO2lSOz_9XhO4kPiay2lsErklxW3At9EUs0I898W7WtcXFjAEJcBltIjXBq9ldrjzMKjXWtQa0',
    stats: [
      { value: '15', label: 'Toko', sub: 'Terpantau dalam satu dashboard' },
      { value: 'Real-time', label: 'Data Stok', sub: 'Update instan tanpa delay' },
      { value: '30%', label: 'Kurangi Stok Mati', sub: 'Lewat alert otomatis' },
    ],
    testimonial: {
      quote:
        '"Dashboard ini mengubah cara kami mengelola bisnis. Sekarang saya bisa melihat kondisi semua toko dari satu layar kapan saja."',
      initials: 'TH',
      name: 'Teguh Hartono',
      role: 'Owner, RetailMaju',
    },
    tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis'],
  },
]

// ---------------------------------------------------------------------------
// Main seed function
// ---------------------------------------------------------------------------

async function seed() {
  const payload = await getPayload({ config })

  // Check what's already seeded
  const [existingPosts, existingPortfolios, existingClients, existingTestimonials] =
    await Promise.all([
      payload.find({ collection: 'posts', limit: 1 }),
      payload.find({ collection: 'portfolios', limit: 1 }),
      payload.find({ collection: 'clients', limit: 1 }),
      payload.find({ collection: 'testimonials', limit: 1 }),
    ])
  const skipPosts = existingPosts.totalDocs > 0
  const skipPortfolios = existingPortfolios.totalDocs > 0
  const skipClients = existingClients.totalDocs > 0
  const skipTestimonials = existingTestimonials.totalDocs > 0

  if (skipPosts && skipPortfolios && skipClients && skipTestimonials) {
    console.log('Already fully seeded, skipping.')
    process.exit(0)
  }

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

  // 4. Seed portfolio items
  if (skipPortfolios) {
    console.log('Portfolios already exist, skipping.')
  } else {
    for (const item of PORTFOLIO_ITEMS) {
      await payload.create({
        collection: 'portfolios',
        data: {
          title: item.title,
          slug: item.slug,
          generateSlug: false,
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
  }

  // 5. Seed testimonials
  if (skipTestimonials) {
    console.log('Testimonials already exist, skipping.')
  } else {
    for (const t of TESTIMONIALS) {
      await payload.create({
        collection: 'testimonials',
        data: t as any,
      })
      console.log(`Testimonial: ${t.name}`)
    }
  }

  // 6. Seed clients (with placeholder SVG logo)
  if (skipClients) {
    console.log('Clients already exist, skipping.')
  } else {
    for (let i = 0; i < CLIENT_NAMES.length; i++) {
      const name = CLIENT_NAMES[i]!
      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="80" viewBox="0 0 200 80"><rect width="200" height="80" fill="#f2f3f1"/><text x="100" y="45" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#6E766F">${name}</text></svg>`
      const mediaDoc = await payload.create({
        collection: 'media',
        data: { alt: `Logo ${name}` },
        file: {
          name: `logo-${name.toLowerCase().replace(/\s+/g, '-')}.svg`,
          data: Buffer.from(svgContent),
          mimetype: 'image/svg+xml',
          size: svgContent.length,
        },
      })
      await payload.create({
        collection: 'clients',
        data: {
          name,
          logo: mediaDoc.id,
          order: i + 1,
        } as any,
      })
      console.log(`Client: ${name}`)
    }
  }

  // 7. Seed contact-info global
  try {
    await payload.updateGlobal({
      slug: 'contact-info',
      data: {
        email: 'contact@bratamedia.com',
        phone: '6281234567890',
        location: 'Semarang, Indonesia',
      },
    })
    console.log('Contact info: done')
  } catch (e) {
    console.warn('Could not seed contact-info:', e)
  }

  console.log('Seed complete.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
