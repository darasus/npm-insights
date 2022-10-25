import { Box, Center, Text } from '@chakra-ui/react'
import { Link } from 'ui'
import { PackageSearchInput } from '../features/PackageSearchInput/PackageSearchInput'
import { Logo } from './Logo'
import { FullLogo } from './FullLogo'

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <Box maxW="xl" m="0 auto" p={4}>
      <Center mb={4}>
        <Link href="/">
          <FullLogo />
        </Link>
      </Center>
      <Box mb={4}>
        <PackageSearchInput showKbd />
      </Box>
      <Box>{children}</Box>
    </Box>
  )
}
