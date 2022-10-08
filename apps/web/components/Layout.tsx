import { Box } from "@chakra-ui/react";
import { PackageSearchInput } from "../features/PackageSearchInput/PackageSearchInput";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <Box maxW="xl" m="0 auto" p={4}>
      <Box mb={4}>
        <PackageSearchInput />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
