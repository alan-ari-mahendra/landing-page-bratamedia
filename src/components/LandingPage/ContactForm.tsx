'use client'

import { useRef } from 'react'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

type Props = {
  phone: string
  email: string
}

export default function ContactForm({ phone, email }: Props) {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const projectRef = useRef<HTMLSelectElement>(null)
  const budgetRef = useRef<HTMLSelectElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  function buildMessage() {
    const name = nameRef.current?.value ?? ''
    const senderEmail = emailRef.current?.value ?? ''
    const project = projectRef.current?.value ?? ''
    const budget = budgetRef.current?.value ?? ''
    const msg = messageRef.current?.value ?? ''
    return `Halo Bratamedia! Saya ${name} (${senderEmail}) ingin konsultasi proyek ${project} dengan anggaran ${budget}.\n\n${msg}`
  }

  function handleWhatsApp() {
    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
  }

  function handleEmail() {
    const subject = encodeURIComponent('Konsultasi Proyek - Bratamedia')
    const body = encodeURIComponent(buildMessage())
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <div className="bg-white border border-[#e1bfb5]/50 rounded-xl p-8 shadow-sm">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
              NAMA LENGKAP
            </label>
            <input
              ref={nameRef}
              className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8]"
              placeholder="Nama Anda"
              type="text"
              style={B}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
              EMAIL
            </label>
            <input
              ref={emailRef}
              className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8]"
              placeholder="nama@perusahaan.com"
              type="email"
              style={B}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
              JENIS PROYEK
            </label>
            <select
              ref={projectRef}
              className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8]"
              style={B}
            >
              <option>Web Application</option>
              <option>Mobile App</option>
              <option>Landing Page & Branding</option>
              <option>AI & Automation</option>
              <option>Web App Development</option>
              <option>Lainnya</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
              PERKIRAAN ANGGARAN
            </label>
            <select
              ref={budgetRef}
              className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8]"
              style={B}
            >
              <option disabled value="">
                Pilih kisaran anggaran
              </option>
              <option>{'< Rp 10 Juta'}</option>
              <option>Rp 10 - 50 Juta</option>
              <option>Rp 50 - 100 Juta</option>
              <option>{'> Rp 100 Juta'}</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#59413a] uppercase" style={H}>
            PESAN
          </label>
          <textarea
            ref={messageRef}
            className="w-full px-4 py-3 rounded-lg border border-[#E3E5E1] focus:border-[#E8592C] focus:ring-1 focus:ring-[#E8592C] outline-none transition-all bg-[#f9f9f8] resize-none"
            placeholder="Ceritakan kebutuhan atau ide proyek Anda..."
            rows={4}
            style={B}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button
            className="flex-1 bg-[#E8592C] hover:bg-[#B8420E] text-white font-semibold px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            type="button"
            onClick={handleWhatsApp}
            style={H}
          >
            <span className="material-symbols-outlined">chat</span>
            Kirim via WhatsApp
          </button>
          <button
            className="flex-1 bg-transparent border border-[#E8592C] text-[#E8592C] hover:bg-[#FBE4D9]/20 font-semibold px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            type="button"
            onClick={handleEmail}
            style={H}
          >
            <span className="material-symbols-outlined">mail</span>
            Kirim via Email
          </button>
        </div>
      </form>
    </div>
  )
}
