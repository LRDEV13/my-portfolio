import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";
import { themeConfig } from "../theme/themeConfig";
import { themeContext } from "../theme/themeContext";
import { useContext } from "react";
import { fontSizeResponsive } from "../hooks/fontSizeResponsive";
import EmailBox from "./EmailBox";
import SocialButtons from "./SocialButtons";

export default function RightColumn() {
  const { mode } = useContext(themeContext);
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width: 1199px)");

  return (
    <Box
      sx={{
        flex: 3,
        textAlign: { xs: "center", lg: "right" },
        mt: { lg: 3 },
      }}
    >
      <Typography
        sx={{
          fontWeight: themeConfig.typography.subtitleWeight,
          ...fontSizeResponsive(44, 38, 54, 50, 22),
          color: theme.palette.custom.blackwhite,
          whiteSpace: "nowrap",
          mb: { xs: 2, sm: 4, md: 4, lg: 2 },
        }}
      >
        Desarrollador de Software
      </Typography>

      <Paper
        elevation={0}
        sx={{
          display: "inline-block",
          px: 2,
          bgcolor:
            mode === "dark" ? "rgba(242,242,242,0.03)" : "rgba(23,23,26,0.06)",
          borderRadius: "8px",
          textAlign: { xs: "center", lg: "right" },
        }}
      >
        <Typography
          sx={{
            ...fontSizeResponsive(50, 46, 68, 54, 26),
            fontWeight: themeConfig.typography.titleWeight,
            color: theme.palette.custom.primaryGreen,
          }}
        >
          Multiplataforma
        </Typography>
      </Paper>

      <Typography
        sx={{
          ...fontSizeResponsive(20, 18, 30, 26, 16),
          lineHeight: 1.5,
          fontWeight: themeConfig.typography.bodyWeight,
          color: theme.palette.custom.blackwhite,
          mt: 5,
          mb: 5,
          pl: { xs: 4, sm: 4, md: 4, lg: 14, xl: 14 },
          pr: { xs: 4, sm: 4, md: 4, lg: 0, xl: 0 },
          textAlign: { xs: "left", lg: "right" },
          whiteSpace: "normal",
        }}
      >
        Más de 3 años de experiencia trabajando en el diseño y desarrollo de
        aplicaciones. Capaz de adaptarme a distintos entornos tecnológicos para
        crear soluciones escalables y funcionales.
      </Typography>

      {isTablet && (
        <Box
          sx={{ textAlign: "center" }}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
        >
          <EmailBox email="larry.rdevz@outlook.com" />
          <Box
            sx={{ pt: 5 }}
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            }}
          >
            <SocialButtons />
          </Box>
        </Box>
      )}
    </Box>
  );
}
