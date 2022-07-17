import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  navHeight: 100,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Avenir Next",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "rgba(16, 16, 16, 1)",
      light: "#F7FBFF",
      dark: "#1D0902",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#001EF5",
      light: "#1F1D2F",
      dark: "#1F1D2F",
    },
    tertiary: {
      main: "#2C9ED0",
    },
    text: {
      primary: "#261003",
      secondary: "#F26B2A",
      content: "#000000",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Avenir Next", "Open Sans", "Arial", sans-serif`,
  },
})

export default theme
