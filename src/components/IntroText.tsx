import { Box, Paper, Typography, useTheme } from "@mui/material";
import { themeConfig } from "../theme/themeConfig";
import { fontSizeResponsive } from "../hooks/fontSizeResponsive";

export default function IntroText() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 4, md: 4, lg: 0, xl: 0 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "inline-block",
          textAlign: "left",
          px: 2,
          py: 1,
          bgcolor: isDarkMode
            ? "rgba(242,242,242,0.02)"
            : "rgba(23,23,26,0.04)",
          borderRadius: "8px",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.custom.primaryGreen,
            fontWeight: themeConfig.typography.bodyWeight,
            ...fontSizeResponsive(20, 18, 22, 20, 16),
          }}
        >
          Hola, no soy un modelo de IA, soy
        </Typography>
      </Paper>
      <Typography
        sx={{
          fontWeight: themeConfig.typography.titleWeight,
          ...fontSizeResponsive(66, 58, 68, 62, 24),
          color: theme.palette.custom.blackwhite,
          lineHeight: 1.1,
          whiteSpace: "nowrap",
        }}
      >
        Larry Ariel
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          mt: 1,
          mb: 2,
        }}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "center",
          lg: "flex-start",
        }}
      >
        <Box
          sx={{
            width: { xs: 90, sm: 110, md: 125, lg: 140, xl: 140 },
            height: 6,
            bgcolor: theme.palette.custom.primaryGreen,
            borderRadius: 2,
          }}
        />
        <Typography
          sx={{
            ...fontSizeResponsive(54, 44, 52, 46, 26),
            fontWeight: themeConfig.typography.subtitleWeight,
            color: theme.palette.custom.blackwhite,
          }}
        >
          Rodríguez
        </Typography>
      </Box>
    </Box>
  );
}
