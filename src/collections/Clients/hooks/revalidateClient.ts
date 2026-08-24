import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'
import type { Client } from '../../../payload-types'

export const revalidateClient: CollectionAfterChangeHook<Client> = ({ doc, req: { payload } }) => {
  try {
    payload.logger.info(`Revalidating clients section on home page`)
    revalidatePath('/', 'page')
  } catch (_) {
    // Outside Next.js context — skip
  }
  return doc
}

export const revalidateClientDelete: CollectionAfterDeleteHook<Client> = () => {
  try {
    revalidatePath('/', 'page')
  } catch (_) {
    // Outside Next.js context — skip
  }
}
