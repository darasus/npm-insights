import { formatKbs } from '../../utils/formatKbs'
import { LineChartCard } from '../../components/LineChartCard'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { createProxySSGHelpers } from '@trpc/react/ssg'
import { appRouter } from '../../server/routers/_app'
import { createContext } from '../../server/context'
import superjson from 'superjson'
import { Layout } from '../../components/Layout'
import { Meta } from 'ui'
import { usePkgId } from '../../hooks/usePkgId'
import { createIsFirstServerCall } from '../../utils/createIsFirstServerCall'
import { PackageInfo } from '../../components/PackageInfo'
import { PackageDownloadsChart } from '../../features/PackageDownloadsChart/PackageDownloadsChart'
import { useRepoInfo } from '../../hooks/useRepoInfo'
import { useRepoSizeHistory } from '../../hooks/useRepoSizeHistory'

export default function Page({
  pkgInitialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const pkgId = usePkgId()
  const { isLoading, data: pkg } = useRepoInfo({ initialData: pkgInitialData })
  const pkgSizeHistory = useRepoSizeHistory()

  const data = pkgSizeHistory.data?.sizeHistory.map((i) => ({
    ...i,
  }))

  const gzipLabel = data ? formatKbs(data?.[data?.length - 1]?.gzip || 0) : ''
  const sizeLabel = data ? formatKbs(data?.[data?.length - 1]?.size || 0) : ''

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <span>Loading...</span>
      </div>
    )
  }

  if (!pkg) return null

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pkgId = (
    typeof context.query?.pkgId === 'string'
      ? context.query?.pkgId
      : context.query?.pkgId?.join('/')
  ) as string

  if (!createIsFirstServerCall(context)) {
    return {
      props: {},
    }
  }

  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  })

  const pkg = await ssg.npm.getInfo.fetch({ pkgId })

  return {
    props: {
      // trpcState: ssg.dehydrate(),
      pkgInitialData: pkg,
    },
  }
}
