import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata: Metadata = {
  title: 'Bratamedia - Solusi Digital untuk Bisnis Anda',
  description:
    'Bratamedia membangun web app, mobile app, landing page, dan solusi AI & automation untuk bisnis di Indonesia. Konsultasi gratis, respons 24 jam.',
  openGraph: mergeOpenGraph({
    title: 'Bratamedia - Solusi Digital untuk Bisnis Anda',
    description:
      'Bratamedia membangun web app, mobile app, landing page, dan solusi AI & automation untuk bisnis di Indonesia.',
    url: '/',
  }),
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return <LandingPage />
}
