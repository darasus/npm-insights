import { Box, Flex, Spinner, Text, useToken } from '@chakra-ui/react'
import { ResponsiveContainer, AreaChart, Area, Tooltip, Line } from 'recharts'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Card } from './Card'
import { format } from 'date-fns'
import { usePkgId } from '../hooks/usePkgId'
import { formatKbs, formatNumber } from '../utils/formatKbs'

interface Props {
  dataKey: string
  label: string
  description: string
  data?: Array<Record<string, number | string>>
  isLoading?: boolean
}

const CustomTooltip = ({ active, payload, label, data, key }: any) => {
  const pkgId = usePkgId()

  const getLabel = () => {
    if (data[label].date) {
      return {
        data: formatNumber(payload[0].value),
        label: format(new Date(data[label].date), 'MMM d yyyy'),
      }
    }
    if (data[label].version) {
      return {
        data: formatKbs(payload[0].value),
        label: `${pkgId}@${data[label].version}`,
      }
    }
    return null
  }

  if (active && payload && payload.length) {
    return (
      <Box borderWidth={2} p={2} bg="background.1000">
        <Box>
          <Text>{getLabel()?.label}</Text>
        </Box>
        <Box>
          <Text fontWeight={900}>{getLabel()?.data}</Text>
        </Box>
      </Box>
    )
  }

  return null
}

export function LineChartCard({
  dataKey,
  label,
  description,
  data = [],
  isLoading,
}: Props) {
  const [brand, brandLight, bg] = useToken('colors', [
    'brand.1000',
    'brand.400',
    'background.1000',
  ])
  const showData = !isLoading && data.length > 0
  const showError = !isLoading && data.length === 0

  return (
    <Box h={'full'} w={'full'}>
      <Card display="flex" flexDirection={'column'} h={'full'} w={'full'}>
        {isLoading && (
          <Flex
            alignItems={'center'}
            justifyContent="center"
            flexDirection={'column'}
            h="full"
            w="full"
          >
            <Spinner mb={2} />
            <Box>
              <Text fontSize={'sm'} px={2} textAlign="center" lineHeight={1.2}>
                Generating package data...
              </Text>
            </Box>
          </Flex>
        )}
        {showData && (
          <>
            <Flex flexDirection={'column'} alignItems="center" pt={4}>
              <Text fontWeight={900} fontSize="2xl">
                {label}
              </Text>
              <Text color="brand.900">{description}</Text>
            </Flex>
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotoneX"
                  dataKey={dataKey}
                  stroke={brand}
                  strokeWidth={2}
                  fill={brandLight}
                  activeDot={{ r: 5, fill: bg, strokeWidth: 2, stroke: brand }}
                />
                <Tooltip
                  cursor={false}
                  content={<CustomTooltip data={data} />}
                />
              </AreaChart>
            </ResponsiveContainer>
          </>
        )}
        {showError && (
          <Flex
            alignItems={'center'}
            justifyContent="center"
            flexDirection={'column'}
            h="full"
            w="full"
          >
            <XCircleIcon width={30} height={30} />
            <Text fontSize={'sm'} textAlign="center" px={4}>
              Unfortunately no data is available for this package.
            </Text>
          </Flex>
        )}
      </Card>
    </Box>
  )
}
