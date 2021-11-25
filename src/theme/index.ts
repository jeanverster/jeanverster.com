import { extendTheme } from "@chakra-ui/react";

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

const theme = extendTheme({
  global: (props) => ({
    body: {
      color: props.colorMode === "dark" ? "gray.800" : "whiteAlpha.900",
      bg: props.colorMode === "dark" ? "#141214" : "whiteAlpha.900",
    },
  }),
  components: {
    IconButton: {
      baseStyle: {
        fontWeight: "bold",
        _focus: {
          boxShadow: "none",
          borderWidth: "1px",
        },
      },
      sizes: {
        xs: {
          fontSize: "xs",
          px: 0.5, // <-- px is short for paddingLeft and paddingRight
          py: 0.5, // <-- py is short for paddingTop and paddingBottom
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
