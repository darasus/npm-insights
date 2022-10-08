import { AspectRatio, Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { Card } from "./Card";

interface Props {
  dataKey: string;
  label: string;
  description: string;
  data?: Array<Record<string, number | string>>;
  strokeColor?: string;
  fillColor?: string;
  isLoading?: boolean;
}

export function LineChartCard({
  dataKey,
  label,
  description,
  data = [],
  strokeColor,
  fillColor,
  isLoading,
}: Props) {
  const showData = !isLoading && data.length > 0;
  const showError = !isLoading && data.length === 0;

  return (
    <AspectRatio ratio={1}>
      <Card display="flex" flexDirection={"column"}>
        {isLoading && (
          <Flex
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
            h="full"
            w="full"
          >
            <Spinner />
            <Box>
              <Text fontSize={"sm"}>Generating package data...</Text>
            </Box>
          </Flex>
        )}
        {showData && (
          <>
            <Flex flexDirection={"column"} alignItems="center" pt={4}>
              <Text fontWeight={"bold"} fontSize="2xl">
                {label}
              </Text>
              <Text color="gray.600">{description}</Text>
            </Flex>
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotoneX"
                  dataKey={dataKey}
                  stroke={strokeColor}
                  fill={fillColor}
                />
              </AreaChart>
            </ResponsiveContainer>
          </>
        )}
        {showError && (
          <Flex
            alignItems={"center"}
            justifyContent="center"
            flexDirection={"column"}
            h="full"
            w="full"
          >
            <XCircleIcon width={30} height={30} />
            <Text fontSize={"sm"} textAlign="center" px={4}>
              Unfortunately no data is available for this package.
            </Text>
          </Flex>
        )}
      </Card>
    </AspectRatio>
  );
}
