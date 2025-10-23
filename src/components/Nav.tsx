'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${open ? 'nav-open' : ''}`}>
      <div className="nav-inner container">
        <Link className="brand" href="/" title="ShutterStory">
          {/* white logo (visible in dark theme) */}
          <Image src="/assets/logo/white-logo.png" alt="ShutterStory" className="logo logo-white" width={120} height={32} />
          {/* dark logo (visible in light theme) */}
          <Image src="/assets/logo/dark-logo.png" alt="ShutterStory" className="logo logo-dark" width={120} height={32} />
        </Link>

        <nav id="mainNav" className="main-nav" aria-label="Main navigation">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/gallery">Gallery</Link>
          <Link className="nav-link" href="/#about">About</Link>
          <Link className="nav-link" href="/#contact">Contact</Link>
        </nav>

        <div className="nav-controls">
          <ThemeToggle />
          <button
            id="menuBtn"
            className="hamburger"
            aria-expanded={open ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={() => setOpen(o => !o)}
          >☰</button>
        </div>
      </div>
    </header>
  );
}
