import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import { revalidateClient, revalidateClientDelete } from './hooks/revalidateClient'

export const Clients: CollectionConfig = {
  slug: 'clients',
  labels: {
    singular: 'Client',
    plural: 'Clients',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'logo', 'order', 'updatedAt'],
    description: 'Logo klien yang ditampilkan pada section "Klien Kami" di landing page.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nama Klien',
      admin: {
        description: 'Digunakan sebagai teks alternatif logo, tidak ditampilkan sebagai teks di halaman.',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo',
    },
    {
      name: 'website',
      type: 'text',
      label: 'URL Website (opsional)',
      admin: {
        description: 'Jika diisi, logo akan menjadi tautan ke website klien.',
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
    afterChange: [revalidateClient],
    afterDelete: [revalidateClientDelete],
  },
}
