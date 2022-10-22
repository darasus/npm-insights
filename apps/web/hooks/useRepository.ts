import { trpc } from '../utils/trpc'

export const useRepository = (pkgId: string) => {
  return trpc.github.getRepo.useQuery(
    { pkgId },
    {
      enabled: !!pkgId,
      refetchOnWindowFocus: false,
    }
  )
}
