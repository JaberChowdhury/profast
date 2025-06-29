"use client";

import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Switch } from "~/components/ui/switch";
import { Button } from "./button";
import { motion } from "motion/react";

const themes = [
  { name: "Latte", className: "catppuccin-latte" },
  { name: "Frappe", className: "catppuccin-frappe" },
  { name: "Macchiato", className: "catppuccin-macchiato" },
  { name: "Mocha", className: "catppuccin-mocha" },
  { name: "catppuccin", className: "catppuccin" },
  { name: "caffeine", className: "caffeine" },
  { name: "catppuccin-dark", className: "catppuccin-dark" },
  { name: "caffeine-dark", className: "caffeine-dark" },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState("catppuccin-latte");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme") || "catppuccin-latte";
    setTheme(stored);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.remove(
      ...themes.map((t) => t.className),
    );
    document.documentElement.classList.add(theme);
    localStorage.getItem("theme") == "" && localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" aria-label="Open theme switcher">
          {theme}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Switch Theme</DialogTitle>
        </DialogHeader>

        <motion.div
          className="flex flex-col gap-3 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {themes.map((t) => (
            <motion.div
              key={t.className}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
