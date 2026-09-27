import { RaThemeOptions } from "ra-ui-materialui";

export const theme: RaThemeOptions = {
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
    RaRichTextInput: {
      styleOverrides: {
        root: {
          "& .RaRichTextInput-editorContent .ProseMirror": {
            backgroundColor: "#FFFFFF",
            color: "#1F1F1F",
            minHeight: "18rem",
            padding: "1rem 1.25rem",
            "& *": {
              color: "inherit !important",
              backgroundColor: "transparent !important",
            },
            "& a": {
              color: "#0B57D0 !important",
            },
          },
        },
      },
    },
  },
};
