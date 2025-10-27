import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Tooltip,
  CssBaseline,
  useMediaQuery,
  Grid,
  Snackbar,
  Alert,
  Paper,
  Stack,
} from "@mui/material";
import {
  LightModeRounded,
  DarkModeRounded,
  DownloadRounded,
  LinkedIn,
  GitHub,
  SendRounded,
  TranslateRounded,
  EmailRounded,
  ContentCopyRounded,
} from "@mui/icons-material";
import { FigmaLogoIcon } from "@phosphor-icons/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import profile from "../assets/profile.png";

//const AccentColor = "#50CF80";

const useResponsiveFontSize = (
  sizeDesktop: number,
  sizeTablet: number,
  sizeMobile: number
) => ({
  fontSize: {
    xs: `${sizeMobile}px`,
    sm: `${sizeTablet}px`,
    md: `${sizeDesktop}px`,
  },
});

export default function HomeSection() {
  // Estado del tema (oscuro / claro)
  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "dark"
  );

  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  // Definición del tema
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "#17171a" : "#F2F2F2",
          },
          text: {
            primary: mode === "dark" ? "#F5F5F5" : "#0D0D0D",
            secondary: mode === "dark" ? "#A9A9A9" : "#5C5C5C",
          },
        },
        typography: {
          fontFamily: "Inter, Roboto, system-ui, sans-serif",
        },
      }),
    [mode]
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("larry.rdevz13@gmail.com");
      setOpenSnackbar(true);
    } catch (e) {
      console.error("No se pudo copiar", e);
    }
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        {/* === NAVBAR SUPERIOR === */}
        <Box
          component="header"
          sx={{
            width: "100%",
            maxWidth: 1300,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 3, sm: 6 },
            py: 3,
          }}
        >
          {/* Logo */}
          <Typography
            sx={{
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "2px",
              fontSize: "32px",
            }}
          >
            <Box
              component="span"
              sx={{ color: mode === "dark" ? "#50CF80" : "#205333" }}
            >
              {"<"}
            </Box>
            <Box component="span" sx={{ color: "text.primary" }}>
              LR
            </Box>
            <Box
              component="span"
              sx={{ color: mode === "dark" ? "#50CF80" : "#205333" }}
            >
              {"/>"}
            </Box>
          </Typography>

          {/* Botones centrales */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Tooltip title="Cambiar tema">
              <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                sx={{
                  backgroundColor: "#50CF80",
                  color: "#0F0F0F",
                  "&:hover": { backgroundColor: "#40b86d" },
                  borderRadius: "8px",
                }}
              >
                {mode === "dark" ? <LightModeRounded /> : <DarkModeRounded />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Cambiar idioma">
              <IconButton
                sx={{
                  backgroundColor: "#50CF80",
                  color: "#0F0F0F",
                  "&:hover": { backgroundColor: "#40b86d" },
                  borderRadius: "8px",
                }}
              >
                <TranslateRounded />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Descargar CV */}
          <Tooltip title="Descargar CV">
            <Button
              variant="contained"
              startIcon={<DownloadRounded />}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.9rem",
                px: 2.5,
                py: 1,
                borderRadius: "8px",
                backgroundColor: "#50CF80",
                color: "#0F0F0F",
                "&:hover": { backgroundColor: "#40b86d" },
                boxShadow: "none",
              }}
            >
              Descargar CV
            </Button>
          </Tooltip>
        </Box>

        {/* === CONTENIDO PRINCIPAL === */}
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            maxWidth: 1300,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 3, sm: 6 },
            py: { xs: 4, md: 8 },
          }}
        >
          {/* Fondo degradado radial */}
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -40%)",
              width: "1800px",
              height: "1060px",
              background: `linear-gradient(to top, rgba(48, 124, 77, 0.5) 40%, rgba(23, 23, 26, 0.3) 70%)`,
              zIndex: 0,
            }}
          />

          {/* Grid principal */}
          <Grid
            container
            spacing={6}
            sx={{
              zIndex: 2,
              alignItems: "center",
              justifyContent: "center",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {/* Columna izquierda */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  display: "inline-block",
                  px: 2,
                  py: 1,
                  bgcolor:
                    mode === "dark"
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.03)",
                  borderRadius: 1.5,
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: mode === "dark" ? "#50CF80" : "#307C4D",
                    fontWeight: 700,
                  }}
                >
                  Hola, no soy un modelo de IA, soy
                </Typography>
              </Paper>

              <Typography
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  ...useResponsiveFontSize(76, 60, 48),
                  lineHeight: 1.1,
                }}
              >
                Larry Ariel
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: 1,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 125,
                    height: 6,
                    bgcolor: mode === "dark" ? "#50CF80" : "#307C4D",
                    borderRadius: 2,
                  }}
                />
                <Typography
                  sx={{ ...useResponsiveFontSize(48, 36, 26), fontWeight: 700 }}
                >
                  Rodríguez
                </Typography>
              </Box>

              {/* Email + redes */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 3 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor:
                      mode === "dark"
                        ? "rgba(255,255,255,0.04)"
                        : "rgba(0,0,0,0.04)",
                    borderRadius: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <EmailRounded sx={{ color: "text.primary" }} />
                  <Typography sx={{ color: "text.primary", fontWeight: 700 }}>
                    larry.rdevz13@gmail.com
                  </Typography>
                </Paper>

                <Tooltip title="Enviar correo">
                  <IconButton
                    sx={{
                      bgcolor:
                        mode === "dark"
                          ? "rgba(242, 242, 242,0.04)"
                          : "rgba23, 23, 26,0.04)",
                      color: "text.primary",
                      borderRadius: "8px",
                    }}
                  >
                    <SendRounded />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Copiar email">
                  <IconButton
                    onClick={handleCopyEmail}
                    sx={{
                      bgcolor:
                        mode === "dark"
                          ? "rgba(242, 242, 242,0.04)"
                          : "rgba23, 23, 26,0.04)",
                      color: "text.primary",
                      borderRadius: "8px",
                    }}
                  >
                    <ContentCopyRounded />
                  </IconButton>
                </Tooltip>
                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={3000}
                  onClose={() => setOpenSnackbar(false)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                  <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    📋 ¡Correo copiado al portapapeles!
                  </Alert>
                </Snackbar>
              </Stack>

              <Stack direction="row" spacing={3} sx={{ mt: 1 }}>
                <IconButton
                  href="#"
                  aria-label="figma"
                  sx={{
                    bgcolor: mode === "dark" ? "#DCF5E6" : "#205333",
                    color: mode === "dark" ? "#205333" : "#DCF5E6",
                    "&:hover": {
                      color: mode === "dark" ? "#DCF5E6" : "#205333",
                    },
                    borderRadius: "8px",
                  }}
                >
                  <FigmaLogoIcon weight="fill" />
                </IconButton>

                <IconButton
                  href="#"
                  aria-label="github"
                  sx={{
                    bgcolor: mode === "dark" ? "#DCF5E6" : "#205333",
                    color: mode === "dark" ? "#205333" : "#DCF5E6",
                    "&:hover": {
                      color: mode === "dark" ? "#DCF5E6" : "#205333",
                    },
                    borderRadius: "8px",
                  }}
                >
                  <GitHub />
                </IconButton>

                <IconButton
                  href="#"
                  aria-label="linkedin"
                  sx={{
                    bgcolor: mode === "dark" ? "#DCF5E6" : "#205333",
                    color: mode === "dark" ? "#205333" : "#DCF5E6",
                    "&:hover": {
                      color: mode === "dark" ? "#DCF5E6" : "#205333",
                    },

                    borderRadius: "8px",
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Stack>
            </Grid>

            {/* Columna central (foto) */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={profile}
                alt="Larry Ariel"
                sx={{
                  width: isMobile ? "220px" : "280px",
                  position: "relative",
                  zIndex: 2,
                  filter: "grayscale(100%)",
                }}
              />
            </Grid>

            {/* Columna derecha */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                sx={{
                  ...useResponsiveFontSize(48, 38, 24),
                  fontWeight: 700,
                  color: "text.primary",
                  textAlign: "right",
                }}
              >
                Desarrollador de Software
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  mt: 3,
                  p: 1.5,
                  bgcolor:
                    mode === "dark"
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.03)",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    ...useResponsiveFontSize(48, 38, 24),
                    fontWeight: 800,
                    color: mode === "dark" ? "#50CF80" : "#307C4D",
                    textAlign: "right",
                  }}
                >
                  Multiplataforma
                </Typography>
              </Paper>

              <Typography
                sx={{
                  mt: 3,
                  maxWidth: 420,
                  color: mode === "dark" ? "#D2D2D2" : "#0D0D0D",
                  textAlign: "right",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Más de 3 años de experiencia trabajando en el diseño y
                desarrollo de aplicaciones. Capaz de adaptarme a distintos
                entornos tecnológicos para crear soluciones escalables y
                funcionales.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
