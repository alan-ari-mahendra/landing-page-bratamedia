'use client'

import { useState } from 'react'

export default function FloatingButtons() {
  const [waOpen, setWaOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      {/* WhatsApp floating button */}
      <button
        onClick={() => setWaOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#128C7E] hover:bg-[#075E54] text-white w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat WhatsApp"
      >
        <span className="material-symbols-outlined text-[32px]">chat</span>
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
                <div className="w-10 h-10 bg-[#128C7E] rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">chat</span>
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
                  className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
                  type="button"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}
                >
                  <span className="material-symbols-outlined">chat</span>
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
