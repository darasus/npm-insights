import { Box, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useForm, useWatch } from "react-hook-form";
import Combobox from "../features/PackageSearchInput/PackageSearchInput";
import { useDebounce } from "../hooks/useDebounce";
import { trpc } from "../utils/trpc";
import { Card } from "./Card";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <Box maxW="xl" m="0 auto" p={4}>
      <Box mb={4}>
        <Combobox />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
