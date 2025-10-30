import { Box, Typography, Paper, Stack, useTheme } from "@mui/material";
import { themeConfig } from "../../theme/themeConfig";
import { themeContext } from "../../theme/themeContext";
import { useContext } from "react";
import { fontSizeResponsive } from "../../hooks/fontSizeResponsive";
import EmailBox from "../EmailBox";
import SocialButtons from "../SocialButtons";

export default function LeftColumn() {
  const { mode } = useContext(themeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        textAlign: { xs: "center", lg: "left" },
        mb: { xs: 2, sm: 5, md: 6, lg: 10, xl:16 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "inline-block",
          px: 2,
          py: 1,
          bgcolor:
            mode === "dark" ? "rgba(242,242,242,0.02)" : "rgba(23,23,26,0.04)",
          borderRadius: "8px",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.custom.primaryGreen,
            fontWeight: themeConfig.typography.bodyWeight,
            ...fontSizeResponsive(20, 18, 18, 16, 16),
          }}
        >
          Hola, no soy un modelo de IA, soy
        </Typography>
      </Paper>

      <Typography
        sx={{
          fontWeight: themeConfig.typography.titleWeight,
          ...fontSizeResponsive(66, 58, 50, 50, 24),
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
      >
        <Box
          sx={{
            width: 140,
            height: 6,
            bgcolor: theme.palette.custom.primaryGreen,
            borderRadius: 2,
          }}
        />
        <Typography
          sx={{
            ...fontSizeResponsive(54, 44, 36, 26, 26),
            fontWeight: themeConfig.typography.subtitleWeight,
            color: theme.palette.custom.blackwhite,
          }}
        >
          Rodríguez
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        justifyContent={{ xs: "center", lg: "flex-start" }}
      >
        <EmailBox email="larry.rdevz@outlook.com" />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent={{ xs: "center", lg: "flex-start" }}
        sx={{ mt: 3 }}
      >
        <SocialButtons />
      </Stack>
    </Box>
  );
}
