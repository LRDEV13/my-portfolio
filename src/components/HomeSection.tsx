import { Box, useTheme } from "@mui/material";
import NavbarHeader from "./HomeComponents/NavbarHeader";
import LeftColumn from "./HomeComponents/LeftColumn";
import profile from "../assets/profile.png";
import RightColumn from "./HomeComponents/RightColumn";
import { GradientBackground } from "./HomeComponents/GradientBackground";

export default function HomeSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default,
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
          gap: { xs: 6, sm: 8, md: 10, lg: 2 },
          "@media (max-width:1332px)": {
            px: 4,
            gap: 1,
          },
        }}
      >
        <GradientBackground />

        {/* Columna Izquierda */}
        <Box
          sx={{
            flex: "1 1 35%",
            minWidth: { xs: "100%", lg: "320px" },
            zIndex: 2,
          }}
        >
          <LeftColumn />
        </Box>

        {/* Imagen Central */}
        <Box
          sx={{
            flex: "1 1 25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={profile}
            alt="Perfil"
            sx={{
              width: { xs: 160, sm: 240, md: 320, lg: 390, xl: 410 },
              height: "auto",
              position: "relative",
              zIndex: 2,
              filter: "grayscale(100%)",
              borderRadius: { xs: "50%", sm: "50%", md: "50%", lg: "0%" },
              mt: { xs: 2, sm: 3, md: 4, lg: 14 },
            }}
          />
        </Box>

        {/* Columna Derecha */}
        <Box
          sx={{
            flex: "1 1 40%",
            minWidth: "340px",
            display: "flex",
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
