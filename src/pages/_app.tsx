import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Dock } from "@components";
import { DOCK_ITEMS } from "@config/dock";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo />
      <Component {...pageProps} />
      <Flex
        pos="fixed"
        left={0}
        right={0}
        bottom={0}
        justify="center"
        align="center"
      >
        <Dock items={DOCK_ITEMS} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
