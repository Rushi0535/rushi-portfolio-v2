"use client";

import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@/lib/icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex w-full items-center justify-between gap-2 rounded-card border border-border px-3 py-2.5 font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
    >
      <span className="flex items-center gap-2">
        {isDark ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
        {isDark ? "Dark mode" : "Light mode"}
      </span>
      <span
        className={cn(
          "flex h-5 w-9 items-center rounded-full border border-border p-0.5 transition-colors",
          isDark ? "justify-end bg-accent" : "justify-start bg-border"
        )}
      >
        <span className="h-3.5 w-3.5 rounded-full bg-bg-elevated" />
      </span>
    </button>
  );
}
