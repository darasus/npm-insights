import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { inferProcedureOutput } from '@trpc/server'
import { LinkButton } from 'ui'
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
        <LinkButton
          href={url}
          fontSize={'4xl'}
          fontWeight={900}
          color="background.1000"
          lineHeight={1}
          width="fit-content"
          p={0}
          m={0}
          textDecoration="underline"
          rightIcon={<ArrowTopRightOnSquareIcon height="25" width="25" />}
        >
          {`${pkg?.name}@${pkg?.latestVersion}`}
        </LinkButton>
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
      {/* <Text color="background.1000">
              {githubRepo.data?.stargazers_count
                ? formatNumber(githubRepo.data?.stargazers_count)
                : 'Loading...'}
            </Text> */}
    </Card>
  )
}
