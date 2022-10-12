import React, { useState } from "react";
import { useCombobox } from "downshift";
import {
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
import { useDebounce } from "hooks";

export function PackageSearchInput() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const debouncedQ = useDebounce(q, 250);
  const searchResults = trpc.package.searchPackage.useQuery(
    { q: debouncedQ },
    { enabled: Boolean(q), keepPreviousData: true, refetchOnWindowFocus: false }
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
      <Flex
        {...getComboboxProps()}
        direction="column"
        flex="1 1 auto"
        w="full"
        position="relative"
        zIndex={"dropdown"}
      >
        <Flex direction="row" alignItems="baseline" w="full">
          <InputGroup w="full">
            <Input
              w="full"
              {...getInputProps()}
              placeholder="Search npm package..."
              borderRadius={"none"}
              borderColor="gray.200"
            />
            <InputRightElement>
              {searchResults.isFetching && (
                <Spinner width={15} height={15} color={"brand"} />
              )}
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Card
          borderWidth={showSuggestions ? "thin" : "0px"}
          position="absolute"
          left={0}
          right={0}
          top={"12"}
        >
          <List
            {...getMenuProps()}
            display={showSuggestions ? undefined : "none"}
            py={2}
            flex={1}
            overflowY="auto"
            maxH={"52"}
            zIndex="dropdown"
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
