"use client";

import GalleryPatternGrid from "@/components/GalleryPatternGrid";

export default function FarabiTishaClient() {
  return (
    <main className="container">
      {/* Holud */}
      <section className="wedding-section">
        <h2>Holud Ceremony</h2>
        <p className="muted">A night of colors, laughter, and blessings.</p>

        <GalleryPatternGrid
          basePath="/assets/weddings/farabi-tisha/holud/"
          count={62}                       // set to your real count to avoid 404s
          pattern="Holud Photo-{i}.jpg"    // must match exact filenames (case/spaces)
          caption="Holud"
        />
      </section>

      {/* Reception */}
      <section className="wedding-section">
        <h2>Bou Bhat (Reception)</h2>
        <p className="muted">A grand evening to celebrate love with family and friends.</p>

        <GalleryPatternGrid
          basePath="/assets/weddings/farabi-tisha/reception/"
          count={73}                           // set to your real count
          pattern="Reception Photo-{i}.jpg"    // exact filenames (case/spaces)
          caption="Reception"
        />
      </section>
    </main>
  );
}
