'use client'

import { useRef, useState } from 'react'

const H = { fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }
const B = { fontFamily: 'var(--font-inter), sans-serif' }

type Props = {
  phone: string
  email: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm({ phone }: Props) {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const projectRef = useRef<HTMLSelectElement>(null)
  const budgetRef = useRef<HTMLSelectElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

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

  async function handleSendEmail() {
    const name = nameRef.current?.value.trim() ?? ''
    const senderEmail = emailRef.current?.value.trim() ?? ''
    const project = projectRef.current?.value ?? ''
    const budget = budgetRef.current?.value ?? ''
    const message = messageRef.current?.value.trim() ?? ''

    if (!name || !senderEmail || !message) {
      setStatus('error')
      setStatusMessage('Nama, email, dan pesan wajib diisi.')
      return
    }

    setStatus('loading')
    setStatusMessage('')

    try {
      const res = await fetch('/api/contact-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email: senderEmail, project, budget, message }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.errors?.[0]?.message || 'Gagal mengirim pesan. Silakan coba lagi.')
      }

      setStatus('success')
      setStatusMessage('Pesan Anda berhasil terkirim. Tim kami akan segera menghubungi Anda.')
      if (nameRef.current) nameRef.current.value = ''
      if (emailRef.current) emailRef.current.value = ''
      if (messageRef.current) messageRef.current.value = ''
    } catch (err) {
      setStatus('error')
      setStatusMessage(err instanceof Error ? err.message : 'Gagal mengirim pesan.')
    }
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
            className="flex-1 bg-transparent border border-[#E8592C] text-[#E8592C] hover:bg-[#FBE4D9]/20 font-semibold px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            type="button"
            onClick={handleSendEmail}
            disabled={status === 'loading'}
            style={H}
          >
            <span className="material-symbols-outlined">mail</span>
            {status === 'loading' ? 'Mengirim...' : 'Kirim via Email'}
          </button>
        </div>
        {statusMessage && (
          <p
            className={`text-sm font-medium ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}
            style={B}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  )
}
