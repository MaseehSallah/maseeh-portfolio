
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const initialTheme =
      savedTheme === "dark" ? "dark" : "light";

    document.documentElement.setAttribute(
      "data-theme",
      initialTheme
    );

    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem("portfolio-theme", newTheme);

    setTheme(newTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      aria-pressed={theme === "dark"}
      title={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      className="relative flex h-10 w-[76px] shrink-0
        items-center rounded-full border border-border
        bg-surface-muted p-1 transition-colors duration-300"
    >
      <span
        className={`absolute left-1 top-1 h-8 w-8
          rounded-full bg-surface shadow-sm
          transition-transform duration-300
          motion-reduce:transition-none
          ${
            theme === "dark"
              ? "translate-x-9"
              : "translate-x-0"
          }`}
      />

      {/* Sun icon */}
      <span className="z-10 flex h-8 w-8 items-center justify-center text-text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
          <path d="m4.93 4.93 1.42 1.42m11.3 11.3 1.42 1.42" />
          <path d="m4.93 19.07 1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      </span>

      {/* Moon icon */}
      <span className="z-10 ml-1 flex h-8 w-8 items-center justify-center text-text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.9 13.35A9 9 0 0 1 10.65 3.1 9 9 0 1 0 20.9 13.35Z" />
        </svg>
      </span>
    </button>
  );
}
