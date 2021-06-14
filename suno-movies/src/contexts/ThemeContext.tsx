import { createContext, ReactNode, useState, useContext } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

type ThemeContextData = {
  toggleTheme : () => void;
  theme: Theme;
}

type Theme = {

}

const ThemeContext = createContext({} as ThemeContextData)

export const ThemeProvider = ({children} : ThemeContextProps) => {
  const [theme, setTheme] = useState(1)
}

export const useTheme = () => useContext(ThemeContext)