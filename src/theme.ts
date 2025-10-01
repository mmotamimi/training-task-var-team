import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#808080",
      contrastText: "#000000",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#808080",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Arial, sans-serif",
    button: {
      fontWeight: "bold",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
