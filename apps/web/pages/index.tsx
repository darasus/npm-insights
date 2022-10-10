import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Meta } from "ui";
import { PackageSearchInput } from "../features/PackageSearchInput/PackageSearchInput";

export default function Web() {
  return (
    <>
      <Meta description="Find out the size of any NPM package" />
      <Center height="100vh" width="100wh">
        <Flex w="full" maxW={"lg"} flexDirection="column" alignItems={"center"}>
          <Text fontSize={"2xl"} fontWeight="bold" mb={4}>
            NPM Package Size
          </Text>
          <Box mb={4} w="full">
            <PackageSearchInput />
          </Box>
        </Flex>
      </Center>
    </>
  );
}
