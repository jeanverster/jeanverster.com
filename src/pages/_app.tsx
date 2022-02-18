import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Dock, TopNav } from "@components";
import { DOCK_ITEMS, TOP_NAV_ITEMS } from "@config/nav";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/700.css";
import { navAtom, NavType } from "@store";
import { useAtomValue } from "jotai/utils";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
  const nav = useAtomValue(navAtom);
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo />
      <Component {...pageProps} />
      {nav === NavType.DEFAULT ? (
        <TopNav items={TOP_NAV_ITEMS} />
      ) : (
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
      )}
    </ChakraProvider>
  );
}

export default App;
