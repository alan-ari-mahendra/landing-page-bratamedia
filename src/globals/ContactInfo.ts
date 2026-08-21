import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
  label: 'Informasi Kontak',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'contact@bratamedia.com',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Nomor WhatsApp (format internasional, tanpa +, contoh: 6281234567890)',
      required: true,
      defaultValue: '6281234567890',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Lokasi',
      defaultValue: 'Semarang, Indonesia',
    },
  ],
  hooks: {
    afterChange: [
      () => {
        try {
          revalidatePath('/')
        } catch (_) {
          // Outside Next.js context — skip
        }
      },
    ],
  },
}
