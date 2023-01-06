import { useRouter } from 'next/router'
import { getProductionBaseUrl } from 'utils'

interface UseCanonicalUrlArgs {
  slug?: string
}

export function useCanonicalUrl({ slug }: UseCanonicalUrlArgs) {
  const router = useRouter()
  const baseUrl = getProductionBaseUrl()

  if (router.pathname.startsWith('/package/') && slug) {
    return `${baseUrl}/package/${slug}`
  }

  return `${baseUrl}/`
}
