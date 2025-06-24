import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [currentTheme, setCurrentTheme] = useState(theme)

    const toggleTheme = () => {
        const nextTheme = currentTheme === "light" ? "dark" : "light"
        setCurrentTheme(nextTheme)
        setTheme(nextTheme)
    }

    return (
        <div className="flex flex-row-reverse">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    )
}