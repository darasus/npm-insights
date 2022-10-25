import { Box, Flex, Spinner, Text, useToken } from '@chakra-ui/react'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { Card } from './Card'

interface Props {
  dataKey: string
  label: string
  description: string
  data?: Array<Record<string, number | string>>
  isLoading?: boolean
}

export function LineChartCard({
  dataKey,
  label,
  description,
  data = [],
  isLoading,
}: Props) {
  const [brand, brandLight] = useToken('colors', ['brand.1000', 'brand.400'])
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
                  fill={brandLight}
                />
                {/* <Tooltip /> */}
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
