'use client'

import { useState } from 'react'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.72 14.03c-.24.68-1.19 1.24-1.95 1.4-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.14-.2-1.2-1.6-1.2-3.05s.75-2.17 1.02-2.47c.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.24 2.22 1.38.28.14.44.12.6-.07.16-.2.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.63-.18 1.3z" />
    </svg>
  )
}

export default function FloatingButtons() {
  const [waOpen, setWaOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      {/* WhatsApp floating button */}
      <button
        onClick={() => setWaOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </button>

      {/* AI chat floating button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 left-6 z-50 w-[60px] h-[60px] bg-[#E8592C] rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95"
        aria-label="Tanya AI"
      >
        <span className="material-symbols-outlined text-[32px]">auto_awesome</span>
      </button>

      {/* AI Chat Panel */}
      {chatOpen && (
        <div className="fixed bottom-[96px] left-6 z-50 w-[360px] h-[480px] bg-white rounded-2xl shadow-xl border border-[#e1bfb5]/30 flex flex-col overflow-hidden">
          <div className="bg-[#E8592C] p-4 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h3
                  className="font-bold text-lg"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                >
                  Tanya AI Bratamedia
                </h3>
                <p className="text-xs opacity-90">Biasanya balas dalam hitungan detik</p>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Tutup"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          </div>

          <div className="flex-1 bg-[#f3f4f3] p-4 overflow-y-auto flex flex-col gap-4">
            <div className="flex flex-col items-start max-w-[85%]">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-[#E3E5E1]">
                <p
                  className="text-sm text-[#1a1c1c]"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Halo! Ada yang bisa saya bantu soal layanan Bratamedia?
                </p>
              </div>
              <span className="text-[10px] text-[#6E766F] mt-1 ml-1">AI • Baru saja</span>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-[#E3E5E1]">
            <div className="flex gap-2 items-center">
              <input
                className="flex-1 bg-[#f9f9f8] border border-[#E3E5E1] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C]"
                placeholder="Tulis pertanyaan Anda..."
                type="text"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              />
              <button className="bg-[#E8592C] text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#B8420E] transition-colors">
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Modal */}
      {waOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setWaOpen(false)}
        >
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden relative">
            <button
              onClick={() => setWaOpen(false)}
              className="absolute top-4 right-4 text-[#6E766F] hover:text-[#1a1c1c] transition-colors"
              aria-label="Tutup"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center text-white">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <h3
                  className="text-xl font-bold text-[#1a1c1c]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                >
                  Chat dengan Kami di WhatsApp
                </h3>
              </div>
              <form className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold text-[#59413a] uppercase"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                  >
                    NAMA
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E] outline-none transition-all bg-[#f9f9f8]"
                    placeholder="Nama Anda"
                    type="text"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold text-[#59413a] uppercase"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                  >
                    PERUSAHAAN (Opsional)
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E] outline-none transition-all bg-[#f9f9f8]"
                    placeholder="Nama perusahaan"
                    type="text"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold text-[#59413a] uppercase"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                  >
                    NOMOR WHATSAPP
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E] outline-none transition-all bg-[#f9f9f8]"
                    placeholder="08xx-xxxx-xxxx"
                    type="text"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold text-[#59413a] uppercase"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                  >
                    KEBUTUHAN
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E] outline-none transition-all bg-[#f9f9f8]"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    <option disabled value="">Pilih layanan</option>
                    <option>Web App Development</option>
                    <option>Mobile App Development</option>
                    <option>Landing Page & Branding</option>
                    <option>SEO & Digital Marketing</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-bold text-[#59413a] uppercase"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                  >
                    PESAN
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E] outline-none transition-all bg-[#f9f9f8] resize-none"
                    placeholder="Ceritakan kebutuhan Anda secara singkat"
                    rows={3}
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  />
                </div>
                <button
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
                  type="button"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Kirim ke WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
