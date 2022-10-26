import { trpc } from '../utils/trpc'

export const useRepositoryReadme = (pkgId: string) => {
  return trpc.github.getRepositoryReadme.useQuery(
    { pkgId },
    {
      enabled: !!pkgId,
    }
  )
}
