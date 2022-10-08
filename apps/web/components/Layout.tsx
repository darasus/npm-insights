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
  // const router = useRouter();
  // const { register, control, reset, resetField } = useForm();
  // const q = useWatch({ control, name: "q", defaultValue: null });
  // const debouncedQ = useDebounce(q);
  // const searchResults = trpc.package.searchPackage.useQuery(
  //   { q: debouncedQ },
  //   { enabled: Boolean(debouncedQ) }
  // );
  // const hasResults = searchResults.data || searchResults.data?.length > 0;

  // const handleClick = useCallback(
  //   (pkgId: string) => () => {
  //     router.push(`/package/${pkgId}`);
  //     reset();
  //     resetField("q");
  //   },
  //   [reset, resetField, router]
  // );

  return (
    <Box maxW="xl" m="0 auto" p={4}>
      {/* <Box mb={4}> */}
      {/* <Input placeholder="Type package name here..." {...register("q")} /> */}
      {/* </Box> */}
      <Combobox />
      <Box>{children}</Box>
    </Box>
  );
}
