import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Tooltip,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import TranslateIcon from "@mui/icons-material/Translate";
import DownloadIcon from "@mui/icons-material/Download";
import TelegramIcon from "@mui/icons-material/Telegram";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "../assets/profile.png";

const PRIMARY_GREEN = "#50CF80";

const useResponsiveFont = (
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
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: PRIMARY_GREEN,
      },
      background: {
        default: mode === "dark" ? "#0f1112" : "#ffffff",
        paper: mode === "dark" ? "#111214" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#111827",
      },
    },
    typography: {
      fontFamily: "Inter, Roboto, Arial, sans-serif",
    },
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("larry.rdevz13@gmail.com");
      // small visual feedback could be added (toast/snackbar)
    } catch (e) {
      console.error("No se pudo copiar", e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: "100vh",
          px: { xs: 3, md: 8 },
          py: { xs: 4, md: 6 },
          overflow: "hidden",
          background:
            mode === "dark"
              ? `radial-gradient(60% 50% at 50% 75%, rgba(80,207,128,0.18), transparent 30%), linear-gradient(180deg, #0b0b0c 0%, #131314 25%, rgba(0,0,0,0.6) 60%)`
              : `linear-gradient(180deg, #f7faf9 0%, #e9f7ee 30%, rgba(80,207,128,0.08) 70%)`,
          color: "text.primary",
        }}
      >
        {/* Top bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: PRIMARY_GREEN, fontWeight: 700 }}>
              &lt;LR/&gt;
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="Modo oscuro">
              <IconButton
                onClick={() =>
                  setMode((m) => (m === "dark" ? "light" : "dark"))
                }
                size="large"
                sx={{
                  bgcolor:
                    mode === "dark"
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(0,0,0,0.04)",
                  mr: 1,
                }}
              >
                <Brightness4Icon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Idioma">
              <IconButton
                size="large"
                sx={{
                  bgcolor:
                    mode === "dark"
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(0,0,0,0.04)",
                }}
              >
                <TranslateIcon />
              </IconButton>
            </Tooltip>

            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                bgcolor: PRIMARY_GREEN,
                color: "#041014",
                fontWeight: 700,
                textTransform: "none",
                borderRadius: 2,
                px: 2,
                py: 1,
                boxShadow: "0 6px 18px rgba(80,207,128,0.12)",
                ml: 1,
                "&:hover": { bgcolor: PRIMARY_GREEN },
              }}
              href="/cv.pdf"
              download
            >
              Descargar CV
            </Button>
          </Stack>
        </Box>

        {/* Main area */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 8 },
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Left column */}
          <Box sx={{ flex: 1, maxWidth: 720 }}>
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
                color: PRIMARY_GREEN,
                borderRadius: 1.5,
                mb: 2,
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>
                Hola, no soy un modelo de IA, soy
              </Typography>
            </Paper>

            <Typography
              component="h1"
              sx={{
                ...useResponsiveFont(96, 72, 44),
                fontWeight: 800,
                lineHeight: 1,
                color: "text.primary",
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
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 6,
                  bgcolor: PRIMARY_GREEN,
                  borderRadius: 2,
                }}
              />
              <Typography
                sx={{ ...useResponsiveFont(40, 34, 26), fontWeight: 700 }}
              >
                Rodríguez
              </Typography>
            </Box>

            {/* Contact row */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 2 }}
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
                <EmailIcon sx={{ color: PRIMARY_GREEN }} />
                <Typography sx={{ color: "text.primary", fontWeight: 600 }}>
                  larry.rdevz13@gmail.com
                </Typography>
              </Paper>

              <Tooltip title="Telegram">
                <IconButton
                  sx={{
                    bgcolor:
                      mode === "dark"
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.03)",
                    color: "text.primary",
                  }}
                >
                  <TelegramIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Copiar email">
                <IconButton
                  onClick={handleCopyEmail}
                  sx={{
                    bgcolor:
                      mode === "dark"
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.03)",
                    color: "text.primary",
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </Stack>

            {/* Social icons */}
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <IconButton
                href="#"
                aria-label="github"
                sx={{
                  bgcolor:
                    mode === "dark"
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.03)",
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="#"
                aria-label="linkedin"
                sx={{
                  bgcolor:
                    mode === "dark"
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.03)",
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Right column */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pl: { md: 6 },
            }}
          >
            <Typography
              sx={{
                ...useResponsiveFont(48, 38, 24),
                fontWeight: 700,
                color: "text.primary",
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
                  ...useResponsiveFont(46, 36, 24),
                  fontWeight: 800,
                  color: PRIMARY_GREEN,
                }}
              >
                Multiplataforma
              </Typography>
            </Paper>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 420,
                color: mode === "dark" ? "rgba(255,255,255,0.86)" : "#374151",
                textAlign: "left",
              }}
            >
              Más de 3 años de experiencia trabajando en el diseño y desarrollo
              de aplicaciones. Capaz de adaptarme a distintos entornos
              tecnológicos para crear soluciones escalables y funcionales.
            </Typography>
          </Box>

          {/* Center avatar image (absolutely positioned to overlap the gradient) */}
          <Box
            component="img"
            src={profile}
            alt="profile"
            sx={{
              width: { xs: 220, sm: 300, md: 420 },
              height: "auto",
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: `0 20px 60px rgba(0,0,0,0.6)`,
              position: "absolute",
              right: { xs: 24, md: "25%" },
              top: { xs: "35%", md: "28%" },
              transform: "translateY(-10%)",
              filter:
                mode === "dark" ? "grayscale(100%) contrast(110%)" : "none",
            }}
          />
        </Box>

        {/* small decorative elements bottom-left */}
        <Box sx={{ position: "absolute", left: 40, bottom: 40 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Paper
              sx={{
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >
              <GitHubIcon />
            </Paper>
            <Paper
              sx={{
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >
              <LinkedInIcon />
            </Paper>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
