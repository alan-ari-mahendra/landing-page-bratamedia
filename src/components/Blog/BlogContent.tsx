'use client'

import { useState } from 'react'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

const CATEGORIES = ['Semua', 'Tips Bisnis', 'Teknologi', 'Studi Kasus', 'Berita Bratamedia']

const posts = [
  {
    id: 1,
    category: 'Tips Bisnis',
    title: '5 Tanda Website Anda Sudah Waktunya Diperbarui',
    excerpt:
      'Jangan biarkan website yang usang merugikan bisnis Anda. Kenali ciri-ciri utamanya sekarang.',
    author: 'Tim Bratamedia',
    date: '5 Okt 2023',
    readTime: '4 menit baca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQKdDCdBYL1-xqji7my54KL21Ji1OubgZSGWhoDp_ZA5XxmuokzLTCj54DrrnxrhL0ntAJAXhpTeYpf63Ud3itlqU1L6LvYlVNhJ3fwSw0zJU14crN6aWbtt63TRK426QpLCi5gxjlthOOtDhCE7BPt_s7Cn_zJUpTx8hjC0V4H-FMnYnHwvTonlC0CbXSaE8J2Pf1XkzE6CEHPF9yPXcyZhnzYLEeCF-z8rPsnebxdvGdIQw13Aci',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9apnKKY42WZcD6DmvhQNiLXrmYqXeCqObI1owpvj6iF3vUTOdcqTmSj6UCsryUEBE8YxnHAirLPx0-tzIPxjYHgPSY0zEnd_OUX1uWLNxd5P-CSkkHLWYDZgiAAiGx8jPVy7aZE1nhFq6ZuJCqryLoPdTTO6PWf41V0TN6aCkr6nD0Hpw369hsMbfDXczLVTnR_bkXeFJFmRX9iQpH4x0s5VZnl-7nzi7_G2Hdgwm4u2NX4uHcgpR',
  },
  {
    id: 2,
    category: 'Studi Kasus',
    title: 'Studi Kasus: Digitalisasi Pendaftaran Pasien di Klinik Swasta',
    excerpt: 'Mengurangi antrean hingga 50% dengan sistem booking online yang terintegrasi.',
    author: 'Tim Bratamedia',
    date: '28 Sep 2023',
    readTime: '6 menit baca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcfZxfc2f7M4w0DkTYte8NS-E7lxvaHjLVHG29Qx_cVtOQvKdvUlKbjA-xIH706woIE-WJSc39xDZyN6K_TPgnFSAal0MiP8lAnXI4jwm-Hz0IBr3QbmfxM1-EuBq7at78bVTZjo9IDCne0eimAOd4dR1lcvXHqWNkhPf5Mp7Pi1GTYg7x6bs5Yd25CdZdBtXZYElxTj2rPb7HduaXbHpZEzsaiONsPbg4xgHcDicsAuMeNkbb3AoV',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdnjdEmu-owCCysn59pDQY0gmucqLH0GMZSh7-RrJuGoyN3pwO-bvAzBJ9T7SoaWnuLaqUl_n4e1RGgY6ZGXGOKlaCD7iGrVVoeHIeFW8ta2ACM4iROzCuNJLHGEbbuYHWcNc-hosPejWO5U13mKhIBFlQL_JYcgQCCv1nOwOk72PkBKntOGZLzmfCaagSsrCrK6QueDKTuRQuUFCfZMYgQoIN17koxhx4jRMF-NlS6SpOtei_58Sq',
  },
  {
    id: 3,
    category: 'Tips Bisnis',
    title: 'Kapan Bisnis Anda Butuh Aplikasi Mobile, Bukan Sekadar Website?',
    excerpt:
      'Panduan praktis untuk menentukan platform digital yang tepat sesuai dengan model bisnis Anda.',
    author: 'Tim Bratamedia',
    date: '15 Sep 2023',
    readTime: '5 menit baca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC6fwECmP0An-p1ccii8mZJCznOjIioc_fpF7IBiegvs6OZIQSrTUkOsy_xwVAoIxm81imTO4y2FiBWzZOIlsDi6UoX-yz8pLAcKyC3q7AQUG7Hvfp8fOZDP9a_ICnh88A5pjJ1R8GHZrqwov6SwCKYy67gd-JOei3k7WzabGkDmE2e83M7iJuL3dOXqQPRkj8YLVDndYoS71gfP3mweYwJWodHTNNWzsv-FnIMLwPzxB-Uc4gVwMUD',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMMYFA_wBJD90IBLNWb2FuOQ7jJZxICaR-KNo6syC0Ws4_XyvpZ03z3G086M9o1JWZ5VJjChYk8AxJGUhn6ok6uV5AKgwT-dO6BZuH21YD-FN3vnaP8O495JLro3A9eYBWa3LVLG40QrY--Jy5s0wsfj7lGZwsPkk43NWv_6TU_ZrSfY88iA3y_3bpFhex2ZII-lsC_DhtC7hMux_do3nbRAmoyuF8FdXSkAzwDtKgtZ2SoT1In9Hn',
  },
  {
    id: 4,
    category: 'Teknologi',
    title: 'Mengenal AI Automation dan Manfaatnya untuk Bisnis Kecil',
    excerpt:
      'Pelajari bagaimana kecerdasan buatan dapat menyederhanakan proses repetitif dan menghemat waktu berharga Anda.',
    author: 'Tim Bratamedia',
    date: '2 Sep 2023',
    readTime: '7 menit baca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuGFdQPxhmYF5uLTzJJx-5R5I-8ZUI7UrfULj7Tap_Y-Z6__rsnojYQU0_xaugg62xAfsNnSgHZwpJmMeU8CTlZ6hKkODaBc0drkhPCz_4BbcIHTdBZBc197jPzUBnl13SUdqhOMhNp9XbxN-0eJoXR5R7A17COC73ixzLY2_Dny1rC7eLmBpkSHlOsvx010mBrDJ7qJARmLX8Og66_Bxf8Re0VQXKz2KerXEDAP6o26PEmGlquQ1u',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDv5-JWk47HeKywoKvkKxOuvS1FPBTREnIyb48RFZPxt327IB4cFwPHfHEKVTRRcK_VeC7xmg45YQpiqWkhqZTC1Fig8c2X_3FD__I75dHnmcTLp9tHFv7EIpzwZoj5pRZhgPQ1sQ01FgI1UmmYG0wklftsQB3IBpsSYuyosxo-zGn_6uZbxA_iyIql_VmjIxJtjvOL9Ms29BQkL_flGhEleF5pp3X9KB6hipgsKkVPGZkOb2mh8egW',
  },
  {
    id: 5,
    category: 'Berita Bratamedia',
    title: 'Bratamedia Kini Melayani Klien di Luar Jawa Tengah',
    excerpt:
      'Kami memperluas jangkauan layanan untuk membantu lebih banyak bisnis di seluruh Indonesia bertransformasi digital.',
    author: 'Tim Bratamedia',
    date: '20 Agu 2023',
    readTime: '3 menit baca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBONfQeJ5bL4fJ9LqtUe9BDd1XBed6j3Oh10OVolmECSfV4GWH0hn5lD9kiMZzsTcShcQPBRMSOi3SM9_pjY_xcvNx6PdWDO8CNE2QMA8gjcLQbxxadNguvD0UwNTa8Lqc_V2hNEt3rN1xKEzMRTMIDeU7fkZ9Sz9s6hBlbr98V4sBbbzmU4yFtiNidJ0WmwRkPqvfVBehInbrgN0_gCFiCPKLSp8OkbqCNZ4mPR9h_ZsYBd3UeSU4O',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ8SpjEl_B3RFBzQkxauiBmyngeaiw4h7JMBkJHz9LpkSrjIAbhOyhgqwkrIQmkUsJppurNDuUhx2ZxQM34o3RQQszlx9nEnOpct8vGglEJr4uv8KfV2XqxlCaumSAY0IPbSzYtuIDvRdIQODci0gFD_gALmQ32G0UHqP2GyOg9MSJQ0fo9sSpr5sYDn5e-18Yopf5d_qkRKLk3LnGKLxYMTZPIhOpvmO0ogl3oS0tWGMbadjnWXs',
  },
  {
    id: 6,
    category: 'Tips Bisnis',
    title: 'Perbedaan Landing Page dan Company Profile, Mana yang Anda Butuhkan?',
    excerpt:
      'Pahami fungsi spesifik keduanya agar investasi digital Anda memberikan ROI yang maksimal.',
    author: 'Tim Bratamedia',
    date: '10 Agu 2023',
    readTime: '4 menit baca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdnaz-3wuOQa3-NE9tEYHbYrr1dxfKdxM_j8ainQGPAnrUEA_U8tDW8ZfeqnTqeEzD2TMH6MWMRlv7XdezGaCkjlTlOZeBxC9dMeWFPao-H4GB0wYRl0_gMZhTmTwskhxEbGqPIe3DYhCQ0sV218cDX_kSA24qspFZaiwOfjDCJVIoMTjbFzcVFNWd0PpV8QY4SHmlVOeX4D9MddgIe2S5InE_eYk8AYkvaBRIh9csPPout9ziQU8I',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcQTl-zONHLUJWI3YF2FEqUPAclTOtCnMPiT9XeZ1O6Mlx3YqGidRS0wUKSryuPKvvY0mkq4F5eY2dGgmER3pS546gohsouN4IiLRJentvRb9WrHtQyb4U3VuiE_gbieaQim-nj4DMVfqUjsdvlRNxPBXqROOptg1VvHwVfjrhZadErvafD1qEwLLidN-rctEWrMnnq7BAToWnXTrADCGxFJmPMakBQyi-HkRoOqRyKXddFUKXwhYN',
  },
]

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filtered =
    activeCategory === 'Semua' ? posts : posts.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-[#F2F3F1] py-[100px]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12 sticky top-24 z-40 bg-[#F2F3F1]/90 backdrop-blur-md py-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-[#E8592C] text-white'
                  : 'bg-white text-[#6E766F] border border-[#E3E5E1] hover:border-[#E8592C] hover:text-[#E8592C]'
              }`}
              style={H}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-[#E3E5E1] shadow-[0_4px_20px_rgba(18,22,19,0.04)] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <span
                  className="absolute top-4 left-4 bg-[#E8592C] text-white text-[11px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider"
                  style={H}
                >
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-lg font-bold text-[#1a1c1c] mb-3 group-hover:text-[#E8592C] transition-colors line-clamp-2"
                  style={H}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[15px] text-[#6E766F] leading-[24px] mb-6 line-clamp-2"
                  style={B}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#E3E5E1]">
                  <div className="w-8 h-8 rounded-full bg-[#F2F3F1] overflow-hidden flex-shrink-0">
                    <div
                      className="bg-cover bg-center w-full h-full"
                      style={{ backgroundImage: `url(${post.avatar})` }}
                    />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1a1c1c] leading-tight" style={H}>
                      {post.author}
                    </p>
                    <p className="text-[12px] text-[#6E766F] leading-tight" style={B}>
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-16 gap-2">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E3E5E1] text-[#6E766F] hover:border-[#E8592C] hover:text-[#E8592C] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            disabled
          >
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-colors ${
                page === 1
                  ? 'bg-[#E8592C] text-white'
                  : 'border border-[#E3E5E1] bg-white text-[#1a1c1c] hover:border-[#E8592C] hover:text-[#E8592C]'
              }`}
              style={H}
            >
              {page}
            </button>
          ))}
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E3E5E1] text-[#6E766F] hover:border-[#E8592C] hover:text-[#E8592C] transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  )
}
