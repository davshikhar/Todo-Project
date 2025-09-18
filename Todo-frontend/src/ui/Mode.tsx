import { useEffect, useState } from "react";


function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function Mode() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const onToggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="group relative inline-flex h-7 w-15 items-center rounded-full bg-surface ring-1 ring-border transition-colors hover:opacity-90 dark:bg-surface/80"
    >
      <span
        className={`absolute left-0.5 h-5 w-5 rounded-full bg-primary transition-all duration-200 will-change-transform ${
          theme === "dark" ? "translate-x-[22px]" : "translate-x-0"
        }`}
      />
      <span className="sr-only">Switch theme</span>
    </button>
  );
}