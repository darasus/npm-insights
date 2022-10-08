import React, { useState } from "react";
import { useCombobox } from "downshift";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  ListItemProps,
  ListProps,
} from "@chakra-ui/react";
import { trpc } from "../../utils/trpc";
import { Card } from "../../components/Card";
import { useRouter } from "next/router";

const ComboboxItem = React.forwardRef<
  HTMLLIElement,
  ListItemProps & { itemIndex: number; highlightedIndex: number }
>(function ComboboxItem({ itemIndex, highlightedIndex, ...props }, ref) {
  return (
    <ListItem
      transition="background-color 220ms, color 220ms"
      bg={itemIndex === highlightedIndex ? "gray.100" : undefined}
      px={4}
      py={2}
      cursor="pointer"
      {...props}
      ref={ref}
    />
  );
});

export default function Combobox() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const searchResults = trpc.package.searchPackage.useQuery(
    { q },
    { enabled: Boolean(q) }
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
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" {...getToggleButtonProps()}>
                {isOpen ? "Hide" : "Show"}
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
