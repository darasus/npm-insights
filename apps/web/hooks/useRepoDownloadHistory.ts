import { trpc } from '../utils/trpc'
import { usePkgId } from './usePkgId'

export function useRepoDownloadHistory() {
  const pkgId = usePkgId()

  return trpc.npm.getPackageDownloads.useQuery(
    { pkgId },
    { enabled: !!pkgId, trpc: { ssr: false } }
  )
}
