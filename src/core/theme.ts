import { ThemeOptions } from "@mui/material";

export const theme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#D9DBB3",
    },
    secondary: {
      main: "#D3E0E1",
    },
    error: {
      main: "#EF4444",
    },
    warning: {
      main: "#F59E0B",
    },
    info: {
      main: "#0EA5E9",
    },
    success: {
      main: "#22C55E",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#D9DBB3",
          color: "#FFFFFF",
        },
      },
    },
  },
};
