import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateServiceArea, revalidateServiceAreaDelete } from './hooks/revalidateServiceArea'

export const ServiceAreas: CollectionConfig<'service-areas'> = {
  slug: 'service-areas',
  labels: {
    singular: 'Halaman Layanan Kota',
    plural: 'Halaman Layanan Kota',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'cityName',
    defaultColumns: ['cityName', 'provinceName', 'slug', '_status', 'updatedAt'],
    description: 'Landing page SEO/GEO per kota untuk layanan pembuatan website.',
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({ slug: data?.slug, collection: 'service-areas', req }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({ slug: data?.slug as string, collection: 'service-areas', req }),
  },
  fields: [
    {
      name: 'cityName',
      type: 'text',
      required: true,
      label: 'Nama Kota',
      admin: { description: 'Contoh: "Jakarta".' },
    },
    {
      name: 'provinceName',
      type: 'text',
      required: true,
      label: 'Nama Provinsi',
      admin: { description: 'Contoh: "DKI Jakarta".' },
    },
    {
      name: 'heroHeadline',
      type: 'text',
      required: true,
      label: 'Headline Hero (H1)',
    },
    {
      name: 'heroSubheadline',
      type: 'richText',
      label: 'Subheadline Hero',
    },
    {
      name: 'localPositioning',
      type: 'richText',
      required: true,
      label: 'Posisi Lokal',
      admin: {
        description:
          'PENTING: jangan pernah mengklaim kantor/tim fisik di luar Semarang. Gunakan framing "tim berbasis di Semarang, bekerja remote untuk [Kota]".',
      },
    },
    {
      name: 'coverageIntro',
      type: 'richText',
      label: 'Intro Area Cakupan (opsional)',
    },
    {
      name: 'coverageAreas',
      type: 'array',
      label: 'Area Cakupan',
      fields: [{ name: 'area', type: 'text', required: true }],
    },
    {
      name: 'nearbyCities',
      type: 'relationship',
      relationTo: 'service-areas',
      hasMany: true,
      label: 'Kota Terdekat (internal link)',
      filterOptions: ({ id }) => ({ id: { not_equals: id } }),
    },
    {
      name: 'industriesServed',
      type: 'array',
      label: 'Industri yang Dilayani',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'description', type: 'text', label: 'Deskripsi Singkat (satu baris, opsional)' },
        { name: 'icon', type: 'text', label: 'Material Symbol name (opsional)' },
      ],
    },
    {
      name: 'proofPoints',
      type: 'array',
      label: 'Mengapa Bratamedia',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'scopeIncluded',
      type: 'array',
      label: 'Termasuk dalam Layanan',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    {
      name: 'scopeOptional',
      type: 'array',
      label: 'Opsional / Add-on',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimoni',
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'company', type: 'text' },
        {
          name: 'isPlaceholder',
          type: 'checkbox',
          label: 'Contoh format (belum klien nyata)',
          defaultValue: true,
          admin: {
            description:
              'Centang jika ini format contoh, bukan testimoni klien sungguhan. Akan menampilkan badge "Sample testimonial format" di halaman.',
          },
        },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQ',
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          admin: {
            description:
              'Mulai dengan kalimat jawaban langsung (direct-answer-first-sentence) untuk keterbacaan AI/GEO.',
          },
        },
      ],
    },
    {
      name: 'pricingOverride',
      type: 'relationship',
      relationTo: 'pricing-tiers',
      hasMany: true,
      label: 'Override Paket Harga (opsional)',
      admin: {
        description: 'Kosongkan untuk menampilkan semua paket harga default.',
      },
    },
    {
      name: 'closingCtaHeadline',
      type: 'text',
      label: 'Headline CTA Penutup (opsional)',
      admin: {
        description: 'Kosongkan untuk memakai headline default.',
      },
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      label: 'OG Image (opsional)',
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title (opsional)',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description (opsional)',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    slugField({ useAsSlug: 'cityName' }),
  ],
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidateServiceArea],
    afterDelete: [revalidateServiceAreaDelete],
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
