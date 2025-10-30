import { Snackbar, Alert } from "@mui/material";

interface SnackbarAlertProps {
  open: boolean;
  message: string;
  type?: "success" | "info";
  onClose: () => void;
}

export const SnackbarAlert = ({
  open,
  message,
  type = "success",
  onClose,
}: SnackbarAlertProps) => (
  <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  >
    <Alert
      onClose={onClose}
      severity={type}
      variant="filled"
      sx={{ width: "100%" }}
    >
      {message}
    </Alert>
  </Snackbar>
);
