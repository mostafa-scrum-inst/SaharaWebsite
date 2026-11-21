"use client";

import { useEffect, useState } from "react";
import { DEFAULT_THEME, STORAGE_KEY, THEMES } from "../lib/themes";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current) setTheme(current);
  }, []);

  const choose = (id) => {
    setTheme(id);
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch (e) {}
  };

  return (
    <div className="theme-switcher" role="group" aria-label="Design direction">
      <span className="ts-label">Design</span>
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          aria-pressed={theme === t.id}
          title={`${t.letter} · ${t.name}`}
          onClick={() => choose(t.id)}
        >
          <span
            className="ts-swatch"
            style={{
              background: `linear-gradient(135deg, ${t.swatch[0]} 50%, ${t.swatch[1]} 50%)`,
            }}
          />
          <span>
            {t.letter}
            <span className="ts-name"> · {t.name}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
