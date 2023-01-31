import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { red } from "@mui/material/colors";

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
});

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
