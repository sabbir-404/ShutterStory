'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const body = document.body;
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      id="themeToggle"
      className="theme-toggle"
      aria-pressed={!isDark ? 'true' : 'false'}
      title="Toggle light/dark theme"
      onClick={() => setIsDark(d => !d)}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
