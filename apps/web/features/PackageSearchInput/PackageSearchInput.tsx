import React, { useState } from "react";
import { useCombobox } from "downshift";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  ListItemProps,
  ListProps,
  Text,
} from "@chakra-ui/react";
import { trpc } from "../../utils/trpc";
import { Card } from "../../components/Card";
import { useRouter } from "next/router";

const ComboboxInput = React.forwardRef<HTMLInputElement>(function ComboboxInput(
  { ...props },
  ref
) {
  return <Input {...props} ref={ref} />;
});

const ComboboxList = React.forwardRef<
  HTMLUListElement,
  ListProps & { isOpen: boolean }
>(function ComboboxList({ isOpen, ...props }, ref) {
  return (
    <List display={isOpen ? undefined : "none"} py={2} {...props} ref={ref} />
  );
});

const ComboboxItem = React.forwardRef<
  HTMLLIElement,
  ListItemProps & { itemIndex: number; highlightedIndex: number }
>(function ComboboxItem({ itemIndex, highlightedIndex, ...props }, ref) {
  const isActive = itemIndex === highlightedIndex;

  return (
    <ListItem
      transition="background-color 220ms, color 220ms"
      bg={isActive ? "gray.100" : undefined}
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
        console.log(changes.selectedItem);
        router.push(`/package/${changes.selectedItem.name}`);
      }
    },
  });

  return (
    <Flex direction="column" align="center" mb={4}>
      <Text as="label" fontSize="lg" {...getLabelProps()}>
        Choose a city
      </Text>
      <Flex {...getComboboxProps()} direction="column" flex="1 1 auto" w="full">
        <Flex
          direction="row"
          alignItems="baseline"
          w="full"
          mb={isOpen ? 4 : 0}
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
        <Card borderWidth={isOpen ? "thin" : "0px"}>
          <ComboboxList
            isOpen={isOpen}
            {...getMenuProps()}
            flex={1}
            overflowY="auto"
          >
            {searchResults.data?.map((item, index: number) => (
              <ComboboxItem
                {...getItemProps({
                  item,
                  index,
                })}
                itemIndex={index}
                highlightedIndex={highlightedIndex}
                key={index}
              >
                {item.name}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </Card>
      </Flex>
    </Flex>
  );
}
