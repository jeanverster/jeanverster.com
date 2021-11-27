import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BottomNav } from "@components";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import {
  RiGithubLine,
  RiHome2Line,
  RiImageLine,
  RiQuillPenLine,
  RiSettings2Line,
} from "react-icons/ri";
import theme from "../theme";

const NAV_ITEMS = [
  {
    icon: RiHome2Line,
    label: "Home",
    href: "/",
  },
  {
    icon: RiImageLine,
    label: "Photos",
    href: "/photos",
  },
  {
    icon: RiQuillPenLine,
    label: "Writing",
    href: "/writing",
  },
  {
    icon: RiGithubLine,
    label: "Projects",
    href: "/projects",
  },
  {
    icon: RiSettings2Line,
    label: "Settings",
    href: "/settings",
  },
];

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
        <BottomNav items={NAV_ITEMS} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
