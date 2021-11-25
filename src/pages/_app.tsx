import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BottomNav } from "@components";
import "@fontsource/crimson-text/400.css";
import "@fontsource/crimson-text/700.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/700.css";
import { useAtomValue } from "jotai/utils";
import type { AppProps } from "next/app";
import Image from "next/image";
import {
  RiGithubLine,
  RiHome2Line,
  RiImageLine,
  RiQuillPenLine,
  RiSettings2Line,
} from "react-icons/ri";
import { wallpaperAtom } from "../components/WallpaperSelect/index";
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
  const wallpaper = useAtomValue(wallpaperAtom);
  return (
    <ChakraProvider theme={theme}>
      {wallpaper?.src && (
        <Flex
          sx={{
            zIndex: -1,
            pos: "fixed",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Image
            alt="Mountains"
            layout="fill"
            objectFit="cover"
            quality={100}
            src={wallpaper?.src}
          />
        </Flex>
      )}
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
