import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { trpc } from '../../utils/trpc'
import { formatKbs, formatNumber } from '../../utils/formatKbs'
import { Card } from '../../components/Card'
import { LineChartCard } from '../../components/LineChartCard'
import {
  HomeIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { createProxySSGHelpers } from '@trpc/react/ssg'
import { appRouter } from '../../server/routers/_app'
import { createContext } from '../../server/context'
import superjson from 'superjson'
import { Layout } from '../../components/Layout'
import { LinkButton, Meta } from 'ui'
import { usePkgId } from '../../hooks/usePkgId'
import { createIsFirstServerCall } from '../../utils/createIsFirstServerCall'

export default function Page({
  pkgInitialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const pkgId = usePkgId()
  const { data: pkg, isLoading } = trpc.package.getInfo.useQuery(
    { pkgId },
    {
      enabled: !!pkgId,
      refetchOnWindowFocus: false,
      initialData: pkgInitialData,
    }
  )
  const pkgSizeHistory = trpc.package.getSizeHistory.useQuery(
    { pkgId },
    { enabled: !!pkgId, refetchOnWindowFocus: false }
  )
  const pkgDownloads = trpc.package.getPackageDownloads.useQuery(
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

  return (
    <>
      <Meta
        description={`Find out the size of '${pkgId}'`}
        imageSrc={`/api/og?pkgId=${pkg?.name}@${pkg?.latestVersion}`}
        slug={pkgId}
      />
      <Layout>
        <Flex flexDirection={'column'} alignItems="center">
          <Card
            display={'flex'}
            flexDirection={'column'}
            mb={4}
            w="full"
            p={8}
            bg="brand.1000"
            border="none"
          >
            <Box>
              <Text
                fontSize={'4xl'}
                fontWeight={900}
                color="background.1000"
                lineHeight={1}
              >
                {`${pkg?.name}@${pkg?.latestVersion}`}
              </Text>
            </Box>
            <Box
              h="10"
              backgroundImage="repeating-linear-gradient(-45deg, transparent, transparent 8px, currentcolor 8px, currentcolor 10px)"
              color="background.1000"
              my={2}
            />
            <Box mb={2}>
              <Text
                color="background.1000"
                fontWeight={500}
                fontSize="lg"
                lineHeight={1}
              >
                {pkg?.description}
              </Text>
            </Box>
          </Card>
          <Grid templateColumns="repeat(12, 1fr)" gap={4} mx={4} w={'full'}>
            <GridItem colSpan={4}>
              {pkg?.homepage && (
                <LinkButton
                  href={pkg?.homepage}
                  leftIcon={<HomeIcon height={15} width={15} />}
                >
                  Home
                </LinkButton>
              )}
            </GridItem>
            <GridItem colSpan={4}>
              <LinkButton
                href={`https://npmjs.com/package/${pkg?.name}`}
                mr={2}
                leftIcon={<ArrowTopRightOnSquareIcon height="15" width="15" />}
              >
                npm
              </LinkButton>
            </GridItem>
            <GridItem colSpan={4}>
              <LinkButton
                href={pkg?.repository!}
                mr={2}
                leftIcon={<ArrowTopRightOnSquareIcon height="15" width="15" />}
              >
                GitHub
              </LinkButton>
            </GridItem>
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

  const pkg = await ssg.package.getInfo.fetch({ pkgId })

  return {
    props: {
      trpcState: ssg.dehydrate(),
      pkgInitialData: pkg,
    },
  }
}
