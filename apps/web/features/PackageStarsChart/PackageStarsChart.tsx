import { LineChartCard } from '../../components/LineChartCard'
import { useRepositoryStarHistory } from '../../hooks/useRepositoryStarHistory'
import { formatNumber } from '../../utils/formatKbs'

export const PackageStarsChart = () => {
  const pkgStars = useRepositoryStarHistory()
  const starsLabel = pkgStars.data
    ? formatNumber(pkgStars.data[pkgStars.data.length - 1]?.count || 0)
    : ''

  return (
    <LineChartCard
      dataKey="count"
      label={starsLabel}
      description="Stars yesterday"
      data={pkgStars.data!}
      isLoading={pkgStars.isLoading}
    />
  )
}
