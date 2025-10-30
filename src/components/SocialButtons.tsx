import { IconButton, Tooltip, Stack, useTheme } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { FigmaLogoIcon } from "@phosphor-icons/react";
import { useContext } from "react";
import { themeContext } from "../theme/themeContext";

export default function SocialButtons() {
  const open = (url: string) => window.open(url, "_blank");
  const theme = useTheme();
  const { mode } = useContext(themeContext);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Figma">
          <IconButton
            onClick={() => open("https://www.figma.com/your-profile")}
            sx={{
              bgcolor: theme.palette.custom.secondaryGreen,
              color: theme.palette.custom.textGreen,
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": {
                color: theme.palette.custom.secondaryGreen,
                bgcolor:
                  mode === "dark"
                    ? "rgba(0, 0, 0, 0.2)"
                    : "rgba(255, 255, 255, 0.3)",
              },
            }}
          >
            <FigmaLogoIcon weight="fill" size={27}/>
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton
            onClick={() => open("https://github.com/yourusername")}
            sx={{
              bgcolor: theme.palette.custom.secondaryGreen,
              color: theme.palette.custom.textGreen,
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": {
                color: theme.palette.custom.secondaryGreen,
                bgcolor:
                  mode === "dark"
                    ? "rgba(0, 0, 0, 0.2)"
                    : "rgba(255, 255, 255, 0.3)",
              },
            }}
          >
            <GitHub sx={{ width: "27px", height: "27px" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            onClick={() => open("https://www.linkedin.com/in/yourprofile")}
            sx={{
              bgcolor: theme.palette.custom.secondaryGreen,
              color: theme.palette.custom.textGreen,
              borderRadius: "8px",
              boxShadow: 3,
              "&:hover": {
                color: theme.palette.custom.secondaryGreen,
                bgcolor:
                  mode === "dark"
                    ? "rgba(0, 0, 0, 0.2)"
                    : "rgba(255, 255, 255, 0.3)",
              },
            }}
          >
            <LinkedIn sx={{ width: "27px", height: "27px" }} />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
}
