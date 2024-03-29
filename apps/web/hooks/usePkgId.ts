import { useRouter } from 'next/router'

export function usePkgId() {
  const router = useRouter()
  const pkgId = (
    typeof router.query?.pkgId === 'string'
      ? router.query?.pkgId
      : router.query?.pkgId?.join('/')
  ) as string

  return pkgId
}
