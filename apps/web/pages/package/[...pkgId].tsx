import {
  AspectRatio,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
} from '@chakra-ui/react'
import { trpc } from '../../utils/trpc'
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

export default function Page({
  pkgInitialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const pkgId = usePkgId()
  // const githubRepo = useRepository(pkgId)
  const { data: pkg, isLoading } = trpc.npm.getInfo.useQuery(
    { pkgId },
    {
      enabled: !!pkgId,
      refetchOnWindowFocus: false,
      initialData: pkgInitialData,
    }
  )
  const pkgSizeHistory = trpc.npm.getSizeHistory.useQuery(
    { pkgId },
    { enabled: !!pkgId, refetchOnWindowFocus: false }
  )
  const data = pkgSizeHistory.data?.sizeHistory.map((i) => ({
    ...i,
    descriptor: i.version,
  }))

  const gzipLabel = data ? formatKbs(data?.[data?.length - 1]?.gzip || 0) : ''
  const sizeLabel = data ? formatKbs(data?.[data?.length - 1]?.size || 0) : ''

  if (isLoading) {
    return (
      <Center w="full">
        <Spinner />
      </Center>
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
        <Flex flexDirection={'column'} alignItems="center">
          <PackageInfo
            pkg={pkg}
            url={
              pkg?.homepage ||
              pkg?.repository ||
              `https://npmjs.com/package/${pkg?.name}`
            }
          />
          <Grid templateColumns="repeat(12, 1fr)" gap={4} mx={4} w={'full'}>
            <GridItem colSpan={6}>
              <AspectRatio ratio={1}>
                <LineChartCard
                  dataKey="gzip"
                  label={gzipLabel}
                  description="Gzipped"
                  data={data}
                  isLoading={pkgSizeHistory.isLoading}
                />
              </AspectRatio>
            </GridItem>
            <GridItem colSpan={6}>
              <AspectRatio ratio={1}>
                <LineChartCard
                  dataKey="size"
                  label={sizeLabel}
                  description="Minified"
                  data={data}
                  isLoading={pkgSizeHistory.isLoading}
                />
              </AspectRatio>
            </GridItem>
            <GridItem colSpan={12}>
              <AspectRatio ratio={2 / 1}>
                <PackageDownloadsChart />
              </AspectRatio>
            </GridItem>
          </Grid>
        </Flex>
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
