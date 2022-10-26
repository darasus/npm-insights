import { trpc } from '../utils/trpc'
import { usePkgId } from './usePkgId'

export function useRepoSizeHistory() {
  const pkgId = usePkgId()

  return trpc.npm.getSizeHistory.useQuery({ pkgId }, { enabled: !!pkgId })
}
