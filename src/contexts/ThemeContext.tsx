import { createContext, useState } from "react";

export const ThemeContext = createContext({});

interface ThemeProviderProps {
    children: React.ReactNode
}

type ThemeName = 'dark' | 'light'

export const ThemeProvider = (({children}: ThemeProviderProps) => {

    const [ theme, setTheme] = useState<ThemeName>("dark")

    const toggleTheme = () => {
        setTheme((theme) => theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
})