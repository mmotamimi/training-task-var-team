import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#686a6dff" },
    secondary: { main: "#9c27b0" },
  },
  typography: {
    fontFamily: "Inter, system-ui, Arial, sans-serif",
  },
});

export default theme;
