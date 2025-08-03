import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();


  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        flex items-center justify-center p-2 rounded-md
        transition
        ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"}
        hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-blue-500
        w-10 h-10
      `}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
