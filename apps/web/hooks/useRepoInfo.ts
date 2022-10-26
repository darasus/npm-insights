import { trpc } from '../utils/trpc'
import { usePkgId } from './usePkgId'

export function useRepoInfo({ initialData }: { initialData: any }) {
  const pkgId = usePkgId()
  return trpc.npm.getInfo.useQuery(
    { pkgId },
    {
      enabled: !!pkgId,
      initialData,
    }
  )
}
