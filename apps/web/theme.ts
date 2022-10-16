import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: false,
};

export const token = {
  color: {
    brand: "#fd6a5f",
    background: "#0c2210",
  },
};

export const headingSizeMap = {
  h1: ["4xl", "6xl", "6xl"],
  h2: "4xl",
  h3: "4xl",
  h4: "4xl",
};

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: token.color.background,
        color: token.color.brand,
      },
      "*": {
        borderColor: token.color.brand,
      },
    },
  },
  config,
  shadows: {
    outline: `0 0 0 2px ${token.color.brand + "50"}`,
  },
  colors: {
    brand: {
      100: `${token.color.brand + "10"}`,
      200: `${token.color.brand + "20"}`,
      300: `${token.color.brand + "30"}`,
      400: `${token.color.brand + "40"}`,
      500: `${token.color.brand + "50"}`,
      600: `${token.color.brand + "60"}`,
      700: `${token.color.brand + "70"}`,
      800: `${token.color.brand + "80"}`,
      900: `${token.color.brand + "90"}`,
      1000: `${token.color.brand}`,
    },
    background: {
      100: `${token.color.background + "10"}`,
      200: `${token.color.background + "20"}`,
      300: `${token.color.background + "30"}`,
      400: `${token.color.background + "40"}`,
      500: `${token.color.background + "50"}`,
      600: `${token.color.background + "60"}`,
      700: `${token.color.background + "70"}`,
      800: `${token.color.background + "80"}`,
      900: `${token.color.background + "90"}`,
      1000: `${token.color.background}`,
    },
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      1000: "#0a0a0a",
    },
    components: {
      Button: {
        variants: {
          outline: {
            bg: "red.400",
            boxShadow: "0 0 2px 2px #efdfde",
          },
        },
      },
    },
  },
});
