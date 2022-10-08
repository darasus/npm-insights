import { ChakraProvider } from "@chakra-ui/react";
import { withTRPC } from "@trpc/next";
import { theme } from "../theme";
import { trpc } from "../utils/trpc";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default trpc.withTRPC(MyApp);
