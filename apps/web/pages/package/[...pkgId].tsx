import {
  AspectRatio,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
} from '@chakra-ui/react'
import { trpc } from '../../utils/trpc'
import { formatKbs, formatNumber } from '../../utils/formatKbs'
import { LineChartCard } from '../../components/LineChartCard'
import { serialize } from 'next-mdx-remote/serialize'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { createProxySSGHelpers } from '@trpc/react/ssg'
import { appRouter } from '../../server/routers/_app'
import { createContext } from '../../server/context'
import superjson from 'superjson'
import { Layout } from '../../components/Layout'
import { LinkButton, Meta } from 'ui'
import { usePkgId } from '../../hooks/usePkgId'
import { createIsFirstServerCall } from '../../utils/createIsFirstServerCall'
import { useRepository } from '../../hooks/useRepository'
import { Readme } from '../../features/Readme/Readme'
import { PackageInfo } from '../../components/PackageInfo'

export default function Page({
  pkgInitialData,
  source,
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
  const pkgDownloads = trpc.npm.getPackageDownloads.useQuery(
    { pkgId },
    { enabled: !!pkgId, refetchOnWindowFocus: false }
  )
  const data = pkgSizeHistory.data?.sizeHistory

  const gzipLabel = data ? formatKbs(data?.[data?.length - 1]?.gzip || 0) : ''
  const sizeLabel = data ? formatKbs(data?.[data?.length - 1]?.size || 0) : ''
  const downloadLabel = pkgDownloads.data
    ? formatNumber(pkgDownloads.data[pkgDownloads.data.length - 1]?.count || 0)
    : ''

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
        imageSrc={`/api/og?pkgId=${pkg?.name}@${pkg?.latestVersion}`}
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
                <LineChartCard
                  dataKey="count"
                  label={downloadLabel}
                  description="Downloads yesterday"
                  data={pkgDownloads.data}
                  isLoading={pkgDownloads.isLoading}
                />
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
  const md = await ssg.github.getRepositoryReadme.fetch({ pkgId })
  const mdxSource = await serialize(md || '')

  return {
    props: {
      // trpcState: ssg.dehydrate(),
      pkgInitialData: pkg,
      source: mdxSource,
    },
  }
}
