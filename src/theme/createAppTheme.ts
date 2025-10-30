import { createTheme } from "@mui/material/styles";
import { themeConfig } from "./themeConfig";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      accent: string;
      secondary: string;
      primaryGreen: string;
      secondaryGreen: string;
      textGreen: string;
      blackwhite: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      accent?: string;
      secondary?: string;
      primaryGreen?: string;
      secondaryGreen: string;
      textGreen: string;
      blackwhite?: string;
    };
  }
}

export const createAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: themeConfig.palette.primary500,
      },
      background: {
        default:
          mode === "dark"
            ? themeConfig.palette.dark
            : themeConfig.palette.light,
        paper: mode === "dark" ? themeConfig.palette.secondaryDark : themeConfig.palette.secondaryLight,
      },
      text: {
        primary: mode === "dark" ? themeConfig.palette.textLight : themeConfig.palette.textDark,
        secondary: mode === "dark" ? themeConfig.palette.textSecondaryLight : themeConfig.palette.textSecondaryDark,
      },
      custom: {
        accent: themeConfig.palette.accent,
        secondary: mode === "dark" ? themeConfig.palette.black :themeConfig.palette.light,
        primaryGreen:
          mode === "dark"
            ? themeConfig.palette.primary500
            : themeConfig.palette.primary700,
        secondaryGreen:
          mode === "dark"
            ? themeConfig.palette.primary100
            : themeConfig.palette.primary800,
        textGreen:
          mode === "dark"
            ? themeConfig.palette.primary800
            : themeConfig.palette.primary100,
        blackwhite:
          mode === "dark"
            ? themeConfig.palette.white
            : themeConfig.palette.black,
      },
    },
    typography: {
      fontFamily: themeConfig.typography.fontFamily,
      fontWeightBold: themeConfig.typography.titleWeight,
      fontWeightMedium: themeConfig.typography.subtitleWeight,
      fontWeightRegular: themeConfig.typography.bodyWeight,
    },
  });
