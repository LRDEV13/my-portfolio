import { Box, Typography, Paper, useTheme } from "@mui/material";
import { themeConfig } from "../../theme/themeConfig";
import { themeContext } from "../../theme/themeContext";
import { useContext } from "react";
import { fontSizeResponsive } from "../../hooks/fontSizeResponsive";

export default function RightColumn() {
  const { mode } = useContext(themeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 3,
        textAlign: { xs: "center", lg: "right" },
        zIndex: 2,
        mt:4
      }}
    >
      <Typography
        sx={{
          fontWeight: themeConfig.typography.subtitleWeight,
          ...fontSizeResponsive(44, 38, 32, 26, 22),
          color: theme.palette.custom.blackwhite,
          whiteSpace: "nowrap",
          mb: 2,
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
            mode === "dark" ? "rgba(242,242,242,0.03)" : "rgba(23,23,26,0.03)",
          borderRadius: "8px",
          textAlign: { xs: "center", lg: "right" },
        }}
      >
        <Typography
          sx={{
            ...fontSizeResponsive(50, 46, 38, 32, 26),
            fontWeight: themeConfig.typography.titleWeight,
            color: theme.palette.custom.primaryGreen,
          }}
        >
          Multiplataforma
        </Typography>
      </Paper>

      <Typography
        sx={{
          ...fontSizeResponsive(20, 18, 18, 18, 16),
          lineHeight: 1.5,
          fontWeight: themeConfig.typography.bodyWeight,
          color: theme.palette.custom.blackwhite,
          mt: 3,
          pl:{lg:14, xl:14},
          textAlign: { xs: "left", lg: "right" },
          whiteSpace:"normal",
        }}
      >
        Más de 3 años de experiencia trabajando en el diseño y desarrollo de
        aplicaciones. 
        <br/>
        Capaz de adaptarme a distintos entornos tecnológicos para
        crear soluciones escalables y funcionales.
      </Typography>
    </Box>
  );
}
