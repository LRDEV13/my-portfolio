import { createContext } from "react";

export interface ThemeContextType {
  mode: "light" | "dark";
  toggleMode: () => void;
}

export const themeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggleMode: () => {},
});