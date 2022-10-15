import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  useToken,
} from "@chakra-ui/react";
import { trpc } from "../../utils/trpc";
import { formatKbs, formatNumber } from "../../utils/formatKbs";
import { Card } from "../../components/Card";
import { LineChartCard } from "../../components/LineChartCard";
import Image from "next/image";
import {
  HomeIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { createProxySSGHelpers } from "@trpc/react/ssg";
import { appRouter } from "../../server/routers/_app";
import { createContext } from "../../server/context";
import superjson from "superjson";
import { Layout } from "../../components/Layout";
import { Meta } from "ui";
import { usePkgId } from "../../hooks/usePkgId";

export default function Page({
  pkgInitialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const pkgId = usePkgId();
  const { data: pkg } = trpc.package.getInfo.useQuery(
    { pkgId },
    {
      enabled: !!pkgId,
      refetchOnWindowFocus: false,
      initialData: pkgInitialData,
    }
  );
  const pkgSizeHistory = trpc.package.getSizeHistory.useQuery(
    { pkgId },
    { enabled: !!pkgId, refetchOnWindowFocus: false }
  );
  const pkgDownloads = trpc.package.getPackageDownloads.useQuery(
    { pkgId },
    { enabled: !!pkgId, refetchOnWindowFocus: false }
  );
  const data = pkgSizeHistory.data?.sizeHistory;

  const gzipLabel = data ? formatKbs(data?.[data?.length - 1]?.gzip || 0) : "";
  const sizeLabel = data ? formatKbs(data?.[data?.length - 1]?.size || 0) : "";
  const downloadLabel = pkgDownloads.data
    ? formatNumber(pkgDownloads.data[pkgDownloads.data.length - 1]?.count || 0)
    : "";

  return (
    <>
      <Meta
        description={`Find out the size of '${pkgId}'`}
        imageSrc={`/api/og?pkgId=${pkgId}`}
        slug={pkgId}
      />
      <Layout>
        <Flex flexDirection={"column"} alignItems="center">
          <Card display={"flex"} flexDirection={"column"} mb={4} w="full" p={4}>
            <Box>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {`${pkg?.name}@${pkg?.latestVersion}`}
              </Text>
            </Box>
            <Box mb={2}>
              <Text>{pkg?.description}</Text>
            </Box>
            <Flex>
              <Button
                href={`https://npmjs.com/package/${pkg?.name}`}
                size="sm"
                as="a"
                mr={2}
                target={"_blank"}
                variant="outline"
                leftIcon={<ArrowTopRightOnSquareIcon height="15" width="15" />}
                borderColor={"brand"}
                _hover={{ bg: "brand.100" }}
              >
                npm
              </Button>
              <Button
                href={pkg?.repository}
                size="sm"
                as="a"
                target={"_blank"}
                mr={2}
                variant="outline"
                leftIcon={<ArrowTopRightOnSquareIcon height="15" width="15" />}
                borderColor={"brand"}
                _hover={{ bg: "brand.100" }}
              >
                GitHub
              </Button>
              {pkg?.homepage && (
                <Button
                  href={pkg?.homepage}
                  size="sm"
                  as="a"
                  target={"_blank"}
                  leftIcon={<HomeIcon height={15} width={15} />}
                  variant="outline"
                  borderColor={"brand"}
                  _hover={{ bg: "brand.100" }}
                >
                  Homepage
                </Button>
              )}
            </Flex>
          </Card>
          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={4}
            mx={4}
            w={"full"}
            h="xl"
          >
            <GridItem rowSpan={1} colSpan={1}>
              <LineChartCard
                dataKey="gzip"
                label={gzipLabel}
                description="Gzipped"
                data={data}
                isLoading={pkgSizeHistory.isLoading}
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <LineChartCard
                dataKey="size"
                label={sizeLabel}
                description="Minified"
                data={data}
                isLoading={pkgSizeHistory.isLoading}
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <LineChartCard
                dataKey="count"
                label={downloadLabel}
                description="Downloads yesterday"
                data={pkgDownloads.data}
                isLoading={pkgDownloads.isLoading}
              />
            </GridItem>
          </Grid>
        </Flex>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pkgId = (
    typeof context.query?.pkgId === "string"
      ? context.query?.pkgId
      : context.query?.pkgId?.join("/")
  ) as string;

  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });

  const pkg = await ssg.package.getInfo.fetch({ pkgId });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      pkgInitialData: pkg,
    },
  };
}
