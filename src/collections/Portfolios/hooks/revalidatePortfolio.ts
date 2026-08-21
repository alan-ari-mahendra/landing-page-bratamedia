import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { Portfolio } from '../../../payload-types'

export const revalidatePortfolio: CollectionAfterChangeHook<Portfolio> = ({ doc, req: { payload } }) => {
  try {
    payload.logger.info(`Revalidating portfolio: /portofolio/${doc.slug}`)
    revalidatePath(`/portofolio/${doc.slug}`, 'page')
    revalidatePath('/portofolio', 'page')
    revalidatePath('/', 'page')
    revalidateTag('portofolio-sitemap', 'max')
  } catch (_) {
    // Outside Next.js context — skip
  }
  return doc
}

export const revalidatePortfolioDelete: CollectionAfterDeleteHook<Portfolio> = ({ doc }) => {
  try {
    revalidatePath(`/portofolio/${doc?.slug}`, 'page')
    revalidatePath('/portofolio', 'page')
    revalidatePath('/', 'page')
    revalidateTag('portofolio-sitemap', 'max')
  } catch (_) {
    // Outside Next.js context — skip
  }
  return doc
}
