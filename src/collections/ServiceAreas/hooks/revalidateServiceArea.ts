import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { ServiceArea } from '../../../payload-types'

export const revalidateServiceArea: CollectionAfterChangeHook<ServiceArea> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    try {
      if (doc._status === 'published') {
        payload.logger.info(`Revalidating service area: /layanan/website/${doc.slug}`)
        revalidatePath(`/layanan/website/${doc.slug}`)
        revalidatePath('/', 'page')
        revalidateTag('service-areas-sitemap', 'max')
      }

      if (previousDoc?._status === 'published' && doc._status !== 'published') {
        revalidatePath(`/layanan/website/${previousDoc.slug}`)
        revalidatePath('/', 'page')
        revalidateTag('service-areas-sitemap', 'max')
      }
    } catch (_) {
      // Outside Next.js context — skip
    }
  }
  return doc
}

export const revalidateServiceAreaDelete: CollectionAfterDeleteHook<ServiceArea> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    try {
      revalidatePath(`/layanan/website/${doc?.slug}`)
      revalidatePath('/', 'page')
      revalidateTag('service-areas-sitemap', 'max')
    } catch (_) {
      // Outside Next.js context — skip
    }
  }
  return doc
}
