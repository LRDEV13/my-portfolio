import IconButton from "@mui/material/Button";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { InsertLinkRounded } from "@mui/icons-material";

export default function SocialButtons() {
  const open = (url: string) => window.open(url, "_blank");
  return (
    <div>
      <IconButton onClick={() => open("https://www.figma.com/your-profile")}>
        <InsertLinkRounded />
      </IconButton>
      <IconButton
        onClick={() => open("https://www.linkedin.com/in/yourprofile")}
      >
        <LinkedIn />
      </IconButton>
      <IconButton onClick={() => open("https://github.com/yourusername")}>
        <GitHub />
      </IconButton>
    </div>
  );
}
