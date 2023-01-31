import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#cdb3fb",
      light: "#d7c2fb",
      dark: "#8f7daf",
      contrastText: "#000000",
    },
    secondary: {
      main: "#2979ff",
      light: "#5393ff",
      dark: "#1c54b2",
      contrastText: "#FFFFFF",
    },
    cancel: {
      main: "#64748B",
      light: "#838fa2",
      dark: "#465161",
      contrastText: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    cancel: Palette["primary"];
  }

  interface PaletteOptions {
    cancel: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export default theme;
