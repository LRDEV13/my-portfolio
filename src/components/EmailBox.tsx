import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ContentCopyRounded } from "@mui/icons-material";
import { SendRounded } from "@mui/icons-material";

type Props = { email: string };

export default function EmailBox({ email }: Props) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  const send = async () => {
    await copy();
    window.location.href = `mailto:${email}`;
  };

  return (
    <Box display="flex" gap={1} alignItems="center">
      <Button
        variant="contained"
        onClick={() => copy()}
        startIcon={<ContentCopyRounded />}
      >
        {email}
      </Button>
      <Button variant="outlined" onClick={send} startIcon={<SendRounded />}>
        Send
      </Button>
    </Box>
  );
}
