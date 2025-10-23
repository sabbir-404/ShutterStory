import Image from "next/image";
import dynamic from "next/dynamic";

const GalleryPatternGrid = dynamic(() => import("@/components/GalleryPatternGrid"), { ssr: false });

export const metadata = { title: "Farabi & Tisha Wedding — ShutterStory" };

export default function FarabiTishaPage() {
  return (
    <>
      {/* HERO HEADER (uses your thumbnail as background) */}
      <section
        className="hero-banner"
        style={{ backgroundImage: "url('/assets/weddings/farabi-tisha/thumbnail.jpg')" }}
      >
        <div className="overlay">
          <h1>Farabi &amp; Tisha</h1>
          <p>&quot;Two souls, one journey, a lifetime of love.&quot;</p>
        </div>
      </section>

      <main className="container">
        {/* Holud */}
        <section className="wedding-section">
          <h2>Holud Ceremony</h2>
          <p className="muted">A night of colors, laughter, and blessings.</p>

          <GalleryPatternGrid
            basePath="/assets/weddings/farabi-tisha/holud/"
            count={62} // change to your real number if needed
            pattern="Holud Photo-{i}.jpg"
            caption="Holud"
          />
        </section>

        {/* Reception / Bou Bhat */}
        <section className="wedding-section">
          <h2>Bou Bhat (Reception)</h2>
          <p className="muted">A grand evening to celebrate love with family and friends.</p>

          <GalleryPatternGrid
            basePath="/assets/weddings/farabi-tisha/reception/"
            count={73} // change to your real number if needed
            pattern="Reception Photo-{i}.jpg"
            caption="Reception"
          />
        </section>
      </main>

      {/* Optional: simple lightbox later if you want (your static HTML had it) */}
    </>
  );
}
