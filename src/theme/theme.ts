import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const global = {
  "html, body, *": {
    margin: 0,
    padding: 0,
    letterSpacing: "1.3px",
  },
  body: {
    background: "#14141C",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  body: "'Lato', sans-serif",
  weight: "bold",
};

const colors = {
  gray: {
    50: "#FFFFFF",
    100: "#E0E0E0",
    150: "#9D9D9D",
    200: "#CACACE",
    300: "#B0B0B6",
    400: "#95969D",
    450: "rgb(88 166 233)",
    500: "#7B7B85",
    600: "#6B7F92",
    700: "#1e222d",
    750: "#303030",
    800: "#14141C",
  },
  brand: {
    gold: "#D4AF37",
    blue: "#20222A",
    lightblue: "#C4CAD7",
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
    },
    sizes: {
      xl: {
        h: "56px",
        fontSize: "lg",
        px: "32px",
      },
    },
    variants: {
      "with-shadow": {
        bg: "red.400",
        boxShadow: "0 0 2px 2px #efdfde",
      },
      sm: {
        bg: "gray.450",
        fontSize: "md",
      },
    },
    defaultProps: {
      size: "lg",
      variant: "sm",
      colorScheme: "dark",
    },
  },
  Link: {
    baseStyle: {
      color: "blue.400",
    },
  },
  FormLabel: {
    baseStyle: {
      color: "gray.500",
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: "normal",
    },
  },
};

export const theme = extendTheme({
  styles: { global },
  config,
  fonts,
  colors,
  components,
});
