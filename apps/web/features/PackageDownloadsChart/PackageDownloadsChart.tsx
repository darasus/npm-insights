import { LineChartCard } from '../../components/LineChartCard'
import { usePkgId } from '../../hooks/usePkgId'
import { formatNumber } from '../../utils/formatKbs'
import { trpc } from '../../utils/trpc'

export const PackageDownloadsChart = () => {
  const pkgId = usePkgId()
  const pkgDownloads = trpc.npm.getPackageDownloads.useQuery(
    { pkgId },
    { enabled: !!pkgId, refetchOnWindowFocus: false }
  )
  const downloadLabel = pkgDownloads.data
    ? formatNumber(pkgDownloads.data[pkgDownloads.data.length - 1]?.count || 0)
    : ''

  return (
    <LineChartCard
      dataKey="count"
      label={downloadLabel}
      description="Downloads yesterday"
      data={pkgDownloads.data?.map((i: any) => ({ ...i, descriptor: i }))}
      isLoading={pkgDownloads.isLoading}
    />
  )
}
