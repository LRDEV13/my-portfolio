import {
  Stack,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ContentCopyRounded,
  EmailRounded,
  SendRounded,
} from "@mui/icons-material";
import { useState, useContext } from "react";
import { themeContext } from "../theme/themeContext";
import { SnackbarAlert } from "./SnackbarAlert";
import { fontSizeResponsive } from "../hooks/fontSizeResponsive";

type Props = { email: string };

export default function EmailBox({ email }: Props) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const theme = useTheme();
  const { mode } = useContext(themeContext);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setSnackbarMessage("Correo copiado al portapapeles");
      setOpenSnackbar(true);
    } catch (e) {
      console.error("No se pudo copiar", e);
      setSnackbarMessage("Error al copiar el correo");
      setOpenSnackbar(true);
    }
  };

  const sendEmail = async () => {
    await copyEmail();
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "center",
          lg: "left",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            px: 2,
            py: 1,
            bgcolor:
              mode === "dark"
                ? "rgba(242,242,242,0.05)"
                : "rgba(23,23,26,0.09)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: 1,
            boxShadow: 3,
          }}
        >
          <EmailRounded sx={{ color: theme.palette.custom.blackwhite }} />
          <Typography
            sx={{
              color: theme.palette.custom.blackwhite,
              fontWeight: 600,
              ...fontSizeResponsive(20, 18, 24, 24, 16),
            }}
          >
            {email}
          </Typography>
        </Paper>

        <Tooltip title="Enviar correo">
          <IconButton
            onClick={sendEmail}
            sx={{
              bgcolor:
                mode === "dark"
                  ? "rgba(242,242,242,0.05)"
                  : "rgba(23,23,26,0.09)",
              color: theme.palette.custom.blackwhite,
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": {
                bgcolor:
                  mode === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <SendRounded
              sx={{
                width: { xs: "32px", sm: "36px", md: "36px", lg: "27px" },
                height: { xs: "32px", sm: "36px", md: "36px", lg: "27px" },
              }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Copiar correo">
          <IconButton
            onClick={copyEmail}
            sx={{
              bgcolor:
                mode === "dark"
                  ? "rgba(242, 242, 242,0.05)"
                  : "rgba(23, 23, 26,0.09)",
              color: theme.palette.custom.blackwhite,
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": {
                bgcolor:
                  mode === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <ContentCopyRounded
              sx={{
                width: { xs: "32px", sm: "36px", md: "36px", lg: "27px" },
                height: { xs: "32px", sm: "36px", md: "36px", lg: "27px" },
              }}
            />
          </IconButton>
        </Tooltip>
      </Stack>

      <SnackbarAlert
        open={openSnackbar}
        message={snackbarMessage}
        type="success"
        onClose={() => setOpenSnackbar(false)}
      />
    </>
  );
}
