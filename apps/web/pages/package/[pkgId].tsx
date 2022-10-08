import { Area, AreaChart, ResponsiveContainer } from "recharts";
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useToken,
} from "@chakra-ui/react";
import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import superjson from "superjson";
import { formatKbs } from "../../utils/formatKbs";
import { Card } from "../../components/Card";
import { LineChartCard } from "../../components/LineChartCard";

interface Props {
  name: string;
  description: string;
  sizeHistory: Array<{ version: string; size: number; gzip: number }>;
}

export default function Page() {
  const [c1, c2, c3, c4] = useToken("colors", [
    "green.100",
    "green.200",
    "orange.100",
    "orange.200",
  ]);
  const router = useRouter();
  const pkgId = router.query.pkgId as string;
  const pkg = trpc.package.getInfo.useQuery({ pkgId }, { enabled: !!pkgId });
  const pkgSizeHistory = trpc.package.getSizeHistory.useQuery(
    { pkgId },
    { enabled: !!pkgId }
  );
  const data = pkgSizeHistory.data?.sizeHistory;

  if (pkg.isLoading) return null;

  return (
    <Flex flexDirection={"column"} alignItems="center" p={4} w="xl" m="0 auto">
      <Card
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        mb={4}
        w="full"
        p={4}
      >
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {pkg.data?.name}
          </Text>
        </Box>
        <Box>
          <Text>{pkg.data?.description}</Text>
        </Box>
      </Card>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mx={4} w={"full"}>
        <GridItem w="100%" h="10">
          {pkgSizeHistory.isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <LineChartCard
              dataKey="gzip"
              label={formatKbs(data?.reverse()[0]?.gzip as number)}
              description="Gzipped"
              data={data}
              fillColor={c1}
              strokeColor={c2}
            />
          )}
        </GridItem>
        <GridItem w="100%" h="10">
          {pkgSizeHistory.isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <LineChartCard
              dataKey="size"
              label={formatKbs(data?.reverse()[0]?.size as number)}
              description="Minified"
              data={data}
              fillColor={c3}
              strokeColor={c4}
            />
          )}
        </GridItem>
      </Grid>
    </Flex>
  );
}
