import React, { useState } from 'react'
import { useCombobox } from 'downshift'
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Kbd,
  List,
  ListItem,
  Spinner,
  Text,
  useToken,
} from '@chakra-ui/react'
import { trpc } from '../../utils/trpc'
import { Card } from '../../components/Card'
import { useRouter } from 'next/router'
import { useDebounce } from 'hooks'

interface Props {
  showKbd?: boolean
  isTransparent?: boolean
}

export function PackageSearchInput({
  showKbd = false,
  isTransparent = false,
}: Props) {
  const [b200] = useToken('colors', ['brand.600'])
  const router = useRouter()
  const [q, setQ] = useState('')
  const debouncedQ = useDebounce(q, 250)
  const searchResults = trpc.npm.searchPackage.useQuery(
    { q: debouncedQ },
    { enabled: Boolean(q), keepPreviousData: true, refetchOnWindowFocus: false }
  )
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox<{ name: string; description: string; version: string }>({
    items: searchResults.data || [],
    itemToString: (option) => (option ? option.name : ''),
    onInputValueChange: async ({ inputValue }) => {
      if (inputValue) {
        setQ(inputValue)
      } else {
        setQ('')
      }
    },
    onSelectedItemChange(changes) {
      if (changes.selectedItem) {
        router.push(`/package/${changes.selectedItem.name}`, undefined, {
          shallow: true,
        })
      }
    },
  })

  const showSuggestions =
    isOpen && searchResults.data && searchResults.data.length > 0

  return (
    <Flex direction="column" align="center">
      <Flex
        direction="column"
        flex="1 1 auto"
        w="full"
        position="relative"
        zIndex={'dropdown'}
      >
        <Flex direction="row" alignItems="baseline" w="full">
          <InputGroup w="full">
            <Input
              w="full"
              {...getInputProps()}
              placeholder="Search npm package..."
              borderRadius={'none'}
              _hover={{ borderColor: 'brand.1000' }}
              _focusVisible={{
                borderColor: 'inherit',
                boxShadow: `0px 0px 0px 4px ${b200}`,
              }}
              _placeholder={{ color: 'brand.1000', opacity: 1 }}
            />
            <InputRightElement w="auto" mr={2}>
              {searchResults.isFetching ? (
                <Spinner width={15} height={15} color={'brand'} />
              ) : (
                showKbd && (
                  <Flex display={['none', 'none', 'flex']}>
                    <Kbd bg={'background.1000'} mr={1}>
                      ⌘
                    </Kbd>{' '}
                    <Text lineHeight={1}>+</Text>{' '}
                    <Kbd bg={'background.1000'} ml={1}>
                      K
                    </Kbd>
                  </Flex>
                )
              )}
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Card
          borderWidth={showSuggestions ? 'thin' : '0px'}
          position="absolute"
          left={0}
          right={0}
          top={'12'}
        >
          <List
            {...getMenuProps()}
            display={showSuggestions ? undefined : 'none'}
            py={2}
            flex={1}
            overflowY="auto"
            maxH={'52'}
            zIndex="dropdown"
            bg={isTransparent ? 'transparent' : 'background.1000'}
          >
            {searchResults.data?.map((item, index: number) => (
              <ListItem
                {...getItemProps({
                  item,
                  index,
                })}
                key={index}
                transition="background-color 220ms, color 220ms"
                bg={index === highlightedIndex ? 'brand.1000' : undefined}
                px={4}
                py={2}
                cursor="pointer"
              >
                <Text
                  color={
                    index === highlightedIndex ? 'background.1000' : undefined
                  }
                >
                  {item.name}
                </Text>
              </ListItem>
            ))}
          </List>
        </Card>
      </Flex>
    </Flex>
  )
}
