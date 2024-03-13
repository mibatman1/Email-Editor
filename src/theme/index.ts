import { createTheme } from '@mui/material/styles';

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    commonColors: {
      separator: string;
      white1: string;
      white2: string;
      themeBlue: string;
      themeBlueDark: string;
      hoverBlue: string;
      darkBlue: string;
      grey54: string;
      grey: string;
      grey04: string;
      darkGrey: string;
      activeBg: string;
      red: string;
      green1: string;
      green2: string;
      border: string;
      inputBorder: string;
      inputBackground: string;
      hintText: string;
      menuHover: string;
      titleColor: string;
      containerBorder: string;
      darkGray: string;
      error: string;
      headingColor: string;
      graphicBg: string;
      menuUnderline: string;
      expandedMenuText: string;
      themeBlueLight: string;
    };
  }

  interface PaletteOptions {
    commonColors: {
      separator: string;
      white1: string;
      white2: string;
      themeBlue: string;
      themeBlueDark: string;
      hoverBlue: string;
      darkBlue: string;
      grey54: string;
      grey: string;
      grey04: string;
      darkGrey: string;
      activeBg: string;
      red: string;
      green1: string;
      green2: string;
      border: string;
      inputBorder: string;
      inputBackground: string;
      hintText: string;
      menuHover: string;
      titleColor: string;
      containerBorder: string;
      darkGray: string;
      error: string;
      headingColor: string;
      graphicBg: string;
      menuUnderline: string;
      expandedMenuText: string;
      themeBlueLight: string;
    };
  }
}

const colors = {
  black: "#212121",
  white: "#ffffff",
  white1: "#fafafa",
  white2: "#f5f5f5",
  themeBlue: "#497DFA",
  themeBlueDark: "#071530",
  themeBlueLight: "#E9F0FE",
  hoverBlue: "#4B75D5",
  darkBlue: "#2A3451",
  grey74: "#424242",
  grey54: "#757575",
  grey: "#7e7e7e",
  grey04: "#575757",
  darkGrey: "#6A6662",
  activeBg: "#f6f7f5",
  red: "#ff0000",
  green1: "#3A9688",
  green2: "#009688",
  border: "#c4c4c4",
  error: "#B00020",
  inputBorder: "#0000001F",
  inputBackground: "#FFFFFF80",
  hintText: "#00000099",
  separator: "#e0e0e0",
  menuHover: "#253149",
  titleColor: "#758689",
  containerBorder: "#dcdcdc",
  darkGray: "#869496",
  headingColor: "#35393C",
  graphicBg: "#ECEDE9",
  menuUnderline: "#afc1f740",
  expandedMenuText: "#ACC1F5",
};

const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

const CommonTheme: any = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    htmlFontSize: 16,
    lineHeight: 24,
    h1: {
      fontSize: "2.375rem",
      lineHeight: "3rem",
      fontWeight: "700",
      letterSpacing: "0.36px",
    },
    h2: {
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      fontWeight: "500",
    },
    h3: {
      fontSize: "1.625rem",
    },
    h4: {
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
    },
    h5: {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
    },
    h6: {
      fontSize: "1.125rem",
      lineHeight: pxToRem(24),
      fontWeight: "500",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
    },
    subtitle1: {
      fontSize: "0.75rem",
      lineHeight: "1.063rem",
    },
    subtitle2: {
      fontSize: "0.75rem",
      lineHeight: "0.9rem",
    },
    button: {},
    caption: {},
    overline: {},
  },
  palette: {
    common: {
      black: `${colors.black}`,
    },
    primary: {
      main: `${colors.themeBlue}`,
    },
    text: {
      primary: `${colors.black}`,
    },
    background: {
      default: `${colors.white2}`,
    },
    divider: `${colors.border}`,
    commonColors: colors,
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  shape: {
    borderRadius: "5px",
  },
  props: {
    MuiButtonBase: {
      focusRipple: false, // No more focus shadow,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          fontSize: "16px", // to be added to <body> tag
        },
      },
    },
    MuiContainer: {
      root: {
        paddingLeft: "24px",
        paddingRight: "24px",
        "@media (min-width: 960px)": {
          paddingLeft: "38px",
          paddingRight: "38px",
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: `${colors.black}`,
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "16px",
        padding: "16px 20px",
        letterSpacing: "1.25px",
      },
      text: {
        fontSize: "0.875rem",
        lineHeight: "1rem",
        color: colors.themeBlue,
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "transparent",
          textDecoration: "underline",
          color: colors.themeBlue,
        },
      },
      textPrimary: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      textSecondary: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      contained: {
        boxShadow: "none",
        height: "50px",
        minWidth: "150px",
      },
      containedPrimary: {
        color: colors.white,
        backgroundColor: colors.themeBlue,
        border: `1px solid ${colors.themeBlue}`,
        textTransform: "uppercase",
        "&:hover": {
          color: colors.white,
          backgroundColor: colors.hoverBlue,
          borderColor: colors.hoverBlue,
        },
        "&.Mui-disabled": {
          color: "#9e9e9e",
          backgroundColor: colors.separator,
          borderColor: colors.separator,
        },
      },

      iconSizeLarge: {
        "& svg": {
          width: "1.25rem",
          height: "1.25em",
          "& path": {
            fill: colors.black,
            stroke: colors.black,
          },
        },
      },
      sizeLarge: {
        fontSize: "1.25rem",
        lineHeight: "1.5rem",
        fontWeight: "400",
      },
      containedSizeLarge: {
        padding: "1rem 2.25rem",
      },
      containedSecondary: {
        color: colors.themeBlue,
        backgroundColor: "transparent",
        border: `1px solid ${colors.themeBlue}`,
        textTransform: "uppercase",
        "& svg": {
          marginLeft: "32px",
        },
        "&:hover": {
          color: colors.white,
          backgroundColor: `${colors.themeBlue} !important`,
          "& svg path": {
            fill: colors.white,
          },
        },
        "&.Mui-disabled": {
          color: "#c4c4c4",
          backgroundColor: "transparent",
          borderColor: colors.separator,
        },
      },
      outlined: {},
      outlinedSecondary: {
        minWidth: "150px",
        color: colors.grey74,
        backgroundColor: "transparent",
        border: `1px solid ${colors.separator}`,
        textTransform: "uppercase",
        padding: "16px 20px",
        "&:hover": {
          color: colors.grey74,
          backgroundColor: colors.separator,
          border: `1px solid ${colors.separator}`,
        },
        "&.Mui-disabled": {
          color: "#c4c4c4",
          backgroundColor: "transparent",
          borderColor: colors.separator,
        },
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: "inherit",
        transformOrigin: "unset",
      },
    },
    MuiFormHelperText: {
      root: {
        color: "#8e8e8e",
        "&$error": {
          color: "#fe5959",
        },
      },
    },
    MuiPopover: {
      paper: {
        boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.25)",
      },
    },
    MuiMenuItem: {
      root: {
        fontWeight: 300,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
      },
      arrow: {
        color: "rgba(0,0,0,0.7)",
      },
    },
  },
};

const theme = createTheme({
  direction: "ltr",
  ...CommonTheme,
});

export default theme;