import { trpc } from '../utils/trpc'
import { usePkgId } from './usePkgId'

export function useRepoInfo() {
  const pkgId = usePkgId()
  return trpc.npm.getInfo.useQuery(
    { pkgId },
    {
      enabled: !!pkgId,
    }
  )
}
