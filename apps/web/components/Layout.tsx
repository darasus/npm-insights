import { Box, Center, Text } from '@chakra-ui/react'
import { Link } from 'ui'
import { PackageSearchInput } from '../features/PackageSearchInput/PackageSearchInput'
import { Logo } from './Logo'

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <Box maxW="xl" m="0 auto" p={4}>
      <Center mb={4}>
        <Link href="/">
          <Box position={'relative'}>
            <Logo />
            <Box
              position={'absolute'}
              left={'100%'}
              top={0}
              bottom={0}
              display="flex"
              alignItems="center"
              ml={1}
            >
              <Text fontSize="sm" color="brand.1000">
                Beta
              </Text>
            </Box>
          </Box>
        </Link>
      </Center>
      <Box mb={4}>
        <PackageSearchInput showKbd />
      </Box>
      <Box>{children}</Box>
    </Box>
  )
}
