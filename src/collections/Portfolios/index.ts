import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import { slugField } from 'payload'

export const Portfolios: CollectionConfig = {
  slug: 'portfolios',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'desc',
      type: 'textarea',
      label: 'Short Description (for listing card)',
      required: true,
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Cover Image URL',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Cover Image (upload)',
    },
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Duration (e.g. "8 Minggu, 2025")',
    },
    {
      name: 'challenge',
      type: 'array',
      label: 'Challenge Paragraphs',
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'solution',
      type: 'textarea',
    },
    {
      name: 'solutionImageUrl',
      type: 'text',
      label: 'Solution Image URL',
    },
    {
      name: 'solutionImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Solution Image (upload)',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Impact Stats',
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        { name: 'sub', type: 'text' },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'initials', type: 'text' },
        { name: 'name', type: 'text' },
        { name: 'role', type: 'text' },
      ],
    },
    {
      name: 'tech',
      type: 'array',
      label: 'Technologies Used',
      fields: [
        { name: 'name', type: 'text', required: true },
      ],
    },
    slugField(),
  ],
}
