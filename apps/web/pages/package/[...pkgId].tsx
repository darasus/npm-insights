import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Text,
  useToken,
} from "@chakra-ui/react";
import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";
import { formatKbs, formatNumber } from "../../utils/formatKbs";
import { Card } from "../../components/Card";
import { LineChartCard } from "../../components/LineChartCard";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/solid";
import { GetServerSidePropsContext } from "next";
import { createProxySSGHelpers } from "@trpc/react/ssg";
import { appRouter } from "../../server/routers/_app";
import { createContext } from "../../server/context";
import superjson from "superjson";
import { Layout } from "../../components/Layout";

interface Props {
  pkgId: string;
}

export default function Page({ pkgId }: Props) {
  const [c1, c2, c3, c4] = useToken("colors", [
    "green.100",
    "green.200",
    "orange.100",
    "orange.200",
  ]);
  const router = useRouter();
  const pkg = trpc.package.getInfo.useQuery(
    { pkgId },
    { enabled: !!pkgId, refetchOnWindowFocus: false }
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

  if (pkg.isLoading) return null;

  const gzipLabel = data ? formatKbs(data?.[data?.length - 1]?.gzip || 0) : "";
  const sizeLabel = data ? formatKbs(data?.[data?.length - 1]?.size || 0) : "";
  const downloadLabel = pkgDownloads.data
    ? formatNumber(pkgDownloads.data[pkgDownloads.data.length - 1]?.count || 0)
    : "";

  return (
    <Layout>
      <Flex flexDirection={"column"} alignItems="center">
        <Card display={"flex"} flexDirection={"column"} mb={4} w="full" p={4}>
          <Box>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {`${pkg.data?.name}@${pkg.data?.latestVersion}`}
            </Text>
          </Box>
          <Box mb={2}>
            <Text>{pkg.data?.description}</Text>
          </Box>
          <Flex>
            <Button
              href={`https://npmjs.com/package/${pkg.data?.name}`}
              as="a"
              size="xs"
              mr={2}
              target={"_blank"}
              leftIcon={
                <Image
                  height="12"
                  width="12"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/npm.svg"
                  alt="npm logo"
                />
              }
            >
              npm
            </Button>
            <Button
              href={pkg.data?.repository}
              as="a"
              size="xs"
              target={"_blank"}
              mr={2}
              leftIcon={
                <Image
                  height="12"
                  width="12"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg"
                  alt="npm logo"
                />
              }
            >
              GitHub
            </Button>
            <Button
              href={pkg.data?.homepage}
              as="a"
              size="xs"
              target={"_blank"}
              leftIcon={<HomeIcon height={15} width={15} />}
            >
              Homepage
            </Button>
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
              fillColor={c1}
              strokeColor={c2}
              isLoading={pkgSizeHistory.isLoading}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <LineChartCard
              dataKey="size"
              label={sizeLabel}
              description="Minified"
              data={data}
              fillColor={c3}
              strokeColor={c4}
              isLoading={pkgSizeHistory.isLoading}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <LineChartCard
              dataKey="count"
              // label={formatNumber(pkgDownloads.data?.reverse()[0]?.count)}
              label={downloadLabel}
              description="Downloads yesterday"
              data={pkgDownloads.data}
              fillColor={c3}
              strokeColor={c4}
              isLoading={pkgDownloads.isLoading}
            />
          </GridItem>
        </Grid>
      </Flex>
    </Layout>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
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
  await ssg.package.getInfo.prefetch({ pkgId });
  return {
    props: {
      trpcState: ssg.dehydrate(),
      pkgId,
    },
  };
}
