import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  global: {
    ".slick-slide": {
      padding: "0 16px",
      boxSizing: "border-box",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        _focus: {
          boxShadow: "none",
          borderWidth: "1px",
        },
      },
    },
  },
  colors: {
    brand: {
      50: "#FDF2F8 ",
      100: "#FCE7F3",
      200: "#FBCFE8",
      300: "#F9A8D4",
      400: "#F472B6",
      500: "#EC4899",
      600: "#DB2777",
      700: "#BE185D",
      800: "#9D174D",
      900: "#831843",
    },
  },
  fonts: {
    heading: "Crimson Text",
    body: "Work Sans",
  },
});

export default theme;
