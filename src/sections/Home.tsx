import { Box, useTheme, useMediaQuery } from "@mui/material";
import LeftColumn from "../components/LeftColumn";
import profile from "../assets/profile.png";
import RightColumn from "../components/RightColumn";
import { themeConfig } from "../theme/themeConfig";
import IntroText from "../components/IntroText";

export default function Home() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const isTablet = useMediaQuery("(max-width: 1199px)");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {
          xs: "calc(100vh - 80.8px)",
          sm: "calc(100vh - 83.2px)",
          md: "calc(100vh - 89.2px)",
          lg: "calc(100vh - 83.2px)",
        },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: {
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "flex-end",
        },
        flexGrow: 1,
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
          pt: { xs: 0, sm: 3, md: 12, lg: 0 },
          pb: { xs: 0, sm: 3, md: 12, lg: 0 },
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

          {isTablet && <IntroText />}
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
