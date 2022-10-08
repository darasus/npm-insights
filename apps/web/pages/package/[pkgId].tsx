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

interface Props {
  name: string;
  description: string;
  sizeHistory: Array<{ version: string; size: number; gzip: number }>;
}

const Chart = ({ dataKey, stat, label, data, color1, color2 }: any) => {
  return (
    <AspectRatio ratio={1}>
      <Flex
        flexDirection={"column"}
        borderRadius="3xl"
        overflow={"hidden"}
        bg="white"
        borderWidth="thin"
        borderColor="gray.200"
        h={"full"}
      >
        <Flex flexDirection={"column"} alignItems="center" pt={4}>
          <Text fontWeight={"bold"} fontSize="2xl">
            {stat}
          </Text>
          <Text color="gray.600">{label}</Text>
        </Flex>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Area
              type="monotoneX"
              dataKey={dataKey}
              stroke={color2}
              fill={color1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Flex>
    </AspectRatio>
  );
};

export default function Page() {
  const [c1, c2] = useToken("colors", ["green.100", "green.200"]);
  const [c3, c4] = useToken("colors", ["orange.100", "orange.200"]);
  const router = useRouter();
  const pkgId = router.query.pkgId as string;
  const pkg = trpc.package.get.useQuery({ pkgId }, { enabled: !!pkgId });
  const data = pkg.data?.sizeHistory;

  if (pkg.isLoading) return null;

  return (
    <Flex flexDirection={"column"} alignItems="center">
      <Flex flexDirection={"column"} alignItems="center" mb={4}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {pkg.data?.name}
          </Text>
        </Box>
        <Box>
          <Text>{pkg.data?.description}</Text>
        </Box>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mx={4} w={"2xl"}>
        <GridItem w="100%" h="10">
          <Chart
            dataKey="size"
            stat={`${data?.reverse()[0]?.gzip} KB`}
            label="Gzipped"
            data={data}
            color1={c1}
            color2={c2}
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <Chart
            dataKey="gzip"
            stat={`${data?.reverse()[0]?.size} KB`}
            label="Minified"
            data={data}
            color1={c3}
            color2={c4}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}
