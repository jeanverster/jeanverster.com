import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/crimson-text/400.css";
import "@fontsource/crimson-text/700.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/700.css";
import type { AppProps } from "next/app";
import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
