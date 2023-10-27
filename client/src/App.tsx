import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createTheme as createConfigTheme } from "@mui/material";

import AppRouter from "./components/app-router";

const configTheme = createConfigTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const theme = createTheme({
  ...configTheme,

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1100,
      lg: 1360,
      xl: 1536,
    },
  },
  typography: {
    h2: {
      fontSize: "32px",
      color: "rgba(0, 0, 0, 0.87)",
    },
    h3: {
      fontSize: "24px",
      color: "rgba(0, 0, 0, 0.87)",
    },
    h4: {
      fontSize: "14px",
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: 700,
    },
    body1: {
      fontSize: "16px",
      color: "#19191D",
      lineHeight: "22px",
    },
    body2: {
      fontSize: "14px",
      color: "#787885",
      lineHeight: "20px",
    },
  },
  palette: {
    primary: {
      main: "#5A5B6A",
      light: "#9DC2FF",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2264D1",
      light: "#9DC2FF",
      dark: "#4A4B57",
      contrastText: "#fff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
