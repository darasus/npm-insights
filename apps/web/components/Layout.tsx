import { Box, Center, Text } from "@chakra-ui/react";
import { PackageSearchInput } from "../features/PackageSearchInput/PackageSearchInput";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <Box maxW="xl" m="0 auto" p={4}>
      <Center mb={4}>
        <Text fontSize={"2xl"} fontWeight="bold">
          NPM Package Size
        </Text>
      </Center>
      <Box mb={4}>
        <PackageSearchInput />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
