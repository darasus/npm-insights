import { AspectRatio, Flex, Text } from "@chakra-ui/react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { Card } from "./Card";

interface Props {
  dataKey: string;
  label: string;
  description: string;
  data?: Array<Record<string, number | string>>;
  strokeColor?: string;
  fillColor?: string;
}

export function LineChartCard({
  dataKey,
  label,
  description,
  data = [],
  strokeColor,
  fillColor,
}: Props) {
  return (
    <AspectRatio ratio={1}>
      <Card display="flex" flexDirection={"column"}>
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
      </Card>
    </AspectRatio>
  );
}
