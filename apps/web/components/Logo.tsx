import { Text, TextProps } from '@chakra-ui/react'

export function Logo(props: TextProps) {
  return (
    <Text fontFamily={'Ultra'} fontSize="4xl" color="brand.1000" {...props}>
      js.watch
    </Text>
  )
}
