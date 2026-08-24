import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import {
  revalidateTestimonial,
  revalidateTestimonialDelete,
} from './hooks/revalidateTestimonial'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'tag', 'role', 'order', 'updatedAt'],
    description: 'Testimoni klien yang ditampilkan pada section "Testimoni" di landing page.',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      required: true,
      label: 'Highlight Singkat',
      admin: {
        description: 'Contoh: "Rilis Tepat Waktu", "Hemat 8 Jam per Minggu".',
      },
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Kutipan Testimoni',
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nama Klien',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Jabatan & Perusahaan',
      admin: {
        description: 'Contoh: "Direktur, Nama Perusahaan".',
      },
    },
    {
      name: 'initials',
      type: 'text',
      label: 'Inisial (opsional)',
      admin: {
        description: 'Dikosongkan saja untuk otomatis diambil dari Nama Klien.',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Urutan Tampil',
      defaultValue: 0,
      admin: {
        description: 'Angka lebih kecil tampil lebih dulu.',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.initials && typeof data.name === 'string' && data.name.trim()) {
          data.initials = data.name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((part: string) => part[0]?.toUpperCase())
            .join('')
        }
        return data
      },
    ],
    afterChange: [revalidateTestimonial],
    afterDelete: [revalidateTestimonialDelete],
  },
}
