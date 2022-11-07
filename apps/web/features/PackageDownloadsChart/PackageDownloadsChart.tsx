import { LineChartCard } from '../../components/LineChartCard'
import { useRepoDownloadHistory } from '../../hooks/useRepoDownloadHistory'
import { formatNumber } from '../../utils/formatKbs'

export const PackageDownloadsChart = () => {
  const pkgDownloads = useRepoDownloadHistory()
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
