import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";
import NavbarHeader from "./HomeComponents/NavbarHeader";
import LeftColumn from "./HomeComponents/LeftColumn";
import profile from "../assets/profile.png";
import RightColumn from "./HomeComponents/RightColumn";
import { themeConfig } from "../theme/themeConfig";
import { fontSizeResponsive } from "../hooks/fontSizeResponsive";
import { useContext } from "react";
import { themeContext } from "../theme/themeContext";

export default function HomeSection() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const { mode } = useContext(themeContext);
  const isTablet = useMediaQuery("(max-width: 1199px)");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: {
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "space-between",
        },
        background: isDarkMode
          ? themeConfig.gradient.dark
          : themeConfig.gradient.light,
        backgroundColor: theme.palette.background.default,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* === NAVBAR === */}
      <NavbarHeader />

      {/* === CONTENIDO PRINCIPAL === */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          width: "100%",
          maxWidth: "1400px",
          px: { xs: 3, sm: 6, md: 8, lg: 4 },
          pt: { xs: 3, sm: 6, md: 10, lg: 0 },
          gap: { xs: 4, sm: 6, md: 8, lg: 2 },
          "@media (max-width:1332px)": {
            px: 4,
            gap: 1,
          },
        }}
      >
        {/* Columna Izquierda */}
        {!isTablet && (
          <Box
            sx={{
              flex: "1 1 35%",
              minWidth: { xs: "100%", lg: "320px" },
              order: { xs: 2, sm: 2, md: 2, lg: 1, xl: 1 },
            }}
          >
            <LeftColumn />
          </Box>
        )}

        {/* Imagen Central */}
        <Box
          sx={{
            flex: "1 1 25%",
            display: "flex",
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, sm: 1, md: 1, lg: 2, xl: 2 },
            mt: isTablet ? 0 : 14,
            mb: isTablet ? 4 : 0,
            gap: isTablet ? 8 : 0,
          }}
        >
          <Box
            component="img"
            src={profile}
            alt="Perfil"
            sx={{
              width: { xs: 160, sm: 220, md: 320, lg: 390, xl: 410 },
              height: { xs: 160, sm: 220, md: 320, lg: 390, xl: 410 },
              position: "relative",
              filter: "grayscale(100%)",
              borderRadius: { xs: "14px", sm: "14px", md: "14px", lg: "0%" },
              boxShadow: isTablet
                ? isDarkMode
                  ? "0 22px 50px rgba(0, 0, 0, 0.6)"
                  : "0 22px 50px rgba(23, 23, 26, 0.3)"
                : 0,
              objectFit: "cover",
            }}
          />

          {isTablet && (
            <Box
              sx={{
                mb: { xs: 2, sm: -4, md: -4, lg: 10, xl: 14 },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  display: "inline-block",
                  textAlign: "left",
                  px: 2,
                  py: 1,
                  bgcolor:
                    mode === "dark"
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
                  mb: 2,
                }}
              >
                Larry Ariel
              </Typography>

              <Box
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  mt: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 95, sm: 110, md: 125, lg: 140, xl: 140 },
                    height: 6,
                    bgcolor: theme.palette.custom.primaryGreen,
                    borderRadius: 2,
                  }}
                />
                <Typography
                  sx={{
                    ...fontSizeResponsive(54, 44, 52, 42, 26),
                    fontWeight: themeConfig.typography.subtitleWeight,
                    color: theme.palette.custom.blackwhite,
                  }}
                >
                  Rodríguez
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        {/* Columna Derecha */}
        <Box
          sx={{
            flex: "1 1 40%",
            minWidth: "340px",
            display: "flex",
            order: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 },
            justifyContent: { xs: "center", lg: "flex-end" },
            "@media (max-width:1332px)": {
              minWidth: "300px",
            },
          }}
        >
          <RightColumn />
        </Box>
      </Box>
    </Box>
  );
}
