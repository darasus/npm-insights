import { trpc } from '../utils/trpc'
import { usePkgId } from './usePkgId'

export function useRepositoryStarHistory() {
  const pkgId = usePkgId()
  const data = trpc.github.getRepositoryStarHistory.useQuery(
    { pkgId },
    { enabled: !!pkgId, refetchOnWindowFocus: false }
  )

  return data
}
