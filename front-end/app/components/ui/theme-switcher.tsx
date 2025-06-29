import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Switch } from "~/components/ui/switch"; // <-- import Switch
import { Button } from "./button";

const themes = [
  { name: "Latte", className: "catppuccin-latte" },
  { name: "Frappe", className: "catppuccin-frappe" },
  { name: "Macchiato", className: "catppuccin-macchiato" },
  { name: "Mocha", className: "catppuccin-mocha" },
  { name: "caffeine", className: "caffeine" },
  { name: "", className: "caffeine-dark" },
];

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState("catppuccin-mocha");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme") || "catppuccin-mocha";
    setTheme(stored);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.remove(
      ...themes.map((t) => t.className)
    );
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          // className="px-3 py-1 rounded bg-muted text-muted-foreground hover:bg-accent transition"
          type="button"
          aria-label="Open theme switcher"
        >
          {theme}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Switch Theme</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          {themes.map((t) => (
            <div
              key={t.className}
              className="flex items-center justify-between gap-3 cursor-pointer"
              onClick={() => setTheme(t.className)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setTheme(t.className);
              }}
            >
              <span
                className={`text-base ${
                  theme === t.className
                    ? "font-semibold text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {t.name}
              </span>
              <Switch
                checked={theme === t.className}
                onCheckedChange={() => setTheme(t.className)}
                aria-label={`Switch to ${t.name} theme`}
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
