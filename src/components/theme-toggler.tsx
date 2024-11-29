"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a skeleton or placeholder to avoid mismatches
    return <div className="h-[2rem] w-[2rem] bg-gray-200 rounded-full" />;
  }

  const isDarkMode = resolvedTheme === "dark";

  const handleThemeToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      onClick={handleThemeToggle}
      className="p-2 transition-all duration-300 ease-in-out"
    >
      {isDarkMode ? (
        <Sun
          key="sun"
          className="h-[1.5rem] w-[1.5rem] text-yellow-500 transition-transform duration-300 ease-in-out rotate-0"
        />
      ) : (
        <Moon
          key="moon"
          className="h-[1.5rem] w-[1.5rem] text-yellow-500 transition-transform duration-300 ease-in-out rotate-0"
        />
      )}
    </Button>
  );
}
