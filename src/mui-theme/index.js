// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";
import { rem } from "utils/pxToRem";

export default createTheme({
  palette: {
    // primary: {
    //   // light: will be calculated from palette.primary.main,
    //   main: "#fff",
    //   // dark: will be calculated from palette.primary.main,
    //   // contrastText: will be calculated to contrast with palette.primary.main
    // },
    // secondary: {
    //   light: "#0066ff",
    //   main: "#0044ff",
    //   // dark: will be calculated from palette.secondary.main,
    //   contrastText: "#ffcc00",
    // },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width: 768px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        },
        maxWidthLg: {
          "@media (min-width: 1352px)": {
            maxWidth: "1352px",
          },
          "@media (max-width: 768px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: `${rem(12)} ${rem(40)}`,
          fontWeight: 500,
          fontSize: rem(14),
          lineHeight: rem(18),
          borderRadius: rem(12),
          transition: "all 0.25s ease-in-out",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
        textPrimary: {
          background: "var(--primary-color)",
          color: "#fff",
          "&:hover": {
            background: "var(--primary-color)",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          color: "var(--primary-color)!important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none!important",
        },
        input: {
          padding: rem(12),
          background: "#f6f6f6",
          borderRadius: rem(10),
          border: "1px solid transparent",
          "&:focus": {
            outline: "none",
            borderColor: "var(--primary-color)!important",
          },
          "&:hover": {
            borderColor: "var(--primary-color)!important",
          },
          fontSize: rem(15),
          lineHeight: rem(24),
          height: rem(48),
          color: "#252c32",
          transition: "all 0.25s ease-in-out",
          boxSizing: "border-box",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: "var(--primary-color)!important",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: rem(11),
          boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
});
