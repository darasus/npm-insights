import { Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import * as mdx from '@mdx-js/react'
import { headingSizeMap } from '../theme'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

type Components = React.ComponentProps<typeof mdx.MDXProvider>['components']

const components: Components = {
  h1: (props) => (
    <Text
      as="h1"
      fontWeight={900}
      fontSize={headingSizeMap['h1']}
      lineHeight={1}
      {...props}
    />
  ),
  h2: (props) => (
    <Text
      as="h2"
      fontWeight={900}
      mt={4}
      fontSize={headingSizeMap['h2']}
      lineHeight={1}
      {...props}
    />
  ),
  h3: (props) => (
    <Text
      as="h3"
      fontWeight={900}
      mt={4}
      fontSize={headingSizeMap['h3']}
      lineHeight={1}
      {...props}
    />
  ),
  h4: (props) => (
    <Text
      as="h4"
      fontWeight={900}
      mt={4}
      fontSize={headingSizeMap['h4']}
      lineHeight={1}
      {...props}
    />
  ),
  p: (props) => <Text {...props} my={2} fontSize={'lg'} />,
  ul: (props) => <List spacing={3} {...props} />,
  li: (props) => (
    <ListItem {...props}>
      <ListIcon
        as={ChevronDoubleRightIcon}
        w={5}
        h={5}
        color="gray.500"
        mr={1}
      />
      <Text as="span" fontSize={'lg'}>
        {props.children}
      </Text>
    </ListItem>
  ),
  a: (props) => <a {...props} />,
  img: (props) => <Image {...props} alt={props.alt} display="inline-block" />,
}

export function Markdown(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />
}
