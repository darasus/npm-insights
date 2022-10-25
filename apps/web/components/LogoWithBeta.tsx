import { Box, Text } from '@chakra-ui/react'
import { Logo } from './Logo'

export function LogoWithBeta() {
  return (
    <Box position={'relative'}>
      <Logo />
      <Box
        position={'absolute'}
        left={'100%'}
        top={0}
        bottom={0}
        display="flex"
        alignItems="center"
      >
        <Text fontSize="sm" fontWeight="bold" color="brand.1000">
          Watch
        </Text>
      </Box>
    </Box>
  )
}
