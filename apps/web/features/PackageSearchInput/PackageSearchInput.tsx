import React, { useState } from "react";
import { useCombobox } from "downshift";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { trpc } from "../../utils/trpc";
import { Card } from "../../components/Card";
import { useRouter } from "next/router";

export function PackageSearchInput() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const searchResults = trpc.package.searchPackage.useQuery(
    { q },
    { enabled: Boolean(q), keepPreviousData: true }
  );
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox<{ name: string; description: string; version: string }>({
    items: searchResults.data || [],
    itemToString: (option) => (option ? option.name : ""),
    onInputValueChange: async ({ inputValue }) => {
      if (inputValue) {
        setQ(inputValue);
      } else {
        setQ("");
      }
    },
    onSelectedItemChange(changes) {
      if (changes.selectedItem) {
        router.push(`/package/${changes.selectedItem.name}`);
      }
    },
  });

  const showSuggestions =
    isOpen && searchResults.data && searchResults.data.length > 0;

  return (
    <Flex direction="column" align="center">
      <Flex {...getComboboxProps()} direction="column" flex="1 1 auto" w="full">
        <Flex
          direction="row"
          alignItems="baseline"
          w="full"
          mb={showSuggestions ? 4 : 0}
        >
          <InputGroup w="full">
            <Input w="full" {...getInputProps()} placeholder="Search..." />
            <InputRightElement>
              <Button
                size="sm"
                {...getToggleButtonProps()}
                disabled={searchResults.isFetching}
                mr={1}
              >
                {!searchResults.isFetching &&
                  (isOpen ? (
                    <ChevronDownIcon width={15} height={15} />
                  ) : (
                    <ChevronUpIcon width={15} height={15} />
                  ))}
                {searchResults.isFetching && <Spinner width={15} height={15} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Card borderWidth={showSuggestions ? "thin" : "0px"}>
          <List
            {...getMenuProps()}
            display={showSuggestions ? undefined : "none"}
            py={2}
            flex={1}
            overflowY="auto"
          >
            {searchResults.data?.map((item, index: number) => (
              <ListItem
                {...getItemProps({
                  item,
                  index,
                })}
                key={index}
                transition="background-color 220ms, color 220ms"
                bg={index === highlightedIndex ? "gray.100" : undefined}
                px={4}
                py={2}
                cursor="pointer"
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Card>
      </Flex>
    </Flex>
  );
}
