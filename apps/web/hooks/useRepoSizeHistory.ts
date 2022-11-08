import { trpc } from '../utils/trpc'
import { usePkgId } from './usePkgId'

export function useRepoSizeHistory({ pkgId }: { pkgId: string | undefined }) {
  return trpc.npm.getSizeHistory.useQuery(
    { pkgId: pkgId! },
    { enabled: !!pkgId, trpc: { ssr: false } }
  )
}
