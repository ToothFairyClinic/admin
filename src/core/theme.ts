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
            "&:hover, &:focus, &:focus-visible": {
              backgroundColor: "#FFFFFF",
              color: "#1F1F1F",
            },
            '&[contenteditable="false"], &[contenteditable="false"]:hover, &[contenteditable="false"]:focus':
              {
                backgroundColor: "#ECECEC",
                color: "#5F5F5F",
              },
            "& *": {
              color: "inherit !important",
              backgroundColor: "transparent !important",
            },
            "& a": {
              color: "#0B57D0 !important",
            },
            "& img": {
              maxWidth: "100%",
              height: "auto",
            },
            "& table": {
              borderCollapse: "collapse",
              tableLayout: "fixed",
              width: "100%",
              margin: "1rem 0",
              overflow: "hidden",
            },
            "& th, & td": {
              border: "1px solid #C4C4C4",
              padding: "0.5rem 0.75rem",
              verticalAlign: "top",
              position: "relative",
              minWidth: "3rem",
            },
            "& th": {
              backgroundColor: "#F1F1F1 !important",
              fontWeight: 600,
              textAlign: "left",
            },
            "& .selectedCell:after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(11, 87, 208, 0.12)",
              pointerEvents: "none",
            },
            "& .column-resize-handle": {
              position: "absolute",
              right: "-2px",
              top: 0,
              bottom: "-2px",
              width: "4px",
              backgroundColor: "#0B57D0 !important",
              pointerEvents: "none",
            },
          },
        },
      },
    },
  },
};
