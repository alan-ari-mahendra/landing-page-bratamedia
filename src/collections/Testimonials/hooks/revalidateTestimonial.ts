import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'
import type { Testimonial } from '../../../payload-types'

export const revalidateTestimonial: CollectionAfterChangeHook<Testimonial> = ({
  doc,
  req: { payload },
}) => {
  try {
    payload.logger.info(`Revalidating testimonials section on home page`)
    revalidatePath('/', 'page')
  } catch (_) {
    // Outside Next.js context — skip
  }
  return doc
}

export const revalidateTestimonialDelete: CollectionAfterDeleteHook<Testimonial> = () => {
  try {
    revalidatePath('/', 'page')
  } catch (_) {
    // Outside Next.js context — skip
  }
}
