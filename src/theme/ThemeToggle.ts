import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode: 'light' | 'dark') => ({
    palette: {
        mode,
        primary: {
            main: '#50CF80'
        },
        background: {
            default: mode === 'dark' ? '#17171A' : '#F2F2F2',
            paper: mode === 'dark' ? '#222228' : '#E0E0E0'
        }
    }
})

export const buildTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode))