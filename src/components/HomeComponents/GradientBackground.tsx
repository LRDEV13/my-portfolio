import { Box, useTheme } from "@mui/material";
import { themeConfig } from "../../theme/themeConfig";

export const GradientBackground = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        background: isDark
          ? themeConfig.gradient.dark
          : themeConfig.gradient.light,
        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -40%)",
        width: "1800px",
        height: "1060px",
        zIndex: 0,
      }}
    >
    </Box>
  );
};
