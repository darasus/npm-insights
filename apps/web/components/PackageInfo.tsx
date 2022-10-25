import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { inferProcedureOutput } from '@trpc/server'
import { AppRouter } from '../server/routers/_app'
import { Card } from './Card'

type Pkg = inferProcedureOutput<AppRouter['npm']['getInfo']>

export function PackageInfo({ pkg, url }: { pkg: Pkg; url: string }) {
  return (
    <Card
      display={'flex'}
      flexDirection={'column'}
      mb={4}
      w="full"
      p={8}
      bg="brand.1000"
      border="none"
    >
      <Flex>
        <Link
          href={url}
          target="_blank"
          fontSize={'4xl'}
          fontWeight={900}
          color="background.1000"
          p={0}
          m={0}
          textDecoration="underline"
        >
          {`${pkg?.name}@${pkg?.latestVersion}`}
        </Link>
      </Flex>
      <Box
        h="10"
        backgroundImage="repeating-linear-gradient(-45deg, transparent, transparent 8px, currentcolor 8px, currentcolor 10px)"
        color="background.1000"
        my={2}
      />
      <Box>
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
  )
}
