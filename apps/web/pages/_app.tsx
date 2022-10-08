import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { theme } from "../theme";
import { trpc } from "../utils/trpc";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default trpc.withTRPC(MyApp);
