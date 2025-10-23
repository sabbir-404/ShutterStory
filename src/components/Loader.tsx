'use client';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // mimic your old loader hiding after first paint / small delay
    const t = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div id="loader" className="loader" role="status" aria-live="polite" aria-hidden="false">
      <svg id="loaderLogo" viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#bbb" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="44" fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round"
          strokeDasharray="260" strokeDashoffset="260"></circle>
        <text x="50%" y="54%" textAnchor="middle" fontSize="20" fill="#fff" fontFamily="sans-serif">SS</text>
      </svg>
    </div>
  );
}
