'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Slide = { src: string; alt?: string };

export default function HeroSlider({
  slides,
  captionTitle,
  captionSubtitle,
}: {
  slides: Slide[];
  captionTitle: string;
  captionSubtitle: string;
}) {
  const [i, setI] = useState(0);

  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setI((p) => (p + 1) % slides.length);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="slider" id="heroSlider" aria-roledescription="carousel">
        {slides.map((s, idx) => (
          <div
            key={s.src}
            className={`slide ${idx === i ? 'is-active' : ''}`}
            data-index={idx}
            role="group"
            aria-roledescription="slide"
          >
            <Image className="slide-img" src={s.src} alt={s.alt || `Slide ${idx+1}`} fill priority={idx===0} />
          </div>
        ))}

        <button className="slider-btn prev" data-action="prev" aria-label="Previous slide" onClick={prev}>‹</button>
        <button className="slider-btn next" data-action="next" aria-label="Next slide" onClick={next}>›</button>

        <div className="dots" id="heroDots" aria-hidden="false">
          {slides.map((_, d) => (
            <button
              key={d}
              className={`dot ${d === i ? 'active' : ''}`}
              aria-label={`Go to slide ${d + 1}`}
              onClick={() => setI(d)}
            />
          ))}
        </div>

        <div className="hero-overlay">
          <div className="hero-caption container">
            <h1>{captionTitle}</h1>
            <p className="muted" dangerouslySetInnerHTML={{ __html: captionSubtitle }} />
          </div>
        </div>
      </div>
    </section>
  );
}
