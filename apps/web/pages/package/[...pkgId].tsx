import { formatKbs } from '../../utils/formatKbs'
import { LineChartCard } from '../../components/LineChartCard'
import { Layout } from '../../components/Layout'
import { Error, Meta } from 'ui'
import { usePkgId } from '../../hooks/usePkgId'
import { PackageInfo } from '../../components/PackageInfo'
import { PackageDownloadsChart } from '../../features/PackageDownloadsChart/PackageDownloadsChart'
import { useRepoInfo } from '../../hooks/useRepoInfo'
import { useRepoSizeHistory } from '../../hooks/useRepoSizeHistory'

export default function Page() {
  const pkgId = usePkgId()
  const { data: pkg, error } = useRepoInfo()
  const pkgSizeHistory = useRepoSizeHistory({ pkgId: pkg?.name })

  if (error) {
    return (
      <Error statusCode={error?.data?.httpStatus} message={error?.message} />
    )
  }

  if (!pkg) return null

  const data = pkgSizeHistory.data?.sizeHistory.map((i) => ({
    ...i,
  }))

  const gzipLabel = data ? formatKbs(data?.[data?.length - 1]?.gzip || 0) : ''
  const sizeLabel = data ? formatKbs(data?.[data?.length - 1]?.size || 0) : ''

  return (
    <>
      <Meta
        description={`Find out the size of '${pkgId}'`}
        imageSrc={`/api/og?pkgId=${pkg?.name}@${pkg?.latestVersion}&description=${pkg?.description}`}
        slug={pkgId}
      />
      <Layout>
        <div className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <PackageInfo
              pkg={pkg}
              url={
                pkg?.homepage ||
                pkg?.repository ||
                `https://npmjs.com/package/${pkg?.name}`
              }
            />
          </div>
          <div className="grid grid-cols-12 gap-4 mx-4 w-full">
            <div className="col-span-6">
              <div className="aspect-square">
                <LineChartCard
                  dataKey="gzip"
                  label={gzipLabel}
                  description="Gzipped"
                  data={data}
                  isLoading={pkgSizeHistory.isLoading}
                />
              </div>
            </div>
            <div className="col-span-6">
              <div className="aspect-square">
                <LineChartCard
                  dataKey="size"
                  label={sizeLabel}
                  description="Minified"
                  data={data}
                  isLoading={pkgSizeHistory.isLoading}
                />
              </div>
            </div>
            <div className="col-span-12">
              <div className="aspect-video">
                <PackageDownloadsChart />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
