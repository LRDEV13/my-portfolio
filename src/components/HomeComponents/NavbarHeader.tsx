import { useContext } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import {
  LightModeRounded,
  DarkModeRounded,
  TranslateRounded,
  DownloadRounded,
} from "@mui/icons-material";
import { themeContext } from "../../theme/themeContext";
import { themeConfig } from "../../theme/themeConfig";
import { fontSizeResponsive } from "../../hooks/fontSizeResponsive";

export default function NavbarHeader() {
  const { mode, toggleMode } = useContext(themeContext);
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        maxWidth: 1400,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 3, sm: 6, md: 8, lg: 4 },
        py: 3,
      }}
    >
      {/* Logo */}
      <Typography
        sx={{
          fontWeight: themeConfig.typography.titleWeight,
          display: "flex",
          alignItems: "center",
          ...fontSizeResponsive(36, 32, 36, 32,20),
        }}
      >
        <Box
          component="span"
          sx={{ color: theme.palette.custom.primaryGreen, pr: "4px" }}
        >
          {"<"}
        </Box>
        <Box component="span" sx={{ color: theme.palette.text.primary }}>
          LR
        </Box>
        <Box
          component="span"
          sx={{ color: theme.palette.custom.primaryGreen, pl: "8px" }}
        >
          {"/>"}
        </Box>
      </Typography>

      {/* Botones centrales */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
        <Tooltip title="Cambiar tema">
          <IconButton
            onClick={toggleMode}
            sx={{
              backgroundColor: theme.palette.custom.secondaryGreen,
              color: theme.palette.custom.textGreen,
              "&:hover": {
                color: theme.palette.custom.secondaryGreen,
                bgcolor:
                  mode === "dark"
                    ? "rgba(0, 0, 0, 0.2)"
                    : "rgba(255, 255, 255, 0.3)",
              },
              borderRadius: "8px",
            }}
          >
            {mode === "dark" ? <LightModeRounded /> : <DarkModeRounded />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Cambiar idioma">
          <IconButton
            sx={{
              bgcolor: theme.palette.custom.secondaryGreen,
              color: theme.palette.custom.textGreen,
              "&:hover": {
                color: theme.palette.custom.secondaryGreen,
                bgcolor:
                  mode === "dark"
                    ? "rgba(0, 0, 0, 0.2)"
                    : "rgba(255, 255, 255, 0.3)",
              },
              borderRadius: "8px",
            }}
          >
            <TranslateRounded />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Botón CV */}
      <Button
        variant="contained"
        startIcon={<DownloadRounded />}
        sx={{
          textTransform: "none",
          fontWeight: 700,
          fontSize: "1rem",
          px: 3,
          py: 1.1,
          borderRadius: "10px",
          backgroundColor: theme.palette.custom.primaryGreen,
          color: theme.palette.custom.secondary,
          "&:hover": {
            backgroundColor:
              mode === "dark"
                ? themeConfig.palette.primary400
                : themeConfig.palette.primary600,
          },
          boxShadow: "none",
        }}
      >
        Descargar CV
      </Button>
    </Box>
  );
}
