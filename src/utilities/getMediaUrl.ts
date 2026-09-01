/**
 * Processes media resource URL to ensure proper formatting
 * @param url The original URL from the resource
 * @param cacheTag Optional cache tag to append to the URL
 * @returns Properly formatted URL with cache tag if provided
 *
 * Local paths (e.g. `/api/media/file/image.webp`) are kept relative so
 * Next.js image optimization treats them as local rather than fetching
 * through `remotePatterns`, which blocks private IPs since Next.js 16.
 */
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''

  if (cacheTag && cacheTag !== '') {
    cacheTag = encodeURIComponent(cacheTag)
  }

  return cacheTag ? `${url}?${cacheTag}` : url
}

/**
 * Resolves the display URL for a cover/section image that can be set either as a
 * plain-text URL field or as a Payload `upload` relationship. The upload field is
 * only populated as a full object when queried with sufficient `depth` — falls back
 * to empty string if neither is available.
 *
 * The uploaded media takes priority over the plain-text URL: uploads are always
 * validated and served through Payload's media pipeline, while a hand-typed URL can
 * point at a path that was never actually created (e.g. leftover seed data).
 */
export const resolveImageUrl = (
  explicitUrl: string | null | undefined,
  upload: number | { url?: string | null; updatedAt?: string | null } | null | undefined,
): string => {
  if (upload && typeof upload === 'object') {
    const uploadUrl = getMediaUrl(upload.url, upload.updatedAt)
    if (uploadUrl) return uploadUrl
  }
  if (explicitUrl) return explicitUrl
  return ''
}
