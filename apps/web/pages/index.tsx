import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { Link, Meta } from 'ui'
import { FullLogo } from '../components/FullLogo'
import { PackageSearchInput } from '../features/PackageSearchInput/PackageSearchInput'

export default function Web() {
  return (
    <>
      <Meta
        description="Find out the size of any NPM package"
        imageSrc="/api/og"
      />
      <Center height="100vh" width="100wh">
        <Flex w="full" maxW={'lg'} flexDirection="column" alignItems={'center'}>
          <Center mb={4}>
            <Link href="/">
              <FullLogo />
            </Link>
          </Center>
          <Box mb={4} px={4} w="full">
            <PackageSearchInput />
          </Box>
          <Text>Find the size of any NPM package</Text>
        </Flex>
      </Center>
    </>
  )
}
