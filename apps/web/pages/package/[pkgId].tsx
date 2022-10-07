import { GetServerSideProps } from "next";
import { CacheService, stringToHash } from "lib";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
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

interface Props {
  name: string;
  description: string;
  sizeHistory: Array<{ version: string; size: number; gzip: number }>;
}

const compareSemanticVersions = (a: string, b: string) => {
  // 1. Split the strings into their parts.
  const a1 = a.split(".");
  const b1 = b.split(".");
  // 2. Contingency in case there's a 4th or 5th version
  const len = Math.min(a1.length, b1.length);
  // 3. Look through each version number and compare.
  for (let i = 0; i < len; i++) {
    const a2 = +a1[i] || 0;
    const b2 = +b1[i] || 0;

    if (a2 !== b2) {
      return a2 > b2 ? 1 : -1;
    }
  }

  // 4. We hit this if the all checked versions so far are equal
  //
  return b1.length - a1.length;
};

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
  const router = useRouter();
  const pkg = trpc.package.useQuery({ pkgId: router.query.pkgId as string });

  const [c1, c2] = useToken("colors", ["green.100", "green.200"]);
  const [c3, c4] = useToken("colors", ["orange.100", "orange.200"]);
  const data = pkg.data?.sizeHistory
    .sort((a, b) => compareSemanticVersions(a.version, b.version))
    .map((x) => {
      const gzipStrNum = x.gzip.toString();
      const sizeStrNum = x.size.toString();
      return {
        version: x.version,
        gzip: parseFloat(gzipStrNum.slice(0, 1) + "." + gzipStrNum.slice(1)),
        size: parseFloat(sizeStrNum.slice(0, 1) + "." + sizeStrNum.slice(1)),
      };
    })
    .reverse()
    .slice(0, 10)
    .reverse();

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
            stat={`${data?.pop()?.gzip} KB`}
            label="Gzipped"
            data={data}
            color1={c1}
            color2={c2}
          />
        </GridItem>
        <GridItem w="100%" h="10">
          <Chart
            dataKey="gzip"
            stat={`${data?.pop()?.size} KB`}
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
