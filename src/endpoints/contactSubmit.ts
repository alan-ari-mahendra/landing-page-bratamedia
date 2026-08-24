import type { Endpoint } from 'payload'
import { APIError } from 'payload'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(str: string) {
  return str.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
  )
}

export const contactSubmitEndpoint: Endpoint = {
  path: '/contact-submit',
  method: 'post',
  handler: async (req) => {
    let data: Record<string, unknown>
    try {
      data = (await req.json?.()) ?? {}
    } catch {
      throw new APIError('Invalid request body', 400)
    }

    const name = typeof data.name === 'string' ? data.name.trim() : ''
    const senderEmail = typeof data.email === 'string' ? data.email.trim() : ''
    const project = typeof data.project === 'string' ? data.project.trim() : ''
    const budget = typeof data.budget === 'string' ? data.budget.trim() : ''
    const message = typeof data.message === 'string' ? data.message.trim() : ''

    if (!name || !senderEmail || !message) {
      throw new APIError('Nama, email, dan pesan wajib diisi.', 400)
    }

    if (!EMAIL_REGEX.test(senderEmail)) {
      throw new APIError('Format email tidak valid.', 400)
    }

    const to = process.env.CONTACT_EMAIL_TO || 'bratamedia@gmail.com'

    try {
      await req.payload.sendEmail({
        to,
        replyTo: senderEmail,
        subject: `Konsultasi Proyek Baru dari ${name}`,
        html: `
          <p><strong>Nama:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(senderEmail)}</p>
          <p><strong>Jenis Proyek:</strong> ${escapeHtml(project) || '-'}</p>
          <p><strong>Perkiraan Anggaran:</strong> ${escapeHtml(budget) || '-'}</p>
          <p><strong>Pesan:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        `,
      })
    } catch (err) {
      req.payload.logger.error(`Failed to send contact form email: ${(err as Error).message}`)
      throw new APIError('Gagal mengirim email. Silakan coba lagi nanti.', 500)
    }

    return Response.json({ success: true })
  },
}
