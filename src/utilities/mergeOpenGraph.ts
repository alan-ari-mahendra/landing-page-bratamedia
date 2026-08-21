import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Jasa pengembangan web, mobile app, dan solusi digital untuk bisnis di Indonesia.',
  images: [
    {
      url: `${getServerSideURL()}/og-default.png`,
      width: 1200,
      height: 630,
      alt: 'Bratamedia - Solusi Digital untuk Bisnis Anda',
    },
  ],
  siteName: 'Bratamedia',
  title: 'Bratamedia - Solusi Digital untuk Bisnis Anda',
  locale: 'id_ID',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
