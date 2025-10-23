'use client';
import { useState } from 'react';

const albums = [
  {
    title: 'Album One',
    desc: 'Short description',
    href: '#',
    thumb: '/assets/feature1.jpg', // or a real cover
  },
  {
    title: 'Album Two',
    desc: 'Short description',
    href: '#',
    thumb: '/assets/feature2.jpg',
  },
];

export default function FeaturedAlbums() {
  const [idx, setIdx] = useState(0);
  const cur = albums[idx];

  const prev = () => setIdx((p) => (p - 1 + albums.length) % albums.length);
  const next = () => setIdx((p) => (p + 1) % albums.length);

  return (
    <section className="featured-albums">
      <div className="container">
        <header className="section-head">
          <h2>Featured Albums</h2>
          <div className="featured-controls">
            <button id="featPrev" className="small-btn" aria-label="Previous album" onClick={prev}>‹</button>
            <button id="featNext" className="small-btn" aria-label="Next album" onClick={next}>›</button>
            <a className="btn outline" href="/gallery" title="See all galleries">See all galleries</a>
          </div>
        </header>

        <div className="album-rotator" id="albumRotator" role="region" aria-live="polite">
          <article className="album-rotor-card" aria-hidden="false">
            <div className="rotor-thumb" style={{ backgroundImage: `url(${cur.thumb})` }} />
            <div className="rotor-meta">
              <h3>{cur.title}</h3>
              <p className="muted">{cur.desc}</p>
              <div className="rotor-actions">
                <a className="btn" href={cur.href}>View album</a>
                <a className="btn outline" href="/gallery">See all galleries</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
