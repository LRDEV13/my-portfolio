import { IconButton } from "@mui/material";
import { LightModeRounded } from "@mui/icons-material";
import { DarkModeRounded } from "@mui/icons-material"; 

type Props = { mode: 'light' | 'dark'; onToggle: () => void }

export default function ThemeToggle({mode, onToggle}: Props){
    return(
        <IconButton aria-label="toggle theme" onClick={onToggle} size="large">
            {mode === 'light' ? <DarkModeRounded/> : <LightModeRounded/>}
        </IconButton>
    )
}