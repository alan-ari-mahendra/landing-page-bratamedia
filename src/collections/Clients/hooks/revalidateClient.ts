import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'
import type { Client } from '../../../payload-types'

export const revalidateClient: CollectionAfterChangeHook<Client> = ({ doc, req: { payload } }) => {
  try {
    payload.logger.info(`Revalidating clients section on home page`)
    revalidatePath('/', 'page')
    revalidatePath('/', 'layout')
  } catch (e) {
    payload.logger.warn(`Revalidate client failed: ${e}`)
  }
  return doc
}

export const revalidateClientDelete: CollectionAfterDeleteHook<Client> = ({ req: { payload } }) => {
  try {
    revalidatePath('/', 'page')
    revalidatePath('/', 'layout')
  } catch (e) {
    payload.logger.warn(`Revalidate client delete failed: ${e}`)
  }
}
