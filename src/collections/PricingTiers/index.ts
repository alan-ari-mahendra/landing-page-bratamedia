import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

export const PricingTiers: CollectionConfig = {
  slug: 'pricing-tiers',
  labels: {
    singular: 'Pricing Tier',
    plural: 'Pricing Tiers',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'tierName',
    defaultColumns: ['tierName', 'priceLabel', 'isPopular', 'order', 'updatedAt'],
    description: 'Paket harga bersama yang dipakai di seluruh halaman layanan kota.',
  },
  fields: [
    {
      name: 'tierName',
      type: 'text',
      required: true,
      label: 'Nama Paket',
      admin: {
        description: 'Contoh: "Starter", "Business", "Enterprise".',
      },
    },
    {
      name: 'priceLabel',
      type: 'text',
      required: true,
      label: 'Label Harga',
      admin: {
        description: 'Contoh: "Mulai dari Rp 5.000.000" atau "Custom".',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Deskripsi Singkat',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Fitur',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'isPopular',
      type: 'checkbox',
      label: 'Tandai "Paling Populer"',
      defaultValue: false,
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
}
